import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Share2, Globe, ShieldCheck, PhoneCall } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onShareClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onShareClick
}) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Reading Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-amber-500 via-blue-700 to-emerald-600 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs px-4 py-1.5 font-medium flex items-center justify-between">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[11px] font-semibold border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              {lang === 'hi' ? 'सत्यापित नागरिक गाइड 2026' : 'Verified Citizen Guide 2026'}
            </span>
            <span className="hidden sm:inline text-slate-300">
              {lang === 'hi' ? 'myAadhaar आधिकारिक पोर्टल नियमों के अनुसार तैयार' : 'Prepared as per myAadhaar Official Portal Norms'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a 
              href="tel:1947" 
              className="hover:text-white flex items-center gap-1 transition-colors"
              title="UIDAI Toll-Free Helpline"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>UIDAI Helpline: <strong>1947</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo & Site Title */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 flex items-center justify-center text-white font-bold shadow-md ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all">
            <span className="text-amber-400 text-lg">आ</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight font-sans">
                आधार सेवा गाइड
              </span>
              <span className="hidden md:inline-block text-[10px] uppercase font-bold tracking-widest bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded border border-blue-200">
                Aadhaar Info
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              {lang === 'hi' ? 'मोबाइल नंबर लिंकिंग व सत्यापन मार्गदर्शिका' : 'Mobile Number Verification & Linking Guide'}
            </p>
          </div>
        </a>

        {/* Controls: Language Switch & Share */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch Button */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-300 text-xs font-semibold">
            <button
              id="lang-btn-hi"
              type="button"
              onClick={() => onLanguageChange('hi')}
              className={`px-2.5 py-1.5 rounded-md transition-all flex items-center gap-1 ${
                lang === 'hi'
                  ? 'bg-blue-700 text-white shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
              title="हिंदी में पढ़ें"
            >
              <span>हिंदी</span>
            </button>
            <button
              id="lang-btn-en"
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1.5 rounded-md transition-all flex items-center gap-1 ${
                lang === 'en'
                  ? 'bg-blue-700 text-white shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
              title="Read in English"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>English</span>
            </button>
          </div>

          {/* Share Button */}
          <button
            id="header-share-button"
            type="button"
            onClick={onShareClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium shadow-xs transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            aria-label="Share this guide"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-semibold">
              {lang === 'hi' ? 'शेयर करें' : 'Share'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
