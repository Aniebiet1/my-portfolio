import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-glow-pulse" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-glow-pulse" />
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src="/placeholder.svg"
                  alt="Joseph Cosmos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Joseph <span className="bg-gradient-hero bg-clip-text text-transparent">"Joe"</span> Cosmos
            </h1>
            <div className="flex flex-wrap justify-center gap-3 text-lg md:text-xl text-muted-foreground">
              <span className="text-primary">AI & Backend Developer</span>
              <span>•</span>
              <span className="text-tech-cyan">Problem Solver</span>
              <span>•</span>
              <span className="text-impact-green">Builder of Impactful Tools</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            I build AI-powered and backend-driven solutions that solve real problems,{" "}
            <span className="text-impact-green font-semibold">especially for Africa</span>.
          </p>
          
          <div className="pt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group bg-primary hover:bg-primary-glow transition-all duration-300 shadow-glow"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};
