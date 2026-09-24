"use client";

import { useState } from "react";
import { FiSend, FiInfo, FiSliders } from "react-icons/fi";
import { BsCalculator } from "react-icons/bs";

export default function ServicesCalculator() {
  const [serviceType, setServiceType] = useState("interior");
  const [roomType, setRoomType] = useState("residential");
  const [area, setArea] = useState<number>(36);
  const [finishLevel, setFinishLevel] = useState("premium");

  // Simple estimation calculation logic
  const getBaseRate = () => {
    let rate = 3500000; // Base per m2
    if (serviceType === "furniture") rate = 2800000;
    if (serviceType === "fitout") rate = 4500000;
    if (serviceType === "renovation") rate = 3200000;

    if (finishLevel === "luxury") rate *= 1.4;
    if (finishLevel === "exclusive") rate *= 1.8;

    if (roomType === "commercial") rate *= 1.15;

    return Math.round(rate);
  };

  const estimatedTotal = area * getBaseRate();
  const minTotal = Math.round(estimatedTotal * 0.9);
  const maxTotal = Math.round(estimatedTotal * 1.15);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const generateWaMessage = () => {
    const text = `Halo Hansen Projects, saya ingin berkonsultasi mengenai estimasi proyek berikut:
- Jenis Layanan: ${serviceType.toUpperCase()}
- Tipe Ruangan: ${roomType.toUpperCase()}
- Estimasi Luas: ${area} m²
- Tingkat Finishing: ${finishLevel.toUpperCase()}
- Est. Anggaran: ${formatRupiah(minTotal)} - ${formatRupiah(maxTotal)}

Mohon infonya lebih lanjut!`;
    return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="bg-[#002044] text-white py-20" id="kalkulator-estimasi">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-[#dbae6b] font-bold text-xs tracking-widest uppercase">
              Estimator Proyek
            </h4>
            <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white uppercase tracking-wide leading-tight mb-6">
            SIMULASI ESTIMASI BIAYA INTERIOR & FURNITURE
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            Gunakan kalkulator estimasi sederhana kami untuk mendapatkan gambaran awal anggaran pengerjaan proyek interior atau custom furniture sesuai kebutuhan Anda.
          </p>

          <div className="bg-[#0a1b3f] p-6 border-l-4 border-[#dbae6b] space-y-3 text-xs text-gray-300">
            <div className="flex items-center gap-2 text-[#dbae6b] font-bold text-sm">
              <FiInfo className="text-lg" /> Catatan Penting
            </div>
            <p>
              * Hasil simulasi di samping merupakan perkiraan awal (per m²) dan dapat menyesuaikan dengan spesifikasi material akhir, kerumitan detail, serta survei lokasi fisik.
            </p>
          </div>
        </div>

        {/* Right Column: Calculator Card */}
        <div className="lg:col-span-7 bg-white text-gray-900 p-8 shadow-2xl rounded-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <BsCalculator className="text-2xl text-[#002044]" />
            <div>
              <h3 className="text-lg font-bold font-serif text-[#002044]">
                Kalkulator Budget Pengerjaan
              </h3>
              <p className="text-xs text-gray-500">Pilih parameter untuk menghitung estimasi</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Jenis Layanan
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 p-3 text-xs rounded-sm focus:outline-none focus:ring-2 focus:ring-[#002044]"
              >
                <option value="interior">Desain & Perencanaan Interior</option>
                <option value="furniture">Custom Furniture & Joinery</option>
                <option value="fitout">Konstruksi & Fit-Out Turnkey</option>
                <option value="renovation">Renovasi Ruang Eksisting</option>
              </select>
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Tipe Sektor Ruang
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 p-3 text-xs rounded-sm focus:outline-none focus:ring-2 focus:ring-[#002044]"
              >
                <option value="residential">Hunian (Rumah / Apartemen)</option>
                <option value="commercial">Komersial (Kantor / Cafe / Retail)</option>
              </select>
            </div>

            {/* Area m2 slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-gray-700">
                  Perkiraan Luas Area
                </label>
                <span className="text-xs font-bold text-[#002044] bg-[#dbae6b]/20 px-2 py-0.5 rounded">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={300}
                step={5}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#002044] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>10 m²</span>
                <span>150 m²</span>
                <span>300+ m²</span>
              </div>
            </div>

            {/* Finish Level */}
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Tingkat Spesifikasi Material
              </label>
              <select
                value={finishLevel}
                onChange={(e) => setFinishLevel(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 p-3 text-xs rounded-sm focus:outline-none focus:ring-2 focus:ring-[#002044]"
              >
                <option value="premium">Standard Premium (HPL Solid / Plywood Grade A)</option>
                <option value="luxury">Deluxe Luxury (Duco / Veneer Natural / Quartz)</option>
                <option value="exclusive">Exclusive Bespoke (Import / Custom Metallic/Brass)</option>
              </select>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-[#002044] text-white p-6 rounded-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase font-bold text-[#dbae6b] tracking-wider">
                Perkiraan Kisaran Anggaran:
              </span>
              <div className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
                {formatRupiah(minTotal)} <span className="text-[#dbae6b] text-lg font-sans">-</span> {formatRupiah(maxTotal)}
              </div>
              <p className="text-[10px] text-gray-300 mt-1">
                Termasuk material, pengerjaan, & supervisi teknis.
              </p>
            </div>

            <a
              href={generateWaMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#dbae6b] text-[#002044] px-6 py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 shrink-0 w-full md:w-auto justify-center"
            >
              <FiSend className="text-sm" /> Konsultasikan Estimasi ini
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
