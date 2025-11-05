import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <BentoGrid />
      <Skills />
      <AnimatedTestimonials />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
