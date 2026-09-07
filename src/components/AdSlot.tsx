import React from 'react';
import { Language } from '../types';

interface AdSlotProps {
  /**
   * Unique ID or location identifier for this ad slot
   */
  slotId: string;
  /**
   * Type of slot: 'top-banner' | 'in-article' | 'mid-content' | 'bottom-banner'
   */
  slotType?: 'top-banner' | 'in-article' | 'mid-content' | 'bottom-banner';
  /**
   * Current language for placeholder label
   */
  lang?: Language;
  /**
   * Optional custom class
   */
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  slotType = 'in-article',
  lang = 'hi',
  className = '',
}) => {
  /* ==========================================================================
     ⭐⭐ [1. GOOGLE ADSENSE या ADVERTISMENT CODE यहाँ पेस्ट करें] ⭐⭐
     
     अगर आपके पास Google AdSense या किसी अन्य Ad नेटवर्क का कोड है, 
     तो आप उसे नीचे दिए गए स्थान में पेस्ट कर सकते हैं।
     
     👉 उदाहरण के लिए (AdSense Example):
     
     return (
       <div className={`my-6 text-center ${className}`} id={`ad-container-${slotId}`}>
         <div className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-1">
           {lang === 'hi' ? 'विज्ञापन' : 'Advertisement'}
         </div>
         
         <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
       </div>
     );
     ========================================================================== */

  // अलग-अलग स्लॉट के अनुसार स्टाइलिंग और आकार
  const minHeightClass = 
    slotType === 'top-banner' ? 'min-h-[90px] sm:min-h-[110px]' :
    slotType === 'in-article' ? 'min-h-[140px] sm:min-h-[180px]' :
    slotType === 'mid-content' ? 'min-h-[120px] sm:min-h-[160px]' :
    'min-h-[100px] sm:min-h-[130px]';

  return (
    <div 
      className={`my-6 sm:my-8 text-center w-full overflow-hidden ${className}`} 
      id={`ad-slot-${slotId}`}
      aria-label={lang === 'hi' ? 'विज्ञापन स्थान' : 'Advertisement Space'}
    >
      {/* AdSense नीति (Policy) के तहत "Advertisement" या "विज्ञापन" लेबल लगाना अनिवार्य होता है */}
      <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1 flex items-center justify-center gap-2">
        <span className="w-6 h-px bg-slate-200"></span>
        <span>{lang === 'hi' ? 'विज्ञापन / ADVERTISEMENT' : 'ADVERTISEMENT'}</span>
        <span className="w-6 h-px bg-slate-200"></span>
      </div>

      {/* ======================================================================
          👇👇👇 [यहाँ नीचे अपना एड कोड (Ad Script / <ins> Tag) लगाएं] 👇👇👇
          PASTE YOUR AD CODE BELOW THIS LINE:
          ====================================================================== */}
      <div 
        className={`w-full ${minHeightClass} border border-dashed border-slate-300 bg-slate-50/80 rounded-xl flex flex-col items-center justify-center p-4 transition-colors hover:border-slate-400`}
      >
        <div className="flex items-center gap-2 text-slate-500 font-bold text-xs sm:text-sm mb-1">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>
            {lang === 'hi' 
              ? `विज्ञापन स्थान (${slotType.toUpperCase()})` 
              : `Ad Space (${slotType.toUpperCase()})`}
          </span>
        </div>
        
        <p className="text-[11px] sm:text-xs text-slate-400 max-w-md leading-relaxed text-center">
          {lang === 'hi' 
            ? 'यहाँ आप अपना Google AdSense कोड या कस्टम बैनर स्क्रिप्ट पेस्ट कर सकते हैं।'
            : 'You can paste your Google AdSense code or custom banner script here.'}
        </p>
        
        <div className="mt-2 text-[10px] font-mono text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded border border-slate-300/50">
          Slot ID: #{slotId} &bull; File: src/components/AdSlot.tsx
        </div>
      </div>
      {/* ======================================================================
          ☝️☝️☝️ [यहाँ ऊपर तक अपना एड कोड समाप्त करें] ☝️☝️☝️
          END OF AD CODE PLACEMENT AREA
          ====================================================================== */}
    </div>
  );
};
