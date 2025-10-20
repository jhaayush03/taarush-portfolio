import { useEffect, useRef, useState } from "react";
import { Newspaper, ExternalLink } from "lucide-react";

const newsArticles = [
  {
    title: "FirstIndia",
    date: "9th August 2024",
    description: "",
    link: "https://firstindia.co.in/articles/omotec-teams-triumph-at-first-tech-challenge-asia-pacific-open-championship-apoc-in-Australiahttps://firstindia.co.in/articles/omotec-teams-triumph-at-first-tech-challenge-asia-pacific-open-championship-apoc-in-Australia",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "ANI PR",
    date: "8th August 2024",
    description: "",
    link: "https://theprint.in/ani-press-releases/omotec-teams-triumph-at-first-tech-challenge-asia-pacific-open-championship-apoc-in-australia/2214775/",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Asia Education Review",
    date: "9th August 2024",
    description: "",
    link: "https://www.asiaeducationreview.com/technology/news/omotec-teams-shine-at-first-tech-challenge-asia-pacific-open-championship-nwid-2381.html",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "ABP Live Focus",
    date: "8th August 2024",
    description: "",
    link: "https://news.abplive.com/brand-wire/omotec-teams-triumph-at-first-tech-challenge-asia-pacific-open-championship-apoc-in-australia-1708959",
    color: "from-blue-500 to-indigo-600",
  },
];

const InTheNews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      id="news"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-indigo-600" />
            <h2 className="text-5xl font-black bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
              In The News
            </h2>
          </div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Featured stories and press coverage highlighting innovation and
            impact
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <div
              key={article.title}
              className={`group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative p-8">
                {/* Icon and Date */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Newspaper className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {article.description}
                </p>

                {/* Button */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-300 transform hover:scale-105 transition-all duration-300"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Bottom accent line */}
              <div
                className={`h-1 bg-gradient-to-r ${article.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InTheNews;
