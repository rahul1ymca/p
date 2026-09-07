import React, { useState } from 'react';
import { content } from '../data/content';
import { Language } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const t = content[lang];
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="scroll-mt-24 my-12" aria-labelledby="faq-heading">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
          9
        </span>
        <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल (Frequently Asked Questions)' : 'Frequently Asked Questions (FAQs)'}
        </h2>
      </div>

      <p className="text-slate-700 text-base leading-relaxed mb-6">
        {lang === 'hi' 
          ? 'आधार में मोबाइल नंबर चेक करने और जोड़ने को लेकर नागरिकों के सबसे आम सवालों के आधिकारिक व प्रमाणित जवाब:' 
          : 'Official and verified answers to the most common resident questions regarding Aadhaar mobile verification:'}
      </p>

      <div className="space-y-3">
        {t.faqs.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div 
              key={faq.id}
              className={`bg-white rounded-xl border transition-all ${
                isOpen ? 'border-blue-300 shadow-xs ring-1 ring-blue-100' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${
                    isOpen ? 'text-blue-600' : 'text-slate-400'
                  }`} />
                  <span>{faq.question}</span>
                </div>

                <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180 text-blue-600' : ''
                }`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 ml-8 sm:ml-9">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
