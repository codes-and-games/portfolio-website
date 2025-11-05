import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in-up">
            Hi, I'm <span className="gradient-text">Divyesh Idhate</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-4xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Website Designer & Developer
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I design and develop modern, high-performance websites from static to fully dynamic full-stack apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a href="https://www.fiverr.com/s/P2oVVwP" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-xl glow-strong">
                Hire Me on Fiverr
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg rounded-xl"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
