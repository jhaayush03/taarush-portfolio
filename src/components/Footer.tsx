import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Heart,
  ArrowUp,
  Github,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AmritrajL",
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Mail,
      href: "mailto:lamba.amritraj@gmail.com",
      label: "Email",
      color: "from-green-500 to-emerald-400",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-secondary/70 border-t border-border">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      <div className="relative section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-4 group">
              <h3 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-accent via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
                Amritraj Lamba
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed"></p>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full group-hover:w-24 transition-all duration-500" />
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {["About Me", "Experience", "Certificates", "Resume"].map(
                  (item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="text-foreground/70 hover:text-accent hover:translate-x-2 transition-all duration-300 inline-block group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-600 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get in Touch
              </h4>
              <p className="text-sm text-foreground/70">
                Feel free to reach out for collaborations or just a friendly
                hello
              </p>
              <a
                href="mailto:lamba.amritraj@gmail.com"
                className="inline-block px-6 py-3 bg-gradient-to-r from-accent via-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 animate-fade-in-up"
              >
                Say Hello!
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                />
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.color} blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                />
                <social.icon className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll to top button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={scrollToTop}
              className="group w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </button>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gradient-to-r from-transparent via-border to-transparent flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2 animate-fade-in-up">
              © {currentYear} Amritraj Lamba.
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-accent transition-colors duration-300 relative group"
              >
                <span>Privacy Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors duration-300 relative group"
              >
                <span>Terms of Service</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
