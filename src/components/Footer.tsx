import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              Bruno Beduschi
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} • Desenvolvido com{" "}
            <span className="text-primary">♥</span> e muito café
          </p>

          <div className="font-mono text-xs text-muted-foreground">
            v1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
