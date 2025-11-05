import { useState } from "react";
import {
  Download,
  Eye,
  Award,
  FileText,
  ExternalLink,
  Search,
} from "lucide-react";

const CertificatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleDownloadAllCertificates = () => {
    const link = document.createElement("a");
    link.href = "/certificate_amritraj_lamba.pdf";
    link.download = "All_Certificates_Amritraj_Lamba.pdf";
    link.click();
  };

  const certificates = [
    {
      id: 1,
      title: "World International Mathematical Olympiad Final",
      issuer: "",
      date: "",
      category: "",
      image: "/c1.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c1.jpg",
    },
    {
      id: 2,
      title: "Certificate of Appreciation : Pascal",
      issuer: "",
      date: "",
      category: "",
      image: "/c2.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c2.jpg",
    },
    {
      id: 3,
      title: "Fryer Contest : Certificate of Distinction",
      issuer: "",
      date: "",
      category: "",
      image: "/c3.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c3.jpg",
    },
    {
      id: 4,
      title: "Certificate of Appreciation : Fryer",
      issuer: "",
      date: "",
      category: "",
      image: "/c4.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c4.jpg",
    },
    {
      id: 5,
      title: "Cayley Contest : Certificate of Distinction",
      issuer: "",
      date: "",
      category: "",
      image: "/c5.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c5.jpg",
    },
    {
      id: 6,
      title: "Galois Contest : Certificate of Distinction ",
      issuer: "",
      date: "",
      category: "",
      image: "/c6.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c6.jpg",
    },
    {
      id: 7,
      title: "Fermat Contest : Certificate of Distinction",
      issuer: "",
      date: "",
      category: "",
      image: "/c7.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c7.jpg",
    },
    {
      id: 8,
      title: "Hypatia Contest : Certificate of Distinction",
      issuer: "",
      date: "",
      category: "",
      image: "/c8.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c8.jpg",
    },
    {
      id: 9,
      title: "Certificate of Achievement : Stanford Math Tournament",
      issuer: "",
      date: "",
      category: "",
      image: "/c9.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c9.jpg",
    },
    {
      id: 10,
      title:
        "Certificate of Merit : Indian Olympiad Qualifier in Mathematics IOQM 2024",
      issuer: "",
      date: "",
      category: "",
      image: "/c10.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c10.jpg",
    },
    {
      id: 11,
      title: "SIMOC Silver Award : Math Olympiad Contest",
      issuer: "",
      date: "",
      category: "",
      image: "/c11.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c11.jpg",
    },
    {
      id: 12,
      title: "SIMOC Silver Award : Heritage International Xperiential School",
      issuer: "",
      date: "",
      category: "",
      image: "/c12.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c12.jpg",
    },
    {
      id: 13,
      title: "SIMOC Bronze Award : Heritage Xperiential School",
      issuer: "",
      date: "",
      category: "",
      image: "/c13.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c13.jpg",
    },
    {
      id: 14,
      title: "SASMO Gold Award : Singapore & Asia Schools Math Olympiad",
      issuer: "",
      date: "",
      category: "",
      image: "/c14.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c14.jpg",
    },
    {
      id: 15,
      title: "SASMO Gold Award : American Mathematics Olympiad",
      issuer: "",
      date: "",
      category: "",
      image: "/c15.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c15.jpg",
    },
    {
      id: 16,
      title: "American Mathematics Olympiad 2023",
      issuer: "",
      date: "",
      category: "",
      image: "/c16.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c16.jpg",
    },
    {
      id: 17,
      title: "Thailand International Mathematical Olympiad : Gold",
      issuer: "",
      date: "",
      category: "",
      image: "/c17.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c17.jpg",
    },
    {
      id: 18,
      title: "Hong Kong International Mathematical Olympiad 2022",
      issuer: "",
      date: "",
      category: "",
      image: "/c18.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c18.jpg",
    },
    {
      id: 19,
      title: "Hong Kong International Mathematical Olympiad 2024",
      issuer: "",
      date: "",
      category: "",
      image: "/c19.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c19.jpg",
    },
    {
      id: 20,
      title: "Certificate of Distinction",
      issuer: "",
      date: "",
      category: "",
      image: "/c20.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c20.jpg",
    },
    {
      id: 21,
      title: "STEMplify : Certificate of Participation",
      issuer: "",
      date: "",
      category: "",
      image: "/c21.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c21.jpg",
    },
    {
      id: 22,
      title: "Global Youth Program : Wharton - University of Pennsylvania",
      issuer: "",
      date: "",
      category: "",
      image: "/c22.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c22.jpg",
    },
    {
      id: 23,
      title: "Karate India Organization",
      issuer: "",
      date: "",
      category: "",
      image: "/c23.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c23.jpg",
    },
    {
      id: 24,
      title: "Indo Shotokan Karate-Do Federation",
      issuer: "",
      date: "",
      category: "",
      image: "/c24.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c24.jpg",
    },
    {
      id: 25,
      title: "Asia Pacific Open Championship : Inspire Award",
      issuer: "",
      date: "",
      category: "",
      image: "/c25.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c25.jpg",
    },
    {
      id: 26,
      title: "Asia Pacific Think Award Finalist - July 2024",
      issuer: "",
      date: "",
      category: "",
      image: "/c26.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c26.jpg",
    },
    {
      id: 27,
      title: "American Invitational Mathematics Examination 2025",
      issuer: "",
      date: "",
      category: "",
      image: "/c27.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c27.jpg",
    },
    {
      id: 28,
      title: "American Invitational Mathematics Examination 2024",
      issuer: "",
      date: "",
      category: "",
      image: "/c28.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c28.jpg",
    },
    {
      id: 29,
      title: "Gold Award : Future Intelligence Students Olympiad",
      issuer: "",
      date: "",
      category: "",
      image: "/c29.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c29.jpg",
    },
    {
      id: 30,
      title: "LaunchX Online Bootcamp Program",
      issuer: "",
      date: "",
      category: "",
      image: "/c30.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c30.jpg",
    },
    {
      id: 31,
      title:
        "Certificate of Membership : Heritage International Xperiental School",
      issuer: "",
      date: "",
      category: "",
      image: "/c31.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c31.jpg",
    },
    {
      id: 32,
      title: "International Olympiad Academy : Silver Award",
      issuer: "",
      date: "",
      category: "",
      image: "/c32.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c32.jpg",
    },
    {
      id: 33,
      title: "American Mathematics Competition : Certificate of Distinction",
      issuer: "",
      date: "",
      category: "",
      image: "/c33.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c33.jpg",
    },
    {
      id: 34,
      title: "Crest Gold Award",
      issuer: "",
      date: "",
      category: "",
      image: "/c35.jpg",
      description: "",
      skills: [""],
      pdfUrl: "/c35.jpg",
    },
  ];

  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory =
      selectedCategory === "all" || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewCertificate = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const handleDownloadCertificate = (title, pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
            Certificates
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Professional certifications and course completions showcasing
            continuous learning and expertise across design, development, and
            technology.
          </p>

          {/* Download All Certificates Button */}
          <button
            onClick={handleDownloadAllCertificates}
            className="mt-8 flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-indigo-300 transform hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            View All Certificates (PDF)
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8">
          {/* Search Bar */}
          <div className="relative mb-6 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
            <input
              type="text"
              placeholder="Search certificates by title or issuer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:bg-white transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Certificate Card */}
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 aspect-square">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredIndex === index
                          ? "scale-105 brightness-75"
                          : "scale-100 brightness-90"
                      }`}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-black transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-40" : "opacity-0"
                      }`}
                    />

                    {/* Action Buttons on Hover */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button
                        onClick={() => handleViewCertificate(cert.pdfUrl)}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button
                        onClick={() =>
                          handleDownloadCertificate(cert.title, cert.pdfUrl)
                        }
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-indigo-600 font-semibold mt-1">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>

                    {/* Date */}
                    <p className="text-xs text-slate-500 mb-4">{cert.date}</p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 2).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded">
                          +{cert.skills.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-3 pt-4 border-t border-slate-200">
                      <button
                        onClick={() => handleViewCertificate(cert.pdfUrl)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button
                        onClick={() =>
                          handleDownloadCertificate(cert.title, cert.pdfUrl)
                        }
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-2xl font-bold text-slate-600 mb-2">
              No certificates found
            </p>
            <p className="text-slate-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesPage;
