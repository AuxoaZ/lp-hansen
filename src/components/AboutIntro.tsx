import Image from "next/image";

export default function AboutIntro() {
  return (
    <section
      className="bg-white text-gray-900 py-20 px-6 lg:px-10 mt-20"
      id="siapa-kami"
    >
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative h-[200px] lg:h-[400px] w-full">
          <Image
            src="/about/intro.jpg"
            alt="Hansen Projects Interior"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <h4 className="text-[#002044] font-bold text-xs tracking-widest uppercase">
              SIAPA KAMI
            </h4>
            <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold font-serif uppercase tracking-wide text-[#002044] mb-8">
            HANSEN PROJECTS
          </h2>

          <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Hansen Projects adalah perusahaan yang bergerak di bidang custom
              furniture dan interior. Kami membantu individu maupun bisnis
              mewujudkan ruang yang sesuai dengan kebutuhan, gaya hidup, dan
              karakter mereka.
            </p>
            <p>
              Dengan pengalaman dan perhatian terhadap detail, kami percaya
              bahwa setiap ruang memiliki potensi untuk menjadi lebih baik —
              bukan hanya indah secara visual, tetapi juga nyaman, fungsional,
              dan tahan lama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
