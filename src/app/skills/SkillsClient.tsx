"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiTypescript,
  SiSanity,
  SiPython,
  SiReact,
  SiFramer,
  SiGit,
  SiRedux,
  SiFigma,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaToolbox } from "react-icons/fa";

import Loader from "../../components/Loader";
import {  DiNodejs } from "react-icons/di";
import { PiOpenAiLogo } from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "Next.js",
    icon: TbBrandNextjs,
    color: "#000000",
    description: "React framework for server-rendered apps.",
  },

  {
    name: "OpenAI Agents SDK",
    icon: PiOpenAiLogo,
    color: "#412991",
    description: "SDK for building AI-powered agents.",
  },
  {
    name: "Node.js",
    icon: DiNodejs,
    color: "#339933",
    description: "JavaScript runtime for server-side development.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    description: "NoSQL database for flexible data storage.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    description: "Web framework for Node.js.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    description: "Utility-first CSS framework for fast styling.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    description: "Strongly typed JavaScript for scalable apps.",
  },
  {
    name: "Sanity",
    icon: SiSanity,
    color: "#F03E2F",
    description: "Headless CMS with real-time collaboration.",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    description: "High-level language for automation and AI.",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    description: "UI library for building user interfaces.",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#e64882",
    description: "Animation library for React.",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    description: "Version control for source code.",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    description: "Global state management.",
  },
  {
    name: "Redux Toolkit",
    icon: FaToolbox,
    color: "#764ABC",
    description: "Simplified Redux logic and setup.",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    description: "UI/UX design and prototyping tool.",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#264de4",
    description: "Styling language for the web.",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34c26",
    description: "Structure of web content.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    description: "The language of the web.",
  },
];

export default function SkillsClient() {
  const [loading, setLoading] = useState(true);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="relative min-h-screen text-white px-6 py-16 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videos.pexels.com/video-files/28825871/12487098_640_360_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]" />

      <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
        My  Skills 
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto ">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const isFlipped = flippedCard === index;

          return (
            <div
              key={index}
              onClick={() => setFlippedCard(isFlipped ? null : index)}
              className="group [perspective:1000px] cursor-pointer"
            >
              <div
                className={`relative h-52 w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center text-center [backface-visibility:hidden] transition-all duration-500 group-hover:shadow-[0_0_20px_4px]`}
                  style={{
                    boxShadow: `0 0 0 rgba(0,0,0,0)`,
                    border: `2px solid transparent`,
                    transition: "box-shadow 0.5s, border 0.5s",
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    card.style.boxShadow = `0 0 15px ${skill.color}`;
                    card.style.border = `2px solid ${skill.color}`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                    card.style.border = `2px solid transparent`;
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 10 + index,
                      ease: "linear",
                    }}
                  >
                    <Icon className="text-5xl mb-3" style={{ color: skill.color }} />
                  </motion.div>
                  <p className="text-md font-semibold">{skill.name}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rounded-xl group-hover:shadow-[0_0_20px_4px] bg-white/10 backdrop-blur-md p-4 text-sm text-center flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {skill.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
