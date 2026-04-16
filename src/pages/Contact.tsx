import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import FloatingButtons from "@/components/FloatingButtons";
import { trackCallClick, trackWhatsAppClick } from "@/lib/tracking";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-16 md:py-24 bg-card">
        <div className="container px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            Contact <span className="text-primary">Key Hub Auto</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Need a car key replaced or locked out? Reach us anytime — we're always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254729312480"
              onClick={trackCallClick}
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg animate-pulse-glow transition-transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call Now: 0729 312 480
            </a>
            <a
              href="https://wa.me/254729312480"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 bg-cta-whatsapp text-foreground font-heading text-lg font-semibold uppercase px-8 py-4 rounded-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold uppercase text-foreground">Location</h3>
                    <p className="text-muted-foreground">Ngong Road, Adam's Arcade</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold uppercase text-foreground">Phone</h3>
                    <a href="tel:+254729312480" onClick={trackCallClick} className="text-primary hover:underline">0729 312 480</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold uppercase text-foreground">WhatsApp</h3>
                    <a href="https://wa.me/254729312480" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="text-primary hover:underline">Chat with us</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold uppercase text-foreground">Hours</h3>
                    <p className="text-muted-foreground">24/7 — Emergency service available anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127635.84842480957!2d36.8219462!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Key Hub Auto Location"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-6">
            We Serve All of <span className="text-primary">Nairobi</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Westlands", "Kilimani", "Lavington", "Karen", "Lang'ata", "CBD", "South B", "South C", "Parklands", "Kileleshwa", "Hurlingham", "Upper Hill"].map((area) => (
              <span key={area} className="bg-muted border border-border px-4 py-2 rounded-full text-sm text-muted-foreground">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default Contact;
