import React from 'react';
import { content } from '../data/content';
import { Language } from '../types';
import { ShieldCheck, Lock, EyeOff, AlertOctagon } from 'lucide-react';

interface BenefitsAndSafetyProps {
  lang: Language;
}

export const BenefitsAndSafety: React.FC<BenefitsAndSafetyProps> = ({ lang }) => {
  const t = content[lang];
  const safetyData = t.safetyTips;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <AlertOctagon className="w-5 h-5 text-rose-600" />;
      case 1:
        return <EyeOff className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Lock className="w-5 h-5 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="safety-tips" className="scroll-mt-24 my-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
          8
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {safetyData.title}
        </h2>
      </div>

      <p className="text-slate-700 text-base leading-relaxed mb-6">
        {lang === 'hi' 
          ? 'आधार और मोबाइल नंबर अत्यंत संवेदनशील व्यक्तिगत पहचान हैं। धोखाधड़ी और ऑनलाइन साइबर फ्रॉड से बचने के लिए इन 4 सुरक्षा नियमों का हमेशा पालन करें:' 
          : 'Aadhaar and your registered mobile number are sensitive personal credentials. Always follow these 4 cyber safety guidelines to protect against scams:'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {safetyData.tips.map((tip, idx) => (
          <div 
            key={idx}
            className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                {getIcon(idx)}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  {tip.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
