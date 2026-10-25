import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GymatrixSpotlight from "@/components/GymatrixSpotlight";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections: Hero, About Us, Product & Details, FAQs */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <GymatrixSpotlight />
        <FAQSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
