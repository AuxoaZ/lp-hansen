"use client";

import { useContent } from "@/context/ContentContext";

export default function PortfolioBanner() {
  const { content } = useContent();
  const banner = content.portofolioPage.banner;

  return (
    <section className="bg-[#002044] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
            {banner.title}
          </h2>
          <p className="text-gray-300 text-xs md:text-sm max-w-xl">
            {banner.subtitle}
          </p>
        </div>

        <a
          href={banner.buttonLink || "#kontak-kami"}
          className="bg-[#dbae6b] text-[#002044] hover:bg-white px-8 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-lg rounded-sm"
        >
          {banner.buttonText} &rarr;
        </a>
      </div>
    </section>
  );
}
