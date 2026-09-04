import React, { useState } from 'react';
import { SubjectSkillMap } from '@/types';
import { useProgress } from '@/contexts/ProgressContext';
import { Badge } from '@/components/ui/Badge';
import { 
  BookOpen, Target, CheckCircle2, Eye, Compass, Layers, 
  Sparkles, HelpCircle, ChevronDown, ChevronUp, Copy, Check, Bookmark, FileCode 
} from 'lucide-react';

interface SubjectSkillMapCardProps {
  key?: React.Key;
  mapping: SubjectSkillMap;
  onSelectActivity?: (activityId: string) => void;
}

export function SubjectSkillMapCard({ mapping, onSelectActivity }: SubjectSkillMapCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedMap, setCopiedMap] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const { isBookmarked, toggleBookmark } = useProgress();

  const isSaved = isBookmarked(mapping.id);

  const handleToggleBookmark = () => {
    toggleBookmark({
      id: mapping.id,
      type: 'mapping',
      title: `${mapping.subject} (${mapping.grade})`,
      subtitle: `${mapping.learningArea} · Primary Skill: ${mapping.primarySkill}`,
      grade: mapping.grade,
      stage: mapping.stage,
      path: `/grade/${mapping.grade.toLowerCase().replace(/\s+/g, '-')}`
    });
  };

  const copyHierarchy = () => {
    const text = `
STAGE & GRADE: ${mapping.stage} · ${mapping.grade}
LEARNING AREA: ${mapping.learningArea}
SUBJECT: ${mapping.subject}
CURRICULAR GOAL: ${mapping.curricularGoal}
COMPETENCY: ${mapping.competency}
LEARNING OUTCOME: ${mapping.learningOutcome}
PRIMARY SKILL: ${mapping.primarySkill}
SUPPORTING SKILLS: ${mapping.supportingSkills.join(', ')}
ESSENTIAL KNOWLEDGE:
${mapping.essentialKnowledge.map(k => `- ${k}`).join('\n')}

WHAT STUDENTS LEARN:
${mapping.whatStudentsLearn || ''}

WHAT STUDENTS CAN DO:
${mapping.whatStudentsCanDo || ''}

HOW TEACHERS TEACH IT:
${mapping.howTeachersTeachIt || ''}

WHAT STUDENTS PRODUCE:
${mapping.whatStudentsProduce || ''}

HOW LEARNING BECOMES VISIBLE:
${mapping.howLearningBecomesVisible || ''}

HOW PROGRESS IS ASSESSED:
${mapping.howProgressIsAssessed || ''}

SUPPORT & EXTENSION:
${mapping.supportAndExtension || ''}
`.trim();

    navigator.clipboard.writeText(text);
    setCopiedMap(true);
    setTimeout(() => setCopiedMap(false), 2000);
  };

  const copyBlankMappingTemplate = () => {
    const template = `
# SUBJECTS2SKILLS CURRICULUM MAPPING TEMPLATE
**Stage & Grade:** [e.g. Preparatory Stage · Grade 3]
**NCF Curricular Area:** [e.g. Mathematics and Computational Thinking]
**Subject:** [e.g. Mathematics]
**Curricular Goal (CG):** [Official NCF Curricular Goal statement]
**Competency (C):** [Observable competency statement]
**Learning Outcome (LO):** [Grade-appropriate measurable outcome]

## Knowledge & Skill Disciplinary Alignment
- **Disciplinary Knowledge Focus:** [What conceptual understanding is introduced]
- **Essential Vocabulary:** [Key technical/subject terms]
- **Primary Observable Skill:** [Specific cognitive or physical skill organized]
- **Supporting Skills:** [Transdisciplinary or social skills exercised]

## Classroom Pedagogy & Student Evidence
- **How Teachers Facilitate:** [Inquiry-based, multisensory, concrete-pictorial-abstract]
- **What Students Learn:** [Conceptual milestone]
- **What Students Can Do:** [Observable capability]
- **Tangible Student Output:** [Artifact, design, calculation, explanation]
- **Observable Evidence of Competency:** [Performance indicator]
- **Formative Assessment Method:** [Rubric level, checklist, peer review]

## Support & Extension (Inclusion)
- **Scaffolding:** [Visual cue card, peer partner, reduced step load]
- **Enrichment / Extension:** [Deeper investigative inquiry, real-world data application]
`.trim();

    navigator.clipboard.writeText(template);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-all print:break-inside-avoid print:border-none print:shadow-none">
      {/* Header Bar */}
      <div className="bg-slate-50 dark:bg-slate-800/60 p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 print:bg-transparent print:p-0 print:border-none">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
              {mapping.stage} · {mapping.grade}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
              {mapping.learningArea}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
              {mapping.sourceType === 'official-reference' ? 'CBSE/NCERT Reference' : 'Subjects2Skills Aligned'}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400 print:hidden" />
            {mapping.subject}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 print:hidden">
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
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={copyHierarchy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors min-h-[36px]"
            title="Copy entire curriculum hierarchy"
            aria-label="Copy curriculum mapping"
          >
            {copiedMap ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedMap ? 'Copied' : 'Copy Map'}
          </button>

          <button
            onClick={copyBlankMappingTemplate}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors min-h-[36px]"
            title="Copy blank 21-level mapping markdown template"
            aria-label="Copy blank template"
          >
            {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileCode className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{copiedTemplate ? 'Copied' : 'Blank Template'}</span>
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors min-h-[36px]"
          >
            {isExpanded ? 'Less Details' : 'Full Curriculum Hierarchy'}
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Grid: Required Core Labels */}
      <div className="p-5 space-y-6">
        {/* Curricular Alignment Box */}
        <div className="grid md:grid-cols-3 gap-4 p-4 rounded-lg bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
              Curricular Goal
            </span>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {mapping.curricularGoal}
            </p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
              Competency
            </span>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {mapping.competency}
            </p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
              Learning Outcome
            </span>
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              {mapping.learningOutcome}
            </p>
          </div>
        </div>

        {/* Essential Knowledge & What Students Learn */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-500" />
              Essential Knowledge
            </span>
            <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-700 dark:text-slate-300">
              {mapping.essentialKnowledge.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
            {mapping.whatStudentsLearn && (
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  What Students Learn
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300">{mapping.whatStudentsLearn}</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-500" />
              What Students Can Do
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {mapping.whatStudentsCanDo || mapping.competency}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                Skill Focus (Observable Behavior)
              </span>
              <div className="p-3 bg-indigo-50/60 dark:bg-indigo-950/40 rounded-lg border border-indigo-100 dark:border-indigo-900/50">
                <p className="text-sm font-semibold text-indigo-950 dark:text-indigo-200 mb-1">
                  {mapping.primarySkill}
                </p>
                {mapping.supportingSkills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-xs text-slate-500 mr-1 self-center">Supporting:</span>
                    {mapping.supportingSkills.map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* How Teachers Teach It & What Students Produce */}
        <div className="grid md:grid-cols-2 gap-6 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1.5">
              <Compass className="w-4 h-4 text-blue-500" />
              How Teachers Teach It
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {mapping.howTeachersTeachIt || mapping.pedagogy.join(', ')}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              What Students Produce
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {mapping.whatStudentsProduce || mapping.studentOutput}
            </p>
          </div>
        </div>

        {/* Visibility & Assessment */}
        <div className="grid md:grid-cols-2 gap-6 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1.5">
              <Eye className="w-4 h-4 text-teal-500" />
              How Learning Becomes Visible
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {mapping.howLearningBecomesVisible || mapping.evidence.join('; ')}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              How Progress Is Assessed
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {mapping.howProgressIsAssessed || "Assessed via rubrics evaluating observable behavior and performance criteria."}
            </p>
          </div>
        </div>

        {/* Support & Extension */}
        {mapping.supportAndExtension && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-1.5">
              <HelpCircle className="w-4 h-4 text-purple-500" />
              Support and Extension
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {mapping.supportAndExtension}
            </p>
          </div>
        )}

        {/* Connected Activities Quick Link */}
        {mapping.activityIds && mapping.activityIds.length > 0 && onSelectActivity && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Connected Classroom Activities: <strong className="text-indigo-600 dark:text-indigo-400">{mapping.activityIds.length} available</strong>
            </span>
            <button
              onClick={() => onSelectActivity(mapping.activityIds[0])}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View Flagship Activity →
            </button>
          </div>
        )}

        {/* Extended Collapsible Hierarchy (Visible in print) */}
        <div className={`mt-4 pt-4 border-t-2 border-dashed border-slate-200 dark:border-slate-800 space-y-4 bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl print:bg-white print:border-slate-300 ${
          isExpanded ? 'block' : 'hidden print:!block'
        }`}>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 print:text-black">
            Full 21-Level Curriculum Hierarchy Specification
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs print:grid-cols-2">
            <div><span className="font-semibold text-slate-500 print:text-black">Stage:</span> {mapping.stage}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Grade:</span> {mapping.grade}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Learning Area:</span> {mapping.learningArea}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Subject:</span> {mapping.subject}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Key Concepts:</span> {mapping.keyConcepts.join(', ')}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Core Vocabulary:</span> {mapping.vocabulary.join(', ')}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Subject Practices:</span> {mapping.subjectPractices.join(', ')}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Pedagogy Stages:</span> {mapping.pedagogy.join(', ')}</div>
            <div><span className="font-semibold text-slate-500 print:text-black">Inclusion Supports:</span> {mapping.inclusion.length} strategies</div>
          </div>
        </div>
      </div>
    </div>
  );
}
