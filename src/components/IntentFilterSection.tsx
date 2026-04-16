import { KeyRound, AlertTriangle, Copy, Wrench } from "lucide-react";

const issues = [
  { icon: KeyRound, label: "Lost car key (no spare)" },
  { icon: AlertTriangle, label: "Car key not working" },
  { icon: Copy, label: "Need a spare key" },
  { icon: Wrench, label: "Key stuck in ignition" },
];

const WHATSAPP_BASE = "https://wa.me/254729312480?text=";

const IntentFilterSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-10 text-foreground">
          What Do You Need <span className="text-primary">Help With?</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
          {issues.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href={`${WHATSAPP_BASE}${encodeURIComponent(`Hi, I need help.\n\nMy issue is: ${label}\nMy car model is: ___\nMy location is: ___`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg bg-muted border border-border hover:border-primary transition-colors group cursor-pointer"
            >
              <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-lg">
          Select your issue and contact us now for fast assistance.
        </p>
      </div>
    </section>
  );
};

export default IntentFilterSection;
