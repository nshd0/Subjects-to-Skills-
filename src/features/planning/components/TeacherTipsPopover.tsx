import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  X, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Target, 
  BookOpen, 
  Compass, 
  Layers,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export interface TeacherTipsPopoverProps {
  gradeId?: string;
  subjectId?: string;
  className?: string;
  buttonLabel?: string;
  align?: 'left' | 'right' | 'center';
}

export interface PedagogicalTipProfile {
  trackLabel: string;
  trackType: 'track-a' | 'track-b' | 'track-c' | 'interdisciplinary' | 'general';
  badgeStyle: string;
  title: string;
  summary: string;
  hoursNote: string;
  cbseAlignment: string;
  keyStrategies: {
    heading: string;
    description: string;
  }[];
  quickHook: {
    title: string;
    description: string;
    duration: string;
  };
  classroomManagement: string;
  pitfallToAvoid: string;
}

export function getPedagogicalAdvice(gradeId?: string, subjectId?: string): PedagogicalTipProfile {
  const gNum = gradeId ? gradeId.replace('grade-', '') : '';
  const sLow = subjectId ? subjectId.toLowerCase() : '';

  // 1. Secondary Track C: AI Subject 417 (Grades 9-10)
  if (['9', '10'].includes(gNum) && (sLow.includes('417') || sLow.includes('artificial intelligence') || sLow === 'ai')) {
    return {
      trackLabel: 'Track C • Elective Skill Subject (Code 417)',
      trackType: 'track-c',
      badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800',
      title: 'Secondary Board AI (Code 417) Pedagogical Guide',
      summary: 'Focus on rigorous problem-solving through the AI Project Cycle, ethical auditing of training sets, and balance between 50 Theory & 50 Practical Board marks.',
      hoursNote: '200 hrs/yr • 100 Marks (50 Theory + 50 Practical Board Examination)',
      cbseAlignment: 'Aligned with CBSE Curriculum for Secondary School Subject Code 417. Practical lab marks require a standardized student portfolio (10m), practical exam (15m), AI project (15m), and viva (10m).',
      keyStrategies: [
        {
          heading: '4Ws Problem Scoping Canvas First',
          description: 'Ensure students clearly define Who, What, Where, and Why before opening Python or machine learning tools. Board examiners emphasize real-world relevance tied to UN SDGs.'
        },
        {
          heading: 'Beyond Accuracy: Real Evaluation Metrics',
          description: 'Teach Confusion Matrix, Precision, Recall, and F1-score through relatable scenarios (e.g. rare medical condition detection or spam filters) to demonstrate why 99% accuracy can be misleading.'
        },
        {
          heading: 'Dataset Bias & Algorithmic Ethics',
          description: 'Guide students to actively investigate missing demographics in training data (e.g., gender, regional accent representation in CV/NLP models) and record mitigations in their lab log.'
        }
      ],
      quickHook: {
        title: 'The High-Stakes Accuracy Trap',
        duration: '5 mins',
        description: 'Ask: "If a rare disease affects 1 in 1,000 citizens, and a model blindly predicts everyone is healthy, it is 99.9% accurate. Why is this model fatally flawed?" Use their responses to segue directly into Precision vs Recall.'
      },
      classroomManagement: 'For labs with shared computer access, use "Pair Programming": the Driver types code while the Navigator checks documentation and maintains the CBSE practical lab journal.',
      pitfallToAvoid: 'Do not rush straight into Python coding syntax before students can articulate the difference between data exploration and model training. Conceptual scaffolding prevents exam anxiety.'
    };
  }

  // 2. Senior Secondary Track C: Grades 11-12 Advanced AI
  if (['11', '12'].includes(gNum) && (sLow.includes('ai') || sLow.includes('intelligence') || sLow.includes('843'))) {
    return {
      trackLabel: 'Track C • Senior Secondary AI Elective (Code 843)',
      trackType: 'track-c',
      badgeStyle: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800',
      title: 'Senior Secondary AI Specialization & Data Science',
      summary: 'Deepen conceptual modeling into neural network architectures, matrix operations, exploratory data analysis, and production-ready machine learning pipelines.',
      hoursNote: 'Senior Secondary Elective • Articulated with Higher Education & Industry Readiness',
      cbseAlignment: 'Prepares students for CBSE Senior Secondary technical electives and National Skills Qualifications Framework (NSQF) Level 4 competencies.',
      keyStrategies: [
        {
          heading: 'Mathematical Anchoring',
          description: 'Connect vector operations and conditional probability to weights, biases, and gradient descent so concepts are not treated as black boxes.'
        },
        {
          heading: 'End-to-End Capstone Projects',
          description: 'Structure term assignments around open public datasets (e.g., data.gov.in, weather, agriculture) with verifiable documentation and version control.'
        }
      ],
      quickHook: {
        title: 'Reverse Engineer a Recommendation Engine',
        duration: '5 mins',
        description: 'Deconstruct how streaming platforms or e-commerce apps cluster similar users using multi-dimensional vector embeddings.'
      },
      classroomManagement: 'Assign peer code reviews where pairs inspect each other’s exploratory data visualizations for clarity, proper labeling, and ethical disclosures.',
      pitfallToAvoid: 'Avoid treating deep learning as purely theoretical; always ground abstract mathematical equations in tangible code snippets and visual loss curves.'
    };
  }

  // 3. Middle Stage Track B: AI Skill Module 901 (Grades 6-8)
  if (['6', '7', '8'].includes(gNum) && (sLow.includes('901') || sLow.includes('module') || sLow.includes('skill module'))) {
    return {
      trackLabel: 'Track B • Optional Skill Module (Code 901)',
      trackType: 'track-b',
      badgeStyle: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-800',
      title: 'Middle School 15-Hour Skill Module Sprint Guide',
      summary: 'Treat this as a low-stakes, high-creativity exploratory workshop. Emphasize no-code experiments, student curiosity, and community-relevant prototypes.',
      hoursNote: '~15 hrs Standalone Module • School Discretion • Formative Assessment Only',
      cbseAlignment: 'Aligned with CBSE Circular Acad-43/2024 for Middle School Skill Modules. Zero board examination pressure; evaluation is 100% portfolio and presentation based.',
      keyStrategies: [
        {
          heading: 'Sprint-Based Modular Structure',
          description: 'Break the 15 hours into 3-hour thematic mini-sprints (Discover AI → Computer Vision Lab → Speech/NLP → Algorithmic Ethics → Showcase).'
        },
        {
          heading: 'Frictionless No-Code Experiments',
          description: 'Leverage web-based tools like Google Teachable Machine, Quick Draw, and Semantris to allow immediate hands-on discovery without software installation delays.'
        },
        {
          heading: 'Real-World Ethics Debates',
          description: 'Encourage student debates on deepfakes, automated driving dilemmas, and facial recognition in schools to develop early digital citizenship.'
        }
      ],
      quickHook: {
        title: '60-Second Machine Learning Model',
        duration: '3 mins',
        description: 'Train a live Teachable Machine visual model in front of the class using 20 webcam frames of a pen vs. an apple. Test edge cases with dramatic lighting changes.'
      },
      classroomManagement: 'If computers are limited, organize three 15-minute rotating stations: Station 1 on web experiments, Station 2 auditing dataset cards on paper, Station 3 planning storyboard presentations.',
      pitfallToAvoid: 'Do not introduce formal programming language syntax or written exams in this 15-hour module. Keep the energy creative, visual, and exploratory.'
    };
  }

  // 4. Middle Stage Track A: Computational Thinking & AI (Grades 6-8)
  if (['6', '7', '8'].includes(gNum) && (sLow.includes('computational') || sLow.includes('ct') || sLow.includes('embedded') || sLow === '')) {
    return {
      trackLabel: 'Track A • Compulsory Embedded CT & AI (100 hrs/yr)',
      trackType: 'track-a',
      badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-800',
      title: 'Middle Stage Embedded CT & AI Pedagogical Guide',
      summary: 'Deliver the 100 hrs/yr mandate by connecting structured computational logic (40 hrs), introductory AI perception (20 hrs), and interdisciplinary school audits (40 hrs).',
      hoursNote: '100 hrs/yr embedded across Mathematics, Science & Social Science (NCF-SE Mandate)',
      cbseAlignment: 'Aligned with CBSE Classes 3-8 CT&AI Framework (2026-27). Provides direct foundational scaffolding for the Grade 9 compulsory NCF-SE rollout.',
      keyStrategies: [
        {
          heading: 'Flowcharts Before Code Syntax',
          description: 'Teach students standard engineering flowchart symbology (terminal, process, decision, I/O) with nested conditions to diagram complex everyday choices.'
        },
        {
          heading: 'Contrast Rule-Based vs Data-Driven Systems',
          description: 'Demystify smart tech by comparing a standard calculator (hardcoded deterministic logic) with camera autofocus or voice assistants (data pattern inference).'
        },
        {
          heading: '40-Hour Interdisciplinary Campus Audit',
          description: 'Integrate science and math by having student teams collect 14 days of campus energy or water tap meter data, formatting it into computational analysis tables.'
        }
      ],
      quickHook: {
        title: 'Rule or AI? Five-Item Vote',
        duration: '5 mins',
        description: 'Call out 5 everyday devices: Digital Microwave, Spotify Daily Mix, Elevator Door Sensor, Google Translate, Traffic Signal Timer. Have students stand for "Rule-Based" and sit for "Trained AI".'
      },
      classroomManagement: 'Divide students into 4-person Audit Teams: Team Leader (facilitator), Data Logger (records metrics), Flowchart Architect (draws process), and Spokesperson (presents insights).',
      pitfallToAvoid: 'Do not isolate CT&AI as an isolated computer period. Collaborate with science and math colleagues so the 40-hr project counts across multiple subjects.'
    };
  }

  // 5. Interdisciplinary Core Subjects in Middle Stage (Math/Science/Social Science with Grade 6-8)
  if (['6', '7', '8'].includes(gNum) && ['mathematics', 'science', 'social science'].includes(sLow)) {
    return {
      trackLabel: 'Track A • Cross-Disciplinary Integration Opportunity',
      trackType: 'interdisciplinary',
      badgeStyle: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800',
      title: `Embedding Computational Thinking into ${subjectId || 'Core Subjects'}`,
      summary: `Seamlessly integrate CBSE's Track A mandate into ${subjectId || 'core classes'} without inflating the syllabus through algorithmic problem decomposition.`,
      hoursNote: 'Contributes towards the 100 hrs/yr CBSE Middle Stage Embedded Allocation',
      cbseAlignment: 'NCF-SE 2023 emphasizes that computational thinking is a cross-cutting cognitive competency, not merely a computer laboratory skill.',
      keyStrategies: [
        {
          heading: sLow === 'mathematics' ? 'Algorithmic Proofs & Factorization' : sLow === 'science' ? 'Scientific Method as a Debugging Loop' : 'Civic Systems Modeling',
          description: sLow === 'mathematics' 
            ? 'Have students write the exact algorithmic steps for finding prime factors or calculating polygon perimeters before crunching formulas.'
            : sLow === 'science'
            ? 'Treat the scientific cycle of hypothesis, experiment, error analysis, and revision as a systematic code debugging loop.'
            : 'Deconstruct civic infrastructure (e.g. municipal water distribution or waste segregation) as input-process-output systems with decision bottlenecks.'
        },
        {
          heading: 'Data Tables with Real Class Data',
          description: 'Use real student measurements or survey questions to build tabular datasets, practicing sorting, filtering, and edge-case observation.'
        }
      ],
      quickHook: {
        title: 'The Human Flowchart',
        duration: '5 mins',
        description: 'Have 3 students physically act out the decision branches for solving a sample problem while the rest of the class holds up true/false sign cards.'
      },
      classroomManagement: 'Use peer verification checks: student pairs exchange their step-by-step calculations and test for logical breaks before final submission.',
      pitfallToAvoid: 'Avoid treating computational thinking as extra work. Position it as a structured methodology that improves clarity and exam scores in this subject.'
    };
  }

  // 6. Preparatory Stage: Grades 3-5 (Track A Computational Thinking, 50 hrs/yr)
  if (['3', '4', '5'].includes(gNum) || sLow.includes('computational thinking')) {
    return {
      trackLabel: 'Track A • Preparatory Computational Thinking (50 hrs/yr)',
      trackType: 'track-a',
      badgeStyle: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-800',
      title: 'Preparatory Stage Unplugged CT Guide (Grades 3–5)',
      summary: 'Emphasize concrete, hands-on, unplugged activities. Build foundational computational attitudes—pattern recognition, sequencing, and persistence—without screen fatigue.',
      hoursNote: '50 hrs/yr embedded into Mathematics and EVS (NCF-SE Preparatory Stage)',
      cbseAlignment: 'Aligned with CBSE Classes 3-5 Computational Thinking Curriculum. Prioritizes developmental readiness and joyful experiential play.',
      keyStrategies: [
        {
          heading: 'Tangible Before Digital',
          description: 'Use beads, grid mats, origami folds, and everyday sorting games to teach sequencing and loops before children touch a screen.'
        },
        {
          heading: 'Celebrate Debugging as Learning',
          description: 'Reframe errors not as "mistakes", but as "bugs to be tracked down and solved like detectives". This builds growth mindset in early learners.'
        },
        {
          heading: 'Pattern Spotting in Nature & Language',
          description: 'Connect algorithmic patterns to repeating rhymes in poetry, leaf veins in EVS, and symmetry in geometry.'
        }
      ],
      quickHook: {
        title: 'The Blindfolded Teacher Robot',
        duration: '5 mins',
        description: 'Act as a robot that only follows exact instructions. Have the class guide you to pick up an eraser using only: Step forward, Turn 90° right, Lower arm. If their command is incomplete (e.g. "Move forward"), walk into a desk humorously!'
      },
      classroomManagement: 'Form "Driver-Navigator" buddy pairs. The Driver manipulates physical cards/tokens while the Navigator checks against the instruction sheet.',
      pitfallToAvoid: 'Never jump straight into coding software before students can comfortably verbalize and act out a 4-step sequence on paper.'
    };
  }

  // 7. General / Baseline Advice (No grade or general subject)
  return {
    trackLabel: 'General Competency-Based Planning',
    trackType: 'general',
    badgeStyle: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
    title: 'Competency-Based Lesson Planning Best Practices',
    summary: 'Plan lessons aligned with NCF-SE 2023 principles: start with an engaging experiential hook, scaffold thinking with Bloom’s taxonomy, and differentiate for large classrooms.',
    hoursNote: 'Universal Planning Standards (CBSE 2025–26 & NCF 2023)',
    cbseAlignment: 'Designed to satisfy CBSE inspection standards for observable learning outcomes and multimodal assessment evidence.',
    keyStrategies: [
      {
        heading: 'The 3-Phase Lesson Architecture',
        description: 'Allocate your 40-minute period: Hook & Prior Knowledge (7 mins) → Active Guided Inquiry (23 mins) → Consolidation & Exit Ticket (10 mins).'
      },
      {
        heading: 'VARK Multimodal Engagement',
        description: 'Provide at least two modality choices (e.g., visual diagramming alongside oral explanation) so every learner in a 40+ student classroom stays engaged.'
      },
      {
        heading: 'Bloom’s Cognitive Progression',
        description: 'Start questions at Understand level, then transition to Apply or Analyse to ensure deep conceptual mastery rather than rote memorization.'
      }
    ],
    quickHook: {
      title: 'Think-Pair-Share Provocation',
      duration: '5 mins',
      description: 'Pose a counter-intuitive question or show a puzzling real-world photo. Give 1 min silent thinking, 2 mins partner exchange, then 2 mins cold-calling.'
    },
    classroomManagement: 'Establish clear group roles (Facilitator, Timekeeper, Scribe, Reporter) to keep student groups self-directed during hands-on collaborative tasks.',
    pitfallToAvoid: 'Avoid lecturing for more than 12 consecutive minutes. Student cognitive retention drops sharply without an active processing task.'
  };
}

