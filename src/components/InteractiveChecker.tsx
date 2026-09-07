import React, { useState } from 'react';
import { content } from '../data/content';
import { Language } from '../types';
import { 
  HelpCircle, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle,
  Sparkles,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

interface InteractiveCheckerProps {
  lang: Language;
}

export const InteractiveChecker: React.FC<InteractiveCheckerProps> = ({ lang }) => {
  const t = content[lang].interactiveChecker;
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | 'lost'>('yes');

  // Simulation test state
  const [simAadhaar, setSimAadhaar] = useState('');
  const [simMobile, setSimMobile] = useState('');
  const [simResult, setSimResult] = useState<string | null>(null);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simAadhaar || simAadhaar.replace(/\s/g, '').length < 12) {
      setSimResult(lang === 'hi' ? 'कृपया 12 अंकों का आधार नंबर दर्ज करें' : 'Please enter a 12-digit Aadhaar number');
      return;
    }
    if (!simMobile || simMobile.length < 10) {
      setSimResult(lang === 'hi' ? 'कृपया 10 अंकों का मोबाइल नंबर दर्ज करें' : 'Please enter a 10-digit mobile number');
      return;
    }

    // Educational prompt
    setSimResult(
      lang === 'hi'
        ? `यह केवल एक शैक्षणिक डेमो है! वास्तविक सत्यापन के लिए UIDAI आधिकारिक पोर्टल 'myaadhaar.uidai.gov.in' पर जाएं। आपका इनपुट: आधार (XXXX-XXXX-${simAadhaar.slice(-4)}), मोबाइल (******${simMobile.slice(-4)})`
        : `This is an educational demo! For real verification, visit the official UIDAI portal 'myaadhaar.uidai.gov.in'. Entered: Aadhaar (XXXX-XXXX-${simAadhaar.slice(-4)}), Mobile (******${simMobile.slice(-4)})`
    );
  };

  return (
    <section id="interactive-tool" className="scroll-mt-24 my-12">
      <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-800">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 font-bold flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-5 h-5 text-slate-900" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              {lang === 'hi' ? 'स्मार्ट सहायक टूल' : 'Smart Assistant Tool'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t.title}
            </h2>
          </div>
        </div>

        <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
          {t.subtitle}
        </p>

        {/* Question & Options */}
        <div className="mb-6">
          <p className="text-sm sm:text-base font-semibold text-amber-300 mb-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>{t.q1}</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setSelectedOption('yes')}
              className={`p-4 rounded-xl text-left font-medium text-xs sm:text-sm transition-all border ${
                selectedOption === 'yes'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-bold ring-2 ring-amber-300/40'
                  : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span>{t.optYes}</span>
                {selectedOption === 'yes' && <CheckCircle className="w-4 h-4 text-slate-950" />}
              </div>
              <p className={`text-[11px] ${selectedOption === 'yes' ? 'text-slate-800' : 'text-slate-400'}`}>
                {lang === 'hi' ? 'सीधे नंबर चेक करें' : 'Direct check'}
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedOption('no')}
              className={`p-4 rounded-xl text-left font-medium text-xs sm:text-sm transition-all border ${
                selectedOption === 'no'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-bold ring-2 ring-amber-300/40'
                  : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span>{t.optNo}</span>
                {selectedOption === 'no' && <CheckCircle className="w-4 h-4 text-slate-950" />}
              </div>
              <p className={`text-[11px] ${selectedOption === 'no' ? 'text-slate-800' : 'text-slate-400'}`}>
                {lang === 'hi' ? 'अंतिम 3 अंक देखें' : 'View last 3 digits'}
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedOption('lost')}
              className={`p-4 rounded-xl text-left font-medium text-xs sm:text-sm transition-all border ${
                selectedOption === 'lost'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md font-bold ring-2 ring-amber-300/40'
                  : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span>{t.optLost}</span>
                {selectedOption === 'lost' && <CheckCircle className="w-4 h-4 text-slate-950" />}
              </div>
              <p className={`text-[11px] ${selectedOption === 'lost' ? 'text-slate-800' : 'text-slate-400'}`}>
                {lang === 'hi' ? 'नया नंबर लिंक कराएं' : 'Link new number'}
              </p>
            </button>
          </div>
        </div>

        {/* Dynamic Recommendation Box */}
        <div className="bg-slate-950/80 rounded-xl p-5 border border-blue-500/40 mb-6">
          <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>{t.recTitle}</span>
          </h3>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
            {selectedOption === 'yes' && t.recYes}
            {selectedOption === 'no' && t.recNo}
            {selectedOption === 'lost' && t.recLost}
          </p>

          {/* Action Button to Official Portals */}
          <div className="flex flex-wrap gap-3">
            {selectedOption === 'yes' && (
              <a
                href={t.officialVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold shadow-md transition-colors"
              >
                <span>{lang === 'hi' ? 'Verify Mobile Portal खोलें' : 'Open Verify Mobile Portal'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {selectedOption === 'no' && (
              <a
                href={t.officialValidityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-bold shadow-md transition-colors"
              >
                <span>{lang === 'hi' ? 'Check Aadhaar Validity खोलें' : 'Open Check Aadhaar Validity'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {selectedOption === 'lost' && (
              <a
                href="#how-to-update"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-sm font-bold shadow-md transition-colors"
              >
                <span>{lang === 'hi' ? 'नया नंबर जोड़ने की विधि देखें' : 'View How to Link New Number'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}

            <a
              href="https://myaadhaar.uidai.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 transition-colors"
            >
              <span>myAadhaar होमपेज</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Safe Educational Demo Practice Form */}
        <div className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-slate-200">
                {lang === 'hi' ? 'इंटरफ़ेस पूर्वाभ्यास (Interactive Educational Demo)' : 'Interface Educational Practice Demo'}
              </span>
            </div>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
              Demo Only
            </span>
          </div>

          <form onSubmit={handleSimulate} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">
                  {lang === 'hi' ? '12 अंकों का आधार नंबर' : '12-Digit Aadhaar Number'}
                </label>
                <input
                  type="text"
                  maxLength={14}
                  value={simAadhaar}
                  onChange={(e) => setSimAadhaar(e.target.value)}
                  placeholder="उदा. 1234 5678 9012"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1 font-medium">
                  {lang === 'hi' ? '10 अंकों का मोबाइल नंबर' : '10-Digit Mobile Number'}
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={simMobile}
                  onChange={(e) => setSimMobile(e.target.value)}
                  placeholder="उदा. 9876543210"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>{lang === 'hi' ? 'प्रक्रिया का नमूना देखें' : 'Test Practice Simulation'}</span>
              </button>

              {simResult && (
                <button
                  type="button"
                  onClick={() => {
                    setSimResult(null);
                    setSimAadhaar('');
                    setSimMobile('');
                  }}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{lang === 'hi' ? 'रीसेट करें' : 'Reset'}</span>
                </button>
              )}
            </div>
          </form>

          {simResult && (
            <div className="mt-3 p-3 bg-blue-950/80 border border-blue-700/60 rounded-lg text-xs text-blue-200 leading-relaxed">
              {simResult}
            </div>
          )}
        </div>

        {/* Bottom Safety Disclaimer */}
        <div className="mt-5 flex items-start gap-2 text-[11px] text-slate-400">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
          <p>{t.disclaimer}</p>
        </div>
      </div>
    </section>
  );
};
