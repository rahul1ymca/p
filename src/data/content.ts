import { TocItem, FaqItem, StepItem } from '../types';

export const content = {
  hi: {
    badge: "2025-2026 आधिकारिक एवं नवीनतम जानकारी",
    title: "आधार कार्ड में कौन सा मोबाइल नंबर लिंक है कैसे चेक करें?",
    subtitle: "UIDAI के myAadhaar पोर्टल और mAadhaar ऐप द्वारा अपने पंजीकृत मोबाइल नंबर की जांच करने का सबसे आसान, सटीक और सुरक्षित स्टेप-बाय-स्टेप तरीका।",
    publishedDate: "15 जनवरी 2025",
    updatedDate: "मार्च 2026 (सत्यापित गाइड)",
    readingTime: "5 मिनट पढ़ने का समय",
    author: "आधार सेवा विशेषज्ञ टीम",
    officialPortalNotice: "महत्वपूर्ण नोट: UIDAI सुरक्षा कारणों से पूरा 10 अंकों का मोबाइल नंबर नहीं दिखाता। आप अंतिम 3 अंक देख सकते हैं या अपने नंबर को दर्ज करके पुष्टि (Verify) कर सकते हैं।",
    
    quickStats: [
      { label: "चेक करने का समय", value: "मात्र 2 मिनट" },
      { label: "जांच शुल्क", value: "₹0 (बिल्कुल मुफ्त)" },
      { label: "आधिकारिक वेबसाइट", value: "myaadhaar.uidai.gov.in" },
      { label: "हेल्पलाइन नंबर", value: "1947 (टोल फ्री)" },
    ],

    tocTitle: "सामग्री तालिका (Table of Contents)",
    jumpLinks: [
      { id: "why-check", title: "1. आधार में मोबाइल नंबर लिंक चेक करना क्यों जरूरी है?" },
      { id: "method-1", title: "2. विधि 1: 'Verify Mobile Number' से 100% सटीक जांच (अनुशंसित)" },
      { id: "method-2", title: "3. विधि 2: 'Check Aadhaar Validity' से अंतिम 3 अंक देखें" },
      { id: "method-3", title: "4. विधि 3: mAadhaar मोबाइल ऐप द्वारा जांचने का तरीका" },
      { id: "interactive-tool", title: "5. आधार मोबाइल लिंकिंग चेकर गाइड (इंटरएक्टिव टूल)" },
      { id: "how-to-update", title: "6. यदि मोबाइल नंबर लिंक नहीं है या खो गया है तो क्या करें?" },
      { id: "benefits", title: "7. आधार में मोबाइल नंबर लिंक होने के मुख्य फायदे" },
      { id: "safety-tips", title: "8. साइबर सुरक्षा और आधार सेफ्टी एडवाइजरी" },
      { id: "faqs", title: "9. अक्सर पूछे जाने वाले सवाल (FAQs)" }
    ] as TocItem[],

    whyCheckSection: {
      title: "आधार कार्ड में मोबाइल नंबर लिंक चेक करना क्यों जरूरी है?",
      intro: "आज के डिजिटल भारत में आधार कार्ड मात्र एक पहचान पत्र नहीं है, बल्कि यह सभी सरकारी और गैर-सरकारी वित्तीय सेवाओं की रीढ़ है। यदि आपके आधार में सही व सक्रिय मोबाइल नंबर लिंक नहीं है, तो आपकी कई महत्वपूर्ण सेवाएं रुक सकती हैं:",
      points: [
        {
          title: "ऑनलाइन OTP प्राप्त करने के लिए",
          desc: "e-Aadhaar डाउनलोड करने, एड्रेस अपडेट करने या आधार लॉक/अनलॉक करने के लिए रजिस्टर्ड नंबर पर ही 6 अंकों का OTP आता है।"
        },
        {
          title: "बैंक और वित्तीय सेवाएं",
          desc: "नया बैंक खाता खोलना, UPI पिन सेट करना, फिक्स्ड डिपॉजिट और शेयर मार्केट (Demat Account) KYC के लिए आधार OTP अनिवार्य है।"
        },
        {
          title: "सरकारी कल्याणकारी योजनाएं",
          desc: "PM किसान सम्मान निधि, राशन कार्ड ई-केवाईसी, छात्रवृत्ति (Scholarship) और पेंशन की DBT राशि के लिए नंबर सक्रिय होना चाहिए।"
        },
        {
          title: "ITR ई-वेरिफिकेशन और EPF निकासी",
          desc: "इनकम टैक्स रिटर्न फाइल करने के बाद ई-वेरिफाई करने तथा EPFO से PF का पैसा ऑनलाइन निकालने के लिए आधार OTP की जरूरत पड़ती है।"
        }
      ]
    },

    method1: {
      title: "विधि 1: UIDAI पोर्टल से 'Verify Mobile Number' (100% सटीक तरीका)",
      badge: "सर्वाधिक लोकप्रिय व आधिकारिक",
      description: "यदि आपके पास 1-2 मोबाइल नंबर हैं और आप यह पक्का करना चाहते हैं कि इनमें से कौन सा नंबर आधार में जुड़ा है, तो यह तरीका सबसे सटीक है।",
      steps: [
        {
          number: 1,
          title: "आधिकारिक myAadhaar पोर्टल खोलें",
          description: "अपने मोबाइल या कंप्यूटर के ब्राउज़र में UIDAI का नया आधिकारिक पोर्टल खोलें: myaadhaar.uidai.gov.in।",
          tip: "हमेशा केवल '.gov.in' डोमेन वाली सुरक्षित वेबसाइट पर ही जाएं।"
        },
        {
          number: 2,
          title: "'Verify Email/Mobile Number' विकल्प पर क्लिक करें",
          description: "होमपेज पर नीचे की ओर स्क्रॉल करें। आपको 'Verify Email/Mobile Number' का विकल्प नीले रंग के आइकन के साथ दिखाई देगा।",
          badge: "सीधा विकल्प"
        },
        {
          number: 3,
          title: "आधार नंबर और मोबाइल नंबर दर्ज करें",
          description: "1. अपना 12 अंकों का आधार नंबर दर्ज करें। 2. वह मोबाइल नंबर दर्ज करें जिसे आप जांचना चाहते हैं।",
          tip: "अगर ईमेल भी चेक करना हो तो 'Verify Email Address' विकल्प चुन सकते हैं।"
        },
        {
          number: 4,
          title: "स्क्रीन पर दिख रहा कैप्चा कोड भरें",
          description: "बॉक्स में दिखाई दे रहा सुरक्षा कैप्चा (Captcha) ध्यानपूर्वक सही अक्षरों में दर्ज करें।",
          badge: "सुरक्षा जांच"
        },
        {
          number: 5,
          title: "'Send OTP' पर क्लिक करें और परिणाम देखें",
          description: "बटन पर क्लिक करते ही स्क्रीन पर तुरंत परिणाम प्रदर्शित होगा:",
          tip: "परिणामों का मतलब नीचे समझें"
        }
      ] as StepItem[],
      results: [
        {
          type: "success",
          badge: "सफल (Verified)",
          message: "The Mobile number you have entered is already verified with our records.",
          meaning: "शुभकामनाएं! आपने जो मोबाइल नंबर डाला है, वही आपके आधार कार्ड के साथ सफलतापूर्वक लिंक है।"
        },
        {
          type: "error",
          badge: "असफल (Not Matched)",
          message: "The Mobile number you had entered does not match with our records.",
          meaning: "यह मोबाइल नंबर आपके आधार रिकॉर्ड से मेल नहीं खाता है। इसका मतलब यह नंबर लिंक नहीं है, कृपया अपना कोई अन्य पुराना नंबर डालकर देखें।"
        }
      ]
    },

    method2: {
      title: "विधि 2: 'Check Aadhaar Validity' से मोबाइल नंबर के अंतिम 3 अंक जानें",
      badge: "यदि आपको बिल्कुल याद न हो",
      description: "यदि आपको यह बिल्कुल याद नहीं है कि कौन सा फोन नंबर आधार में दिया था, तो आप 'Check Aadhaar Validity' सेवा का उपयोग कर सकते हैं। इसमें आधार में पंजीकृत मोबाइल नंबर के आखिरी 3 अंक प्रदर्शित होते हैं।",
      steps: [
        {
          number: 1,
          title: "myAadhaar पोर्टल के 'Check Aadhaar Validity' पर जाएं",
          description: "myaadhaar.uidai.gov.in पर जाएं और सेवाओं की सूची में 'Check Aadhaar Validity' खोजें।"
        },
        {
          number: 2,
          title: "12 अंकों का आधार नंबर और कैप्चा भरें",
          description: "अपना सही आधार संख्या और नीचे दिया गया कैप्चा कोड दर्ज करें। इसके बाद 'Proceed' पर क्लिक करें।"
        },
        {
          number: 3,
          title: "विवरण और अंतिम 3 अंक देखें",
          description: "स्क्रीन पर आपके आधार का स्टेटस खुलेगा जिसमें निम्नलिखित जानकारी होगी:",
          badge: "सुरक्षित डेटा"
        }
      ] as StepItem[],
      displayFields: [
        { label: "Age Band (आयु वर्ग)", example: "20 - 30 वर्ष या 30 - 40 वर्ष" },
        { label: "Gender (लिंग)", example: "MALE / FEMALE" },
        { label: "State (राज्य)", example: "Uttar Pradesh / Bihar / Maharashtra आदि" },
        { label: "Mobile (मोबाइल)", example: "******891 (अंतिम 3 अंक)" }
      ],
      note: "यदि मोबाइल वाले कॉलम में 'Null' या कुछ नहीं लिखा है, तो इसका स्पष्ट अर्थ है कि आपके आधार कार्ड में कोई भी मोबाइल नंबर लिंक नहीं है।"
    },

    method3: {
      title: "विधि 3: mAadhaar मोबाइल एप्लिकेशन द्वारा जांच",
      badge: "स्मार्टफोन उपयोगकर्ताओं के लिए",
      description: "UIDAI का आधिकारिक स्मार्टफोन ऐप 'mAadhaar' (Android और iOS दोनों पर उपलब्ध) द्वारा भी आप आसानी से अपने नंबर की जांच कर सकते हैं।",
      steps: [
        {
          step: "चरण 1",
          text: "गूगल प्ले स्टोर या ऐपल ऐप स्टोर से आधिकारिक 'mAadhaar' ऐप डाउनलोड और इंस्टॉल करें।"
        },
        {
          step: "चरण 2",
          text: "ऐप खोलें और मुख्य डैशबोर्ड पर 'Verify Aadhaar' या 'Verify Mobile / Email' सेवा का चयन करें।"
        },
        {
          step: "चरण 3",
          text: "अपना आधार नंबर व संभावित मोबाइल नंबर डालकर सबमिट करें। ऐप तुरंत लिंकिंग स्टेटस बता देगा।"
        }
      ]
    },

    howToUpdate: {
      title: "यदि आधार में मोबाइल नंबर लिंक नहीं है या पुराना नंबर बंद हो गया है, तो क्या करें?",
      warning: "सावधान: सुरक्षा कारणों से UIDAI घर बैठे ऑनलाइन नया मोबाइल नंबर बदलने की अनुमति नहीं देता है। इसके लिए बायोमेट्रिक प्रमाणीकरण आवश्यक है। किसी भी फर्जी लिंक या कॉल पर विश्वास न करें।",
      options: [
        {
          title: "विकल्प A: नजदीकी आधार सेवा केंद्र (ASK) या बैंक/पोस्ट ऑफिस जाएं",
          badge: "सर्वाधिक प्रचलित",
          fee: "₹50 सरकारी शुल्क",
          docs: "कोई दस्तावेज नहीं चाहिए (No Document Required)",
          steps: [
            "अपने नजदीकी आधार नामांकन केंद्र या बैंक/पोस्ट ऑफिस जाएं।",
            "वहां आधार सुधार फॉर्म (Aadhaar Correction Form) भरें और केवल 'Mobile Number' पर टिक करें।",
            "ऑपरेटर आपकी उंगलियों के निशान (Fingerprint) या आंख की पुतली (Iris) स्कैन करेगा।",
            "नया मोबाइल नंबर दर्ज किया जाएगा और आपको एक पावती रसीद (URN - Update Request Number) दी जाएगी।",
            "आमतौर पर 24 से 72 घंटों के भीतर नया मोबाइल नंबर अपडेट हो जाता है।"
          ]
        },
        {
          title: "विकल्प B: डाकिया को घर बुलाकर करवाएं (IPPB Doorstep Service)",
          badge: "घर बैठे सुविधा",
          fee: "₹50 सरकारी शुल्क + नाममात्र विजिट चार्ज",
          docs: "कोई दस्तावेज नहीं चाहिए",
          steps: [
            "इंडिया पोस्ट पेमेंट्स बैंक (IPPB) की वेबसाइट (ippbonline.com) पर जाएं या 'Postinfo' ऐप डाउनलोड करें।",
            "'Service Request' -> 'IPPB Customers' या 'Doorstep Banking' चुनें।",
            "'Aadhaar - Mobile Update' विकल्प पर सही का निशान लगाएं।",
            "अपना नाम, पता, पिनकोड और मोबाइल नंबर भरें और सबमिट करें।",
            "डाकिया (Postman) माइक्रो एटीएम व बायोमेट्रिक मशीन लेकर आपके घर आएगा और नंबर अपडेट कर देगा।"
          ]
        }
      ]
    },

    safetyTips: {
      title: "आधार और मोबाइल नंबर सुरक्षा एडवाइजरी (Cyber Safety Tips)",
      tips: [
        {
          title: "कभी भी अपना आधार OTP किसी के साथ साझा न करें",
          desc: "UIDAI या कोई भी बैंक कर्मचारी कभी भी आपसे फोन कॉल, व्हाट्सएप या एसएमएस पर आधार OTP नहीं मांगता।"
        },
        {
          title: "मास्क आधार (Masked Aadhaar) का इस्तेमाल करें",
          desc: "होटल, सिम कार्ड या निजी सत्यापन के लिए मास्क आधार दें, जिसमें केवल आखिरी 4 अंक दिखते हैं।"
        },
        {
          title: "आधार बायोमेट्रिक लॉक रखें",
          desc: "जब जरूरत न हो, myAadhaar पोर्टल या ऐप से अपने बायोमेट्रिक्स को लॉक रखें ताकि कोई गलत उपयोग न कर सके।"
        },
        {
          title: "फर्जी वेबसाइटों से बचें",
          desc: "केवल uidai.gov.in या myaadhaar.uidai.gov.in पर ही अपनी जानकारी दर्ज करें।"
        }
      ]
    },

    faqs: [
      {
        id: "faq-1",
        question: "क्या मैं घर बैठे ऑनलाइन नया मोबाइल नंबर आधार में बदल या जोड़ सकता हूँ?",
        answer: "नहीं, पूर्णतः ऑनलाइन घर बैठे बिना बायोमेट्रिक के नया मोबाइल नंबर बदलना संभव नहीं है क्योंकि इसके लिए नागरिक के फिंगरप्रिंट या आइरिस स्कैन का सत्यापन जरूरी होता है। हां, आप डाकिया (IPPB Doorstep Service) को घर बुलाकर बायोमेट्रिक द्वारा घर पर ही नंबर अपडेट करा सकते हैं।"
      },
      {
        id: "faq-2",
        question: "आधार कार्ड में मोबाइल नंबर चेक करने की क्या फीस है?",
        answer: "myAadhaar पोर्टल और mAadhaar ऐप पर यह चेक करना कि कौन सा मोबाइल नंबर लिंक है, बिल्कुल मुफ्त (100% Free) है। इसके लिए कोई शुल्क नहीं देना होता।"
      },
      {
        id: "faq-3",
        question: "आधार में मोबाइल नंबर अपडेट होने में कितना समय लगता है?",
        answer: "आधार सेवा केंद्र या डाकिया द्वारा अनुरोध दर्ज करने के बाद सामान्यतः 24 से 72 घंटे (अधिकतम 7 से 15 कार्यदिवस) के अंदर मोबाइल नंबर अपडेट हो जाता है।"
      },
      {
        id: "faq-4",
        question: "आधार में मोबाइल नंबर लिंक करवाने के लिए कौन-कौन से दस्तावेज (Documents) लगते हैं?",
        answer: "मोबाइल नंबर अपडेट करने के लिए किसी भी दस्तावेज (Proof of Identity या Proof of Address) की आवश्यकता नहीं होती है। आपको केवल अपना मूल आधार कार्ड या आधार नंबर लेकर केंद्र जाना होता है।"
      },
      {
        id: "faq-5",
        question: "अगर मेरा आधार में लिंक पुराना मोबाइल नंबर बंद या खो गया है तो क्या करें?",
        answer: "यदि पुराना नंबर बंद हो गया है तो चिंता न करें। आप बिना पुराने नंबर के सीधे नजदीकी आधार सेवा केंद्र जाकर बायोमेट्रिक प्रमाणीकरण के साथ अपना नया एक्टिव मोबाइल नंबर लिंक करवा सकते हैं।"
      },
      {
        id: "faq-6",
        question: "क्या एक ही मोबाइल नंबर को परिवार के कई सदस्यों के आधार में लिंक किया जा सकता है?",
        answer: "हाँ, UIDAI के नियमों के अनुसार परिवार के सदस्यों (जैसे माता, पिता, बच्चे) के आधार कार्ड में एक ही सामान्य पारिवारिक मोबाइल नंबर लिंक किया जा सकता है।"
      }
    ] as FaqItem[],

    share: {
      buttonText: "मित्रों व परिवार के साथ शेयर करें",
      title: "आधार मोबाइल नंबर चेक गाइड",
      copiedText: "लिंक कॉपी हो गया!",
      shareSuccess: "शेयर किया गया!",
      whatsappText: "आधार कार्ड में कौन सा मोबाइल नंबर लिंक है, 2 मिनट में ऐसे चेक करें - पूरी आसान गाइड पढ़ें: ",
      telegramText: "आधार कार्ड मोबाइल नंबर चेक 2026 गाइड: "
    },

    interactiveChecker: {
      title: "आधार मोबाइल लिंकिंग हेल्प चेकर (त्वरित निर्णय सहायक)",
      subtitle: "अपनी स्थिति चुनें और जानें कि आपको कौन सा तरीका अपनाना चाहिए:",
      q1: "क्या आपको याद है कि आपका कौन सा पुराना या नया मोबाइल नंबर आधार में हो सकता है?",
      optYes: "हाँ, मुझे 1 या 2 नंबर याद हैं",
      optNo: "नहीं, मुझे बिल्कुल याद नहीं है",
      optLost: "मेरा वह नंबर खो गया या हमेशा के लिए बंद हो गया है",
      recTitle: "आपके लिए सर्वश्रेष्ठ अनुशंसित कदम:",
      recYes: "आप सीधे myAadhaar के 'Verify Email/Mobile Number' विकल्प पर जाएं। वहां अपना आधार नंबर व संभावित मोबाइल नंबर डालकर 'Send OTP' दबाएं। यदि नंबर सही हुआ तो तुरंत हरा टिक और 'Already verified' का संदेश मिल जाएगा।",
      recNo: "आप myAadhaar के 'Check Aadhaar Validity' विकल्प पर जाएं। आधार नंबर दर्ज करने पर आपको अपने मोबाइल नंबर के आखिरी 3 अंक (जैसे ******456) दिखेंगे, जिससे आपको तुरंत याद आ जाएगा।",
      recLost: "चूंकि आपका पुराना नंबर बंद हो चुका है, इसलिए आप ऑनलाइन OTP प्राप्त नहीं कर पाएंगे। आप तुरंत नजदीकी डाकघर, बैंक या आधार केंद्र जाएं या IPPB डाकिया को घर बुलाकर ₹50 में नया चालू नंबर लिंक कराएं।",
      officialBtnText: "आधिकारिक myAadhaar पोर्टल खोलें",
      officialVerifyUrl: "https://myaadhaar.uidai.gov.in/verify-email-mobile",
      officialValidityUrl: "https://myaadhaar.uidai.gov.in/check-aadhaar-validity",
      disclaimer: "सुरक्षा चेतावनी: कभी भी किसी अज्ञात व्यक्ति या थर्ड-पार्टी अनधिकृत वेबसाइट पर अपना आधार नंबर न डालें। हमेशा केवल uidai.gov.in पर ही जाएं।"
    },

    footer: {
      aboutTitle: "आधार सेवा मार्गदर्शिका के बारे में",
      aboutText: "यह वेबसाइट भारतीय नागरिकों को आधार कार्ड में मोबाइल नंबर की जांच और लिंकिंग से जुड़ी आधिकारिक जानकारी को सरल हिंदी में समझाने के उद्देश्य से बनाई गई एक सूचनात्मक मार्गदर्शिका (Informational Guide) है।",
      disclaimerTitle: "अस्वीकरण (Disclaimer)",
      disclaimerText: "यह वेबसाइट UIDAI या भारत सरकार की आधिकारिक वेबसाइट नहीं है। यह केवल एक शैक्षणिक व नागरिक सहायता गाइड है। आधिकारिक सेवाओं के लिए हमेशा uidai.gov.in या myaadhaar.uidai.gov.in पर ही जाएं।",
      helpline: "UIDAI आधिकारिक टोल फ्री हेल्पलाइन: 1947 | ईमेल: help@uidai.gov.in",
      allRights: "सर्वाधिकार सुरक्षित © 2025-2026 आधार सेवा मार्गदर्शिका"
    }
  },

  en: {
    badge: "2025-2026 Official & Latest Guidelines",
    title: "How to Check Which Mobile Number is Linked with Aadhaar Card?",
    subtitle: "The easiest, most accurate, and secure step-by-step guide to verify your registered mobile number using UIDAI's myAadhaar portal and mAadhaar app.",
    publishedDate: "January 15, 2025",
    updatedDate: "March 2026 (Verified Guide)",
    readingTime: "5 min read",
    author: "Aadhaar Services Expert Team",
    officialPortalNotice: "Important Note: For privacy and security reasons, UIDAI never reveals the full 10-digit mobile number on screen. You can either view the last 3 digits or verify a suspected mobile number against UIDAI records.",

    quickStats: [
      { label: "Verification Time", value: "Only 2 minutes" },
      { label: "Verification Fee", value: "₹0 (100% Free)" },
      { label: "Official Portal", value: "myaadhaar.uidai.gov.in" },
      { label: "Helpline Number", value: "1947 (Toll Free)" },
    ],

    tocTitle: "Table of Contents",
    jumpLinks: [
      { id: "why-check", title: "1. Why is checking Aadhaar linked mobile number crucial?" },
      { id: "method-1", title: "2. Method 1: 'Verify Mobile Number' for 100% accurate check (Recommended)" },
      { id: "method-2", title: "3. Method 2: 'Check Aadhaar Validity' to view last 3 digits" },
      { id: "method-3", title: "4. Method 3: Verify through mAadhaar smartphone app" },
      { id: "interactive-tool", title: "5. Interactive Decision Helper & Direct Official Links" },
      { id: "how-to-update", title: "6. What to do if mobile number is not linked or closed?" },
      { id: "benefits", title: "7. Key benefits of having mobile number linked to Aadhaar" },
      { id: "safety-tips", title: "8. Cyber security & Aadhaar safety advisory" },
      { id: "faqs", title: "9. Frequently Asked Questions (FAQs)" }
    ] as TocItem[],

    whyCheckSection: {
      title: "Why is it important to check your linked mobile number?",
      intro: "In digital India, Aadhaar is not just an identity document; it is the cornerstone for government schemes and financial services. If your active mobile number is not linked, several critical services may get blocked:",
      points: [
        {
          title: "To Receive One-Time Passwords (OTP)",
          desc: "Downloading e-Aadhaar, updating address online, or locking/unlocking biometrics requires a 6-digit OTP sent to your registered mobile."
        },
        {
          title: "Banking & Financial Services",
          desc: "Opening bank accounts online, setting UPI PINs, mutual funds, Demat accounts, and instant loans require Aadhaar e-KYC authentication."
        },
        {
          title: "Government Welfare Schemes",
          desc: "PM-Kisan installments, Ration card e-KYC, scholarship grants, and DBT pension benefits require an active linked number."
        },
        {
          title: "ITR e-Verification & EPF Claims",
          desc: "e-Verifying your Income Tax Return within seconds and withdrawing provident fund (PF) online via EPFO portal necessitates Aadhaar OTP."
        }
      ]
    },

    method1: {
      title: "Method 1: 'Verify Mobile Number' on myAadhaar Portal (100% Accurate)",
      badge: "Most Popular & Official",
      description: "If you have 1 or 2 mobile numbers and want to confirm exactly which one is linked to your Aadhaar, this method is 100% conclusive.",
      steps: [
        {
          number: 1,
          title: "Open Official myAadhaar Portal",
          description: "Open your web browser and visit the official UIDAI portal: myaadhaar.uidai.gov.in.",
          tip: "Always ensure you are visiting a safe site ending in '.gov.in'."
        },
        {
          number: 2,
          title: "Click on 'Verify Email / Mobile Number'",
          description: "Scroll down on the homepage and click on the 'Verify Email/Mobile Number' card.",
          badge: "Direct Feature"
        },
        {
          number: 3,
          title: "Enter Aadhaar Number and Suspected Mobile",
          description: "Type your 12-digit Aadhaar number and the 10-digit mobile number you wish to verify.",
          tip: "You can also verify your registered Email ID using the same tool."
        },
        {
          number: 4,
          title: "Enter Security Captcha",
          description: "Carefully type the captcha code displayed in the image.",
          badge: "Security Check"
        },
        {
          number: 5,
          title: "Click 'Send OTP' and View the Result",
          description: "Upon clicking, the portal immediately compares your input with UIDAI centralized databases:",
          tip: "See the exact outcomes below"
        }
      ] as StepItem[],
      results: [
        {
          type: "success",
          badge: "Verified (Match)",
          message: "The Mobile number you have entered is already verified with our records.",
          meaning: "Congratulations! The mobile number you entered is indeed linked and registered with your Aadhaar card."
        },
        {
          type: "error",
          badge: "Mismatch (Not Linked)",
          message: "The Mobile number you had entered does not match with our records.",
          meaning: "This mobile number is NOT linked with this Aadhaar card. Try entering another phone number you might have used."
        }
      ]
    },

    method2: {
      title: "Method 2: Check Last 3 Digits via 'Check Aadhaar Validity'",
      badge: "If you completely forgot your number",
      description: "If you do not remember which family phone number was provided during enrollment, use this service to reveal the last 3 digits of the registered SIM.",
      steps: [
        {
          number: 1,
          title: "Go to 'Check Aadhaar Validity' on myAadhaar",
          description: "Visit myaadhaar.uidai.gov.in and select 'Check Aadhaar Validity'."
        },
        {
          number: 2,
          title: "Enter 12-Digit Aadhaar & Captcha",
          description: "Fill in your 12-digit Aadhaar number, solve the captcha, and click 'Proceed'."
        },
        {
          number: 3,
          title: "View Verification Details & Last 3 Digits",
          description: "The system displays your demographic verification details along with masked mobile digits:",
          badge: "Masked for Privacy"
        }
      ] as StepItem[],
      displayFields: [
        { label: "Age Band", example: "20 - 30 YRS or 30 - 40 YRS" },
        { label: "Gender", example: "MALE / FEMALE" },
        { label: "State", example: "Uttar Pradesh / Delhi / Karnataka etc." },
        { label: "Mobile Number", example: "******891 (Last 3 Digits)" }
      ],
      note: "If the Mobile field displays 'Null' or is empty, it means no mobile number is currently linked to your Aadhaar."
    },

    method3: {
      title: "Method 3: Check via Official mAadhaar Mobile App",
      badge: "For Smartphone Users",
      description: "UIDAI's official mAadhaar application on Google Play Store and Apple App Store offers built-in verification tools.",
      steps: [
        {
          step: "Step 1",
          text: "Install the official 'mAadhaar' app from Google Play Store or Apple App Store."
        },
        {
          step: "Step 2",
          text: "Open the app and select 'Verify Aadhaar' or 'Verify Mobile/Email' from the main services grid."
        },
        {
          step: "Step 3",
          text: "Enter your 12-digit Aadhaar and mobile number to receive immediate status confirmation."
        }
      ]
    },

    howToUpdate: {
      title: "What to do if your mobile number is not linked or closed?",
      warning: "Important Caution: UIDAI strictly does not permit updating mobile numbers 100% online from home due to biometric security mandates. Never share your Aadhaar details with unauthorized agents or third-party phishing sites.",
      options: [
        {
          title: "Option A: Visit Nearest Aadhaar Seva Kendra (ASK), Bank, or Post Office",
          badge: "Most Common",
          fee: "₹50 Official UIDAI Fee",
          docs: "No Document Required (Self Presence Only)",
          steps: [
            "Visit your nearest Aadhaar Seva Kendra or designated Post Office / Bank branch.",
            "Fill out the Aadhaar Correction Form and tick 'Mobile Number'.",
            "The operator captures your biometric verification (fingerprint or iris scan).",
            "Provide your new active 10-digit mobile number; you will receive an acknowledgment receipt containing an Update Request Number (URN).",
            "The mobile number is generally updated in 24 to 72 hours."
          ]
        },
        {
          title: "Option B: India Post Payments Bank (IPPB) Doorstep Service",
          badge: "At Your Doorstep",
          fee: "₹50 UIDAI Fee + Nominal Visit Charge",
          docs: "No Document Required",
          steps: [
            "Visit ippbonline.com or download the 'Postinfo' app.",
            "Go to 'Service Request' -> 'IPPB Customers' -> 'Doorstep Banking'.",
            "Select 'Aadhaar - Mobile Update'.",
            "Fill in your name, complete address, pincode, and submit.",
            "The local postman visits your home with a handheld biometric terminal to update your number."
          ]
        }
      ]
    },

    safetyTips: {
      title: "Cyber Safety Advisory for Aadhaar Users",
      tips: [
        {
          title: "Never Share Your Aadhaar OTP",
          desc: "UIDAI, police, or bank officials never ask for your 6-digit Aadhaar OTP over phone calls, SMS, or WhatsApp."
        },
        {
          title: "Use Masked Aadhaar",
          desc: "When providing ID proofs to hotels, train ticket verifiers, or private firms, use Masked Aadhaar which hides the first 8 digits."
        },
        {
          title: "Lock Your Biometrics via myAadhaar",
          desc: "Use the myAadhaar portal to lock your biometric data when not in use, preventing unauthorized fingerprint transactions."
        },
        {
          title: "Beware of Fake Websites",
          desc: "Ensure the URL ends strictly with 'uidai.gov.in' or 'myaadhaar.uidai.gov.in' before entering any personal data."
        }
      ]
    },

    faqs: [
      {
        id: "faq-1",
        question: "Can I update or link my mobile number in Aadhaar online from home?",
        answer: "No, a new mobile number cannot be linked entirely online because UIDAI mandates physical biometric (fingerprint/iris) authentication. However, you can request an India Post Payments Bank (IPPB) postman to visit your home with a biometric device."
      },
      {
        id: "faq-2",
        question: "What is the fee to check linked mobile number in Aadhaar?",
        answer: "Checking your linked mobile number on myAadhaar portal or mAadhaar app is 100% free of charge."
      },
      {
        id: "faq-3",
        question: "How long does it take for a new mobile number to update in Aadhaar?",
        answer: "It generally takes 24 to 72 hours (up to a maximum of 7 to 15 working days in rare cases) once submitted at an Aadhaar center or through the postman."
      },
      {
        id: "faq-4",
        question: "Which documents are required to update mobile number in Aadhaar?",
        answer: "Zero documents required. You do not need any proof of address or proof of identity. Only the resident's physical presence for biometric authentication is needed."
      },
      {
        id: "faq-5",
        question: "What if my old linked mobile number is permanently closed or lost?",
        answer: "Do not worry! You do NOT need the old mobile number or an OTP from the old number to link a new one. Simply visit an Aadhaar center with your Aadhaar number, authenticate via biometrics, and register your new active number."
      },
      {
        id: "faq-6",
        question: "Can multiple family members share the same mobile number in Aadhaar?",
        answer: "Yes, UIDAI allows registering the same family contact number across multiple immediate family members' Aadhaar cards."
      }
    ] as FaqItem[],

    share: {
      buttonText: "Share with Friends & Family",
      title: "Aadhaar Mobile Number Check Guide",
      copiedText: "Link copied to clipboard!",
      shareSuccess: "Shared successfully!",
      whatsappText: "How to check which mobile number is linked to Aadhaar card in 2 minutes - Complete Guide: ",
      telegramText: "Aadhaar Card Mobile Number Check Guide 2026: "
    },

    interactiveChecker: {
      title: "Interactive Decision Helper & Quick Verification Guide",
      subtitle: "Select your situation to find the exact recommended step for you:",
      q1: "Do you remember which mobile number might be linked to your Aadhaar?",
      optYes: "Yes, I remember 1 or 2 possible numbers",
      optNo: "No, I have completely forgotten",
      optLost: "My old number is lost or permanently deactivated",
      recTitle: "Recommended Action for You:",
      recYes: "Use Method 1 ('Verify Mobile Number' on myAadhaar). Enter your 12-digit Aadhaar and the phone number you suspect. If it matches, UIDAI immediately confirms 'Already verified with our records' without deducting any fee.",
      recNo: "Use Method 2 ('Check Aadhaar Validity'). Entering your Aadhaar number displays the last 3 digits of your registered SIM (e.g. ******456), helping you quickly recognize which family SIM was registered.",
      recLost: "Since you cannot receive OTPs on a deactivated SIM, you cannot update it online. Visit your nearest Post Office / Aadhaar Seva Kendra or book an IPPB doorstep postman service to link your new active phone number for ₹50.",
      officialBtnText: "Open Official myAadhaar Portal",
      officialVerifyUrl: "https://myaadhaar.uidai.gov.in/verify-email-mobile",
      officialValidityUrl: "https://myaadhaar.uidai.gov.in/check-aadhaar-validity",
      disclaimer: "Security Warning: Never submit your Aadhaar number on unverified third-party websites. Always verify the domain is uidai.gov.in."
    },

    footer: {
      aboutTitle: "About Aadhaar Seva Guide",
      aboutText: "This website is an independent educational and public assistance guide dedicated to providing clear, step-by-step guidance on Aadhaar mobile verification and citizen services in simple Hindi and English.",
      disclaimerTitle: "Disclaimer",
      disclaimerText: "This website is not an official portal of UIDAI or the Government of India. It is purely an informational guide for citizens. For all official government transactions, always use uidai.gov.in or myaadhaar.uidai.gov.in.",
      helpline: "UIDAI Official Toll-Free Helpline: 1947 | Email: help@uidai.gov.in",
      allRights: "All Rights Reserved © 2025-2026 Aadhaar Seva Margdarshika"
    }
  }
};
