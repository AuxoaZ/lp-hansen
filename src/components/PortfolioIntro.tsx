import Image from "next/image";
import { FiGrid, FiAward, FiUsers } from "react-icons/fi";

export default function PortfolioIntro() {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-background text-foreground pt-28 pb-16 lg:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/projects/residential.jpg"
          alt="Portofolio Hansen Projects"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/60 via-65% to-transparent to-90%" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex-1 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-text-muted font-base tracking-widest text-xs lg:text-sm uppercase font-bold">
              Portfolio Kami
            </span>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-serif uppercase tracking-wide">
            KARYA NYATA UNTUK
            <br />
            <span className="text-primary">
              RUANG YANG LEBIH BAIK.
            </span>
          </h1>

          <p className="text-text-muted text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
            Setiap proyek adalah cerita. Kami bangga telah menjadi bagian dari berbagai
            perjalanan untuk mewujudkan ruang yang fungsional, estetis, dan sesuai dengan
            kebutuhan setiap klien.
          </p>

          {/* 3 Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 text-primary rounded-sm shrink-0">
                <FiGrid className="text-xl" />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-200">
                Berbagai Jenis Proyek
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 text-primary rounded-sm shrink-0">
                <FiAward className="text-xl" />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-200">
                Hasil Berkualitas & Terpercaya
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 text-primary rounded-sm shrink-0">
                <FiUsers className="text-xl" />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-200">
                Dipercaya oleh Banyak Klien
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
