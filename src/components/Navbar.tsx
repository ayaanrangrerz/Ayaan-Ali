import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Bot } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (prefillService?: string) => void;
  onOpenAiConsultant?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenAiConsultant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'System', href: '#marketing-system' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group text-white tracking-tight"
            aria-label="Ayaan Digital Homepage"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              AYAAN DIGITAL
            </span>
          </a>

          {/* Zone 2: Clean 4–6 text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-2.5">
            {onOpenAiConsultant && (
              <button
                onClick={onOpenAiConsultant}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all"
                title="Open AI Project Consultant"
              >
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden lg:inline">AI Consultant</span>
              </button>
            )}

            <button
              onClick={() => onOpenContact()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-md shadow-cyan-500/20 transition-all hover:shadow-cyan-500/35 hover:-translate-y-0.5 whitespace-nowrap active:translate-y-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 border-b border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 text-neutral-200 hover:text-cyan-400 border-b border-neutral-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500 font-mono">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 text-neutral-200 hover:text-cyan-400 border-b border-neutral-800/60 transition-colors flex items-center justify-between"
            >
              <span>Contact</span>
              <span className="text-xs text-neutral-500 font-mono">→</span>
            </a>
          </nav>

          <div className="flex flex-col gap-3 mt-6">
            {onOpenAiConsultant && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiConsultant();
                }}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 rounded-lg transition-all text-sm"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Launch AI Consultant</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 px-4 text-center font-semibold text-neutral-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/25 transition-all text-sm"
            >
              Start a Project
            </button>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 text-center font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg text-sm transition-colors"
            >
              Explore Packages from ₹1,499
            </a>
          </div>
        </div>
      )}
    </>
  );
};
