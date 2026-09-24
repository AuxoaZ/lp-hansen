import Image from "next/image";

export default function AboutIntro() {
  return (
    <>
      {/* Hero Header Section - Styled like ServicesIntro */}
      <div className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-background text-foreground pt-28 pb-16 lg:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/intro.jpg"
            alt="Tentang Hansen Projects"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/60 via-65% to-transparent to-90%" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 flex-1 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-text-muted font-base tracking-widest text-xs lg:text-sm uppercase font-bold">
                Tentang Kami
              </span>
              <div className="w-8 h-[2px] bg-primary"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-serif  tracking-wide">
              Lebih Dari Sekadar Furniture,
              <br />
              <span className="text-primary">
                Kami Membangun Ruang Lebih Baik
              </span>
            </h1>

            <p className="text-text-muted text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
              Hansen Projects hadir untuk menciptakan ruang yang fungsional,
              estetik, dan bermakna melalui solusi interior dan furniture custom
              yang disesuaikan dengan kebutuhan setiap klien.
            </p>

            {/* <div className="flex flex-wrap items-center gap-3">
              <a
                href="#siapa-kami"
                className="flex items-center gap-2 bg-primary text-background px-6 py-3 font-bold text-xs hover:opacity-90 transition-opacity uppercase tracking-wider"
              >
                KENALI KAMI LEBIH DEKAT <span>&rarr;</span>
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Hansen%20Projects,%20saya%20ingin%20berkonsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary text-foreground hover:bg-primary hover:text-background px-6 py-3 font-bold text-xs transition-colors uppercase tracking-wider"
              >
                HUBUNGI KAMI <span>&rarr;</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Siapa Kami Section */}
      <section
        className="bg-white text-gray-900 py-20"
        id="siapa-kami"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-[250px] lg:h-[420px] w-full shadow-lg overflow-hidden rounded-sm">
            <Image
              src="/about/experience.jpg"
              alt="Hansen Projects Interior Workshop"
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

            <h2 className="text-3xl lg:text-4xl font-bold font-serif uppercase tracking-wide text-[#002044] mb-6">
              HANSEN PROJECTS
            </h2>

            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
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
    </>
  );
}
