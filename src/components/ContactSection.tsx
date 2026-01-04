import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", placeholder: "github.com/brunobeduschi" },
    { icon: Linkedin, label: "LinkedIn", href: "#", placeholder: "linkedin.com/in/brunobeduschi" },
    { icon: Mail, label: "Email", href: "mailto:contato@brunobeduschi.dev", placeholder: "contato@brunobeduschi.dev" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// CONTATO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Vamos <span className="text-gradient">Conversar</span>?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades, projetos interessantes ou apenas uma boa conversa sobre tecnologia
            </p>
          </div>

          {/* Contact card */}
          <div className="card-glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Info side */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Entre em contato
                  </h3>
                  <p className="text-muted-foreground">
                    Seja para uma oportunidade de trabalho, colaboração em projetos ou networking, adoraria ouvir de você.
                  </p>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Curitiba, PR - Brasil</span>
                </div>

                {/* Social links */}
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{link.label}</p>
                        <p className="text-sm text-muted-foreground font-mono">{link.placeholder}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Terminal-style message */}
              <div className="flex flex-col justify-center">
                <div className="card-glass rounded-xl p-6 border-primary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-muted-foreground">
                      <span className="text-primary">bruno@portfolio</span>
                      <span className="text-muted-foreground">:</span>
                      <span className="text-accent">~</span>
                      <span className="text-muted-foreground">$</span>
                      <span className="text-foreground ml-2">whoami</span>
                    </p>
                    <p className="text-foreground pl-4">Bruno Beduschi</p>
                    <p className="text-foreground pl-4">Software Engineer</p>
                    <p className="text-foreground pl-4">PUC PR Student</p>
                    <p className="text-muted-foreground mt-4">
                      <span className="text-primary">bruno@portfolio</span>
                      <span className="text-muted-foreground">:</span>
                      <span className="text-accent">~</span>
                      <span className="text-muted-foreground">$</span>
                      <span className="text-foreground ml-2">status</span>
                    </p>
                    <p className="text-green-400 pl-4">✓ Disponível para oportunidades</p>
                  </div>
                </div>

                <Button variant="hero" size="xl" className="mt-8">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
