import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TimelineSection from "./components/TimelineSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fafbfd] selection:bg-pink-200 selection:text-pink-700 antialiased">
      {/* Dynamic top bar navigations */}
      <Navbar />

      <main>
        {/* Hero Section containing height meter and avatar */}
        <HeroSection />

        {/* About Card summaries & quick facts */}
        <AboutSection />

        {/* Animated timeline containing Skating, Writing, Badminton, Piano, and PBL */}
        <TimelineSection />

        {/* Guestbook note feed and copy actions */}
        <ContactSection />
      </main>
    </div>
  );
}

