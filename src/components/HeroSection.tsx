import React from 'react';
import { Calendar, Clock, UserCheck, ExternalLink, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
import { content } from '../data/content';
import { Language } from '../types';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="hero" aria-labelledby="main-heading" className="pt-6 pb-4">
      {/* Top Tag / Pill */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          {t.badge}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          100% Free Verification
        </span>
      </div>

      {/* Main H1 Title - Highly SEO Optimized */}
      <h1 
        id="main-heading"
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug lg:leading-tight mb-4"
      >
        {t.title}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal max-w-4xl">
        {t.subtitle}
      </p>

      {/* Article Meta Details (SEO Author, Date, Reading Time) */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-5 py-3 border-y border-slate-200 text-xs sm:text-sm text-slate-600 mb-6 bg-slate-50/70 px-4 rounded-xl">
        <div className="flex items-center gap-1.5 font-medium text-slate-800">
          <UserCheck className="w-4 h-4 text-blue-600" />
          <span>{t.author}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span>{lang === 'hi' ? 'अपडेट:' : 'Updated:'} <strong>{t.updatedDate}</strong></span>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-slate-400" />
          <span>{t.readingTime}</span>
        </div>

        <div className="ml-auto hidden lg:flex items-center gap-1 text-blue-700 font-semibold text-xs">
          <a 
            href="https://myaadhaar.uidai.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <span>myaadhaar.uidai.gov.in</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {t.quickStats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-2xs text-center hover:border-blue-200 transition-colors"
          >
            <p className="text-xs text-slate-500 font-medium mb-1">{stat.label}</p>
            <p className="text-sm sm:text-base font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Crucial Security Notice Box */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-6 shadow-2xs">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <h2 className="text-sm font-bold text-amber-950 mb-1">
              {lang === 'hi' ? 'जरूरी सूचना (Privacy & Security Notice)' : 'Important Privacy Notice'}
            </h2>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              {t.officialPortalNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
