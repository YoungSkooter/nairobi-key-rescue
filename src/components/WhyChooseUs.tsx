import { MapPin, Zap, CalendarCheck, Car, BadgeDollarSign } from "lucide-react";

const bullets = [
  { icon: MapPin, text: "Mobile service – we come to your location" },
  { icon: Zap, text: "Fast response in Nairobi" },
  { icon: CalendarCheck, text: "Same-day key replacement" },
  { icon: Car, text: "Works with all car models" },
  { icon: BadgeDollarSign, text: "Affordable and reliable service" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase mb-12 text-foreground">
          Why <span className="text-accent">Choose Us</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bullets.map((item) => (
            <div key={item.text} className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-foreground font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
