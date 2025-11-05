import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Skills", id: "skills" },
    { label: "Why Me", id: "why-choose" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Floating Island Navbar */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "top-4" : "top-6"
        }`}
      >
        <div
          className={`glass backdrop-blur-xl border border-border/50 rounded-full px-8 py-4 shadow-2xl transition-all duration-500 ${
            isScrolled ? "glow-strong" : "glow"
          }`}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 md:hidden">
          <div className="glass backdrop-blur-xl border border-border/50 rounded-3xl px-6 py-6 shadow-2xl glow-strong min-w-[250px]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 py-2 border-b border-border/30 last:border-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
