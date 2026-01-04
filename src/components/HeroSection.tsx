import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">~/bruno-beduschi</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Olá, sou </span>
            <span className="text-gradient">Bruno</span>
          </h1>

          {/* Typing effect subtitle */}
          <div className="h-12 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground">
              {">"} {displayText}
              <span className="terminal-cursor" />
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Estudante de Engenharia de Software na PUC PR, 19 anos.
            <br />
            Apaixonado por criar soluções elegantes com{" "}
            <span className="text-primary font-semibold">Java</span>,{" "}
            <span className="text-primary font-semibold">Python</span> e{" "}
            <span className="text-primary font-semibold">SQL</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="terminal" 
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              <Terminal className="w-5 h-5" />
              Entrar em Contato
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection("about")}
            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </section>
  );
};

export default HeroSection;
