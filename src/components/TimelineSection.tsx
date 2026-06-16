import React from "react";
import { Calendar, ShieldAlert } from "lucide-react";
import { TIMELINE_DATA } from "../data";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-[#FAFBFD] border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-500 tracking-wider uppercase font-mono">
            <span>MY STORY STORY · 성장 흐름</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight leading-tight">
            이가원의 도전 피드
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            끈기 가득했던 유년기의 운동 연습부터, 남달랐던 창작 기획 활동, 그리고 대학생 실무 프로젝트 종합 최우수상 수상에 이르기까지 이가원이 구축해온 오리지널 스토리입니다.
          </p>
        </div>

        {/* Clean Left-aligned Stream */}
        <div className="space-y-12">
          {TIMELINE_DATA.map((item) => (
            <div 
              key={item.id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start relative pb-8 border-b border-dashed border-slate-200/50 last:border-0 last:pb-0"
            >
              {/* Left Column: Period Badge */}
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1">
                <span className="text-xs font-extrabold text-slate-400 font-mono tracking-wider uppercase">
                  {item.period}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold">
                  {item.badgeText}
                </span>
              </div>

              {/* Right Column: Clean Content Frame */}
              <div className="md:col-span-9 space-y-4">
                {/* Title and Icon */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center justify-center text-md shrink-0">
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="text-md sm:text-lg font-bold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-indigo-500 font-medium font-sans mt-0.5">{item.subtitle}</p>
                  </div>
                </div>

                {/* Substantive Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Takeaways Board - Elegant & Visible instantly */}
                <div className="p-4 bg-white/70 border border-slate-100 rounded-xl space-y-2.5">
                  <h4 className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase font-mono">
                    Key growth takeaways & actions:
                  </h4>
                  <ul className="space-y-1.5">
                    {item.detailLines.map((line, idx) => (
                      <li key={idx} className="text-xs text-slate-500 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
