// 📁 app/skills/page.tsx

import dynamic from "next/dynamic";

// ✅ Dynamically import client component (optional)
const SkillsClient = dynamic(() => import("./SkillsClient"), { ssr: false });

export const metadata = {
  title: " Dania's Skills ",
  description: "Explore the tech stack and tools Dania works with.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
