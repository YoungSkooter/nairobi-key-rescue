const steps = [
  { number: "1", title: "Call or WhatsApp Us", description: "Reach us instantly on 0729 312 480" },
  { number: "2", title: "Tell Us Your Location & Car Issue", description: "Share your details so we can prepare" },
  { number: "3", title: "We Come to You Fast", description: "Our mobile team arrives in 20-30 minutes" },
  { number: "4", title: "Get Back on the Road", description: "Problem solved on the spot" },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase mb-12 text-foreground">
          How It <span className="text-primary">Works</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
