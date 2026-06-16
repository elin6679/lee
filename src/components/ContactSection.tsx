import React, { useState } from "react";
import { Clipboard, Send, Instagram, Github } from "lucide-react";
import { PROFILE_INFO } from "../data";

interface GuestNote {
  id: string;
  sender: string;
  emoji: string;
  text: string;
  date: string;
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🌸");
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState<GuestNote[]>([
    {
      id: "1",
      sender: "민준",
      emoji: "🏸",
      text: "가원님 173cm 우월한 비율만큼 배드민턴 실력도 시원시원하시겠어요! 포트폴리오 정말 사랑스럽네요.",
      date: "방금 전"
    },
    {
      id: "2",
      sender: "서연",
      emoji: "🎹",
      text: "어릴 때부터 지금까지 다채로운 경험(피겨, 소설, 음악, PBL)을 모두 장식해 두신 것을 보니 정말 멋진 올라운더라는 생각이 듭니다. 응원합니다!",
      date: "오늘 오전"
    }
  ]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const emojis = ["🌸", "⛸️", "📝", "🏸", "🎹", "🏆", "🌟", "🔥"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !noteText.trim()) return;

    const newNote: GuestNote = {
      id: Math.random().toString(),
      sender: senderName,
      emoji: selectedEmoji,
      text: noteText,
      date: "방금 전"
    };

    setNotes([newNote, ...notes]);
    setSenderName("");
    setNoteText("");
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-500 tracking-wider uppercase font-mono">
            <span>GET IN TOUCH · 연락처 및 방명록</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-800 tracking-tight leading-tight">
            소중한 연결을 환영합니다
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            언제든 협업 제안과 격려를 환영합니다. 아래 이메일 주소를 복사해 편하게 연락을 주시거나 방명록에 따뜻한 응원 글을 남겨주세요.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information */}
          <div className="pt-2 bg-slate-50/55 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between space-y-8 lg:col-span-5">
            <div className="space-y-6">
              <span className="text-2xl">☕</span>
              <h3 className="text-xl font-bold text-slate-800 leading-tight">
                "언제나 경청하고, <br />
                주저함 없이 움직입니다."
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                다양한 취미와 기획 과정을 완수하면서, 상대방의 소중한 아이디어를 가치로 전환시키는 능력을 구축했습니다. 부담 없이 가벼운 커피챗부터 협력을 상상해 보아요.
              </p>

              {/* Email Copier */}
              <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-pink-50/50 flex items-center justify-center text-pink-500 text-xs font-bold">
                    📧
                  </div>
                  <div className="text-left font-sans">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">EMAIL ADDRESS</p>
                    <p className="text-xs font-bold text-slate-700">{PROFILE_INFO.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg text-slate-500 transition-colors cursor-pointer"
                  title="이메일 주소 복사하기"
                >
                  {copied ? <span className="text-xs text-emerald-600 font-bold px-1.5 py-0.5">Copied!</span> : <Clipboard className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels Link Row */}
              <div className="space-y-2.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                  external paths
                </p>
                <div className="flex gap-2">
                  <a
                    href="mailto:gawoni0817@gmail.com"
                    className="flex-1 py-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:text-slate-900 text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Send Mail</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="aspect-square w-9 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-800 transition-all flex items-center justify-center"
                    title="Instagram 가기"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="aspect-square w-9 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-800 transition-all flex items-center justify-center"
                    title="GitHub 가기"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 text-[10px] text-slate-400 leading-relaxed text-left font-sans">
              <p>© 2026 이가원 이력 포트폴리오. All rights reserved.</p>
              <p className="text-pink-400 font-semibold mt-0.5 font-mono">Lovely & Clean Minimal v1.1</p>
            </div>
          </div>

          {/* Right Side: Simple Guestbook Board */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-slate-50/30 border border-slate-100 p-6 sm:p-8 rounded-2xl flex-1 flex flex-col gap-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-mono">
                  <span>💬</span> GUESTBOOK FEED
                </h4>
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Form submit */}
              <form onSubmit={handleSubmitNote} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    placeholder="작성자 성함"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    maxLength={10}
                    className="px-3.5 py-2 text-xs rounded-lg bg-white border border-slate-200 focus:border-slate-400 focus:outline-hidden tracking-tight text-slate-700 min-w-[120px]"
                  />
                  
                  <div className="flex-1 flex items-center gap-1.5 p-1 px-3 bg-white border border-slate-200 rounded-lg overflow-x-auto">
                    <span className="text-[10px] font-bold text-slate-400 shrink-0 font-mono">Emoji:</span>
                    <div className="flex gap-1">
                      {emojis.map((em) => (
                        <button
                          key={em}
                          type="button"
                          onClick={() => setSelectedEmoji(em)}
                          className="w-6 h-6 rounded-md text-xs inline-flex items-center justify-center transition-all cursor-pointer"
                        >
                          {em}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative font-sans">
                  <textarea
                    required
                    maxLength={150}
                    placeholder="이가원님에게 따뜻한 메시지나 피드백 한 줄을 자유롭게 남겨보세요!"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    rows={2.5}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-white border border-slate-200 focus:border-slate-400 focus:outline-hidden resize-none leading-relaxed text-slate-700"
                  />
                  <div className="absolute right-3.5 bottom-2.5 text-[9px] font-bold text-slate-300 font-sans">
                    {noteText.length} / 150
                  </div>
                </div>

                <div className="flex justify-between items-center font-sans">
                  <div className="h-4">
                    {formSubmitted && (
                      <span className="text-[10px] font-bold text-emerald-600">
                        방명록 피드에 소중히 추가되었습니다. 감사합니다!
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>작성하기</span>
                  </button>
                </div>
              </form>

              {/* Sticky Notes Simple Board */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[180px] overflow-y-auto pr-1">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="p-3.5 rounded-xl bg-white border border-slate-100 shadow-2xs relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="text-[11px] font-extrabold text-slate-700 flex items-center gap-1">
                          <span className="w-4 h-4 rounded-md bg-slate-50 flex items-center justify-center text-xs">
                            {note.emoji}
                          </span>
                          {note.sender}
                        </span>
                        <span className="text-[9px] font-medium text-slate-400 font-mono">
                          {note.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-normal">
                        {note.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
