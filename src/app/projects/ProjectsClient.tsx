"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Veloura AI MERN Ecommerce Website",
    description:
      "A feature-rich, full-stack AI-driven e-commerce platform engineered to deliver an intelligent online shopping experience, featuring a dynamic conversational commerce assistant and a complete store management dashboard.",
    tech: ["React", "Node Js", "MongoDB","Express Js","Python","Open AI Agent SDK"],
    image: "/mern.png",
    link: "https://veloura-ai-mern-ecommerce-9uuk-201u40j49-dania-nizams-projects.vercel.app",
  },
  {
    title: "Ecommerce Website",
    description:
      "A sleek and responsive eCommerce application featuring dynamic cart functionality and modern UI.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "NextAuth",
    ],
    image: "/ecomerce-website.PNG",
    link: "https://ecommerce-website-kwagiypjx-dania-nizams-projects.vercel.app",
  },
   {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio designed to showcase projects, technical skills, and professional experience.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/portfolio.png",
    link: "https://my-portfolio-qgtmt626z-dania-nizams-projects.vercel.app"
    ,
  },
  {
    title: "Data Sweeper",
    description:
      "A Python and Streamlit tool to clean, analyze, and visualize messy data in seconds.",
    tech: ["Python", "Streamlit", "Pandas"],
    image: "/Data sweeper.PNG",
    link: "https://web-scraper-growth.streamlit.app/",
  },
  
  {
    title: "Personal Library Manager",
    description:
      "A simple and elegant book tracking application for managing your personal reading collection.",
    tech: ["Python", "PostgreSQL", "Streamlit"],
    image: "/personal library.PNG",
    link: "#",
  },
  {
    title: "Text Analyzer",
    description:
      "A Streamlit-powered text analysis application featuring word frequency, sentiment analysis, and readability scoring.",
    tech: ["Python", "Streamlit"],
    image: "/text analizer.PNG",
    link: "https://text-analyzer-p.streamlit.app/",
  },
 
  {
    title: "Blog Website",
    description:
      "A modern blog platform with CMS integration and a clean, responsive reading experience.",
    tech: ["Next.js", "Tailwind CSS", "Sanity"],
    image: "/blog-website-image.PNG",
    link: "https://blog-web-sanity-7zdpy6dh5-dania-nizams-projects.vercel.app",
  },
  {
    title: "Car Rental Admin Dashboard",
    description:
      "An administrative dashboard for managing and monitoring the car rental platform.",
    tech: ["Next.js", "Tailwind CSS", "Sanity"],
    image: "/admin dash board.PNG",
    link: "https://admin-dashboard-ppeqzlhj6-dania-nizams-projects.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with a modern frontend stack and deployed on Vercel.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/porfolio.PNG",
    link: "https://portfolio-website-using-tailwind-h4obzurtn.vercel.app",
  },
];

export default function ProjectsClient() {
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b14] px-5 py-20 text-white sm:px-8">

      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
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

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-[#070b14]/90" />

      {/* =====================================================
          BACKGROUND LIGHT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-[5%]
            top-[8%]
            h-72
            w-72
            rounded-full
            bg-blue-500/[0.07]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[35%]
            h-80
            w-80
            rounded-full
            bg-blue-400/[0.06]
            blur-[130px]
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >

          {/* Small Label */}

          <div
            className="
              mx-auto
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/20
              bg-blue-400/[0.06]
              px-4
              py-2
              text-xs
              font-medium
              text-blue-300
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />

            Featured Projects
          </div>

          {/* Main Heading */}

          <h1
            className="
              text-3xl
              font-bold
              tracking-tight
              text-blue-400
              transition
              duration-300
              hover:text-blue-300
              sm:text-4xl
              md:text-5xl
            "
          >
            My Creative Work
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-300
              sm:text-base
            "
          >
            A selection of projects showcasing my experience in modern
            web development, UI design, Python, and AI-powered applications.
          </p>

          {/* Divider */}

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">

            <span className="h-px w-10 bg-blue-400/20" />

            <span className="h-1 w-1 rounded-full bg-blue-400" />

            <span className="h-px w-10 bg-blue-400/20" />

          </div>

        </motion.header>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.article
              key={index}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.12]
                bg-[#0d1422]/90
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-400/40
                hover:shadow-[0_15px_40px_rgba(59,130,246,0.12)]
              "
            >

              {/* =================================================
                  CARD TOP LINE
              ================================================== */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  z-20
                  h-px
                  bg-blue-400/20
                  transition
                  group-hover:bg-blue-400/70
                "
              />

              {/* =================================================
                  PROJECT IMAGE
              ================================================== */}

              <div className="relative overflow-hidden bg-[#111827]">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={420}
                  className="
                    h-52
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                />

                {/* Very subtle image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#070b14]/35
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image number */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    rounded-lg
                    border
                    border-white/10
                    bg-black/50
                    px-2.5
                    py-1
                    text-[10px]
                    font-medium
                    text-gray-300
                    backdrop-blur-md
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="flex flex-1 flex-col p-5">

                {/* Title */}

                <h2
                  className="
                    text-lg
                    font-bold
                    leading-6
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-blue-400
                  "
                >
                  {project.title}
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-3
                    min-h-[72px]
                    text-sm
                    leading-6
                    text-gray-300
                  "
                >
                  {project.description}
                </p>

                {/* =================================================
                    TECHNOLOGIES
                ================================================== */}

                <div className="mt-5">

                  <p
                    className="
                      mb-2.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.tech.map((tech, i) => (

                      <span
                        key={i}
                        className="
                          rounded-lg
                          border
                          border-blue-400/20
                          bg-blue-400/[0.07]
                          px-2.5
                          py-1.5
                          text-[11px]
                          font-medium
                          text-blue-300
                          transition
                          duration-200
                          hover:border-blue-400/40
                          hover:bg-blue-400/10
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                {/* =================================================
                    PROJECT LINK
                ================================================== */}

                <div className="mt-auto pt-6">

                  {project.link !== "#" ? (

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-blue-400/20
                        bg-blue-400/[0.06]
                        px-3.5
                        py-2
                        text-xs
                        font-semibold
                        text-blue-400
                        transition-all
                        duration-300
                        hover:border-blue-400/40
                        hover:bg-blue-400/10
                        hover:text-blue-300
                      "
                    >
                      View Project

                      <FaExternalLinkAlt
                        className="
                          text-[9px]
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                      />

                    </a>

                  ) : (

                    <span
                      className="
                        inline-flex
                        items-center
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-3.5
                        py-2
                        text-xs
                        font-medium
                        text-gray-500
                      "
                    >
                      Coming Soon
                    </span>

                  )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

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
          className="
            mt-16
            rounded-2xl
            border
            border-blue-400/15
            bg-blue-400/[0.035]
            p-8
            text-center
          "
        >

          <div
            className="
              mx-auto
              mb-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-blue-400/20
              bg-blue-400/10
              text-blue-400
            "
          >
            <FaArrowRight />
          </div>

          <h2 className="text-xl font-semibold text-white">
            Interested in my work?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-400">
            Explore these projects to see how I build modern,
            responsive, and user-focused digital experiences.
          </p>

        </motion.div>

      </div>
    </main>
  );
}