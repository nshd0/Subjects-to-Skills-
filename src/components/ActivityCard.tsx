import React, { useState } from 'react';
import { Activity } from '@/types';
import { useProgress } from '@/contexts/ProgressContext';
import { 
  Clock, Users, CheckCircle, Copy, Check, Printer, ChevronDown, 
  ChevronUp, Sparkles, BookOpen, AlertCircle, Home, Compass, 
  Cpu, Award, MessageSquare, Bookmark, FileCode, Layers, Eye,
  FileText
} from 'lucide-react';
import { VisualActivityGuide } from '@/components/activities/VisualActivityGuide';
import { priorityScenesData } from '@/data/learningScenesData';
import { 
  ScenarioIllustration, 
  ActivityStepIllustration, 
  LearningEvidenceIllustration,
  ProcessFlowDiagram,
  InclusionCallout,
  SafetyCallout,
  MaterialIconSet
} from '@/components/illustrations';

interface ActivityCardProps {
  key?: React.Key;
  activity: Activity;
  isFlagship?: boolean;
}

export function ActivityCard({ activity, isFlagship = false }: ActivityCardProps) {
  const [isExpanded, setIsExpanded] = useState(isFlagship);
  const [copiedPlan, setCopiedPlan] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [viewMode, setViewMode] = useState<'all' | 'visual' | 'text'>('text');
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const { isBookmarked, toggleBookmark } = useProgress();

  const sceneData = priorityScenesData[activity.id];
  const hasNewVisuals = !!activity.visuals;
  const isSaved = isBookmarked(activity.id);

  const handleToggleBookmark = () => {
    toggleBookmark({
      id: activity.id,
      type: 'activity',
      title: activity.title,
      subtitle: `${activity.grade} · ${activity.primarySkill}`,
      grade: activity.grade,
      stage: activity.stage,
      path: `/activities`
    });
  };

  const copyActivityPlan = () => {
    const text = `
ACTIVITY PLAN: ${activity.title}
Grade: ${activity.grade} (${activity.stage})
Learning Area: ${activity.learningArea || 'Curricular Learning'}
Subject(s): ${activity.subject.join(', ')}
Primary Skill: ${activity.primarySkill}
Supporting Skills: ${activity.supportingSkills.join(', ')}
Activity Type: ${activity.activityType || 'Classroom Task'}

LEARNING OBJECTIVE:
${activity.learningObjective}

ESSENTIAL KNOWLEDGE REQUIRED:
${activity.essentialKnowledge ? activity.essentialKnowledge.join('\n- ') : 'Core grade subject concepts'}

LOGISTICS:
- Duration: ${activity.duration}
- Group Size: ${activity.groupSize || 'Flexible'}
- Classroom Setup: ${activity.setup}
- Materials Required: ${(activity.materials || []).join(', ')}
- Low-Resource Alternative: ${activity.lowResourceAlternative || 'Usable with chalkboard and slates'}

STEP-BY-STEP TEACHER INSTRUCTIONS:
${(activity.steps || []).map((s, idx) => `${idx + 1}. ${s}`).join('\n')}

STUDENT INSTRUCTIONS:
${activity.studentInstructions ? activity.studentInstructions.map((s, idx) => `${idx + 1}. ${s}`).join('\n') : 'Follow guided steps'}

TEACHER PROMPTS:
${(activity.teacherPrompts || []).map(p => `- "${p}"`).join('\n')}

STUDENT OUTPUT:
${activity.studentOutput}

EVIDENCE & ASSESSMENT:
Criteria:
${(activity.assessmentCriteria || []).map(c => `- ${c}`).join('\n')}

Reflection Prompt: ${activity.reflectionPrompt || 'What did you discover today?'}

DIFFERENTIATION & INCLUSION:
- Scaffold: ${activity.scaffold || 'Provide guided templates'}
- Extension: ${activity.extension}
- Accessibility: ${activity.accessibility || 'Ensure accessible physical and auditory space'}
- Language Support: ${activity.languageSupport || 'Permit discussions in primary language'}

HOME CONNECTION:
${activity.homeConnection}
`.trim();

    navigator.clipboard.writeText(text);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2000);
  };

  const copyBlankTemplate = () => {
    const template = `
# SUBJECTS2SKILLS CLASSROOM ACTIVITY TEMPLATE
**Title:** [Activity Name]
**Target Grade & Stage:** [e.g. Grade 3, Preparatory Stage]
**Subject(s):** [e.g. Mathematics / Environmental Studies]
**Primary Observable Skill:** [e.g. Spatial Pattern Recognition]
**Supporting Skills:** [e.g. Collaborative Inquiry, Estimation]

## 1. Curricular Intent
- **Learning Objective:** Students will be able to...
- **Essential Knowledge (Prerequisites):** [Core concept 1, Core concept 2]

## 2. Classroom Logistics
- **Duration:** 45 minutes
- **Group Size:** [Pairs / Small groups of 4 / Individual]
- **Classroom Setup:** [Desk arrangement, safety considerations]
- **Materials:** [Required physical tools or stationery]
- **Low-Resource Alternative:** [Chalkboard, scrap paper, slates]

## 3. Step-by-Step Flow
1. **Hook & Prior-Knowledge Activation (10 mins):** ...
2. **Investigation & Collaborative Work (20 mins):** ...
3. **Synthesis & Class Presentation (10 mins):** ...
4. **Formative Reflection & Wrap-up (5 mins):** ...

## 4. Teacher Inquiry Prompts
- "What pattern do you notice when...?"
- "What evidence supports your reasoning?"

## 5. Observable Student Output
[Tangible artifact created: chart, model, write-up, or demonstrated procedure]

## 6. Assessment Criteria
- [Emerging:] Requires continuous prompting to execute steps.
- [Developing:] Completes task with occasional peer or teacher support.
- [Proficient:] Independently executes and articulates reasoning clearly.
- [Transfer:] Adapts method to solve an unfamiliar problem.

## 7. Differentiation
- **Scaffold:** [Support for students requiring additional assistance]
- **Extension:** [Open-ended challenge for quick finishers]
- **Home Connection:** [Real-world application observed at home]
`.trim();

    navigator.clipboard.writeText(template);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id={activity.id}
      className={`bg-white dark:bg-slate-900 border rounded-xl overflow-hidden transition-all shadow-xs print:border-none print:shadow-none print:break-inside-avoid ${
        isFlagship 
          ? 'border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-500/20' 
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Print-Only Header */}
      <div className="hidden print:block pb-4 mb-3 border-b-2 border-slate-300">
        <div className="text-[10px] uppercase font-bold text-slate-500">
          Subjects2Skills Framework · Classroom Activity Plan
        </div>
        <h2 className="text-xl font-bold text-slate-950 mt-1">
          {activity.title}
        </h2>
        <div className="text-xs text-slate-700 mt-1 flex gap-3">
          <span><strong>Grade:</strong> {activity.grade} ({activity.stage})</span>
          <span><strong>Subject:</strong> {activity.subject.join(' & ')}</span>
          <span><strong>Duration:</strong> {activity.duration}</span>
        </div>
      </div>

      {/* Header */}
      <div className={`p-5 border-b print:bg-transparent print:p-0 print:border-none ${
        isFlagship 
          ? 'bg-gradient-to-r from-indigo-50/80 to-blue-50/50 dark:from-indigo-950/40 dark:to-slate-900 border-indigo-200 dark:border-indigo-900/60' 
          : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2">
            {isFlagship && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-600 text-white flex items-center gap-1 shadow-2xs">
                <Sparkles className="w-3 h-3" /> Flagship Activity
              </span>
            )}
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {activity.grade} · {activity.stage}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              {activity.activityType || 'Investigation'}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
              {activity.status === 'in-development' ? 'In Development (Pilot Ready)' : 'Active Plan'}
            </span>
            {sceneData && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900 dark:bg-teal-900/50 dark:text-teal-200 flex items-center gap-1 border border-teal-200 dark:border-teal-800 shadow-2xs">
                <Layers className="w-3 h-3 text-teal-700 dark:text-teal-300" />
                Learning Scene
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 self-end sm:self-auto print:hidden">
            <button
              onClick={handleToggleBookmark}
              className={`p-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1 min-h-[36px] ${
                isSaved 
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-700 dark:text-indigo-300' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
              title={isSaved ? "Remove from bookmarks" : "Save to bookmarks"}
              aria-label={isSaved ? "Remove from bookmarks" : "Save to bookmarks"}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden md:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={copyActivityPlan}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors min-h-[36px]"
              title="Copy complete activity plan text"
              aria-label="Copy activity plan"
            >
              {copiedPlan ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copiedPlan ? 'Copied!' : 'Copy Plan'}</span>
            </button>

            <button
              onClick={copyBlankTemplate}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors min-h-[36px]"
              title="Copy blank lesson plan markdown template"
              aria-label="Copy blank template"
            >
              {copiedTemplate ? <Check className="w-3 h-3 text-emerald-600" /> : <FileCode className="w-3 h-3" />}
              <span className="hidden md:inline">{copiedTemplate ? 'Copied!' : 'Blank Template'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg min-h-[36px] min-w-[36px] flex items-center justify-center"
              title="Print classroom activity card"
              aria-label="Print classroom activity card"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          {activity.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            Subject: <strong>{activity.subject.join(' & ')}</strong>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Duration: <strong>{activity.duration}</strong>
          </span>
          {activity.groupSize && (
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              Group: <strong>{activity.groupSize}</strong>
            </span>
          )}
        </div>
      </div>

      {/* Primary Skill & Objective Box */}
      <div className="p-5 space-y-4 print:p-0 print:mt-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
            Primary Observable Skill
          </span>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {activity.primarySkill}
          </p>
          {activity.supportingSkills && activity.supportingSkills.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="text-xs text-slate-400 mr-1 self-center">Supporting:</span>
              {activity.supportingSkills.map(s => (
                <span key={s} className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
            Learning Objective
          </span>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {activity.learningObjective}
          </p>
        </div>

        {/* Student Output Quick View */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-800 text-sm print:bg-slate-100 print:border-slate-300">
          <span className="font-semibold text-slate-800 dark:text-slate-200">What Students Produce: </span>
          <span className="text-slate-700 dark:text-slate-300">{activity.studentOutput}</span>
        </div>

        {/* Toggle full details */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="w-full flex items-center justify-center gap-1 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/30 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 rounded-lg border border-indigo-100 dark:border-indigo-900/40 transition-colors print:hidden min-h-[44px]"
        >
          {isExpanded ? 'Hide Complete Teacher Instructions & Rubrics' : 'View Complete Classroom Plan & Instructions'}
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
        </button>

        {/* Detailed Sections (Force visible in print mode) */}
        <div className={`pt-4 border-t border-slate-200 dark:border-slate-800 space-y-6 ${
          isExpanded ? 'block' : 'hidden print:!block'
        }`}>

          {/* View Mode Selector for Illustrated Activities */}
          {(sceneData || hasNewVisuals) && (
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800 print:hidden">
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setViewMode('all')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === 'all'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Complete Plan
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('visual')}
                  className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                    viewMode === 'visual'
                      ? 'bg-teal-700 text-white shadow-2xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Visual Step Guide
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('text')}
                  className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                    viewMode === 'text'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Text Plan Only
                </button>
              </div>

              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Subjects2Skills Learning Scenes Visual Language
              </span>
            </div>
          )}

          {/* ================= INSTRUCTIONAL VISUAL SYSTEM ================= */}
          {(hasNewVisuals && (viewMode === 'all' || viewMode === 'visual')) && (
            <VisualActivityGuide activity={activity} className="mb-6" />
          )}

          {!hasNewVisuals && sceneData && (viewMode === 'all' || viewMode === 'visual') && (
            <div className="space-y-6 pt-1">
              {/* 1. Classroom Scenario Overview Illustration */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    Classroom Learning Scene & Roles
                  </h4>
                  <span className="text-[11px] font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
                    Smartboard Projectable
                  </span>
                </div>
                <ScenarioIllustration scene={sceneData} />
              </div>

              {/* 2. Physical Materials & Low-Resource Kit */}
              <MaterialIconSet materials={sceneData.materials} />

              {/* 3. Pedagogical Workflow & Sequenced Steps */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Sequenced Step-by-Step Instructional Visuals
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    {sceneData.steps.length} Sequenced Phases
                  </span>
                </div>

                <ProcessFlowDiagram 
                  steps={sceneData.steps} 
                  activeStep={activeStepTab} 
                  onStepClick={(s) => setActiveStepTab(s)} 
                  className="mb-4"
                />

                <div className="space-y-4">
                  {sceneData.steps.map((step) => (
                    <ActivityStepIllustration 
                      key={step.stepNumber} 
                      step={step} 
                      totalSteps={sceneData.steps.length} 
                    />
                  ))}
                </div>
              </div>

              {/* 4. Benchmark Evidence of Learning Artifact */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mb-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  Evidence of Learning: Benchmark Student Output
                </h4>
                <LearningEvidenceIllustration 
                  evidence={sceneData.evidence} 
                  activityId={activity.id} 
                />
              </div>

              {/* 5. Inclusions and Safety Notes */}
              {sceneData.inclusion && (
                <InclusionCallout inclusion={sceneData.inclusion} />
              )}
              {sceneData.safety && (
                <SafetyCallout safety={sceneData.safety} />
              )}
            </div>
          )}
          
          {/* ================= TEXT CURRICULAR PLAN ================= */}
          {(!(sceneData || hasNewVisuals) || viewMode === 'all' || viewMode === 'text') && (
            <div className="space-y-6 pt-2">
              {/* Section divider when in 'all' view with visuals above */}
              {sceneData && viewMode === 'all' && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-4">
                    <FileText className="w-4 h-4 text-slate-500" />
                    Curriculum Standards, Prompts & Differentiation Details
                  </span>
                </div>
              )}

              {/* Essential Knowledge & Setup */}
              <div className="grid md:grid-cols-2 gap-4">
                {activity.essentialKnowledge && (
                  <div className="p-3.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-xs print:bg-white print:border-slate-300">
                    <span className="font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 block mb-1.5 print:text-black">
                      Essential Knowledge Required
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 print:text-black">
                      {activity.essentialKnowledge.map((k, i) => (
                        <li key={i}>{k}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 text-xs space-y-2 print:bg-white print:border-slate-300">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-500 block mb-1 print:text-black">
                      Classroom Setup
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 print:text-black">{activity.setup}</p>
                  </div>
                  <div>
                    <span className="font-bold uppercase tracking-wider text-slate-500 block mb-1 print:text-black">
                      Materials Required
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 print:text-black">{(activity.materials || []).join(', ')}</p>
                  </div>
                  {activity.lowResourceAlternative && (
                    <div>
                      <span className="font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1 print:text-black">
                        Low-Resource Alternative
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 print:text-black">{activity.lowResourceAlternative}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Step-by-Step Teacher Instructions */}
              {(!hasNewVisuals || viewMode === "text") && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-2 print:text-black">
                  <Compass className="w-4 h-4 text-indigo-500 print:hidden" />
                  Step-by-Step Teacher Instructions
                </span>
                <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300 print:text-black">
                  {(activity.steps || []).map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 print:p-1">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 print:bg-slate-200 print:text-black">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              )}

              {/* Student Instructions */}
              {activity.studentInstructions && activity.studentInstructions.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 print:text-black">
                    Student Instructions (To Read or Share on Board)
                  </span>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-sm print:bg-white print:border-slate-300">
                    {(activity.studentInstructions || []).map((inst, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 print:text-black">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{inst}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Teacher Prompts */}
              {activity.teacherPrompts && activity.teacherPrompts.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-2 print:text-black">
                    <MessageSquare className="w-4 h-4 text-teal-500 print:hidden" />
                    Teacher Prompts for Formative Questioning
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2 print:grid-cols-1">
                    {(activity.teacherPrompts || []).map((p, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-900/30 text-xs text-teal-950 dark:text-teal-200 italic print:bg-slate-50 print:text-black print:border-slate-200">
                        "{p}"
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Assessment Criteria & Evidence */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3 print:bg-white print:border-slate-300">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 print:text-black">
                  <CheckCircle className="w-4 h-4 text-emerald-500 print:hidden" />
                  Assessment Criteria (What to Observe)
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside print:text-black">
                  {(activity.assessmentCriteria || []).map((crit, idx) => (
                    <li key={idx}>{crit}</li>
                  ))}
                </ul>

                {activity.reflectionPrompt && (
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs">
                    <strong className="text-slate-700 dark:text-slate-300 print:text-black">Reflection Prompt: </strong>
                    <span className="italic text-slate-600 dark:text-slate-400 print:text-black">"{activity.reflectionPrompt}"</span>
                  </div>
                )}
              </div>

              {/* Differentiation, Inclusion & Home Connection */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1 print:border-slate-300">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block print:text-black">Scaffold & Extension</span>
                  <p className="text-slate-600 dark:text-slate-400 print:text-black"><strong>Scaffold:</strong> {activity.scaffold || 'Use simplified tally or sentence starters'}</p>
                  <p className="text-slate-600 dark:text-slate-400 print:text-black"><strong>Extension:</strong> {activity.extension}</p>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1 print:border-slate-300">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block flex items-center gap-1 print:text-black">
                    <Home className="w-3.5 h-3.5 text-blue-500 print:hidden" /> Home Connection
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 print:text-black">{activity.homeConnection}</p>
                </div>
              </div>

              {/* Local Context Adaptation Note */}
              {activity.localAdaptation && (
                <p className="text-xs italic text-slate-500 dark:text-slate-400 border-l-2 border-amber-400 pl-2 print:text-black">
                  Indian Context Note: {activity.localAdaptation}
                </p>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

