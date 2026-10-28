import { initialContent, SiteContent } from "@/data/initialContent";
import fs from "fs";
import path from "path";

export async function getSiteContent(): Promise<SiteContent> {
  const pat = process.env.GITHUB_PAT || process.env.NEXT_PUBLIC_GITHUB_PAT;
  const owner = process.env.GITHUB_OWNER || process.env.NEXT_PUBLIC_GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO || process.env.NEXT_PUBLIC_GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || process.env.NEXT_PUBLIC_GITHUB_BRANCH || "main";
  const filePath = process.env.GITHUB_PATH || process.env.NEXT_PUBLIC_GITHUB_PATH || "content.json";

  // 1. Try to fetch from GitHub API with Next.js cache
  if (pat && owner && repo) {
    try {
      const ghUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`;
      const res = await fetch(ghUrl, {
        headers: {
          Authorization: `Bearer ${pat}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 60, tags: ["site-content"] },
      });

      if (res.ok) {
        const data = await res.json();
        const jsonString = Buffer.from(data.content, "base64").toString("utf-8");
        const parsedContent = JSON.parse(jsonString);
        return {
          ...initialContent,
          ...parsedContent,
        };
      }
    } catch (err) {
      console.error("Failed to fetch content from GitHub in getSiteContent:", err);
    }
  }

  // 2. Fallback to reading local content.json on server disk
  try {
    const localJsonPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(localJsonPath)) {
      const fileData = fs.readFileSync(localJsonPath, "utf-8");
      const parsed = JSON.parse(fileData);
      return {
        ...initialContent,
        ...parsed,
      };
    }
  } catch (err) {
    console.error("Failed to read local content.json in getSiteContent:", err);
  }

  // 3. Fallback to initialContent
  return initialContent;
}
