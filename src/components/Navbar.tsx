"use client";

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useContent } from "@/context/ContentContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { content } = useContent();
  const branding = content.branding;
  const navLinks = branding.navLinks.some((link) => link.url === "/artikel")
    ? branding.navLinks
    : [...branding.navLinks, { label: "Artikel", url: "/artikel" }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = branding.logoUrl || "/logo-hansen.png";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-background transition-all duration-300 ${
        isScrolled
          ? "shadow-lg border-b border-white/5 py-2"
          : "border-b border-primary/50 py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Hansen Image */}
          <img
            src={logoSrc}
            alt={`${branding.siteName} Logo`}
            className="h-9 w-auto object-contain brightness-0 invert transition-opacity group-hover:opacity-90"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-widest text-primary uppercase leading-none font-serif">
              {branding.siteName}
            </span>
            <span className="text-[10px] tracking-[0.3em] text-center text-foreground uppercase mt-1">
              {branding.siteTagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors" aria-label="Cari">
            <FiSearch className="text-lg" />
          </button>
          <a
            href={branding.contactButtonUrl || "#kontak-kami"}
            className="hidden md:block border border-primary text-primary hover:bg-primary hover:text-background px-4 py-2 text-xs font-bold transition-colors"
          >
            {branding.contactButtonText || "HUBUNGI KAMI"}
          </a>
        </div>
      </div>
    </header>
  );
}
