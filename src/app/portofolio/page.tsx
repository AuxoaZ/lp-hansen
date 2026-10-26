import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioIntro from "@/components/PortfolioIntro";
import PortfolioGallery from "@/components/PortfolioGallery";
import PortfolioBanner from "@/components/PortfolioBanner";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portofolio Proyek Interior & Custom Furniture",
  description:
    "Jelajahi galeri portofolio pengerjaan desain interior dan custom furniture terbaik oleh Hansen Projects untuk hunian, komersial, kantor, dan kitchen set mewah.",
  alternates: {
    canonical: "/portofolio",
  },
  openGraph: {
    title: "Portofolio Proyek Interior & Custom Furniture | Hansen Projects",
    description:
      "Jelajahi galeri portofolio pengerjaan desain interior dan custom furniture terbaik oleh Hansen Projects untuk hunian, komersial, kantor, dan kitchen set mewah.",
    url: "/portofolio",
  },
};

export default function PortofolioPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {/* Intro Section with Badge, Headline, Subline & 3 Highlights */}
        <PortfolioIntro />

        {/* Portfolio Gallery Section with Categories */}
        <PortfolioGallery />

        {/* Bersama Mewujudkan Section */}
        {/* <PortfolioBanner /> */}

        {/* Call to Action Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
