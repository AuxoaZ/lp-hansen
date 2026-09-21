import Image from "next/image";

const styles = [
  { name: "Modern", image: "/styles/modern.jpg" },
  { name: "Kontemporer", image: "/styles/contemporary.jpg" },
  { name: "Minimalis", image: "/styles/minimalist.jpg" },
  { name: "Mewah", image: "/styles/luxury.jpg" },
  { name: "Skandinavia", image: "/styles/scandinavian.jpg" },
  { name: "Industrial", image: "/styles/industrial.jpg" },
];

export default function Styles() {
  return (
    <section className="bg-background text-foreground py-20 px-6 lg:px-10" id="gaya">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide text-white">
                JELAJAHI GAYA DESAIN KAMI
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>
            <p className="text-gray-300 text-sm max-w-xl">
              Temukan gaya yang menginspirasi ruang Anda.
            </p>
          </div>
          <a
            href="#"
            className="text-gray-300 hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
          >
            Lihat Semua Gaya <span>&rarr;</span>
          </a>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {styles.map((style, index) => (
            <div
              key={index}
              className="bg-[#00152e] border border-white/5 shadow-lg group overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 xl:h-40 w-full overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4 bg-[#021833]">
                <h3 className="text-white font-medium text-sm">
                  {style.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
