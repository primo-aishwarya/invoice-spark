const steps = [
  { number: "01", title: "Add your details", description: "Enter your business info and logo once — we'll remember it." },
  { number: "02", title: "Build your invoice", description: "Add line items, taxes, and discounts with our intuitive editor." },
  { number: "03", title: "Send & get paid", description: "Share via email or link. Accept payments online instantly." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 font-body">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Three steps to your first invoice
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="font-display text-6xl font-black text-accent/20 mb-4">{step.number}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
