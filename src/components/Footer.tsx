import React from 'react';
import { ArrowUp, MessageSquare, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE, LINKEDIN_URL, LINKEDIN_DISPLAY, GITHUB_URL, GITHUB_HANDLE } from '../data/content';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Ayaan Digital! I would like to inquire about website development & digital marketing services.'
  )}`;

  return (
    <footer className="relative bg-[#01040a] text-neutral-400 py-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-2 group mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                AYAAN DIGITAL
              </span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
              Modern websites. Smarter marketing. Better digital presence. Engineered with precision for businesses ready to move forward.
            </p>
            <div className="text-xs font-mono text-neutral-500">
              Delhi NCR · Global Operations
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-4">
              Directory
            </span>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Specialized Services</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Selected Projects</a>
              </li>
              <li>
                <a href="#marketing-system" className="hover:text-white transition-colors">Marketing System</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Development Packages</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About the Studio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Transmit</a>
              </li>
            </ul>
          </div>

          {/* Communication & Social */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-4">
              Connect With Us
            </span>
            <p className="text-xs text-neutral-400 mb-4">
              Reach out directly on WhatsApp for real-time consultation or follow our official channels.
            </p>
            
            <div className="flex items-center gap-3 mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:bg-emerald-900/60 transition-colors"
                title="WhatsApp Channel"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                title={`GitHub: ${GITHUB_HANDLE}`}
                aria-label={`GitHub profile ${GITHUB_HANDLE}`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                title={`LinkedIn: ${LINKEDIN_DISPLAY}`}
                aria-label={`LinkedIn profile ${LINKEDIN_DISPLAY}`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                title={`Instagram: ${INSTAGRAM_HANDLE}`}
                aria-label={`Instagram profile ${INSTAGRAM_HANDLE}`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                title={`Email: ${CONTACT_EMAIL}`}
                aria-label={`Email ${CONTACT_EMAIL}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xs font-mono text-neutral-400 hover:text-cyan-300 transition-colors block mb-4 break-all"
            >
              {CONTACT_EMAIL}
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-cyan-400 transition-colors py-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Ayaan Digital. All rights reserved. Built with precision.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-neutral-300 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
