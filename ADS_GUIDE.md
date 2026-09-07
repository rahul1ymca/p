# विज्ञापन (AdSense / Ads) लगाने की संपूर्ण मार्गदर्शिका (Guide)

इस प्रोजेक्ट में विज्ञापन लगाने के लिए 4 प्रमुख और रणनीतिक स्थान (High CTR Ad Slots) तैयार करके छोड़ दिए गए हैं। आप भविष्य में जब चाहें आसानी से अपना Google AdSense, Media.net या कोई भी बैनर विज्ञापन कोड पेस्ट कर सकते हैं।

---

## 📍 1. Google AdSense Header Script (मुख्य स्क्रिप्ट)
जब आपको AdSense अप्रूवल मिलता है, तो आपको एक मुख्य स्क्रिप्ट कोड मिलता है।
- **फाइल का नाम**: `index.html`
- **कहाँ पेस्ट करें**: `<head>` टैग के अंदर (खोजें: `AD CODE PLACEHOLDER: GOOGLE ADSENSE SCRIPT CODE`)
- **उदाहरण कोड**:
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
  ```

---

## 📍 2. वेबसाइट पर विज्ञापन यूनिट लगाने के 4 स्थान (Ad Units)

### स्थान 1: Top Leaderboard (शीर्ष विज्ञापन)
- **फाइल**: `src/App.tsx`
- **लोकेशन**: विषय सूची (Table of Contents) के ठीक बाद।
- **खोजें (Search)**: `AD SLOT 1 - TOP LEADERBOARD`

### स्थान 2: In-Article Ad (विधि 1 और विधि 2 के बीच)
- **फाइल**: `src/components/StepGuide.tsx`
- **लोकेशन**: स्टेप-बाय-स्टेप गाइड के बीच में (सबसे ज्यादा क्लिक्स के लिए)।
- **खोजें (Search)**: `IN-ARTICLE AD SLOT`

### स्थान 3: Mid-Content Ad (मध्य विज्ञापन)
- **फाइल**: `src/App.tsx`
- **लोकेशन**: इंटरएक्टिव टूल और अपडेशन गाइड के बीच।
- **खोजें (Search)**: `AD SLOT 2 - MID ARTICLE BANNER`

### स्थान 4: Bottom Banner (निचला विज्ञापन)
- **फाइल**: `src/App.tsx`
- **लोकेशन**: अक्सर पूछे जाने वाले प्रश्नों (FAQs) के ठीक नीचे।
- **खोजें (Search)**: `AD SLOT 3 - BOTTOM BANNER`

---

## 🛠️ एड कोड कैसे पेस्ट करें? (2 आसान तरीके)

### तरीका A: केंद्रीय फाइल `src/components/AdSlot.tsx` द्वारा
अगर आप चाहते हैं कि सभी स्लॉट्स पर एक जैसा AdSense कोड अपने आप लग जाए:
1. `src/components/AdSlot.tsx` खोलें।
2. सर्च करें: `PASTE YOUR AD CODE BELOW THIS LINE`
3. वहां अपना `<ins className="adsbygoogle" ...></ins>` कोड पेस्ट कर दें।

### तरीका B: सीधे `App.tsx` या `StepGuide.tsx` में अलग-अलग कोड पेस्ट करना
अगर आप हर स्लॉट के लिए अलग AdSense Unit ID (अलग-अलग साइज) इस्तेमाल करना चाहते हैं:
1. `src/App.tsx` या `src/components/StepGuide.tsx` खोलें।
2. `<AdSlot slotId="..." />` वाले टैग की जगह पर अपना AdSense कोड सीधा पेस्ट कर दें।
