import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Glaring Evolution Technologies",
    role: "Solar Power EPC",
    company: "Engineering Solutions",
    content: "RheoReach Associates delivered a professional website that perfectly represents our technical expertise in solar energy. The clean design and structured workflow sections have significantly improved our client engagement.",
    rating: 5,
  },
  {
    name: "Prisha Interior Solutions",
    role: "Interior Design Firm",
    company: "Design & Aesthetics",
    content: "The website beautifully captures our design philosophy and values. RheoReach Associates understood our vision and created an elegant, user-friendly platform that showcases our work perfectly.",
    rating: 5,
  },
  {
    name: "Rheoreach",
    role: "Digital Marketing Agency",
    company: "Marketing & Web Solutions",
    content: "Outstanding work! The conversion-focused design and integrated booking system have transformed how we connect with clients. Professional, fast, and exactly what we needed.",
    rating: 5,
  },
  {
    name: "Life Pillars",
    role: "Productivity Platform",
    company: "Personal Development",
    content: "RheoReach Associates built a full-featured web application with beautiful UI and seamless functionality. The dark-mode dashboard and tracking features work flawlessly. Highly skilled developers!",
    rating: 5,
  },
];

const AnimatedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        {/* Testimonial Card */}
        <Card className="glass glow-strong border-border/50 p-12 relative overflow-hidden">
          <div className="relative z-10">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-primary/20 mb-6" />

            {/* Content */}
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90">
                "{currentTestimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Author */}
              <div className="space-y-1">
                <p className="text-xl font-bold gradient-text">{currentTestimonial.name}</p>
                <p className="text-foreground/70">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full glass hover:glow transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full glass hover:glow transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        </Card>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
