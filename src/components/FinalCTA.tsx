import { Phone, Zap } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const WHATSAPP_URL = "https://wa.me/254729312480?text=Hi%2C%20I%20need%20help%20with%20my%20car%20key.%0A%0AMy%20car%20model%20is%3A%20___%0AMy%20location%20is%3A%20___%0AMy%20issue%20is%3A%20___";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 text-secondary-foreground">
          Need Help <span className="text-primary">Right Now?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Don't stay stuck. Call or message us now and get back on the road fast.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="tel:+254729312480"
            onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') (window as any).gtag_report_conversion('tel:+254729312480'); }}
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Call Now
          </a>
          <WhatsAppButton href={WHATSAPP_URL} size="lg">
            WhatsApp Now
          </WhatsAppButton>
        </div>

        <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
          <Zap className="w-4 h-4 text-accent" />
          <span>Technician available. Fast response guaranteed.</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
