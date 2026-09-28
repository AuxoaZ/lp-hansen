"use client";

import { useContent } from "@/context/ContentContext";

export default function MapSection() {
  const { content } = useContent();
  const mapData = content.home.map;

  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <h3 className="text-xl font-serif font-bold text-[#002044] mb-6 tracking-wide">
          {mapData.title || "Lokasi Workshop & Workshop"}
        </h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
          <iframe
            src={mapData.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
