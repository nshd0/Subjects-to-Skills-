import { ThemeBundle } from '@/types';

export const themeBundles: ThemeBundle[] = [
  {
    id: 'theme-climate-resilience',
    slug: 'climate-resilience',
    title: 'Climate Resilience & Local Ecological Action',
    themeCategory: 'climate',
    tagline: 'Investigating monsoon variability, carbon footprints, and watershed health through multi-subject inquiry.',
    description: 'An interdisciplinary Middle Stage inquiry connecting biological ecosystems, monsoon meteorological shifts, and computational data modeling. Students investigate their local microclimate and community water security.',
    gradeBand: 'Grades 6–8 (Middle Stage)',
    recommendedHours: 25,
    disciplines: ['Science', 'Social Science (Geography)', 'Mathematics', 'Vocational / Practical Studies'],
    unifyingSkills: [
      'Empirical Ecological Sampling',
      'Precipitation Frequency Distribution Modeling',
      'GIS & Community Vulnerability Mapping',
      'Actionable Climate Communication'
    ],
    crossSubjectConnections: [
      {
        subject: 'Science',
        coreConcepts: [
          'Biogeochemical cycles (Carbon, Nitrogen, Water)',
          'Ecosystem trophic cascades & native biodiversity',
          'Renewable vs non-renewable energy transitions'
        ],
        competencyMapped: 'Analyze human disruptions to natural ecological equilibria and design sustainable biological mitigation strategies.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.4: Middle Stage Science, Interdisciplinary Environmental Living & NCERT Class 7 Science Ch. 12 (Forests: Our Lifeline).',
        classroomActivity: 'Conduct a campus biodiversity quadrant audit comparing soil moisture and native insect counts between monoculture turf and native shrub patches.'
      },
      {
        subject: 'Social Science (Geography)',
        coreConcepts: [
          'Indian monsoon mechanisms and climate change variability',
          'Socio-economic vulnerability of agrarian and coastal communities',
          'Traditional Indian water harvesting systems (Baolis, Kunds, Johads, Ahar-Pynes)'
        ],
        competencyMapped: 'Evaluate geographical rainfall variation across Indian agro-climatic zones and analyze traditional water conservation adaptation practices.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.5: Social Science, Human-Environment Interactions & NCERT Class 8 Geography Ch. 2 (Land, Soil, Water Resources).',
        classroomActivity: 'Draft a municipal rainwater vulnerability map highlighting low-lying residential wards and cross-referencing with historical flood records.'
      },
      {
        subject: 'Mathematics',
        coreConcepts: [
          'Rainfall data frequency tables & histogram binning',
          'Rate of flow calculations and catchment area extrapolation',
          'Standard deviation & variance in climate anomaly detection'
        ],
        competencyMapped: 'Formulate mathematical models to calculate household rooftop rainwater harvesting volumes based on square-meter catchment formulas.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.3: Mathematics, Real-World Data Handling & CBSE Applied Mathematics Guidelines.',
        classroomActivity: 'Calculate the total seasonal rainwater volume that could be captured by the school building using annual monsoon millimeters and runoff coefficients.'
      }
    ],
    flagshipChallenge: {
      title: 'The Campus Microclimate & Water Resilience Audit',
      drivingQuestion: 'How can our school campus harvest 100% of its rooftop monsoon runoff to recharge the local water table and reduce seasonal urban flooding?',
      studentDeliverable: 'A collaborative "Campus Water Resilience Blueprint" featuring calibrated precipitation histograms, architectural catchment calculations, and an oral presentation to the School Management Committee.',
      communityEngagement: 'Inviting local municipal water board engineers or community elders to critique student catchment proposals.'
    },
    sources: [
      'NCF-SE 2023, Part C: Subject Curricula (Science, Social Science, Mathematics)',
      'NCERT Class 7 Science: Chapters 7 (Weather, Climate & Adaptations) and 16 (Water: A Precious Resource)',
      'NCERT Class 8 Geography: Chapter 2 (Land, Soil, Water, Natural Vegetation and Wildlife Resources)',
      'CBSE Environmental Education Guidelines for Schools (Circular Acad-18/2021)'
    ],
    // V0.7 Extensions
    status: 'published',
    author: {
      id: 'author-01',
      name: 'Dr. Aruna Swaminathan',
      schoolName: 'Kendriya Vidyalaya IIT Madras, Chennai',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'school-email',
      email: 'aruna.swaminathan@kvsedu.in'
    },
    license: 'CC BY-SA 4.0',
    version: 'v1.2.0',
    versionHistory: [
      {
        version: 'v1.2.0',
        date: '2026-09-20',
        authorName: 'Dr. Aruna Swaminathan',
        summary: 'Incorporated Kerala & Maharashtra SCERT regional watershed case studies and low-cost percolation pit activity.'
      },
      {
        version: 'v1.1.0',
        date: '2026-08-14',
        authorName: 'Dr. Aruna Swaminathan',
        summary: 'Added mathematical catchment formulas and standard deviation formulas for precipitation frequency binning.'
      },
      {
        version: 'v1.0.0',
        date: '2026-06-02',
        authorName: 'Dr. Aruna Swaminathan',
        summary: 'Initial peer-reviewed release aligned to NCF-SE 2023 Middle Stage Science & Geography.'
      }
    ],
    peerReviews: [
      {
        id: 'rev-cr-01',
        reviewerId: 'usr-rev-101',
        reviewerName: 'Rajesh Nair',
        reviewerDesignation: 'PGT Geography & Environmental Studies',
        reviewerSchool: 'Govt Model Higher Secondary School, Trivandrum',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 4
        },
        decision: 'endorse',
        comments: 'Outstanding integration. The mathematical formula for rooftop catchment matches the NCERT Class 8 syllabus accurately. The fieldwork is adaptable to both urban and semi-rural schools.',
        reviewedAt: 1787892000000
      },
      {
        id: 'rev-cr-02',
        reviewerId: 'usr-rev-102',
        reviewerName: 'Meenakshi Sundaram',
        reviewerDesignation: 'TGT Mathematics & Science Mentor',
        reviewerSchool: 'Atomic Energy Central School, Kalpakkam',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 4,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Verified against NCF-SE 2023 Middle Stage competencies. Highly recommended for multi-teacher co-planning during the July–September monsoon quarter.',
        reviewedAt: 1788100000000
      },
      {
        id: 'rev-cr-03',
        reviewerId: 'usr-rev-103',
        reviewerName: 'Sanjay Deshmukh',
        reviewerDesignation: 'DIET Senior Lecturer (Science Education)',
        reviewerSchool: 'District Institute of Education & Training, Pune',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Source citations to NCERT Chapters 7 and 16 and NCF-SE Part C are verified and sound. Includes practical low-cost materials.',
        reviewedAt: 1788200000000
      }
    ],
    peerReviewedBadge: true,
    communityFeedback: [
      {
        id: 'feed-cr-01',
        type: 'suggest-edit',
        authorName: 'Vandana Rao (Delhi Public School)',
        category: 'accessibility',
        description: 'For schools with non-accessible flat terraces, suggest using ground-level quad runoff or school bus parking shed catchments instead.',
        suggestedCorrection: 'Add note under activity step 2: Ground-level paved basketball court or bus shed roof can serve as alternative catchment areas.',
        status: 'resolved',
        createdAt: 1788900000000
      }
    ],
    createdAt: 1780000000000,
    updatedAt: 1789200000000
  },
  {
    id: 'theme-heritage-living-traditions',
    slug: 'heritage-living-traditions',
    title: 'Heritage, Craft Economies & Living Traditions',
    themeCategory: 'heritage',
    tagline: 'Preserving tangible monuments, indigenous craftsmanship, and oral knowledge through history, art, and language.',
    description: 'An immersive cultural and historical exploration examining Indian archaeological heritage, artisanal guild economies, and traditional architectural acoustics across history, visual arts, and literary expression.',
    gradeBand: 'Grades 6–8 (Middle Stage)',
    recommendedHours: 20,
    disciplines: ['Social Science (History)', 'Art Education & Craft', 'Language & Literature', 'Mathematics (Geometry)'],
    unifyingSkills: [
      'Historical Primary Source Critique',
      'Material Science of Natural Pigments',
      'Geometric Symmetry in Architectural Vaults',
      'Oral Folklore Documentation'
    ],
    crossSubjectConnections: [
      {
        subject: 'Social Science (History)',
        coreConcepts: [
          'Temple and monument architectural styles (Nagara, Dravida, Vesara, Indo-Islamic)',
          'Guild economies (Shrenis) and trade routes across the Silk and Spice routes',
          'Archaeological stratigraphy and epigraphic inscriptions'
        ],
        competencyMapped: 'Analyze primary archaeological sources and temple inscriptions to reconstruct the socio-economic life of artisan communities in historical India.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.5: Historical Inquiries & NCERT Class 7 History: Our Pasts-II, Ch. 5 (Rulers and Buildings).',
        classroomActivity: 'Conduct a virtual or physical artifact provenance inquiry using museum catalogue cards to identify the geographical origin of historical stone carvings.'
      },
      {
        subject: 'Art Education & Traditional Craft',
        coreConcepts: [
          'Mineral and botanical dye preparation (Indigo, Madder, Turmeric, Charcoal)',
          'Regional folk traditions (Warli, Madhubani, Pattachitra, Kalamkari)',
          'Textile weaving motifs and geometric grid symmetries'
        ],
        competencyMapped: 'Replicate indigenous material preparation methods and execute traditional motifs using authentic organic or recycled media.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 7.2: Art Education Integration & NEP 2020 para 4.27 (Lok Vidya & Traditional Knowledge Systems).',
        classroomActivity: 'Formulate natural pigments using crushed flower petals and limestone binder to create a collaborative frieze reflecting regional folklore.'
      },
      {
        subject: 'Language & Literature',
        coreConcepts: [
          'Oral folklore transcription and dialect preservation',
          'Bhakti and Sufi poetic traditions celebrating human unity',
          'Etymology of craft tools across regional Indian languages'
        ],
        competencyMapped: 'Transcribe and annotate an oral folklore narrative recorded from an elder or craftsperson, preserving dialectal idioms.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.1: Language Education, Multilingualism and Cultural Roots.',
        classroomActivity: 'Publish a bilingual "Living Voices" mini-anthology featuring oral histories of local pottery, weaving, or metal-smithing families.'
      }
    ],
    flagshipChallenge: {
      title: 'The Living Heritage Guild Exhibition',
      drivingQuestion: 'How can we document, celebrate, and economically sustain our region’s endangered artisanal traditions in a modern digital economy?',
      studentDeliverable: 'A curated classroom museum exhibition featuring restored or replicated craft artifacts, bilingual historical provenance labels, geometric pattern analyses, and recorded audio artisan interviews.',
      communityEngagement: 'Hosting an open community heritage showcase inviting local weavers, potters, and grandparents.'
    },
    sources: [
      'NCF-SE 2023, Part C: Section 7.2 (Art Education) and Section 4.5 (Social Science)',
      'NEP 2020, Section 4.27: Lok Vidya (Traditional Indian Knowledge)',
      'NCERT Class 7 History: Our Pasts-II, Chapters 5 (Rulers and Buildings) & 6 (Towns, Traders and Craftspersons)',
      'NCERT Class 9 Fine Arts: An Introduction to Indian Art (Heritage Traditions)'
    ],
    // V0.7 Extensions
    status: 'published',
    author: {
      id: 'author-02',
      name: 'Priya Narayanan',
      schoolName: 'The Heritage School, Kolkata',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'scert-credential',
      email: 'priya.narayanan@heritage.edu.in'
    },
    license: 'CC BY-SA 4.0',
    version: 'v1.1.0',
    versionHistory: [
      {
        version: 'v1.1.0',
        date: '2026-08-28',
        authorName: 'Priya Narayanan',
        summary: 'Added bilingual vocabulary glossary and oral history ethical consent protocol.'
      },
      {
        version: 'v1.0.0',
        date: '2026-06-18',
        authorName: 'Priya Narayanan',
        summary: 'Initial release endorsed by SCERT Art Education working group.'
      }
    ],
    peerReviews: [
      {
        id: 'rev-hl-01',
        reviewerId: 'usr-rev-104',
        reviewerName: 'Debashis Sen',
        reviewerDesignation: 'Head of History & Heritage Club',
        reviewerSchool: 'Patha Bhavana, Visva-Bharati, Santiniketan',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Brings NEP 2020 Lok Vidya to vibrant life. The ethical consent form for interviewing local potters and weavers shows great pedagogical maturity.',
        reviewedAt: 1788000000000
      },
      {
        id: 'rev-hl-02',
        reviewerId: 'usr-rev-105',
        reviewerName: 'Anita Kulkarni',
        reviewerDesignation: 'Art Master & CBSE Master Trainer',
        reviewerSchool: 'Balbharati Model School, Pune',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 4,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'Natural pigment preparation is completely non-toxic and classroom safe. Highly recommended for multi-disciplinary weeks.',
        reviewedAt: 1788150000000
      }
    ],
    peerReviewedBadge: true,
    communityFeedback: [],
    createdAt: 1780100000000,
    updatedAt: 1789250000000
  },
  {
    id: 'theme-data-ai-ethics',
    slug: 'data-ai-ethics',
    title: 'Data, Algorithmic Power & Civic Ethics',
    themeCategory: 'data-ethics',
    tagline: 'Unpacking algorithmic decision-making, predictive bias, and citizen privacy in democratic society.',
    description: 'A cutting-edge Secondary Stage interdisciplinary synthesis bringing together mathematical probability, computer science algorithms, and constitutional privacy rights to critique real-world algorithmic systems.',
    gradeBand: 'Grades 9–10 (Secondary Stage)',
    recommendedHours: 30,
    disciplines: ['Mathematics', 'Artificial Intelligence (Code 417)', 'Social Science (Democratic Politics)'],
    unifyingSkills: [
      'Algorithmic Bias Auditing',
      'Statistical Confusion Matrix Analysis',
      'Constitutional Rights Applied to Surveillance',
      'Responsible AI Product Scoping'
    ],
    crossSubjectConnections: [
      {
        subject: 'Mathematics',
        coreConcepts: [
          'Sampling bias and non-representative population demographics',
          'Conditional probability in predictive scoring',
          'False Positive vs False Negative rate calculations'
        ],
        competencyMapped: 'Calculate the mathematical probability of discriminatory outcomes when a classification model is trained on imbalanced demographic sets.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 5.1: Secondary Mathematics & CBSE Class 10 Mathematics Statistics & Probability Units.',
        classroomActivity: 'Analyze a dataset of 500 mock college admission scores with synthetic demographic skewness to compute disparate impact ratios.'
      },
      {
        subject: 'Artificial Intelligence (Code 417)',
        coreConcepts: [
          'The AI Project Cycle (Problem Scoping to Evaluation)',
          'Computer vision training dataset auditing for skin-tone diversity',
          'Precision, Recall, and F1-Score trade-offs in high-stakes scenarios'
        ],
        competencyMapped: 'Audit a pre-trained computer vision or natural language model for systematic demographic performance disparities and document algorithmic mitigations.',
        ncfCitation: 'CBSE Secondary School Curriculum Subject Code 417 (Class IX–X), Part B: Unit 1 (AI Ethics) and Unit 4 (Evaluation).',
        classroomActivity: 'Evaluate an open-source facial sentiment classification tool across diverse lighting and skin tones, constructing a formal confusion matrix of misclassifications.'
      },
      {
        subject: 'Social Science (Democratic Politics)',
        coreConcepts: [
          'Fundamental right to privacy under Article 21 of the Indian Constitution',
          'Digital Public Infrastructure (DPI) and equitable citizen access',
          'Commercial surveillance, consent mechanisms, and consumer rights'
        ],
        competencyMapped: 'Evaluate government and corporate data collection policies against constitutional privacy benchmarks established by the Supreme Court Puttaswamy judgment.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 5.3: Social Sciences, Constitutional Values & Democratic Institutions & NCERT Class 10 Democratic Politics Ch. 5.',
        classroomActivity: 'Stage a mock parliamentary standing committee hearing investigating the deployment of automated biometric facial recognition in public railway transit.'
      }
    ],
    flagshipChallenge: {
      title: 'The Youth Responsible AI & Civic Charter',
      drivingQuestion: 'How can automated technology be regulated and designed to safeguard constitutional rights while solving systemic community dilemmas?',
      studentDeliverable: 'An "Algorithmic Impact Assessment & Citizen Bill of Rights" presenting mathematical bias audits of local algorithms alongside a constitutional privacy policy brief.',
      communityEngagement: 'Submitting student policy briefs to local district child welfare or digital literacy committees.'
    },
    sources: [
      'CBSE Curriculum for Secondary School Subject Code 417: Artificial Intelligence (Classes IX–X)',
      'Supreme Court of India: Justice K.S. Puttaswamy (Retd.) v. Union of India (Right to Privacy under Article 21)',
      'NCF-SE 2023, Part C: Section 5.1 (Mathematics) and Section 5.3 (Social Sciences)',
      'MeitY & NITI Aayog: National Strategy for Artificial Intelligence (#AIforAll, 2018/2023)'
    ],
    // V0.7 Extensions
    status: 'published',
    author: {
      id: 'author-03',
      name: 'Kavita Chawla',
      schoolName: 'Sanskriti School, Chanakyapuri, New Delhi',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'school-email',
      email: 'kavita.chawla@sanskritischool.edu.in'
    },
    license: 'CC BY-SA 4.0',
    version: 'v1.2.0',
    versionHistory: [
      {
        version: 'v1.2.0',
        date: '2026-09-12',
        authorName: 'Kavita Chawla',
        summary: 'Updated legal citations to include the Digital Personal Data Protection (DPDP) Act 2023 rules.'
      },
      {
        version: 'v1.0.0',
        date: '2026-07-04',
        authorName: 'Kavita Chawla',
        summary: 'Original release aligned to CBSE AI Subject 417 and NCF-SE Secondary Social Science.'
      }
    ],
    peerReviews: [
      {
        id: 'rev-de-01',
        reviewerId: 'usr-rev-106',
        reviewerName: 'Prof. Vikramaditya Roy',
        reviewerDesignation: 'Curriculum Consultant & Former CBSE AI Taskforce Member',
        reviewerSchool: 'National Institute of Educational Planning and Administration (NIEPA)',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 5,
          sourceVerification: 5,
          accessibility: 5
        },
        decision: 'endorse',
        comments: 'A gold standard for interdisciplinary secondary education. Bridges abstract mathematics (conditional probability) with real constitutional case law (Puttaswamy judgment).',
        reviewedAt: 1788220000000
      },
      {
        id: 'rev-de-02',
        reviewerId: 'usr-rev-107',
        reviewerName: 'Farhan Zaidi',
        reviewerDesignation: 'PGT Computer Science & AI Subject Leader',
        reviewerSchool: 'Delhi Public School, R.K. Puram',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 4,
          sourceVerification: 5,
          accessibility: 4
        },
        decision: 'endorse',
        comments: 'Accurately reflects CBSE Subject 417 evaluation metrics (precision, recall, F1). Students engage deeply with the confusion matrix exercises.',
        reviewedAt: 1788300000000
      }
    ],
    peerReviewedBadge: true,
    communityFeedback: [],
    createdAt: 1780200000000,
    updatedAt: 1789300000000
  },
  // Community-submitted bundle currently in review
  {
    id: 'theme-clean-energy-microgrids',
    slug: 'clean-energy-microgrids',
    title: 'Clean Energy Transitions & Rural Microgrids',
    themeCategory: 'stem-energy',
    tagline: 'Designing decentralized solar systems, calculating kilowatt-hour economics, and evaluating rural energy sovereignty.',
    description: 'An applied Middle Stage STEM and Civic inquiry where students calculate community solar irradiance, wire low-voltage photovoltaic circuits, and evaluate village energy access policies.',
    gradeBand: 'Grades 7–8 (Middle Stage)',
    recommendedHours: 22,
    disciplines: ['Science (Physics)', 'Mathematics', 'Social Science (Economics)', 'Vocational Skills (Solar Tech)'],
    unifyingSkills: [
      'Photovoltaic Watt-Hour Yield Calculations',
      'DC Circuit Troubleshooting',
      'Rural Electrification Policy Analysis',
      'Public Technical Demonstration'
    ],
    crossSubjectConnections: [
      {
        subject: 'Science (Physics)',
        coreConcepts: [
          'Photovoltaic effect and semiconductor physics basics',
          'Ohm’s law, series vs parallel solar cell configurations',
          'Battery storage efficiency and depth of discharge'
        ],
        competencyMapped: 'Construct and test simple electrical circuits incorporating photovoltaic cells and measure variations in electrical output under diverse solar angles.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.4: Middle Stage Science, Energy in Daily Life & NCERT Class 8 Science Ch. 14 (Chemical Effects of Electric Current).',
        classroomActivity: 'Measure voltage and amperage output of a 5W solar panel across 9:00 AM, 12:00 PM, and 4:00 PM to chart diurnal generation curves.'
      },
      {
        subject: 'Mathematics',
        coreConcepts: [
          'Unit conversion (Watts to Kilowatt-Hours)',
          'Load forecasting and battery bank sizing formulas',
          'Capital payback period calculations'
        ],
        competencyMapped: 'Calculate the total daily energy demand of an agrarian primary health sub-centre and compute the required solar panel capacity and battery amp-hours.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.3: Real-World Numerical Problem Solving.',
        classroomActivity: 'Compute load requirements for a village clinic refrigerator storing vaccines, factoring in 2 days of monsoon cloud autonomy.'
      },
      {
        subject: 'Social Science (Economics)',
        coreConcepts: [
          'PM-KUSUM scheme and solar irrigation pump subsidies',
          'Off-grid vs on-grid decentralized power distribution',
          'Gender equity impacts of reliable rural lighting'
        ],
        competencyMapped: 'Evaluate governmental renewable energy policies and analyze how clean electricity access impacts agrarian women and children.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.5: Economic Systems & Social Welfare.',
        classroomActivity: 'Interview local farmers or women self-help group (SHG) members on fuel expenses for diesel irrigation pumps vs solar pump installations.'
      }
    ],
    flagshipChallenge: {
      title: 'The Village Clinic Solar Microgrid Proposal',
      drivingQuestion: 'How can an off-grid village primary health centre be powered 24/7 with a reliable solar-battery microgrid within a ₹1.5 lakh capital budget?',
      studentDeliverable: 'A scaled 3D cardboard circuit model, an itemized Bill of Materials (BOM) spreadsheet, and an oral proposal to the Gram Panchayat.',
      communityEngagement: 'Presenting proposals to local Gram Panchayat ward members and village solar technicians.'
    },
    sources: [
      'NCF-SE 2023, Part C: Sections 4.3 (Mathematics), 4.4 (Science), and 4.5 (Social Science)',
      'Ministry of New and Renewable Energy (MNRE): PM-KUSUM Component Guidelines',
      'NCERT Class 8 Science: Chapter 14 (Chemical Effects of Electric Current) and Chapter 18 (Pollution of Air and Water)'
    ],
    // In Review Status
    status: 'in-review',
    author: {
      id: 'author-04',
      name: 'Tanvi Maheshwari',
      schoolName: 'Govt Excellence Higher Secondary School, Bhopal',
      displaySchool: true,
      isVerifiedEducator: true,
      verificationType: 'school-email',
      email: 'tanvi.maheshwari@mpedu.gov.in'
    },
    license: 'CC BY-SA 4.0',
    version: 'v1.0.0-rc1',
    versionHistory: [
      {
        version: 'v1.0.0-rc1',
        date: '2026-09-22',
        authorName: 'Tanvi Maheshwari',
        summary: 'Initial community submission entered into Peer Review queue for Middle Stage verification.'
      }
    ],
    peerReviews: [
      {
        id: 'rev-ce-01',
        reviewerId: 'usr-rev-108',
        reviewerName: 'Harishankar Sharma',
        reviewerDesignation: 'TGT Science & ATL Innovation Mentor',
        reviewerSchool: 'Kendriya Vidyalaya No. 1, Gwalior',
        isVerified: true,
        ratings: {
          curriculumAlignment: 5,
          classroomUsability: 4,
          sourceVerification: 4,
          accessibility: 4
        },
        decision: 'endorse',
        comments: 'Excellent STEM application. The circuit models are safe for middle school students (12V DC max). Awaiting 1 additional peer review to complete the 2-review threshold.',
        reviewedAt: 1789050000000
      }
    ],
    peerReviewedBadge: false, // will become true upon second endorsement!
    communityFeedback: [],
    createdAt: 1789000000000,
    updatedAt: 1789050000000
  }
];
