import { Code2, GraduationCap, Languages, Briefcase } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Engenharia de Software na PUC PR",
    },
    {
      icon: Briefcase,
      title: "Experiência",
      description: "Desenvolvedor de ERP em Java",
    },
    {
      icon: Code2,
      title: "Stack Principal",
      description: "Java, Python, SQL",
    },
    {
      icon: Languages,
      title: "Idiomas",
      description: "Inglês Fluente (Certificado)",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// SOBRE MIM</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Quem é <span className="text-gradient">Bruno Beduschi</span>?
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tenho 19 anos e sou estudante de Engenharia de Software na Pontifícia 
                Universidade Católica do Paraná (PUC PR). Minha jornada na programação 
                começou com curiosidade e se transformou em paixão.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atualmente trabalho no desenvolvimento de um <span className="text-primary font-semibold">sistema ERP em Java</span>, 
                onde aplico boas práticas de programação e arquitetura de software para 
                criar soluções robustas e escaláveis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Além das habilidades técnicas, possuo <span className="text-primary font-semibold">inglês fluente certificado</span>, 
                o que me permite acessar documentações, colaborar em projetos internacionais 
                e me manter atualizado com as últimas tendências da tecnologia.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
