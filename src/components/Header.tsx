"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Experience", href: "/experiences" },
    { label: "Certificates", href: "/certificates" },
    { label: "Resume", href: "/resumes" },
    { label: "Research Papers", href: "/researchpaper" },
  ];

  const handleNavigation = (href) => {
    // Option 1: For Next.js or similar frameworks
    window.location.href = href;

    // Option 2: Uncomment below if using React Router
    // navigate(href);

    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md">
        <div className="px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-black text-2xl tracking-tighter transition-all duration-700 hover:opacity-80 cursor-pointer"
          >
            Amritraj
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-500 hover:scale-110"
            aria-label="Toggle menu"
          >
            <Plus
              className={`w-6 h-6 transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Add padding to body to account for fixed header */}
      <div className="pt-20">{/* Your page content goes here */}</div>

      {/* Sliding Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-background/95 backdrop-blur-2xl border-l border-border shadow-2xl z-40 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-6 py-4 text-lg font-medium text-foreground hover:text-accent transition-all duration-300 rounded-xl hover:bg-secondary/80 hover:translate-x-2 block ${
                  menuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 75}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
