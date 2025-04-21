"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Play audio right away when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      {/* Audio Tag (hidden but plays instantly) */}
      <audio
        ref={audioRef}
        src="/ttsMP3.com_VoiceText_2025-4-17_14-50-15.mp3"
        preload="auto"
      />

      {/* Glowing Circle Animation */}
      <motion.div
        className="relative flex items-center justify-center w-20 h-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-ping opacity-70" />

        <motion.div
          className="w-10 h-10 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full shadow-xl"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        <div className="absolute w-full h-full rounded-full border-2 border-dotted border-white/40 animate-spin-slow" />
      </motion.div>

      {/* The Text & Glow */}
      <motion.p
        className="mt-6 text-xl font-semibold text-center bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent animate-glow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Portfolio is Loading...
      </motion.p>
    </div>
  );
}
