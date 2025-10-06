import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Resume", href: "#resume" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Logo - appears when scrolled */}
        <div
          className={`font-black text-2xl tracking-tighter transition-all duration-700 ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          YOUR NAME
        </div>

        {/* Navigation - slides in from right */}
        <nav
          className={`flex gap-1 transition-all duration-700 ${
            scrolled
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-all duration-300 rounded-lg hover:bg-secondary/80"
              style={{ transitionDelay: scrolled ? `${index * 50}ms` : '0ms' }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
