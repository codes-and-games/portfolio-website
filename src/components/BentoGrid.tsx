import { Code, Palette, Zap, Rocket, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const BentoGrid = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, scalable architecture built with modern best practices",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Pixel-perfect UI that captivates users and drives engagement",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for instant load times and smooth interactions",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400",
    },
    {
      icon: Rocket,
      title: "SEO Optimized",
      description: "Built to rank high and drive organic traffic to your business",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: TrendingUp,
      title: "Conversion Focus",
      description: "Strategic design that turns visitors into customers",
      color: "from-red-500/20 to-rose-500/20",
      iconColor: "text-red-400",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Intuitive UX designed around your audience's needs",
      color: "from-indigo-500/20 to-violet-500/20",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            What Makes Our Work <span className="gradient-text">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every project combines technical excellence with strategic thinking
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`group glass hover:glow-strong transition-all duration-500 p-8 border-border/50 hover:border-primary/50 ${
                  index === 0 || index === 5 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} animate-gradient`} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
