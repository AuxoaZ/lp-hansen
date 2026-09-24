"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

const categories = [
  { id: "all", label: "Semua Proyek" },
  { id: "residential", label: "Hunian (Residential)" },
  { id: "commercial", label: "Komersial & Resto" },
  { id: "office", label: "Perkantoran" },
  { id: "kitchen", label: "Kitchen Set & Joinery" },
];

const portfolioItems = [
  {
    id: 1,
    category: "residential",
    title: "Modern Residence Suite",
    location: "Jakarta Selatan",
    type: "Hunian Residensial",
    image: "/projects/residential.jpg",
  },
  {
    id: 2,
    category: "kitchen",
    title: "Custom Luxury Kitchen Set",
    location: "BSD City, Tangerang",
    type: "Kitchen Set Custom",
    image: "/services/furniture.jpg",
  },
  {
    id: 3,
    category: "commercial",
    title: "Contemporary Cafe & Lounge",
    location: "Bandung",
    type: "Komersial & Hospitality",
    image: "/services/interior.jpg",
  },
  {
    id: 4,
    category: "office",
    title: "Corporate HQ Executive Office",
    location: "SCBD, Jakarta",
    type: "Interior Perkantoran",
    image: "/services/fitout.jpg",
  },
  {
    id: 5,
    category: "residential",
    title: "Minimalist Penthouse Apartment",
    location: "Surabaya",
    type: "Apartemen Minimalis",
    image: "/styles/minimalist.jpg",
  },
  {
    id: 6,
    category: "commercial",
    title: "Boutique Retail Showroom",
    location: "Kemang, Jakarta",
    type: "Komersial Store",
    image: "/styles/luxury.jpg",
  },
  {
    id: 7,
    category: "kitchen",
    title: "Scandinavian Open Kitchen",
    location: "Bekasi",
    type: "Kitchen Set & Dining",
    image: "/styles/scandinavian.jpg",
  },
  {
    id: 8,
    category: "office",
    title: "Industrial Co-Working Space",
    location: "Jakarta Barat",
    type: "Office Workspace",
    image: "/styles/industrial.jpg",
  },
];

export default function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section className="bg-white text-gray-900 py-20" id="kategori-proyek">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Header Section from Reference Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#002044] uppercase">
                KATEGORI PROYEK
              </span>
              <div className="w-12 h-[2px] bg-[#dbae6b]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#002044]">
              Temukan Inspirasi Ruang Impian Anda
            </h2>
          </div>

          <p className="text-gray-600 text-xs md:text-sm max-w-md leading-relaxed shrink-0">
            Jelajahi berbagai proyek yang telah kami selesaikan, disesuaikan dengan
            kebutuhan dan karakter setiap klien.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-gray-100 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm ${
                activeTab === cat.id
                  ? "bg-[#002044] text-[#dbae6b] shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-[360px] lg:h-[420px] w-full overflow-hidden rounded-sm shadow-sm cursor-pointer flex flex-col justify-end"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002044]/95 via-[#002044]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

              {/* Card Content */}
              <div className="relative z-10 p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#dbae6b] bg-[#002044]/80 px-2.5 py-1 rounded-sm border border-[#dbae6b]/30">
                  {item.type}
                </span>

                <h3 className="text-xl font-serif font-bold text-white mt-3 mb-1 group-hover:text-[#dbae6b] transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-xs text-gray-300 mt-2">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-[#dbae6b]" /> {item.location}
                  </span>
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Hansen%20Projects,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#dbae6b] text-[#002044] flex items-center justify-center hover:bg-white transition-colors"
                    aria-label={`Konsultasi ${item.title}`}
                  >
                    <FiArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
