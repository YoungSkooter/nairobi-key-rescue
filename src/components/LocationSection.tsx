import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-primary" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
            Serving <span className="text-primary">Nairobi</span> Areas
          </h2>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          We serve all areas in Nairobi including Westlands, Kilimani, CBD, Industrial Area, and surrounding locations.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {["Westlands", "Kilimani", "CBD", "Industrial Area", "Karen", "Langata", "Embakasi", "South B/C"].map(
            (area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground">
                {area}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
