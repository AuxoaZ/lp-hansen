import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/AboutIntro";
import AboutVision from "@/components/AboutVision";
import AboutValues from "@/components/AboutValues";
import AboutExperience from "@/components/AboutExperience";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Pelajari profil Hansen Projects, visi misi, nilai kerja, dan komitmen kami dalam menghadirkan solusi custom furniture dan interior terbaik.",
  alternates: {
    canonical: "/tentang-kami",
  },
  openGraph: {
    title: "Tentang Kami | Hansen Projects - Desain Interior & Custom Furniture",
    description:
      "Pelajari profil Hansen Projects, visi misi, nilai kerja, dan komitmen kami dalam menghadirkan solusi custom furniture dan interior terbaik.",
    url: "/tentang-kami",
  },
};

export default function TentangKami() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <AboutIntro />
        <AboutVision />
        <AboutValues />
        <AboutExperience />
      </main>
      <Footer />
    </div>
  );
}
