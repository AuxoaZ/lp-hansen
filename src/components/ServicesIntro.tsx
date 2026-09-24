import Image from "next/image";
import {
  FiUsers,
  FiShield,
  FiZap,
  FiLock,
  FiCheckCircle,
} from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

export default function ServicesIntro() {
  return (
    <div className="relative min-h-[80vh] flex flex-col overflow-hidden bg-background text-foreground pt-24 pb-16 lg:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services/interior.jpg"
          alt="Layanan Hansen Projects Interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/50 via-65% to-transparent to-90%" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex-1 grid lg:grid-cols-12 gap-8 items-center h-full pt-12 lg:pt-20">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-text-muted font-base tracking-widest text-xs lg:text-sm uppercase font-bold">
              Layanan Kami
            </span>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 font-serif  tracking-wide">
            Solusi Interior dan Furniture
            <br />
            Yang Disesuaikan
            <br />
            <span className="text-primary">Dengan Kebutuhan Anda</span>
          </h1>

          <p className="text-text-muted text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            Hansen Projects menyediakan layanan custom furniture dan interior
            untuk berbagai kebutuhan ruang, mulai dari hunian hingga komersial.
            Dengan desain fungsional, material berkualitas, dan pengerjaan
            profesional, kami membantu mewujudkan ruang yang lebih baik.
          </p>
        </div>

        {/* Right Column - Form Card */}
      </div>
    </div>
  );
}
