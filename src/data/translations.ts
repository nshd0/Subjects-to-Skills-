/**
 * Native translations for Subjects2Skills across 10 Indian Regional Languages
 * Verified according to NCERT, State SCERT, and Rajbhasha educational terminology standards.
 * Languages: English (default), Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Bengali, Marathi, Punjabi.
 */

export type SupportedLanguage = 
  | 'en' 
  | 'hi' 
  | 'ta' 
  | 'te' 
  | 'kn' 
  | 'ml' 
  | 'gu' 
  | 'bn' 
  | 'mr' 
  | 'pa';

export interface LanguageMeta {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  script: string;
  scertReference: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'en', name: 'English', nativeName: 'English', script: 'Latin', scertReference: 'NCERT / CBSE Baseline' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', script: 'Devanagari', scertReference: 'SCERT UP, Delhi, Rajasthan' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'Tamil', scertReference: 'TNSCERT (Samacheer Kalvi)' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', script: 'Telugu', scertReference: 'SCERT AP & SCERT Telangana' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', script: 'Kannada', scertReference: 'DSERT Karnataka' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', script: 'Malayalam', scertReference: 'Kerala SCERT (Samagra)' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', script: 'Gujarati', scertReference: 'GCERT Gandhinagar' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', script: 'Bengali', scertReference: 'WBBSE / SCERT West Bengal' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', script: 'Devanagari', scertReference: 'Maharashtra SCERT (Balbharati)' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', script: 'Gurmukhi', scertReference: 'SCERT Punjab (PSEB)' }
];

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  competency: string;
  learningOutcome: string;
  stage: string;
  foundational: string;
  preparatory: string;
  middle: string;
  secondary: string;
  planner: string;
  themeBundles: string;
  classroomResources: string;
  stateAlignments: string;
  coPlanning: string;
  peerReview: string;
  schoolDashboard: string;
  districtDashboard: string;
  pdTraining: string;
  offlineMode: string;
  filterByState: string;
  filterByGrade: string;
  filterBySubject: string;
  scaffolding: string;
  simplifyLearners: string;
  extendLearners: string;
  udlModes: string;
  iepGoals: string;
  allStates: string;
  searchPlaceholder: string;
  verifiedOfficial: string;
  downloadPdf: string;
  livePresence: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    appName: 'Subjects2Skills',
    tagline: 'From Subjects to Skills · NEP 2020 & State SCERT Competency Framework',
    competency: 'Competency',
    learningOutcome: 'Learning Outcome',
    stage: 'Pedagogical Stage',
    foundational: 'Foundational Stage (Ages 3–8)',
    preparatory: 'Preparatory Stage (Ages 8–11)',
    middle: 'Middle Stage (Ages 11–14)',
    secondary: 'Secondary Stage (Ages 14–18)',
    planner: 'Unit & Lesson Planner',
    themeBundles: 'Interdisciplinary Theme Bundles',
    classroomResources: 'Classroom Resources & Activity Bank',
    stateAlignments: 'State SCERT Textbook Alignments',
    coPlanning: 'Real-Time Co-Planning',
    peerReview: 'Peer Review & Audit',
    schoolDashboard: 'School Dashboard',
    districtDashboard: 'District & Block Analytics',
    pdTraining: 'DIKSHA & NISHTHA PD Hours',
    offlineMode: 'Offline-First Mode',
    filterByState: 'Filter by State Board',
    filterByGrade: 'Filter by Grade Level',
    filterBySubject: 'Filter by Subject Area',
    scaffolding: 'Differentiation & Scaffolding',
    simplifyLearners: 'Simplify for Struggling Learners',
    extendLearners: 'Extend for Advanced Learners',
    udlModes: 'Universal Design for Learning (UDL)',
    iepGoals: 'Individualized Education Plan (IEP) Alignments',
    allStates: 'All 12 States & National CBSE',
    searchPlaceholder: 'Search competencies, chapters, skills, textbooks...',
    verifiedOfficial: 'Official SCERT Verified',
    downloadPdf: 'Download / Print Plan',
    livePresence: 'Real-Time Collaborators'
  },
  hi: {
    appName: 'सब्जेक्ट्स2स्किल्स',
    tagline: 'विषयों से दक्षताओं की ओर · एनईपी 2020 एवं राज्य एससीईआरटी पाठ्यचर्या ढांचा',
    competency: 'दक्षता (सक्षमता)',
    learningOutcome: 'अधिगम प्रतिफल',
    stage: 'शैक्षणिक स्तर (चरण)',
    foundational: 'बुनियादी चरण (आयु 3–8 वर्ष)',
    preparatory: 'प्रारंभिक चरण (आयु 8–11 वर्ष)',
    middle: 'मध्य चरण (आयु 11–14 वर्ष)',
    secondary: 'माध्यमिक चरण (आयु 14–18 वर्ष)',
    planner: 'इकाई एवं पाठ योजनाकार',
    themeBundles: 'अंतःविषय थीम बंडल',
    classroomResources: 'कक्षा संसाधन एवं गतिविधि बैंक',
    stateAlignments: 'राज्य एससीईआरटी पाठ्यपुस्तक संरेखण',
    coPlanning: 'रीयल-टाइम सह-योजना',
    peerReview: 'सहकर्मी शिक्षक समीक्षा',
    schoolDashboard: 'विद्यालय नेतृत्व डैशबोर्ड',
    districtDashboard: 'ज़िला एवं ब्लॉक विश्लेषण',
    pdTraining: 'दीक्षा एवं निष्ठा शिक्षक प्रशिक्षण',
    offlineMode: 'ऑफ़लाइन-प्रथम मोड',
    filterByState: 'राज्य बोर्ड अनुसार चुनें',
    filterByGrade: 'कक्षा स्तर अनुसार चुनें',
    filterBySubject: 'विषय क्षेत्र अनुसार चुनें',
    scaffolding: 'विभेदीकरण एवं सहायता ढांचा',
    simplifyLearners: 'धीमी गति से सीखने वालों हेतु सरलीकरण',
    extendLearners: 'प्रतिभाशाली छात्रों हेतु संवर्धन',
    udlModes: 'सार्वभौमिक शिक्षण अभिकल्प (UDL)',
    iepGoals: 'समावेशी शिक्षा योजना (IEP) संरेखण',
    allStates: 'सभी 12 राज्य एवं राष्ट्रीय सीबीएसई',
    searchPlaceholder: 'दक्षताएँ, पाठ्यपुस्तक, अध्याय, कौशल खोजें...',
    verifiedOfficial: 'आधिकारिक एससीईआरटी सत्यापित',
    downloadPdf: 'योजना डाउनलोड / प्रिंट करें',
    livePresence: 'लाइव सक्रिय शिक्षक'
  },
  ta: {
    appName: 'சப்ஜெக்ட்ஸ்2ஸ்கில்ஸ்',
    tagline: 'பாடங்களிலிருந்து திறன்களுக்கு · புதிய கல்விக் கொள்கை & மாநிலக் கலைத்திட்டம்',
    competency: 'திறன் (ஆற்றல்)',
    learningOutcome: 'கற்றல் விளைவு',
    stage: 'கல்விப் படிநிலை',
    foundational: 'அடித்தளப் பருவம் (வயது 3–8)',
    preparatory: 'ஆயத்தப் பருவம் (வயது 8–11)',
    middle: 'நடுநிலைப் பருவம் (வயது 11–14)',
    secondary: 'உயர்நிலைப் பருவம் (வயது 14–18)',
    planner: 'பாடத்திட்ட வடிவமைப்பு',
    themeBundles: 'பன்முகப் பாடத் தொகுப்புகள்',
    classroomResources: 'வகுப்பறை வளங்கள் & செயல்பாட்டு வங்கி',
    stateAlignments: 'தமிழ்நாடு சமச்சீர் கல்வி இணைப்பு',
    coPlanning: 'நேரலை இணைத் திட்டமிடல்',
    peerReview: 'ஆசிரியர் சக மதிப்பாய்வு',
    schoolDashboard: 'பள்ளித் தலைமை டாஷ்போர்டு',
    districtDashboard: 'மாவட்ட & வட்டாரப் பகுப்பாய்வு',
    pdTraining: 'தீக்ஷா & நிஷ்டா பயிற்சி நேரங்கள்',
    offlineMode: 'ஆஃப்லைன் செயல்முறை',
    filterByState: 'மாநில வாரியம் தேர்வுசெய்க',
    filterByGrade: 'வகுப்பு தேர்வுசெய்க',
    filterBySubject: 'பாடம் தேர்வுசெய்க',
    scaffolding: 'பன்முகக் கற்றல் ஆதரவு',
    simplifyLearners: 'கற்றலில் பின்தங்கிய மாணவர்களுக்கான எளிய வடிவம்',
    extendLearners: 'மேம்பட்ட மாணவர்களுக்கான ஆழமான பயிற்சி',
    udlModes: 'அனைவருக்குமான உலகளாவிய கற்றல் வடிவமைப்பு (UDL)',
    iepGoals: 'தனிப்பயன் கல்வித் திட்டம் (IEP)',
    allStates: 'அனைத்து மாநிலங்கள் & சிபிஎஸ்இ',
    searchPlaceholder: 'திறன்கள், பாடநூல் அத்தியாயங்களைத் தேடுக...',
    verifiedOfficial: 'மாநில அரசால் அங்கீகரிக்கப்பட்டது',
    downloadPdf: 'பதிவிறக்கம் / அச்சிடுக',
    livePresence: 'நேரலை ஆசிரியர்கள்'
  },
  te: {
    appName: 'సబ్జెక్ట్స్2స్కిల్స్',
    tagline: 'విషయాల నుండి నైపుణ్యాల వైపు · ఎన్‌ఈపీ 2020 & రాష్ట్ర విద్యా ప్రణాళిక',
    competency: 'సామర్థ్యం (నైపుణ్యం)',
    learningOutcome: 'అభ్యసన ఫలితం',
    stage: 'బోధనా దశ',
    foundational: 'పునాది దశ (వయస్సు 3–8)',
    preparatory: 'ప్రాథమిక దశ (వయస్సు 8–11)',
    middle: 'మాధ్యమిక దశ (వయస్సు 11–14)',
    secondary: 'ద్వితీయ దశ (వయస్సు 14–18)',
    planner: 'పాఠ్యాంశ ప్రణాళికా వేదిక',
    themeBundles: 'బహుళ విషయాల సమగ్ర థీమ్స్',
    classroomResources: 'తరగతి గది వనరులు & కృత్య నిధి',
    stateAlignments: 'రాష్ట్ర ఎస్సీఈఆర్టీ పాఠ్యపుస్తక అనుసంధానం',
    coPlanning: 'రియల్-టైమ్ ఉపాధ్యాయ సహకారం',
    peerReview: 'ఉపాధ్యాయుల సమీక్ష',
    schoolDashboard: 'పాఠశాల డాష్‌బోర్డ్',
    districtDashboard: 'జిల్లా & మండల విశ్లేషణ',
    pdTraining: 'దీక్ష & నిష్టా శిక్షణ గంటలు',
    offlineMode: 'ఆఫ్‌లైన్ ప్రాధాన్యత',
    filterByState: 'రాష్ట్ర బోర్డు ఎంపిక',
    filterByGrade: 'తరగతి ఎంపిక',
    filterBySubject: 'విషయ ఎంపిక',
    scaffolding: 'విభిన్న అభ్యసన మద్దతు',
    simplifyLearners: 'సాధారణ అభ్యాసకుల కోసం సరళీకరణ',
    extendLearners: 'ముందంజలో ఉన్న విద్యార్థుల కోసం విస్తరణ',
    udlModes: 'సార్వత్రిక అభ్యసన రూపకల్పన (UDL)',
    iepGoals: 'ప్రత్యేక అవసరాల ప్రణాళిక (IEP)',
    allStates: 'అన్ని రాష్ట్రాలు & సీబీఎస్ఈ',
    searchPlaceholder: 'సామర్థ్యాలు, పాఠ్యపుస్తకాలు శోధించండి...',
    verifiedOfficial: 'అధికారిక ఎస్సీఈఆర్టీ ధృవీకృతం',
    downloadPdf: 'డౌన్‌లోడ్ / ప్రింట్ చేయండి',
    livePresence: 'ఆన్‌లైన్ ఉపాధ్యాయులు'
  },
  kn: {
    appName: 'ಸಬ್ಜೆಕ್ಟ್ಸ್2ಸ್ಕಿಲ್ಸ್',
    tagline: 'ವಿಷಯಗಳಿಂದ ಕೌಶಲ್ಯಗಳೆಡೆಗೆ · ಎನ್ಇಪಿ 2020 & ಡಿಎಸ್ಇಆರ್ಟಿ ಪಠ್ಯಕ್ರಮ',
    competency: 'ಸಾಮರ್ಥ್ಯ (ಕೌಶಲ್ಯ)',
    learningOutcome: 'ಕಲಿಕಾ ಫಲ',
    stage: 'ಬೋಧನಾ ಹಂತ',
    foundational: 'ಬುಡಕಟ್ಟು ಹಂತ (ವಯಸ್ಸು 3–8)',
    preparatory: 'ಸಿದ್ಧತಾ ಹಂತ (ವಯಸ್ಸು 8–11)',
    middle: 'ಮಧ್ಯಮ ಹಂತ (ವಯಸ್ಸು 11–14)',
    secondary: 'ಪ್ರೌಢ ಹಂತ (ವಯಸ್ಸು 14–18)',
    planner: 'ಪಾಠ ಮತ್ತು ಘಟಕ ಯೋಜಕ',
    themeBundles: 'ಅಂತರ್-ವಿಷಯ ಥೀಮ್ ಬಂಡಲ್ಗಳು',
    classroomResources: 'ತರಗತಿ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು',
    stateAlignments: 'ಕರ್ನಾಟಕ ಡಿಎಸ್ಇಆರ್ಟಿ ಪಠ್ಯಪುಸ್ತಕ ಜೋಡಣೆ',
    coPlanning: 'ನೈಜ-ಸಮಯದ ಸಹ-ಯೋಜನೆ',
    peerReview: 'ಸಹಶಿಕ್ಷಕರ ವಿಮರ್ಶೆ',
    schoolDashboard: 'ಶಾಲಾ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    districtDashboard: 'ಜಿಲ್ಲಾ ಮತ್ತು ಬ್ಲಾಕ್ ವಿಶ್ಲೇಷಣೆ',
    pdTraining: 'ದೀಕ್ಷಾ ಮತ್ತು ನಿಷ್ಠಾ ತರಬೇತಿ ಅವಧಿಗಳು',
    offlineMode: 'ಆಫ್‌ಲೈನ್ ಆದ್ಯತೆ ಮೋಡ್',
    filterByState: 'ರಾಜ್ಯ ಮಂಡಳಿ ಫಿಲ್ಟರ್',
    filterByGrade: 'ತರಗತಿ ಫಿಲ್ಟರ್',
    filterBySubject: 'ವಿಷಯ ಫಿಲ್ಟರ್',
    scaffolding: 'ವಿಶಿಷ್ಟ ಕಲಿಕಾ ಬೆಂಬಲ',
    simplifyLearners: 'ಕಲಿಕೆಯಲ್ಲಿ ಹಿಂದುಳಿದವರಿಗೆ ಸರಳೀಕರಣ',
    extendLearners: 'ಮುಂದುವರಿದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿಸ್ತರಣೆ',
    udlModes: 'ಸಾರ್ವತ್ರಿಕ ಕಲಿಕಾ ವಿನ್ಯಾಸ (UDL)',
    iepGoals: 'ವೈಯಕ್ತಿಕ ಶಿಕ್ಷಣ ಯೋಜನೆ (IEP)',
    allStates: 'ಎಲ್ಲಾ 12 ರಾಜ್ಯಗಳು ಮತ್ತು ಸಿಬಿಎಸ್ಇ',
    searchPlaceholder: 'ಸಾಮರ್ಥ್ಯಗಳು, ಪಾಠಗಳು ಹುಡುಕಿ...',
    verifiedOfficial: 'ಅಧಿಕೃತ ಡಿಎಸ್ಇಆರ್ಟಿ ಪರಿಶೀಲಿತ',
    downloadPdf: 'ಡೌನ್‌ಲೋಡ್ / ಮುದ್ರಿಸಿ',
    livePresence: 'ಸಕ್ರಿಯ ಶಿಕ್ಷಕರು'
  },
  ml: {
    appName: 'സബ്ജക്റ്റ്സ്2സ്കിൽസ്',
    tagline: 'വിഷയങ്ങളിൽ നിന്ന് ശേഷികളിലേക്ക് · ദേശീയ പാഠ്യപദ്ധതിയും സമഗ്ര പോർട്ടലും',
    competency: 'ശേഷി (പ്രാപ്തി)',
    learningOutcome: 'പഠനനേട്ടം',
    stage: 'വിദ്യാഭ്യാസ ഘട്ടം',
    foundational: 'അടിസ്ഥാന ഘട്ടം (പ്രായം 3–8)',
    preparatory: 'തയ്യാറെടുപ്പ് ഘട്ടം (പ്രായം 8–11)',
    middle: 'മിഡിൽ ഘട്ടം (പ്രായം 11–14)',
    secondary: 'സെക്കൻഡറി ഘട്ടം (പ്രായം 14–18)',
    planner: 'പാഠാസൂത്രണ സഹായി',
    themeBundles: 'വിഷയാധിഷ്ഠിത പാക്കേജുകൾ',
    classroomResources: 'ക്ലാസ്റൂം റിസോഴ്സ് ബാങ്ക്',
    stateAlignments: 'കേരള എസ്.സി.ഇ.ആർ.ടി പാഠപുസ്തക ബന്ധം',
    coPlanning: 'തത്സമയ അധ്യാപക കൂട്ടായ്മ',
    peerReview: 'സഹപാഠി അധ്യാപക വിലയിരുത്തൽ',
    schoolDashboard: 'സ്കൂൾ ലീഡർഷിപ്പ് ഡാഷ്ബോർഡ്',
    districtDashboard: 'ജില്ലാ / ബ്ലോക്ക് തല വിശകലനം',
    pdTraining: 'ദീക്ഷ & നിഷ്ഠാ പരിശീലനം',
    offlineMode: 'ഓഫ്‌ലൈൻ സംവിധാനം',
    filterByState: 'സംസ്ഥാന ബോർഡ് തിരഞ്ഞെടുക്കുക',
    filterByGrade: 'ക്ലാസ് തിരഞ്ഞെടുക്കുക',
    filterBySubject: 'വിഷയം തിരഞ്ഞെടുക്കുക',
    scaffolding: 'വിഭിന്നതല പഠന പിന്തുണ',
    simplifyLearners: 'പ്രയാസമനുഭവിക്കുന്ന കുട്ടികൾക്ക് ലളിതരൂപം',
    extendLearners: 'മിടുക്കരായ കുട്ടികൾക്ക് കൂടുതൽ വെല്ലുവിളികൾ',
    udlModes: 'സാർവത്രിക പഠന മാതൃക (UDL)',
    iepGoals: 'പ്രത്യേക പരിഗണനാ പദ്ധതി (IEP)',
    allStates: 'എല്ലാ സംസ്ഥാനങ്ങളും സി.ബി.എസ്.ഇയും',
    searchPlaceholder: 'ശേഷികൾ, പാഠഭാഗങ്ങൾ തിരയുക...',
    verifiedOfficial: 'ഔദ്യോഗിക എസ്.സി.ഇ.ആർ.ടി അംഗീകൃതം',
    downloadPdf: 'ഡൗൺലോഡ് / പ്രിന്റ് ചെയ്യുക',
    livePresence: 'തത്സമയ അധ്യാപകർ'
  },
  gu: {
    appName: 'સબ્જેક્ટ્સ2સ્કિલ્સ',
    tagline: 'વિષયોથી કૌશલ્યો તરફ · એનઇપી 2020 અને જીસીઇઆરટી અભ્યાસક્રમ',
    competency: 'ક્ષમતા (કૌશલ્ય)',
    learningOutcome: 'અધ્યયન નિષ્પત્તિ',
    stage: 'શૈક્ષણિક તબક્કો',
    foundational: 'પાયાનો તબક્કો (ઉંમર 3–8)',
    preparatory: 'પ્રારંભિક તબક્કો (ઉંમર 8–11)',
    middle: 'મધ્યમ તબક્કો (ઉંમર 11–14)',
    secondary: 'માધ્યમિક તબક્કો (ઉંમર 14–18)',
    planner: 'પાઠ અને એકમ આયોજક',
    themeBundles: 'આંતર-વિષયક થીમ બંડલ્સ',
    classroomResources: 'વર્ગખંડ સાધનો અને પ્રવૃત્તિ બેંક',
    stateAlignments: 'ગુજરાત જીસીઇઆરટી પાઠ્યપુસ્તક જોડાણ',
    coPlanning: 'રિયલ-ટાઇમ સહ-આયોજન',
    peerReview: 'શિક્ષક સમીક્ષા પ્રક્રિયા',
    schoolDashboard: 'શાળા ડેશબોર્ડ',
    districtDashboard: 'જિલ્લા અને બ્લોક પૃથ્થકરણ',
    pdTraining: 'દીક્ષા અને નિષ્ઠા તાલીમ કલાકો',
    offlineMode: 'ઑફલાઇન પ્રાથમિકતા મોડ',
    filterByState: 'રાજ્ય બોર્ડ ફિલ્ટર',
    filterByGrade: 'ધોરણ પસંદ કરો',
    filterBySubject: 'વિષય પસંદ કરો',
    scaffolding: 'વૈવિધ્યસભર શિક્ષણ સહાય',
    simplifyLearners: 'ધીમા શીખનારાઓ માટે સરળીકરણ',
    extendLearners: 'તેજસ્વી વિદ્યાર્થીઓ માટે વિસ્તરણ',
    udlModes: 'સાર્વત્રિક અધ્યયન રચના (UDL)',
    iepGoals: 'વ્યક્તિગત શિક્ષણ યોજના (IEP)',
    allStates: 'તમામ 12 રાજ્યો અને સીબીએસઈ',
    searchPlaceholder: 'ક્ષમતાઓ, પાઠ્યપુસ્તકો શોધો...',
    verifiedOfficial: 'સત્તાવાર જીસીઇઆરટી ચકાસાયેલ',
    downloadPdf: 'ડાઉનલોડ / પ્રિન્ટ કરો',
    livePresence: 'લાઇવ શિક્ષકો'
  },
  bn: {
    appName: 'সাবজেক্টস২স্কিলস',
    tagline: 'বিষয় থেকে দক্ষতায় উত্তরণ · এনইপি ২০২০ ও এসসিইআরটি শিক্ষাক্রম',
    competency: 'দক্ষতা (সামর্থ্য)',
    learningOutcome: 'শিখন সামর্থ্য / ফলাফল',
    stage: 'শিক্ষণ পর্যায়',
    foundational: 'বুনিয়াদি স্তর (বয়স ৩–৮)',
    preparatory: 'প্রস্তুতি স্তর (বয়স ৮–১১)',
    middle: 'মধ্যবর্তী স্তর (বয়স ১১–১৪)',
    secondary: 'মাধ্যমিক স্তর (বয়স ১৪–১৮)',
    planner: 'পাঠ পরিকল্পনা নির্দেশিকা',
    themeBundles: 'আন্তঃবিষয়ক থিম বান্ডিল',
    classroomResources: 'শ্রেণিকক্ষ সম্পদ ও ক্রিয়াকলাপ ব্যাংক',
    stateAlignments: 'পশ্চিমবঙ্গ এসসিইআরটি পাঠ্যবই সংযোগ',
    coPlanning: 'রিয়েল-টাইম যৌথ পাঠ পরিকল্পনা',
    peerReview: 'সহশিক্ষক পর্যালোচনা ও যাচাই',
    schoolDashboard: 'বিদ্যালয় নেতৃত্ব ড্যাশবোর্ড',
    districtDashboard: 'জেলা ও ব্লক পরিসংখ্যান',
    pdTraining: 'দীক্ষা ও নিষ্ঠা শিক্ষক প্রশিক্ষণ',
    offlineMode: 'অফলাইন-প্রথম মোড',
    filterByState: 'রাজ্য বোর্ড নির্বাচন',
    filterByGrade: 'শ্রেণি নির্বাচন',
    filterBySubject: 'বিষয় নির্বাচন',
    scaffolding: 'পার্থক্যভিত্তিক শিখন সহায়তা',
    simplifyLearners: 'সহজে বোঝার জন্য সরলীকরণ',
    extendLearners: 'অগ্রগামী শিক্ষার্থীদের জন্য সমৃদ্ধিকরণ',
    udlModes: 'সার্বজনীন শিখন নকশা (UDL)',
    iepGoals: 'বিশেষ চাহিদাভিত্তিক শিক্ষা পরিকল্পনা (IEP)',
    allStates: 'সবকটি রাজ্য ও সিবিএসই',
    searchPlaceholder: 'দক্ষতা, পাঠ্যবই, অধ্যায় অনুসন্ধান...',
    verifiedOfficial: 'সরকারি এসসিইআরটি যাচাইকৃত',
    downloadPdf: 'ডাউনলোড / প্রিন্ট করুন',
    livePresence: 'সক্রিয় সহশিক্ষক'
  },
  mr: {
    appName: 'सब्जेक्ट्स2स्किल्स',
    tagline: 'विषयांकडून कौशल्यांकडे · एनईपी २०२० व बालभारती अभ्यासक्रम',
    competency: 'क्षमता (कौशल्य)',
    learningOutcome: 'अध्ययन निष्पत्ती',
    stage: 'शैक्षणिक टप्पा',
    foundational: 'पायाभूत टप्पा (वय ३–८ वर्ष)',
    preparatory: 'पूर्वतयारी टप्पा (वय ८–११ वर्ष)',
    middle: 'माध्यमिक टप्पा (वय ११–१४ वर्ष)',
    secondary: 'उच्च माध्यमिक टप्पा (वय १४–१८ वर्ष)',
    planner: 'पाठ व घटक नियोजन साधन',
    themeBundles: 'आंतर-विषय संकल्पना संच',
    classroomResources: 'वर्गखोली संसाधने व कृती बँक',
    stateAlignments: 'महाराष्ट्र बालभारती पाठ्यपुस्तक समन्वय',
    coPlanning: 'थेट सह-नियोजन (रियल-टाइम)',
    peerReview: 'सहशिक्षक पुनरावलोकन',
    schoolDashboard: 'शाळा नेतृत्व डॅशबोर्ड',
    districtDashboard: 'जिल्हा व तालुका विश्लेषण',
    pdTraining: 'दीक्षा व निष्ठा शिक्षक प्रशिक्षण',
    offlineMode: 'ऑफलाइन प्रथम मोड',
    filterByState: 'राज्य मंडळ निवडा',
    filterByGrade: 'इयत्ता निवडा',
    filterBySubject: 'विषय निवडा',
    scaffolding: 'अध्ययन साहाय्य व स्तररचना',
    simplifyLearners: 'सावकाश शिकणाऱ्यांसाठी सुलभीकरण',
    extendLearners: 'प्रगत विद्यार्थ्यांसाठी समृद्धीकरण',
    udlModes: 'सर्वसमावेशक अध्ययन आराखडा (UDL)',
    iepGoals: 'वैयक्तिक शिक्षण आराखडा (IEP)',
    allStates: 'सर्व १२ राज्ये व सीबीएसई',
    searchPlaceholder: 'क्षमता, धडे, पुस्तके शोधा...',
    verifiedOfficial: 'अधिकृत बालभारती प्रमाणित',
    downloadPdf: 'डाउनलोड / मुद्रण करा',
    livePresence: 'थेट उपस्थित शिक्षक'
  },
  pa: {
    appName: 'ਸਬਜੈਕਟਸ2ਸਕਿੱਲਸ',
    tagline: 'ਵਿਸ਼ਿਆਂ ਤੋਂ ਹੁਨਰ ਵੱਲ · ਐਨਈਪੀ 2020 ਅਤੇ ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ',
    competency: 'ਸਮਰੱਥਾ (ਹੁਨਰ)',
    learningOutcome: 'ਸਿੱਖਣ ਦੇ ਨਤੀਜੇ',
    stage: 'ਵਿੱਦਿਅਕ ਪੜਾਅ',
    foundational: 'ਬੁਨਿਆਦੀ ਪੜਾਅ (ਉਮਰ 3–8 ਸਾਲ)',
    preparatory: 'ਮੁੱਢਲਾ ਪੜਾਅ (ਉਮਰ 8–11 ਸਾਲ)',
    middle: 'ਮੱਧ ਪੜਾਅ (ਉਮਰ 11–14 ਸਾਲ)',
    secondary: 'ਸੈਕੰਡਰੀ ਪੜਾਅ (ਉਮਰ 14–18 ਸਾਲ)',
    planner: 'ਯੂਨਿਟ ਅਤੇ ਪਾਠ ਯੋਜਨਾਕਾਰ',
    themeBundles: 'ਅੰਤਰ-ਵਿਸ਼ਾ ਥੀਮ ਬੰਡਲ',
    classroomResources: 'ਜਮਾਤ ਵਸੀਲੇ ਅਤੇ ਸਰਗਰਮੀ ਬੈਂਕ',
    stateAlignments: 'ਪੰਜਾਬ ਐਸ.ਸੀ.ਈ.ਆਰ.ਟੀ. ਪਾਠ-ਪੁਸਤਕ ਮੇਲ',
    coPlanning: 'ਰੀਅਲ-ਟਾਈਮ ਸਾਂਝੀ ਯੋਜਨਾਬੰਦੀ',
    peerReview: 'ਅਧਿਆਪਕ ਸਮੀਖਿਆ',
    schoolDashboard: 'ਸਕੂਲ ਲੀਡਰਸ਼ਿਪ ਡੈਸ਼ਬੋਰਡ',
    districtDashboard: 'ਜ਼ਿਲ੍ਹਾ ਅਤੇ ਬਲਾਕ ਵਿਸ਼ਲੇਸ਼ਣ',
    pdTraining: 'ਦੀਕਸ਼ਾ ਅਤੇ ਨਿਸ਼ਠਾ ਸਿਖਲਾਈ ਘੰਟੇ',
    offlineMode: 'ਆਫ਼ਲਾਈਨ ਮੋਡ',
    filterByState: 'ਸੂਬਾ ਬੋਰਡ ਚੁਣੋ',
    filterByGrade: 'ਜਮਾਤ ਚੁਣੋ',
    filterBySubject: 'ਵਿਸ਼ਾ ਚੁਣੋ',
    scaffolding: 'ਵੰਨ-ਸੁਵੰਨੀ ਸਿੱਖਿਆ ਸਹਾਇਤਾ',
    simplifyLearners: 'ਹੌਲੀ ਸਿੱਖਣ ਵਾਲਿਆਂ ਲਈ ਸਰਲਤਾ',
    extendLearners: 'ਤੇਜ਼ ਬੱਚਿਆਂ ਲਈ ਉੱਨਤ ਅਭਿਆਸ',
    udlModes: 'ਯੂਨੀਵਰਸਲ ਡਿਜ਼ਾਈਨ ਫ਼ਾਰ ਲਰਨਿੰਗ (UDL)',
    iepGoals: 'ਵਿਸ਼ੇਸ਼ ਸਿੱਖਿਆ ਯੋਜਨਾ (IEP)',
    allStates: 'ਸਾਰੇ 12 ਰਾਜ ਅਤੇ ਸੀ.ਬੀ.ਐੱਸ.ਈ.',
    searchPlaceholder: 'ਸਮਰੱਥਾਵਾਂ, ਪਾਠ-ਪੁਸਤਕਾਂ ਖੋਜੋ...',
    verifiedOfficial: 'ਸਰਕਾਰੀ ਪੀ.ਐੱਸ.ਈ.ਬੀ. ਪ੍ਰਮਾਣਿਤ',
    downloadPdf: 'ਡਾਊਨਲੋਡ / ਪ੍ਰਿੰਟ ਕਰੋ',
    livePresence: 'ਲਾਈਵ ਅਧਿਆਪਕ'
  }
};
