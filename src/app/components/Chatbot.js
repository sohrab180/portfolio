"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';

// Points at the "portfolio" module of the shared Node/Express/MongoDB
// backend at D:\Tracking-App\backend (mounted at /api/portfolio there —
// see src/portfolio/portfolio.app.js). Override via .env.local for
// production (see .env.local.example).
const CHAT_API_BASE = process.env.NEXT_PUBLIC_CHATBOT_API_URL || 'http://localhost:4000/api/portfolio';

const WELCOME_MESSAGE = {
  role: 'bot',
  text: "Hi! I'm Sohrab's AI assistant. Ask me about his experience, skills, AI/automation work, projects, or how to get in touch.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isOpen || suggestions.length) return;
    fetch(`${CHAT_API_BASE}/chat/suggestions`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data.suggestions || []))
      .catch(() => setSuggestions([]));
  }, [isOpen, suggestions.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isSending]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isSending) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsSending(true);

    try {
      const res = await fetch(`${CHAT_API_BASE}/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: data.reply || "Sorry, I couldn't process that — please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: "I couldn't reach the server just now. Please try again shortly or email sohrabali180@gmail.com.",
        },
      ]);
    }

    setIsSending(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/30 flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-xl" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[520px] bg-[#0b1e3d] border border-sky-400/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 bg-gradient-to-r from-sky-500 to-sky-600 flex items-center gap-2">
              <FaRobot className="text-white text-lg" />
              <div>
                <p className="text-white font-bold text-sm leading-tight">Ask about Sohrab</p>
                <p className="text-white/75 text-xs leading-tight">Experience · Skills · Projects · AI</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-[#071426]/60">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-sky-500 text-white rounded-br-sm'
                        : 'bg-[#12305f] text-slate-100 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isSending && (
                <div className="flex justify-start">
                  <div className="bg-[#12305f] text-slate-400 text-sm px-3 py-2 rounded-xl rounded-bl-sm">
                    Typing...
                  </div>
                </div>
              )}

              {!isSending && messages.length === 1 && suggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {suggestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(q)}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#12305f] text-sky-300 border border-sky-500/30 hover:bg-[#16386e] transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-sky-400/15 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-[#12305f] border border-sky-400/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                disabled={isSending || !input.trim()}
                className="w-9 h-9 rounded-lg bg-sky-500 text-white flex items-center justify-center disabled:opacity-50"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
