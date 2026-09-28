"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { initialContent, SiteContent } from "@/data/initialContent";

export interface GitHubConfig {
  pat: string;
  owner: string;
  repo: string;
  branch: string;
  path: string;
}

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
  saving: boolean;
  githubConfig: GitHubConfig;
  setGithubConfig: React.Dispatch<React.SetStateAction<GitHubConfig>>;
  updateContent: (newContent: SiteContent) => void;
  saveToGitHub: (customContent?: SiteContent, customConfig?: GitHubConfig) => Promise<{ success: boolean; message: string }>;
  reloadContent: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const GITHUB_CONFIG_STORAGE_KEY = "hansen_cms_github_config";

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  const [githubConfig, setGithubConfig] = useState<GitHubConfig>({
    pat: "",
    owner: "",
    repo: "",
    branch: "main",
    path: "content.json",
  });

  // Load saved GitHub config from localStorage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedConfig = localStorage.getItem(GITHUB_CONFIG_STORAGE_KEY);
      if (savedConfig) {
        try {
          const parsed = JSON.parse(savedConfig);
          setGithubConfig(parsed);
        } catch (e) {
          console.error("Failed to parse stored github config", e);
        }
      }
    }
  }, []);

  // Save githubConfig to localStorage when changed
  useEffect(() => {
    if (typeof window !== "undefined" && githubConfig) {
      localStorage.setItem(GITHUB_CONFIG_STORAGE_KEY, JSON.stringify(githubConfig));
    }
  }, [githubConfig]);

  const reloadContent = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (githubConfig.pat) params.append("pat", githubConfig.pat);
      if (githubConfig.owner) params.append("owner", githubConfig.owner);
      if (githubConfig.repo) params.append("repo", githubConfig.repo);
      if (githubConfig.branch) params.append("branch", githubConfig.branch);
      if (githubConfig.path) params.append("path", githubConfig.path);

      const res = await fetch(`/api/content?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.content) {
          // Deep merge or set content with initialContent fallback
          setContent({
            ...initialContent,
            ...data.content,
            branding: { ...initialContent.branding, ...(data.content.branding || {}) },
            home: {
              ...initialContent.home,
              ...(data.content.home || {}),
              hero: { ...initialContent.home.hero, ...(data.content.home?.hero || {}) },
              services: { ...initialContent.home.services, ...(data.content.home?.services || {}) },
              process: { ...initialContent.home.process, ...(data.content.home?.process || {}) },
              styles: { ...initialContent.home.styles, ...(data.content.home?.styles || {}) },
              projects: { ...initialContent.home.projects, ...(data.content.home?.projects || {}) },
              testimonials: { ...initialContent.home.testimonials, ...(data.content.home?.testimonials || {}) },
              locations: { ...initialContent.home.locations, ...(data.content.home?.locations || {}) },
              parallaxBanner: { ...initialContent.home.parallaxBanner, ...(data.content.home?.parallaxBanner || {}) },
              faq: { ...initialContent.home.faq, ...(data.content.home?.faq || {}) },
              contact: { ...initialContent.home.contact, ...(data.content.home?.contact || {}) },
              map: { ...initialContent.home.map, ...(data.content.home?.map || {}) },
              cta: { ...initialContent.home.cta, ...(data.content.home?.cta || {}) },
            },
            layananPage: {
              ...initialContent.layananPage,
              ...(data.content.layananPage || {}),
              intro: { ...initialContent.layananPage.intro, ...(data.content.layananPage?.intro || {}) },
              servicesDetail: { ...initialContent.layananPage.servicesDetail, ...(data.content.layananPage?.servicesDetail || {}) },
              whyUs: { ...initialContent.layananPage.whyUs, ...(data.content.layananPage?.whyUs || {}) },
            },
            portofolioPage: {
              ...initialContent.portofolioPage,
              ...(data.content.portofolioPage || {}),
              intro: { ...initialContent.portofolioPage.intro, ...(data.content.portofolioPage?.intro || {}) },
              gallery: { ...initialContent.portofolioPage.gallery, ...(data.content.portofolioPage?.gallery || {}) },
              banner: { ...initialContent.portofolioPage.banner, ...(data.content.portofolioPage?.banner || {}) },
            },
            tentangKamiPage: {
              ...initialContent.tentangKamiPage,
              ...(data.content.tentangKamiPage || {}),
              intro: { ...initialContent.tentangKamiPage.intro, ...(data.content.tentangKamiPage?.intro || {}) },
              vision: { ...initialContent.tentangKamiPage.vision, ...(data.content.tentangKamiPage?.vision || {}) },
              values: { ...initialContent.tentangKamiPage.values, ...(data.content.tentangKamiPage?.values || {}) },
              experience: { ...initialContent.tentangKamiPage.experience, ...(data.content.tentangKamiPage?.experience || {}) },
            },
            footer: { ...initialContent.footer, ...(data.content.footer || {}) },
          });
        }
      }
    } catch (err) {
      console.error("Error reloading content:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reloadContent();
  }, [githubConfig.owner, githubConfig.repo, githubConfig.branch, githubConfig.path]);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
  };

  const saveToGitHub = async (customContent?: SiteContent, customConfig?: GitHubConfig) => {
    setSaving(true);
    const contentToSave = customContent || content;
    const configToUse = customConfig || githubConfig;

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: contentToSave,
          config: configToUse,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true, message: data.message || "Berhasil disimpan!" };
      } else {
        return { success: false, message: data.message || "Gagal menyimpan." };
      }
    } catch (err: any) {
      return { success: false, message: err.message || "Terjadi kesalahan koneksi." };
    } finally {
      setSaving(false);
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        loading,
        saving,
        githubConfig,
        setGithubConfig,
        updateContent,
        saveToGitHub,
        reloadContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}
