import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["OpenAI/Gemini integration", "Vector search", "Embeddings"],
    color: "text-primary"
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["FastAPI", "Flask", "Node.js (basic)", "REST APIs"],
    color: "text-tech-cyan"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Firebase", "SQLite"],
    color: "text-impact-green"
  },
  {
    title: "Tools & Languages",
    icon: Wrench,
    skills: ["Python", "Java", "Git", "Docker", "VS Code"],
    color: "text-primary-glow"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="bg-gradient-hero bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialties: AI agents • Automation • Academic tools • System design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
