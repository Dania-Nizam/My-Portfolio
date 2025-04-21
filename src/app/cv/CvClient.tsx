"use client";

import { FaFlask, FaRobot, FaChalkboardTeacher } from "react-icons/fa";
import { FaLanguage, FaHeart, FaCertificate } from "react-icons/fa6";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUserTie,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaRocket,
} from "react-icons/fa";

import { SiStreamlit } from "react-icons/si";

import { FaLaptopCode, FaBrain } from "react-icons/fa6";

import {
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
} from "react-icons/si";
import { FaToolbox } from "react-icons/fa"; // For Redux Toolkit (tool icon)

import { motion } from "framer-motion";
// import { BsFillCloudDownloadFill } from "react-icons/bs";
import { FaCode, FaGraduationCap, FaBriefcase, FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "../components/Loader"; // Adjust the import path if necessary
import Layout from "../components/Layout";

export default function CV() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  // const triggerSparkleBurst = (e: React.MouseEvent) => {
  //   const button = e.currentTarget as HTMLElement;
  //   const burst = document.createElement("div");
  //   burst.className = "sparkle-burst";

  //   const rect = button.getBoundingClientRect();
  //   burst.style.left = `${e.clientX - rect.left}px`;
  //   burst.style.top = `${e.clientY - rect.top}px`;

  //   button.appendChild(burst);

  //   setTimeout(() => {
  //     burst.remove();
  //   }, 1000);
  // };

  return (
    <Layout>
      <main className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen px-6 py-16">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/28825871/12487098_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Heading & Download */}
        <section className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1
              className="relative text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent 
               bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animated-gradient-text 
               transition-transform duration-500 ease-in-out hover:scale-105 drop-shadow-lg"
            >
              My Curriculum Vitae
              {/* Glowing Underline */}
              <span
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-1 w-20 rounded-full 
                     bg-purple-500 shadow-md shadow-purple-500/40 opacity-60 hover:opacity-100 
                     animate-pulse hover:scale-110 transition-all duration-500 ease-in-out"
              ></span>
            </h1>
          </motion.div>

          <motion.p
            className="text-gray-200 text-lg md:text-xl font-medium mb-6 relative group transition-all duration-300 hover:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="relative z-10 group-hover:text-pink-400 transition duration-300">
              Everything you need to know about me.
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition duration-500" />
          </motion.p>

          {/* <motion.a
            href="/Dania_CV.pdf"
            download
            onClick={triggerSparkleBurst}
            className="relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-white font-semibold 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] 
             transition-all duration-500 ease-in-out hover:bg-right hover:shadow-lg hover:scale-105
             shadow-blue-500/30 hover:shadow-purple-500/40 group sparkle-button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <BsFillCloudDownloadFill className="text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            Download CV
          </motion.a> */}
        </section>

        {/* CV Cards */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Personal Info */}
          <motion.div
            className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/50 shadow-xl transition-all duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 text-blue-400">
              <FaUser className="text-2xl group-hover:scale-125 transition-transform duration-300" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide ">
                Personal Info
              </h2>
            </div>

            <ul className="space-y-5 text-sm md:text-base text-gray-200 mt-4 relative">
              {[
                {
                  icon: <FaUser className="text-blue-300" />,
                  label: "Name:",
                  value: "Dania",
                },
                {
                  icon: <FaUserTie className="text-green-300" />,
                  label: "Father Name:",
                  value: "M. Nizam",
                },
                {
                  icon: <FaEnvelope className="text-yellow-300" />,
                  label: "Email:",
                  value: (
                    <a
                      href="mailto:almirashah35@gmail.com"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      almirashah35@gmail.com
                    </a>
                  ),
                },
                {
                  icon: <FaPhone className="text-pink-300" />,
                  label: "Phone:",
                  value: (
                    <a
                      href="tel:+923488293701"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      +92--------
                    </a>
                  ),
                },
                {
                  icon: <FaMapMarkerAlt className="text-red-300" />,
                  label: "Location:",
                  value: "Karachi, Pakistan",
                },
                {
                  icon: <FaLinkedin className="text-blue-500" />,
                  label: "LinkedIn:",
                  value: (
                    <a
                      href="https://www.linkedin.com/in/dania-nizam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      https://www.linkedin.com/in/dania-nizam/
                    </a>
                  ),
                },
                {
                  icon: <FaGithub className="text-white" />,
                  label: "GitHub:",
                  value: (
                    <a
                      href="https://github.com/Dania-Nizam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      https://github.com/Dania-Nizam
                    </a>
                  ),
                },
                {
                  icon: <FaRocket className="text-pink-400" />,
                  label: "Vercel:",
                  value: (
                    <a
                      href="https://vercel.com/dania-nizams-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      https://vercel.com/dania-nizams-projects
                    </a>
                  ),
                },
                {
                  icon: <FaGlobe className="text-purple-400" />,
                  label: "Portfolio:",
                  value: (
                    <a
                      href="https://dania.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      dania.dev
                    </a>
                  ),
                },
                {
                  icon: <SiStreamlit className="text-red-400" />,
                  label: "Streamlit App:",
                  value: (
                    <a
                      href="https://share.streamlit.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-300 transition-colors"
                    >
                      https://share.streamlit.io/
                    </a>
                  ),
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 group-hover:scale-[1.02] transition-transform hover:text-blue-400 duration-300"
                >
                  <div className="mt-1 text-xl">{item.icon}</div>
                  <span>
                    <strong className="text-white hover:text-blue-400">
                      {item.label}
                    </strong>{" "}
                    <span className="text-gray-300 hover:text-blue-400">
                      {item.value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-purple-400/20 hover:border-purple-400/50 shadow-xl transition-all duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 text-purple-400">
              <FaCode className="text-2xl group-hover:scale-125 transition-transform duration-300" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
                Skills
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-gray-200 text-sm md:text-base mt-4">
              {[
                { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
                {
                  icon: <SiJavascript className="text-yellow-400" />,
                  name: "JavaScript",
                },
                {
                  icon: <SiTypescript className="text-blue-400" />,
                  name: "TypeScript",
                },
                { icon: <SiReact className="text-cyan-400" />, name: "React" },
                {
                  icon: <SiNextdotjs className="text-white" />,
                  name: "Next.js",
                },
                {
                  icon: <SiTailwindcss className="text-sky-400" />,
                  name: "Tailwind CSS",
                },
                {
                  icon: <SiStyledcomponents className="text-pink-400" />,
                  name: "Styled Components",
                },
                { icon: <SiSanity className="text-red-400" />, name: "Sanity" },
                {
                  icon: <SiRedux className="text-purple-500" />,
                  name: "Redux",
                },
                {
                  icon: <FaToolbox className="text-gray-300" />,
                  name: "Redux Toolkit",
                },
                {
                  icon: <SiPython className="text-yellow-300" />,
                  name: "Python",
                },
                { icon: <SiGit className="text-orange-400" />, name: "Git" },
                { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 hover:text-purple-300 transition-all duration-300 group-hover:scale-[1.02]"
                >
                  <div className="text-xl transition-transform duration-300 group-hover:scale-125">
                    {skill.icon}
                  </div>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            className="group glass-card border border-pink-400/10 hover:border-pink-400/30 backdrop-blur-lg rounded-2xl p-4 md:p-6 bg-black/30 shadow-lg transition-all duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 text-pink-400 animate-pulse">
              <FaGraduationCap className="text-2xl group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300" />
              <h2 className="text-xl md:text-2xl font-bold tracking-wide hover:text-pink-300 transition-colors duration-300">
                Education
              </h2>
            </div>

            <div className="space-y-4 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-pink-400/40 to-transparent before:rounded-full">
              {[
                {
                  icon: <FaRobot className="text-pink-300 text-lg" />,
                  title: "Agentic AI Engineering",
                  subtitle: "GIAIC — Continuing",
                },
                {
                  icon: <FaFlask className="text-green-300 text-lg" />,
                  title: "B.Sc in Science",
                  subtitle: "University of Karachi — Graduated 2020",
                },
                {
                  icon: (
                    <FaChalkboardTeacher className="text-yellow-300 text-lg" />
                  ),
                  title: "Intermediate in Science",
                  subtitle:
                    "Sir Syed Government Girls College — Graduated 2018",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-10 group hover:scale-[1.01] transition-transform duration-300"
                >
                  <div className="absolute left-0 top-2 w-3 h-3 bg-pink-400 rounded-full shadow-md group-hover:animate-ping" />
                  <div className="bg-gray-800/40 hover:bg-gray-700/50 p-4 rounded-lg border border-pink-400/10 hover:border-pink-400/30 shadow-md transition duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      {item.icon}
                      <h3 className="text-sm font-semibold text-blue-300 hover:text-pink-400 transition-all">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-300">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grid Wrapper for bottom sections */}
          {/* Languages */}
          <motion.div
            className="group glass-card border border-yellow-400/10 hover:border-yellow-400/30 backdrop-blur-lg rounded-xl p-4 bg-black/30 shadow-md transition-all duration-500 mt-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3 text-yellow-400">
              <FaLanguage className="text-lg transition-transform group-hover:scale-125" />
              <h2 className="text-lg font-bold">Languages</h2>
            </div>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 group">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse group-hover:scale-125 transition-transform" />
                <span>
                  <span className="text-white font-medium hover:text-yellow-400">
                    English
                  </span>{" "}
                  <span className="text-gray-400 hover:text-yellow-400">
                    – Fluent
                  </span>
                </span>
              </li>

              <li className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all duration-300 group">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse group-hover:scale-125 transition-transform" />
                <span>
                  <span className="text-white font-medium hover:text-yellow-400">
                    Urdu
                  </span>{" "}
                  <span className="text-gray-400 hover:text-yellow-400">
                    – Native
                  </span>
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Certificates */}
          <motion.div
            className="group glass-card border border-blue-400/10 hover:border-blue-400/30 backdrop-blur-lg rounded-xl p-4 bg-black/30 shadow-md transition-all duration-500 mt-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3 text-blue-400">
              <FaCertificate className="text-lg transition-transform group-hover:scale-125" />
              <h2 className="text-lg font-bold">Certificates</h2>
            </div>
            <ul className="text-gray-200 text-sm space-y-2">
              <li className="hover:text-blue-400 transition-all">
                Python for Beginners – Coursera
              </li>
              <li className="hover:text-blue-400 transition-all">
                Frontend with React – FreeCodeCamp
              </li>
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            className="group glass-card border border-pink-400/10 hover:border-pink-400/30 backdrop-blur-lg rounded-xl p-4 bg-black/30 shadow-md transition-all duration-500 mt-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3 text-pink-400">
              <FaHeart className="text-lg transition-transform group-hover:scale-125" />
              <h2 className="text-lg font-bold">Interests</h2>
            </div>
            <ul className="text-gray-200 text-sm space-y-2">
              <li className="hover:text-pink-400 transition-all">
                AI & Machine Learning
              </li>
              <li className="hover:text-pink-400 transition-all">
                UI/UX Design
              </li>
              <li className="hover:text-pink-400 transition-all">
                Reading Tech Blogs
              </li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="group glass-card border border-green-400/10 hover:border-green-400/30 backdrop-blur-lg rounded-2xl p-6 bg-black/30 shadow-lg transition-all duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 text-green-400 animate-pulse">
              <FaBriefcase className="text-3xl group-hover:rotate-6 group-hover:scale-125 transition-transform duration-300" />
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide hover:text-green-300 transition-colors duration-300">
                Experience
              </h2>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-10 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b from-green-400/40 to-transparent before:rounded-full pl-6">
              {/* Section Title */}
              <div className="flex items-center gap-3 mb-4 text-pink-400">
                <FaCode className="text-2xl group-hover:scale-125 transition-transform" />
                <h3 className="text-xl md:text-2xl font-extrabold tracking-wide hover:text-green-400 transition-colors">
                  Projects & Learning Experience
                </h3>
              </div>

              {/* Experience Cards */}
              {[
                {
                  title: "Data Sweeper — AI Dashboard App",
                  desc: "Personal Project · Python, Streamlit, UV",
                  bullets: [
                    "Built a user-friendly dashboard to clean and visualize datasets.",
                    "Used Streamlit for frontend, Python & Pandas for logic.",
                    "Hosted live on Streamlit.",
                  ],
                  links: [
                    {
                      label: "Streamlit",
                      href: "https://data-sweeper.streamlit.app",
                    },
                  ],
                  icon: (
                    <FaRobot className="text-green-300 text-xl group-hover:scale-110 transition" />
                  ),
                },
                {
                  title: " Animated Portfolio",
                  desc: "Personal Project · Next.js, Tailwind CSS, Framer Motion",
                  bullets: [
                    "Showcased skills with smooth animations and responsive design.",
                    "Built with modern frontend stack & hosted on Vercel.",
                    "GitHub: View Code · Vercel: Live Site",
                  ],
                  links: [
                    {
                      label: "View Code",
                      href: "https://github.com/yourusername/portfolio",
                    },
                    {
                      label: "Live Site",
                      href: "https://portfolio.vercel.app",
                    },
                  ],
                  icon: (
                    <FaLaptopCode className="text-cyan-300 text-xl group-hover:scale-110 transition" />
                  ),
                },
                {
                  title: "AI & Web Development Learning Path",
                  desc: "Ongoing · Self-learning & GIAIC Program",
                  bullets: [
                    "Learning Generative AI, Agentic AI, LangChain, and OpenAI tools.",
                    "Completed multiple frontend & Python projects.",
                    "Practicing daily by building and contributing on GitHub.",
                  ],
                  icon: (
                    <FaBrain className="text-yellow-300 text-xl group-hover:scale-110 transition" />
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative group hover:scale-[1.02] transition-transform duration-300 pl-4"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 bg-green-400 rounded-full shadow-lg group-hover:animate-ping" />
                  <div className="bg-gray-800/50 hover:bg-gray-700/60 p-5 rounded-xl border border-green-400/10 hover:border-green-400/30 shadow-md transition duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      {item.icon}
                      <h4 className="text-lg font-semibold text-blue-400 group-hover:underline hover:text-green-400 transition-all">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm mb-2 text-gray-400 hover:text-green-400">
                      {item.desc}
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                      {item.bullets.map((point, i) => (
                        <li key={i} className="hover:text-green-400">
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.links && (
                      <div className="mt-2 flex flex-wrap gap-3 text-sm">
                        {item.links.map((link, lidx) => (
                          <a
                            key={lidx}
                            href={link.href}
                            className="text-blue-400 underline hover:text-green-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </Layout>
  );
}
