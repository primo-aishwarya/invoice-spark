import { Zap, Shield, BarChart3, Send, Globe, Palette } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create and send invoices in under 60 seconds with smart templates and auto-fill.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Bank-grade encryption keeps your financial data safe and compliant.",
  },
  {
    icon: BarChart3,
    title: "Payment Tracking",
    description: "Real-time dashboard to monitor outstanding, paid, and overdue invoices.",
  },
  {
    icon: Send,
    title: "Instant Delivery",
    description: "Send invoices via email, share links, or download as polished PDFs.",
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Support for 150+ currencies with automatic exchange rate updates.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Add your logo, colors, and custom fields to match your brand identity.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 font-body">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to get paid
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Powerful tools designed for freelancers, agencies, and small businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
