import { Code2, Palette, Rocket, Zap } from "lucide-react";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "MongoDB",
  "HTML & CSS", "Tailwind CSS", "Bootstrap", "JavaScript"
];

const features = [
  "Marketing", "Payment", "Social Media", "Forms",
  "Membership", "Booking", "Portfolio", "Dashboard",
  "Reviews", "Blog", "E-commerce", "SEO"
];

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building complete web applications with modern frameworks and databases"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love"
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized for speed, SEO, and exceptional user experience"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround with clean code and on-time completion"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging modern technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="glass p-6 rounded-2xl hover:glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tech stack */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 glass rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Website features */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Website Features I Build</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {features.map((feature, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm font-medium hover:bg-accent/20 transition-all cursor-default text-accent"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
