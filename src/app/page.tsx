"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Typewriter from "typewriter-effect";
import Chatbot from "../components/Chatbot";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen bg-[#05070b] text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">

        {/* Background Video */}
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source
            src="https://videos.pexels.com/video-files/28825871/12487098_640_360_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Professional Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-[#05070b]/85" />

        {/* Subtle Blue Ambient Glow */}
        <div className="pointer-events-none absolute left-[10%] top-[20%] z-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[10%] right-[10%] z-0 h-72 w-72 rounded-full bg-blue-400/10 blur-[130px]" />

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-center gap-12 md:flex-row md:gap-20"
        >

          {/* =================================================
              TEXT CONTENT
          ================================================= */}

          <motion.div
            variants={containerVariants}
            className="max-w-2xl text-center md:text-left"
          >

            {/* Small Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-xs font-medium text-blue-300"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              Available for opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-blue-400 sm:text-5xl md:text-6xl "
            >
              Hi, I&apos;m{" "}
              <span className="text-blue-400">
                Dania
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              className="mt-5 min-h-[45px] text-xl font-semibold text-blue-400 sm:text-2xl md:text-3xl"
            >
              <Typewriter
                options={{
                  strings: [
                    "AI-Powered Full Stack Developer",
                    "Next.js Developer",
                    "MERN Stack Developer",
                    "Agentic AI Developer",
                    "Frontend Developer",
                    "AI Integration Specialist",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg"
            >
              I build modern, responsive web applications and
              intelligent AI-powered experiences with a focus on
              clean design, performance, and usability.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start"
            >
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "AI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm transition hover:border-blue-400/40 hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
            >

              {/* CV Button */}
              <motion.a
                href="/cv"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-400 hover:shadow-blue-400/30"
              >
                View My CV
              </motion.a>

              {/* Projects Button */}
              <motion.a
                href="/projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-400/5 hover:text-blue-300"
              >
                Explore Projects
              </motion.a>

            </motion.div>

          </motion.div>

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative flex-shrink-0"
          >

            {/* Subtle Glow */}
            <div className="absolute inset-0 scale-90 rounded-full bg-blue-500/20 blur-[70px]" />

            {/* Image Ring */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <div className="rounded-full border border-blue-400/40 bg-white/[0.03] p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">

                <div className="overflow-hidden rounded-full border-4 border-[#080b12]">
                  <Image
                    src="/dania.png"
                    alt="Dania"
                    width={220}
                    height={220}
                    priority
                    className="h-40 w-40 object-cover sm:h-48 sm:w-48 md:h-56 md:w-56"
                  />
                </div>

              </div>

              {/* Small Status */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#080b12]/90 px-3 py-1.5 text-xs text-gray-300 shadow-xl backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Available
              </div>

            </motion.div>

          </motion.div>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-gray-500 md:flex"
        >
          <span>Scroll to explore</span>

          <div className="h-8 w-px bg-gradient-to-b from-blue-400 to-transparent" />
        </motion.div>

        {/* Chatbot */}
        <div className="absolute bottom-6 left-5 z-20">
          <Chatbot />
        </div>

      </section>


      {/* =====================================================
          EXPLORE MY WORK
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/5 px-6 py-24">

        {/* Background */}
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-20"
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

        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-[#05070b]/95" />

        {/* Blue Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-64 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Section Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="mb-12 text-center"
          >

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Portfolio
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl">
              Explore My Work
            </h2>

            <div className="mx-auto mt-5 h-px w-16 bg-blue-400/60" />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Explore my projects, technical skills, and ways to
              connect with me.
            </p>

          </motion.div>


          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                href: "/projects",
                number: "01",
                title: "Projects",
                desc: "Explore web applications, eCommerce platforms, and AI-powered projects I have built.",
              },
              {
                href: "/skills",
                number: "02",
                title: "Skills",
                desc: "Discover the technologies, frameworks, and tools I use to create modern applications.",
              },
              {
                href: "/contact",
                number: "03",
                title: "Contact",
                desc: "Have a project or opportunity in mind? Let&apos;s connect and build something meaningful.",
              },
            ].map((item, idx) => (

              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group"
              >

                <Link href={item.href}>

                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.035] hover:shadow-xl hover:shadow-blue-500/5">

                    {/* Number */}
                    <span className="text-xs font-semibold tracking-widest text-blue-400/60">
                      {item.number}
                    </span>

                    {/* Title */}
                    <h3 className="mt-5 text-xl font-semibold text-gray-100 transition-colors duration-300 group-hover:text-blue-400">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-gray-500 transition-colors group-hover:text-gray-400">
                      {item.desc}
                    </p>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-400">
                      Explore
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/5 bg-[#05070b] px-6 py-8 text-center">

        <p className="text-sm text-gray-500">
          © 2026{" "}
          <span className="font-medium text-gray-300">
            Dania
          </span>{" "}
          — All Rights Reserved
        </p>

      </footer>

    </main>
  );
}