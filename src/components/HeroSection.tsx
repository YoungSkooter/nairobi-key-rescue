import heroBg from "@/assets/hero-banner.jpg";
import { Phone, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Key Hub Auto - Professional Car Key Solutions"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      
      <div className="relative z-10 container text-center px-4 py-20">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-4 text-foreground">
          Lost Car Key or <span className="text-primary">Locked Out?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Fast Car Key Replacement in Nairobi. We Come to You Anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="tel:+254729312480"
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg md:text-xl font-semibold uppercase px-8 py-4 rounded-lg animate-pulse-glow transition-transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Call Now: 0729 312 480
          </a>

          <a
            href="https://wa.me/254729312480"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-cta-whatsapp text-foreground font-heading text-lg md:text-xl font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>

        <p className="text-sm text-muted-foreground tracking-wide">
          Fast Response • Mobile Service • Nairobi Wide Coverage
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
