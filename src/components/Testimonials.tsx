"use client";

import { useContent } from "@/context/ContentContext";
import { FiStar } from "react-icons/fi";

export default function Testimonials() {
  const { content } = useContent();
  const testimonials = content.home.testimonials;

  return (
    <section className="bg-white text-gray-900 py-20 border-t border-gray-100" id="testimoni">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-[#002044] uppercase block mb-2">
            {testimonials.badge || "TESTIMONI"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002044] uppercase tracking-wide">
            {testimonials.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#dbae6b] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f9fafb] border border-gray-200 p-8 rounded-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#dbae6b] mb-4 text-sm">
                  {Array.from({ length: item.rating || 5 }).map((_, r) => (
                    <FiStar key={r} className="fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs md:text-sm italic leading-relaxed mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#002044]">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
