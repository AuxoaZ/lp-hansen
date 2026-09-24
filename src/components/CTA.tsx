import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="bg-gradient-to-br from-[#00152e] to-[#002855] rounded-3xl p-12 md:p-16 lg:p-20 shadow-2xl flex flex-col items-center text-center">
          
          <h4 className="text-[#dbae6b] tracking-widest text-xs font-bold uppercase mb-4">
            SIAP MEWUJUDKAN RUANG IMPIAN ANDA?
          </h4>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white max-w-4xl leading-tight mb-6">
            MARI BANGUN SESUATU YANG LUAR BIASA BERSAMA.
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-10">
            Hubungi kami hari ini dan ambil langkah pertama menuju ruang impian Anda.
          </p>
          
          <button className="bg-white hover:bg-gray-100 text-[#002044] px-8 py-4 text-sm font-bold rounded-full shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105">
            HUBUNGI KAMI <FiArrowRight className="text-lg" />
          </button>
          
        </div>
      </div>
    </section>
  );
}
