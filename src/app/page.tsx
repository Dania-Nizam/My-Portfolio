"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import { BsFillCloudDownloadFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Loader from "../app/components/Loader"; // Update path if needed
import Typewriter from "typewriter-effect";
import Chatbot from "./components/Chatbot";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="text-white bg-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-4 overflow-hidden">
        {/* Background Video */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center space-y-6 md:text-left md:flex md:items-center md:space-x-12 z-10"
        >
          {/* Profile Pic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-32 h-32 md:w-48 md:h-48 mx-auto md:mx-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-[90px] opacity-100 z-0 animate-spin-slow"></div>
            <div className="relative z-10 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.6)] ring-4 ring-purple-400/40 hover:ring-pink-500/60 hover:shadow-blue-400 transition-all duration-300">
              import Image from "next/image";
              <Image
                src="/dania.jpg"
                alt="Dania"
                width={192} // corresponds to md:w-48 (48 * 4 = 192px)
                height={192} // corresponds to md:h-48 (48 * 4 = 192px)
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={containerVariants}
            className="max-w-xl space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5 }}
              className="text-3xl tracking-wider md:text-6xl font-bold font-serif mb-4"
            >
              {"Hi, I'm  Dania".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.2, color: "#60A5FA" }}
                  className="inline-block bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative text-3xl md:text-4xl font-semibold text-center text-transparent bg-clip-text 
             bg-gradient-to-r from-blue-500 via-purple-400 to-blue-400 
             animate-text-glow drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] 
             hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] transition-all duration-500 ease-in-out"
            >
              <Typewriter
                options={{
                  strings: [
                    " Frontend Web Developer",
                    " Next.js Developer",
                    " Generative AI Enthusiast",
                    " UI/UX Lover",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
              <span className="absolute left-1/2 bottom-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full transition-all duration-700 ease-in-out transform -translate-x-1/2"></span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-fadeIn hover:drop-shadow-glow relative group transition duration-500"
            >
              I build beautiful, fast, and smart web experiences using modern
              tech.
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-500"></span>
            </motion.p>

            <motion.a
              href="/cv"
              className="relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-white font-semibold 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] 
             transition-all duration-500 ease-in-out hover:bg-right hover:shadow-lg hover:scale-105
             shadow-blue-500/30 hover:shadow-purple-500/40 group sparkle-button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              My Curriculum Vitae
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-8 z-20">
          <Chatbot />
        </div>
      </section>

      {/* Explore My Work Section with Video */}
      <section className="relative py-16 px-6 overflow-hidden text-white">
        {/* Background Video */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center">
              <h1
                className="relative text-3xl md:text-3xl font-extrabold mb-6 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animated-gradient-text 
                 transition-transform duration-500 ease-in-out hover:scale-105 drop-shadow-lg"
              >
                Explore My Works
                {/* Glowing Underline */}
                <span
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-1 w-20 rounded-full 
                       bg-purple-500 shadow-md shadow-purple-500/40 opacity-60 hover:opacity-100 
                       animate-pulse hover:scale-110 transition-all duration-500 ease-in-out"
                ></span>
              </h1>
            </div>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                href: "/projects",
                title: "Projects",
                desc: "Check out the web and AI projects I've worked on.",
              },
              {
                href: "/skills",
                title: "Skills",
                desc: "Explore the technologies and tools I use to build web applications.",
              },
              {
                href: "/contact",
                title: "Contact",
                desc: "Want to collaborate? Get in touch with me.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center 
        border border-white/20 hover:border-blue-400 transition-all duration-300 
        hover:shadow-blue-400/30 cursor-pointer group  "
              >
                <Link href={item.href}>
                  <h3 className="text-2xl font-bold text-blue-300 group-hover:text-pink-400 transition-colors duration-300 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">{item.desc}</p>
                  <span className="text-blue-300 text-lg group-hover:text-white transition">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-center text-gray-300">
        <p>&copy; 2025 Dania | All Rights Reserved</p>
      </footer>
    </main>
  );
}
