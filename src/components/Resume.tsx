import { useEffect, useRef, useState } from "react";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Replace this with your actual PDF path
  const resumePdfPath = "/AmritrajLamba_Resume(Final).pdf";

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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdfPath;
    link.download = "AmritrajLamba_Resume(Final).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumePdfPath, "_blank");
  };

  const stats = [
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
  ];

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 mb-8 shadow-lg">
            <FileText className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Download my complete resume to learn more about my experience,
            skills, and achievements.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button
              onClick={handleView}
              className="flex items-center gap-2 text-lg px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-indigo-600 hover:scale-105 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              View Online
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
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
