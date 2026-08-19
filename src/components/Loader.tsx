"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#070b14]">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">

        {/* Main subtle glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />

        {/* Small ambient glow */}
        <div className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full bg-blue-400/[0.04] blur-[80px]" />

        <div className="absolute bottom-[15%] right-[15%] h-48 w-48 rounded-full bg-blue-500/[0.04] blur-[90px]" />

      </div>

      {/* ================= AUDIO ================= */}

      <audio
        ref={audioRef}
        src="/ttsMP3.com_VoiceText_2025-4-17_14-50-15.mp3"
        preload="auto"
      />

      {/* ================= LOADER ================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative z-10 flex flex-col items-center"
      >

        {/* ================= LOGO / LOADER ================= */}

        <div className="relative flex h-24 w-24 items-center justify-center">

          {/* Outer rotating ring */}

          <motion.div
            className="absolute inset-0 rounded-full border border-blue-400/20"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
          />

          {/* Progress ring */}

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "linear",
            }}
          />

          {/* Inner ring */}

          <motion.div
            className="absolute h-16 w-16 rounded-full border border-blue-400/20"
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />

          {/* Center */}

          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10"
            animate={{
              boxShadow: [
                "0 0 0 rgba(96,165,250,0)",
                "0 0 25px rgba(96,165,250,0.25)",
                "0 0 0 rgba(96,165,250,0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-blue-400" />
          </motion.div>

        </div>

        {/* ================= TEXT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="mt-7 text-center"
        >

          <h2 className="text-lg font-semibold tracking-wide text-blue-400">
            Loading Portfolio
          </h2>

          <p className="mt-2 text-xs tracking-wider text-gray-500">
            Preparing your experience...
          </p>

        </motion.div>

        {/* ================= LOADING DOTS ================= */}

        <div className="mt-5 flex items-center gap-1.5">

          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-1.5 w-1.5 rounded-full bg-blue-400"
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: dot * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}

        </div>

        {/* ================= BOTTOM LINE ================= */}

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "70px", opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-6 h-px bg-blue-400/40"
        />

      </motion.div>

    </div>
  );
}