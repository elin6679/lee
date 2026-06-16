import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3.5 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* Logo and Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold transition-transform duration-300 group-hover:rotate-12">
            e
          </span>
          <span className="font-display font-bold text-slate-800 text-sm tracking-tight transition-colors group-hover:text-pink-500">
            이가원 <span className="text-slate-400 font-normal">elin.log</span>
          </span>
        </button>

        {/* Dynamic Navigation Items */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => scrollToSection("about")}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
          >
            소개
          </button>
          <button
            onClick={() => scrollToSection("timeline")}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
          >
            타임라인
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
