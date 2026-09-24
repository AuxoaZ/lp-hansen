import { FiInstagram, FiFacebook, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#000d1c] text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-bold tracking-widest text-[#dbae6b] uppercase leading-none font-serif">
                Hansen
              </span>
              <span className="text-[10px] tracking-[0.3em] text-white uppercase mt-1">
                Projects
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-xs">
              Solusi end-to-end untuk kebutuhan interior dan konstruksi Anda. Berdedikasi untuk kualitas, estetika, dan fungsionalitas.
            </p>
            <div className="flex items-center gap-4 text-[#dbae6b]">
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><FiInstagram /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><FiFacebook /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><FiLinkedin /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Tautan Cepat</h4>
            <ul className="space-y-3 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Portofolio</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Proses Kerja</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Karir</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Layanan</h4>
            <ul className="space-y-3 text-gray-400 text-xs">
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Desain Interior</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Desain & Konstruksi</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Konstruksi & Fit Out</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Furnitur Kustom</a></li>
              <li><a href="#" className="hover:text-[#dbae6b] transition-colors">Konsultasi Desain</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Kontak Kami</h4>
            <ul className="space-y-4 text-gray-400 text-xs">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#dbae6b] text-base shrink-0 mt-0.5" />
                <span>Gedung Hansen Lt. 4, Jl. Jendral Sudirman No. 123, Jakarta Pusat 10220</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#dbae6b] text-base shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#dbae6b] text-base shrink-0" />
                <span>hello@hansenprojects.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hansen Projects. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
