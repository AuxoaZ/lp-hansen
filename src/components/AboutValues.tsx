import { FiAward, FiUsers, FiThumbsUp, FiShield } from "react-icons/fi";

const values = [
  {
    title: "Kualitas",
    desc: "Mengutamakan hasil kerja yang rapi, presisi, dan tahan lama.",
    icon: <FiAward className="text-4xl text-[#dbae6b]" strokeWidth={1.5} />,
  },
  {
    title: "Profesionalisme",
    desc: "Bekerja dengan tim yang berpengalaman dan bertanggung jawab.",
    icon: <FiUsers className="text-4xl text-[#dbae6b]" strokeWidth={1.5} />,
  },
  {
    title: "Solusi",
    desc: "Memberikan solusi yang sesuai dengan kebutuhan dan karakter ruang Anda.",
    icon: <FiThumbsUp className="text-4xl text-[#dbae6b]" strokeWidth={1.5} />,
  },
  {
    title: "Kepercayaan",
    desc: "Membangun hubungan jangka panjang dengan setiap klien.",
    icon: <FiShield className="text-4xl text-[#dbae6b]" strokeWidth={1.5} />,
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#f9fafb] text-gray-900 py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <h4 className="text-[#002044] font-bold text-xs tracking-widest uppercase">
                NILAI KAMI
              </h4>
              <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#002044] leading-tight">
              Nilai yang Kami Pegang <br className="hidden md:block" />
              Dalam Setiap Proyek.
            </h2>
          </div>
          
          <div className="max-w-md lg:pb-2">
            <p className="text-gray-600 text-sm leading-relaxed">
              Setiap proyek yang kami kerjakan didasari oleh nilai-nilai yang menjadi komitmen kami dalam memberikan hasil terbaik bagi setiap klien.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {values.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-4 ${
                index !== values.length - 1 ? "lg:border-r lg:border-gray-200 lg:pr-8" : ""
              }`}
            >
              <div className="mb-2">
                {item.icon}
              </div>
              <h3 className="text-[#002044] font-bold text-lg font-serif">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
