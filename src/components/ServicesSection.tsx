import { Key, Copy, Search, Cpu, Disc, ShieldAlert } from "lucide-react";

const services = [
  { icon: Key, title: "Car Key Replacement" },
  { icon: Copy, title: "Car Key Duplication" },
  { icon: Search, title: "Lost Car Key Replacement" },
  { icon: Cpu, title: "Car Key Programming" },
  { icon: Disc, title: "Key Fob Replacement" },
  { icon: ShieldAlert, title: "Emergency Car Unlocking" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase mb-12 text-foreground">
          Our <span className="text-primary">Services</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-muted border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-foreground uppercase">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
