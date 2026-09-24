import Image from "next/image";

const services = [
  {
    title: "Desain Interior",
    description: "Konsep, perencanaan, dan pengembangan desain yang detail.",
    image: "/services/interior.jpg",
  },
  {
    title: "Desain & Konstruksi",
    description: "Dari konsep awal hingga realisasi akhir.",
    image: "/services/construction.jpg",
  },
  {
    title: "Konstruksi & Fit Out",
    description:
      "Pelaksanaan profesional untuk ruang komersial dan residensial.",
    image: "/services/fitout.jpg",
  },
  {
    title: "Furnitur Kustom",
    description:
      "Solusi furnitur yang disesuaikan dengan kebutuhan proyek Anda.",
    image: "/services/furniture.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white text-gray-900 py-20" id="layanan">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide text-[#002044]">
                LAYANAN KAMI
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>
            <p className="text-gray-600 text-sm max-w-xl">
              Solusi interior yang komprehensif dan disesuaikan dengan kebutuhan
              Anda.
            </p>
          </div>
          <a
            href="#"
            className="text-[#002044] hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
          >
            Lihat Semua Layanan <span>&rarr;</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-serif text-[#002044] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-xs font-bold text-[#002044] group-hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wide"
                >
                  PELAJARI LEBIH LANJUT <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
