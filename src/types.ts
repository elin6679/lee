export interface TimelineItem {
  id: string;
  category: string;
  title: string;
  period: string;
  subtitle: string;
  description: string;
  detailLines: string[];
  iconName: "Wind" | "PenTool" | "Target" | "Music" | "Trophy" | "Award";
  emoji: string;
  color: string;      // tailwind hex representation (e.g., "#FFB7B2" or class list)
  bgLight: string;    // tailwind bg color (e.g., "bg-rose-50")
  borderColor: string;// tailwind border color (e.g., "border-rose-200")
  badgeColor: string; // tailwind badge accent color
  badgeText: string;
}

export interface ProfileKeyword {
  keyword: string;
  emoji: string;
  title: string;
  description: string;
  bgLight: string;
  iconBg: string;
  textColor: string;
}

export interface QuickFact {
  label: string;
  value: string;
  emoji: string;
}
