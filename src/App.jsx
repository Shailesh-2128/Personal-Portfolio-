import React, { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Background, Navigation, Footer } from "./components/layout";
import { Hero, Skills, Projects, Education, Strengths, Contact } from "./components/sections";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      <Background />

      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        activeSection={activeSection}
      />

      <Hero opacity={opacity} scale={scale} />
      <Skills />
      <Projects />
      <Education />
      <Strengths />
      <Contact />

      <Footer />
    </div>
  );
}
