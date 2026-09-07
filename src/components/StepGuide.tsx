import React from 'react';
import { content } from '../data/content';
import { Language } from '../types';
import { AdSlot } from './AdSlot';
import { 
  CheckCircle2, 
  XCircle, 
  Shield, 
  ArrowRight, 
  Lightbulb, 
  Smartphone, 
  ExternalLink,
  Info
} from 'lucide-react';

interface StepGuideProps {
  lang: Language;
}

export const StepGuide: React.FC<StepGuideProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <div className="space-y-12">
      {/* 1. WHY CHECK SECTION */}
      <section id="why-check" className="scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
            1
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {t.whyCheckSection.title}
          </h2>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-6">
          {t.whyCheckSection.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.whyCheckSection.points.map((point, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. METHOD 1 SECTION */}
      <section id="method-1" className="scroll-mt-24">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
              2
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {t.method1.title}
            </h2>
          </div>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
            {t.method1.badge}
          </span>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-6">
          {t.method1.description}
        </p>

        {/* Step by Step Cards */}
        <div className="space-y-4 mb-8">
          {t.method1.steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {step.title}
                    </h3>
                    {step.badge && (
                      <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-2">
                    {step.description}
                  </p>
                  {step.tip && (
                    <div className="flex items-center gap-2 text-xs font-medium text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60 mt-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{step.tip}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Two Result Scenarios */}
        <div className="bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600" />
            <span>{lang === 'hi' ? 'स्क्रीन पर आने वाले 2 संभावित परिणाम:' : 'Two Possible Screen Results:'}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Success Result Box */}
            <div className="bg-white p-4 sm:p-5 rounded-lg border-2 border-emerald-500/80 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>{t.method1.results[0].badge}</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded text-xs font-mono text-emerald-900 font-semibold mb-3 border border-emerald-200">
                "{t.method1.results[0].message}"
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>{lang === 'hi' ? 'अर्थ:' : 'Meaning:'}</strong> {t.method1.results[0].meaning}
              </p>
            </div>

            {/* Error / Mismatch Result Box */}
            <div className="bg-white p-4 sm:p-5 rounded-lg border-2 border-rose-400 shadow-2xs">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm mb-2">
                <XCircle className="w-5 h-5 text-rose-600" />
                <span>{t.method1.results[1].badge}</span>
              </div>
              <div className="bg-rose-50 p-3 rounded text-xs font-mono text-rose-900 font-semibold mb-3 border border-rose-200">
                "{t.method1.results[1].message}"
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>{lang === 'hi' ? 'अर्थ:' : 'Meaning:'}</strong> {t.method1.results[1].meaning}
              </p>
            </div>
          </div>

          <div className="mt-5 text-center">
            <a
              href="https://myaadhaar.uidai.gov.in/verify-email-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold shadow-xs transition-colors"
            >
              <span>{lang === 'hi' ? 'myAadhaar पर मोबाइल नंबर वेरिफाई करें' : 'Verify Mobile on myAadhaar Portal'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 📢 [IN-ARTICLE AD SLOT / लेख के बीच में विज्ञापन लगाने की जगह]              */}
      {/* 👉 निर्देश: विधि 1 और विधि 2 के बीच में यहाँ अपना AdSense Ad Unit पेस्ट कर सकते हैं। */}
      {/* ========================================================================= */}
      <AdSlot 
        slotId="in-article-methods" 
        slotType="in-article" 
        lang={lang} 
      />
      {/* ======================= [IN-ARTICLE AD END] ============================= */}

      {/* 3. METHOD 2 SECTION */}
      <section id="method-2" className="scroll-mt-24">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
              3
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {t.method2.title}
            </h2>
          </div>
          <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
            {t.method2.badge}
          </span>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-6">
          {t.method2.description}
        </p>

        <div className="space-y-4 mb-6">
          {t.method2.steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Fields Mock Table */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
            {lang === 'hi' ? 'स्क्रीन पर दिखने वाले विवरण का नमूना:' : 'Sample Verification Details on Screen:'}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 text-xs font-semibold">
                  <th className="p-3">फ़ील्ड (Field)</th>
                  <th className="p-3">नमूना विवरण (Sample Value)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {t.method2.displayFields.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-3 font-medium text-slate-900">{f.label}</td>
                    <td className="p-3 font-mono text-slate-700">
                      {f.label.toLowerCase().includes('mobile') ? (
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {f.example}
                        </span>
                      ) : (
                        f.example
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 font-medium">
            <strong>{lang === 'hi' ? 'महत्वपूर्ण ध्यान दें:' : 'Important Note:'}</strong> {t.method2.note}
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://myaadhaar.uidai.gov.in/check-aadhaar-validity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold shadow-xs transition-colors"
            >
              <span>{lang === 'hi' ? 'Check Aadhaar Validity पोर्टल खोलें' : 'Open Check Aadhaar Validity Portal'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. METHOD 3 SECTION */}
      <section id="method-3" className="scroll-mt-24">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
              4
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {t.method3.title}
            </h2>
          </div>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200">
            {t.method3.badge}
          </span>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-6">
          {t.method3.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.method3.steps.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2 block">
                  {item.step}
                </span>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Play Store & App Store</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
