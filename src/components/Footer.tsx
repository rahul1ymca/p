import React from 'react';
import { content } from '../data/content';
import { Language } from '../types';
import { ShieldCheck, PhoneCall, Mail, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = content[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 text-sm mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-white font-extrabold text-base">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-amber-400 font-bold">
                आ
              </div>
              <span>{lang === 'hi' ? 'आधार सेवा मार्गदर्शिका' : 'Aadhaar Seva Guide'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {t.aboutText}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'hi' ? 'सटीक एवं अद्यतित (2025-2026 गाइड)' : 'Accurate & Updated (2025-2026 Guide)'}</span>
            </div>
          </div>

          {/* Col 2: Official Helpline & Direct Portal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
              {lang === 'hi' ? 'आधिकारिक संपर्क एवं लिंक' : 'Official Contacts & Portals'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UIDAI Helpline: <a href="tel:1947" className="text-white hover:underline font-bold">1947</a> (Toll-Free)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Email: <a href="mailto:help@uidai.gov.in" className="text-white hover:underline">help@uidai.gov.in</a></span>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  href="https://myaadhaar.uidai.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-300 hover:underline font-semibold"
                >
                  myaadhaar.uidai.gov.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  href="https://uidai.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-300 hover:underline font-semibold"
                >
                  uidai.gov.in
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Disclaimer */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
              {t.disclaimerTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed bg-slate-800/60 p-3.5 rounded-xl border border-slate-800">
              {t.disclaimerText}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.allRights}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 font-medium"
            aria-label="Back to top"
          >
            <span>{lang === 'hi' ? 'शीर्ष पर जाएं' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
