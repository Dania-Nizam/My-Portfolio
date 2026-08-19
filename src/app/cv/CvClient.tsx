"use client";

import {
  FaFlask,
  FaRobot,
  FaChalkboardTeacher,
  FaNodeJs,
  FaLanguage,
  FaHeart,
  FaCertificate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserTie,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaRocket,
  FaLaptopCode,
  FaBrain,
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiStreamlit,
  SiGithubactions,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiRedux,
  SiSanity,
  SiPython,
  SiGit,
  SiFigma,
  SiGithub,
} from "react-icons/si";

import { FaToolbox } from "react-icons/fa";
import { PiOpenAiLogoBold } from "react-icons/pi";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Loader from "../../components/Loader";
import Layout from "../../components/Layout";

export default function CV() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const personalInfo = [
    {
      icon: <FaUser />,
      label: "Name",
      value: "Dania",
    },
    {
      icon: <FaUserTie />,
      label: "Father Name",
      value: "M. Nizam",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "almirashah35@gmail.com",
      href: "mailto:almirashah35@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+92--------",
      href: "tel:+92--------",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Karachi, Pakistan",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/dania-nizam",
      href: "https://www.linkedin.com/in/dania-nizam/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Dania-Nizam",
      href: "https://github.com/Dania-Nizam",
    },
    {
      icon: <FaRocket />,
      label: "Vercel",
      value: "dania-nizams-projects",
      href: "https://vercel.com/dania-nizams-projects",
    },
    {
      icon: <FaGlobe />,
      label: "Portfolio",
      value: "dania.dev",
      href: "https://dania.dev",
    }
    
  ];

  const skills = [
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <FaToolbox />, name: "Redux Toolkit" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiStyledcomponents />, name: "Styled Components" },
    { icon: <PiOpenAiLogoBold />, name: "OpenAI Agents SDK" },
  ];

  const education = [
    {
      icon: <FaRobot />,
      title: "Agentic AI Engineering",
      status: "Continuing",
    },
    {
      icon: <FaFlask />,
      title: "B.Sc ",
      subtitle: "University of Karachi",
      status: "Graduated ",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Intermediate in Science",
      subtitle: "Sir Syed Government Girls College",
      status: "Graduated ",
    },
  ];

  const experiences = [
    {
      icon: <FaRobot />,
      title: "Veloura AI Mern Ecommerce website",
      subtitle: "Personal Project · MERN STACK · AI",
      description:
        "A feature-rich, full-stack AI-driven e-commerce platform designed with an interactive conversational assistant and a comprehensive management dashboard. It delivers an automated shopping experience by allowing store management and product control through natural language chat commands alongside secure payment workflows.",
      points: [
        "Developed a dedicated Admin Dashboard to seamlessly manage inventory, oversee incoming orders, and track platform operations.",

"Integrated an intelligent AI chat agent capable of performing automated actions like adding or removing products directly through real-time conversational commands.",

"Built a scalable MERN stack backend utilizing Node.js, Express.js, and MongoDB with secure RESTful APIs for user management, cart tracking, and wishlists.",

"Implemented secure checkout functionality and financial transaction processing using the Stripe payment gateway.",

"Configured full-stack cloud deployments and database hosting utilizing Vercel and Railway.",
      ],
      link: "https://veloura-ai-mern-ecommerce-9uuk-201u40j49-dania-nizams-projects.vercel.app",
      linkText: "Live Demo",
    },
    {
      icon: <FaLaptopCode />,
      title: "Animated Developer Portfolio",
      subtitle: "Next.js · Tailwind CSS · Framer Motion",
      description:
        "A modern developer portfolio focused on responsive UI, animations and professional presentation.",
      points: [
        "Built with Next.js and modern React architecture.",
        "Implemented responsive layouts and animations.",
        "Deployed using Vercel.",
      ],
      link: "https://my-portfolio-qgtmt626z-dania-nizams-projects.vercel.app",
      linkText: "Live Portfolio",
    },
    {
      icon: <FaBrain />,
      title: "Glamours Ecommerce Website",
      subtitle: "Ecommerce website Next.js · Tailwind CSS · Framer Motion ",
      description:
        "",
      points: [
        "Learning Agentic AI and AI application development.",
        "Working with OpenAI tools and modern AI workflows.",
        "Building practical frontend and full-stack projects.",
      ],
      link: "https://ecommerce-website-kwagiypjx-dania-nizams-projects.vercel.app",
      linkText: "Live Portfolio",
    },
    {
  icon: <FaBrain />,
  title: "Full-Stack Web & Agentic AI Development",
  subtitle: "Building Intelligent & Scalable Web Solutions",
  description: "Specialized in engineering robust full-stack applications with the MERN stack while integrating advanced Agentic AI workflows, intelligent automation, and conversational commerce features.",
  points: [
    "Developing end-to-end full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
    "Designing and implementing intelligent AI agents, RAG architectures, and automated conversational assistants (such as chat-driven product managers).",
    "Integrating modern AI tools and workflows including OpenAI APIs, LLM tool-calling, and custom webhooks.",
    "Building secure, production-ready platforms complete with admin dashboards, Stripe payment gateways, and cloud deployment pipelines."
  ],
}
  ];

  return (
    <Layout>
      <main className="relative min-h-screen overflow-hidden bg-[#070b14] text-white">

        {/* ================= BACKGROUND ================= */}

        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />
          <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-pink-600/5 blur-[120px]" />
        </div>

        {/* ================= HERO ================= */}

        <section className="mx-auto max-w-6xl px-5 pb-16 pt-24 md:px-8">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </div>

           <h1 className="font-mono text-4xl font-bold tracking-[0.04em] text-gray-100 drop-shadow-[0_0_15px_rgba(96,165,250,0.15)] sm:text-5xl md:text-6xl">
  My Curriculum Vitae
</h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Full Stack  MERN Stack Developer focused on modern web applications,
              Next.js, MERN Stack and AI-powered digital experiences.
            </p>

            <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          </motion.div>
        </section>

        {/* ================= MAIN CONTENT ================= */}

        <section className="mx-auto max-w-6xl space-y-6 px-5 pb-24 md:px-8">

          {/* ================= PERSONAL + SKILLS ================= */}

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Personal Information */}

            <motion.section
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >

              <SectionHeading
                icon={<FaUser />}
                title="Personal Information"
              />

              <div className="mt-6 space-y-1">

                {personalInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-4 rounded-xl px-3 py-3 transition hover:bg-white/[0.04]"
                  >

                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-400 transition group-hover:border-blue-400/30 group-hover:bg-blue-400/10">
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-0.5 block truncate text-sm text-gray-200 transition hover:text-blue-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-gray-200">
                          {item.value}
                        </p>
                      )}
                    </div>

                  </motion.div>
                ))}

              </div>
            </motion.section>

            {/* Skills */}

            <motion.section
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >

              <SectionHeading
                icon={<FaCode />}
                title="Technical Skills"
              />

              <p className="mt-2 text-sm text-gray-500">
                Technologies and tools I use to build modern digital products.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.025,
                      duration: 0.25,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group flex items-center gap-3 rounded-xl border border-white/8 bg-black/20 px-3 py-3 transition hover:border-blue-400/30 hover:bg-blue-400/5"
                  >

                    <span className="text-lg text-gray-300 transition group-hover:text-blue-400">
                      {skill.icon}
                    </span>

                    <span className="text-xs font-medium text-gray-300 sm:text-sm">
                      {skill.name}
                    </span>

                  </motion.div>
                ))}

              </div>
            </motion.section>

          </div>

          {/* ================= EDUCATION + LANGUAGES ================= */}

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Education */}

            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >

              <SectionHeading
                icon={<FaGraduationCap />}
                title="Education"
              />

              <div className="relative mt-7 space-y-5">

                <div className="absolute bottom-5 left-[17px] top-5 w-px bg-gradient-to-b from-blue-400/60 via-purple-400/30 to-transparent" />

                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex gap-4"
                  >

                    <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-[#0b1220] text-blue-400">
                      {item.icon}
                    </div>

                    <div className="flex-1 rounded-xl border border-white/8 bg-black/20 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">

                        <h3 className="text-sm font-semibold text-gray-100">
                          {item.title}
                        </h3>

                        <span className="rounded-full bg-blue-400/10 px-2.5 py-1 text-[10px] font-medium text-blue-300">
                          {item.status}
                        </span>

                      </div>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.subtitle}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </motion.section>

            {/* Languages / Certificates / Interests */}

            <div className="grid gap-6 sm:grid-cols-2">

              <SmallCard
                icon={<FaLanguage />}
                title="Languages"
                color="text-cyan-400"
              >
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">English</span>
                    <span className="text-xs text-gray-500">Fluent</span>
                  </div>

                  <div className="h-1 rounded-full bg-white/5">
                    <div className="h-1 w-[90%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Urdu</span>
                    <span className="text-xs text-gray-500">Native</span>
                  </div>

                  <div className="h-1 rounded-full bg-white/5">
                    <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                  </div>
                </div>
              </SmallCard>

              <SmallCard
                icon={<FaCertificate />}
                title="Certificates"
                color="text-blue-400"
              >
                <ul className="space-y-3 text-sm text-gray-400">


                  <li className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    AI Professional Certificate From Google
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    MERN Stack From DigiSkill
                  </li>
                  
                  <li className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    Cloud Computing From DigiSkill
                  </li>
                   
                   <li className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    IT Specialist From Google
                  </li>

                  <li className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    Freelancing From Digiskill
                  </li>
                  
                  <li className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    Frontend with React
                  </li>


                
                </ul>
              </SmallCard>

              <div className="sm:col-span-2">
                <SmallCard
                  icon={<FaHeart />}
                  title="Interests"
                  color="text-pink-400"
                >
                  <div className="flex flex-wrap gap-2">
                    {[
                      
                      "Agentic AI",
                      "UI/UX Design",
                      "Web Development",
                      "MERN Stack Development",
                      "Tech Blogs",
                    ].map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-pink-400/30 hover:text-pink-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </SmallCard>
              </div>

            </div>

          </div>

          {/* ================= EXPERIENCE ================= */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-8"
          >

            <SectionHeading
              icon={<FaBriefcase />}
              title="Experience & Projects"
            />

            <p className="mt-2 text-sm text-gray-500">
              Selected projects and practical development experience.
            </p>

            <div className="relative mt-8 space-y-6">

              <div className="absolute bottom-6 left-[17px] top-6 w-px bg-gradient-to-b from-purple-400/60 via-blue-400/30 to-transparent" />

              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="relative flex gap-5"
                >

                  <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-[#0b1220] text-purple-400">
                    {item.icon}
                  </div>

                  <div className="group flex-1 rounded-xl border border-white/8 bg-black/20 p-5 transition hover:border-purple-400/25 hover:bg-white/[0.035]">

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <h3 className="text-base font-semibold text-gray-100 transition group-hover:text-purple-300">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {item.subtitle}
                        </p>
                      </div>

                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex gap-2 text-sm text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-blue-400 transition hover:text-blue-300"
                      >
                        {item.linkText}
                        <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    )}

                  </div>

                </motion.div>
              ))}

            </div>
          </motion.section>

          {/* ================= FOOTER CTA ================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 p-8 text-center"
          >

            <FaRocket className="mx-auto mb-4 text-2xl text-blue-400" />

            <h2 className="text-xl font-semibold">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                amazing
              </span>
              .
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
              Interested in collaboration, development opportunities or
              AI-powered projects? Let&apos;s connect.
            </p>

          </motion.div>

        </section>
      </main>
    </Layout>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
        {icon}
      </div>

      <h2 className="text-xl font-semibold tracking-tight text-gray-100">
        {title}
      </h2>

    </div>
  );
}

/* =========================================================
   SMALL CARD
========================================================= */

function SmallCard({
  icon,
  title,
  color,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition hover:border-white/15"
    >

      <div className="mb-5 flex items-center gap-3">

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] ${color}`}
        >
          {icon}
        </div>

        <h2 className="text-base font-semibold text-gray-100">
          {title}
        </h2>

      </div>

      {children}

    </motion.div>
  );
}