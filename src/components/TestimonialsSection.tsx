import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "I lost my car key at night and they arrived in 30 minutes. Super fast and professional.",
    name: "James K.",
  },
  {
    text: "My key stopped working and they fixed it on the spot. Didn't need towing.",
    name: "Mary W.",
  },
  {
    text: "Affordable and quick. Got a replacement key the same day.",
    name: "David M.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-12 text-foreground">
          What Our Customers <span className="text-primary">Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map(({ text, name }) => (
            <div key={name} className="bg-muted border border-border rounded-lg p-6 text-left">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-4 italic">"{text}"</p>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
