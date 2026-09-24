import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesDetail from "@/components/ServicesDetail";
import ServicesParallax from "@/components/ServicesParallax";
import ServicesWhyUs from "@/components/ServicesWhyUs";
import Process from "@/components/Process";
import ServicesCalculator from "@/components/ServicesCalculator";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Layanan kami | Hansen Projects - Custom Furniture & Interior",
  description:
    "Hansen Projects menyediakan layanan custom furniture dan interior untuk berbagai kebutuhan ruang, mulai dari hunian hingga komersial. Desain fungsional, material berkualitas, pengerjaan profesional.",
};

export default function LayananPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {/* Intro Section with Badge, Headline & Subline */}
        <ServicesIntro />

        {/* Detailed Services Listing (6 Cards Grid) */}
        <ServicesDetail />

        {/* Parallax Banner Section */}
        <ServicesParallax />

        {/* Mengapa Memilih Layanan Kami Section */}
        <ServicesWhyUs />

        {/* Call to Action Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
