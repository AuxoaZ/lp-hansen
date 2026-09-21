import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/AboutIntro";
import AboutVision from "@/components/AboutVision";
import AboutValues from "@/components/AboutValues";
import AboutExperience from "@/components/AboutExperience";

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
