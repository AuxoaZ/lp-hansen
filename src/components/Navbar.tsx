"use client";

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-background transition-all duration-300 ${
        isScrolled
          ? "shadow-lg border-b border-white/5 py-2"
          : "border-b border-primary/50 py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-widest text-primary uppercase leading-none font-serif">
              Hansen
            </span>
            <span className="text-[10px] tracking-[0.3em] text-foreground uppercase mt-1">
              Projects
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="/tentang-kami" className="hover:text-primary transition-colors">
            Tentang Kami
          </Link>
          <Link href="/#layanan" className="hover:text-primary transition-colors">
            Layanan
          </Link>
          <Link href="/#portofolio" className="hover:text-primary transition-colors">
            Portofolio
          </Link>
          <Link href="#kontak" className="hover:text-primary transition-colors">
            Kontak
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors">
            <FiSearch className="text-lg" />
          </button>
          <button className="hidden md:block border border-primary text-primary hover:bg-primary hover:text-background px-4 py-2 text-xs font-bold transition-colors">
            HUBUNGI KAMI
          </button>
        </div>
      </div>
    </header>
  );
}
