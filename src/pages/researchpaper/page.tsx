import { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  User,
  BookOpen,
  Share2,
} from "lucide-react";

const ResearchPaperPage = () => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [copied, setCopied] = useState(false);

  const researchPaper = {
    id: 1,
    title:
      "Enhancing User Experience Through AI-Driven Personalization in Web Design",
    authors: ["Omisaa Bansal", "Dr. Rajesh Kumar", "Prof. Priya Singh"],
    publicationDate: "March 15, 2024",
    journal: "International Journal of Web and Digital Design",
    volume: "12",
    issue: "2",
    pages: "145-178",
    doi: "10.1234/ijwd.2024.12.2.145",
    abstract:
      "This research paper explores the integration of artificial intelligence and machine learning algorithms in personalizing user experiences in modern web design. Our study analyzes 50+ websites and conducts user testing with 500+ participants to understand the impact of AI-driven personalization on user engagement, conversion rates, and overall satisfaction. The findings demonstrate a 45% increase in user engagement and a 32% improvement in conversion rates when AI personalization is properly implemented. We present a comprehensive framework for designers and developers to effectively integrate AI personalization into their projects while maintaining ethical standards and user privacy. Our work contributes to the growing body of knowledge on human-computer interaction and provides practical guidelines for industry practitioners.",
    keywords: [
      "AI Personalization",
      "User Experience",
      "Web Design",
      "Machine Learning",
      "Conversion Optimization",
      "User Engagement",
    ],
    sections: [
      {
        title: "1. Introduction",
        content:
          "The rapid advancement in artificial intelligence has revolutionized how web designers approach user experience. Traditional design methods rely on static layouts and generic interactions. However, AI-driven personalization enables dynamic, adaptive interfaces that respond to individual user preferences and behaviors.",
      },
      {
        title: "2. Literature Review",
        content:
          "Previous studies have shown the effectiveness of personalization in e-commerce platforms. However, limited research exists on the broader application of AI personalization across different types of web applications and its long-term impact on user behavior and satisfaction.",
      },
      {
        title: "3. Methodology",
        content:
          "We conducted a mixed-methods study involving quantitative analysis of user interactions on 50+ websites and qualitative interviews with 500+ participants. Our AI models were built using neural networks and decision tree algorithms to predict user preferences.",
      },
      {
        title: "4. Results & Findings",
        content:
          "Our results indicate significant improvements in key performance indicators when AI personalization is implemented. User engagement increased by 45%, conversion rates improved by 32%, and user satisfaction scores rose from 6.2/10 to 8.1/10.",
      },
      {
        title: "5. Discussion",
        content:
          "The findings suggest that AI-driven personalization, when implemented ethically and with proper privacy considerations, can significantly enhance web user experiences. However, transparency and user control remain critical factors in user acceptance.",
      },
      {
        title: "6. Conclusion & Future Work",
        content:
          "This research demonstrates the potential of AI in web design and offers a framework for practitioners. Future research should explore the long-term effects of personalization and develop better methods for maintaining user privacy while delivering personalized experiences.",
      },
    ],
    citations: [
      "Smith, J. (2023). Machine Learning in UX Design. Design Review, 10(4), 45-62.",
      "Johnson, M., & Lee, S. (2022). Personalization frameworks for modern web. Tech Journal, 8(1), 12-28.",
      "Williams, R. (2021). AI and user behavior analysis. Data Science Quarterly, 5(3), 89-105.",
      "Brown, A., Chen, L., & Davis, K. (2023). Ethical AI in digital design. Ethics Review, 15(2), 34-51.",
    ],
    pdfUrl: "/research-papers/ai-personalization-web-design.pdf",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = researchPaper.pdfUrl;
    link.download = `${researchPaper.title}.pdf`;
    link.click();
  };

  const handleCopyCitation = () => {
    const citation = `${researchPaper.authors.join(", ")}. (${new Date(
      researchPaper.publicationDate
    ).getFullYear()}). ${researchPaper.title}. ${researchPaper.journal}, ${
      researchPaper.volume
    }(${researchPaper.issue}), ${researchPaper.pages}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const text = `Check out this research paper: "${researchPaper.title}" by ${researchPaper.authors[0]}`;
    if (navigator.share) {
      navigator.share({
        title: researchPaper.title,
        text: text,
      });
    } else {
      alert("Share this paper: " + text);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
            Research Paper
          </h1>

          {/* Paper Info Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-8 mb-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {researchPaper.title}
            </h2>

            {/* Authors */}
            <div className="mb-6">
              <p className="text-sm text-slate-600 font-semibold uppercase mb-2">
                Authors
              </p>
              <div className="flex flex-wrap gap-2">
                {researchPaper.authors.map((author, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg"
                  >
                    <User className="w-4 h-4 text-indigo-600" />
                    <span className="text-slate-700 font-medium">{author}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Publication Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-indigo-200">
              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold mb-1">
                  Publication Date
                </p>
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  {researchPaper.publicationDate}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold mb-1">
                  Journal
                </p>
                <p className="text-slate-900 font-semibold">
                  {researchPaper.journal}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold mb-1">
                  Volume & Issue
                </p>
                <p className="text-slate-900 font-semibold">
                  {researchPaper.volume}({researchPaper.issue})
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold mb-1">
                  Pages
                </p>
                <p className="text-slate-900 font-semibold">
                  {researchPaper.pages}
                </p>
              </div>
            </div>

            {/* DOI and Action Buttons */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-600 uppercase font-semibold mb-2">
                  DOI
                </p>
                <p className="font-mono text-slate-900 font-semibold break-all">
                  https://doi.org/{researchPaper.doi}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowPdfViewer(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
                >
                  <Eye className="w-5 h-5" />
                  View PDF
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleCopyCitation}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg font-medium transition-all duration-300 ${
                copied
                  ? "bg-green-100 border-green-300 text-green-700"
                  : "bg-white border-slate-300 text-slate-700 hover:border-slate-400"
              }`}
            >
              <FileText className="w-4 h-4" />
              {copied ? "Copied!" : "Copy Citation"}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Abstract Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="bg-white border border-slate-200 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Abstract
          </h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            {researchPaper.abstract}
          </p>

          {/* Keywords */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 uppercase font-semibold mb-3">
              Keywords
            </p>
            <div className="flex flex-wrap gap-2">
              {researchPaper.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Paper Content */}
        <div className="space-y-8">
          {researchPaper.sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {section.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* References Section */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 mt-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">References</h3>
          <ol className="space-y-4">
            {researchPaper.citations.map((citation, idx) => (
              <li key={idx} className="text-slate-700 leading-relaxed text-sm">
                <span className="font-semibold text-slate-900">
                  [{idx + 1}]
                </span>{" "}
                {citation}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {showPdfViewer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 line-clamp-1">
                {researchPaper.title}
              </h3>
              <button
                onClick={() => setShowPdfViewer(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* PDF Content */}
            <div className="h-[calc(90vh-80px)] bg-slate-50 flex items-center justify-center overflow-auto">
              <div className="w-full h-full flex items-center justify-center bg-white p-8">
                <div className="text-center">
                  <FileText className="w-24 h-24 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600 font-semibold mb-4">
                    PDF Preview
                  </p>
                  <p className="text-slate-500 mb-6 max-w-md">
                    PDF viewer preview. Click the download button to view the
                    full research paper in your preferred PDF reader.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setShowPdfViewer(false)}
                      className="px-4 py-2 bg-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchPaperPage;
