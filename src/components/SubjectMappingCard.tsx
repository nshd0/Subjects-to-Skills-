import React from 'react';
import { SubjectMapping } from '@/data/curriculum';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Target, Lightbulb, FileCheck, Info, HeartHandshake, Map, Clock, BadgeCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function SubjectMappingCard({ subject, index }: { subject: SubjectMapping, index: number }) {
  return (
    <AccordionItem value={`item-${index}`} className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 shadow-sm overflow-hidden mb-4">
      <AccordionTrigger className="hover:no-underline py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-4 gap-2 text-left">
          <span className="text-lg font-semibold">{subject.name}</span>
          {subject.sourceLabel && (
            <Badge variant="outline" className="w-fit text-xs text-indigo-600 border-indigo-200 dark:text-indigo-400 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/30">
              {subject.sourceLabel}
            </Badge>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
        
        {/* NCF-SE Standard Hierarchy */}
        {(subject.essentialKnowledge || subject.curricularGoal || subject.competency || subject.learningOutcome) && (
          <div className="bg-slate-50 dark:bg-slate-950/50 rounded-lg p-5 border border-slate-200 dark:border-slate-800 mb-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BadgeCheck className="h-4 w-4" /> Official Learning Standard Hierarchy
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {subject.essentialKnowledge && (
                <div>
                  <span className="text-xs font-semibold text-slate-500 block mb-1">Essential Knowledge</span>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{subject.essentialKnowledge}</p>
                </div>
              )}
              {subject.curricularGoal && (
                <div>
                  <span className="text-xs font-semibold text-slate-500 block mb-1">Curricular Goal</span>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{subject.curricularGoal}</p>
                </div>
              )}
              {subject.competency && (
                <div className="sm:col-span-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-1">Competency</span>
                  <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-300">{subject.competency}</p>
                </div>
              )}
              {subject.learningOutcome && (
                <div className="sm:col-span-2">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">Grade-Specific Learning Outcome</span>
                  <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-300">{subject.learningOutcome}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Existing & Enriched Data Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
              <Target className="h-4 w-4 text-indigo-500" /> Transferable Skills
            </h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{subject.skills}</p>
          </div>
          
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
              <Lightbulb className="h-4 w-4 text-amber-500" /> Pedagogy & Activities
            </h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed"><span className="font-medium text-slate-800 dark:text-slate-200">Mode:</span> {subject.pedagogy}</p>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mt-1"><span className="font-medium text-slate-800 dark:text-slate-200">Action:</span> {subject.activities}</p>
          </div>

          <div className="md:col-span-2 p-4 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
            <div className="grid md:grid-cols-2 gap-6">
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
          </div>

          {/* New Audit Requested Fields */}
          {(subject.valuesAndDispositions || subject.inclusionAndDifferentiation || subject.localIndianContext || subject.timeAndResources) && (
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
              {subject.inclusionAndDifferentiation && (
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    <Users className="h-4 w-4 text-purple-500" /> Inclusion & Differentiation
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{subject.inclusionAndDifferentiation}</p>
                </div>
              )}
              {subject.timeAndResources && (
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    <Clock className="h-4 w-4 text-slate-500" /> Time & Resources
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{subject.timeAndResources}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
