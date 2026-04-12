import { Phone, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 text-secondary-foreground">
          Need Help <span className="text-primary">Now?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Call or WhatsApp now and we'll come to your location.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+254729312480"
            onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') (window as any).gtag_report_conversion('tel:+254729312480'); }}
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Call Now
          </a>
          <a
            href="https://wa.me/254729312480"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-cta-whatsapp text-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
