import Image from "next/image";

export default function AboutExperience() {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Image */}
        <div className="relative h-[300px] lg:h-[500px] w-full order-2 lg:order-1">
          <Image
            src="/about/experience.jpg"
            alt="Hansen Projects Worker"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-[#002044] font-bold text-xs tracking-widest uppercase">
              PENGALAMAN KAMI
            </h4>
            <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#002044] leading-tight mb-8">
            Didukung oleh Pengalaman <br />
            dan Keahlian
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-12">
            Dengan kombinasi pengalaman, kreativitas, dan keahlian teknis, kami
            telah menangani berbagai proyek hunian hingga komersial. Setiap
            proyek menjadi kesempatan bagi kami untuk terus belajar, berkembang,
            dan memberikan hasil yang lebih baik.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <span className="text-[#dbae6b] text-4xl font-serif font-bold">
                100+
              </span>
              <span className="text-[#002044] text-xs font-medium">
                Proyek Selesai
              </span>
            </div>

            <div className="flex flex-col gap-2 border-l border-gray-200 pl-6">
              <span className="text-[#dbae6b] text-4xl font-serif font-bold">
                5+
              </span>
              <span className="text-[#002044] text-xs font-medium">
                Tahun Pengalaman
              </span>
            </div>

            <div className="flex flex-col gap-2 border-l border-gray-200 pl-6">
              <span className="text-[#dbae6b] text-4xl font-serif font-bold">
                100%
              </span>
              <span className="text-[#002044] text-xs font-medium">
                Komitmen untuk Kualitas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
