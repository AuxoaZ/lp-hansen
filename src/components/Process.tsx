"use client";

import { useContent } from "@/context/ContentContext";

export default function Process() {
  const { content } = useContent();
  const process = content.home.process;

  return (
    <section className="bg-[#002044] text-white py-20" id="proses">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-[#dbae6b] uppercase block mb-2">
            {process.badge || "PROSES KERJA"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide uppercase text-white">
            {process.title}
          </h2>
          <p className="text-gray-300 text-sm mt-2 max-w-lg mx-auto">
            {process.subtitle}
          </p>
          <div className="w-16 h-[2px] bg-[#dbae6b] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#001730] p-6 rounded-sm border border-[#dbae6b]/20 flex flex-col justify-between group hover:border-[#dbae6b] transition-colors"
            >
              <div>
                <span className="text-4xl font-serif font-bold text-[#dbae6b] block mb-4 group-hover:scale-110 transition-transform">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold font-serif text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
