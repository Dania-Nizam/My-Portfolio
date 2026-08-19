"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Loader from "../../components/Loader";
import { FaUser, FaEnvelope, FaPen, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const fields = [
    {
      id: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Enter your name",
      icon: <FaUser />,
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email",
      icon: <FaEnvelope />,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What would you like to discuss?",
      icon: <FaPen />,
    },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070b14] px-4 py-16 text-white sm:px-6">

      {/* ================= BACKGROUND VIDEO ================= */}

      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
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

      {/* ================= BACKGROUND OVERLAY ================= */}

      <div className="absolute inset-0 bg-[#070b14]/80" />

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-blue-400/10 blur-[130px]" />
      </div>

      {/* ================= CONTACT CARD ================= */}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative
          z-10
          w-full
          max-w-xl
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.045]
          p-6
          shadow-2xl
          backdrop-blur-2xl
          sm:p-8
          md:p-10
        "
      >

        {/* Top Accent Line */}

        <div className="absolute left-0 right-0 top-0 h-px bg-blue-400/50" />

        {/* ================= HEADER ================= */}

        <div className="mb-8 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="
              mx-auto
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-blue-400/20
              bg-blue-400/10
              text-blue-400
              shadow-lg
              shadow-blue-500/10
            "
          >
            <FaEnvelope className="text-xl" />
          </motion.div>

          <h1 className="text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
            Have a project, opportunity, or idea in mind?
            Feel free to send me a message.
          </p>

          {/* Underline */}

          <div className="mx-auto mt-5 h-px w-16 bg-blue-400/60" />

        </div>

        {/* ================= FORM ================= */}

        <form
          action="https://formspree.io/f/xrbpryay"
          method="POST"
          className="space-y-5"
        >

          {/* ================= INPUT FIELDS ================= */}

          {fields.map((field) => (
            <div key={field.id} className="group">

              <label
                htmlFor={field.id}
                className="
                  mb-2
                  block
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-gray-400
                  transition
                  group-focus-within:text-blue-400
                "
              >
                {field.label}
              </label>

              <div className="relative">

                {/* Icon */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    transition
                    group-focus-within:text-blue-400
                  "
                >
                  {field.icon}
                </span>

                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    transition-all
                    duration-300
                    hover:border-white/20
                    focus:border-blue-400/50
                    focus:bg-blue-400/[0.03]
                    focus:ring-2
                    focus:ring-blue-400/10
                  "
                />

              </div>
            </div>
          ))}

          {/* ================= MESSAGE ================= */}

          <div className="group">

            <label
              htmlFor="message"
              className="
                mb-2
                block
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-gray-400
                transition
                group-focus-within:text-blue-400
              "
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project or idea..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-4
                py-3
                text-sm
                text-white
                outline-none
                placeholder:text-gray-600
                transition-all
                duration-300
                hover:border-white/20
                focus:border-blue-400/50
                focus:bg-blue-400/[0.03]
                focus:ring-2
                focus:ring-blue-400/10
              "
            />

          </div>

          {/* ================= SUBMIT BUTTON ================= */}

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-blue-400/30
              bg-blue-500
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:bg-blue-400
              hover:shadow-blue-500/30
            "
          >
            Send Message

            <FaPaperPlane
              className="
                text-sm
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-0.5
              "
            />
          </motion.button>

        </form>

        {/* ================= BACK TO HOME ================= */}

        <div className="mt-7 text-center">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-gray-500
              transition
              hover:text-blue-400
            "
          >
            <span>←</span>
            Back to Home
          </Link>

        </div>

      </motion.section>

    </main>
  );
}