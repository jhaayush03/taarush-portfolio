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
  ChevronDown,
  Users,
  FlaskConical,
  GraduationCap,
  Building,
  Heart,
  UserCheck,
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
    link.download = "Resume_Amritraj_Lamba.pdf";
    link.click();
  };

  const contact = [
    {
      icon: Mail,
      label: "Email",
      value: "lamba.amritraj@gmail.com",
      href: "mailto:lamba.amritraj@gmail.com",
    },
  ];

  const education = [
    {
      degree: "High Schooling",
      field: "Gurugram",
      institution: "Heritage International Xperiental Learning",
      year: "Aug 2024 - May 2026",
      details: [],
    },
    {
      degree: "Grade 10",
      field: "10/10 A*",
      institution: "IGCSE",
      year: "Jul 2023 - June 2024",
      details: [
        "School Topper in Additional Mathematics",
        "School Topper in Chemistry",
      ],
    },
    {
      degree: "SAT | AP | IELTS",
      field: "",
      institution: "",
      year: "2025",
      details: [
        "SAT: 1550 (Maths: 800, Reading & Writing: 750)",
        "AP: Calculus BC: 5/5",
        "IELTS - Band 8",
      ],
    },
  ];

  const leadership = [
    {
      title: "Founder",
      company: "Sewage Suraksha",
      period: "April 2024 - Present",
      type: "",
      details: [
        "Developed a sewage lid with multi-gas sensors; it is a low-cost retrofit ensuring safety of municipal workers.",
        "The lid detects harmful gases, including H2S, CH4, NH3, & CO, and alerts authorities to hazardous gas levels. It has been tested on 17 sewers and has been cleared by the National Disaster Management Authority for adoption.",
      ],
    },
    {
      title: "Founder",
      company: "Flood Shield",
      period: "July 2024 - Present",
      type: "",
      details: [
        "Flood detection IOT for real-time cloud mapping and emergency coordination; Special Praise for practicality at the Princetonian. Adopted by the National Disaster Management Authority.",
        "Designed and piloted an affordable early warning system for floods that alerts authorities to areas where flooding occurs; adopted by 1000+ houses. Commended by the Haryana Government.",
        "Also received the Crest Gold Award for this invention",
      ],
    },
    {
      title: "Founder and Leader",
      company: "Ingenix School STEM Society",
      period: "October 2024 - October 2025",
      type: "",
      details: [
        "Revived and expanded society from 20 to 50+ members. Mentored 2 teams for the Cambridge Science Competition & F1 in Schools, both qualified internationals.",
      ],
    },
    {
      title: "Leader",
      company: "FUNCTION - After School Robotics Club",
      period: "October 2024 - October 2025",
      type: "",
      details: [
        "Founded a 20+ member club teaching CAD, programming, and mechanical design outside of competition teams",
        "Introduced collaborative engineering workshops (bridge/tower builds, quizzes) to strengthen teamwork and experimentation",
        "Built a hands-on learning culture that became an entry pathway for beginners; several members progressed to competitive robotics",
      ],
    },
  ];

  const researchPapers = [
    {
      title: "Automation & Robot Adoption in Delhi-NCR Factories",
      company: "Amritraj Lamba",
      period: "January 2025 - September 2025",
      type: "",
      details: [
        "Analysed five factories from fully manual (e.g., Metaval Engineering) to highly automated (e.g., Kadence Automation) to assess efficiency, training needs, and scalability Found robot-assisted systems improved efficiency by up to 20% while reducing fatigue and errors; highlighted the need for retraining, ergonomic design, and phased adoption Developed a roadmap for SME modernisation without worker displacement; validated through Delhi-NCR field data, mentorship from Stanford's Dr. Arvind Karunakaran, and publication in Lex Localis",
      ],
    },
    {
      title: "Coral Reefs as Natural Barriers to Coastal Erosion in India",
      company: "Amritraj Lamba",
      period: "March 2024 - August 2025",
      type: "",
      details: [
        "Used satellite imagery and GIS to show shorelines protected by healthy reefs had less than half the erosion of areas with degraded reefs. Provided evidence to integrate reef restoration into climate adaptation strategies for cities like Mumbai and Chennai, complementing engineered defenses. Recognition included publication in the International Journal of Environmental Sciences and mentorship from Prof. Umang Soni, with validation in competitive research platforms.",
      ],
    },
  ];

  const summerPrograms = [
    {
      title: "Wharton Global Youth Program",
      company: "University of Pennsylvania",
      period: "June 2025",
      type: "Product Design Academy",
      details: [
        "Collaborated with Professor Taylor Caputo and international peers under the Wharton faculty, learning design thinking, prototyping and TAM/SAM/SOM analysis. Learned to apply structured market-sizing frameworks to test creative engineering ideas against commercial viability. Prototypes developed during the program reflected this rigorous approach, and faculty feedback validated the professional grounding in product innovation.",
      ],
    },
    {
      title: "Launch X",
      company: "Online Bootcamp",
      period: "June 2025",
      type: "",
      details: [
        "Selected for LaunchX; collaborated with peers to ideate, prototype, and pitch ventures, gaining hands-on experience in market validation, business modelling, and product design.",
      ],
    },
  ];

  const internships = [
    {
      title: "Vardan Envirolabs",
      company: "Summer Intern",
      period: "December 2024 - February 2025",
      type: "",
      details: [
        "Identified available and capable employees as part of the talent search module team, designed to assist talent recruitment in companies. Conducted market research for the firm, tapping into new domains such as the legal sector, to streamline services and the employment data collection process.",
      ],
    },
  ];

  const advancedCourses = [
    {
      title: "Euler's Circle",
      company: "",
      period: "June - July 2024",
      type: "",
      details: [
        "'Serious Mathematics for Serious High School Students' under Stanford Prof. Simon Salzedo. One of 30 members worldwide. Capstone on linear algebra and projective geometry; improved modeling intuition later applied to CFD and robot mechanisms. Attended on 50% scholarship",
      ],
    },
    {
      title: "Art of Problem Solving",
      company: "AoPS",
      period: "",
      type: "",
      details: [
        "Completed All Introductory & Intermediate Courses on Algebra, Number Theory, Geometry and Counting & Probability",
      ],
    },
  ];

  const academicHonours = [
    {
      title: "USA Math Olympiads 2022-24",
      description: "AMC 12B 2024",
      technologies: ["Top 2.5%"],
      details: [
        "Scored 132/150, School Rank 1, Country Rank 28, Qualified for AIME, Certificate of Distinction, Honour Roll (Top 2.5%)",
      ],
    },
    {
      title: "World International Mathematics Olympiad (WIMO) Final",
      description: "Kuala Lumpur, Malaysia",
      technologies: ["2024"],
      details: ["Bronze Award"],
    },
    {
      title: "CEMC",
      description: "University of Waterloo",
      technologies: ["2023", "2024"],
      details: [
        "Pascal Contest (9th Grade, 2023): 2nd Place from India region, World rank 58, Certificate of Distinction, Student Honour Roll",
        "Fryer Contest (9th Grade, 2023): 2nd Place from India region, Certificate of Distinction",
        "Cayley Contest (10th Grade, 2024): Certificate of Distinction, Student Honour Roll",
        "Galios contest (10th Grade, 2024): Certificate of Distinction",
        "Fermat Contest (11th Grade, 2025): 9th Place from India region, Certificate of Distinction, Student Honour Roll",
        "Hypatia Contest (11th Grade, 2025): Certificate of Distinction",
        "Avogadro Chemistry Contest (11th Grade, 2025): Certificate of Distinction",
        "Sir Isaac Newton Physics Contest (11th Grade, 2025): Certificate of Distinction",
      ],
    },
    {
      title: "SIMOC",
      description: "Singapore International Mathematics Olympiad Challenge",
      technologies: ["2024"],
      details: ["Gold Award (Grade 10)"],
    },
    {
      title: "IOQM",
      description: "Indian Olympiad Qualifier in Mathematics",
      technologies: ["2024", "2025"],
      details: ["Certificate of Merit"],
    },
    {
      title: "SASMO",
      description: "Singapore and Asian School Mathematics Olympiad",
      technologies: ["2024"],
      details: ["Gold Award"],
    },
    {
      title: "AMO",
      description: "American Mathematics Olympiad",
      technologies: ["2023", "2022"],
      details: ["Gold Award (Grade 10, 2023)", "Gold Award (Grade 9, 2022)"],
    },
    {
      title: "TIMO",
      description: "Thailand International Mathematical Olympiad",
      technologies: ["2022-23"],
      details: ["Final Round", "Gold Award (Secondary 3 Group)"],
    },
    {
      title: "HKIMO",
      description: "Hong Kong International Mathematical Olympiad",
      technologies: ["2024"],
      details: ["Heat Round", "Gold Award (Secondary Group)"],
    },
    {
      title: "Stanford Math Tournament",
      description: "SMT",
      technologies: ["2023"],
      details: ["Honourable Mention in General Test"],
    },
    {
      title: "Australian Mathematics Competition",
      description: "Senior Division, Grade 11",
      technologies: ["2024"],
      details: ["Certificate of Distinction"],
    },
    {
      title: "International Maths Kangaroo Competition",
      description: "",
      technologies: ["2023"],
      details: ["Silver Medal"],
    },
    {
      title: "International Junior Honor Society",
      description: "IJHS, Singapore",
      technologies: ["2023 - 24"],
      details: ["Certificate of Membership"],
    },
    {
      title: "Future Intelligence Science Olympiad",
      description: "International round",
      technologies: ["2024"],
      details: ["Gold Medal"],
    },
    {
      title: "First Tech Challenge",
      description: "FTC",
      technologies: ["2024"],
      details: [
        "Role: CAD and Design Head of Team",
        "Achievements: Qualified for Asian Pacific Open Championship (APOC), Sydney, Australia. Won Inspire Award (2nd Place) and Think Award (2024)",
      ],
    },
    {
      title: "F1 in Schools",
      description: "Design Engineer",
      technologies: ["2024"],
      details: ["Ranked 15th in Nationals", "Regional Digital Marketing Award"],
    },
  ];

  const socialImpact = [
    {
      title: "Teens of God",
      company: "Mentor/Tutor",
      period: "Aug 2022 - Dec 2024",
      type: "",
      details: [
        "Teaching basic Math and Science concepts to underprivileged children. One of the lead members of the NGO's robotics branch, where we taught concepts of robotics and circuits using donated STEM kits",
      ],
    },
  ];

  const skills = [
    {
      category: "Technical Skills",
      items: ["Python", "3D Modelling: CAD", "Arduino", "Robotics"],
    },
    {
      category: "Sports",
      items: ["Karate Shotokan: Black Belt"],
    },
    {
      category: "Music",
      items: ["Guitar", "Trinity Rock & Pop Grade 5"],
    },
    {
      category: "Languages",
      items: ["English", "French", "Hindi", "Punjabi"],
    },
  ];

  const membership = [
    {
      title: "New York Academy of Sciences",
      company: "The Junior Academy member",
      period: "",
      type: "",
      details: [
        "Selected member; engaged for a year with the Academy's STEM community. Part of the Solar Power team under Energy Infrastructure.",
      ],
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
          {details && details.length > 0 && (
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
                  subtitle={`${edu.institution}${
                    edu.year ? ` (${edu.year})` : ""
                  }`}
                  details={edu.details}
                  icon={BookOpen}
                />
              ))}
            </div>
          )}
        </div>

        {/* Leadership Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("leadership")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Users className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Leadership
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.leadership ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.leadership !== false && (
            <div className="space-y-6">
              {leadership.map((item, idx) => (
                <SectionBox
                  key={idx}
                  title={item.title}
                  subtitle={`${item.company} • ${item.period}${
                    item.type ? ` • ${item.type}` : ""
                  }`}
                  details={item.details}
                  icon={Users}
                />
              ))}
            </div>
          )}
        </div>

        {/* Research Papers Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("research")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <FlaskConical className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Research Papers
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.research ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.research !== false && (
            <div className="space-y-6">
              {researchPapers.map((item, idx) => (
                <SectionBox
                  key={idx}
                  title={item.title}
                  subtitle={`${item.company} • ${item.period}${
                    item.type ? ` • ${item.type}` : ""
                  }`}
                  details={item.details}
                  icon={FlaskConical}
                />
              ))}
            </div>
          )}
        </div>

        {/* Summer Programs Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("summer")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <GraduationCap className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Summer Programs
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.summer ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.summer !== false && (
            <div className="space-y-6">
              {summerPrograms.map((item, idx) => (
                <SectionBox
                  key={idx}
                  title={item.title}
                  subtitle={`${item.company} • ${item.period}${
                    item.type ? ` • ${item.type}` : ""
                  }`}
                  details={item.details}
                  icon={GraduationCap}
                />
              ))}
            </div>
          )}
        </div>

        {/* Internships Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("internships")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Building className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Internships
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.internships ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.internships !== false && (
            <div className="space-y-6">
              {internships.map((item, idx) => (
                <SectionBox
                  key={idx}
                  title={item.title}
                  subtitle={`${item.company} • ${item.period}${
                    item.type ? ` • ${item.type}` : ""
                  }`}
                  details={item.details}
                  icon={Building}
                />
              ))}
            </div>
          )}
        </div>

        {/* Advanced Courses Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("courses")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Code className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Advanced Courses
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.courses ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.courses !== false && (
            <div className="space-y-6">
              {advancedCourses.map((item, idx) => (
                <SectionBox
                  key={idx}
                  title={item.title}
                  subtitle={`${item.company ? item.company + " • " : ""}${
                    item.period
                  }${item.type ? ` • ${item.type}` : ""}`}
                  details={item.details}
                  icon={Code}
                />
              ))}
            </div>
          )}
        </div>

        {/* Academic Honours Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("honours")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Academic Honours & Awards
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.honours ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.honours !== false && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicHonours.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-indigo-600" />
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

        {/* Social Impact Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("social")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <Heart className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Social Impact Projects
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.social ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.social !== false && (
            <div className="space-y-6">
              {socialImpact.map((item, idx) => (
                <SectionBox
                  key={idx}
                  title={item.title}
                  subtitle={`${item.company} • ${item.period}${
                    item.type ? ` • ${item.type}` : ""
                  }`}
                  details={item.details}
                  icon={Heart}
                />
              ))}
            </div>
          )}
        </div>

        {/* Membership Section */}
        <div className="mb-12">
          <div
            onClick={() => toggleSection("membership")}
            className="flex items-center gap-3 mb-6 cursor-pointer group"
          >
            <UserCheck className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Memberships
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.membership ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.membership !== false && (
            <div className="space-y-6">
              {membership.map((item, idx) => (
                <SectionBox
                  key={idx}
                  title={item.title}
                  subtitle={`${item.company}${
                    item.period ? ` • ${item.period}` : ""
                  }${item.type ? ` • ${item.type}` : ""}`}
                  details={item.details}
                  icon={UserCheck}
                />
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
              Skills & Interests
            </h2>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                expandedSections.skills ? "rotate-180" : ""
              }`}
            />
          </div>
          {expandedSections.skills !== false && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </div>
  );
};

export default ResumePage;
