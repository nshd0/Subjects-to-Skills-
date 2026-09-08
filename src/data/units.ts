import { Unit } from '@/types';

/**
 * Curricular Units Scaffold for v0.4.1 (Unit & Lesson Planner)
 * Realistic CBSE-aligned competency units for Middle Stage anchor grades (Grade 6 & Grade 7)
 */
export const units: Unit[] = [
  {
    id: "unit-g6-water-systems",
    gradeId: "grade-6",
    title: "Community Water Systems & Scientific Inquiry",
    durationWeeks: 3,
    description: "An experiential inquiry exploring local freshwater sources, natural filtration cycles, and communal distribution mechanisms in Indian rural and urban settings.",
    targetSkillIds: [
      "empirical-investigation",
      "data-representation",
      "cause-effect-analysis",
      "community-stewardship"
    ],
    learningAreas: ["Science", "Social Science", "Mathematics"],
    status: "published",
    sampleProjects: [
      "School Rooftop Rainwater Catchment Audit",
      "Zero-Waste Multi-Layer Gravity Filter Prototype"
    ],
    lessons: [
      {
        id: "les-g6-ws-01",
        unitId: "unit-g6-water-systems",
        title: "Mapping the School Catchment: Where Does Our Water Come From?",
        sequenceIndex: 1,
        activities: [
          "Outdoor boundary survey identifying overhead tanks, borewell points, and runoff gutters",
          "Field sketch creation with standardised compass rose and legend markers"
        ],
        resources: [
          "NCERT Class 6 Science - Chapter: Water & Its Sources",
          "Survey of India regional hydrological catchment reference sheet"
        ],
        assessmentHints: [
          "Check whether the field sketch uses consistent proportional spacing and clear symbol legends",
          "Prompt students to identify at least one point where rainwater gets lost or contaminated"
        ]
      },
      {
        id: "les-g6-ws-02",
        unitId: "unit-g6-water-systems",
        title: "Filtration Dynamics: Porosity, Particle Size & Sedimentation",
        sequenceIndex: 2,
        activities: [
          "Hands-on comparison of coarse gravel, fine river sand, and powdered activated charcoal flow rates",
          "Recording turbidity and sedimentation timing across 3 timed trials"
        ],
        resources: [
          "CBSE Science Lab Manual - Activity 4.2: Separating Insoluble Solids",
          "Low-cost transparent plastic bottle column apparatus guide"
        ],
        assessmentHints: [
          "Observe whether students control variables (equal water volume, consistent pouring speed)",
          "Look for accurate measurement readings in tabular logbooks"
        ]
      },
      {
        id: "les-g6-ws-03",
        unitId: "unit-g6-water-systems",
        title: "Synthesising Solutions: Presenting a School Water Conservation Plan",
        sequenceIndex: 3,
        activities: [
          "Group bar-graph compilation comparing daily water usage vs estimated monsoon catchment",
          "3-minute oral briefing to the school panchayat or eco-club coordinator"
        ],
        resources: [
          "Central Ground Water Board (CGWB) Rainwater Harvesting Calculator",
          "Peer review observation checklist on data clarity and public speaking"
        ],
        assessmentHints: [
          "Evaluate whether recommendations cite mathematical evidence from the catchment audit",
          "Assess peer critique quality using the oral presentation rubric"
        ]
      }
    ]
  },
  {
    id: "unit-g7-market-geometry",
    gradeId: "grade-7",
    title: "Spatial Geometry & Financial Reasoning in Weekly Markets",
    durationWeeks: 4,
    description: "Bridging geometric area calculation, ratio-proportion, and financial budgeting through the interactive simulation of an Indian weekly Haat Bazaar.",
    targetSkillIds: [
      "spatial-geometry",
      "proportional-reasoning",
      "budget-modeling",
      "negotiation-and-dialogue"
    ],
    learningAreas: ["Mathematics", "Social Science"],
    status: "published",
    sampleProjects: [
      "Haat Bazaar Micro-Enterprise Stall Layout",
      "Seasonal Wholesale Price Variation Tracker"
    ],
    lessons: [
      {
        id: "les-g7-mg-01",
        unitId: "unit-g7-market-geometry",
        title: "Perimeter, Area & Pitch Allocation on the School Ground",
        sequenceIndex: 1,
        activities: [
          "Chalk-line boundary measurement of uniform rectangular and composite vendor plots",
          "Calculating total usable customer circulation space versus vendor display area"
        ],
        resources: [
          "NCERT Class 7 Mathematics - Chapter: Perimeter and Area",
          "Graph paper 1cm grid sheets and 30m surveyor measuring tape"
        ],
        assessmentHints: [
          "Verify distinction between perimeter boundary ropes and square-metre stall area",
          "Check handling of aisle width constraints for crowd safety"
        ]
      },
      {
        id: "les-g7-mg-02",
        unitId: "unit-g7-market-geometry",
        title: "Unit Costing, Markup & Profit Margins for Local Produce",
        sequenceIndex: 2,
        activities: [
          "Converting wholesale mandi rates (per quintal / crate) to retail consumer pricing per kilogram",
          "Formulating break-even pricing spreadsheets incorporating transport and stall rent"
        ],
        resources: [
          "e-NAM (National Agriculture Market) daily wholesale modal price bulletin",
          "Bilingual vendor ledger book worksheet"
        ],
        assessmentHints: [
          "Check accuracy in multi-step percentage and ratio conversions",
          "Observe if students account for perishable waste percentages in their pricing"
        ]
      },
      {
        id: "les-g7-mg-03",
        unitId: "unit-g7-market-geometry",
        title: "Live Market Day Simulation: Running Transactions & Balancing Ledgers",
        sequenceIndex: 3,
        activities: [
          "Simulated live trade using token currency and customer transaction receipts",
          "End-of-day tally reconciling cash in hand with starting inventory counts"
        ],
        resources: [
          "Classroom market currency tokens and transaction voucher slips",
          "Audit ledger template with profit & loss statement"
        ],
        assessmentHints: [
          "Evaluate arithmetic precision in calculating balance change during quick transactions",
          "Review student reflections on supply, demand, and fairness in pricing"
        ]
      }
    ]
  },
  {
    id: "unit-g3-neighbourhood-ecosystem",
    gradeId: "grade-3",
    title: "Discovering Our Living Schoolyard: Habitat & Tally Literacy",
    durationWeeks: 2,
    description: "Preparatory stage introductory unit focusing on non-destructive outdoor inquiry, systematic species counting, and sensory observation of local plants and birds.",
    targetSkillIds: [
      "categorical-observation",
      "pictorial-tallying",
      "scientific-sketching",
      "environmental-empathy"
    ],
    learningAreas: ["Environmental Studies (EVS)", "Art Education"],
    status: "draft",
    sampleProjects: [
      "School Bird & Insect Diversity Chart",
      "Bark & Leaf Texture Rubbing Passport"
    ],
    lessons: [
      {
        id: "les-g3-ne-01",
        unitId: "unit-g3-neighbourhood-ecosystem",
        title: "The Sensory Safari: Listening, Touching & Noticing",
        sequenceIndex: 1,
        activities: [
          "Quiet listening sit-spot in the school garden recording natural vs mechanical sounds",
          "Collecting fallen leaves and sorting them by shape, margin, and venation"
        ],
        resources: [
          "NCERT Class 3 EVS - Chapter: Poonam's Day Out",
          "Magnifying viewfinders and sensory clipboards"
        ],
        assessmentHints: [
          "Verify that students collect only fallen specimens without damaging live plants",
          "Listen to descriptive vocabulary used during group sharing"
        ]
      }
    ]
  }
];
