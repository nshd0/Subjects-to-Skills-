import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Target, Activity, FileCheck, Lightbulb, ThumbsUp, ThumbsDown, Eye, Ear, Hand, HeartHandshake, Zap, Users } from 'lucide-react';
import { stages, secondaryStage, InclusivePath } from '@/data/curriculum';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';

function InclusivePathIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'visual': return <Eye className="h-5 w-5 text-blue-500" />;
    case 'auditory': return <Ear className="h-5 w-5 text-amber-500" />;
    case 'kinesthetic': return <Hand className="h-5 w-5 text-emerald-500" />;
    case 'support': return <HeartHandshake className="h-5 w-5 text-rose-500" />;
    case 'advanced': return <Zap className="h-5 w-5 text-indigo-500" />;
    default: return <Users className="h-5 w-5 text-slate-500" />;
  }
}

function InclusivePathsSection({ paths }: { paths?: InclusivePath[] }) {
  if (!paths || paths.length === 0) return null;
  
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Inclusive Learning Paths</h2>
        <p className="text-slate-600 dark:text-slate-400">Differentiated strategies ensuring the curriculum adapts to all learner types.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {paths.map((path, i) => (
          <div key={i} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <InclusivePathIcon icon={path.icon} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{path.learnerGroup}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{path.strategy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeedbackLoop({ context }: { context: string }) {
  const [feedback, setFeedback] = React.useState<'up' | 'down' | null>(null);

  if (feedback) {
    return <div className="text-sm text-emerald-600 dark:text-emerald-400 mt-4 flex items-center gap-2"><FileCheck className="h-4 w-4"/> Thank you for your feedback!</div>
  }

  return (
    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <span className="text-sm text-slate-600 dark:text-slate-400">Is this curriculum section relevant and helpful?</span>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => setFeedback('up')}><ThumbsUp className="h-4 w-4 mr-2"/> Yes</Button>
        <Button variant="outline" size="sm" onClick={() => setFeedback('down')}><ThumbsDown className="h-4 w-4 mr-2"/> No</Button>
      </div>
    </div>
  )
}

export function StagePage() {
  const { stageId } = useParams<{ stageId: string }>();
  
  if (stageId === 'secondary') {
    return <SecondaryStagePage />;
  }

  const stage = stages[stageId || ''];

  if (!stage) {
    return <div className="container mx-auto p-8 text-center">Stage not found.</div>;
  }

  return (
    <div className="pb-16">
      {/* Breadcrumbs & Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-8 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <nav className="flex items-center text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-slate-900 dark:text-slate-100 font-medium">{stage.title}</span>
          </nav>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">{stage.ageGroup}</Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">{stage.gradeBand}</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{stage.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {stage.intro}
              </p>
            </div>
            {stage.image && (
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                 <img 
                  src={stage.image} 
                  alt={`${stage.title} illustration`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-12 space-y-16">
        
        {/* Focus & Pedagogy */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-indigo-500"/> Developmental Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2">
                {stage.focus.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Activity className="h-5 w-5 text-emerald-500"/> Pedagogy Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2">
                {stage.pedagogy.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interdisciplinary Project */}
        {stage.project && (
          <section>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Sample Interdisciplinary Project</h2>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">{stage.project.title}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {stage.project.details.map((detail, i) => (
                  <li key={i} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-indigo-500 mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Inclusive Paths */}
        <InclusivePathsSection paths={stage.inclusivePaths} />

        {/* Subject Mapping */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Existing CBSE Subjects Mapped</h2>
            <p className="text-slate-600 dark:text-slate-400">Explore how knowledge domains translate into skills and classroom activities.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {stage.subjects.map((subject, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-6 bg-white dark:bg-slate-900 shadow-sm">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-lg font-semibold text-left">{subject.name}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Core Skills</h4>
                      <p className="text-slate-700 dark:text-slate-300">{subject.skills}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Pedagogical Mode</h4>
                      <p className="text-slate-700 dark:text-slate-300">{subject.pedagogy}</p>
                    </div>
                    <div className="md:col-span-2 p-4 bg-slate-50 dark:bg-slate-950/50 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                           <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <Activity className="h-4 w-4 text-emerald-500"/> Example Activity
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300">{subject.activities}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <FileCheck className="h-4 w-4 text-amber-500"/> Assessment Evidence
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300">{subject.evidence}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
        <FeedbackLoop context={stage.title} />
      </div>
    </div>
  );
}

function SecondaryStagePage() {
  const stage = secondaryStage;

  return (
    <div className="pb-16">
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-8 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <nav className="flex items-center text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-slate-900 dark:text-slate-100 font-medium">{stage.title}</span>
          </nav>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">{stage.ageGroup}</Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">{stage.gradeBand}</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{stage.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {stage.intro}
              </p>
            </div>
            {stage.image && (
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                 <img 
                  src={stage.image} 
                  alt={`${stage.title} illustration`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-12 space-y-16">
        
        {/* Focus & Pedagogy */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-indigo-500"/> Developmental Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2">
                {stage.focus.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Activity className="h-5 w-5 text-emerald-500"/> Pedagogy Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2">
                {stage.pedagogy.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interdisciplinary Project */}
        <section>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Lightbulb className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sample Interdisciplinary Project</h2>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">{stage.project.title}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {stage.project.details.map((detail, i) => (
                <li key={i} className="text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Inclusive Paths */}
        <InclusivePathsSection paths={stage.inclusivePaths} />

        {/* Phase I */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">{stage.phase1.title}</h2>
            <p className="text-slate-600 dark:text-slate-400">Subject mapping for early secondary years.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {stage.phase1.subjects.map((subject, index) => (
              <AccordionItem key={`p1-${index}`} value={`p1-${index}`} className="border rounded-xl px-6 bg-white dark:bg-slate-900 shadow-sm">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-lg font-semibold text-left">{subject.name}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Core Skills</h4>
                      <p className="text-slate-700 dark:text-slate-300">{subject.skills}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Pedagogical Mode</h4>
                      <p className="text-slate-700 dark:text-slate-300">{subject.pedagogy}</p>
                    </div>
                    <div className="md:col-span-2 p-4 bg-slate-50 dark:bg-slate-950/50 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                           <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <Activity className="h-4 w-4 text-emerald-500"/> Example Activity
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300">{subject.activities}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <FileCheck className="h-4 w-4 text-amber-500"/> Assessment Evidence
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300">{subject.evidence}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Phase II */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">{stage.phase2.title}</h2>
            <p className="text-slate-600 dark:text-slate-400">Subject mapping for senior secondary specialization.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {stage.phase2.subjects.map((subject, index) => (
              <AccordionItem key={`p2-${index}`} value={`p2-${index}`} className="border rounded-xl px-6 bg-white dark:bg-slate-900 shadow-sm">
                <AccordionTrigger className="hover:no-underline py-6">
                  <span className="text-lg font-semibold text-left">{subject.name}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Core Skills</h4>
                      <p className="text-slate-700 dark:text-slate-300">{subject.skills}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">Pedagogical Mode</h4>
                      <p className="text-slate-700 dark:text-slate-300">{subject.pedagogy}</p>
                    </div>
                    <div className="md:col-span-2 p-4 bg-slate-50 dark:bg-slate-950/50 rounded-lg border border-slate-100 dark:border-slate-800">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                           <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <Activity className="h-4 w-4 text-emerald-500"/> Example Activity
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300">{subject.activities}</p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <FileCheck className="h-4 w-4 text-amber-500"/> Assessment Evidence
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300">{subject.evidence}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
        <FeedbackLoop context={stage.title} />
      </div>
    </div>
  );
}
