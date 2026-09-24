import { FiArrowRight } from "react-icons/fi";

export default function ServicesParallax() {
  return (
    <section
      className="relative min-h-[350px] lg:h-[420px] w-full bg-fixed bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/styles/luxury.jpg')" }}
    >
      {/* Dark Blue Overlay - Strong on Left, Fading to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001530] via-[#001530]/85 to-transparent/40 z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Left Text Content */}
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs font-bold tracking-widest uppercase text-white/90">
              MARI WUJUDKAN RUANG IMPIAN
            </span>
            <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Konsultasikan Kebutuhan Anda
          </h2>

          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl">
            Tim kami siap memberikan solusi terbaik untuk setiap kebutuhan interior dan furniture Anda.
          </p>
        </div>

        {/* Right Gold Button */}
        <div className="shrink-0">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Hansen%20Projects,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#edd097] via-[#dbae6b] to-[#c2954e] text-[#001733] px-8 py-4 text-xs lg:text-sm font-bold uppercase tracking-wider shadow-2xl hover:brightness-110 transition-all group"
          >
            <span>MULAI PROYEK ANDA</span>
            <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
