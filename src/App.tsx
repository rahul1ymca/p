import React, { useState } from 'react';
import { Language } from './types';
import { content } from './data/content';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TableOfContents } from './components/TableOfContents';
import { AadhaarIllustration } from './components/AadhaarIllustration';
import { StepGuide } from './components/StepGuide';
import { InteractiveChecker } from './components/InteractiveChecker';
import { HowToUpdateSection } from './components/HowToUpdateSection';
import { BenefitsAndSafety } from './components/BenefitsAndSafety';
import { FaqSection } from './components/FaqSection';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';
import { AdSlot } from './components/AdSlot';
import { Share2, ArrowUp, CheckCircle, ExternalLink } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  const t = content[lang];

  const handleShareClick = () => {
    // If Web Share API is available on mobile/supported browser, offer it
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: t.share.title,
        text: lang === 'hi' 
          ? 'आधार कार्ड में कौन सा मोबाइल नंबर लिंक है, 2 मिनट में ऐसे चेक करें - पूरी आसान गाइड'
          : 'How to check which mobile number is linked to Aadhaar card in 2 minutes - Complete Guide',
        url: window.location.href,
      }).catch((err) => {
        // Fallback to our custom share modal if cancelled or unsupported
        if (err.name !== 'AbortError') {
          setIsShareModalOpen(true);
        }
      });
    } else {
      setIsShareModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Header with Language Switcher and Share Button */}
      <Header 
        lang={lang} 
        onLanguageChange={setLang} 
        onShareClick={handleShareClick} 
      />

      {/* Main Single Page Blog Content Wrapped in Semantic Article for SEO */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <article className="bg-transparent">
          {/* Breadcrumb Navigation for SEO */}
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-slate-500 flex items-center gap-1.5 flex-wrap">
            <a href="#hero" className="hover:text-blue-700 transition-colors">
              {lang === 'hi' ? 'होम' : 'Home'}
            </a>
            <span>/</span>
            <span className="text-slate-400">
              {lang === 'hi' ? 'आधार सेवाएं' : 'Aadhaar Services'}
            </span>
            <span>/</span>
            <span className="font-semibold text-slate-700">
              {lang === 'hi' ? 'मोबाइल नंबर चेक 2026' : 'Mobile Number Check 2026'}
            </span>
          </nav>

          {/* Hero Section with H1, Author, Date, Quick Stats & Privacy Notice */}
          <HeroSection lang={lang} />

          {/* Table of Contents with Jump-on Smooth Scroll Links */}
          <TableOfContents 
            items={t.jumpLinks} 
            title={t.tocTitle} 
            lang={lang} 
          />

          {/* ========================================================================= */}
          {/* 📢 [AD SLOT 1 - TOP LEADERBOARD / शीर्ष विज्ञापन लगाने की जगह]             */}
          {/* 👉 निर्देश: आप यहाँ सीधे अपना AdSense Ad Unit या बैनर कोड पेस्ट कर सकते हैं। */}
          {/* ========================================================================= */}
          <AdSlot 
            slotId="top-leaderboard" 
            slotType="top-banner" 
            lang={lang} 
          />
          {/* ======================= [AD SLOT 1 END] ================================= */}

          {/* Visual Infographic Illustration with proper SEO attributes */}
          <AadhaarIllustration lang={lang} />

          {/* Core Step-by-Step Guide (Why check, Method 1, Method 2, Method 3) */}
          <StepGuide lang={lang} />

          {/* Interactive Decision Tool & Official Portal Launcher */}
          <InteractiveChecker lang={lang} />

          {/* ========================================================================= */}
          {/* 📢 [AD SLOT 2 - MID ARTICLE BANNER / मध्य भाग विज्ञापन लगाने की जगह]         */}
          {/* 👉 निर्देश: यहाँ आर्टिकल के बीच में विज्ञापन लगाने से सबसे ज्यादा क्लिक मिलते हैं। */}
          {/* ========================================================================= */}
          <AdSlot 
            slotId="mid-content" 
            slotType="mid-content" 
            lang={lang} 
          />
          {/* ======================= [AD SLOT 2 END] ================================= */}

          {/* How to Update or Link Mobile Number + Benefits */}
          <HowToUpdateSection lang={lang} />

          {/* Cyber Safety and Security Advisory */}
          <BenefitsAndSafety lang={lang} />

          {/* Frequently Asked Questions (Accordion + Schema) */}
          <FaqSection lang={lang} />

          {/* ========================================================================= */}
          {/* 📢 [AD SLOT 3 - BOTTOM BANNER / निचला विज्ञापन लगाने की जगह]                */}
          {/* 👉 निर्देश: अक्सर पूछे जाने वाले सवालों (FAQ) के ठीक बाद का विज्ञापन स्थान।    */}
          {/* ========================================================================= */}
          <AdSlot 
            slotId="bottom-banner" 
            slotType="bottom-banner" 
            lang={lang} 
          />
          {/* ======================= [AD SLOT 3 END] ================================= */}

          {/* Bottom Share Callout Box */}
          <div className="my-10 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
            <h3 className="text-lg sm:text-xl font-bold text-emerald-950 mb-2">
              {lang === 'hi' ? 'क्या यह जानकारी आपके लिए मददगार रही?' : 'Was this guide helpful to you?'}
            </h3>
            <p className="text-sm text-emerald-800/90 mb-5 max-w-xl mx-auto">
              {lang === 'hi' 
                ? 'अपने मित्रों, परिवार और रिश्तेदारों के साथ इसे शेयर करें ताकि वे भी बिना किसी परेशानी के अपने आधार में रजिस्टर्ड मोबाइल नंबर की जांच कर सकें।'
                : 'Share this with your friends and family so they can also easily check their linked Aadhaar mobile number without hassle.'}
            </p>
            <button
              id="bottom-share-cta"
              type="button"
              onClick={handleShareClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-lg focus:ring-4 focus:ring-emerald-200"
            >
              <Share2 className="w-4 h-4" />
              <span>{t.share.buttonText}</span>
            </button>
          </div>
        </article>
      </main>

      {/* Floating Action Share Button */}
      <aside aria-label="Quick actions" className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
        <button
          id="floating-share-btn"
          type="button"
          onClick={handleShareClick}
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          title={lang === 'hi' ? 'शेयर करें' : 'Share'}
          aria-label={lang === 'hi' ? 'इस गाइड को शेयर करें' : 'Share this guide'}
        >
          <Share2 className="w-5 h-5" />
        </button>
      </aside>

      {/* Share Modal Dialog */}
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        lang={lang} 
      />

      {/* Comprehensive Footer with Helplines & Disclaimers */}
      <Footer lang={lang} />
    </div>
  );
}
