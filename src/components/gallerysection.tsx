import { useState, useEffect } from "react";
import { Search, Heart, Eye } from "lucide-react";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const [liked, setLiked] = useState(new Set());

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
      title: "Urban Design System",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop",
      url: "/gallery/urban-design",
      views: "2.3K",
      likes: "456",
    },
    {
      id: 2,
      title: "Mobile Experience",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=300&h=300&fit=crop",
      url: "/gallery/mobile-ux",
      views: "1.8K",
      likes: "389",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=300&h=300&fit=crop",
      url: "/gallery/ecommerce",
      views: "3.1K",
      likes: "523",
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=300&h=300&fit=crop",
      url: "/gallery/branding",
      views: "2.7K",
      likes: "512",
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1460925895917-adf4e11526c6?w=300&h=300&fit=crop",
      url: "/gallery/analytics",
      views: "2.9K",
      likes: "467",
    },
    {
      id: 6,
      title: "Packaging Design",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=300&h=300&fit=crop",
      url: "/gallery/packaging",
      views: "1.5K",
      likes: "298",
    },
    {
      id: 7,
      title: "3D Product Render",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1523875335684-37898b6baf30?w=300&h=300&fit=crop",
      url: "/gallery/product-3d",
      views: "4.2K",
      likes: "687",
    },
    {
      id: 8,
      title: "Motion Graphics",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1533391304391-01d57cff058f?w=300&h=300&fit=crop",
      url: "/gallery/motion",
      views: "3.4K",
      likes: "612",
    },
    {
      id: 9,
      title: "Website Redesign",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1559654606-ec26f98a36ab?w=300&h=300&fit=crop",
      url: "/gallery/website",
      views: "2.1K",
      likes: "401",
    },
    {
      id: 10,
      title: "Social Media Campaign",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=300&fit=crop",
      url: "/gallery/social",
      views: "5.1K",
      likes: "892",
    },
    {
      id: 11,
      title: "UI Component Library",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
      url: "/gallery/components",
      views: "1.9K",
      likes: "345",
    },
    {
      id: 12,
      title: "Photography Portfolio",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop",
      url: "/gallery/photography",
      views: "3.8K",
      likes: "734",
    },
    {
      id: 13,
      title: "App Interface",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      url: "/gallery/app-interface",
      views: "2.5K",
      likes: "421",
    },
    {
      id: 14,
      title: "Branding Project",
      category: "branding",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      url: "/gallery/branding-2",
      views: "1.7K",
      likes: "356",
    },
    {
      id: 15,
      title: "Web Design",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=300&h=300&fit=crop",
      url: "/gallery/web-design",
      views: "3.2K",
      likes: "598",
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

          {/* Search and Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Search Bar */}
            <div className="md:col-span-2 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all duration-300"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-slate-700">
                {filteredItems.length}{" "}
                <span className="text-slate-500">items</span>
              </span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-slate-900 text-white border border-slate-900"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
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
    </div>
  );
};

export default GallerySection;
