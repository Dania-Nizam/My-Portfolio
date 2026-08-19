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
  SiGithub,
} from "react-icons/si";

import { FaToolbox } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { PiOpenAiLogo } from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";

import Loader from "../../components/Loader";

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
    description: "React framework for building fast and scalable web applications.",
  },
  {
    name: "OpenAI Agents SDK",
    icon: PiOpenAiLogo,
    color: "#412991",
    description: "SDK for building intelligent AI-powered agent applications.",
  },
  {
    name: "Node.js",
    icon: DiNodejs,
    color: "#339933",
    description: "JavaScript runtime used for scalable server-side applications.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    description: "NoSQL database designed for flexible and scalable data storage.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    description: "Fast and minimal Node.js framework for backend development.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    description: "Utility-first CSS framework for creating modern responsive interfaces.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    description: "Strongly typed JavaScript for building maintainable applications.",
  },
  {
    name: "Sanity",
    icon: SiSanity,
    color: "#F03E2F",
    description: "Headless CMS for managing and delivering structured content.",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    description: "Versatile programming language used for automation, data and AI.",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    description: "JavaScript library for building interactive user interfaces.",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#e64882",
    description: "Animation library for creating smooth React UI interactions.",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    description: "Distributed version control system for managing source code.",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    description: "State management library for predictable application state.",
  },
  {
    name: "Redux Toolkit",
    icon: FaToolbox,
    color: "#764ABC",
    description: "Official recommended toolkit for efficient Redux development.",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    description: "Collaborative design and prototyping tool for UI/UX development.",
  },
   {
    name: "GitHub",
    icon: SiGithub,
    color: "#000000",
    description: "Version Control.",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#264de4",
    description: "Styling language used to design and layout web interfaces.",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34c26",
    description: "Markup language used to structure web content.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    description: "Core programming language for interactive web applications.",
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
    <main className="relative min-h-screen overflow-hidden bg-[#070b14] px-5 py-20 text-white sm:px-8">

      {/* ================= BACKGROUND VIDEO ================= */}

      <video
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://videos.pexels.com/video-files/28825871/12487098_640_360_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* ================= BACKGROUND OVERLAY ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#070b14]/90" />

      {/* Subtle blue glow */}

      <div className="pointer-events-none absolute left-[10%] top-[15%] -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[10%] -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[130px]" />

      {/* ================= HEADER ================= */}

      <section className="mx-auto max-w-6xl text-center">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Small Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Technical Expertise
          </div>

          {/* Main Heading */}

          <h1 className="text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl md:text-5xl">
            My Skills
          </h1>

          {/* Underline */}

          <div className="mx-auto mt-4 h-px w-16 bg-blue-400/70" />

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build modern, scalable and
            user-friendly web applications.
          </p>

        </motion.div>

      </section>

      {/* ================= SKILLS GRID ================= */}

      <section className="mx-auto mt-14 max-w-6xl">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {skills.map((skill, index) => {

            const Icon = skill.icon;
            const isFlipped = flippedCard === index;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="group [perspective:1000px]"
              >

                {/* ================= CARD ================= */}

                <div
                  onClick={() =>
                    setFlippedCard(isFlipped ? null : index)
                  }
                  className="relative h-56 w-full cursor-pointer [transform-style:preserve-3d]"
                >

                  <motion.div
                    animate={{
                      rotateY: isFlipped ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="relative h-full w-full [transform-style:preserve-3d]"
                  >

                    {/* ================= FRONT ================= */}

                    <div
                      className="
                        absolute inset-0
                        flex flex-col items-center justify-center
                        rounded-2xl
                        border border-white/10
                        bg-white/[0.045]
                        p-6
                        text-center
                        backdrop-blur-xl
                        [backface-visibility:hidden]
                        transition-all duration-300
                        group-hover:border-blue-400/40
                        group-hover:bg-blue-400/[0.04]
                        group-hover:shadow-[0_10px_40px_rgba(59,130,246,0.12)]
                      "
                    >

                      {/* Icon Container */}

                      <div
                        className="
                          flex h-16 w-16
                          items-center justify-center
                          rounded-2xl
                          border border-white/10
                          bg-black/20
                          transition-all duration-300
                          group-hover:border-blue-400/30
                          group-hover:bg-blue-400/5
                          group-hover:scale-105
                        "
                      >

                        <Icon
                          className="text-4xl"
                          style={{
                            color: skill.color,
                          }}
                        />

                      </div>

                      {/* Skill Name */}

                      <h2 className="mt-5 text-base font-semibold text-gray-100">
                        {skill.name}
                      </h2>

                      {/* Small hint */}

                      <p className="mt-2 text-[11px] text-gray-500">
                        Click to view details
                      </p>

                    </div>

                    {/* ================= BACK ================= */}

                    <div
                      className="
                        absolute inset-0
                        flex flex-col items-center justify-center
                        rounded-2xl
                        border border-blue-400/25
                        bg-[#0b1220]/95
                        p-6
                        text-center
                        backdrop-blur-xl
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)]
                      "
                    >

                      {/* Back Icon */}

                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/5">

                        <Icon
                          className="text-2xl"
                          style={{
                            color: skill.color,
                          }}
                        />

                      </div>

                      {/* Name */}

                      <h3 className="text-base font-semibold text-blue-400">
                        {skill.name}
                      </h3>

                      {/* Description */}

                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        {skill.description}
                      </p>

                      {/* Back Hint */}

                      <span className="mt-4 text-[10px] uppercase tracking-wider text-gray-600">
                        Click to return
                      </span>

                    </div>

                  </motion.div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* ================= BOTTOM CTA ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mx-auto mt-16 max-w-3xl rounded-2xl border border-blue-400/15 bg-blue-400/[0.035] p-6 text-center backdrop-blur-xl"
      >

        <p className="text-sm text-gray-400">
          Always learning, experimenting and improving my development skills.
        </p>

        <p className="mt-2 text-sm font-medium text-blue-400">
          Building modern web & AI-powered experiences.
        </p>

      </motion.div>

    </main>
  );
}