import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090d16] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>OFFICIAL STUDIO POLICIES</span>
        </div>

        {type === 'privacy' ? (
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Privacy Policy</h3>
            <div className="space-y-4 text-xs text-neutral-300 leading-relaxed font-sans">
              <p>
                <strong>1. Data Collection:</strong> Ayaan Digital collects only essential business contact information (name, email, phone number, and project requirements) voluntarily submitted via our contact forms or direct WhatsApp inquiries.
              </p>
              <p>
                <strong>2. Usage:</strong> Your details are solely utilized to prepare project scopes, communicate updates, and deliver web development or marketing services. We never sell, lease, or distribute client contact data to third-party brokers.
              </p>
              <p>
                <strong>3. Confidentiality:</strong> All proprietary business concepts, designs, credentials, and assets shared during project execution are held under strict professional confidentiality.
              </p>
              <p>
                <strong>4. Analytics:</strong> Standard anonymous web performance metrics (e.g., page views and device viewport statistics) may be collected to guarantee interface speed and accessibility.
              </p>
              <p>
                <strong>5. Inquiries & Data Rights:</strong> For any privacy questions, data deletion requests, or formal inquiries, email us directly at <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-400 hover:underline font-mono">{CONTACT_EMAIL}</a>.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Terms of Service</h3>
            <div className="space-y-4 text-xs text-neutral-300 leading-relaxed font-sans">
              <p>
                <strong>1. Transparent Scope:</strong> Each web development or marketing project is governed by the specific deliverables outlined in your selected package or custom written statement of work.
              </p>
              <p>
                <strong>2. Milestone Payments:</strong> Development begins upon agreed advance confirmation. Final source assets, custom domain mappings, and production server transfers are finalized upon milestone completion.
              </p>
              <p>
                <strong>3. Client Deliverables:</strong> Clients are responsible for providing authentic business descriptions, logos, and service information in a timely manner to maintain agreed timeline targets.
              </p>
              <p>
                <strong>4. Truth in Advertising:</strong> Ayaan Digital designs campaigns that adhere to Google Ads and Meta advertising policies. We do not make fraudulent claims of guaranteed sales or artificial search rankings.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
