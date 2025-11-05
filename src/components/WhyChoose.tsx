import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Clean, Responsive Design",
    description: "Modern layouts that look perfect on every device and screen size"
  },
  {
    title: "Modern Tech Stack",
    description: "Built with React, Next.js, Node.js, MongoDB and the latest web technologies"
  },
  {
    title: "SEO Optimized",
    description: "Search engine friendly code and structure for better visibility"
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed with quick loading times and smooth interactions"
  },
  {
    title: "Clear Communication",
    description: "Regular updates and transparent collaboration throughout the project"
  },
  {
    title: "On-Time Delivery",
    description: "Reliable timelines with consistent quality and attention to detail"
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Why <span className="gradient-text">Choose Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence through every project with dedication and expertise
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-background" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA note */}
        <div className="mt-16 text-center glass p-8 rounded-2xl border-primary/20">
          <p className="text-lg text-foreground/80">
            <span className="font-semibold text-primary">Let's bring your idea to life!</span>
            <br />
            Please contact me before placing an order so I can customize the package to perfectly fit your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
