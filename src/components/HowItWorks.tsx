import { Phone, MapPin, Wrench } from "lucide-react";

const steps = [
  { icon: Phone, step: "1", title: "Call or WhatsApp us", description: "Tell us your car model, location, and issue." },
  { icon: MapPin, step: "2", title: "We come to your location", description: "Our mobile technician arrives fast." },
  { icon: Wrench, step: "3", title: "We cut & program your key on-site", description: "Done in under 60 minutes." },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-12 text-foreground">
          Get Back on the Road in <span className="text-primary">3 Simple Steps</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div key={step} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-heading text-4xl font-bold text-primary/30">{step}</span>
              <h3 className="font-heading text-xl font-semibold uppercase text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          No towing. No delays. We handle everything where you are.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
