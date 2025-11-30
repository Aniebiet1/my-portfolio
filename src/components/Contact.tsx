import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Something{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Impactful</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Open to collaborations, opportunities, and conversations about tech for Africa
            </p>
          </div>
          
          <Card className="bg-gradient-card border-border p-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 hover:bg-primary/10 hover:border-primary transition-all"
                  asChild
                >
                  <a href="mailto:you">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <div className="font-semibold">Email</div>
                      <div className="text-xs text-muted-foreground">your.email@example.com</div>
                    </div>
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 hover:bg-tech-cyan/10 hover:border-tech-cyan transition-all"
                  asChild
                >
                  <a href="https://github.com/Aniebiet1" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-tech-cyan" />
                    <div className="text-left">
                      <div className="font-semibold">GitHub</div>
                      <div className="text-xs text-muted-foreground">@yourusername</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-50" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 hover:bg-impact-green/10 hover:border-impact-green transition-all"
                  asChild
                >
                  <a href="https://linkedin.com/in/josephcosmos" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-impact-green" />
                    <div className="text-left">
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">@yourprofile</div>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-50" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 h-auto py-4 hover:bg-primary-glow/10 hover:border-primary-glow transition-all"
                  asChild
                >
            
                </Button>
              </div>
            </div>
          </Card>
          
          <div className="text-center text-muted-foreground text-sm animate-fade-in">
            <p>© 2024 Joseph Cosmos. Building the future, one solution at a time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
