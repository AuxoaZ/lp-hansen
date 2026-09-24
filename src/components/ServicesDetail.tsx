import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const servicesList = [
  {
    number: "01",
    title: "Kitchen Set",
    description:
      "Solusi kitchen set custom yang dirancang untuk menyesuaikan ukuran, kebutuhan penyimpanan, dan aktivitas sehari-hari.",
    image: "/services/furniture.jpg",
  },
  {
    number: "02",
    title: "Interior Premium",
    description:
      "Perancangan interior dengan perhatian pada detail, material, fungsi, dan karakter ruang.",
    image: "/services/interior.jpg",
  },
  {
    number: "03",
    title: "Rumah",
    description:
      "Menciptakan ruang hunian yang nyaman, fungsional, dan sesuai dengan kebutuhan setiap anggota keluarga.",
    image: "/projects/residential.jpg",
  },
  {
    number: "04",
    title: "Apartemen",
    description:
      "Memaksimalkan ruang yang terbatas menjadi area yang nyaman, rapi, dan tetap memiliki karakter.",
    image: "/styles/minimalist.jpg",
  },
  {
    number: "05",
    title: "Kantor",
    description:
      "Menciptakan ruang kerja yang mendukung aktivitas, produktivitas, dan identitas perusahaan.",
    image: "/services/fitout.jpg",
  },
  {
    number: "06",
    title: "Hotel",
    description:
      "Solusi interior dan furniture untuk menciptakan pengalaman ruang yang nyaman dan sesuai dengan karakter hospitality.",
    image: "/styles/luxury.jpg",
  },
];

export default function ServicesDetail() {
  return (
    <section className="bg-white text-gray-900 py-20" id="daftar-layanan">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#002044] uppercase">
                LAYANAN
              </span>
              <div className="w-12 h-[2px] bg-[#dbae6b]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#002044]">
              Layanan Kami
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl">
              Solusi furniture dan interior yang disesuaikan dengan kebutuhan ruang Anda.
            </p>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Hansen%20Projects,%20saya%20ingin%20berkonsultasi%20kebutuhan%20interior"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#002044] hover:text-[#dbae6b] font-medium text-sm flex items-center gap-2 transition-colors shrink-0 group"
          >
            Konsultasikan Kebutuhan Anda
            <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {servicesList.map((service) => (
            <div key={service.number} className="flex flex-col group">
              {/* Card Image */}
              <div className="relative h-60 md:h-64 w-full overflow-hidden rounded-sm mb-6 bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content with Number */}
              <div className="flex items-start gap-4 relative flex-1">
                <span className="text-3xl lg:text-4xl font-serif font-bold text-[#dbae6b] leading-none shrink-0 pt-0.5">
                  {service.number}
                </span>

                <div className="flex-1 pr-6">
                  <h3 className="text-xl font-serif font-bold text-[#002044] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow link */}
                <a
                  href="#kalkulator-estimasi"
                  aria-label={`Detail ${service.title}`}
                  className="text-[#002044] hover:text-[#dbae6b] transition-colors absolute bottom-0 right-0 p-1"
                >
                  <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
