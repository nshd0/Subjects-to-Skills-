import React from 'react';
import { SubjectMapping } from '@/data/curriculum';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Target, Lightbulb, FileCheck, Info, HeartHandshake, Map, Clock, BadgeCheck, BookOpen, Users, HelpCircle, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { FeedbackModal } from './FeedbackModal';

export function SubjectMappingCard({ subject, index, currentGrade }: { key?: React.Key | string | number, subject: SubjectMapping, index: number, currentGrade?: string }) {
  const displayGrade = currentGrade || (subject.applicableGrades ? subject.applicableGrades[0] : "All Grades in Stage");

  return (
    <AccordionItem value={`item-${index}`} className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 shadow-sm overflow-hidden mb-4">
      <AccordionTrigger className="hover:no-underline py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-4 gap-2 text-left">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">{subject.name}</span>
            {subject.ncfCurricularArea && (
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {subject.ncfCurricularArea}
              </Badge>
            )}
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <Badge variant="outline" className="w-fit text-xs text-slate-600 border-slate-200 dark:text-slate-400 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
              {displayGrade}
            </Badge>
            {subject.sourceLabel && (
              <Badge variant="outline" className="w-fit text-xs text-indigo-600 border-indigo-200 dark:text-indigo-400 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/30">
                {subject.sourceLabel}
              </Badge>
            )}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
        
        {/* Section 1: Official Learning Standards */}
        <div className="bg-slate-50 dark:bg-slate-950/50 rounded-lg p-5 border border-slate-200 dark:border-slate-800 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <BadgeCheck className="h-24 w-24" />
          </div>
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2 relative z-10">
            <BadgeCheck className="h-4 w-4" /> Official NCF-SE / CBSE Learning Standard
          </h4>
          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            <div className="sm:col-span-2 flex items-center gap-2 pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Curricular Area:</span>
              <Badge className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300" variant="outline">
                {subject.ncfCurricularArea || subject.name}
              </Badge>
            </div>

            {subject.curricularGoal && (
              <div className="sm:col-span-2">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Curricular Goal (Stage Level)</span>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{subject.curricularGoal}</p>
              </div>
            )}
            {subject.competency && (
              <div className="sm:col-span-2 pt-2">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-1">Competency</span>
                <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">{subject.competency}</p>
              </div>
            )}
            {subject.learningOutcome && (
              <div className="sm:col-span-2">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">Grade-Specific Learning Outcome ({displayGrade})</span>
                <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">{subject.learningOutcome}</p>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Subjects2Skills Interpretation */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Target className="h-4 w-4" /> Subjects2Skills Interpretation
          </h4>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                <BookOpen className="h-4 w-4 text-indigo-500" /> Essential Knowledge
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{subject.essentialKnowledge}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                <Target className="h-4 w-4 text-indigo-500" /> Core Skills
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{subject.skills}</p>
            </div>
            {(subject.valuesAndDispositions || subject.localIndianContext) && (
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                {subject.valuesAndDispositions && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      <HeartHandshake className="h-4 w-4 text-rose-500" /> Values & Dispositions
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{subject.valuesAndDispositions}</p>
                  </div>
                )}
                {subject.localIndianContext && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      <Map className="h-4 w-4 text-orange-500" /> Local & Indian Context
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{subject.localIndianContext}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Suggested Classroom Implementation */}
        <div className="bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg p-5 border border-indigo-100 dark:border-indigo-900/30">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-indigo-500" /> Suggested Classroom Implementation
          </h4>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="md:col-span-2 flex flex-wrap gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded border border-slate-200 dark:border-slate-700">
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {subject.timeAndResources || "Standard Duration"}</span>
              <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {subject.groupSize || "Flexible grouping"}</span>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                <Lightbulb className="h-4 w-4 text-amber-500" /> Pedagogy & Activities
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><span className="font-medium text-slate-800 dark:text-slate-200">Mode:</span> {subject.pedagogy}</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mt-1"><span className="font-medium text-slate-800 dark:text-slate-200">Action:</span> {subject.activities}</p>
            </div>
            
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                <HelpCircle className="h-4 w-4 text-purple-500" /> Teacher Preparation
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{subject.teacherPrep}</p>
            </div>

            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  <FileCheck className="h-4 w-4 text-emerald-500"/> Student Evidence
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{subject.evidence}</p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  <Info className="h-4 w-4 text-blue-500"/> Assessment Method
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{subject.assessmentMethod || "Observation and portfolio review"}</p>
              </div>
            </div>

            {(subject.inclusionAndDifferentiation || subject.extensionActivity || subject.supportActivity) && (
              <div className="md:col-span-2 grid sm:grid-cols-3 gap-4 pt-4 border-t border-indigo-100 dark:border-indigo-900/30">
                {subject.inclusionAndDifferentiation && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      <Users className="h-3.5 w-3.5 text-purple-500" /> Accessibility & Inclusion
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">{subject.inclusionAndDifferentiation}</p>
                  </div>
                )}
                {subject.supportActivity && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      <Info className="h-3.5 w-3.5 text-blue-500" /> Support (Scaffolding)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">{subject.supportActivity}</p>
                  </div>
                )}
                {subject.extensionActivity && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      <GraduationCap className="h-3.5 w-3.5 text-indigo-500" /> Extension (Advanced)
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">{subject.extensionActivity}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Phase 3: Telemetry / Feedback Loop */}
        <div className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
          <FeedbackModal subject={subject} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
