import React from "react";
import { User, ShieldCheck, HelpCircle } from "lucide-react";
import { PROFILE_KEYWORDS, QUICK_FACTS, PROFILE_INFO } from "../data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-500 tracking-wider uppercase font-mono">
            <span>ABOUT ELIN · 이가원 소개</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight leading-tight">
            당당하고 다채로운 시야의 소유자
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            한 가지의 전공, 정해진 길에 머무르지 않습니다. 높은 시선으로 전체를 조망하고, 마주하는 소소한 도전들을 하나하나 완전한 성과로 장식해온 길을 요약합니다.
          </p>
        </div>

        {/* Narrative & Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-20">
          {/* Main Story Paragraph */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 leading-snug">
              “173cm의 시야로 세상을 널리 탐색하며, <br />
              지치지 않는 실행력으로 정복해 나갑니다.”
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-sans space-y-3">
              어린 시절 은반 위에서 차가운 겨울 바람과의 싸움을 익혔던 피겨 스케이팅 훈련은 저의 성격의 주춧돌이 되었습니다. 수십 번 넘어져도 아무렇지 않게 옷을 털고 일어나는 자세는, 이후 고단한 집필 활동이나 어려운 예체능 레슨을 꾸준히 소화할 수 있었던 원동력이 되었습니다.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed font-sans">
              대학에서의 프로젝트 기반 실무(PBL) 또한 적극적으로 팀을 조율하고 낯선 기획 과제를 파고든 끝에 최우수상이라는 성취로 완결 지을 수 있었습니다. 넓은 전체 조망력과 섬세한 마무리 감각의 완벽한 결합을 자신합니다.
            </p>
          </div>

          {/* Quick Specifications list */}
          <div className="md:col-span-5 p-6 bg-slate-50 rounded-2xl border border-slate-100/50 space-y-4">
            <h4 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono">
              elin spec check
            </h4>
            <div className="space-y-2.5">
              {QUICK_FACTS.map((fact, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 text-xs text-slate-600 font-sans">
                  <span className="flex items-center gap-1.5 font-medium text-slate-500">
                    <span>{fact.emoji}</span>
                    <span>{fact.label}</span>
                  </span>
                  <span className="font-bold text-slate-800">{fact.value}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 text-[10px] text-pink-400 font-bold text-center">
              * ALL-ROUNDER CORE IDENTITIES
            </div>
          </div>
        </div>

        {/* Core Value Cards (Clean Horizontal Pillars) */}
        <div id="keywords" className="border-t border-slate-100 pt-16">
          <div className="text-left mb-10">
            <h4 className="text-xs font-bold text-indigo-500 tracking-wider uppercase font-mono mb-1">
              Core Identity Values
            </h4>
            <h3 className="text-lg font-bold text-slate-800">
              elin을 설명하는 단 세 가지의 단어
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROFILE_KEYWORDS.map((item, index) => (
              <div
                key={index}
                className="p-6.5 bg-white border border-slate-100 hover:border-slate-300 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-sm shadow-xs">
                    {item.emoji}
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
                      Value. 0{index + 1}
                    </span>
                    <h4 className="text-md font-bold text-slate-800 font-display">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
