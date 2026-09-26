import { ClassroomResource } from '@/types';

export const INITIAL_CLASSROOM_RESOURCES: ClassroomResource[] = [
  // 1. WORKSHEET & HANDOUT (Science & Ecology)
  {
    id: 'res-ws-001',
    slug: 'watershed-topography-worksheet',
    title: 'Watershed Elevation & Bio-Indicator Field Worksheet',
    description: 'A 2-page printable field investigation worksheet for mapping contour gradients, identifying wetland bio-indicators, and computing stream health index.',
    resourceType: 'worksheet',
    grade: 'Grade 8',
    stage: 'middle',
    subject: 'General Science & Geography',
    stateBoards: ['cbse-ncert', 'kerala-scert', 'maharashtra-scert', 'karnataka-dsert'],
    languages: ['en', 'hi', 'kn', 'ml', 'mr'],
    skillsMapped: ['Spatial Mapping', 'Bio-indicator Analysis', 'Data Tabulation', 'Environmental Stewardship'],
    competencyCodes: ['NCERT-MD-S8.11', 'KL-SCERT-SCI-6.2', 'MH-SCERT-SCI-8.3'],
    udlModes: ['visual', 'kinesthetic', 'reading-writing'],
    iepGoals: [
      'Visual Organization (Structured split-column data entry grid)',
      'Attention Focus (Chunked 5-minute sampling checkpoints)',
      'Fine Motor (Pre-ruled large measurement tick marks)'
    ],
    scaffolding: {
      simplify: 'Provide color-coded contour height overlays (blue for valleys, brown for ridges) and simplified macro-invertebrate photo flashcards (3 target species instead of 10).',
      extend: 'Calculate mathematical hydraulic retention time and predict runoff contamination velocity using Darcy’s law approximations.'
    },
    multilingualVocab: [
      {
        term: 'Watershed / Catchment Area',
        transliteration: 'Jal-grahan Kshetra',
        translations: {
          hi: 'जल-ग्रहण क्षेत्र (वाटरशेड)',
          ta: 'நீர்ப்பிடிப்பு பகுதி',
          te: 'నీటి పరీవాహక ప్రాంతం',
          kn: 'ಜಲಾನಯನ ಪ್ರದೇಶ',
          ml: 'നീർത്തട പ്രദേശം',
          gu: 'જળસંગ્રહ ક્ષેત્ર',
          bn: 'জলবিভাজিকা অঞ্চল',
          mr: 'पाणलोट क्षेत्र',
          pa: 'ਜਲ-ਗ੍ਰਹਿਣ ਖੇਤਰ'
        },
        classroomPrompt: 'Ask students to trace how rainwater flowing down a rooftop or hillside gathers into a single drain or stream.'
      },
      {
        term: 'Bio-Indicator Species',
        transliteration: 'Jaivik Soochak',
        translations: {
          hi: 'जैविक सूचक प्रजाति',
          ta: 'உயிரி சுட்டிக்காட்டி',
          te: 'జీవ సూచిక జాతులు',
          kn: 'ಜೈವಿಕ ಸೂಚಕ ಪ್ರಭೇದಗಳು',
          ml: 'ജൈവ സൂചകങ്ങൾ',
          gu: 'જૈવિક સૂચક પ્રજાતિ',
          bn: 'জৈব নির্দেশক প্রজাতি',
          mr: 'जैविक सूचक प्रजाती',
          pa: 'ਜੈਵਿਕ ਸੂਚਕ ਪ੍ਰਜਾਤੀਆਂ'
        },
        classroomPrompt: 'Explain how the presence of sensitive mayfly nymphs proves clean, oxygenated stream water.'
      }
    ],
    content: {
      printablePdfPreview: 'Subjects2Skills Official Worksheet Series · Aligned with NCF-SE Middle Stage Science & Environmental Studies.',
      answerKey: 'Section A: 1. Contour intervals = 5 meters; 2. Mayfly nymph indicates High Dissolved Oxygen (>6 mg/L); Tubifex worm indicates Organic Enrichment/Low DO (<2 mg/L). Section B: Watershed A slope is 12% steeper than Watershed B, resulting in 2.3x faster runoff.',
      estimatedMinutes: 45
    },
    downloadsCount: 542,
    rating: 4.9,
    ratingCount: 38,
    author: {
      id: 'auth-ananya',
      name: 'Ananya Deshmukh',
      schoolName: 'Kendriya Vidyalaya IIT Powai, Mumbai',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'school-email'
    },
    license: 'CC BY-SA 4.0',
    peerReviews: [
      {
        id: 'pr-ws-001',
        reviewerId: 'rev-prof-ramesh',
        reviewerName: 'Dr. Ramesh Kulkarni',
        reviewerDesignation: 'HOD Science Education, Balbharati Reviewer',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Outstanding multi-lingual vocabulary bridge. Answer key provides exact quantitative thresholds compliant with NCF-SE.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 10
      },
      {
        id: 'pr-ws-002',
        reviewerId: 'rev-saritha',
        reviewerName: 'Saritha Menon',
        reviewerDesignation: 'Senior PGT Biology, Thiruvananthapuram',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 4,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Tested with 40 Grade 8 students in coastal Kerala. Highly engaging and fully accessible.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 5
      }
    ],
    peerReviewedBadge: true,
    status: 'published',
    sourceCitation: 'NCERT Class 8 Science Ch 11, Maharashtra Balbharati Science Ch 3, Kerala SCERT Basic Science Ch 2.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 20,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 2
  },

  // 2. SLIDE DECK (Mathematics / Data Representation)
  {
    id: 'res-slide-002',
    slug: 'data-handling-interactive-deck',
    title: 'Visualizing Frequency & Pie Charts in Daily Life',
    description: 'An interactive 15-slide presentation template with step-by-step angle calculations, real Indian census data, and embedded teacher discussion prompts.',
    resourceType: 'slides',
    grade: 'Grade 8',
    stage: 'middle',
    subject: 'Mathematics',
    stateBoards: ['cbse-ncert', 'tamilnadu-scert', 'delhi-scert', 'rajasthan-rscert', 'up-scert'],
    languages: ['en', 'hi', 'ta'],
    skillsMapped: ['Data Visualization', 'Proportional Reasoning', 'Angular Measurement', 'Statistical Interpretation'],
    competencyCodes: ['NCERT-MD-M8.5', 'TN-SCERT-MAT-8.1', 'DL-SCERT-FLN-1.1'],
    udlModes: ['visual', 'auditory'],
    iepGoals: [
      'Dyscalculia Accommodations (High contrast color sectors with pre-calculated percent-to-degree formula cards)',
      'Executive Function (Step-by-step visual workflow for protractor alignment)'
    ],
    scaffolding: {
      simplify: 'Provide circular templates divided into 12 equal 30-degree clock segments before transitioning to 360-degree protractor divisions.',
      extend: 'Have students construct double-bar charts and evaluate standard deviation from sample rural vs. urban literacy rates.'
    },
    multilingualVocab: [
      {
        term: 'Central Angle of Sector',
        transliteration: 'Kendriya Kon',
        translations: {
          hi: 'त्रिज्यखंड का केंद्रीय कोण (केन्द्रीय कोण)',
          ta: 'வட்டக்கோணப் பகுதியின் மையக் கோணம்',
          te: 'సెక్టార్ యొక్క కేంద్ర కోణం',
          kn: 'ವಲಯದ ಕೇಂದ್ರ ಕೋನ',
          ml: 'സെക്ടറിന്റെ കേന്ദ്ര കോൺ',
          gu: 'વૃતાંશનો કેન્દ્રિય ખૂણો',
          bn: 'বৃত্তকলার কেন্দ্রস্থ কোণ',
          mr: 'वर्तुळपाकळीचा केंद्रीय कोन',
          pa: 'ਸੈਕਟਰ ਦਾ ਕੇਂਦਰੀ ਕੋਣ'
        },
        classroomPrompt: 'Formula: (Value of component / Total value) × 360°. Ask students why the multiplier is always 360°.'
      }
    ],
    content: {
      slidesOutline: [
        {
          slideNumber: 1,
          title: 'From Raw Counts to Circular Stories',
          bullets: [
            'Why tables overwhelm while pie charts illuminate',
            'Real-world case: How our school cafeteria chooses mid-day meal grains'
          ],
          teacherNotes: 'Begin with quick show of hands: wheat vs rice preference. Tally on board in 60 seconds.'
        },
        {
          slideNumber: 2,
          title: 'The Math of the Whole Circle (360°)',
          bullets: [
            '100% of data = 360° of angular space',
            'Conversion algorithm: Angle = (Count / Total) × 360°',
            'Sanity check: All sector angles MUST sum to 360°'
          ],
          teacherNotes: 'Emphasize that the circle represents unity (1 whole). Have students physically trace circular protractors.'
        },
        {
          slideNumber: 3,
          title: 'Guided Practice: Water Footprint of School',
          bullets: [
            'Gardening: 120 Liters (120/300 × 360° = 144°)',
            'Drinking & Handwashing: 150 Liters (150/300 × 360° = 180°)',
            'Sanitation: 30 Liters (30/300 × 360° = 36°)'
          ],
          teacherNotes: 'Walk around room checking protractor pivot point placement on vertex.'
        }
      ],
      estimatedMinutes: 40
    },
    downloadsCount: 890,
    rating: 4.8,
    ratingCount: 64,
    author: {
      id: 'auth-pradeep',
      name: 'Pradeep Narayanan',
      schoolName: 'Delhi Public School, R.K. Puram, New Delhi',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'school-email'
    },
    license: 'CC BY-SA 4.0',
    peerReviews: [
      {
        id: 'pr-sl-001',
        reviewerId: 'rev-meenakshi',
        reviewerName: 'Meenakshi Sundaram',
        reviewerDesignation: 'TNSCERT Math Advisory Committee Member',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 4
        },
        decision: 'endorse',
        comments: 'Slide layouts are crisp and follow cognitive load theory. Excellent UDL considerations.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 14
      },
      {
        id: 'pr-sl-002',
        reviewerId: 'rev-vikram',
        reviewerName: 'Vikram Joshi',
        reviewerDesignation: 'CBSE Master Trainer, Jaipur',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Directly maps to NCERT Class 8 Ch 5 competencies. Downloaded by our entire mathematics department.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 7
      }
    ],
    peerReviewedBadge: true,
    status: 'published',
    sourceCitation: 'NCERT Class 8 Mathematics Ch 5 Data Handling, CBSE Curriculum 2025-26.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 25,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 3
  },

  // 3. VIDEO PLAYLIST (DIKSHA / NCERT Curated)
  {
    id: 'res-vid-003',
    slug: 'force-pressure-diksha-playlist',
    title: 'Force, Liquid Pressure & Hydraulic Principles (Curated DIKSHA Series)',
    description: 'Vetted collection of 4 high-definition video demonstrations with conceptual pause-points, showing inverted tumbler atmospheric pressure and U-tube manometer readings.',
    resourceType: 'video',
    grade: 'Grade 8',
    stage: 'middle',
    subject: 'Science (Physics)',
    stateBoards: ['cbse-ncert', 'kerala-scert', 'maharashtra-scert', 'westbengal-scert', 'punjab-scert'],
    languages: ['en', 'hi', 'bn', 'pa'],
    skillsMapped: ['Scientific Observation', 'Experimental Hypothesis', 'Atmospheric Physics', 'Inquiry Reasoning'],
    competencyCodes: ['NCERT-MD-S8.11', 'MH-SCERT-SCI-8.3', 'PB-SCERT-SCI-8.1'],
    udlModes: ['visual', 'auditory'],
    iepGoals: [
      'Auditory Processing (Synchronized subtitles in Hindi and English)',
      'Working Memory (Timestamped 2-minute chunk summaries)'
    ],
    scaffolding: {
      simplify: 'Provide slow-motion recap of syringe water draw with tactile balloon expansion during liquid pressure demonstrations.',
      extend: 'Derive Torricelli’s mercury barometer formula P = ρgh and calculate barometric drop at high altitudes (Shimla/Leh).'
    },
    multilingualVocab: [
      {
        term: 'Atmospheric Pressure',
        transliteration: 'Vayumandaliya Dabav',
        translations: {
          hi: 'वायुमंडलीय दबाव (दाब)',
          ta: 'வளிமண்டல அழுத்தம்',
          te: 'వాతావరణ పీడనం',
          kn: 'ವಾತಾವರಣದ ಒತ್ತಡ',
          ml: 'അന്തരീക്ഷ മർദ്ദം',
          gu: 'વાતાવરણીય દબાણ',
          bn: 'বায়ুমণ্ডলীয় চাপ',
          mr: 'वातावरणाचा दाब',
          pa: 'ਵਾਯੂਮੰਡਲੀ ਦਬਾਅ'
        },
        classroomPrompt: 'Hold a cardboard square under a full glass of water upside down to prove air pushes upward with 101.3 kPa.'
      }
    ],
    content: {
      videoUrl: 'https://diksha.gov.in/play/collection/do_3131725450849812481358',
      videoDuration: '14 mins (4 chapters)',
      dikshaLink: 'DIKSHA Portal QR Code: NCERT-SCI-08-11',
      estimatedMinutes: 20
    },
    downloadsCount: 1240,
    rating: 4.9,
    ratingCount: 112,
    author: {
      id: 'auth-harpreet',
      name: 'Harpreet Kaur',
      schoolName: 'Govt. Model Senior Secondary School, SAS Nagar Mohali',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'scert-credential'
    },
    license: 'CC BY-SA 4.0',
    peerReviews: [
      {
        id: 'pr-vd-001',
        reviewerId: 'rev-swapan',
        reviewerName: 'Swapan Chattopadhyay',
        reviewerDesignation: 'SCERT West Bengal Physics Resource Specialist',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Curated links are free of ads, 100% DIKSHA verified, with precise pause-and-reflect questions.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 12
      },
      {
        id: 'pr-vd-002',
        reviewerId: 'rev-dr-anand',
        reviewerName: 'Dr. Anand Kumar',
        reviewerDesignation: 'NCERT DESM Physics Consultant',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 4,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Meets every criterion of NCF-SE Middle Stage physics experiential inquiry.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 6
      }
    ],
    peerReviewedBadge: true,
    status: 'published',
    sourceCitation: 'NCERT Class 8 Science Chapter 11, DIKSHA Central Repository, Punjab SCERT Science Modules.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 4
  },

  // 4. HANDS-ON ACTIVITY KIT (Zero-Cost / Low-Cost Experiential)
  {
    id: 'res-kit-004',
    slug: 'diy-turbidity-and-sand-filter-kit',
    title: 'Zero-Cost DIY Multi-Layer Sand Filtration & Turbidity Kit',
    description: 'A step-by-step classroom maker guide using discarded 1L plastic bottles, coarse river gravel, sand, and charcoal powder to purify muddy water and measure turbidity.',
    resourceType: 'activity-kit',
    grade: 'Grade 7',
    stage: 'middle',
    subject: 'Environmental Science & Chemistry',
    stateBoards: ['cbse-ncert', 'kerala-scert', 'andhrapradesh-scert', 'telangana-scert', 'gujarat-gcert'],
    languages: ['en', 'hi', 'te', 'gu', 'ml'],
    skillsMapped: ['Engineering Design', 'Empirical Filtration', 'Experimental Variable Control', 'Sanitation Awareness'],
    competencyCodes: ['NCERT-MD-S7.12', 'AP-SCERT-SCI-7.7', 'TG-SCERT-EVS-4.6', 'GJ-GCERT-EVS-4.3'],
    udlModes: ['kinesthetic', 'visual'],
    iepGoals: [
      'Tactile & Sensory Processing (Clear texture segregation of gravel vs sand vs charcoal)',
      'Fine Motor Accommodations (Wide funnel lips and plastic scoop measuring cups)'
    ],
    scaffolding: {
      simplify: 'Provide pre-assembled filter column with transparent graduated stickers marking layers; focus student role on pouring and timing drip rate.',
      extend: 'Test filtering efficiency with biological charcoal vs standard wood ash, and measure effluent bacterial reduction via agar plate cultures.'
    },
    multilingualVocab: [
      {
        term: 'Filtration & Decantation',
        transliteration: 'Nisyandan aur Nitharna',
        translations: {
          hi: 'निस्यंदन (छानना) एवं निथारना',
          ta: 'வடிகட்டுதல் மற்றும் தெளிய வைத்து இறுத்தல்',
          te: 'వడపోత మరియు తేర్చడం',
          kn: 'ಶೋಧಿಸುವಿಕೆ ಮತ್ತು ತಿಳಿಗೊಳಿಸುವಿಕೆ',
          ml: 'അരിച്ചെടുക്കലും തെളിച്ചെടുക്കലും',
          gu: 'ગાળણ અને નિતારણ',
          bn: 'পরিশ্রাবণ ও থিতানো',
          mr: 'गाळणे व निवळणे',
          pa: 'ਨਿਖੇੜਨਾ ਅਤੇ ਨਿਤਾਰਨਾ'
        },
        classroomPrompt: 'Discuss why simple decantation leaves fine colloidal mud suspended, requiring microscopic pore filtration.'
      }
    ],
    content: {
      kitMaterials: [
        'Discarded 1-liter clear plastic beverage bottles (cut in half)',
        'Coarse washed gravel (bottom layer: 3 cm)',
        'Fine washed river sand (middle layer: 5 cm)',
        'Activated charcoal or crushed wood charcoal powder (top filtration: 2 cm)',
        'Clean cotton ball or piece of unbleached cotton muslin cloth',
        'Muddy test water prepared with red soil and organic garden compost'
      ],
      kitSteps: [
        'Step 1: Invert the top half of the cut bottle into the bottom half to serve as a funnel receptacle.',
        'Step 2: Plug the bottle mouth securely with a cotton ball or folded muslin cloth.',
        'Step 3: Pour 3 cm of coarse gravel to form the foundational drainage stratum.',
        'Step 4: Add 5 cm of fine clean sand, tapping gently to pack without packing too tightly.',
        'Step 5: Top with 2 cm of crushed charcoal powder to absorb chemical impurities and odors.',
        'Step 6: Slowly pour 200 ml of turbid muddy water and measure elapsed filtration time with a stopwatch.',
        'Step 7: Compare clarity of filtered effluent against a white card with printed black text (Secchi turbidity test).'
      ],
      safetyNotes: 'Water filtered through this physical kit is NOT potable without boiling or chlorination. Strictly for laboratory demonstration.',
      estimatedMinutes: 50
    },
    downloadsCount: 760,
    rating: 5.0,
    ratingCount: 52,
    author: {
      id: 'auth-venkat',
      name: 'Venkata Satyanarayana',
      schoolName: 'Zilla Parishad High School, Guntur, Andhra Pradesh',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'scert-credential'
    },
    license: 'CC BY-SA 4.0',
    peerReviews: [
      {
        id: 'pr-kit-001',
        reviewerId: 'rev-dr-anitha',
        reviewerName: 'Dr. Anitha Reddy',
        reviewerDesignation: 'SCERT Telangana Environmental Curriculum Lead',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'True zero-cost pedagogy! Every single material is easily accessible in rural or urban classrooms.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 16
      },
      {
        id: 'pr-kit-002',
        reviewerId: 'rev-kalyani',
        reviewerName: 'Kalyani Patel',
        reviewerDesignation: 'GCERT Science Resource Expert, Gandhinagar',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Safety guidelines are prominently displayed. Clear integration with local water purification practices.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 8
      }
    ],
    peerReviewedBadge: true,
    status: 'published',
    sourceCitation: 'NCERT Class 7 Science Ch 12, SCERT AP General Science Ch 7, GCERT Gandhinagar Aas Paas Modules.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 28,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 5
  },

  // 5. EXIT TICKET & FORMATIVE ASSESSMENT (5-Minute Quick Checks)
  {
    id: 'res-exit-005',
    slug: 'chemical-reactions-exit-tickets',
    title: '5-Minute Formative Exit Tickets: Chemical Reactions & Conservation',
    description: 'Set of 4 quick check-for-understanding slips featuring 1 diagnostic multiple-choice question and 1 short self-reflection prompt for immediate teacher instructional feedback.',
    resourceType: 'exit-ticket',
    grade: 'Grade 10',
    stage: 'secondary',
    subject: 'Science (Chemistry)',
    stateBoards: ['cbse-ncert', 'maharashtra-scert', 'kerala-scert', 'delhi-scert', 'up-scert', 'gujarat-gcert'],
    languages: ['en', 'hi', 'mr', 'gu'],
    skillsMapped: ['Formative Self-Assessment', 'Conservation of Mass', 'Chemical Balancing', 'Metacognition'],
    competencyCodes: ['NCERT-SEC-S10.6', 'MH-SCERT-ALG-10.1', 'GJ-GCERT-SCI-10.1', 'UP-SCERT-PHY-10.10'],
    udlModes: ['reading-writing', 'visual'],
    iepGoals: [
      'Visual Cues (Symbolic arrow diagrams showing reactants transforming to products)',
      'Anxiety Reduction (Non-graded formative diagnostic label: "My Learning Checkpoint")'
    ],
    scaffolding: {
      simplify: 'Provide skeletal atomic count table beneath the equation with empty boxes for coefficients.',
      extend: 'Identify reducing and oxidizing agents in non-aqueous redox reactions (e.g., Fe2O3 + 2Al → Al2O3 + 2Fe).'
    },
    multilingualVocab: [
      {
        term: 'Law of Conservation of Mass',
        transliteration: 'Dravyamaan Sanrakshan Ka Niyam',
        translations: {
          hi: 'द्रव्यमान संरक्षण का नियम',
          ta: 'பொருண்மை அழியாமை விதி',
          te: 'ద్రవ్య నిత్యత్వ నియమం',
          kn: 'ದ್ರವ್ಯರಾಶಿ ಸಂರಕ್ಷಣಾ ನಿಯಮ',
          ml: 'ദ്രവ്യ സംരക്ഷണ നിയമം',
          gu: 'દળ સંરક્ષણનો નિયમ',
          bn: 'ভরের নিত্যতা সূত্র',
          mr: 'वस्तुमान अक्षय्यतेचा नियम',
          pa: 'ਪੁੰਜ ਦੇ ਸੁਰੱਖਿਅਣ ਦਾ ਨਿਯਮ'
        },
        classroomPrompt: 'Why must every chemical equation be balanced? Because atoms are neither created nor destroyed.'
      }
    ],
    content: {
      exitTicketPrompts: [
        {
          id: 'et-q1',
          question: 'In the balanced equation: a Fe + b H2O → c Fe3O4 + d H2, what are the stoichiometric coefficients a, b, c, d?',
          type: 'mcq',
          options: [
            'A) 1, 4, 1, 4',
            'B) 3, 4, 1, 4 (Correct)',
            'C) 3, 2, 1, 2',
            'D) 2, 4, 1, 2'
          ],
          exemplarAnswer: 'Option B (3 Fe + 4 H2O → Fe3O4 + 4 H2). Iron atoms = 3 on both sides; Hydrogen = 8 on both sides; Oxygen = 4 on both sides.',
          rubricCriterion: 'Applies law of conservation of mass to balance polyatomic redox reactions.'
        },
        {
          id: 'et-q2',
          question: 'In one sentence, explain what evidence you observed in today\'s lab that proved a chemical reaction occurred rather than a physical change.',
          type: 'open',
          exemplarAnswer: 'The sudden evolution of effervescent hydrogen gas bubbles and exothermic temperature rise in the test tube proved new chemical bonds formed.',
          rubricCriterion: 'Cites empirical macroscopic indicators (gas evolution, thermal change, color shift, precipitate).'
        }
      ],
      estimatedMinutes: 5
    },
    downloadsCount: 980,
    rating: 4.9,
    ratingCount: 78,
    author: {
      id: 'auth-rajeshwari',
      name: 'Rajeshwari Iyer',
      schoolName: 'National Public School, Indiranagar, Bengaluru',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'school-email'
    },
    license: 'CC BY-SA 4.0',
    peerReviews: [
      {
        id: 'pr-et-001',
        reviewerId: 'rev-dr-chatterjee',
        reviewerName: 'Dr. Indranil Chatterjee',
        reviewerDesignation: 'Chemistry Curriculum Fellow, Kolkata',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Takes exactly 5 minutes at the end of class. Provides immediate actionable insight for the teacher’s next lesson plan.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 18
      },
      {
        id: 'pr-et-002',
        reviewerId: 'rev-savita',
        reviewerName: 'Savita Sharma',
        reviewerDesignation: 'UP SCERT Secondary Chemistry Master Educator',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 4
        },
        decision: 'endorse',
        comments: 'Exemplar answers provide instant grading support for busy teachers.',
        reviewedAt: Date.now() - 1000 * 60 * 60 * 24 * 9
      }
    ],
    peerReviewedBadge: true,
    status: 'published',
    sourceCitation: 'NCERT Class 10 Science Chapter 1, GSEB Class 10 Science, UP Board High School Chemistry.',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 22,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 1
  }
];
