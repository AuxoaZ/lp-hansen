import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    quote: "Tim sangat profesional, responsif, dan hasilnya melebihi ekspektasi kami. Sangat direkomendasikan.",
    name: "Andi Pratama",
    role: "Klien Pribadi",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote: "Proses yang lancar dari desain hingga penyelesaian. Hasilnya benar-benar mencerminkan identitas brand kami.",
    name: "Rina Wijaya",
    role: "Pemilik Bisnis",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: "Detail, kualitas, dan komitmen mereka terlihat jelas dalam setiap hasil kerja. Kami sangat puas.",
    name: "Budi Santoso",
    role: "Klien Korporat",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f9fafb] text-gray-900 py-20" id="testimoni">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide text-[#002044]">
                APA KATA KLIEN KAMI
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>
            <p className="text-gray-600 text-sm max-w-xl">
              Kepercayaan mereka menginspirasi kami untuk menghadirkan ruang yang lebih baik.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-12 h-12 rounded-full border border-[#dbae6b] text-[#dbae6b] flex items-center justify-center hover:bg-[#dbae6b] hover:text-white transition-colors">
              <FiArrowLeft className="text-xl" />
            </button>
            <button className="w-12 h-12 rounded-full border border-[#dbae6b] text-[#dbae6b] flex items-center justify-center hover:bg-[#dbae6b] hover:text-white transition-colors">
              <FiArrowRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <div key={index} className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
              <p className="text-[#002044] text-lg font-medium leading-relaxed mb-8">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#002044] font-bold text-sm">
                    {testi.name}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {testi.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
