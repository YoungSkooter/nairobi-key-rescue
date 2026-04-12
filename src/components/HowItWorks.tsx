import { Phone, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4 text-secondary-foreground">
          Locked Out or Lost Your <span className="text-primary">Key?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Don't stay stranded. Our mobile locksmith can reach you quickly and replace or program your car key on the spot.
        </p>

        <a
          href="tel:+254729312480"
          onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') (window as any).gtag_report_conversion('tel:+254729312480'); }}
          className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
        >
          <Phone className="w-6 h-6" />
          Call Now for Fast Help
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
