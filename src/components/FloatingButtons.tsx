import { Phone } from "lucide-react";
import { trackCallClick, trackWhatsAppClick } from "@/lib/tracking";

const WHATSAPP_URL = "https://wa.me/254729312480?text=Hi%2C%20I%20need%20help%20with%20my%20car%20key.%0A%0AMy%20car%20model%20is%3A%20___%0AMy%20location%20is%3A%20___%0AMy%20issue%20is%3A%20___";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.616c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.824-6.8-8.064-7.114-.23-.314-1.932-2.572-1.932-4.904s1.222-3.478 1.656-3.956c.434-.478.948-.598 1.264-.598.314 0 .632.002.908.016.292.016.684-.11 1.07.816.39.942 1.328 3.242 1.444 3.478.118.236.196.51.04.824-.158.314-.236.51-.472.786-.236.274-.496.614-.71.824-.234.236-.478.49-.206.962.274.472 1.216 2.006 2.612 3.25 1.794 1.598 3.306 2.094 3.778 2.33.472.236.746.196 1.02-.118.274-.314 1.178-1.374 1.492-1.846.314-.472.632-.392 1.066-.236.434.158 2.752 1.298 3.224 1.534.472.236.786.354.904.55.118.196.118 1.128-.272 2.228z" />
  </svg>
);

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-between pointer-events-none md:px-6">
      <a
        href="tel:+254729312480"
        onClick={trackCallClick}
        className="pointer-events-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-pulse-glow transition-transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
};

export default FloatingButtons;
