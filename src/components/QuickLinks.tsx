import { Link } from "react-router-dom";
import { Key, Cpu, ShieldAlert, Phone } from "lucide-react";

const pages = [
  { to: "/car-key-replacement", icon: Key, title: "Car Key Replacement", desc: "All key types — cut & programmed on the spot" },
  { to: "/key-fob-programming", icon: Cpu, title: "Key Fob Programming", desc: "Transponder, smart key & remote programming" },
  { to: "/emergency-locksmith", icon: ShieldAlert, title: "Emergency Locksmith", desc: "24/7 emergency car lockout service" },
  { to: "/contact", icon: Phone, title: "Contact Us", desc: "Get in touch for a quick quote" },
];

const QuickLinks = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container px-4">
        <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase text-center mb-10 text-foreground">
          Explore Our <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <page.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase text-foreground mb-1">{page.title}</h3>
              <p className="text-sm text-muted-foreground">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
