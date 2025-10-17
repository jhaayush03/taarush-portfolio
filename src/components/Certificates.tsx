import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificates = [];

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-accent font-medium mb-3">{cert.issuer}</p>
                <p className="text-sm text-foreground/70 mb-4">
                  {cert.description}
                </p>

                <button className="flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
