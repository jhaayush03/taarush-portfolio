"use client";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Github } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-start pt-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="w-full px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground">
              Amritraj<br></br>Lamba
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Heritage International Xperiental Learning, Gurugram.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="mailto:lamba.amritraj@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right side - Image */}
        <div
          className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 -mt-32 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-3/4 max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/profile.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-muted-foreground font-medium">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
