"use client";

import { useState } from "react";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    num: "01",
    question: "Jenis proyek apa saja yang Anda tangani?",
    answer: "Kami menangani berbagai proyek termasuk residensial (rumah tinggal, apartemen), komersial (kantor, toko ritel, restoran), dan proyek hospitality (hotel, resort).",
  },
  {
    num: "02",
    question: "Berapa lama waktu pengerjaan proyek interior?",
    answer: "Waktu pengerjaan sangat bergantung pada skala dan kompleksitas proyek. Proyek kecil mungkin memakan waktu 4-6 minggu, sedangkan proyek besar bisa 3-6 bulan.",
  },
  {
    num: "03",
    question: "Apakah Anda hanya menyediakan jasa desain?",
    answer: "Tidak, kami menyediakan layanan end-to-end mulai dari konsep desain, konstruksi, fit-out, hingga pembuatan furnitur kustom (Design & Build).",
  },
  {
    num: "04",
    question: "Area mana saja yang Anda layani?",
    answer: "Kami berpusat di Jakarta namun melayani proyek di berbagai kota besar di Indonesia seperti Tangerang, Bekasi, Bandung, Surabaya, Bali, dan sekitarnya.",
  },
  {
    num: "05",
    question: "Bagaimana sistem pembayaran yang berlaku?",
    answer: "Sistem pembayaran dibagi ke dalam beberapa termin (DP, Progress 1, Progress 2, dan Pelunasan saat Serah Terima), yang disesuaikan dengan nilai kontrak proyek.",
  },
  {
    num: "06",
    question: "Apakah Anda menyediakan layanan after-sales?",
    answer: "Ya, kami memberikan masa garansi retensi setelah serah terima proyek untuk memastikan kualitas pekerjaan tetap terjaga dan sesuai standar kami.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9fafb] text-gray-900 py-20 px-6 lg:px-10" id="faq">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide text-[#002044]">
                PERTANYAAN YANG SERING DIAJUKAN
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>
            <p className="text-gray-600 text-sm max-w-xl">
              Temukan jawaban untuk pertanyaan umum tentang layanan dan proses kami.
            </p>
          </div>
          <a
            href="#"
            className="text-[#002044] hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
          >
            Lihat Semua FAQ <span>&rarr;</span>
          </a>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[#002044] font-bold text-sm">
                    {faq.num}
                  </span>
                  <span className={`text-sm font-medium transition-colors ${openIndex === index ? 'text-primary' : 'text-gray-600 group-hover:text-[#002044]'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className="text-[#002044]">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </button>
              
              {/* Expandable Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 text-xs leading-relaxed pl-10 pr-4 pb-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
