import { useState, useEffect, useRef } from "react";
import { ChevronRight, Play } from "lucide-react";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const [fullscreenItem, setFullscreenItem] = useState(null);
  const videoRefs = useRef({});
  const fullscreenVideoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Resume",
      category: "mobile",
      image: "/11.jpeg",
      url: "/resumes",
    },
    {
      id: 2,
      title: "Certificates",
      category: "web",
      image: "/12.jpg",
      url: "/certificates",
    },
    {
      id: 3,
      title: "Experience",
      category: "branding",
      image: "/3.jpeg",
      url: "/experiences",
    },
    {
      id: 4,
      title: "Research Papers",
      category: "web",
      image: "/13.png",
      url: "/researchpaper",
    },
  ];

  const showcasePhotos = [
    {
      id: 1,
      type: "",
      image: "/p1.jpg",
      description:
        "INSPIRE AWARD & THINK AWARD, APOC FTC 2024, Sydney Australia",
    },
    {
      id: 2,
      type: "",
      image: "/p2.jpg",
      description: "FUNCTION Robotics Club at HIXS",
    },

    {
      id: 3,
      type: "",
      image: "/p3.jpg",
      description:
        "Singapore International Math Olympiad Challenge 2024, Singapore",
    },
    {
      id: 4,
      type: "",
      image: "/p4.jpg",
      description:
        "Wharton Global Youth Program, Product Design Academy 2025 University of Pennsylvania",
    },

    {
      id: 5,
      type: "",
      image: "/p5.jpg",
      description: "F1 in Schools, Regionals 2024",
    },
    {
      id: 6,
      type: "",
      image: "/p6.jpg",
      description: "WIMO, Final Round 2023, Kuala Lumpur, Malaysia",
    },
    {
      id: 7,
      type: "",
      image: "/p7.jpg",
      description: "APOC 2024, FTC Sydney, Australia",
    },
    {
      id: 8,
      type: "",
      image: "/p8.jpg",
      description: "TEENS OF GOD, Registered NGO",
    },
    {
      id: 9,
      type: "",
      image: "/p9.jpg",
      description: "F1 in Schools, Nationals 2024",
    },
    {
      id: 10,
      type: "",
      image: "/p10.jpg",
      description: "INGENIX, School STEM Society HIXS",
    },
    {
      id: 11,
      type: "",
      video: "/v1.mp4",
      description: "Adjustable solar panel",
    },
    {
      id: 12,
      type: "",
      video: "/v2.mp4",
      description:
        "Witnessing HRC in person to understand how it helps improve efficiency",
    },
    {
      id: 13,
      type: "",
      video: "/v3.mp4",
      description: "Game prep for First Tech Challenge, APOC",
    },
  ];

  const categories = [
    { name: "all", label: "All" },
    { name: "design", label: "Design" },
    { name: "web", label: "Web" },
    { name: "mobile", label: "Mobile" },
    { name: "branding", label: "Branding" },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageClick = (url, e) => {
    // If it's a gallery item with URL, navigate
    if (url) {
      window.location.href = url;
    }
  };

  const handleVideoHover = (id, isHovering) => {
    const video = videoRefs.current[id];
    if (video) {
      if (isHovering) {
        video.play().catch((e) => console.log("Play failed:", e));
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const openFullscreen = (item) => {
    setFullscreenItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
    setFullscreenItem(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && fullscreenItem) {
        closeFullscreen();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [fullscreenItem]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="pt-24 pb-12 px-6 md:px-12 lg:px-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent"></h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Explore my latest work and creative projects
            </p>
          </div>
        </div>
      </div>

      {/* Main Gallery Grid - Centered */}
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container */}
                <div className="flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredIndex === index
                          ? "scale-110 brightness-75"
                          : "scale-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        openFullscreen({
                          type: "image",
                          image: item.image,
                          description: `Professional ${item.title.toLowerCase()} showcasing skills, achievements, and qualifications in a comprehensive format.`,
                          id: item.id,
                        });
                      }}
                    />

                    {/* Gradient Overlay - Always visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Button-like Title Below Image */}
                  <div className="mt-4">
                    <button
                      onClick={() => handleImageClick(item.url)}
                      className="w-full bg-white hover:bg-slate-50 rounded-xl px-6 py-4 flex items-center justify-between shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300 group/btn"
                    >
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <ChevronRight className="w-6 h-6 text-slate-900 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-slate-600">No gallery items found</p>
              <p className="text-slate-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Showcase Section */}
      <div className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg text-slate-600 mb-12 font-medium">
            A curated collection of visual stories and creative moments
          </p>

          {/* Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcasePhotos.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onMouseEnter={() => {
                  setHoveredPhotoIndex(index);
                  if (item.type === "video") {
                    handleVideoHover(item.id, true);
                  }
                }}
                onMouseLeave={() => {
                  setHoveredPhotoIndex(null);
                  if (item.type === "video") {
                    handleVideoHover(item.id, false);
                  }
                }}
              >
                {/* Card Container */}
                <div className="flex flex-col">
                  {/* Media Container */}
                  <div
                    className="relative overflow-hidden rounded-2xl aspect-square bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-500"
                    onClick={() => openFullscreen(item)}
                  >
                    {/* Image or Video */}
                    {item.type === "image" ? (
                      <img
                        src={item.image}
                        alt={`Photo ${item.id}`}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredPhotoIndex === index
                            ? "scale-110"
                            : "scale-100"
                        }`}
                      />
                    ) : (
                      <>
                        <video
                          ref={(el) => (videoRefs.current[item.id] = el)}
                          src={item.video}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            hoveredPhotoIndex === index
                              ? "scale-110"
                              : "scale-100"
                          }`}
                          loop
                          muted
                          playsInline
                        />
                        {/* Play Icon Overlay for Videos */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                            hoveredPhotoIndex === index
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                        >
                          <div className="bg-white/90 rounded-full p-4 shadow-lg">
                            <Play className="w-8 h-8 text-slate-900 fill-slate-900" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {item.type === "video" ? "VIDEO" : "IMAGE"}
                      </span>
                    </div>
                  </div>

                  {/* Description Below Image */}
                  <div className="mt-4 bg-white rounded-xl p-5 shadow-md border border-slate-200">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div
            className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content Container with Scrolling */}
            <div className="w-full h-full overflow-auto flex items-start justify-center py-8">
              <div className="flex flex-col items-center gap-6 w-full px-4">
                {/* Media */}
                {fullscreenItem.type === "image" ? (
                  <img
                    src={fullscreenItem.image}
                    alt={`Photo ${fullscreenItem.id}`}
                    className="w-full object-contain rounded-lg shadow-2xl"
                    style={{ maxHeight: "none" }}
                  />
                ) : (
                  <video
                    ref={fullscreenVideoRef}
                    src={fullscreenItem.video}
                    className="w-full object-contain rounded-lg shadow-2xl"
                    style={{ maxHeight: "none" }}
                    controls
                    autoPlay
                    loop
                  />
                )}

                {/* Description */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-4xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      {fullscreenItem.type === "video" ? "VIDEO" : "IMAGE"}
                    </span>
                  </div>
                  <p className="text-white text-lg leading-relaxed">
                    {fullscreenItem.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
