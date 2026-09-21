import Image from "next/image";
import {
  FiUsers,
  FiShield,
  FiZap,
  FiLock,
  FiCheckCircle,
} from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Interior Design"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/40 via-65% to-transparent to-90%" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex-1 grid lg:grid-cols-12 gap-8 items-center h-full pt-20 lg:pt-0">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-text-muted font-base tracking-widest text-xs lg:text-sm">
              DESAIN INTERIOR & BUILD
            </span>
            <div className="w-8 h-[2px] bg-primary"></div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5 font-serif">
            WUJUDKAN
            <br />
            RUANG IMPIAN ANDA
            <br />
            <span className="text-primary">
              BERSAMA HANSEN
              <br />
              PROJECTS.
            </span>
          </h1>

          <p className="text-text-muted text-sm max-w-lg mb-8 leading-relaxed">
            Dari konsep, desain, hingga proses pengerjaan, kami menghadirkan
            solusi interior terintegrasi yang disesuaikan dengan kebutuhan Anda.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#form"
              className="flex items-center gap-2 bg-primary text-background px-6 py-3 font-bold text-xs hover:opacity-90 transition-opacity"
            >
              KONSULTASI BERSAMA KAMI <span>&rarr;</span>
            </a>
            <a
              href="#proyek"
              className="flex items-center gap-2 border border-primary text-foreground hover:bg-primary hover:text-background px-6 py-3 font-bold text-xs transition-colors"
            >
              LIHAT PROYEK KAMI <span>&rarr;</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 lg:gap-10 text-xs font-medium">
            <div className="flex items-center gap-2">
              <IoDiamondOutline className="text-2xl text-primary" />
              <span className="leading-tight">
                KUALITAS
                <br />
                TERBAIK
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers className="text-2xl text-primary" />
              <span className="leading-tight">
                TIM
                <br />
                PROFESIONAL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiShield className="text-2xl text-primary" />
              <span className="leading-tight">
                GARANSI
                <br />
                KEPUASAN
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Form Card */}
        <div
          className="lg:col-span-4 mt-0 md:mt-20 lg:col-start-9 relative"
          id="form"
        >
          {/* Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-b from-primary/50 to-transparent z-0"></div>

          <div className="relative z-10 bg-card-bg p-6 lg:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <div className="w-6 h-[2px] bg-primary"></div>
              <h3 className="text-sm font-bold tracking-widest uppercase font-serif">
                Mulai Proyek Anda
              </h3>
              <div className="w-6 h-[2px] bg-primary"></div>
            </div>
            <p className="text-center text-text-muted text-[13px] mb-6">
              Ceritakan kebutuhan proyek Anda, tim kami siap membantu
              mewujudkannya.
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Nama Lengkap*"
                className="w-full bg-input-bg text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                placeholder="Nama Perusahaan (Opsional)"
                className="w-full bg-input-bg text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="flex gap-2">
                <select className="bg-input-bg text-gray-900 px-2 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary border-r border-gray-200">
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  placeholder="Nomor WhatsApp*"
                  className="flex-1 bg-input-bg text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-input-bg text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <select
                className="w-full bg-input-bg text-gray-500 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
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
                className="w-full bg-input-bg text-gray-500 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
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
                className="w-full bg-input-bg text-gray-900 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-background px-6 py-3 font-bold text-xs hover:opacity-90 transition-opacity mt-2 flex items-center justify-center gap-2"
              >
                KIRIM PERMINTAAN <span>&rarr;</span>
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-[10px] lg:text-xs text-text-muted">
              <div className="flex items-center gap-1">
                <FiZap className="text-primary" /> Respons Cepat
              </div>
              <div className="flex items-center gap-1">
                <FiLock className="text-primary" /> Data Aman
              </div>
              <div className="flex items-center gap-1">
                <FiCheckCircle className="text-primary" /> Tanpa Kewajiban
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
