import HeroSection from "@/components/HeroSection";
import IntentFilterSection from "@/components/IntentFilterSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntentFilterSection />
      <HowItWorks />
      <PricingSection />
      <LocationSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <QuickLinks />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
