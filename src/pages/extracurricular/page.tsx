import { useState } from "react";
import {
  Award,
  Trophy,
  Users,
  Zap,
  Search,
  Calendar,
  MapPin,
  ExternalLink,
  Star,
} from "lucide-react";

const ExtracurricularPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const activities = [
    {
      id: 1,
      title: "Design and Development Club - President",
      category: "club",
      date: "2021 - Present",
      location: "IIT Delhi",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      description:
        "Leading a student organization with 200+ members focused on design thinking and development practices.",
      highlights: [
        "Organized 15+ workshops and seminars with industry experts",
        "Mentored 50+ junior members in web development and UI/UX design",
        "Conducted hackathons attracting 500+ participants",
        "Built collaboration with 10+ tech companies for internship placements",
      ],
      impact:
        "Increased club membership by 300% and secured funding of ₹5 lakhs",
      skills: [
        "Leadership",
        "Event Management",
        "Mentorship",
        "Strategic Planning",
      ],
    },
    {
      id: 2,
      title: "National Hackathon Winner - TechFest 2023",
      category: "competition",
      date: "March 2023",
      location: "IIT Bombay",
      image:
        "https://images.unsplash.com/photo-1552664788-b9f1b6f8d77f?w=600&h=400&fit=crop",
      description:
        "Won first prize in the national hackathon with an innovative AI-powered solution.",
      highlights: [
        "Developed a machine learning model for personalized learning recommendations",
        "Led a team of 4 members across 24 hours of intensive coding",
        "Pitched to a panel of 10 investors and industry leaders",
        "Solution adopted by an EdTech startup for production use",
      ],
      impact: "Prize money of ₹2 lakhs and opportunity for startup mentorship",
      skills: ["Problem Solving", "AI/ML", "Teamwork", "Public Speaking"],
    },
    {
      id: 3,
      title: "Social Service Initiative - Volunteer Lead",
      category: "service",
      date: "2020 - Present",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      description:
        "Leading digital literacy program for underprivileged communities in collaboration with NGOs.",
      highlights: [
        "Taught basic digital skills to 200+ children from low-income families",
        "Created free educational content and video tutorials in Hindi",
        "Organized donation drives collecting 50+ laptops and devices",
        "Built a sustainable model that continues without external funding",
      ],
      impact:
        "Impacted 500+ indirect beneficiaries and improved digital access for marginalized communities",
      skills: ["Empathy", "Teaching", "Resource Management", "Social Impact"],
    },
    {
      id: 4,
      title: "UI/UX Design Competition - Regional Winner",
      category: "competition",
      date: "August 2022",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      description:
        "Won regional design competition with innovative mobile banking app redesign.",
      highlights: [
        "Redesigned banking interface for accessibility and user retention",
        "Achieved 92/100 score from expert panel judges",
        "Presented work to 500+ design professionals",
        "Featured in Design Magazine and industry publications",
      ],
      impact:
        "Recognition as emerging designer and internship offer from major design firm",
      skills: ["UI/UX Design", "User Research", "Presentation", "Innovation"],
    },
    {
      id: 5,
      title: "Tech Blogger - Medium Publications",
      category: "content",
      date: "2021 - Present",
      location: "Online",
      image:
        "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=600&h=400&fit=crop",
      description:
        "Writing technical articles about web design, development, and user experience best practices.",
      highlights: [
        "Published 25+ articles with 50,000+ total views",
        "Articles featured in top design and tech publications",
        "Built engaged community of 2,000+ followers",
        "Helped 1,000+ developers improve their design skills",
      ],
      impact:
        "Established thought leadership in design-tech intersection and speaking opportunities",
      skills: [
        "Technical Writing",
        "Communication",
        "Research",
        "Thought Leadership",
      ],
    },
    {
      id: 6,
      title: "Debate Team - National Champion",
      category: "sports",
      date: "2019 - 2022",
      location: "Various Venues",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      description:
        "Competing and winning at national-level debate competitions.",
      highlights: [
        "Won 5 national debate championships",
        "Represented school at international debate tournaments",
        "Trained 30+ junior debaters in argumentation techniques",
        "Secured sponsorships worth ₹10 lakhs for team",
      ],
      impact:
        "Developed excellence in public speaking and critical thinking skills",
      skills: [
        "Public Speaking",
        "Critical Thinking",
        "Research",
        "Confidence",
      ],
    },
    {
      id: 7,
      title: "Environmental Sustainability Project",
      category: "service",
      date: "2022 - Present",
      location: "IIT Delhi Campus",
      image:
        "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop",
      description:
        "Leading campus-wide initiative for waste management and carbon footprint reduction.",
      highlights: [
        "Reduced campus waste by 40% in first year",
        "Installed 100+ waste segregation stations",
        "Conducted 20+ environmental awareness workshops",
        "Achieved carbon-neutral campus recognition",
      ],
      impact: "Model adopted by 15+ other academic institutions",
      skills: [
        "Project Management",
        "Sustainability",
        "Environmental Awareness",
        "Innovation",
      ],
    },
    {
      id: 8,
      title: "Music and Arts Festival Coordinator",
      category: "event",
      date: "2021 - 2023",
      location: "IIT Delhi",
      image:
        "https://images.unsplash.com/photo-1512200489374-08ab7cb72d5b?w=600&h=400&fit=crop",
      description:
        "Organized annual cultural festival attracting 5,000+ participants.",
      highlights: [
        "Coordinated 50+ artists and performers",
        "Managed budget of ₹20 lakhs",
        "Attracted 5,000+ attendees across 3 days",
        "Featured performances by renowned musicians",
      ],
      impact:
        "Most successful festival in institution's history with 200% attendance growth",
      skills: ["Event Management", "Coordination", "Creativity", "Leadership"],
    },
  ];

  const categories = [
    { name: "all", label: "All Activities", icon: Zap },
    { name: "club", label: "Clubs", icon: Users },
    { name: "competition", label: "Competitions", icon: Trophy },
    { name: "service", label: "Service", icon: Award },
    { name: "content", label: "Content", icon: Award },
    { name: "sports", label: "Sports", icon: Trophy },
    { name: "event", label: "Events", icon: Award },
  ];

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedCategory === "all" || activity.category === selectedCategory;
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
            Extracurricular Activities
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Beyond academics, I'm passionate about leadership, community
            service, and continuous learning. Here's a showcase of my
            involvement in various clubs, competitions, and initiatives.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
              <p className="text-2xl font-bold text-indigo-600">
                {activities.length}
              </p>
              <p className="text-sm text-slate-600 font-semibold">Activities</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              <p className="text-2xl font-bold text-green-600">
                {new Set(activities.map((a) => a.category)).size}
              </p>
              <p className="text-sm text-slate-600 font-semibold">Categories</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">2,000+</p>
              <p className="text-sm text-slate-600 font-semibold">
                People Impacted
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
              <p className="text-2xl font-bold text-orange-600">15+</p>
              <p className="text-sm text-slate-600 font-semibold">Awards Won</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-8">
          {/* Search Bar */}
          <div className="relative mb-6 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-indigo-600 text-white border border-indigo-600 shadow-md"
                      : "bg-slate-100 text-slate-700 border border-slate-300 hover:border-indigo-400 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        {filteredActivities.length > 0 ? (
          <div className="space-y-6">
            {filteredActivities.map((activity, index) => (
              <div
                key={activity.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Activity Card */}
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-64 md:h-auto bg-slate-100">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          hoveredIndex === index ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-black transition-all duration-300 ${
                          hoveredIndex === index ? "opacity-30" : "opacity-0"
                        }`}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2 p-8 flex flex-col justify-between">
                      <div>
                        {/* Category Badge */}
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase">
                            {activity.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {activity.title}
                        </h3>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-indigo-600" />
                            {activity.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-indigo-600" />
                            {activity.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-700 mb-4">
                          {activity.description}
                        </p>

                        {/* Expandable Section */}
                        <button
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? null : index
                            )
                          }
                          className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                        >
                          {expandedIndex === index ? "Show Less" : "Show More"}
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${
                              expandedIndex === index ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedIndex === index && (
                    <div className="border-t border-slate-200 bg-slate-50 p-8">
                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {activity.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-700"
                            >
                              <Star className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">
                          Impact
                        </h4>
                        <p className="text-slate-700">{activity.impact}</p>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-3">
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white border border-slate-300 text-slate-700 font-semibold rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-2xl font-bold text-slate-600 mb-2">
              No activities found
            </p>
            <p className="text-slate-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Summary Section */}
      {filteredActivities.length > 0 && (
        <div className="bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Leadership & Involvement
                </h3>
                <p className="text-slate-700">
                  Led 3+ organizations with combined membership of 500+ members.
                  Managed budgets exceeding ₹50 lakhs and organized 50+ events
                  and competitions.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Recognition & Awards
                </h3>
                <p className="text-slate-700">
                  Won 15+ awards at national and regional levels including
                  hackathon championships, design competitions, and leadership
                  recognitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExtracurricularPage;
