import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowRight, Instagram, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Main CTA card */}
        <div className="glass rounded-3xl p-12 md:p-16 text-center space-y-8 glow border-primary/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 animate-glow-pulse">
              <MessageSquare className="w-10 h-10 text-background" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>

            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Whether you need a stunning portfolio, a powerful web app, or a complete business website, 
              We're here to turn your vision into reality.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col gap-4 pt-4">
              <a href="https://www.fiverr.com/s/P2oVVwP" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto mx-auto">
                <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-xl glow-strong w-full sm:w-auto">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get in Touch on Fiverr
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {/* Email */}
                <a 
                  href="mailto:divyeshidhate2709@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:glow transition-all group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">contact@rheoreach.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+919359315488"
                  className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:glow transition-all group"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">+91 9359315488</p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/divyessshh_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:glow transition-all group"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Instagram</p>
                    <p className="text-sm font-medium">@rheoreach</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
