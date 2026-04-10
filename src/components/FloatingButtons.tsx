import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-between pointer-events-none md:px-6">
      <a
        href="tel:+254729312480"
        onClick={() => { if (typeof window.gtag_report_conversion === 'function') window.gtag_report_conversion('tel:+254729312480'); }}
        className="pointer-events-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-pulse-glow transition-transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>

      <a
        href="https://wa.me/254729312480"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-cta-whatsapp text-foreground flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
