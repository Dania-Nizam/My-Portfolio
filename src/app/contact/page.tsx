// 📁 app/skills/page.tsx

import dynamic from "next/dynamic";

// ✅ Dynamically import client component (optional)
const ContactClient = dynamic(() => import("./ContactClient"), { ssr: false });

export const metadata = {
  title: "Dania's Contact ",
  description: "Explore the tech stack and tools Dania works with.",
};

export default function SkillsPage() {
  return <ContactClient />;
}
