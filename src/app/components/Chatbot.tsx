"use client";

import { useState, useEffect, useRef } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOpenChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          type: "bot",
          text: "👋 Welcome to Dania's Portfolio! How can I assist you?",
        },
      ]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBotResponse(userMessage.toLowerCase());
      setIsTyping(false);
      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
    }, 1500);
  };

  const getBotResponse = (question: string) => {
    if (question.includes("thank you for the information"))
      return "Thank you good to see you!";
    if (question.includes("good")) return "Thank you!";
    if (question.includes("skills"))
      return " 🛠️Skilled in Next.js, TypeScript, Tailwind CSS, Framer Motion, Javascript,Reactjs,Redux,Python,Redux Toolkit,Sanity and more.";
    if (question.includes("projects"))
      return " 📁 Check out her projects like Car Rental Website, a Data Sweeper app, and I’m working on a 3D portfolio and many more you can access dania's project on github ,vercel and streamlit the links are given in the cv section .";
    if (question.includes("education") || question.includes("university"))
      return "🎓 Graduated in science from the University of Karachi and pursuing Agentic AI Engeenering from GIAIC";
    if (question.includes("location") || question.includes("from"))
      return "based in Karachi, Pakistan.";
    if (question.includes("interests"))
      return " love Generative AI, UI/UX design, and building creative web experiences.";
    if (question.includes("name")) return "This is Dania's Portfolio!";

    if (question.includes("language")) return "🌐 Fluent in English and Urdu.";
    if (question.includes("certifications"))
      return "✅ Courses from freeCodeCamp, CodeWithMosh, and GIAIC!";

    return " 🤖I'm here to answer questions about Dania! Try asking about the skills, projects, education ,language,intrests or background 😊";
  };

  return (
    <div className="fixed bottom-4 left-4 z-[9999]">
      {!isOpen ? (
        <motion.button
          onClick={handleOpenChat}
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full shadow-xl text-white animate-bounce"
        >
          <FaRobot className="text-xl" />
        </motion.button>
      ) : (
        <Draggable bounds="body">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[90vw] sm:w-80 h-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-semibold">
              <span>🤖 Dania’s Assistant</span>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm text-white scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2 ${
                      msg.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    
                    <Image
                      src={
                        msg.type === "user" ? "/user-avatar.png" : "/dania.jpg"
                      }
                      alt="avatar"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full object-cover border-2 border-pink-400"
                    />
                    <div
                      className={`px-3 py-2 rounded-lg max-w-[75%] ${
                        msg.type === "user"
                          ? "bg-pink-600 text-white"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing animation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2">
                    
                    <Image
                      src="/dania.jpg"
                      width={24} // equivalent to w-6 (6 * 4px)
                      height={24} // equivalent to h-6 (6 * 4px)
                      alt="avatar"
                      className="rounded-full object-cover border-2 border-pink-400"
                    />
                    <div className="bg-white/20 px-3 py-2 rounded-lg text-white animate-pulse">
                      <span className="dots">Typing...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="flex p-2 bg-black/20">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-l-lg bg-white/20 text-white placeholder:text-gray-300 outline-none"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                className="bg-pink-500 px-4 py-2 rounded-r-lg text-white hover:bg-pink-600 transition"
                onClick={handleSend}
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        </Draggable>
      )}
    </div>
  );
}
