import heroBg from "@/assets/hero-banner.jpg";
import { Phone, Star, CheckCircle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { trackCallClick, trackWhatsAppClick } from "@/lib/tracking";

const WHATSAPP_URL = "https://wa.me/254729312480?text=Hi%2C%20I%20need%20help%20with%20my%20car%20key.%0A%0AMy%20car%20model%20is%3A%20___%0AMy%20location%20is%3A%20___%0AMy%20issue%20is%3A%20___";

const trustPoints = ["All Car Models", "Same-Day Service", "Mobile Technician Near You"];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Car Key Replacement Near You – Fast Mobile Locksmith in Nairobi"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />

      <div className="relative z-10 container text-center px-4 py-20">
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-sm font-semibold text-foreground">5.0 on Google</span>
        </div>

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-4 text-foreground">
          Car Key Replacement Near You – <span className="text-primary">Fast Mobile Locksmith</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Lost your car key? We come to your location anywhere in Nairobi. Key cutting &amp; programming done on-site in under 60 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="tel:+254729312480"
            onClick={trackCallClick}
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg md:text-xl font-semibold uppercase px-8 py-4 rounded-lg animate-pulse-glow transition-transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Call Now for Immediate Help
          </a>

          <WhatsAppButton href={WHATSAPP_URL} size="lg" onClick={trackWhatsAppClick}>
            WhatsApp Now
          </WhatsAppButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {trustPoints.map((point) => (
            <span key={point} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
