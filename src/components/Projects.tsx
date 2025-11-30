import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Acadeva",
    subtitle: "Academic Innovation App",
    role: "AI/Backend Developer",
    icon: GraduationCap,
    tech: ["FastAPI", "Firebase", "AI LLMs"],
    description: "Acadeva is an educational AI-powered platform designed to support students with learning, revision, and academic assistance. It provides personalized study recommendations, intelligent search, course explanation tools, and structured academic resources.",
    achievements: [
      "Designed backend architecture using FastAPI and Firestore",
      "Created efficient recommendation logic while reducing Firebase query overhead",
      "Implemented AI-powered academic agents for question answering",
      "Developed real-time retrieval endpoints for notes, topics, and student support"
    ],
    impact: "Improves student learning efficiency and makes academic support more accessible",
    color: "primary"
  },
  {
    title: "AraCare",
    subtitle: "AI-Powered Symptom Checker & Health Agent",
    role: "AI Engineer • Backend Developer",
    icon: Heart,
    tech: ["Python", "FastAPI", "OpenAI/Gemini", "Vector Embeddings", "RAG"],
    description: "AraCare is a smart AI health assistant that analyzes symptoms, provides preliminary triage guidance, and connects users with relevant medical insights. Built for regions like Nigeria where access to quick medical support is limited.",
    achievements: [
      "Built the core AI reasoning engine using LLMs and medical safety prompts",
      "Implemented a structured triage agent system (symptom understanding, severity analysis, recommendation agents)",
      "Added vector embeddings for faster symptom retrieval and context accuracy",
      "Ensured safe, medically-aligned responses with prompt engineering"
    ],
    impact: "Helps users get safe, fast, and reliable health guidance before reaching a clinic",
    color: "accent"
  },
  {
    title: "Java Book Lending System",
    subtitle: "GUI + PostgreSQL",
    role: "Software Developer",
    icon: BookOpen,
    tech: ["Java", "Swing", "PostgreSQL", "JDBC"],
    description: "A desktop-based library management system that allows users to register, log in, borrow books, track loan status, and manage book inventory.",
    achievements: [
      "Designed the full Java Swing UI for managing books and users",
      "Implemented authentication (register/login) and session handling",
      "Integrated PostgreSQL with JDBC for secure data storage",
      "Built CRUD features for book borrowing, returns, and user tracking"
    ],
    impact: "Improves small library operations and demonstrates strong Java + database integration skills",
    color: "tech-cyan"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Building solutions that create real impact
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.title}
                  className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon space */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-xl bg-${project.color}/10 border border-${project.color}/20 flex items-center justify-center`}>
                          <Icon className={`h-10 w-10 text-${project.color}`} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{project.subtitle}</p>
                          <p className="text-primary text-sm font-medium">{project.role}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-primary/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <p className="text-foreground/80 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-primary">What I Built:</h4>
                          <ul className="space-y-1 text-foreground/80">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-accent mt-1.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-2">
                          <p className="text-impact-green font-medium">
                            Impact: <span className="text-foreground/90 font-normal">{project.impact}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
