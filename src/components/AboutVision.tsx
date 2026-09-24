import { FiTarget, FiFlag } from "react-icons/fi";

export default function AboutVision() {
  return (
    <section className="bg-[#002044] text-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">
              VISI & MISI
            </h4>
            <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            Ruang yang Lebih Baik <br />
            untuk <span className="text-[#dbae6b]">Masa Depan.</span>
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-12">
          
          {/* Visi */}
          <div className="flex items-start gap-6">
            <div className="text-[#dbae6b] text-4xl shrink-0">
              <FiFlag strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif mb-3">Visi</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Menjadi pilihan utama dalam solusi interior dan furniture custom yang berkualitas dan terpercaya.
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10"></div>

          {/* Misi */}
          <div className="flex items-start gap-6">
            <div className="text-[#dbae6b] text-4xl shrink-0">
              <FiTarget strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif mb-3">Misi</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Menghadirkan solusi interior yang fungsional, estetik, dan sesuai dengan kebutuhan klien melalui layanan profesional, material berkualitas, dan proses kerja yang terstruktur.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
