import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-primary" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
            Serving <span className="text-primary">Nairobi</span> Areas
          </h2>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 text-center">
          We serve all areas in Nairobi including Westlands, Kilimani, CBD, Industrial Area, and surrounding locations.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Westlands", "Kilimani", "CBD", "Industrial Area", "Karen", "Langata", "Embakasi", "South B/C"].map(
            (area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground">
                {area}
              </span>
            )
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold uppercase text-foreground">Our Location</p>
                <p className="text-muted-foreground">Ngong Road, Adam's Arcade, Nairobi</p>
              </div>
            </div>

            <div className="w-full md:flex-1 rounded-lg overflow-hidden h-64">
              <iframe
                title="Key Hub Auto Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7904421932217!2d36.77660267464285!3d-1.3005923986870538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b73c644c289%3A0x19c9a6a36a1b84b9!2sKey%20Hub%20Auto!5e0!3m2!1sen!2ske!4v1775861414400!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
