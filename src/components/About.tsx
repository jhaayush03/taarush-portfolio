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
                about how innovation and problem-solving can tackle everyday
                challenges. Whether I'm working through complex math problems in
                international olympiads or analyzing data patterns in my
                projects, I enjoy the process of breaking down challenges and
                finding elegant solutions. I explore physics, coding, and design
                with the same mindset—every problem is an opportunity to learn
                and create something meaningful. I hope to study engineering to
                keep pushing boundaries between rigorous thinking, technology,
                and people, always experimenting and finding ways to make a
                difference through invention.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
