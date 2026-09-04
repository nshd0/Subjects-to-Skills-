import React, { useState } from 'react';
import { SubjectMappingDoc } from '@/data/models';
import { AccordionContent, AccordionItem, AccordionTrigger, Accordion, AccordionItem as AccItemBase } from '@/components/ui/Accordion';
import { Target, Lightbulb, FileCheck, Info, HeartHandshake, Map, Clock, BadgeCheck, BookOpen, Users, HelpCircle, GraduationCap, ChevronDown, CheckCircle2, Link as LinkIcon, AlertCircle, Library, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { FeedbackModal } from './FeedbackModal';

export function SubjectMappingCard({ subject, index }: { subject: any; index: number; key?: any }) {
  // Graceful fallback for age range and phase
  const getStageMeta = (stage: string) => {
    switch (stage) {
      case 'Foundational': return { phase: 'Grades 1-2', age: 'Ages 3-8' };
      case 'Preparatory': return { phase: 'Grades 3-5', age: 'Ages 8-11' };
      case 'Middle': return { phase: 'Grades 6-8', age: 'Ages 11-14' };
      case 'Secondary': return { phase: 'Grades 9-12', age: 'Ages 14-18' };
      default: return { phase: '', age: '' };
    }
  };

  const stageMeta = getStageMeta(subject.stage);
  
  // Format official reference label
  const isOfficial = subject.isOfficial;
  const hasIncompleteFields = !subject.stage || !subject.grade || !subject.subject || !subject.competency || !subject.learningOutcome || !subject.essentialKnowledge || !(subject.observablePerformance || subject.learningOutcome) || !(subject.activityStructured || subject.activities) || !(subject.evidenceStructured || subject.evidence) || !(subject.assessmentStructured || subject.assessmentMethod) || !(subject.inclusionStructured || subject.inclusionAndDifferentiation);

  return (
    <AccordionItem value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden group">
      <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-4 text-left gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                {subject.stage} Stage {stageMeta.age ? `(${stageMeta.age})` : ''}
              </Badge>
              <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                {subject.grade}
              </Badge>
              <Badge variant="outline" className="text-slate-600 dark:text-slate-400">
                {subject.ncfCurricularArea}
              </Badge>
              {isOfficial && (
                <Badge variant="default" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 flex gap-1 items-center">
                  <BadgeCheck className="h-3 w-3" /> Official Reference Linked
                </Badge>
              )}
              {hasIncompleteFields && (
                <Badge variant="destructive" className="flex gap-1 items-center">
                  <AlertCircle className="h-3 w-3" /> Incomplete Mapping
                </Badge>
              )}
            </div>
            
            {/* V0.3 Progressive View Headers */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {subject.observablePerformance || subject.learningOutcome}
            </h3>
            
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-slate-500">
              <span className="flex items-center gap-1.5 font-medium"><BookOpen className="h-4 w-4" /> {subject.subject}</span>
              {subject.primarySkillDomain && <span className="flex items-center gap-1.5"><Target className="h-4 w-4" /> {subject.primarySkillDomain}</span>}
            </div>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
        
        {/* NEW V0.3 STANDARDS ALIGNMENT PANEL */}
        <div className="mb-8">
          <Accordion type="single" collapsible className="w-full border rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20">
            <AccItemBase value="standards" className="border-0">
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-t-lg">
                <span className="flex items-center gap-2 font-semibold text-sm">
                  <BadgeCheck className="h-4 w-4 text-emerald-600" /> Standards Alignment
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Official Source</span>
                    <div className="flex items-center gap-2 mt-1">
                      {subject.officialReference ? (
                        <>
                          <span className="font-medium">{subject.officialReference[0]?.sourceType || 'NCF-SE 2023'}</span>
                          <a href={subject.officialReference[0]?.url || '#'} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline flex items-center gap-1"><LinkIcon className="h-3 w-3"/></a>
                        </>
                      ) : (
                        <span className="text-slate-600 italic">Official reference link pending verification. This is a Subjects2Skills working interpretation.</span>
                      )}
                    </div></div>
                    
                    <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Pedagogical Stage & Age</span><span className="font-medium">{subject.stage} ({stageMeta.age})</span></div>
                    <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Grade</span><span className="font-medium">{subject.grade}</span></div>
                    <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Curricular Area & Subject</span><span className="font-medium">{subject.ncfCurricularArea} &gt; {subject.subject}</span></div>
                    {subject.unitOrTheme && <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Unit / Theme</span><span className="font-medium">{subject.unitOrTheme}</span></div>}
                  </div>
                  
                  <div className="space-y-3 border-l-0 md:border-l border-slate-200 dark:border-slate-700 pl-0 md:pl-4 mt-4 md:mt-0 pt-4 md:pt-0">
                    <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Curricular Goal</span><span className="font-medium text-slate-800 dark:text-slate-200">{subject.curricularGoal}</span></div>
                    <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Competency</span><span className="font-medium text-indigo-700 dark:text-indigo-300">{subject.competency}</span></div>
                    <div><span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider">Learning Outcome</span><span className="font-medium text-emerald-700 dark:text-emerald-300">{subject.learningOutcome}</span></div>
                  </div>
                </div>
              </AccordionContent>
            </AccItemBase>
          </Accordion>
        </div>

        {/* PROGRESSIVE CARD DETAILS */}
        <div className="grid md:grid-cols-12 gap-8">
          
          <div className="md:col-span-8 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> Essential Knowledge
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{subject.essentialKnowledge}</p>
            </div>
            
            <div className="bg-indigo-50/50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
              <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Target className="h-4 w-4" /> Observable Performance
              </h4>
              <p className="text-indigo-900 dark:text-indigo-100 text-base font-medium leading-relaxed">
                {subject.observablePerformance || subject.learningOutcome}
              </p>
              
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {subject.primarySkillDomain && <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded font-semibold">{subject.primarySkillDomain}</span>}
                {subject.supportingSkillDomains?.map((skill: string) => (
                  <span key={skill} className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded">{skill}</span>
                ))}
                {!subject.primarySkillDomain && <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded font-semibold">{subject.skills}</span>}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" /> Classroom Activity & Pedagogy
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                <strong>Pedagogy:</strong> {subject.pedagogyStructured?.approaches?.join(', ') || subject.pedagogy}
              </p>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                <h5 className="font-bold text-slate-900 dark:text-white mb-2">{subject.activityStructured?.title || 'Learning Activity'}</h5>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{subject.activityStructured?.description || subject.activities}</p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {subject.activityStructured?.duration || subject.timeAndResources || 'Standard duration'}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {subject.activityStructured?.groupSize || subject.groupSize || 'Flexible'}</span>
                </div>
              </div>
            </div>
            
            {/* EMBEDDED INCLUSION (V0.3 MANDATE) */}
            <div className="bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 p-4 rounded-lg">
              <h4 className="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <HeartHandshake className="h-4 w-4" /> Inclusive Learning Design
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-slate-900 dark:text-slate-100 block mb-1">Access</strong>
                  <p className="text-slate-600 dark:text-slate-400">{subject.inclusionStructured?.accessOptions?.join(', ') || subject.inclusionAndDifferentiation || 'Visual instructions, oral explanation, demonstration.'}</p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-slate-100 block mb-1">Expression</strong>
                  <p className="text-slate-600 dark:text-slate-400">{subject.inclusionStructured?.expressionOptions?.join(', ') || 'Written response, oral explanation, model.'}</p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-slate-100 block mb-1">Support</strong>
                  <p className="text-slate-600 dark:text-slate-400">{subject.inclusionStructured?.supportStrategies?.join(', ') || subject.supportActivity || 'Sentence starters, checklist, peer support.'}</p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-slate-100 block mb-1">Extension</strong>
                  <p className="text-slate-600 dark:text-slate-400">{subject.inclusionStructured?.extensionStrategies?.join(', ') || subject.extensionActivity || 'Open-ended challenge, deeper research.'}</p>
                </div>
              </div>
            </div>

          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 p-4 rounded-lg">
              <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <FileCheck className="h-4 w-4" /> Student Evidence
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                {subject.evidenceStructured?.studentOutputs?.join(', ') || subject.evidence}
              </p>
              
              <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2 border-t border-emerald-100 dark:border-emerald-800 pt-3">
                <CheckCircle2 className="h-4 w-4" /> Assessment Criteria
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {subject.assessmentStructured?.criteria?.join(', ') || subject.assessmentMethod}
              </p>
            </div>
            
            {(subject.valuesAndDispositions || subject.localIndianContext) && (
              <div className="space-y-4">
                {subject.valuesAndDispositions && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1 uppercase tracking-wider text-slate-500">
                      Values & Dispositions
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{subject.valuesAndDispositions}</p>
                  </div>
                )}
                {subject.localIndianContext && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1 uppercase tracking-wider text-slate-500">
                      Local Context
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{subject.localIndianContext}</p>
                  </div>
                )}
              </div>
            )}
            
            
            {/* RESOURCES FOR TEACHERS */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-4">
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Library className="h-5 w-5 text-indigo-500" /> Resources for Teachers
                  </h4>
                  <a href="/resources" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium">
                    View Full Resource Hub <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Teaching Strategy</strong>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Integrate {subject.skills} into {subject.subject} by focusing on {subject.observablePerformance || subject.learningOutcome}.</p>
                    
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Materials Needed</strong>
                    <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400">
                      <li>Standard stationery</li>
                      <li>Observation rubrics</li>
                      {subject.subject === 'Science' || subject.subject === 'Mathematics' ? <li>Physical manipulatives or lab equipment</li> : <li>Source texts</li>}
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Open/Free Tools</strong>
                    <ul className="space-y-2 mb-4">
                      {subject.subject === 'Science' || subject.subject === 'Mathematics' ? (
                        <li className="flex items-start gap-2">
                          <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400"><strong>PhET Interactive Simulations</strong></span>
                        </li>
                      ) : null}
                      <li className="flex items-start gap-2">
                        <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-400"><strong>DIKSHA</strong></span>
                      </li>
                    </ul>
                    
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Official References</strong>
                    <ul className="space-y-2">
                      {subject.officialReference?.map((ref: any, idx: number) => (
                        <li key={idx}>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                            {ref.title} ({ref.sourceType})
                          </a>
                        </li>
                      )) || <li className="text-slate-500 italic">No specific external reference linked.</li>}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Telemetry / Feedback Loop */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
              <FeedbackModal subject={subject} />
            </div>
          </div>
          
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
