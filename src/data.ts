import { TimelineItem, ProfileKeyword, QuickFact } from "./types";

export const PROFILE_INFO = {
  name: "이가원",
  englishName: "elin",
  height: "173cm",
  tagline: "173cm의 시원시원한 피지컬만큼이나 거침없이 도전하는 올라운더",
  description: "넓은 시야로 세상을 바라보고, 거침없는 기획력과 거침없는 도전 정신으로 다양한 분야에서 완벽한 결과를 만들어내는 메이커입니다.",
  avatarPath: "", // Will hold the path to elin_avatar generated or default illustration fallback
  email: "gawoni0817@gmail.com",
};

export const QUICK_FACTS: QuickFact[] = [
  { label: "키 (Physical Height)", value: "173 cm", emoji: "🦒" },
  { label: "닉네임 (Signature Name)", value: "elin (엘린)", emoji: "🌸" },
  { label: "MBTI 에너지", value: "거침없는 올라운더", emoji: "✨" },
  { label: "핵심 원동력", value: "도전과 몰입", emoji: "🔥" },
];

export const PROFILE_KEYWORDS: ProfileKeyword[] = [
  {
    keyword: "173cm의 피지컬, 넓은 시야",
    emoji: "👁️‍🗨️",
    title: "세상을 더 크게, 더 넓게 조망하는 눈",
    description: "남다른 피지컬(173cm)처럼 시원시원한 마인드와 막힘없는 시야를 가졌습니다. 어떤 난관을 마주하더라도 높은 곳에서 한걸음 물러서서 거시적인 안목으로 프로젝트를 기획하고 설계합니다.",
    bgLight: "bg-pink-50/50",
    iconBg: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    keyword: "거침없는 올라운더",
    emoji: "🎨",
    title: "예술과 학업, 스포츠를 넘나드는 감각",
    description: "한 영역에 갇히지 않습니다. 피아노 연주와 글쓰기라는 깊고 섬세한 예술적 스펙트럼부터 피겨 스케이팅과 배드민턴이라는 강인한 구슬땀의 스포츠 영역까지 두루 섭렵하며 전방위로 성장해왔습니다.",
    bgLight: "bg-indigo-50/50",
    iconBg: "bg-indigo-100",
    textColor: "text-indigo-600",
  },
  {
    keyword: "탁월한 실무 PBL 리더",
    emoji: "🏆",
    title: "실전 문제 해결과 협업의 주역",
    description: "대학 PBL(Project-Based Learning) 프로젝트 수업에서 팀원들의 아이디어를 한데 엮는 오거나이저 역할을 탁월히 해냈습니다. 그 조화 속에서 종합 최우수상(Grand Prize)이라는 쾌거를 일궈냈습니다.",
    bgLight: "bg-sky-50/50",
    iconBg: "bg-sky-100",
    textColor: "text-sky-600",
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "skating",
    category: "Sports",
    title: "⛸️ 피겨 스케이팅 선수 준비",
    period: "Early Childhood",
    subtitle: "끝없는 넘어짐 속에서 일어나는 마음 훈련",
    description: "어릴 적 스케이트 링크 위의 눈부심에 매료되어 열정적으로 피겨 스케이트 선수를 준비했습니다.",
    detailLines: [
      "차가운 얼음판 위에서 매일 수십 번씩 넘어지고 부딪치며 근성과 도전 정신의 기초를 다졌습니다.",
      "힘겨운 훈련 과정을 소화하며 쉽게 흔들리지 않는 단단한 마인드셋을 체득했습니다.",
      "이 도전 정신은 이후 새로운 미지의 영역에 마주할 때마다 망설임 없이 행동하는 이가원만의 첫 자산이 되었습니다."
    ],
    iconName: "Wind",
    emoji: "⛸️",
    color: "#FBC4AB", // pastel orange-rose
    bgLight: "bg-[#FDF0EB]",
    borderColor: "border-[#FBC4AB]/40",
    badgeColor: "bg-[#FBC4AB] text-[#5c3e35]",
    badgeText: "도전의 시작"
  },
  {
    id: "writing",
    category: "Creative",
    title: "✍️ 중학교 1학년, 소설 집필",
    period: "Middle School First",
    subtitle: "남다른 상상력으로 활자를 채워내다",
    description: "상상하는 것과 글 쓰는 것을 좋아해 중학교 1학년이라는 어린 나이에 독창적인 장편 소설을 완성했습니다.",
    detailLines: [
      "단순한 공상을 넘어 실제 완성도 높은 한 편의 책 분량의 텍스트로 풀어내는 고도의 집중력과 실행력을 보여주었습니다.",
      "등장 인물, 사건의 흐름, 장치 설계와 같은 소설적 구조를 하나하나 디자인하며 탄탄한 기획력과 창의력을 발휘했습니다.",
      "무에서 유를 창조하는 창조의 짜릿함을 몸소 깨달았으며, 메이커로서의 창의적 정체성을 확고히 한 사건입니다."
    ],
    iconName: "PenTool",
    emoji: "📝",
    color: "#E2CFC4", // pastel beige
    bgLight: "bg-[#F7F2EF]",
    borderColor: "border-[#E2CFC4]/40",
    badgeColor: "bg-[#E2CFC4] text-[#63534b]",
    badgeText: "창의적 기획력"
  },
  {
    id: "badminton",
    category: "Sports",
    title: "🏸 배드민턴을 향한 열정과 대회 출전",
    period: "Middle & High School",
    subtitle: "체력과 집념, 그리고 승부의 정직함",
    description: "중학생 시절부터 배드민턴에 푹 빠져 남다른 열정으로 셔틀콕에 혼을 담아왔습니다.",
    detailLines: [
      "기본적인 스트로크부터 하이클리어, 스매시까지 정식 레슨 수업을 꾸준히 이수하며 기량을 높였습니다.",
      "단순 놀이를 넘어 동아리 리더 및 묵묵히 땀 흘리는 훈련 과정을 거쳐, 정식 배드민턴 대회 출전이라는 명확한 매듭을 지어냈습니다.",
      "네트 너머의 상대방을 보며 끈기와 전략, 순간적인 판단력, 팀워크와 투지를 길렀습니다."
    ],
    iconName: "Target",
    emoji: "🏸",
    color: "#C9E4DE", // soft pastel mint
    bgLight: "bg-[#F2FAF8]",
    borderColor: "border-[#C9E4DE]/40",
    badgeColor: "bg-[#C9E4DE] text-[#3d5a53]",
    badgeText: "실행력 & 끈기"
  },
  {
    id: "piano",
    category: "Art",
    title: "🎹 피아노 연주와 음악회 무대 완성",
    period: "Long Experience",
    subtitle: "섬세한 감각과 무대를 휘어잡는 담대함",
    description: "오랜 시간 동안 감성적인 건반 위의 이야기를 펼쳐내며 정교한 예술적 감각을 발련했습니다.",
    detailLines: [
      "수개월간 명곡의 템포와 뉘앙스를 미세하게 조정하며, 하나의 완벽한 작품을 완성하기 위한 끈기를 증명했습니다.",
      "대중과 관객들 앞에 서서 긴장감을 이겨내는 마인드 콘트롤을 통해 연주회 무대를 훌륭히 소화했습니다.",
      "소리의 하모니를 듣고 조화롭게 맞추는 과정을 통해 협업의 ‘들음’과 ‘균형감’을 몸소 이해하게 되었습니다."
    ],
    iconName: "Music",
    emoji: "🎹",
    color: "#FFD6E0", // lovely light pink
    bgLight: "bg-[#FFF2F5]",
    borderColor: "border-[#FFD6E0]/40",
    badgeColor: "bg-[#FFD6E0] text-[#7a4855]",
    badgeText: "섬세한 예술감각"
  },
  {
    id: "pbl",
    category: "Academic",
    title: "🏆 대학 진학 후, 실무 중심 PBL 최우수상",
    period: "University - Current",
    subtitle: "실전 문제 해결과 리더십의 최종 입증",
    description: "실무와 결합된 대학의 수준 높은 PBL 프로젝트 수업에서 융합 리더로 활약하여 영예의 종합 최우수상(Grand Prize)을 수상했습니다.",
    detailLines: [
      "복잡하고 모호한 미해결 과제 속에서, 문제 핵심을 짚어내고 팀원들의 화합을 이끄는 커뮤니케이터 역할을 자처했습니다.",
      "학문 영역에 그치지 않고 시장 분석과 유저 리서치를 아우르는 실용성 높은 인사이트를 구체적으로 제안했습니다.",
      "끝없는 도전과 올라운더로서의 잠재력을 대학 학업 성취로 장식하며 기획, 설득, 연출의 전 과정을 입증해 보였습니다."
    ],
    iconName: "Trophy",
    emoji: "🏆",
    color: "#C1DBE3", // clean soft sky blue
    bgLight: "bg-[#F0F7F9]",
    borderColor: "border-[#C1DBE3]/40",
    badgeColor: "bg-[#C1DBE3] text-[#34515a]",
    badgeText: "최우수상 (Grand Prize)"
  }
];
