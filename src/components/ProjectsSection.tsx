import { ExternalLink, Github, Server, Database, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  featured?: boolean;
  status: string;
}

const projects: Project[] = [
  {
    title: "Sistema ERP",
    description: "Desenvolvimento de um sistema ERP completo em Java para gestão empresarial. Responsável pela arquitetura, implementação de módulos e integração com banco de dados.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    icon: Server,
    featured: true,
    status: "Em produção",
  },
  {
    title: "Em breve...",
    description: "Novos projetos estão sendo desenvolvidos. Fique atento para atualizações!",
    technologies: ["Python", "Java", "SQL"],
    icon: Code,
    status: "Em desenvolvimento",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// PROJETOS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Trabalhos <span className="text-gradient">Recentes</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Projetos em que estou trabalhando ou já desenvolvi
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card-glass rounded-2xl overflow-hidden group transition-all duration-500 hover:border-primary/30 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Project header with gradient */}
                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-20 h-20 text-primary/50 group-hover:text-primary/80 transition-all duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                      project.status === "Em produção" 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-mono border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  {project.featured && (
                    <div className="flex gap-4">
                      <Button variant="terminal" size="sm" disabled>
                        <Github className="w-4 h-4" />
                        Código Privado
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
