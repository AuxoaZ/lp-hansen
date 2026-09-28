"use client";

import { useContent } from "@/context/ContentContext";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiZap,
  FiLock,
  FiCheckCircle,
} from "react-icons/fi";

export default function ContactSection() {
  const { content } = useContent();
  const contact = content.home.contact;

  return (
    <section className="bg-white text-gray-900 py-20" id="kontak-kami">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest text-[#002044] uppercase">
                {contact.badge}
              </span>
              <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002044] leading-tight mb-4">
              {contact.titleLine1}
              <br />
              {contact.titleLine2}
              <br />
              <span className="text-[#dbae6b]">{contact.titleLine3}</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              {contact.description}
            </p>

            {/* 4 Contact Items (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {/* Item 1: Phone */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#edd097] via-[#dbae6b] to-[#c2954e] text-[#002044] flex items-center justify-center shrink-0 shadow-md">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002044]">
                    {contact.phone}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                    {contact.phoneHours}
                  </p>
                </div>
              </div>

              {/* Item 2: Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#edd097] via-[#dbae6b] to-[#c2954e] text-[#002044] flex items-center justify-center shrink-0 shadow-md">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002044]">
                    {contact.email}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                    {contact.emailSubtitle}
                  </p>
                </div>
              </div>

              {/* Item 3: Location */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#edd097] via-[#dbae6b] to-[#c2954e] text-[#002044] flex items-center justify-center shrink-0 shadow-md">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002044]">
                    {contact.address}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-0.5 leading-relaxed whitespace-pre-line">
                    {contact.addressDetail}
                  </p>
                </div>
              </div>

              {/* Item 4: Instagram */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#edd097] via-[#dbae6b] to-[#c2954e] text-[#002044] flex items-center justify-center shrink-0 shadow-md">
                  <FiInstagram className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002044]">
                    {contact.instagram}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                    {contact.instagramSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#dbae6b]/50 to-transparent z-0 rounded-sm"></div>

            <div className="relative z-10 bg-[#002044] text-white p-6 lg:p-8 shadow-2xl rounded-sm">
              <div className="flex items-center gap-3 mb-3 justify-center">
                <div className="w-6 h-[2px] bg-[#dbae6b]"></div>
                <h3 className="text-sm font-bold tracking-widest uppercase font-serif text-white">
                  {contact.formTitle}
                </h3>
                <div className="w-6 h-[2px] bg-[#dbae6b]"></div>
              </div>
              <p className="text-center text-gray-300 text-[13px] mb-6">
                {contact.formSubtitle}
              </p>

              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Terima kasih! Pesan Anda telah terkirim."); }}>
                <input
                  type="text"
                  placeholder="Nama Lengkap*"
                  className="w-full bg-white text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b]"
                  required
                />
                <input
                  type="text"
                  placeholder="Nama Perusahaan (Opsional)"
                  className="w-full bg-white text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b]"
                />

                <div className="flex gap-2">
                  <select className="bg-white text-gray-900 px-2 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b] border-r border-gray-200">
                    <option value="+62">+62</option>
                    <option value="+1">+1</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Nomor WhatsApp*"
                    className="flex-1 bg-white text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b]"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-white text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b]"
                  required
                />

                <select
                  className="w-full bg-white text-gray-500 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b] appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Jenis Proyek*
                  </option>
                  <option value="residensial">Residensial</option>
                  <option value="komersial">Komersial</option>
                  <option value="kantor">Kantor</option>
                </select>

                <select
                  className="w-full bg-white text-gray-500 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b] appearance-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Estimasi Anggaran*
                  </option>
                  <option value="<100m">&lt; 100 Juta</option>
                  <option value="100m-500m">100 - 500 Juta</option>
                  <option value=">500m">&gt; 500 Juta</option>
                </select>

                <textarea
                  placeholder="Pesan (Opsional)"
                  rows={2}
                  className="w-full bg-white text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#dbae6b] resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#dbae6b] text-[#002044] px-6 py-3 font-bold text-xs hover:bg-white transition-colors mt-2 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  KIRIM PERMINTAAN <span>&rarr;</span>
                </button>
              </form>

              <div className="mt-5 flex items-center justify-between text-[10px] lg:text-xs text-gray-300">
                <div className="flex items-center gap-1">
                  <FiZap className="text-[#dbae6b]" /> Respons Cepat
                </div>
                <div className="flex items-center gap-1">
                  <FiLock className="text-[#dbae6b]" /> Data Aman
                </div>
                <div className="flex items-center gap-1">
                  <FiCheckCircle className="text-[#dbae6b]" /> Tanpa Kewajiban
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
