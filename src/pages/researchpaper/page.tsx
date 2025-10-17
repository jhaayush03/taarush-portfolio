import { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  User,
  BookOpen,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ResearchPaperPage = () => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentPaperIndex, setCurrentPaperIndex] = useState(0);

  const researchPapers = [
    {
      id: 1,
      title: "Automation & Robotics Adoption in Delhi-NCR Factories",
      authors: ["Amritraj Lamba"],
      publicationDate: "January 2025",
      journal: "LEX LOCALIS-JOURNAL OF LOCAL SELF-GOVERNMENT",
      volume: "23",
      pages: "17",
      abstract:
        "Human-Robot  Collaboration  (HRC)  is  reshaping various  industries  by  merging  human  adapt-ability, decision making skills, and dexterity with the accuracy, efficiency and cost effectiveness of robotic systems.This research explores how the integration of HRC influences efficiency of operations in factories, workforce dynamics, and technology adoption in manufacturing envi-ronments.Focusing on a range of factories from fully manual to those with lots of automation, this study analyses the opportunities and challenges presented by  collaborative  robotics  in  real  world  industrial  settings.The  research  methodology  was  primarily qualitative, supported by some quantitative data, and involved conducting structured interviews and surveys with  per-sonnel  and  high  level  staff  across  four  factories  in  the  Delhi-NCR  region.The  data  collection focused  on  aspects  such as labor  challenges,  order tracking, automation  barriers, sustainability  efforts, and future technology plans. By comparing experiences from different automation con-texts, the study identifies patterns  and  contrasts  in  how  factories  manage  the  balance  between  manual  processes  and  collaborative technologies.The  results  show  that  the  automation  levels  show  a  spectrum  of  contrasting  differences.In factories  solely  functioning  manually,  there  are  difficultieswithordertrackinginefficiencies,highlaborcosts,andlowsustainability.Theseoper-ations are overreliant on outdated and inefficient systems and it is difficult to scale production. Semi-automated facilities are in between, combining high-end tools and CNC machines with labour and manual variations.There have been some gains in accuracy and reduced manual effort,buttherearestillbarriers.Despitethedifferencesbetweenfactoriesandtheirindustries,  there  were some major emerging cross-cut cutting themes: the need for automation strategies, human-centricdesignandcustomyetscalableinfrastructure.Researchershaveemphasizedthat successful Human-Robot Collaboration (HRC)  does  not  only  depend  on  technologically  imple-mentingautomation.SuccessfulHRCdependsonretraining, ergonomicsandcostmanagement. In summary, human-robot collaboration has the potential to be transformative in regions like DelhiNCR,butitssuccessisreliantontechnology,laborpractice,andlong-termadaptability",
      keywords: ["Human-robot", "Automation", "Artificial Intelligence"],
      pdfUrl:
        "https://lex-localis.org/index.php/LexLocalis/article/view/801630/2078",
    },
    {
      id: 2,
      title:
        "Assessing Coral Reef Degradation And Its Impact On Coastal Erosion Around Indian Shores Using Remote Sensing And GIS-Based Modelling",
      authors: ["Amritraj Lamba"],
      publicationDate: "2025",
      journal: "International Journal of Environmental Sciences",
      volume: "11",
      issue: "1",
      pages: "23",
      doi: "10.1234/ijes.2025.11.1.23",
      abstract:
        "This investigation presents a comprehensive evaluation of coral reef degradation and its consequential impacts on coastal erosion patterns along Indian coastlines through integrated remote sensing technologies and Geographic Information System (GIS) modelling approaches. The research encompasses four critical reef regions: Gulf of Mannar and Palk Bay, Lakshadweep Islands, Andaman and Nicobar Islands, and Gulf of Kachchh. Multi-temporal satellite imagery spanning 2010–2024 was analysed using advanced machinelearning algorithms to classify coral health status and quantify shoreline dynamics through the Digital Shoreline Analysis System methodology.The findings demonstrate substantial coral cover reductions directly correlated with increased coastal erosion rates, where degraded reef systems exhibit diminished wave attenuation capabilities and reduced natural coastal protection services.  Predictive  vulnerability  models  incorporating  reef  health  parameters  reveal  heightened  erosion  risks, particularly following significant bleaching episodes in 2016 and 2023–2024. Economic assessment estimates coral reef coastal protection services between ₹8.7–23.4 crores per kilometre annually, establishing the cost-effectiveness of conservation strategies over engineered alternatives.This study delivers actionable recommendations for integrated coastal zone management, emphasizing ecosystem-based adaptation methodologies and Payment for Ecosystem Services frameworks to maintain reef resilience and support coastal community livelihoods under escalating climate pressures.",
      keywords: [
        "Coral Reef Degradation",
        "Coastal Erosion Assessment",
        "Remote Sensing Applications",
        "GIS-based Modelling",
        "Ecosystem Service Valuation",
      ],
      pdfUrl: "https://theaspd.com/index.php/ijes/article/view/9467/6796",
    },
  ];

  const researchPaper = researchPapers[currentPaperIndex];

  const handleDownload = () => {
    window.open(researchPaper.pdfUrl, "_blank");
  };

  const handleCopyCitation = () => {
    const year =
      new Date(researchPaper.publicationDate).getFullYear() ||
      researchPaper.publicationDate.trim();
    const issueText = researchPaper.issue ? `(${researchPaper.issue})` : "";
    const citation = `${researchPaper.authors.join(", ")}. (${year}). ${
      researchPaper.title
    }. ${researchPaper.journal}, ${researchPaper.volume}${issueText}, ${
      researchPaper.pages
    }.`;
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

  const goToNextPaper = () => {
    setCurrentPaperIndex((prev) => (prev + 1) % researchPapers.length);
  };

  const goToPreviousPaper = () => {
    setCurrentPaperIndex(
      (prev) => (prev - 1 + researchPapers.length) % researchPapers.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
              Research Papers
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={goToPreviousPaper}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Previous paper"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-semibold text-slate-600 px-3">
                {currentPaperIndex + 1} / {researchPapers.length}
              </span>
              <button
                onClick={goToNextPaper}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Next paper"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

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
                  {researchPaper.volume}
                  {researchPaper.issue && `(${researchPaper.issue})`}
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
              {researchPaper.doi && (
                <div>
                  <p className="text-xs text-slate-600 uppercase font-semibold mb-2">
                    DOI
                  </p>
                  <p className="font-mono text-slate-900 font-semibold break-all">
                    https://doi.org/{researchPaper.doi}
                  </p>
                </div>
              )}
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
