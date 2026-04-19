import { MapPin, Phone } from "lucide-react";

const areas = ["Westlands", "Kilimani", "Lavington", "Kileleshwa", "Embakasi", "Kasarani", "Thika Road"];

const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-primary" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
            Serving Nairobi &amp; <span className="text-primary">Surrounding Areas</span>
          </h2>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
          We operate across Nairobi including Westlands, Kilimani, Lavington, Embakasi, Kasarani, Thika Road, and nearby areas.
        </p>
        <p className="text-muted-foreground mb-8">
          Call us to confirm availability in your exact location.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {areas.map((area) => (
            <span key={area} className="px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground">
              {area}
            </span>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <a
            href="https://www.google.com/maps/place/Nairobi/@-1.2863895,36.8219462,11z"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden h-64 border border-border relative group"
            aria-label="View Key Hub Auto service area on Google Maps"
          >
            <iframe
              title="Key Hub Auto Service Area - Greater Nairobi"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127635.84842480957!2d36.8219462!3d-1.2863895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
