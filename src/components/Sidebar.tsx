"use client";

import { FaHome, FaFileAlt, FaEnvelope, FaProjectDiagram, FaTools } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center gap-5 px-4 py-5 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl animate-float">
      
      {/* Home */}
      <Link href="/" className="group flex flex-col items-center">
        <FaHome className="text-3xl text-white transition-transform duration-300 group-hover:scale-125 group-hover:text-green-400 drop-shadow-[0_0_10px_#34d399]" />
        <span className="mt-1 text-xs text-white opacity-70 group-hover:opacity-100 group-hover:text-green-300 transition">
          Home
        </span>
      </Link>

      {/* CV */}
      <Link href="/cv" target="_blank" className="group flex flex-col items-center">
        <FaFileAlt className="text-3xl text-white transition-transform duration-300 group-hover:scale-125 group-hover:text-pink-500 drop-shadow-[0_0_10px_#ec4899]" />
        <span className="mt-1 text-xs text-white opacity-70 group-hover:opacity-100 group-hover:text-pink-300 transition">
          CV
        </span>
      </Link>

      {/* Contact */}
      <Link href="/contact" className="group flex flex-col items-center">
        <FaEnvelope className="text-3xl text-white transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-400 drop-shadow-[0_0_10px_#60a5fa]" />
        <span className="mt-1 text-xs text-white opacity-70 group-hover:opacity-100 group-hover:text-blue-300 transition">
          Contact
        </span>
      </Link>

      {/* Projects */}
      <Link href="/projects" className="group flex flex-col items-center">
        <FaProjectDiagram className="text-3xl text-white transition-transform duration-300 group-hover:scale-125 group-hover:text-purple-400 drop-shadow-[0_0_10px_#a855f7]" />
        <span className="mt-1 text-xs text-white opacity-70 group-hover:opacity-100 group-hover:text-purple-300 transition">
          Projects
        </span>
      </Link>

      {/* Skills */}
      <Link href="/skills" className="group flex flex-col items-center">
        <FaTools className="text-3xl text-white transition-transform duration-300 group-hover:scale-125 group-hover:text-yellow-400 drop-shadow-[0_0_10px_#facc15]" />
        <span className="mt-1 text-xs text-white opacity-70 group-hover:opacity-100 group-hover:text-yellow-300 transition">
          Skills
        </span>
      </Link>
    </div>
  );
}
