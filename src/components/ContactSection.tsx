import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle, AlertCircle, Sparkles, PhoneCall, Instagram, Mail } from 'lucide-react';
import { ContactFormData } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: initialService || 'Website Development',
    budget: '₹3,499 (Professional)',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const serviceOptions = [
    'Website Development',
    'Digital Marketing',
    'Google Ads',
    'Meta Ads',
    'Landing Page',
    'AI Solution',
    'Website Optimization',
    'Basic Package (₹1,499)',
    'Professional Package (₹3,499)',
    'Advanced Package (₹6,999)',
    'Full Platform (₹9,999+)',
    'Custom Business Project'
  ];

  const budgetOptions = [
    '₹1,499 (Basic Package)',
    '₹3,499 (Professional Package)',
    '₹6,999 (Advanced Package)',
    '₹9,999+ (Full Platform)',
    'Custom Budget (Let us discuss)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either your WhatsApp/Phone number or Email.');
      return;
    }

    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = `*New Project Inquiry — Ayaan Digital*
• *Name:* ${formData.name || 'Not specified'}
• *Business:* ${formData.businessName || 'Not specified'}
• *Phone/Email:* ${formData.phone || formData.email || 'Not specified'}
• *Service Required:* ${formData.service}
• *Target Budget:* ${formData.budget}
• *Project Notes:* ${formData.message || 'Ready to discuss details.'}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#02050e] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Directives */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              11. Direct Transmission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
              LET'S BUILD SOMETHING THAT MATTERS.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Tell us about your business, the services you require, and your target timeline. We will review your requirements and provide an exact technical scope and transparent quotation.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel border border-emerald-500/30 hover:border-emerald-500/60 transition-colors flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Immediate WhatsApp Chat</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {WHATSAPP_DISPLAY}
                  </div>
                </div>
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="p-4 rounded-xl glass-panel border border-cyan-500/30 hover:border-cyan-500/60 transition-colors flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Direct Phone Call</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {WHATSAPP_DISPLAY}
                  </div>
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel border border-pink-500/20 hover:border-pink-500/50 transition-colors flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Official Instagram</div>
                  <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
                    {INSTAGRAM_HANDLE}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Project Inquiry — Ayaan Digital')}`}
                className="p-4 rounded-xl glass-panel border border-white/[0.08] hover:border-cyan-500/40 transition-colors flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase">Studio Email Inquiries</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-mono truncate group-hover:text-cyan-300 transition-colors">
                    {CONTACT_EMAIL}
                  </div>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 text-xs font-mono text-neutral-400">
              ⚡ Typical response window: Within 2 to 4 business hours. No spam, guaranteed confidentiality.
            </div>
          </div>

          {/* Right Column: High-Converting Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-2xl glass-panel border border-cyan-500/30 bg-[#070d19] shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Initialized!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mb-6">
                    Thank you, {formData.name}. We have recorded your project parameters for <strong className="text-cyan-300">{formData.service}</strong>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Transmit Instantly on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-medium"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Electricals"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@business.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase">
                        Anticipated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-neutral-900 text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5 uppercase">
                      Project Details / Specific Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what your business does and what you want the new website or campaign to achieve..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-neutral-950 text-xs font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Start My Project</span>
                    </button>

                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:w-auto py-3 px-5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
