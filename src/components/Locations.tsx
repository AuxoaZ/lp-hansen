import { FiMapPin, FiArrowRight } from "react-icons/fi";

const cities = [
  "Jakarta",
  "Tangerang",
  "Bekasi",
  "Bandung",
  "Surabaya",
  "dan lainnya",
];

export default function Locations() {
  return (
    <section
      className="bg-[#f9fafb] text-gray-900 py-20 relative overflow-hidden"
      id="lokasi"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide text-[#002044]">
                LOKASI KAMI
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>
            <p className="text-gray-600 text-sm mb-8">
              Kami melayani klien di berbagai kota besar di Indonesia.
            </p>

            <ul className="space-y-4">
              {cities.map((city, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-[#002044] font-medium text-sm"
                >
                  <FiMapPin className="text-lg" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Center Map (SVG Background with pins) */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] w-full flex items-center justify-center">
            {/* The SVG Map from user */}
            <img
              src="/map-location.png"
              alt="Peta Indonesia"
              className="w-full h-full object-contain opacity-20 lg:opacity-100 drop-shadow-sm pointer-events-none"
            />

            {/* 
              Mockup Pins (Approximate locations for demo purposes).
              Since we don't know the exact SVG viewBox, we use percentages 
              that roughly match the provided mockup image for Java island.
            */}
            {/* <div className="absolute top-[40%] left-[20%] w-3 h-3 bg-[#002044] rounded-full shadow-md"></div>
            <div className="absolute top-[60%] left-[35%] w-3 h-3 bg-[#002044] rounded-full shadow-md"></div>
            <div className="absolute top-[75%] left-[45%] w-3 h-3 bg-[#002044] rounded-full shadow-md"></div>
            <div className="absolute top-[80%] left-[55%] w-3 h-3 bg-[#002044] rounded-full shadow-md"></div>
            <div className="absolute top-[85%] left-[65%] w-3 h-3 bg-[#002044] rounded-full shadow-md"></div> */}
          </div>

          {/* Right CTA Box */}
          <div className="lg:col-span-3 flex justify-end">
            <div className="bg-white p-8 shadow-xl border border-gray-100 rounded-sm max-w-sm w-full">
              <p className="text-[#002044] font-medium text-sm mb-6">
                Diskusikan lokasi proyek Anda.
              </p>
              <button className="w-full bg-[#dbae6b] hover:bg-[#c29858] text-white py-3 px-6 text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                HUBUNGI KAMI <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
