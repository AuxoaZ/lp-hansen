"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { initialContent, SiteContent } from "@/data/initialContent";

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
  saving: boolean;
  updateContent: (newContent: SiteContent) => void;
  saveToGitHub: (customContent?: SiteContent) => Promise<{ success: boolean; message: string }>;
  reloadContent: () => Promise<{ success: boolean; message?: string }>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export interface ContentProviderProps {
  children: React.ReactNode;
  initialData?: SiteContent;
}

export function ContentProvider({ children, initialData }: ContentProviderProps) {
  const [content, setContent] = useState<SiteContent>(initialData || initialContent);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [saving, setSaving] = useState<boolean>(false);

  const reloadContent = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/content", { cache: "no-store", credentials: "same-origin" });
      const data = await res.json();
      if (!res.ok || !data.success || !data.content || typeof data.content !== "object") {
        return { success: false, message: data.message || "Konten CMS gagal dimuat dari server." };
      }
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
      return { success: true };
    } catch (err) {
      console.error("Error reloading content:", err);
      return { success: false, message: err instanceof Error ? err.message : "Konten CMS gagal dimuat." };
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!initialData) {
      const timeout = window.setTimeout(() => { void reloadContent(); }, 0);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [initialData, reloadContent]);

  const updateContent = useCallback((newContent: SiteContent) => {
    setContent(newContent);
  }, []);

  const saveToGitHub = useCallback(async (customContent?: SiteContent) => {
    setSaving(true);
    const contentToSave = customContent || content;

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({ content: contentToSave }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true, message: data.message || "Berhasil disimpan!" };
      } else {
        return { success: false, message: data.message || "Gagal menyimpan." };
      }
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : "Terjadi kesalahan koneksi." };
    } finally {
      setSaving(false);
    }
  }, [content]);

  return (
    <ContentContext.Provider
      value={{
        content,
        loading,
        saving,
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
