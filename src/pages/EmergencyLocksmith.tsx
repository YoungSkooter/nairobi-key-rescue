import { Phone, MessageCircle, ShieldAlert, CheckCircle, MapPin, Clock } from "lucide-react";
import shellReplacement from "@/assets/shell-replacement.jpg";
import duplication from "@/assets/duplication.jpg";
import FloatingButtons from "@/components/FloatingButtons";

const reasons = [
  "24/7 emergency response",
  "Average arrival time: 30 minutes",
  "Non-destructive car opening",
  "All car makes & models",
  "Mobile service across Nairobi",
  "No hidden charges",
];

const EmergencyLocksmith = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={shellReplacement} alt="Emergency Car Locksmith Nairobi" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
        <div className="relative z-10 container text-center px-4 py-20">
          <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive border border-destructive/30 rounded-full px-4 py-2 mb-6 font-heading uppercase text-sm">
            <Clock className="w-4 h-4" /> Available 24/7
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Emergency Car <span className="text-primary">Locksmith</span> Nairobi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Locked out of your car? We'll be there fast. 24/7 emergency car lockout service across Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a
              href="tel:+254729312480"
              onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') (window as any).gtag_report_conversion('tel:+254729312480'); }}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg animate-pulse-glow transition-transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call Now: 0729 312 480
            </a>
            <a
              href="https://wa.me/254729312480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-cta-whatsapp text-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 inline mr-1" /> Ngong Rd, Adam's Arcade • We Come to You Anywhere
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center mb-12">
            Fast <span className="text-primary">Emergency</span> Response
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <img src={duplication} alt="Emergency lockout assistance" className="rounded-lg w-full h-64 object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">
            Locked Out <span className="text-primary">Right Now?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Don't panic. Call us and we'll be there in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254729312480"
              onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') (window as any).gtag_report_conversion('tel:+254729312480'); }}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call Now: 0729 312 480
            </a>
            <a
              href="https://wa.me/254729312480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-cta-whatsapp text-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default EmergencyLocksmith;
