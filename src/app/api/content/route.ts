import { NextResponse } from "next/server";
import { initialContent, SiteContent } from "@/data/initialContent";

// In-memory cache for fallback when GitHub API is not configured locally
let inMemoryContent: SiteContent = initialContent;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pat = searchParams.get("pat") || process.env.GITHUB_PAT || process.env.NEXT_PUBLIC_GITHUB_PAT;
  const owner = searchParams.get("owner") || process.env.GITHUB_OWNER || process.env.NEXT_PUBLIC_GITHUB_OWNER;
  const repo = searchParams.get("repo") || process.env.GITHUB_REPO || process.env.NEXT_PUBLIC_GITHUB_REPO;
  const branch = searchParams.get("branch") || process.env.GITHUB_BRANCH || process.env.NEXT_PUBLIC_GITHUB_BRANCH || "main";
  const path = searchParams.get("path") || process.env.GITHUB_PATH || process.env.NEXT_PUBLIC_GITHUB_PATH || "content.json";

  if (pat && owner && repo) {
    try {
      const ghUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
      const res = await fetch(ghUrl, {
        headers: {
          Authorization: `Bearer ${pat}`,
          Accept: "application/vnd.github.v3+json",
        },
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        const jsonString = Buffer.from(data.content, "base64").toString("utf-8");
        const parsedContent = JSON.parse(jsonString);
        return NextResponse.json({
          success: true,
          content: parsedContent,
          sha: data.sha,
          source: "github",
        });
      }
    } catch (err) {
      console.error("Failed to fetch content from GitHub:", err);
    }
  }

  return NextResponse.json({
    success: true,
    content: inMemoryContent,
    source: "local",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { content, config } = body;

    const pat = config?.pat || process.env.GITHUB_PAT || process.env.NEXT_PUBLIC_GITHUB_PAT;
    const owner = config?.owner || process.env.GITHUB_OWNER || process.env.NEXT_PUBLIC_GITHUB_OWNER;
    const repo = config?.repo || process.env.GITHUB_REPO || process.env.NEXT_PUBLIC_GITHUB_REPO;
    const branch = config?.branch || process.env.GITHUB_BRANCH || process.env.NEXT_PUBLIC_GITHUB_BRANCH || "main";
    const path = config?.path || process.env.GITHUB_PATH || process.env.NEXT_PUBLIC_GITHUB_PATH || "content.json";

    // Update in-memory fallback first
    inMemoryContent = content;

    if (!pat || !owner || !repo) {
      return NextResponse.json({
        success: true,
        message: "Data tersimpan di memori lokal (Konfigurasi GitHub PAT belum diisi lengkap).",
        source: "local",
        content: inMemoryContent,
      });
    }

    const ghUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    
    // First GET file to obtain SHA if exists
    let sha: string | undefined = undefined;
    try {
      const getRes = await fetch(`${ghUrl}?ref=${branch}`, {
        headers: {
          Authorization: `Bearer ${pat}`,
          Accept: "application/vnd.github.v3+json",
        },
        cache: "no-store",
      });
      if (getRes.ok) {
        const getData = await getRes.json();
        sha = getData.sha;
      }
    } catch (err) {
      console.log("File not found or new file on GitHub:", err);
    }

    // Convert content object to Base64 encoded string
    const jsonString = JSON.stringify(content, null, 2);
    const base64Content = Buffer.from(jsonString, "utf-8").toString("base64");

    const payload: {
      message: string;
      content: string;
      branch: string;
      sha?: string;
    } = {
      message: `Update CMS content via Hansen Admin (${new Date().toISOString()})`,
      content: base64Content,
      branch: branch,
    };

    if (sha) {
      payload.sha = sha;
    }

    const putRes = await fetch(ghUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${pat}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!putRes.ok) {
      const errorData = await putRes.json();
      return NextResponse.json(
        {
          success: false,
          message: `Gagal menyimpan ke GitHub: ${errorData.message || putRes.statusText}`,
          error: errorData,
        },
        { status: putRes.status }
      );
    }

    const resultData = await putRes.json();

    return NextResponse.json({
      success: true,
      message: "Berhasil memperbarui file JSON di GitHub repository!",
      sha: resultData.content?.sha,
      source: "github",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: `Terjadi kesalahan saat menyimpan: ${error.message || "Unknown error"}`,
      },
      { status: 500 }
    );
  }
}
