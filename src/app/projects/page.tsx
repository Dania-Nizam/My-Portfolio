// 📁 app/skills/page.tsx

import dynamic from "next/dynamic";


// ✅ Dynamically import client component (optional)
const ProjectsClient = dynamic(() => import("./ProjectsClient"), { ssr: false });

export const metadata = {
  title: " Dania's Projects",
  description: "Explore the Projects  Dania works with.",
};

export default function SkillsPage() {
  return <ProjectsClient />;
}
