import React, { useState } from 'react';
import { Printer, Download, Eye, FileText, CheckCircle2, Layers, Clock, Target, BookOpen, AlertCircle } from 'lucide-react';
import { WizardLessonPlan, WizardAssessment } from '@/features/planning/wizardTypes';
import { Unit } from '@/types';
import { gradesData } from '@/data/grades';

interface PrintReadyPlanExportProps {
  plan?: Partial<WizardLessonPlan>;
  unit?: Unit;
  assessment?: Partial<WizardAssessment>;
  rubricData?: {
    title: string;
    skillName: string;
    gradeName: string;
    levels: {
      emerging: string;
      developing: string;
      proficient: string;
      transfer: string;
    };
  };
  triggerLabel?: string;
  className?: string;
}

export function PrintReadyPlanExport({
  plan,
  unit,
  assessment,
  rubricData,
  triggerLabel = 'Print-Ready Export (B&W Optimized)',
  className = ''
}: PrintReadyPlanExportProps) {
  const [isOpen, setIsOpen] = useState(false);

  const gradeName = plan?.gradeId 
    ? (gradesData.find(g => g.id === plan.gradeId)?.name || plan.gradeId)
    : unit?.gradeId 
    ? (gradesData.find(g => g.id === unit.gradeId)?.name || unit.gradeId)
    : 'Grades 6–8 (Middle Stage)';

  const title = plan?.title || unit?.title || rubricData?.title || 'CBSE Competency Lesson Plan';
  const subject = plan?.subjectId || (unit?.learningAreas && unit.learningAreas.length > 0 ? unit.learningAreas.join(', ') : 'Curriculum Subject');
  const duration = (plan as any)?.durationMinutes ? `${(plan as any).durationMinutes} Minutes` : unit?.durationWeeks ? `${unit.durationWeeks} Weeks` : '45 Minutes';

  // Track Type determination for badges
  const isTrackA = subject.includes('Computational Thinking') || subject.includes('Embedded');
  const isTrackB = subject.includes('901') || subject.includes('Skill Module');
  const isTrackC = subject.includes('417') || subject.includes('Subject 417');

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2 shadow-xs transition-colors print:hidden ${className}`}
      >
        <Printer className="w-4 h-4 text-slate-600 dark:text-slate-400" />
        <span>{triggerLabel}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs print:static print:p-0 print:bg-white">
          <div className="bg-white text-black rounded-2xl max-w-4xl w-full p-6 sm:p-10 space-y-6 max-h-[92vh] overflow-y-auto border-2 border-black shadow-2xl print:border-none print:shadow-none print:max-w-full print:p-0">
            
            {/* Modal Actions Bar (Hidden in Print) */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b-2 border-slate-200 print:hidden">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-300">
                  Monochrome / B&W Print-Optimized
                </span>
                <span className="text-xs text-slate-500">
                  Ready for low-cost school printers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-black text-white hover:bg-slate-800 font-bold text-xs flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Document Now</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:text-black font-bold text-sm"
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* PRINT DOCUMENT BODY (Strict Black & White High Contrast) */}
            <div className="print-document font-sans text-black space-y-6 print:space-y-4">
              
              {/* Institution & Document Header */}
              <div className="border-b-2 border-black pb-4 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-600">
                      CBSE / NCF-SE Standardized Lesson & Unit Blueprint
                    </div>
                    <h1 className="text-2xl font-black uppercase tracking-tight text-black mt-1">
                      {title}
                    </h1>
                  </div>
                  <div className="text-right text-xs font-medium space-y-0.5">
                    <div><strong>Academic Year:</strong> 2026–2027</div>
                    <div><strong>Framework:</strong> NCF-SE (5+3+3+4)</div>
                    <div><strong>Date Generated:</strong> {new Date().toLocaleDateString('en-IN')}</div>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-black text-xs font-medium">
                  <div>
                    <span className="font-bold text-slate-700">Grade Level:</span> {gradeName}
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">Subject:</span> {subject}
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">Duration:</span> {duration}
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">Class Size:</span> ~40 Students
                  </div>
                </div>
              </div>

              {/* CBSE AI Track Badge (Patterned for Monochrome Clarity) */}
              {(isTrackA || isTrackB || isTrackC) && (
                <div className="p-3 border-2 border-black bg-slate-100 font-mono text-xs flex items-center justify-between">
                  <div className="font-black">
                    {isTrackA && '[ TRACK A : COMPULSORY-EMBEDDED CT & AI — ~100 HRS/YR ]'}
                    {isTrackB && '[ TRACK B : OPTIONAL AI SKILL MODULE 901 — 15 HRS STANDALONE ]'}
                    {isTrackC && '[ TRACK C : ELECTIVE AI SUBJECT 417 — 200 HRS (50 Theory + 50 Practical) ]'}
                  </div>
                  <div className="text-[10px] font-sans font-semibold">
                    {isTrackA && 'Mandatory for all enrolled students across Math/Science/S.St.'}
                    {isTrackB && 'Discretionary skill module offered at school level'}
                    {isTrackC && 'Official Secondary Board Examination elective'}
                  </div>
                </div>
              )}

              {/* Section 1: Pedagogical Focus & Competencies */}
              <div className="border border-black p-4 space-y-2">
                <div className="text-xs font-black uppercase tracking-wider border-b border-black pb-1 flex justify-between">
                  <span>1. Competency & Learning Objectives</span>
                  <span>NCF Competency Indicator</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                  <div>
                    <strong className="block font-bold">Curricular Focus Skills:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-slate-900">
                      {plan?.skillIds && plan.skillIds.length > 0 ? (
                        plan.skillIds.map((s, idx) => <li key={idx}>Skill: {s}</li>)
                      ) : (
                        <li>Algorithmic Decomposition & Logical Modeling</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <strong className="block font-bold">Bloom's Taxonomy Cognitive Levels:</strong>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {plan?.bloomsFocus && plan.bloomsFocus.length > 0 ? (
                        plan.bloomsFocus.map((b, idx) => (
                          <span key={idx} className="px-2 py-0.5 border border-black font-bold text-[10px]">
                            {b}
                          </span>
                        ))
                      ) : (
                        <span className="px-2 py-0.5 border border-black font-bold text-[10px]">
                          Understand • Apply • Analyse
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Lesson Timeline / Structural Flow */}
              {plan?.timeline && plan.timeline.length > 0 && (
                <div className="border border-black p-4 space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider border-b border-black pb-1">
                    2. Lesson Architecture & Activity Flow ({duration})
                  </div>
                  <table className="w-full text-left text-xs border-collapse border border-black mt-2">
                    <thead>
                      <tr className="bg-slate-200 border-b border-black font-bold">
                        <th className="p-2 border-r border-black w-20">Time</th>
                        <th className="p-2 border-r border-black w-36">Phase</th>
                        <th className="p-2">Teacher & Student Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plan.timeline.map((block, idx) => (
                        <tr key={idx} className="border-b border-black">
                          <td className="p-2 border-r border-black font-mono font-bold">{(block as any).minutes || block.durationMin || 15} min</td>
                          <td className="p-2 border-r border-black font-semibold uppercase">{(block as any).type || block.varkType || `Phase ${idx + 1}`}</td>
                          <td className="p-2">{block.title || 'Inquiry activity and guided practice'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Section 3: Assessment Rubric (Four-Level Maturity Grid) */}
              <div className="border border-black p-4 space-y-2">
                <div className="text-xs font-black uppercase tracking-wider border-b border-black pb-1 flex justify-between">
                  <span>3. Assessment Rubric — 4-Level Maturity Matrix</span>
                  <span>Formative / Summative</span>
                </div>
                
                <table className="w-full text-left text-xs border-collapse border border-black mt-2">
                  <thead>
                    <tr className="bg-slate-200 border-b border-black font-bold">
                      <th className="p-2 border-r border-black w-1/4">Level 1: Emerging</th>
                      <th className="p-2 border-r border-black w-1/4">Level 2: Developing</th>
                      <th className="p-2 border-r border-black w-1/4 bg-slate-300">Level 3: Proficient (Benchmark)</th>
                      <th className="p-2 w-1/4">Level 4: Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-top">
                      <td className="p-2 border-r border-black text-[11px] leading-relaxed">
                        {rubricData?.levels.emerging || 'Executes initial fragments with continuous teacher scaffolding; recalls basic terminology.'}
                      </td>
                      <td className="p-2 border-r border-black text-[11px] leading-relaxed">
                        {rubricData?.levels.developing || 'Executes routine tasks with minor conceptual slips; identifies errors when prompted.'}
                      </td>
                      <td className="p-2 border-r border-black text-[11px] leading-relaxed bg-slate-100 font-medium">
                        {rubricData?.levels.proficient || 'Consistently achieves grade-level learning outcome; independently applies concepts with rationale.'}
                      </td>
                      <td className="p-2 text-[11px] leading-relaxed">
                        {rubricData?.levels.transfer || 'Generalizes understanding to novel cross-subject domains; evaluates edge-case limitations.'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 4: Differentiation & Classroom Management */}
              <div className="border border-black p-4 space-y-2">
                <div className="text-xs font-black uppercase tracking-wider border-b border-black pb-1">
                  4. Differentiation & VARK Strategy
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
                  <div className="border border-black p-2">
                    <strong className="block text-[10px] uppercase font-bold">Visual (V)</strong>
                    <span className="text-[11px]">System flowcharts, concept maps, board schematics</span>
                  </div>
                  <div className="border border-black p-2">
                    <strong className="block text-[10px] uppercase font-bold">Auditory (A)</strong>
                    <span className="text-[11px]">Think-pair-share, peer logic debates, verbal recaps</span>
                  </div>
                  <div className="border border-black p-2">
                    <strong className="block text-[10px] uppercase font-bold">Reading/Writing (R)</strong>
                    <span className="text-[11px]">Structured inquiry logs, reflection journals, worksheets</span>
                  </div>
                  <div className="border border-black p-2">
                    <strong className="block text-[10px] uppercase font-bold">Kinesthetic (K)</strong>
                    <span className="text-[11px]">Unplugged floor maze, physical sorting games, tactile models</span>
                  </div>
                </div>
              </div>

              {/* Official Source Citations & Signoff Footer */}
              <div className="pt-3 border-t-2 border-black space-y-4">
                <div className="flex items-start justify-between gap-4 text-[10px] text-slate-700">
                  <div>
                    <strong>Curricular Authority Citations:</strong> Aligned to NEP 2020 (Sections 4.4 & 4.27), NCF-SE 2023 Stage Specifications, and CBSE Curriculum Circulars.
                  </div>
                  <div className="text-right whitespace-nowrap font-mono font-bold">
                    Subjects2Skills v0.6 · Standardized Export
                  </div>
                </div>

                {/* Teacher & Principal Signoff Lines */}
                <div className="grid grid-cols-2 gap-12 pt-6 text-xs font-bold">
                  <div className="border-t border-black pt-1 text-center">
                    Teacher Signature & Date
                  </div>
                  <div className="border-t border-black pt-1 text-center">
                    Curriculum Coordinator / Principal Signoff
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default PrintReadyPlanExport;
