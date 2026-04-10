import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <LocationSection />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
