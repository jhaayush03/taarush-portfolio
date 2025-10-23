import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Summer Intern",
    company: "Vardan Envirolabs, Gurugram",
    period: "Dec 2024- Feb 2025",
    description: "",
    highlights: [
      "Worked in an EIA consultancy, performing lab tests on air and water samples and learning to operate professional instruments like spectrophotometers and gas analyzers.",
      "Gained practical understanding of how data translates into impact-assessment reports that influence project approvals.",
      "Used the knowledge from this experience to begin working on the sewage-detection lid project.",
      "Recieved a certificate and recommendation letter from the lab director, validating both the internship and the project.",
    ],
  },
  {
    title: "Wharton Global Youth Program",
    company: "Product Design Academy",
    period: "June 2025",
    description: "University of Pennsylvania",
    highlights: [
      "Collaborated with Professor Taylor Caputo and international peers under the Whar on faculty, learning design thinking, prototyping and TAM/SAM/SOM analysis.",
      "Learned to apply structured market-sizing frameworks to test creative engineering ideas against commercial viability. Prototypes developed during the program reflected this rigorous approach, and faculty feedback validated the professional grounding in product innovation. ",
    ],
  },
  {
    title: "Online Bootcamp",
    company: "LaunchX",
    period: "June 2025",
    description: "",
    highlights: [
      "Selected for LaunchX; collaborated with peers to ideate, prototype, and pitch ventures, gaining hands-on experience in market validation, business modelling, and product design.",
    ],
  },
];

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-display mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building impactful solutions across AI, design, and engineering
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative pl-8 border-l-2 border-accent/20 transition-all duration-1000 hover:border-accent ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent border-4 border-background" />

              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-foreground/80 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-foreground/70"
                    >
                      <span className="text-accent mt-1">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
