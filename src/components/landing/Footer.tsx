import { FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-primary-foreground">
            <FileText className="w-5 h-5 text-accent" />
            <span className="font-display font-bold text-lg">InvoiceFlow</span>
          </div>
          <div className="flex gap-8 text-sm text-primary-foreground/50 font-body">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Support</a>
          </div>
          <p className="text-sm text-primary-foreground/40 font-body">© 2026 InvoiceFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
