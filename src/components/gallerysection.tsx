import { useState, useEffect } from "react";
import { Search, Heart, Eye } from "lucide-react";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredPhotoIndex, setHoveredPhotoIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const [liked, setLiked] = useState(new Set());
  const [likedPhotos, setLikedPhotos] = useState(new Set());

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
      image: "/1.jpeg",
      url: "/resumes",
      views: "1.8K",
      likes: "389",
    },
    {
      id: 2,
      title: "Certificates",
      category: "web",
      image: "/2.jpeg",
      url: "/certificates",
      views: "3.1K",
      likes: "523",
    },
    {
      id: 3,
      title: "Experiences",
      category: "branding",
      image: "/3.jpeg",
      url: "/experiences",
      views: "2.7K",
      likes: "512",
    },
    {
      id: 4,
      title: "Research Papers",
      category: "web",
      image: "/4.jpeg",
      url: "/researchpaper",
      views: "2.9K",
      likes: "467",
    },
  ];

  const showcasePhotos = [
    {
      id: 1,
      image: "/5.jpeg",
      views: "1.2K",
      likes: "234",
    },
    {
      id: 2,
      image: "/6.jpeg",
      views: "2.1K",
      likes: "345",
    },
    {
      id: 3,
      image: "/8.jpeg",
      views: "2.5K",
      likes: "412",
    },
    {
      id: 4,
      image: "/9.jpeg",
      views: "1.9K",
      likes: "301",
    },
    {
      id: 5,
      image: "/10.jpeg",
      views: "1.9K",
      likes: "301",
    },
    {
      id: 6,
      image: "/11.jpeg",
      views: "1.9K",
      likes: "301",
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

  const toggleLike = (id, e) => {
    e.stopPropagation();
    const newLiked = new Set(liked);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLiked(newLiked);
  };

  const togglePhotoLike = (id, e) => {
    e.stopPropagation();
    const newLiked = new Set(likedPhotos);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedPhotos(newLiked);
  };

  const handleImageClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-slate-900">
              Gallery
            </h1>
            <p className="text-lg text-slate-600">
              Explore my latest work and creative projects
            </p>
          </div>
        </div>
      </div>

      {/* Main Gallery Grid - Centered */}
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleImageClick(item.url)}
              >
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-lg aspect-square bg-slate-100 border border-slate-200 hover:border-slate-400 transition-all duration-300">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-black transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-60" : "opacity-0"
                    }`}
                  />

                  {/* Content - Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3
                      className={`text-sm font-semibold text-white line-clamp-1 transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Stats */}
                    <div
                      className={`flex items-center justify-between mt-2 text-xs text-slate-200 transition-all duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className="flex items-center gap-1 hover:text-red-400 transition-colors"
                      >
                        <Heart
                          className={`w-3 h-3 ${
                            liked.has(item.id)
                              ? "fill-red-400 text-red-400"
                              : ""
                          }`}
                        />
                        <span>{item.likes}</span>
                      </button>
                    </div>
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
      <div className="px-6 md:px-12 lg:px-24 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-slate-900">
            Photo Showcase
          </h2>

          {/* Showcase Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {showcasePhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredPhotoIndex(index)}
                onMouseLeave={() => setHoveredPhotoIndex(null)}
              >
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-lg aspect-square bg-slate-100 border border-slate-200 hover:border-slate-400 transition-all duration-300">
                  {/* Image */}
                  <img
                    src={photo.image}
                    alt={`Photo ${photo.id}`}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredPhotoIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-black transition-all duration-300 ${
                      hoveredPhotoIndex === index ? "opacity-60" : "opacity-0"
                    }`}
                  />

                  {/* Content - Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    {/* Stats */}
                    <div
                      className={`flex items-center justify-between text-xs text-slate-200 transition-all duration-300 ${
                        hoveredPhotoIndex === index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="w-3 h-3" />
                        <span>{photo.views}</span>
                      </div>
                      <button
                        onClick={(e) => togglePhotoLike(photo.id, e)}
                        className="flex items-center gap-1 hover:text-red-400 transition-colors"
                      >
                        <Heart
                          className={`w-3 h-3 ${
                            likedPhotos.has(photo.id)
                              ? "fill-red-400 text-red-400"
                              : ""
                          }`}
                        />
                        <span>{photo.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
