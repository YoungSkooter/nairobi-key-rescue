import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import GallerySection from "@/components/GallerySection";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <HowItWorks />
      <GallerySection />
      <LocationSection />
      <FinalCTA />
      <QuickLinks />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
