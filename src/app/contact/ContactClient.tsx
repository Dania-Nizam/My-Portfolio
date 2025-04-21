"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Loader from "../components/Loader";
import { FaUser, FaEnvelope, FaPen } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      

      <main className="relative min-h-screen text-white flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* ✅ Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
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

        {/* ✅ Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[-1]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg glass-card p-10 rounded-3xl shadow-2xl border group-hover:shadow-[0_0_20px_4px] border-white/20 sparkle-effect hover-effect"
        >
          {/* ✅ Heading with Gradient + Hover */}
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent hover:scale-105 transition duration-300">
            Get in Touch
          </h2>

          <form
            action="https://formspree.io/f/xrbpryay"
            method="POST"
            className="space-y-5  "
          >
            {/* ✅ Inputs with Hoverable Icons */}
            {[
              { id: "name", label: "Your Name", type: "text", icon: <FaUser /> },
              { id: "email", label: "Your Email", type: "email", icon: <FaEnvelope /> },
              { id: "subject", label: "Subject", type: "text", icon: <FaPen /> },
            ].map(({ id, label, type, icon }) => (
              <div key={id} className="relative group">
                <label htmlFor={id} className="block mb-1 text-sm font-medium">
                  {label}
                </label>
                <div className="flex items-center">
                  <span className="absolute left-3 text-white transition-transform group-hover:scale-125">
                    {icon}
                  </span>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    className="w-full pl-10 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md hover:bg-white/20 hover:ring-blue-300"
                  />
                </div>
              </div>
            ))}

            {/* ✅ Message */}
            <div className="group">
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-xl bg-white/10  border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md hover:bg-white/20 hover:ring-blue-300"
              />
            </div>

            {/* ✅ Fancy Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:brightness-110 font-semibold shadow-lg transition-all"
            >
              Send Message 🚀
            </motion.button>
          </form>

          <div className="text-center mt-6">
            <Link href="/" className="text-sm text-blue-400 hover:underline">
              ⬅ Back to Home
            </Link>
          </div>
        </motion.div>
      </main>

      {/* ✅ Extra Glass Effect + Sparkle Effect + Hover */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }
        .sparkle-effect {
          border-image: linear-gradient(90deg, rgba(255, 215, 0, 0.8), rgba(0, 255, 255, 0.8)) 1;
          animation: sparkle 3s infinite linear;
        }
        .hover-effect:hover {
          box-shadow: 0 0 15px rgba(0, 206, 209, 0.8), 0 0 25px rgba(255, 105, 180, 0.8);
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}