import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-display mb-12 text-center">
            Hi, I'm <span className="gradient-text">Amritraj Lamba!</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-lg leading-relaxed text-foreground/90">
                I love building ideas that connect science, creativity, and
                real-world impact. From designing tech to make city systems
                safer to creating flood detection tools, I'm always curious
                about how innovation can solve everyday problems.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                I enjoy exploring physics, coding, and design, and I hope to
                study engineering to keep pushing boundaries between technology
                and people. For me, learning is about experimenting, improving,
                and finding ways to make a difference through invention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
