import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    title: "Hunian Pribadi",
    location: "Jakarta",
    image: "/projects/residential.jpg",
  },
  {
    title: "Interior Kantor",
    location: "Tangerang",
    image: "/services/fitout.jpg", // Reusing image due to quota
  },
  {
    title: "Ruang Retail",
    location: "Bandung",
    image: "/styles/luxury.jpg", // Reusing image due to quota
  },
  {
    title: "Proyek Hospitality",
    location: "Bali",
    image: "/styles/scandinavian.jpg", // Reusing image due to quota
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f9fafb] text-gray-900 py-20 px-6 lg:px-10" id="proyek">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide text-[#002044]">
                PROYEK TERPILIH
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>
            <p className="text-gray-600 text-sm max-w-xl">
              Jelajahi beberapa proyek terbaru kami untuk ruang hunian, komersial, dan hospitality.
            </p>
          </div>
          <a
            href="#"
            className="text-[#002044] hover:text-primary font-medium text-sm flex items-center gap-2 transition-colors"
          >
            Lihat Semua Proyek <span>&rarr;</span>
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 pb-1">
          <button className="bg-[#dbae6b] text-white px-8 py-2.5 text-sm font-medium shadow-sm transition-colors">
            Semua
          </button>
          <button className="bg-white text-gray-600 hover:text-[#002044] border border-gray-200 hover:border-gray-300 px-8 py-2.5 text-sm font-medium transition-colors">
            Hunian
          </button>
          <button className="bg-white text-gray-600 hover:text-[#002044] border border-gray-200 hover:border-gray-300 px-8 py-2.5 text-sm font-medium transition-colors">
            Komersial
          </button>
          <button className="bg-white text-gray-600 hover:text-[#002044] border border-gray-200 hover:border-gray-300 px-8 py-2.5 text-sm font-medium transition-colors">
            Perkantoran
          </button>
          <button className="bg-white text-gray-600 hover:text-[#002044] border border-gray-200 hover:border-gray-300 px-8 py-2.5 text-sm font-medium transition-colors">
            Hospitality
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[320px] lg:h-[400px] w-full overflow-hidden shadow-sm cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay bottom to top */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002044]/90 via-[#002044]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {project.location}
                  </p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center text-white border border-white/30 rounded-full group-hover:bg-primary group-hover:border-primary group-hover:text-[#002044] transition-all duration-300">
                  <FiArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
