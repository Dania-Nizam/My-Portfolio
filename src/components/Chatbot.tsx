"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import Image from "next/image";

type Message = {
  type: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleOpenChat = () => {
    setIsOpen(true);

    if (messages.length === 0) {
      setMessages([
        {
          type: "bot",
          text: "Hi! 👋 I'm Dania's AI Assistant. How can I help you explore her portfolio?",
        },
      ]);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotResponse(userMessage.toLowerCase());

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: reply,
        },
      ]);
    }, 1200);
  };

  const getBotResponse = (question: string) => {
    if (
      question.includes("thank") ||
      question.includes("thanks")
    ) {
      return "You're very welcome! 😊 Feel free to ask me anything else about Dania.";
    }

    if (question.includes("good") || question.includes("great")) {
      return "Thank you! 😊 I'm here whenever you need help exploring Dania's portfolio.";
    }

    if (
      question.includes("skill") ||
      question.includes("technology") ||
      question.includes("tech")
    ) {
      return "Dania works with Next.js, React, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, Node.js, Express.js, MongoDB, Python, Sanity CMS, Framer Motion and AI technologies.";
    }

    if (
      question.includes("project") ||
      question.includes("work")
    ) {
      return "Dania has worked on projects including a MERN AI-powered eCommerce platform, Car Rental Website, AI/RAG applications, portfolio projects and other modern web applications. You can explore them from the Projects section.";
    }

    if (
      question.includes("education") ||
      question.includes("university") ||
      question.includes("study")
    ) {
      return "Dania graduated in Science from the University of Karachi and is also pursuing Generative/Agentic AI Engineering studies.";
    }

    if (
      question.includes("location") ||
      question.includes("where") ||
      question.includes("from")
    ) {
      return "Dania is based in Karachi, Pakistan. 🇵🇰";
    }

    if (
      question.includes("interest") ||
      question.includes("hobby")
    ) {
      return "Dania is interested in Generative AI, Agentic AI, modern UI/UX, full-stack development and building creative digital experiences.";
    }

    if (
      question.includes("name") ||
      question.includes("who")
    ) {
      return "You're visiting Dania's portfolio. 👩‍💻 She is a Full Stack Developer focused on modern web technologies and AI integration.";
    }

    if (
      question.includes("language")
    ) {
      return "Dania communicates in English and Urdu.";
    }

    if (
      question.includes("certificate") ||
      question.includes("certification")
    ) {
      return "Dania has completed various technology and AI-related courses and certifications, including Google AI learning and Generative AI Engineering studies.";
    }

    if (
      question.includes("contact") ||
      question.includes("hire") ||
      question.includes("job")
    ) {
      return "Interested in working with Dania? You can visit the Contact section of this portfolio to get in touch.";
    }

    if (
      question.includes("github")
    ) {
      return "Dania's projects and source code can be explored through her GitHub and project links available in her portfolio.";
    }

    return "I'm here to help you explore Dania's portfolio. 🤖 You can ask me about her skills, projects, education, experience, interests, certifications or how to contact her.";
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">

      {/* ================= FLOATING BUTTON ================= */}

      {!isOpen ? (
        <motion.button
          onClick={handleOpenChat}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            relative
            w-14
            h-14
            flex
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-500
            via-purple-500
            to-pink-500
            text-white
            shadow-[0_8px_30px_rgba(99,102,241,0.45)]
            border
            border-white/20
            transition-all
            duration-300
          "
          aria-label="Open AI Assistant"
        >

          {/* Glow */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-gradient-to-br
              from-blue-500
              to-pink-500
              blur-xl
              opacity-50
              -z-10
            "
          />

          <FaRobot className="text-2xl" />

          {/* Online indicator */}
          <span
            className="
              absolute
              top-1
              right-1
              w-3
              h-3
              rounded-full
              bg-green-400
              border-2
              border-gray-900
            "
          />

        </motion.button>
      ) : (

        /* ================= CHAT WINDOW ================= */

        <Draggable bounds="body">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              w-[calc(100vw-2rem)]
              max-w-[380px]
              h-[520px]
              sm:h-[560px]

              bg-slate-950/90
              backdrop-blur-2xl

              border
              border-white/10

              rounded-2xl

              shadow-[0_20px_70px_rgba(0,0,0,0.5)]

              flex
              flex-col

              overflow-hidden
            "
          >

            {/* ================= HEADER ================= */}

            <div
              className="
                relative
                flex
                items-center
                justify-between
                px-4
                py-3.5

                bg-gradient-to-r
                from-blue-600/90
                via-purple-600/90
                to-indigo-600/90

                border-b
                border-white/10
              "
            >

              <div className="flex items-center gap-3">

                {/* Bot Avatar */}
                <div
                  className="
                    relative
                    w-10
                    h-10
                    rounded-full
                    overflow-hidden
                    border-2
                    border-white/40
                    shadow-lg
                  "
                >
                  <Image
                    src="/dania.png"
                    alt="Dania AI Assistant"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-white">
                    Dania&apos;s AI Assistant
                  </h3>

                  <div className="flex items-center gap-1.5 mt-0.5">

                    <FaCircle className="text-[7px] text-green-400" />

                    <span className="text-[11px] text-blue-100">
                      Online • Ready to help
                    </span>

                  </div>

                </div>

              </div>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="
                  w-8
                  h-8
                  flex
                  items-center
                  justify-center
                  rounded-lg

                  text-white/70

                  hover:text-white
                  hover:bg-white/10

                  transition-all
                  duration-200
                "
                aria-label="Close chatbot"
              >
                <FaTimes className="text-sm" />
              </button>

            </div>

            {/* ================= CHAT MESSAGES ================= */}

            <div
              className="
                flex-1
                p-4
                space-y-4
                overflow-y-auto

                scrollbar-thin
                scrollbar-thumb-white/20
                scrollbar-track-transparent
              "
            >

              {messages.map((msg, i) => (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`flex ${
                    msg.type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`flex items-end gap-2 max-w-[85%] ${
                      msg.type === "user"
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >

                    {/* Avatar */}
                    <div
                      className="
                        flex-shrink-0
                        w-7
                        h-7
                        rounded-full
                        overflow-hidden
                        border
                        border-white/20
                      "
                    >
                      <Image
                        src={
                          msg.type === "user"
                            ? "/user-avatar.png"
                            : "/dania.png"
                        }
                        alt={
                          msg.type === "user"
                            ? "User"
                            : "Dania"
                        }
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                        msg.type === "user"
                          ? `
                            bg-gradient-to-r
                            from-blue-500
                            to-purple-500
                            text-white
                            rounded-br-md
                          `
                          : `
                            bg-white/10
                            border
                            border-white/10
                            text-gray-200
                            rounded-bl-md
                          `
                      }`}
                    >
                      {msg.text}
                    </div>

                  </div>

                </motion.div>

              ))}

              {/* ================= TYPING ================= */}

              {isTyping && (

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex justify-start"
                >

                  <div className="flex items-end gap-2">

                    <div
                      className="
                        w-7
                        h-7
                        rounded-full
                        overflow-hidden
                        border
                        border-white/20
                      "
                    >
                      <Image
                        src="/dania.png"
                        width={28}
                        height={28}
                        alt="Dania"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-1
                        px-4
                        py-3

                        bg-white/10
                        border
                        border-white/10

                        rounded-2xl
                        rounded-bl-md
                      "
                    >

                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />

                      <span
                        className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"
                        style={{
                          animationDelay: "0.15s",
                        }}
                      />

                      <span
                        className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce"
                        style={{
                          animationDelay: "0.3s",
                        }}
                      />

                    </div>

                  </div>

                </motion.div>
              )}

              <div ref={chatEndRef} />

            </div>

            {/* ================= SUGGESTIONS ================= */}

            {messages.length <= 1 && !isTyping && (

              <div className="px-3 pb-2">

                <div className="flex gap-2 overflow-x-auto scrollbar-none">

                  {[
                    "Skills",
                    "Projects",
                    "Education",
                  ].map((suggestion) => (

                    <button
                      key={suggestion}
                      onClick={() => {
                        setInput(suggestion);
                      }}
                      className="
                        flex-shrink-0
                        px-3
                        py-1.5

                        text-[11px]
                        text-gray-300

                        bg-white/5
                        border
                        border-white/10

                        rounded-full

                        hover:bg-white/10
                        hover:border-blue-400/40
                        hover:text-white

                        transition-all
                      "
                    >
                      {suggestion}
                    </button>

                  ))}

                </div>

              </div>
            )}

            {/* ================= INPUT ================= */}

            <div
              className="
                p-3
                bg-black/20
                border-t
                border-white/10
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2

                  p-1

                  bg-white/5
                  border
                  border-white/10

                  rounded-xl

                  focus-within:border-blue-400/50
                  focus-within:bg-white/10

                  transition-all
                "
              >

                <input
                  type="text"
                  className="
                    flex-1
                    min-w-0

                    px-3
                    py-2

                    bg-transparent

                    text-sm
                    text-white

                    placeholder:text-gray-500

                    outline-none
                  "
                  placeholder="Ask about Dania..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                />

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="
                    flex-shrink-0
                    w-9
                    h-9

                    flex
                    items-center
                    justify-center

                    rounded-lg

                    bg-gradient-to-r
                    from-blue-500
                    to-purple-500

                    text-white

                    disabled:opacity-30
                    disabled:cursor-not-allowed

                    transition-all
                  "
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-xs" />
                </motion.button>

              </div>

              <p className="text-center text-[9px] text-gray-600 mt-2">
                Dania&apos;s Portfolio Assistant
              </p>

            </div>

          </motion.div>

        </Draggable>
      )}

    </div>
  );
}