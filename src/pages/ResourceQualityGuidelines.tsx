import React from 'react';
import { 
  FileCheck, 
  ShieldCheck, 
  Award, 
  Layers, 
  HelpCircle, 
  Star, 
  Scale, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export function ResourceQualityGuidelines() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200">
              Activity Bank 2.0 Quality Assurance Standard
            </span>
            <span className="text-xs text-slate-500">Version 0.8 Verified</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <FileCheck className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            Classroom Resource Quality & Peer Review Guidelines
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            To maintain zero misinformation and ensure practical classroom usability across Indian schools, every user-generated resource (worksheet, slide deck, video playlist, activity kit, exit ticket) must undergo rigorous double peer verification under a 4-dimension rubric.
          </p>
        </div>

        {/* 4-Dimension Rubric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
              <Scale className="w-5 h-5" />
              Dimension 1: Curriculum Alignment (1–5 Scale)
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every resource must explicitly map to NCF-SE 2023 or official State SCERT curricular goals and competencies. Worksheets must develop clear cognitive abilities (recall, application, analysis) rather than rote copying.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl">
              <strong>Passing Threshold:</strong> Minimum 4.0 average from 2 verified peer educators.
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              Dimension 2: Classroom Usability & Readiness (1–5 Scale)
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Worksheets must include full answer keys and teacher instructional tips. Slide decks must contain talking points. Hands-on kits must use low-cost materials accessible in any rural or urban Indian school.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl">
              <strong>Passing Threshold:</strong> Zero missing answer keys; estimated timing must be tested in real classrooms.
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              Dimension 3: Textual Grounding & Source Verification (1–5 Scale)
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              All claims must cite official textbooks currently prescribed for 2024–2026 (NCERT, Balbharati, Samagra, DSERT, SCERT UP, etc.). Fabricated competencies or unofficial commercial syllabus standards are strictly rejected.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl">
              <strong>Passing Threshold:</strong> Full textbook edition, chapter number, and page range verification.
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <Award className="w-5 h-5" />
              Dimension 4: Accessibility, Scaffolding & UDL (1–5 Scale)
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Every submission must provide both a "Simplify for struggling learners" tier and an "Extend for advanced learners" tier, along with UDL modality tags (Visual, Auditory, Kinesthetic, Reading/Writing) and RPwD Act 2016 IEP accommodations.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl">
              <strong>Passing Threshold:</strong> Mandatory scaffolding fields; WCAG AA contrast ratio compliance.
            </div>
          </div>
        </div>

        {/* Rate Limiting & Licensing Rules */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            Rate Limiting, Licensing & Educator Attribution
          </h3>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 leading-relaxed">
            <li>
              <strong>Monthly Submission Cap:</strong> Teachers may submit a maximum of <strong>10 resources per month</strong> to maintain high curation quality and prevent spam. Quotas reset automatically on the 1st of every month.
            </li>
            <li>
              <strong>Open Licensing:</strong> All classroom materials are released under <strong>Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</strong>. Commercial paywalls or copyrighted textbook scans without fair-dealing educational context are prohibited.
            </li>
            <li>
              <strong>Double Peer Review Requirement:</strong> Before any submitted resource receives the green "Peer-Reviewed" certification badge and appears in public searches, <strong>two verified educators</strong> must review and endorse it.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
