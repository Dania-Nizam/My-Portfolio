"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-16 overflow-hidden">
      {/* Background Video */}
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

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]" />

      {/* Text Content */}
      <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-xl border border-white/20 shadow-xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-gray-200 mb-6"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
