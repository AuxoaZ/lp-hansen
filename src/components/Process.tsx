import {
  FiMessageCircle,
  FiPenTool,
  FiLayers,
  FiClipboard,
  FiTool,
  FiHome,
  FiChevronRight,
} from "react-icons/fi";

const steps = [
  {
    num: "01",
    title: "Konsultasi",
    desc: "Diskusikan kebutuhan dan tujuan Anda.",
    Icon: FiMessageCircle,
  },
  {
    num: "02",
    title: "Survey Lokasi",
    desc: "Pengukuran dan observasi langsung di lokasi.",
    Icon: FiPenTool,
  },
  {
    num: "03",
    title: "Pengembangan Desain",
    desc: "Konsep, visualisasi 3D, dan gambar teknis.",
    Icon: FiLayers,
  },
  {
    num: "04",
    title: "Proposal & Kesepakatan",
    desc: "Detail proposal dan jadwal proyek.",
    Icon: FiClipboard,
  },
  {
    num: "05",
    title: "Konstruksi & Produksi",
    desc: "Pelaksanaan profesional dan kontrol kualitas.",
    Icon: FiTool,
  },
  {
    num: "06",
    title: "Serah Terima",
    desc: "Penyelesaian proyek dan dukungan after-sales.",
    Icon: FiHome,
  },
];

export default function Process() {
  return (
    <section className="bg-[#f9fafb] text-gray-900 py-20" id="proses">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide text-[#002044]">
                PROSES KAMI
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>
            <p className="text-gray-600 text-sm max-w-xl">
              Proses yang jelas dan terstruktur untuk memastikan hasil terbaik
              bagi proyek Anda.
            </p>
          </div>
          <a
            href="#"
            className="text-[#002044] hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
          >
            Lihat Semua Layanan <span>&rarr;</span>
          </a>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-2 justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex items-start gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#dbae6b] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {step.num}
                  </div>
                  <step.Icon
                    className="text-3xl text-[#002044]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[#002044] font-bold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>

              {/* Arrow separator - visible only on large screens, except for the last item */}
              {index < steps.length - 1 && (
                <div className="hidden xl:flex items-center h-10 px-2 text-gray-300">
                  <FiChevronRight className="text-3xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
