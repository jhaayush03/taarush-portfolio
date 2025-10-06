import { useEffect, useRef, useState } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-purple-600 mb-8 shadow-lg">
            <FileText className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-display mb-6">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Download my complete resume to learn more about my experience,
            skills, and achievements.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 text-lg px-8 py-6 bg-gradient-to-r from-accent to-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg px-8 py-6 border-2 hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              View Online
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Projects Completed", value: "50+" },
              { label: "Certifications", value: "12+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="text-4xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
