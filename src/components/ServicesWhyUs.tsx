export default function ServicesWhyUs() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Badge & Headline */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-widest text-[#002044] uppercase">
                MENGAPA MEMILIH LAYANAN KAMI
              </span>
              <div className="w-16 h-[2px] bg-[#dbae6b]"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002044] leading-tight">
              Lebih dari Sekadar Furniture,
              <br />
              Kami Hadir <span className="text-[#dbae6b]">dengan Solusi.</span>
            </h2>
          </div>

          {/* Right Column: Paragraph */}
          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Kami percaya bahwa setiap ruang memiliki potensi. Karena itu, setiap
              layanan kami dirancang dengan pendekatan yang memahami kebutuhan,
              gaya hidup, dan tujuan Anda.
            </p>
          </div>
        </div>

        {/* 4 Feature Columns with Vertical Separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {/* Feature 1 */}
          <div className="flex flex-col lg:px-6 lg:first:pl-0 lg:border-r lg:border-gray-200">
            <div className="mb-6 text-[#dbae6b]">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#002044] mb-3">
              Desain yang Disesuaikan
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Setiap proyek dirancang sesuai dengan kebutuhan dan karakter ruang Anda.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:px-6 lg:border-r lg:border-gray-200">
            <div className="mb-6 text-[#dbae6b]">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L12 12.75l5.571-3M6.429 9.75L12 6.75l5.571 3M6.429 9.75v6l5.571 3.001M17.571 9.75v6L12 21.75M12 12.75v9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#002044] mb-3">
              Material Berkualitas
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Menggunakan material terbaik dan finishing yang rapi untuk hasil yang tahan lama.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:px-6 lg:border-r lg:border-gray-200">
            <div className="mb-6 text-[#dbae6b]">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#002044] mb-3">
              Tim Profesional
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Didukung oleh tim berpengalaman di bidang desain, produksi, dan instalasi.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col lg:px-6 lg:last:pr-0">
            <div className="mb-6 text-[#dbae6b]">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#002044] mb-3">
              Hasil yang Fungsional
            </h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Desain yang estetis, nyaman, dan sesuai dengan tujuan penggunaan ruang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
