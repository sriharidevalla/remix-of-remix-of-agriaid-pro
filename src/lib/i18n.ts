export type Language = "en" | "hi" | "te" | "ta";

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.diagnosis": "Diagnosis",
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.about": "About",
    "nav.getStarted": "Get Started",
    "header.title": "Plant Health",
    "header.titleHighlight": "Advisory",

    // Hero Section
    "hero.badge": "AI-Powered Plant Health",
    "hero.title": "Smart Crop Disease",
    "hero.titleHighlight": "Detection",
    "hero.description": "Upload a photo of your crop leaf and get instant AI-powered disease detection with treatment recommendations.",
    "hero.cta": "Start Diagnosis",
    "hero.secondary": "Learn More",

    // Diagnosis Section
    "diagnosis.badge": "AI Diagnosis",
    "diagnosis.title": "Diagnose Your",
    "diagnosis.titleHighlight": "Crop Health",
    "diagnosis.description": "Upload a photo of your crop leaf and get instant AI-powered disease detection with treatment recommendations.",
    "diagnosis.selectCrop": "Select your crop type:",
    "diagnosis.uploadTitle": "Upload Crop Image",
    "diagnosis.dragDrop": "Drag and drop your crop leaf image here",
    "diagnosis.orClick": "or click to browse",
    "diagnosis.imageUploaded": "Image uploaded successfully",
    "diagnosis.takePhoto": "Take Photo",
    "diagnosis.browseFiles": "Browse Files",
    "diagnosis.analyzeImage": "Analyze Image",
    "diagnosis.analyzing": "Analyzing...",
    "diagnosis.uploadPrompt": "→ Upload an image to start diagnosis",
    "diagnosis.resultsTitle": "Diagnosis Results",
    "diagnosis.awaitingTitle": "Awaiting Your Image",
    "diagnosis.awaitingDescription": "Upload a clear photo of your crop's leaf to receive an instant AI-powered health assessment and treatment recommendations.",
    "diagnosis.detectedDisease": "Detected Disease",
    "diagnosis.confidence": "Confidence",
    "diagnosis.symptomsDetected": "Symptoms Detected",
    "diagnosis.treatmentRecommendations": "Treatment Recommendations",
    "diagnosis.preventionTips": "Prevention Tips",
    "diagnosis.selectCropFirst": "Select a crop first",
    "diagnosis.selectCropDescription": "Please select the crop type before uploading an image.",
    "diagnosis.analysisComplete": "Analysis Complete",
    "diagnosis.analysisFailed": "Analysis Failed",
    "diagnosis.analysisSuccessDescription": "Your crop has been analyzed successfully.",
    "diagnosis.cameraPermissionDenied": "Camera Permission Denied",
    "diagnosis.cameraPermissionDescription": "Please allow camera access to take photos.",

    // Crops
    "crop.tomato": "Tomato",
    "crop.grape": "Grape",
    "crop.sugarcane": "Sugarcane",
    "crop.maize": "Maize",
    "crop.potato": "Potato",
    "crop.apple": "Apple",

    // Features Section
    "features.badge": "Features",
    "features.title": "Powerful",
    "features.titleHighlight": "Features",
    "features.description": "Our advanced plant health advisory system provides comprehensive tools for modern farmers.",

    // How It Works Section
    "howItWorks.badge": "Process",
    "howItWorks.title": "How It",
    "howItWorks.titleHighlight": "Works",
    "howItWorks.description": "Get accurate crop disease diagnosis in three simple steps.",

    // Footer
    "footer.description": "AI-powered plant health advisory system for modern farmers.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",

    // ChatBot
    "chatbot.title": "Plant Health Assistant",
    "chatbot.subtitle": "Ask me anything about crops",
    "chat.title": "Plant Health Assistant",
    "chat.placeholder": "Ask about crop diseases...",
    "chat.welcome": "Hello! I'm your Plant Health Assistant. How can I help you with your crops today?",
  },
  hi: {
    // Header
    "nav.diagnosis": "रोग निदान",
    "nav.features": "विशेषताएं",
    "nav.howItWorks": "कैसे काम करता है",
    "nav.about": "हमारे बारे में",
    "nav.getStarted": "शुरू करें",
    "header.title": "पौधा स्वास्थ्य",
    "header.titleHighlight": "सलाहकार",

    // Hero Section
    "hero.badge": "AI-संचालित पौधा स्वास्थ्य",
    "hero.title": "स्मार्ट फसल रोग",
    "hero.titleHighlight": "पहचान",
    "hero.description": "अपनी फसल की पत्ती की तस्वीर अपलोड करें और उपचार सिफारिशों के साथ तुरंत AI-संचालित रोग पहचान प्राप्त करें।",
    "hero.cta": "निदान शुरू करें",
    "hero.secondary": "और जानें",

    // Diagnosis Section
    "diagnosis.badge": "AI निदान",
    "diagnosis.title": "अपनी फसल के",
    "diagnosis.titleHighlight": "स्वास्थ्य का निदान करें",
    "diagnosis.description": "अपनी फसल की पत्ती की तस्वीर अपलोड करें और उपचार सिफारिशों के साथ तुरंत AI-संचालित रोग पहचान प्राप्त करें।",
    "diagnosis.selectCrop": "अपनी फसल का प्रकार चुनें:",
    "diagnosis.uploadTitle": "फसल की तस्वीर अपलोड करें",
    "diagnosis.dragDrop": "अपनी फसल की पत्ती की तस्वीर यहां खींचें और छोड़ें",
    "diagnosis.orClick": "या ब्राउज़ करने के लिए क्लिक करें",
    "diagnosis.imageUploaded": "तस्वीर सफलतापूर्वक अपलोड हुई",
    "diagnosis.takePhoto": "फोटो लें",
    "diagnosis.browseFiles": "फाइल ब्राउज़ करें",
    "diagnosis.analyzeImage": "तस्वीर का विश्लेषण करें",
    "diagnosis.analyzing": "विश्लेषण हो रहा है...",
    "diagnosis.uploadPrompt": "→ निदान शुरू करने के लिए तस्वीर अपलोड करें",
    "diagnosis.resultsTitle": "निदान परिणाम",
    "diagnosis.awaitingTitle": "आपकी तस्वीर का इंतज़ार है",
    "diagnosis.awaitingDescription": "तुरंत AI-संचालित स्वास्थ्य मूल्यांकन और उपचार सिफारिशें प्राप्त करने के लिए अपनी फसल की पत्ती की स्पष्ट तस्वीर अपलोड करें।",
    "diagnosis.detectedDisease": "पता लगाया गया रोग",
    "diagnosis.confidence": "विश्वास",
    "diagnosis.symptomsDetected": "पहचाने गए लक्षण",
    "diagnosis.treatmentRecommendations": "उपचार सिफारिशें",
    "diagnosis.preventionTips": "रोकथाम के सुझाव",
    "diagnosis.selectCropFirst": "पहले फसल चुनें",
    "diagnosis.selectCropDescription": "तस्वीर अपलोड करने से पहले कृपया फसल का प्रकार चुनें।",
    "diagnosis.analysisComplete": "विश्लेषण पूर्ण",
    "diagnosis.analysisFailed": "विश्लेषण विफल",
    "diagnosis.analysisSuccessDescription": "आपकी फसल का सफलतापूर्वक विश्लेषण किया गया।",
    "diagnosis.cameraPermissionDenied": "कैमरा अनुमति अस्वीकृत",
    "diagnosis.cameraPermissionDescription": "फोटो लेने के लिए कृपया कैमरा एक्सेस की अनुमति दें।",

    // Crops
    "crop.tomato": "टमाटर",
    "crop.grape": "अंगूर",
    "crop.sugarcane": "गन्ना",
    "crop.maize": "मक्का",
    "crop.potato": "आलू",
    "crop.apple": "सेब",

    // Features Section
    "features.badge": "विशेषताएं",
    "features.title": "शक्तिशाली",
    "features.titleHighlight": "विशेषताएं",
    "features.description": "हमारी उन्नत पौधा स्वास्थ्य सलाहकार प्रणाली आधुनिक किसानों के लिए व्यापक उपकरण प्रदान करती है।",

    // How It Works Section
    "howItWorks.badge": "प्रक्रिया",
    "howItWorks.title": "यह कैसे",
    "howItWorks.titleHighlight": "काम करता है",
    "howItWorks.description": "तीन सरल चरणों में सटीक फसल रोग निदान प्राप्त करें।",

    // Footer
    "footer.description": "आधुनिक किसानों के लिए AI-संचालित पौधा स्वास्थ्य सलाहकार प्रणाली।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.contact": "संपर्क करें",
    "footer.rights": "सर्वाधिकार सुरक्षित।",

    // ChatBot
    "chatbot.title": "पौधा स्वास्थ्य सहायक",
    "chatbot.subtitle": "फसलों के बारे में कुछ भी पूछें",
    "chat.title": "पौधा स्वास्थ्य सहायक",
    "chat.placeholder": "फसल रोगों के बारे में पूछें...",
    "chat.welcome": "नमस्ते! मैं आपका पौधा स्वास्थ्य सहायक हूं। आज आपकी फसलों में मैं कैसे मदद कर सकता हूं?",
  },
  te: {
    // Header
    "nav.diagnosis": "వ్యాధి నిర్ధారణ",
    "nav.features": "ఫీచర్లు",
    "nav.howItWorks": "ఎలా పని చేస్తుంది",
    "nav.about": "మా గురించి",
    "nav.getStarted": "ప్రారంభించండి",
    "header.title": "మొక్క ఆరోగ్యం",
    "header.titleHighlight": "సలహాదారు",

    // Hero Section
    "hero.badge": "AI-ఆధారిత మొక్క ఆరోగ్యం",
    "hero.title": "స్మార్ట్ పంట వ్యాధి",
    "hero.titleHighlight": "గుర్తింపు",
    "hero.description": "మీ పంట ఆకు ఫోటో అప్‌లోడ్ చేయండి మరియు చికిత్స సిఫార్సులతో తక్షణ AI-ఆధారిత వ్యాధి గుర్తింపు పొందండి.",
    "hero.cta": "నిర్ధారణ ప్రారంభించండి",
    "hero.secondary": "మరింత తెలుసుకోండి",

    // Diagnosis Section
    "diagnosis.badge": "AI నిర్ధారణ",
    "diagnosis.title": "మీ పంట",
    "diagnosis.titleHighlight": "ఆరోగ్యం నిర్ధారించండి",
    "diagnosis.description": "మీ పంట ఆకు ఫోటో అప్‌లోడ్ చేయండి మరియు చికిత్స సిఫార్సులతో తక్షణ AI-ఆధారిత వ్యాధి గుర్తింపు పొందండి.",
    "diagnosis.selectCrop": "మీ పంట రకం ఎంచుకోండి:",
    "diagnosis.uploadTitle": "పంట చిత్రం అప్‌లోడ్ చేయండి",
    "diagnosis.dragDrop": "మీ పంట ఆకు చిత్రాన్ని ఇక్కడ లాగి వదలండి",
    "diagnosis.orClick": "లేదా బ్రౌజ్ చేయడానికి క్లిక్ చేయండి",
    "diagnosis.imageUploaded": "చిత్రం విజయవంతంగా అప్‌లోడ్ అయింది",
    "diagnosis.takePhoto": "ఫోటో తీయండి",
    "diagnosis.browseFiles": "ఫైల్స్ బ్రౌజ్ చేయండి",
    "diagnosis.analyzeImage": "చిత్రాన్ని విశ్లేషించండి",
    "diagnosis.analyzing": "విశ్లేషిస్తోంది...",
    "diagnosis.uploadPrompt": "→ నిర్ధారణ ప్రారంభించడానికి చిత్రం అప్‌లోడ్ చేయండి",
    "diagnosis.resultsTitle": "నిర్ధారణ ఫలితాలు",
    "diagnosis.awaitingTitle": "మీ చిత్రం కోసం వేచి ఉంది",
    "diagnosis.awaitingDescription": "తక్షణ AI-ఆధారిత ఆరోగ్య మూల్యాంకనం మరియు చికిత్స సిఫార్సులు పొందడానికి మీ పంట ఆకు స్పష్టమైన ఫోటో అప్‌లోడ్ చేయండి.",
    "diagnosis.detectedDisease": "గుర్తించిన వ్యాధి",
    "diagnosis.confidence": "విశ్వాసం",
    "diagnosis.symptomsDetected": "గుర్తించిన లక్షణాలు",
    "diagnosis.treatmentRecommendations": "చికిత్స సిఫార్సులు",
    "diagnosis.preventionTips": "నివారణ చిట్కాలు",
    "diagnosis.selectCropFirst": "మొదట పంట ఎంచుకోండి",
    "diagnosis.selectCropDescription": "చిత్రం అప్‌లోడ్ చేయడానికి ముందు దయచేసి పంట రకం ఎంచుకోండి.",
    "diagnosis.analysisComplete": "విశ్లేషణ పూర్తయింది",
    "diagnosis.analysisFailed": "విశ్లేషణ విఫలమైంది",
    "diagnosis.analysisSuccessDescription": "మీ పంట విజయవంతంగా విశ్లేషించబడింది.",
    "diagnosis.cameraPermissionDenied": "కెమెరా అనుమతి తిరస్కరించబడింది",
    "diagnosis.cameraPermissionDescription": "ఫోటో తీయడానికి దయచేసి కెమెరా యాక్సెస్ అనుమతించండి.",

    // Crops
    "crop.tomato": "టమాటో",
    "crop.grape": "ద్రాక్ష",
    "crop.sugarcane": "చెరకు",
    "crop.maize": "మొక్కజొన్న",
    "crop.potato": "బంగాళాదుంప",
    "crop.apple": "యాపిల్",

    // Features Section
    "features.badge": "ఫీచర్లు",
    "features.title": "శక్తివంతమైన",
    "features.titleHighlight": "ఫీచర్లు",
    "features.description": "మా అధునాతన మొక్క ఆరోగ్య సలహా వ్యవస్థ ఆధునిక రైతులకు సమగ్ర సాధనాలను అందిస్తుంది.",

    // How It Works Section
    "howItWorks.badge": "ప్రక్రియ",
    "howItWorks.title": "ఇది ఎలా",
    "howItWorks.titleHighlight": "పని చేస్తుంది",
    "howItWorks.description": "మూడు సులభమైన దశల్లో ఖచ్చితమైన పంట వ్యాధి నిర్ధారణ పొందండి.",

    // Footer
    "footer.description": "ఆధునిక రైతుల కోసం AI-ఆధారిత మొక్క ఆరోగ్య సలహా వ్యవస్థ.",
    "footer.quickLinks": "త్వరిత లింకులు",
    "footer.contact": "సంప్రదించండి",
    "footer.rights": "అన్ని హక్కులు రిజర్వు చేయబడ్డాయి.",

    // ChatBot
    "chatbot.title": "మొక్కల ఆరోగ్య సహాయకుడు",
    "chatbot.subtitle": "పంటల గురించి ఏదైనా అడగండి",
    "chat.title": "మొక్క ఆరోగ్య సహాయకుడు",
    "chat.placeholder": "పంట వ్యాధుల గురించి అడగండి...",
    "chat.welcome": "నమస్కారం! నేను మీ మొక్క ఆరోగ్య సహాయకుడిని. ఈ రోజు మీ పంటలతో నేను ఎలా సహాయం చేయగలను?",
  },
  ta: {
    // Header
    "nav.diagnosis": "நோய் கண்டறிதல்",
    "nav.features": "அம்சங்கள்",
    "nav.howItWorks": "எப்படி வேலை செய்கிறது",
    "nav.about": "எங்களை பற்றி",
    "nav.getStarted": "தொடங்குங்கள்",
    "header.title": "தாவர ஆரோக்கியம்",
    "header.titleHighlight": "ஆலோசகர்",

    // Hero Section
    "hero.badge": "AI-இயக்கப்படும் தாவர ஆரோக்கியம்",
    "hero.title": "ஸ்மார்ட் பயிர் நோய்",
    "hero.titleHighlight": "கண்டறிதல்",
    "hero.description": "உங்கள் பயிர் இலை புகைப்படத்தை பதிவேற்றி, சிகிச்சை பரிந்துரைகளுடன் உடனடி AI-இயக்கப்படும் நோய் கண்டறிதலைப் பெறுங்கள்.",
    "hero.cta": "கண்டறிதலைத் தொடங்குங்கள்",
    "hero.secondary": "மேலும் அறிக",

    // Diagnosis Section
    "diagnosis.badge": "AI கண்டறிதல்",
    "diagnosis.title": "உங்கள் பயிர்",
    "diagnosis.titleHighlight": "ஆரோக்கியத்தை கண்டறியுங்கள்",
    "diagnosis.description": "உங்கள் பயிர் இலை புகைப்படத்தை பதிவேற்றி, சிகிச்சை பரிந்துரைகளுடன் உடனடி AI-இயக்கப்படும் நோய் கண்டறிதலைப் பெறுங்கள்.",
    "diagnosis.selectCrop": "உங்கள் பயிர் வகையைத் தேர்ந்தெடுக்கவும்:",
    "diagnosis.uploadTitle": "பயிர் படத்தை பதிவேற்றுங்கள்",
    "diagnosis.dragDrop": "உங்கள் பயிர் இலை படத்தை இங்கே இழுத்து விடுங்கள்",
    "diagnosis.orClick": "அல்லது உலாவ கிளிக் செய்யவும்",
    "diagnosis.imageUploaded": "படம் வெற்றிகரமாக பதிவேற்றப்பட்டது",
    "diagnosis.takePhoto": "புகைப்படம் எடு",
    "diagnosis.browseFiles": "கோப்புகளை உலாவு",
    "diagnosis.analyzeImage": "படத்தை பகுப்பாய்வு செய்",
    "diagnosis.analyzing": "பகுப்பாய்வு செய்கிறது...",
    "diagnosis.uploadPrompt": "→ கண்டறிதலைத் தொடங்க படத்தை பதிவேற்றுங்கள்",
    "diagnosis.resultsTitle": "கண்டறிதல் முடிவுகள்",
    "diagnosis.awaitingTitle": "உங்கள் படத்திற்காக காத்திருக்கிறது",
    "diagnosis.awaitingDescription": "உடனடி AI-இயக்கப்படும் ஆரோக்கிய மதிப்பீடு மற்றும் சிகிச்சை பரிந்துரைகளைப் பெற உங்கள் பயிர் இலையின் தெளிவான புகைப்படத்தை பதிவேற்றுங்கள்.",
    "diagnosis.detectedDisease": "கண்டறியப்பட்ட நோய்",
    "diagnosis.confidence": "நம்பிக்கை",
    "diagnosis.symptomsDetected": "கண்டறியப்பட்ட அறிகுறிகள்",
    "diagnosis.treatmentRecommendations": "சிகிச்சை பரிந்துரைகள்",
    "diagnosis.preventionTips": "தடுப்பு குறிப்புகள்",
    "diagnosis.selectCropFirst": "முதலில் பயிரைத் தேர்ந்தெடுக்கவும்",
    "diagnosis.selectCropDescription": "படத்தை பதிவேற்றும் முன் பயிர் வகையைத் தேர்ந்தெடுக்கவும்.",
    "diagnosis.analysisComplete": "பகுப்பாய்வு முடிந்தது",
    "diagnosis.analysisFailed": "பகுப்பாய்வு தோல்வியடைந்தது",
    "diagnosis.analysisSuccessDescription": "உங்கள் பயிர் வெற்றிகரமாக பகுப்பாய்வு செய்யப்பட்டது.",
    "diagnosis.cameraPermissionDenied": "கேமரா அனுமதி மறுக்கப்பட்டது",
    "diagnosis.cameraPermissionDescription": "புகைப்படம் எடுக்க கேமரா அணுகலை அனுமதிக்கவும்.",

    // Crops
    "crop.tomato": "தக்காளி",
    "crop.grape": "திராட்சை",
    "crop.sugarcane": "கரும்பு",
    "crop.maize": "மக்காச்சோளம்",
    "crop.potato": "உருளைக்கிழங்கு",
    "crop.apple": "ஆப்பிள்",

    // Features Section
    "features.badge": "அம்சங்கள்",
    "features.title": "சக்திவாய்ந்த",
    "features.titleHighlight": "அம்சங்கள்",
    "features.description": "எங்கள் மேம்பட்ட தாவர ஆரோக்கிய ஆலோசனை அமைப்பு நவீன விவசாயிகளுக்கு விரிவான கருவிகளை வழங்குகிறது.",

    // How It Works Section
    "howItWorks.badge": "செயல்முறை",
    "howItWorks.title": "இது எப்படி",
    "howItWorks.titleHighlight": "வேலை செய்கிறது",
    "howItWorks.description": "மூன்று எளிய படிகளில் துல்லியமான பயிர் நோய் கண்டறிதலைப் பெறுங்கள்.",

    // Footer
    "footer.description": "நவீன விவசாயிகளுக்கான AI-இயக்கப்படும் தாவர ஆரோக்கிய ஆலோசனை அமைப்பு.",
    "footer.quickLinks": "விரைவு இணைப்புகள்",
    "footer.contact": "தொடர்பு",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    // ChatBot
    "chatbot.title": "தாவர சுகாதார உதவியாளர்",
    "chatbot.subtitle": "பயிர்களைப் பற்றி எதையும் கேளுங்கள்",
    "chat.title": "தாவர ஆரோக்கிய உதவியாளர்",
    "chat.placeholder": "பயிர் நோய்களைப் பற்றி கேளுங்கள்...",
    "chat.welcome": "வணக்கம்! நான் உங்கள் தாவர ஆரோக்கிய உதவியாளர். இன்று உங்கள் பயிர்களில் நான் எப்படி உதவ முடியும்?",
  },
};

export const getTranslation = (lang: Language, key: string): string => {
  return translations[lang][key] || translations.en[key] || key;
};
