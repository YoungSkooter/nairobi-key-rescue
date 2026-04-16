import { Phone, MessageCircle, Copy, CheckCircle, MapPin } from "lucide-react";
import duplication from "@/assets/duplication.jpg";
import shellKey from "@/assets/shell-key.jpg";
import FloatingButtons from "@/components/FloatingButtons";
import { trackCallClick, trackWhatsAppClick } from "@/lib/tracking";

const benefits = [
  "Exact duplicates of your existing car key",
  "Standard, transponder & flip key duplication",
  "Quick turnaround — usually under 30 minutes",
  "Mobile service — we come to your location",
  "Works with all car makes & models",
  "Affordable pricing, no hidden fees",
];

const CarKeyDuplication = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={duplication} alt="Car Key Duplication Nairobi" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
        <div className="relative z-10 container text-center px-4 py-20">
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">Car Key <span className="text-primary">Duplication</span> in Nairobi</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">Need a spare car key? We duplicate all types of car keys fast and affordably — right where you are.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a href="tel:+254729312480" onClick={trackCallClick} className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg animate-pulse-glow transition-transform hover:scale-105">
              <Phone className="w-6 h-6" /> Call Now: 0729 312 480
            </a>
            <a href="https://wa.me/254729312480" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="inline-flex items-center justify-center gap-3 bg-cta-whatsapp text-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105">
              <MessageCircle className="w-6 h-6" /> Get a Quote on WhatsApp
            </a>
          </div>
          <p className="text-sm text-muted-foreground"><MapPin className="w-4 h-4 inline mr-1" /> Ngong Rd, Adam's Arcade • Mobile Service Across Nairobi</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center mb-12">Why Choose Us for <span className="text-primary">Key Duplication</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div><img src={shellKey} alt="Car key duplication service" className="rounded-lg w-full h-64 object-cover" loading="lazy" /></div>
            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                {benefits.map((b) => (<li key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-muted-foreground">{b}</span></li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-4">Get a <span className="text-primary">Spare Key</span> Today</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Don't wait until you lose your only key. Get a duplicate made today — fast and affordable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254729312480" onClick={trackCallClick} className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105">
              <Phone className="w-6 h-6" /> Call Now: 0729 312 480
            </a>
            <a href="https://wa.me/254729312480" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="inline-flex items-center justify-center gap-3 bg-cta-whatsapp text-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105">
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default CarKeyDuplication;
