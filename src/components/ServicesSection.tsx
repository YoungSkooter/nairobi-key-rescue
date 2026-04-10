import { Key, Car, Cpu, ShieldAlert } from "lucide-react";

const services = [
  {
    icon: Key,
    title: "Car Key Replacement",
    description: "Quick replacement for all car key types — standard, flip, and smart keys.",
  },
  {
    icon: Car,
    title: "Lost Car Key Assistance",
    description: "Locked out or lost your only key? We create new keys on the spot.",
  },
  {
    icon: Cpu,
    title: "Key Programming & Transponder Keys",
    description: "Expert programming for transponder, smart keys, and key fobs.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Car Lockout Help",
    description: "24/7 emergency lockout service — we come to you fast.",
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
              className="bg-muted rounded-lg p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground uppercase">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
