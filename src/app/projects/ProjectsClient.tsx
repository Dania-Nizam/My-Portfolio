"use client";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Car Rental Website",
    description:
      "A modern car rental eCommerce app built with Next.js, Tailwind CSS, Redux, and Sanity CMS.",
    tech: ["Next.js", "Sanity", "Tailwind CSS"],
    image: "/car-website.png",
    link: "https://market-place-hackathon-28pz-h75zex868-dania-nizams-projects.vercel.app",
  },
  {
    title: "Data Sweeper",
    description:
      "A Python + Streamlit tool to clean, analyze, and visualize messy data in seconds.",
    tech: ["Python", "Streamlit", "Pandas"],
    image: "/Data sweeper.PNG",
    link: "https://web-scraper-growth.streamlit.app/",
  },

  {
    title: "Ecommerce Website",
    description:
      "A sleek and fast eCommerce web app showcasing responsive design and dynamic cart features.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion,Redux Toolkit,Next Auth"],
    image: "/ecomerce-website.png",
    link: "https://ecommerce-website-kwagiypjx-dania-nizams-projects.vercel.app",
  },
  {
    title: "Personal Library Manager",
    description:
      "Manage your reading collection with this beautiful and simple book tracking web app.",
    tech: ["Python", "Postgressql", "streamlit"],
    image: "/personal library.PNG",
    link: "#",
  },

  {
    title: "Text Analyzer",
    description:
      "Analyze and gain insights from your text instantly with this sleek Streamlit-powered web app. It offers features like word frequency, sentiment analysis, and readability scoring — all in a clean, user-friendly interface.",
    tech: ["Python", "Streamlit"],
    image: "/text analizer.PNG",
    link: "https://text-analyzer-p.streamlit.app/",
  },
  {
    title: "Portfolio website  ",
    description:
      "Minimal blog design with CMS integration and beautiful reading experience.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/portfolio web.PNG",
    link: "#",
  },

  {
    title: "Blog Website",
    description:
      "Minimal blog design with CMS integration and beautiful reading experience.",
    tech: ["Next.js", "Tailwind CSS", "Sanity"],
    image: "/blog-website-image.png",
    link: "https://blog-web-sanity-7zdpy6dh5-dania-nizams-projects.vercel.app",
  },

  {
    title: "Admin Dash-Board Of Car Rental Website ",
    description:
      "Minimal blog design with CMS integration and beautiful reading experience.",
    tech: ["Next.js", "Tailwind CSS", "Sanity"],
    image: "/admin dash board.PNG",
    link: "https://admin-dashboard-ppeqzlhj6-dania-nizams-projects.vercel.app",
  },

  {
    title: "Portfolio website  ",
    description:
      "Minimal blog design with CMS integration and beautiful reading experience.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/porfolio.PNG",
    link: "https://portfolio-website-using-tailwind-h4obzurtn.vercel.app",
  },
];

export default function ProjectsClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <main className="relative min-h-screen text-white px-6 py-16 overflow-hidden font-sans">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
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

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-md z-[-1]" />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="drop-shadow-lg text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent hover:scale-105 ease-in-out transition      relative  md:text-3xl  
                  animated-gradient-text 
                  duration-500 "
        >
          ⚡ My Creative Work
        </motion.h1>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg hover:shadow-blue-400 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Layer */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-4">
                
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500} // You can adjust this based on your layout
                  height={160} // h-40 = 160px
                  className="w-full h-40 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h2 className="text-xl font-bold text-blue-300 mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-500 to-purple-500/70 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-inner"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium text-sm"
              >
                View Project <FaExternalLinkAlt className="animate-pulse" />
              </a>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
