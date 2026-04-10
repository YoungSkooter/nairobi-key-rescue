import { MapPin, Timer, Key, PhoneCall } from "lucide-react";

const reasons = [
  { icon: MapPin, text: "We Come to Your Location Anywhere in Nairobi" },
  { icon: Timer, text: "Fast Response Time (20–30 Minutes in Most Areas)" },
  { icon: Key, text: "Car Key Replacement & Programming On-Site" },
  { icon: PhoneCall, text: "Ready to Help When You Need It Most" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase mb-12 text-foreground">
          Why Choose <span className="text-accent">Our Service?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.text} className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground font-medium pt-2">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