export function TeacherTipsPopover({
  gradeId,
  subjectId,
  className = '',
  buttonLabel = 'Teacher Tips',
  align = 'right'
}: TeacherTipsPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const tips = getPedagogicalAdvice(gradeId, subjectId);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2'
  }[align];

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        title="View context-aware teacher tips & CBSE pedagogical guidance"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-sm border ${
          isOpen
            ? 'bg-amber-500 text-white border-amber-600 ring-2 ring-amber-300 dark:ring-amber-900/60 shadow-md'
            : 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/80 hover:bg-amber-100 dark:hover:bg-amber-950/70 hover:border-amber-300'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300" />
        <span>{buttonLabel}</span>
      </button>

      {/* Popover Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={`absolute top-full mt-2.5 z-50 w-[380px] sm:w-[440px] max-w-[calc(100vw-2rem)] ${alignmentClasses} rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-left`}
            role="dialog"
            aria-label="Teacher Tips and Pedagogical Advice"
          >
            {/* Header with Track Badge and Close Button */}
            <div className="p-4 bg-gradient-to-r from-amber-500/10 via-indigo-500/5 to-transparent dark:from-amber-950/40 dark:via-indigo-950/20 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border tracking-wide ${tips.badgeStyle}`}>
                    <Sparkles className="w-3 h-3 shrink-0" />
                    {tips.trackLabel}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                  {tips.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                aria-label="Close tips"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-5 space-y-4 max-h-[460px] overflow-y-auto text-xs sm:text-sm">
              
              {/* Summary & Hours */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {tips.summary}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-indigo-700 dark:text-indigo-300 font-semibold pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                  <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  <span>{tips.hoursNote}</span>
                </div>
              </div>

              {/* 5-Minute Class Hook */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-200">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>5-Min Lesson Hook: {tips.quickHook.title}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 shrink-0">
                    {tips.quickHook.duration}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                  {tips.quickHook.description}
                </p>
              </div>

              {/* Key Pedagogical Strategies */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Recommended Teaching Strategies</span>
                </div>
                <div className="space-y-2">
                  {tips.keyStrategies.map((strat, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors"
                    >
                      <h5 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        {strat.heading}
                      </h5>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed pl-5">
                        {strat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classroom Management Tip for 40+ Students */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200 text-xs">
                  <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Classroom Management (40+ Students)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {tips.classroomManagement}
                </p>
              </div>

              {/* Pitfall to Avoid */}
              <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300 text-xs">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>Common Pitfall to Avoid</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {tips.pitfallToAvoid}
                </p>
              </div>

              {/* CBSE & NCF-SE Compliance Alignment */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>CBSE / NCF Compliance:</strong> {tips.cbseAlignment}
                </p>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                Target: {gradeId ? `Grade ${gradeId.replace('grade-', '')}` : 'All Grades'} {subjectId ? `• ${subjectId}` : ''}
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
              >
                Got it
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TeacherTipsPopover;
