"use client";

import { useState } from "react";
import type { Article } from "@/data/initialContent";
import { useContent } from "@/context/ContentContext";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const blankArticle = (): Article => ({
  id: crypto.randomUUID(), title: "", slug: "", excerpt: "", category: "Inspirasi Interior",
  coverImage: "", author: "Hansen Projects", publishedAt: new Date().toISOString().slice(0, 10),
  status: "draft", body: "", seoTitle: "", seoDescription: "",
});

const slugify = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ArticlesManager() {
  const { content, updateContent } = useContent();
  const articles = content.articles || [];
  const [selectedId, setSelectedId] = useState(articles[0]?.id || "");
  const [editedSlug, setEditedSlug] = useState(false);
  const selectedArticle = articles.find((article) => article.id === selectedId);

  const updateArticle = (patch: Partial<Article>) => {
    if (!selectedArticle) return;
    updateContent({ ...content, articles: articles.map((article) => article.id === selectedId ? { ...article, ...patch } : article) });
  };

  const createArticle = () => {
    const article = blankArticle();
    updateContent({ ...content, articles: [article, ...articles] });
    setSelectedId(article.id);
    setEditedSlug(false);
  };

  const deleteArticle = (id: string) => {
    const remaining = articles.filter((article) => article.id !== id);
    updateContent({ ...content, articles: remaining });
    if (selectedId === id) setSelectedId(remaining[0]?.id || "");
  };

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><h2 className="text-2xl font-serif font-bold text-[#dbae6b]">Artikel & SEO</h2><p className="mt-1 text-xs text-gray-400">Tulis artikel, simpan sebagai draft, lalu terbitkan ke website.</p></div>
        <button onClick={createArticle} className="flex items-center gap-2 rounded-lg bg-[#dbae6b] px-4 py-2 text-xs font-bold text-[#002044]"><FiPlus /> Artikel Baru</button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-2">
          {articles.length ? articles.map((article) => (
            <button key={article.id} onClick={() => { setSelectedId(article.id); setEditedSlug(true); }} className={`w-full rounded-lg border p-4 text-left ${selectedId === article.id ? "border-[#dbae6b]/70 bg-[#dbae6b]/10" : "border-white/10 bg-[#0b1728] hover:border-white/25"}`}>
              <span className="block truncate text-sm font-semibold text-white">{article.title || "Artikel tanpa judul"}</span>
              <span className="mt-2 block text-[10px] uppercase tracking-widest text-gray-400">{article.status === "published" ? "Terbit" : "Draft"}</span>
            </button>
          )) : <p className="rounded-lg border border-white/10 p-5 text-sm text-gray-400">Belum ada artikel.</p>}
        </aside>

        {selectedArticle ? <section className="space-y-5 rounded-xl border border-[#dbae6b]/20 bg-[#0b1728] p-5 md:p-7">
          <div className="flex items-center justify-between gap-3"><h3 className="font-serif text-xl font-semibold text-white">Edit Artikel</h3><button onClick={() => deleteArticle(selectedArticle.id)} className="flex items-center gap-2 rounded border border-red-400/30 px-3 py-2 text-xs text-red-300 hover:bg-red-950/40"><FiTrash2 /> Hapus</button></div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Judul Artikel" value={selectedArticle.title} onChange={(title) => updateArticle({ title, ...(!editedSlug ? { slug: slugify(title) } : {}) })} />
            <Field label="Slug URL" value={selectedArticle.slug} onChange={(slug) => { setEditedSlug(true); updateArticle({ slug: slugify(slug) }); }} hint="URL artikel, contoh: tips-memilih-kitchen-set" />
            <Field label="Kategori" value={selectedArticle.category} onChange={(category) => updateArticle({ category })} />
            <Field label="Penulis" value={selectedArticle.author} onChange={(author) => updateArticle({ author })} />
            <Field label="Tanggal Publikasi" type="date" value={selectedArticle.publishedAt} onChange={(publishedAt) => updateArticle({ publishedAt })} />
            <label className="text-xs font-semibold text-[#dbae6b]">Status Artikel<select value={selectedArticle.status} onChange={(event) => updateArticle({ status: event.target.value as Article["status"] })} className="mt-2 w-full rounded border border-white/10 bg-[#07111e] px-3 py-3 text-sm text-white"><option value="draft">Draft</option><option value="published">Terbitkan</option></select></label>
            <Field label="URL Gambar Sampul" value={selectedArticle.coverImage} onChange={(coverImage) => updateArticle({ coverImage })} hint="Gunakan URL gambar yang dapat diakses publik." />
            <Field label="Judul SEO (opsional)" value={selectedArticle.seoTitle} onChange={(seoTitle) => updateArticle({ seoTitle })} />
          </div>
          <TextField label="Ringkasan Artikel" value={selectedArticle.excerpt} onChange={(excerpt) => updateArticle({ excerpt })} rows={3} hint="Tampil di daftar artikel dan hasil berbagi." />
          <TextField label="Isi Artikel" value={selectedArticle.body} onChange={(body) => updateArticle({ body })} rows={16} hint="Pisahkan paragraf dengan satu baris kosong. Awali subjudul dengan ## atau ###, dan item daftar dengan - ." />
          <TextField label="Deskripsi SEO (opsional)" value={selectedArticle.seoDescription} onChange={(seoDescription) => updateArticle({ seoDescription })} rows={3} hint="Jika kosong, ringkasan artikel digunakan." />
          <p className="border-t border-white/10 pt-4 text-xs leading-5 text-gray-400">Perubahan tersimpan di editor ini. Klik <strong className="text-[#dbae6b]">Simpan Ke GitHub</strong> di bagian atas untuk menyimpan konten CMS dan menerbitkan pembaruan.</p>
        </section> : <div className="flex min-h-60 items-center justify-center rounded-xl border border-dashed border-white/15 p-8 text-center text-sm text-gray-400">Pilih artikel untuk mengedit, atau buat artikel baru.</div>}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", hint }: { label: string; value: string; onChange: (value: string) => void; type?: string; hint?: string }) {
  return <label className="text-xs font-semibold text-[#dbae6b]">{label}<input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded border border-white/10 bg-[#07111e] px-3 py-3 text-sm font-normal text-white outline-none focus:border-[#dbae6b]/60" />{hint && <span className="mt-1 block font-normal text-gray-500">{hint}</span>}</label>;
}

function TextField({ label, value, onChange, rows, hint }: { label: string; value: string; onChange: (value: string) => void; rows: number; hint?: string }) {
  return <label className="block text-xs font-semibold text-[#dbae6b]">{label}<textarea value={value} onChange={(event) => onChange(event.target.value)} rows={rows} className="mt-2 w-full resize-y rounded border border-white/10 bg-[#07111e] px-3 py-3 text-sm font-normal leading-6 text-white outline-none focus:border-[#dbae6b]/60" />{hint && <span className="mt-1 block font-normal text-gray-500">{hint}</span>}</label>;
}
