import { AssessmentTask, SkillRubric } from '@/types';

/**
 * Formative and Summative Assessment Tasks for v0.4.2 (Skill–Assessment Mapper)
 * Realistic CBSE-aligned tasks linking skills, subject areas, and observable student outputs.
 */
export const assessmentTasks: AssessmentTask[] = [
  {
    id: "task-g6-water-audit",
    gradeId: "grade-6",
    skillId: "empirical-investigation",
    title: "School Water Flow & Wastage Investigation",
    type: "performance task",
    description: "Students work in pairs to measure tap drip rates across 3 school drinking water stations using calibrated measuring beakers and stopwatches, extrapolating daily lost volume.",
    subjectArea: "Science & Mathematics",
    timeRequired: "45 minutes",
    rubricRefId: "rubric-g6-investigation",
    evidenceProduced: [
      "Calibrated drip rate tally sheet with 3 timed trials per station",
      "Mathematical extrapolation calculation of litres lost per 8-hour school day",
      "Written recommendation note for school maintenance staff"
    ]
  },
  {
    id: "task-g7-market-stall",
    gradeId: "grade-7",
    skillId: "budget-modeling",
    title: "Haat Bazaar Stall Profit & Loss Ledger Evaluation",
    type: "project",
    description: "Students prepare a complete financial ledger for a mock seasonal fruit stall, accounting for wholesale mandi procurement, transportation overhead, spoil allowance, and customer pricing.",
    subjectArea: "Mathematics & Social Studies",
    timeRequired: "2 class periods (90 mins)",
    rubricRefId: "rubric-g7-financial",
    evidenceProduced: [
      "Itemised unit-cost and retail price table with percentage markup calculations",
      "Reconciled transaction ledger with receipts and final net profit calculation",
      "Short reflection on pricing fairness for low-income buyers"
    ]
  },
  {
    id: "task-g3-species-tally",
    gradeId: "grade-3",
    skillId: "categorical-observation",
    title: "School Garden Living Species Tally & Sketch",
    type: "question set",
    description: "Students complete a guided field sheet counting frequency of 4 distinct garden creatures (ants, sparrows, butterflies, squirrels) and produce an annotated morphological drawing of one organism.",
    subjectArea: "Environmental Studies (EVS)",
    timeRequired: "35 minutes",
    rubricRefId: "rubric-g3-observation",
    evidenceProduced: [
      "Field tally sheet with accurate grouping marks",
      "Labelled botanical or zoological drawing with at least 3 body parts named"
    ]
  },
  {
    id: "task-g8-data-critique",
    gradeId: "grade-8",
    skillId: "data-literacy",
    title: "Media Graph Critique: Identifying Misleading Visual Scales",
    type: "investigation",
    description: "Students inspect two published news charts featuring truncated y-axes and non-uniform increments, identifying the visual distortion and reconstructing an honest proportional graph.",
    subjectArea: "Mathematics & Media Studies",
    timeRequired: "50 minutes",
    rubricRefId: "rubric-g8-data",
    evidenceProduced: [
      "Annotated side-by-side comparison highlighting misleading visual features",
      "Re-plotted Cartesian graph with uniform axis scales and proper labelling",
      "Three-sentence summary of why accurate data visualization matters in a democracy"
    ]
  }
];

/**
 * Skill Rubric Matrices for v0.4.2 (Skill–Assessment Mapper)
 * Four graduated levels ("Emerging", "Developing", "Proficient", "Transfer") with verifiable indicators.
 */
export const skillRubrics: SkillRubric[] = [
  {
    skillId: "empirical-investigation",
    gradeId: "grade-6",
    levels: [
      {
        level: "Emerging",
        criteria: [
          "Follows simple lab steps only when given constant step-by-step adult prompts",
          "Records single raw measurement values without noting units or repeating trials",
          "Struggles to isolate a single independent variable during testing"
        ]
      },
      {
        level: "Developing",
        criteria: [
          "Carries out assigned experimental procedures with occasional scaffolding from peers",
          "Records measurements with correct metric units in pre-formatted tables",
          "Attempts to keep conditions uniform but overlooks minor confounding factors"
        ]
      },
      {
        level: "Proficient",
        criteria: [
          "Autonomously sets up controlled investigation with calibrated timing apparatus",
          "Conducts multiple repeated trials and calculates arithmetic averages accurately",
          "Explains how anomalous measurements arise and can suggest sensible adjustments"
        ]
      },
      {
        level: "Transfer",
        criteria: [
          "Adapts testing protocols independently to novel, real-world schoolyard problems",
          "Formulates original hypotheses and designs rigorous control mechanisms without teacher intervention",
          "Clearly articulates sources of experimental uncertainty in written and oral presentations"
        ]
      }
    ]
  },
  {
    skillId: "budget-modeling",
    gradeId: "grade-7",
    levels: [
      {
        level: "Emerging",
        criteria: [
          "Calculates simple addition of expenditure items but omits hidden costs or tax",
          "Requires teacher guidance to distinguish between total revenue and net profit",
          "Struggles to calculate percentage markups without pre-computed conversion tables"
        ]
      },
      {
        level: "Developing",
        criteria: [
          "Builds a basic ledger with columns for expenses, sales, and balance",
          "Applies percentage markup correctly in straightforward single-product scenarios",
          "Accounts for major overheads like transport, but forgets inventory spoilage"
        ]
      },
      {
        level: "Proficient",
        criteria: [
          "Constructs comprehensive multi-product ledger balancing wholesale cost and retail margins",
          "Accurately calculates break-even sales volume including realistic spoilage rates",
          "Justifies pricing decisions based on affordability and target profit margins"
        ]
      },
      {
        level: "Transfer",
        criteria: [
          "Models dynamic pricing strategies responding to fluctuating seasonal wholesale supply",
          "Analyzes trade-offs between profit maximization, volume turnover, and community accessibility",
          "Designs an exportable, reusable spreadsheet/ledger template usable by local school cooperatives"
        ]
      }
    ]
  },
  {
    skillId: "categorical-observation",
    gradeId: "grade-3",
    levels: [
      {
        level: "Emerging",
        criteria: [
          "Notices salient organisms but loses count or repeatedly tallies the same individual",
          "Groups specimens using subjective impressions (e.g. 'nice' or 'scary') rather than physical traits",
          "Produces sketches missing key observable body structures"
        ]
      },
      {
        level: "Developing",
        criteria: [
          "Maintains accurate tally count with occasional reminders to check bounding borders",
          "Groups specimens using one clear physical attribute (e.g. number of legs or wings)",
          "Sketches capture basic outlines and identifiable colours"
        ]
      },
      {
        level: "Proficient",
        criteria: [
          "Systematically sweeps observation zones recording discrete tally marks without duplication",
          "Classifies specimens across multiple distinct environmental categories accurately",
          "Creates neat, labelled sketches noting distinguishing physical adaptations"
        ]
      },
      {
        level: "Transfer",
        criteria: [
          "Formulates observational inquiries comparing species density across contrasting micro-habitats",
          "Invents intuitive, standardized classification codes for unrecorded species",
          "Mentors younger peers in respectful, non-disruptive wildlife observation protocols"
        ]
      }
    ]
  }
];
