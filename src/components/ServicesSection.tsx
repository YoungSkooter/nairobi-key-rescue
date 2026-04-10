import smartKey from "@/assets/smart-key.jpg";
import shellReplacement from "@/assets/shell-replacement.jpg";
import keyRemote from "@/assets/key-remote.jpg";
import duplication from "@/assets/duplication.jpg";
import { Key, Car, Cpu, ShieldAlert } from "lucide-react";

const services = [
  {
    icon: Key,
    title: "Car Key Replacement",
    description: "Quick replacement for all car key types — standard, flip, and smart keys.",
    image: duplication,
  },
  {
    icon: Car,
    title: "Lost Car Key Assistance",
    description: "Locked out or lost your only key? We create new keys on the spot.",
    image: smartKey,
  },
  {
    icon: Cpu,
    title: "Key Programming & Transponder Keys",
    description: "Expert programming for transponder, smart keys, and key fobs.",
    image: keyRemote,
  },
  {
    icon: ShieldAlert,
    title: "Emergency Car Lockout Help",
    description: "24/7 emergency lockout service — we come to you fast.",
    image: shellReplacement,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase mb-12 text-foreground">
          Our Car Locksmith <span className="text-primary">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-muted rounded-lg border border-border hover:border-primary/50 transition-colors group overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground uppercase">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
