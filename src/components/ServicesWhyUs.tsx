"use client";

import { useContent } from "@/context/ContentContext";
import { FiCheckCircle, FiShield, FiClock, FiLayers } from "react-icons/fi";

export default function ServicesWhyUs() {
  const { content } = useContent();
  const whyUs = content.layananPage.whyUs;

  const icons = [FiLayers, FiCheckCircle, FiClock, FiShield];

  return (
    <section className="bg-[#001730] text-white py-20" id="mengapa-kami">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-[#dbae6b] uppercase block mb-2">
            {whyUs.badge || "MENGAPA HANSEN PROJECTS"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-wide">
            {whyUs.title}
          </h2>
          <p className="text-gray-300 text-sm mt-2 max-w-xl mx-auto">
            {whyUs.description}
          </p>
          <div className="w-16 h-[2px] bg-[#dbae6b] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.items.map((item, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-[#002044] p-6 rounded-sm border border-[#dbae6b]/20 flex flex-col items-center text-center group hover:border-[#dbae6b] transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-[#dbae6b]/20 border border-[#dbae6b] text-[#dbae6b] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComp className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold font-serif text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
