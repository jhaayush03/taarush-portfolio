import { useState } from "react";
import {
  Download,
  Eye,
  Mail,
  Phone,
  Linkedin,
  Award,
  Briefcase,
  BookOpen,
  Code,
  FileText,
  ChevronDown,
} from "lucide-react";

const ResumePage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume_Omisaa_Bansal.pdf";
    link.click();
  };

  const contact = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "omisaa.bansal@email.com",
      href: "mailto:omisaa.bansal@email.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/omisaabansal",
      href: "https://linkedin.com/in/omisaabansal",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Indian Institute of Technology",
      year: "2021 - 2025",
      gpa: "7.8/10",
      details: [
        "Relevant Coursework: Data Structures, Algorithms, Web Development",
        "Active member of Design and Development Club",
        "Participated in multiple hackathons and coding competitions",
      ],
    },
    {
      degree: "Higher Secondary Education",
      field: "Science Stream",
      institution: "Delhi Public School",
      year: "2019 - 2021",
      gpa: "94%",
      details: [
        "Scored 98/100 in Mathematics and Physics",
        "Participated in National Science Olympiad",
        "School topper in Computer Science",
      ],
    },
  ];

  const experience = [
    {
      title: "Senior Product Designer",
      company: "TechVision Co.",
      period: "2022 - Present",
      type: "Full-time",
      details: [
        "Led design strategy for 5+ mobile and web products",
        "Increased user engagement by 40% through improved UI/UX",
        "Managed team of 5 designers and established design system",
        "Conducted 20+ user research sessions and usability tests",
      ],
    },
    {
      title: "Product Designer",
      company: "Digital Innovation Labs",
      period: "2020 - 2022",
      type: "Full-time",
      details: [
        "Designed and prototyped user interfaces for 3 major products",
        "Improved conversion rate by 35% through A/B testing",
        "Won design innovation award for mobile app redesign",
        "Built comprehensive component library with 200+ components",
      ],
    },
    {
      title: "UI/UX Design Intern",
      company: "Creative Studios",
      period: "2019 - 2020",
      type: "Internship",
      details: [
        "Assisted in creating wireframes and mockups for client projects",
        "Collaborated with developers to implement design specifications",
        "Completed 15+ client projects within timeline and budget",
        "Received 5-star feedback from all clients",
      ],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description: "Complete redesign of shopping experience",
      technologies: ["Figma", "React", "Node.js"],
      details: [
        "Redesigned entire platform resulting in 50% increase in sales",
        "Implemented new checkout flow reducing cart abandonment by 25%",
        "Created comprehensive design system and documentation",
      ],
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive banking application",
      technologies: ["Figma", "React Native", "Firebase"],
      details: [
        "Designed user-friendly interface for 500k+ users",
        "Implemented 256-bit encryption for data security",
        "Achieved 4.8/5 rating on app stores",
      ],
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      technologies: ["React", "D3.js", "MongoDB"],
      details: [
        "Built interactive dashboard with 15+ visualization types",
        "Reduced data processing time by 60%",
        "Enabled real-time analytics for 100+ enterprise clients",
      ],
    },
  ];

  const skills = [
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Sketch", "Illustrator", "Photoshop"],
    },
    {
      category: "Development",
      items: ["React", "JavaScript", "HTML/CSS", "Node.js", "MongoDB"],
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership",
        "Communication",
        "Problem Solving",
        "Time Management",
      ],
    },
  ];

  const certificates = [
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
      url: "/certificates/google-ux",
    },
    {
      title: "Advanced React Development",
      issuer: "Udemy",
      date: "2023",
      url: "/certificates/react",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      url: "/certificates/aws",
    },
  ];

  const SectionBox = ({ title, subtitle, details, icon: Icon }) => (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-indigo-600" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          {subtitle && (
            <p className="text-sm text-indigo-600 font-semibold mt-1">
              {subtitle}
            </p>
          )}
          {details && (
            <ul className="mt-3 space-y-2">
              {details.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-sm text-slate-600 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-8 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
            Resume
          </h1>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {contact.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleViewResume}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-lg font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
            >
              <Eye className="w-5 h-5" />
              View Resume
            </button>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-indigo-300 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Education Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("education")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Education
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.education ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.education !== false && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <SectionBox
                  key={idx}
                  title={edu.degree}
                  subtitle={`${edu.institution} (${edu.year}) • GPA: ${edu.gpa}`}
                  details={edu.details}
                  icon={BookOpen}
                />
              ))}
            </div>
          )}
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("experience")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Briefcase className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Experience
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.experience ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.experience !== false && (
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <SectionBox
                  key={idx}
                  title={exp.title}
                  subtitle={`${exp.company} • ${exp.period} • ${exp.type}`}
                  details={exp.details}
                  icon={Briefcase}
                />
              ))}
            </div>
          )}
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("projects")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Code className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Projects
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.projects ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.projects !== false && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {project.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("skills")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Skills
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.skills ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.skills !== false && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 font-semibold rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certificates Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("certificates")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <FileText className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Certificates
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.certificates ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.certificates !== false && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.url}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-indigo-300 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center flex-shrink-0 group-hover:shadow-md">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-slate-500">{cert.date}</p>
                  <p className="text-indigo-600 text-sm font-semibold mt-3 group-hover:translate-x-1 transition-transform">
                    View Certificate →
                  </p>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
