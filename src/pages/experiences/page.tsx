"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";

const ExperiencesPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(progress);

      const items = document.querySelectorAll("[data-experience-item]");
      const newVisible = new Set();

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75) {
          newVisible.add(index);
        }
      });

      setVisibleItems(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      title: "Wharton Global Youth Program",
      company: "Product Design Academy",
      period: "June 2025",
      location: "University of Pennsylvania",
      description: "",
      skills: [],
      achievements: [
        "Collaborated with Professor Taylor Caputo and international peers under the Wharton faculty, learning design thinking, prototyping and TAM/SAM/SOM analysis.",
        "Learned to apply structured market-sizing frameworks to test creative engineering ideas against commercial viability. Prototypes developed during the program reflected this rigorous approach, and faculty feedback validated the professional grounding in product innovation.",
      ],
    },
    {
      title: "Launch X",
      company: "Online Bootcamp",
      period: "June 2025",
      location: "",
      description: "",
      skills: [],
      achievements: [
        "Selected for LaunchX; collaborated with peers to ideate, prototype, and pitch ventures, gaining hands-on experience in market validation, business modelling, and product design.",
      ],
    },
    {
      title: "Summer Internship",
      company: "Vardan Envirolabs",
      period: "December 2024 - February 2025",
      location: "Delhi",
      description: "",
      skills: [],
      achievements: [
        "Identified available and capable employees as part of the talent search module team, designed to assist talent recruitment in companies.",
        "Conducted market research for the firm, tapping into new domains such as the legal sector, to streamline services and the employment data collection process.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-4000" />
      </div>

      {/* Header Section */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-200/50 shadow-sm">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">
              Professional Journey
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
            My Experience
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Over 5+ years of crafting digital experiences that inspire and
            engage. Each role has shaped my approach to design thinking and
            problem-solving.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-experience-item
                className={`transition-all duration-700 transform ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className={`group relative mb-8 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 -top-2 w-5 h-5 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full border-4 border-slate-50 shadow-lg z-20 transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-indigo-300`}
                  />

                  {/* Card */}
                  <div
                    className={`relative ml-8 md:ml-0 p-8 rounded-2xl backdrop-blur-md bg-white/70 border border-white/50 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-200 group-hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-indigo-50/0 to-purple-50/0 group-hover:from-blue-50 group-hover:via-indigo-50 group-hover:to-purple-50/50 transition-all duration-500" />

                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                            {exp.company}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-indigo-500" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-indigo-500" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-700 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors duration-300">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100/60 text-blue-700 group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="pt-6 border-t border-slate-200/50 group-hover:border-indigo-200 transition-colors duration-300">
                        <h4 className="text-sm font-semibold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-slate-600 flex items-start gap-2 group-hover:text-slate-700 transition-colors duration-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0 group-hover:bg-indigo-600 transition-colors duration-300" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-20 p-8 rounded-2xl backdrop-blur-md bg-white/70 border border-white/50 shadow-lg text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;
