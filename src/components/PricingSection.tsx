import { ShieldCheck, Phone } from "lucide-react";
import { trackCallClick } from "@/lib/tracking";

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6 text-secondary-foreground">
          Transparent <span className="text-primary">Pricing</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          Prices start from <span className="text-foreground font-semibold">KES 3,500</span> depending on your car model and key type.
        </p>
        <p className="text-muted-foreground text-lg mb-8">
          We'll give you a quick quote on call before we come.
        </p>

        <div className="inline-flex items-center gap-2 bg-muted/50 border border-border rounded-lg px-6 py-3 mb-8">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">No hidden charges. Pay after the job is done.</span>
        </div>

        <div className="block">
          <a
            href="tel:+254729312480"
            onClick={trackCallClick}
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
