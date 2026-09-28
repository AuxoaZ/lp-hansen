"use client";

import { useContent } from "@/context/ContentContext";

export default function ServicesParallax() {
  const { content } = useContent();
  const parallax = content.home.parallaxBanner;

  const bgStyle = parallax.bgImage ? { backgroundImage: `url('${parallax.bgImage}')` } : {};

  return (
    <section className="relative py-24 bg-fixed bg-cover bg-center overflow-hidden" style={bgStyle}>
      <div className="absolute inset-0 bg-[#002044]/80 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center text-white flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-wide max-w-3xl mb-4 text-white">
          {parallax.title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
          {parallax.subtitle}
        </p>
        <a
          href={parallax.buttonLink || "#kontak-kami"}
          className="bg-[#dbae6b] text-[#002044] hover:bg-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm shadow-xl transition-colors"
        >
          {parallax.buttonText} &rarr;
        </a>
      </div>
    </section>
  );
}
