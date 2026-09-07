import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, Smartphone } from 'lucide-react';

interface AadhaarIllustrationProps {
  lang: 'hi' | 'en';
}

export const AadhaarIllustration: React.FC<AadhaarIllustrationProps> = ({ lang }) => {
  return (
    <figure 
      className="my-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-4 sm:p-7 shadow-xl border border-slate-800 overflow-hidden relative"
      aria-label={lang === 'hi' ? 'आधार कार्ड और मोबाइल नंबर सत्यापन ग्राफ़िक' : 'Aadhaar Card and Mobile Number Verification Graphic'}
    >
      {/* Decorative ambient elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header of infographic */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-100">
              {lang === 'hi' ? 'UIDAI myAadhaar मोबाइल सत्यापन इन्फोग्राफिक' : 'UIDAI myAadhaar Mobile Verification Infographic'}
            </h3>
            <p className="text-[11px] text-slate-400">
              {lang === 'hi' ? 'आधिकारिक पोर्टल सुरक्षा मानक और परिणाम स्वरूप' : 'Official Portal Security Standards & Result Formats'}
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {lang === 'hi' ? '100% सुरक्षित' : '100% Secure'}
        </span>
      </div>

      {/* Two columns: Simulated Aadhaar Card on Left, and Verification Screen on Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {/* Card 1: Aadhaar Card Specimen Mockup */}
        <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/60 shadow-inner flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Tricolor Ribbon Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full mb-3" />

          <div>
            <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
              <span className="font-semibold tracking-wider text-amber-400">
                {lang === 'hi' ? 'भारत सरकार / Govt. of India' : 'Govt. of India'}
              </span>
              <span className="text-[11px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">
                {lang === 'hi' ? 'पहचान पत्र' : 'Unique ID'}
              </span>
            </div>

            <div className="flex items-center gap-3 my-3">
              {/* Photo placeholder */}
              <div className="w-14 h-16 rounded bg-slate-700 border border-slate-600 flex flex-col items-center justify-center text-slate-400 shrink-0">
                <span className="text-[10px] text-center font-medium">
                  {lang === 'hi' ? 'फोटो' : 'Photo'}
                </span>
              </div>

              {/* Resident details specimen */}
              <div className="space-y-1 text-xs text-slate-300">
                <p className="font-bold text-white text-sm">
                  {lang === 'hi' ? 'नागरिक का नाम (Resident Name)' : 'Resident Name'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {lang === 'hi' ? 'जन्म तिथि / DOB: 01/01/1990' : 'DOB: 01/01/1990'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {lang === 'hi' ? 'लिंग / Gender: MALE' : 'Gender: MALE'}
                </p>
              </div>
            </div>

            {/* Masked Aadhaar Number */}
            <div className="bg-slate-900/90 rounded-lg p-2.5 text-center border border-slate-700/80 my-2">
              <p className="text-[10px] text-slate-400 mb-0.5">
                {lang === 'hi' ? 'आधार संख्या (12 अंक)' : 'Aadhaar Number (12 Digits)'}
              </p>
              <p className="text-base sm:text-lg font-mono font-bold tracking-widest text-amber-300">
                XXXX  XXXX  1234
              </p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-slate-700/60 pt-2.5 mt-2 flex items-center justify-between">
            <span>{lang === 'hi' ? 'मेरा आधार, मेरी पहचान' : 'Mera Aadhaar, Meri Pehchan'}</span>
            <span className="text-emerald-400 font-semibold">{lang === 'hi' ? 'सक्रिय (Active)' : 'Active'}</span>
          </div>
        </div>

        {/* Card 2: Verification Portal Result Specimen */}
        <div className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/60 shadow-inner flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-300 font-semibold mb-3">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>
                {lang === 'hi' ? 'myAadhaar पोर्टल लाइव सत्यापन परिणाम' : 'myAadhaar Live Verification Outcome'}
              </span>
            </div>

            {/* Success State Specimen */}
            <div className="bg-emerald-950/70 border border-emerald-600/40 rounded-lg p-3 mb-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-200">
                    {lang === 'hi' ? 'यदि नंबर लिंक है (Verified):' : 'If Number is Linked (Verified):'}
                  </p>
                  <p className="text-[11px] text-emerald-300 font-mono mt-0.5">
                    "The Mobile number you have entered is already verified with our records."
                  </p>
                </div>
              </div>
            </div>

            {/* Masked Last 3 Digits Specimen */}
            <div className="bg-blue-950/60 border border-blue-600/30 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-blue-200">
                    {lang === 'hi' ? 'आधार वैधता में दिखने वाला रूप (Masked Format):' : 'Validity Check Masked Format:'}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-[11px] font-mono bg-slate-900/80 px-2 py-1 rounded text-amber-300 border border-slate-700">
                    <span>Mobile:</span>
                    <strong className="text-emerald-400 tracking-wider">******891</strong>
                    <span className="text-slate-400 text-[10px]">({lang === 'hi' ? 'अंतिम 3 अंक' : 'Last 3 digits'})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-amber-300/90 mt-3 pt-2.5 border-t border-slate-700/60">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>
              {lang === 'hi' 
                ? 'सुरक्षा नियम: UIDAI कभी भी स्क्रीन पर पूरा नंबर नहीं दिखाता।' 
                : 'Security Rule: Full 10 digits are never displayed on screen.'}
            </span>
          </div>
        </div>
      </div>

      {/* SEO Figcaption */}
      <figcaption className="text-[11px] text-slate-400 text-center mt-4 pt-2 border-t border-slate-800">
        {lang === 'hi' 
          ? 'चित्र 1.1: आधार कार्ड मोबाइल नंबर वेरिफिकेशन और यूआईडीएआई myAadhaar सुरक्षा इंटरफ़ेस (चित्र स्रोत: UIDAI सार्वजनिक मानक)' 
          : 'Figure 1.1: Aadhaar Card Mobile Number Verification & UIDAI myAadhaar Security Interface Standards'}
      </figcaption>
    </figure>
  );
};
