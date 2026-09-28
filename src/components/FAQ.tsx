"use client";

import { useState } from "react";
import { useContent } from "@/context/ContentContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const { content } = useContent();
  const faq = content.home.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f9fafb] text-gray-900 py-20" id="faq">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#002044] uppercase block mb-2">
            {faq.badge || "FAQ"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002044] uppercase tracking-wide">
            {faq.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#dbae6b] mx-auto mt-3"></div>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-serif font-bold text-base md:text-lg text-[#002044] hover:text-[#dbae6b] transition-colors"
                >
                  <span>{item.question}</span>
                  {isOpen ? (
                    <FiChevronUp className="text-xl text-[#dbae6b] shrink-0 ml-4" />
                  ) : (
                    <FiChevronDown className="text-xl text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
