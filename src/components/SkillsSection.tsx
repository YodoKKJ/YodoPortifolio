import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

const skills: Skill[] = [
  { name: "Java", level: 90, category: "backend", description: "Desenvolvimento de sistemas robustos e ERP" },
  { name: "Python", level: 85, category: "backend", description: "Automação, scripts e análise de dados" },
  { name: "SQL", level: 80, category: "database", description: "Modelagem, queries complexas e otimização" },
  { name: "Git", level: 75, category: "tools", description: "Controle de versão e colaboração" },
  { name: "Spring Boot", level: 70, category: "backend", description: "APIs REST e microserviços" },
  { name: "PostgreSQL", level: 75, category: "database", description: "Banco de dados relacional" },
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Ferramentas" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// HABILIDADES</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo no dia a dia para criar soluções eficientes
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(185_100%_50%_/_0.4)]"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="card-glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-primary text-sm">{skill.level}%</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                
                {/* Progress bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Também trabalho com</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Linux", "Docker", "REST APIs", "Scrum", "Clean Code", "Design Patterns"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
