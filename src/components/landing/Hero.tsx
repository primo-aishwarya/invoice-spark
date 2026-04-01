import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-invoice.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-sm text-primary-foreground/70">
              <FileText className="w-4 h-4" />
              Professional invoicing made simple
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground leading-[1.1]">
              Create invoices
              <span className="block text-accent">in seconds.</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 max-w-md font-body leading-relaxed">
              Generate polished, professional invoices instantly. Track payments, manage clients, and get paid faster — all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Start Free
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                See Demo
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/40">No credit card required · Free forever for solo users</p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-2xl -rotate-3 scale-95" />
            <img
              src={heroImage}
              alt="Invoice generator dashboard preview"
              className="relative rounded-2xl shadow-2xl border border-primary-foreground/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
