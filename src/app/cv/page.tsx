// 📁 app/skills/page.tsx

import dynamic from "next/dynamic";

// ✅ Dynamically import client component (optional)
const CvClient = dynamic(() => import("./CvClient"), { ssr: false });

export const metadata = {
  title: " Dania's Cv ",
  description: "Explore the tech stack and tools Dania works with.",
};

export default function SkillsPage() {
  return <CvClient />;
}
