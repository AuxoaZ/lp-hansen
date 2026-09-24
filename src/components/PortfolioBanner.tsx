import Image from "next/image";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";
import { FaLightbulb, FaHandshake } from "react-icons/fa6";

export default function PortfolioBanner() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[560px] w-full flex items-center overflow-hidden py-16 lg:py-24 border-t border-gray-100">
      {/* Background Image W-Full with White Gradient from Left */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/styles/modern.jpg"
          alt="Mewujudkan Proyek Bersama Hansen Projects"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay: White on Left, Transparent on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-30% to-white/10 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-widest text-[#002044] uppercase">
                BERSAMA MEWUJUDKAN
              </span>
              <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002044] leading-tight mb-4">
              Mari Wujudkan Proyek
              <br />
              Berikutnya <span className="text-[#dbae6b]">Bersama Kami.</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
              Diskusikan kebutuhan ruang Anda dengan tim kami dan temukan solusi
              terbaik untuk bisnis Anda.
            </p>

            <div className="mb-12">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Hansen%20Projects,%20saya%20ingin%20berkonsultasi%20proyek%20berikutnya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#edd097] via-[#dbae6b] to-[#c2954e] text-[#001733] px-8 py-4 text-xs lg:text-sm font-bold uppercase tracking-wider shadow-xl hover:brightness-110 transition-all group shrink-0"
              >
                <span>KONSULTASIKAN PROYEK ANDA</span>
                <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 3 Bottom Highlights with Vertical Separator Lines */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80 max-w-lg w-full">
              <div className="flex flex-col gap-2 pr-4 border-r border-gray-200">
                <FiMessageSquare className="text-2xl text-[#dbae6b]" />
                <p className="text-xs md:text-sm font-bold text-[#002044] leading-snug">
                  Konsultasi
                  <br />
                  <span className="font-normal text-gray-600">Profesional</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 px-4 border-r border-gray-200">
                <FaLightbulb className="text-2xl text-[#dbae6b]" />
                <p className="text-xs md:text-sm font-bold text-[#002044] leading-snug">
                  Solusi
                  <br />
                  <span className="font-normal text-gray-600">
                    Sesuai Kebutuhan
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-2 pl-4">
                <FaHandshake className="text-2xl text-[#dbae6b]" />
                <p className="text-xs md:text-sm font-bold text-[#002044] leading-snug">
                  Komitmen
                  <br />
                  <span className="font-normal text-gray-600">
                    Hasil Terbaik
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
