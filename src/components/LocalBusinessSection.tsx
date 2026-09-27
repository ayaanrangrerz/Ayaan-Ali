import React from 'react';
import { ShieldCheck, MessageCircle, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LocalBusinessProps {
  onOpenContact: () => void;
}

export const LocalBusinessSection: React.FC<LocalBusinessProps> = ({ onOpenContact }) => {
  const benefits = [
    {
      title: 'Permanent Credibility',
      desc: 'Customers cross-check your business before spending money. A verified website signals authority and trustworthiness instantly.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />
    },
    {
      title: '24/7 Service Directory',
      desc: 'No more repeatedly sending PDFs or manual price lists over WhatsApp. Your full offering is neatly indexed and accessible at any hour.',
      icon: <Clock className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'Google Search Discoverability',
      desc: 'Capture nearby buyers actively searching for your services in your city or locality, backed by structured local business markup.',
      icon: <MapPin className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Direct WhatsApp & Phone Inquiries',
      desc: '1-tap action buttons that connect interested prospects immediately to your phone without forcing them to manually copy numbers.',
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="relative py-24 bg-[#030712] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-cyan-500/25 bg-gradient-to-b from-[#061022] to-[#030814] shadow-2xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-3 block">
              10. For Growing & Local Businesses
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Your customers are already online. <br />
              <span className="text-cyan-400">Your business should be there too.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              If your business currently relies primarily on WhatsApp status updates, Instagram DMs, or word-of-mouth, you are missing customers who search Google or need reassurance before calling. A professional website transforms your reputation from a casual contact into an established enterprise.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{benefit.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Starting from just ₹1,499 with complete mobile responsiveness.</span>
            </div>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <span>Get Your Business Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
