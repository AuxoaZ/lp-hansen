import Image from "next/image";

export default function MapSection() {
  return (
    <section className="bg-white text-gray-900 py-16 border-t border-gray-100" id="peta-lokasi">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#002044] uppercase">
                LOKASI WORKSHOP & KANTOR
              </span>
              <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002044]">
              Kunjungi Tempat Kami
            </h2>
          </div>
          <p className="text-gray-600 text-xs md:text-sm max-w-md">
            Ruko BSD Junction Blok B No. 45, Karang Tengah, Tangerang City, Banten 15310
          </p>
        </div>

        {/* 2 Columns: Left Photo Exterior, Right Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Foto Kantor dari Luar */}
          <div className="relative h-[380px] lg:h-[450px] w-full rounded-sm overflow-hidden shadow-xl border border-gray-200 group">
            <Image
              src="/about/experience.jpg"
              alt="Foto Kantor dan Workshop Hansen Projects Ruko BSD Junction"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002044]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 border-l-4 border-[#dbae6b] shadow-lg">
              <p className="text-[#002044] font-serif text-base font-bold">
                Workshop & Studio Hansen Projects
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Ruko BSD Junction Blok B No. 45, Tangerang City, Banten
              </p>
            </div>
          </div>

          {/* Right Column - Google Maps Embed */}
          <div className="w-full h-[380px] lg:h-[450px] rounded-sm overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27809.99035752152!2d106.67945161382683!3d-6.227209824155024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa1f3c778fa3%3A0xab57179a8118fa60!2sRUKO%20BSD%20JUNCTION%2C%20Blk.%20B%20No.45%2C%20RT.002%2FRW.012%2C%20Pedurenan%2C%20Karang%20Tengah%2C%20Tangerang%20City%2C%20Banten%2015310!5e1!3m2!1sen!2sid!4v1790257458208!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full min-h-[380px] lg:min-h-[450px]"
              title="Peta Lokasi Hansen Projects Ruko BSD Junction"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
