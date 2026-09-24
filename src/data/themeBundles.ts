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
    ]
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
    ]
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
    ]
  }
];
