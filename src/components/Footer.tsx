import { Phone } from "lucide-react";
import { trackCallClick } from "@/lib/tracking";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container px-4 text-center">
        <p className="font-heading text-lg uppercase text-foreground mb-2">
          Car Locksmith Services Nairobi
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          Fast Mobile Service | Call Anytime
        </p>
        <a
          href="tel:+254729312480"
          onClick={trackCallClick}
          className="inline-flex items-center gap-2 text-primary font-semibold"
        >
          <Phone className="w-4 h-4" />
          0729 312 480
        </a>
        <p className="text-muted-foreground text-xs mt-4">
          © {new Date().getFullYear()} Key Hub Auto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
