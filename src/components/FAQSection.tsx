import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does it take?", a: "Most jobs are completed within 30–60 minutes." },
  { q: "Do you come to my location?", a: "Yes, we are fully mobile and come to you anywhere in Nairobi." },
  { q: "Do you work with all car models?", a: "We handle most car brands and key types, including key fobs." },
  { q: "What if I lost all my keys?", a: "No problem—we can create and program a new key from scratch." },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-10 text-center text-foreground">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground font-semibold">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
