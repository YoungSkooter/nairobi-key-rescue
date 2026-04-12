import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
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
