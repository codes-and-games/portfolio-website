import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import glaringImage from "@/assets/glaring-evolution.png";
import prishaImage from "@/assets/prisha-interior.png";
import rheorachImage from "@/assets/rheoreach.png";
import lifePillarsImage from "@/assets/life-pillars.png";

interface Project {
  title: string;
  description: string;
  url: string;
  category: string;
  highlights: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Glaring Evolution",
    description: "Official website for a leading solar power EPC solutions company, designed to reflect technical expertise and years of industry experience.",
    url: "https://www.glaringevolution.com",
    category: "Corporate Website",
    highlights: [
      "Clean, responsive layout",
      "Structured workflow sections",
      "High-performance hosting",
      "SEO-optimized content",
      "Sustainable design theme"
    ],
    image: glaringImage
  },
  {
    title: "Prisha Interior Solutions",
    description: "Modern, elegant website for a full-service interior design firm, capturing their creative philosophy and refined aesthetic.",
    url: "https://www.prishainteriorsolutions.in/",
    category: "Design Portfolio",
    highlights: [
      "Minimalist interface",
      "Mission & values sections",
      "Mobile-optimized layout",
      "Visual storytelling",
      "Sustainability focus"
    ],
    image: prishaImage
  },
  {
    title: "Rheoreach",
    description: "Bold, conversion-focused website for a digital marketing agency helping businesses scale through performance-driven marketing.",
    url: "https://www.rheoreach.com",
    category: "Marketing Agency",
    highlights: [
      "High-performance layout",
      "Core services showcase",
      "3-step process workflow",
      "Integrated booking system",
      "Mobile-first design"
    ],
    image: rheorachImage
  },
  {
    title: "Life Pillars",
    description: "Full-featured productivity platform for organizing, tracking, and growing across every aspect of life with data-driven insights.",
    url: "https://life-pillars-compass.vercel.app",
    category: "Web Application",
    highlights: [
      "Goal tracking system",
      "Time management tools",
      "Reflective journaling",
      "Progress analytics",
      "Dark-mode dashboard"
    ],
    image: lifePillarsImage
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each project is custom-built for performance, responsiveness, and clean design
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group glass hover:glow-strong transition-all duration-500 overflow-hidden border-border/50 hover:border-primary/50"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              </div>

              <div className="p-8 space-y-6">
                {/* Category badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                  {project.category}
                </div>

                {/* Project title */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors group/link"
                >
                  <span className="font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
