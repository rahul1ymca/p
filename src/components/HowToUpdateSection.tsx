import React from 'react';
import { content } from '../data/content';
import { Language } from '../types';
import { 
  Building2, 
  Truck, 
  AlertTriangle, 
  CheckCircle, 
  Coins, 
  FileText, 
  ExternalLink 
} from 'lucide-react';

interface HowToUpdateSectionProps {
  lang: Language;
}

export const HowToUpdateSection: React.FC<HowToUpdateSectionProps> = ({ lang }) => {
  const t = content[lang];
  const updateData = t.howToUpdate;

  return (
    <div className="space-y-12 my-12">
      {/* 6. HOW TO UPDATE / LINK MOBILE NUMBER */}
      <section id="how-to-update" className="scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
            6
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {updateData.title}
          </h2>
        </div>

        {/* Warning Alert */}
        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl mb-6 text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <p>{updateData.warning}</p>
          </div>
        </div>

        {/* Two Options: Aadhaar Seva Kendra vs IPPB Postman Doorstep */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Option A: ASK */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {updateData.options[0].badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {updateData.options[0].title}
              </h3>

              <div className="flex flex-wrap gap-2 my-3 text-xs">
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-semibold px-2.5 py-1 rounded border border-amber-200">
                  <Coins className="w-3.5 h-3.5 text-amber-600" />
                  {updateData.options[0].fee}
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-900 font-semibold px-2.5 py-1 rounded border border-emerald-200">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  {updateData.options[0].docs}
                </span>
              </div>

              <ol className="space-y-2 mt-4 text-sm text-slate-700">
                {updateData.options[0].steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <a
                href="https://appointments.uidai.gov.in/easearch.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 hover:underline"
              >
                <span>{lang === 'hi' ? 'नजदीकी आधार केंद्र खोजें (Locate ASK)' : 'Locate Nearest Enrolment Center'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Option B: IPPB Postman Doorstep Service */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {updateData.options[1].badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {updateData.options[1].title}
              </h3>

              <div className="flex flex-wrap gap-2 my-3 text-xs">
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 font-semibold px-2.5 py-1 rounded border border-amber-200">
                  <Coins className="w-3.5 h-3.5 text-amber-600" />
                  {updateData.options[1].fee}
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-900 font-semibold px-2.5 py-1 rounded border border-emerald-200">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  {updateData.options[1].docs}
                </span>
              </div>

              <ol className="space-y-2 mt-4 text-sm text-slate-700">
                {updateData.options[1].steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <a
                href="https://www.ippbonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
              >
                <span>{lang === 'hi' ? 'IPPB ऑनलाइन पोर्टल पर डोरस्टेप अनुरोध करें' : 'Request IPPB Doorstep Service'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENEFITS SECTION */}
      <section id="benefits" className="scroll-mt-24">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
            7
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {t.jumpLinks[6].title.replace(/^\d+\.\s*/, '')}
          </h2>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-6">
          {lang === 'hi' 
            ? 'आधार में मोबाइल नंबर जुड़ा होने से आपको कई सरकारी और निजी डिजिटल सेवाओं का घर बैठे तत्काल लाभ मिलता है:' 
            : 'Having an active mobile number linked with your Aadhaar enables immediate digital access to critical services:'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {lang === 'hi' ? 'e-Aadhaar डाउनलोड' : 'Instant e-Aadhaar'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi' 
                ? 'आधार खो जाने पर आप myAadhaar पोर्टल से तुरंत नया ओरिजिनल डिजिटल आधार डाउनलोड कर सकते हैं।' 
                : 'Instantly download your authentic digital e-Aadhaar PDF at any time without visiting any center.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {lang === 'hi' ? 'घर बैठे एड्रेस अपडेट' : 'Online Address Change'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi' 
                ? 'पता बदलने पर आपको केंद्र जाने की जरूरत नहीं होती, OTP द्वारा ऑनलाइन एड्रेस अपडेट हो जाता है।' 
                : 'Update demographic address online securely through OTP verification from the comfort of home.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm mb-3">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {lang === 'hi' ? 'डिजिलॉकर व सरकारी योजनाएं' : 'DigiLocker & Schemes'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi' 
                ? 'डिजिलॉकर, PM किसान, छात्रवृत्ति, और पेंशन जैसी सेवाओं में e-KYC सेकंडों में पूर्ण हो जाती है।' 
                : 'Seamless e-KYC access for DigiLocker, PM Kisan, government pensions, scholarships and DBT subsidies.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm mb-3">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">
              {lang === 'hi' ? 'बायोमेट्रिक सुरक्षा लॉक' : 'Biometric Lock Control'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi' 
                ? 'अपने फिंगरप्रिंट और आइरिस डेटा को मोबाइल OTP के जरिए कभी भी लॉक या अनलॉक करने की स्वतंत्रता।' 
                : 'Lock or unlock your Aadhaar biometric records via mobile OTP to prevent unauthorized fraudulent misuse.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
