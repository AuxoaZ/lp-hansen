import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Styles from "@/components/Styles";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ServicesParallax from "@/components/ServicesParallax";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Styles />
      <Projects />
      <Testimonials />
      <Locations />
      <ServicesParallax />
      <FAQ />
      {/* Contact Section with Left Info & Right Form */}
      <ContactSection />
      {/* Google Maps Embed Section */}
      <MapSection />
      <CTA />
      <Footer />
    </div>
  );
}
