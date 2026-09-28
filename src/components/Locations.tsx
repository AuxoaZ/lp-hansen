"use client";

import { useContent } from "@/context/ContentContext";
import { FiMapPin, FiPhone } from "react-icons/fi";

export default function Locations() {
  const { content } = useContent();
  const locations = content.home.locations;

  return (
    <section className="bg-[#001730] text-white py-20" id="lokasi">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#dbae6b] uppercase block mb-2">
            {locations.badge || "LOKASI LAYANAN"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-wide">
            {locations.title}
          </h2>
          <p className="text-gray-300 text-sm mt-2 max-w-xl mx-auto">
            {locations.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#dbae6b] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.items.map((loc, idx) => (
            <div
              key={idx}
              className="bg-[#002044] p-6 rounded-sm border border-[#dbae6b]/30 space-y-4 hover:border-[#dbae6b] transition-colors"
            >
              <div className="flex items-center gap-3 text-[#dbae6b]">
                <FiMapPin className="text-2xl shrink-0" />
                <h3 className="text-xl font-bold font-serif text-white">
                  {loc.name}
                </h3>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed">
                {loc.address}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#dbae6b] font-medium pt-2 border-t border-white/10">
                <FiPhone /> {loc.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
