import React from "react";
import { motion } from "motion/react";
import { ChevronRight, Mail, Compass } from "lucide-react";
import { PROFILE_INFO } from "../data";
import avatar from "../assets/images/elin_avatar_1781528861265.jpg";

export default function HeroSection() {
  const handleScrollDown = () => {
    const element = document.getElementById("about");
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#fafbfd]">
      {/* Soft elegant pastel background radial blur */}
      <div className="absolute top-[10%] right-[10%] w-[380px] h-[380px] rounded-full bg-pink-100/30 filter blur-3xl" />
      <div className="absolute bottom-[10%] left-[5%] w-[420px] h-[420px] rounded-full bg-sky-100/30 filter blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center relative z-10 w-full">
        {/* Left Side: Elegant Content */}
        <div className="md:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Identity Tag */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-100/80 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <span className="text-xs font-bold text-slate-500 tracking-wider uppercase font-mono">elin lee · 173cm vertical perspective</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              안녕하세요, <br />
              올라운더 <span className="text-pink-500 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">이가원</span>입니다.
            </h1>
            <p className="text-lg font-medium text-slate-600 leading-relaxed font-sans">
              173cm의 시원하고 넓은 시야만큼이나, <br />
              새로운 분야에 거침없이 뛰어들어 조화를 만들어냅니다.
            </p>
          </div>

          {/* Core brief intro */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
            어릴 적 차가운 얼음판 피겨 스케이트에서 단련했던 끈기를 토대로 배드민턴 동아리 대표 레슨 대회 과정, 장편 소설 집필, 피아노 독주 무대 완성, 
            대학 PBL 종합 최우수상 수상에 이르기까지 집념 있는 마무리를 증명해오고 있습니다.
          </p>

          {/* Quick Static Spec Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 mt-2">
            <span className="px-2.5 py-1.5 bg-slate-100 rounded-md">⛸️ 피겨 스케이팅</span>
            <span className="px-2.5 py-1.5 bg-slate-100 rounded-md">📝 소설 창작</span>
            <span className="px-2.5 py-1.5 bg-slate-100 rounded-md">🏸 배드민턴</span>
            <span className="px-2.5 py-1.5 bg-slate-100 rounded-md">🎹 피아노 무대</span>
            <span className="px-2.5 py-1.5 bg-slate-100 rounded-md">🏆 PBL 최우수상</span>
          </div>

          {/* Button actions */}
          <div className="flex flex-wrap items-center gap-3.5 mt-4">
            <button
              onClick={handleScrollDown}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-tight transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <span>스토리 탐색하기</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(PROFILE_INFO.email);
                alert("이메일 가원님의 주소가 복사되었습니다! 💌");
              }}
              className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 font-semibold text-xs tracking-tight transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>이메일 복사하기</span>
            </button>
          </div>
        </div>

        {/* Right Side: Portrait Minimal Frame */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative">
            {/* Soft decorative shadow ring */}
            <div className="absolute inset-0 bg-linear-to-tr from-pink-200/20 to-indigo-200/20 rounded-[2rem] blur-xl" />

            {/* Avatar Frame Box - Totally pristine clean */}
            <div className="relative p-3 bg-white border border-slate-100 rounded-[2rem] shadow-sm max-w-[280px] sm:max-w-[320px]">
              <div className="aspect-square rounded-[1.5rem] overflow-hidden bg-slate-50 relative">
                <img
                  src={avatar}
                  alt="Elin (이가원)"
                  className="w-full h-full object-cover grayscale-15 hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 px-1.5 pb-1 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-700">이가원 (elin)</h4>
                  <p className="text-[10px] text-slate-400">gawoni0817@gmail.com</p>
                </div>
                <span className="text-[10px] bg-pink-50 text-pink-500 font-bold px-2 py-0.5 rounded-sm">
                  173 cm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
