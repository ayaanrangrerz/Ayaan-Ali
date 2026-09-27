import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  Mail, 
  Check, 
  Copy, 
  MessageSquareText, 
  ChevronDown, 
  ArrowUpRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { CONTACT_EMAIL } from '../data/content';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const SUGGESTED_PROMPTS = [
  "Which package is right for an e-commerce store?",
  "What is the timeline & cost for a custom SaaS app?",
  "Can you explain Ayaan's tech stack & SEO approach?",
  "How can I integrate Gemini AI into my business site?",
];

const INITIAL_MESSAGE: ChatMessage = {
  id: 'init-msg',
  role: 'assistant',
  content: `👋 Hello! I am the **Ayaan Digital AI Consultant**.\n\nWhether you need a high-converting landing page, a full-stack web application, or custom AI automations, I can help you plan your architecture, estimate costs, and choose the right package.\n\nHow can I help you bring your project to life today?`,
  timestamp: new Date(),
};

function renderFormattedContent(text: string) {
  const lines = text.split('\n');
  return lines.map((line, idx) => {
    // Check for bullet list line
    const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
    const cleanLine = isBullet ? line.trim().replace(/^[\*\-]\s+/, '') : line;

    // Parse **bold** parts
    const parts = cleanLine.split(/(\*\*[^*]+\*\*)/g);
    const formattedParts = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={pIdx} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    if (isBullet) {
      return (
        <div key={idx} className="flex items-start gap-2 my-1 text-gray-200">
          <span className="text-cyan-400 mt-1 select-none text-xs">◆</span>
          <span className="flex-1">{formattedParts}</span>
        </div>
      );
    }

    if (!line.trim()) {
      return <div key={idx} className="h-2" />;
    }

    return (
      <p key={idx} className="my-0.5">
        {formattedParts}
      </p>
    );
  });
}

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const messageText = (textToSend || input).trim();
    if (!messageText || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation history for API
      const payloadMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/consultation/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "I'd be delighted to assist further with your project details.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Consultation chat error:', err);
      const fallbackMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `I'm having a brief connection issue. You can reach out directly to Ayaan at **${CONTACT_EMAIL}** for an instant reply, or try sending your message again!`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        ...INITIAL_MESSAGE,
        timestamp: new Date(),
      },
    ]);
  };

  const copyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const composeEmailDraft = () => {
    const summary = messages
      .filter((m) => m.id !== 'init-msg')
      .map((m) => `${m.role === 'user' ? 'Client' : 'AI Consultant'}: ${m.content}`)
      .join('\n\n');

    const subject = encodeURIComponent('Project Consultation Summary — Ayaan Digital');
    const body = encodeURIComponent(
      `Hi Ayaan,\n\nI just consulted with the AI Assistant on your website regarding my project requirements. Here is a summary of what I am looking for:\n\n${summary}\n\nLooking forward to your thoughts and next steps.\n\nBest regards,\n[Your Name]`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Floating launcher trigger widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 print:hidden">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="hidden sm:flex items-center gap-2 bg-[#12161f] border border-cyan-500/30 text-xs px-3.5 py-1.5 rounded-full shadow-lg shadow-cyan-950/40 text-cyan-300 font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            AI Project Consultant Online
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (isOpen ? onClose() : onOpen())}
          className="relative group p-4 rounded-2xl bg-gradient-to-tr from-cyan-600 via-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-600/30 hover:shadow-cyan-500/50 transition-all border border-cyan-300/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={isOpen ? 'Close AI consultation chat' : 'Open AI consultation chat'}
        >
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#090b10] rounded-full" />
          {isOpen ? (
            <ChevronDown className="w-6 h-6" />
          ) : (
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          )}
        </motion.button>
      </div>

      {/* Slide-over / Modal Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end sm:p-6 pointer-events-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="pointer-events-auto relative w-full sm:w-[460px] h-[85vh] sm:h-[680px] max-h-[92vh] bg-[#0c1017] border border-cyan-500/20 sm:rounded-2xl rounded-t-3xl shadow-2xl shadow-cyan-950/60 flex flex-col overflow-hidden z-10"
            >
              {/* Header */}
              <div className="px-5 py-4 border-b border-white/10 bg-[#0e131d]/90 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                    <Bot className="w-5 h-5" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#0e131d] rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-semibold text-white tracking-wide">
                        Ayaan Digital Advisor
                      </h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                        Gemini 3.5
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-cyan-400" /> Web & AI Solutions Architect
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={resetChat}
                    title="Restart Conversation"
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onClose}
                    title="Close"
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Quick Info Ribbon */}
              <div className="bg-[#121824] px-4 py-2 border-b border-white/5 flex items-center justify-between text-[11px] text-gray-300">
                <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Instant scope & package estimations
                </span>
                {messages.length > 2 && (
                  <button
                    onClick={composeEmailDraft}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 hover:underline"
                  >
                    <Mail className="w-3 h-3" /> Email this to Ayaan
                  </button>
                )}
              </div>

              {/* Message Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
                {messages.map((message) => {
                  const isUser = message.role === 'user';
                  return (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-gray-400 font-mono">
                        {isUser ? 'You' : 'Ayaan Digital Advisor'}
                        <span>•</span>
                        <span>
                          {new Intl.DateTimeFormat('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          }).format(message.timestamp)}
                        </span>
                      </div>

                      <div
                        className={`group relative max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                          isUser
                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none shadow-md shadow-cyan-900/30'
                            : 'bg-[#151b27] border border-white/10 text-gray-200 rounded-tl-none shadow-sm'
                        }`}
                      >
                        {isUser ? message.content : renderFormattedContent(message.content)}

                        {!isUser && (
                          <button
                            onClick={() => copyMessage(message.id, message.content)}
                            title="Copy message"
                            className="absolute bottom-2 right-2 p-1 text-gray-400 hover:text-white bg-[#0e131d]/80 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            {copiedId === message.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-cyan-400 bg-[#151b27] border border-cyan-500/20 px-3.5 py-2.5 rounded-2xl rounded-tl-none w-fit"
                  >
                    <Sparkles className="w-4 h-4 animate-spin text-cyan-400" />
                    <span className="text-xs text-gray-300 font-medium">
                      Consultant is formulating recommendations...
                    </span>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Prompt Suggestions */}
              {messages.length <= 3 && !isLoading && (
                <div className="px-4 py-2 border-t border-white/5 bg-[#0e131d]/50">
                  <p className="text-[11px] text-gray-400 mb-1.5 flex items-center gap-1 font-medium">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> Suggested topics:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="text-[11px] text-left px-2.5 py-1 rounded-lg bg-[#182131] hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-200 border border-white/5 hover:border-cyan-500/30 transition-all flex items-center gap-1"
                      >
                        {prompt}
                        <ArrowUpRight className="w-2.5 h-2.5 text-cyan-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-3 bg-[#0e131d] border-t border-white/10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-end gap-2"
                >
                  <div className="relative flex-1 bg-[#151b27] rounded-xl border border-white/10 focus-within:border-cyan-500 transition-colors">
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about project packages, costs, or tech stack..."
                      rows={2}
                      className="w-full px-3.5 py-2.5 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-gray-950 font-medium transition-colors shadow-lg shadow-cyan-500/20 focus:outline-none"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400 px-1">
                  <span>Enter to send, Shift+Enter for newline</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    Direct Email <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
