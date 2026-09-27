import React from 'react';
import { ArrowRight, MessageSquare, Terminal, Sparkles, CheckCircle2, Bot } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';
import { WHATSAPP_NUMBER } from '../data/content';

interface HeroProps {
  onOpenContact: () => void;
  onOpenAiConsultant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenAiConsultant }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Ayaan Digital! I am interested in building a high-performance website / digital marketing solution for my business.'
  )}`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-tech-grid">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Technical Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono mb-6 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>AYAAN DIGITAL / DIGITAL STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4 text-balance">
              BUILD YOUR <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                DIGITAL PRESENCE.
              </span>
            </h1>

            {/* Second Line Highlighted Phrase */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-300 tracking-tight mb-6">
              Make your business unmissable.
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed mb-8">
              High-performance websites, strategic digital marketing, and AI-powered solutions engineered for modern businesses ready to stand out and scale.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenAiConsultant && (
                <button
                  onClick={onOpenAiConsultant}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 rounded-lg transition-all shadow-md shadow-cyan-950/50"
                  title="Ask AI Project Consultant"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>Consult AI Advisor</span>
                </button>
              )}

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-all"
              >
                <span>Explore Services</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 rounded-lg transition-all"
                title="Direct WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Technical System Labels */}
            <div className="pt-6 border-t border-white/[0.08] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="tracking-wider">WEB DEV</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="tracking-wider">DIGITAL MARKETING</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span className="tracking-wider">AI SOLUTIONS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="tracking-wider">PERFORMANCE</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Core & Glass HUD Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* The 3D Canvas */}
            <div className="w-full aspect-square max-w-[460px] relative">
              <ThreeCanvas className="w-full h-full" />

              {/* Floating Futuristic HUD Badge 1 */}
              <div className="absolute -top-2 -left-2 sm:left-2 p-3 rounded-lg glass-panel text-xs text-neutral-300 font-mono flex items-center gap-3 shadow-xl pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Core Standard</div>
                  <div className="text-white font-semibold">Sub-Second Load Times</div>
                </div>
              </div>

              {/* Floating Futuristic HUD Badge 2 */}
              <div className="absolute -bottom-3 -right-2 sm:right-2 p-3 rounded-lg glass-panel text-xs text-neutral-300 font-mono flex items-center gap-3 shadow-xl pointer-events-none">
                <div className="w-7 h-7 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Architecture</div>
                  <div className="text-white font-semibold">Clean Code & High Conversion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
