import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Portfolio } from './components/Portfolio';
import { MarketingSystem } from './components/MarketingSystem';
import { DevWorkflow } from './components/DevWorkflow';
import { Pricing } from './components/Pricing';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutSection } from './components/AboutSection';
import { LocalBusinessSection } from './components/LocalBusinessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { ScrollReveal } from './components/ScrollReveal';
import { AiConsultantModal } from './components/AiConsultantModal';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER } from './data/content';

export default function App() {
  const [targetService, setTargetService] = useState<string>('Website Development');
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [aiConsultantOpen, setAiConsultantOpen] = useState(false);

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setTargetService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Ayaan Digital! I would like to inquire about website development & digital marketing services for my business.'
  )}`;

  return (
    <div className="min-h-screen bg-[#030712] text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar 
        onOpenContact={() => handleOpenContactWithService()} 
        onOpenAiConsultant={() => setAiConsultantOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section with 3D Core */}
        <Hero 
          onOpenContact={() => handleOpenContactWithService()} 
          onOpenAiConsultant={() => setAiConsultantOpen(true)}
        />

        {/* Section 1: Trust & Engineering Philosophy */}
        <ScrollReveal threshold={0.12} yOffset={28} duration={0.65}>
          <TrustIntro />
        </ScrollReveal>

        {/* Section 2: Specialized Services */}
        <ScrollReveal threshold={0.08} yOffset={28} duration={0.65}>
          <Services onSelectService={handleOpenContactWithService} />
        </ScrollReveal>

        {/* Section 3: Why Ayaan Digital */}
        <ScrollReveal threshold={0.1} yOffset={28} duration={0.65}>
          <WhyUs />
        </ScrollReveal>

        {/* Section 4: Featured Portfolio (Live Client vs Technical Systems) */}
        <ScrollReveal threshold={0.08} yOffset={28} duration={0.65}>
          <Portfolio />
        </ScrollReveal>

        {/* Section 5: Acquisition Marketing Pipeline */}
        <ScrollReveal threshold={0.1} yOffset={28} duration={0.65}>
          <MarketingSystem />
        </ScrollReveal>

        {/* Section 6: Development Workflow */}
        <ScrollReveal threshold={0.1} yOffset={28} duration={0.65}>
          <DevWorkflow />
        </ScrollReveal>

        {/* Section 7: Pricing Packages */}
        <ScrollReveal threshold={0.08} yOffset={28} duration={0.65}>
          <Pricing 
            onSelectPlan={handleOpenContactWithService} 
            onOpenAiConsultant={() => setAiConsultantOpen(true)}
          />
        </ScrollReveal>

        {/* Section 8: Process Timeline */}
        <ScrollReveal threshold={0.1} yOffset={28} duration={0.65}>
          <ProcessTimeline />
        </ScrollReveal>

        {/* Section 9: About / Founder */}
        <ScrollReveal threshold={0.1} yOffset={28} duration={0.65}>
          <AboutSection />
        </ScrollReveal>

        {/* Section 10: Local Business Focus */}
        <ScrollReveal threshold={0.1} yOffset={28} duration={0.65}>
          <LocalBusinessSection onOpenContact={() => handleOpenContactWithService()} />
        </ScrollReveal>

        {/* Section 11: Contact / Transmit */}
        <ScrollReveal threshold={0.08} yOffset={28} duration={0.65}>
          <ContactSection initialService={targetService} />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModal(type)} />

      {/* Legal Dialogs */}
      <LegalModals type={legalModal} onClose={() => setLegalModal(null)} />

      {/* AI Consultation Multi-Turn Assistant */}
      <AiConsultantModal
        isOpen={aiConsultantOpen}
        onOpen={() => setAiConsultantOpen(true)}
        onClose={() => setAiConsultantOpen(false)}
      />

      {/* Direct WhatsApp Action on Bottom-Left */}
      <aside aria-label="Direct messaging contact" className="fixed bottom-6 left-6 z-40">
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 border border-emerald-300/30"
          aria-label="Direct WhatsApp Message"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
