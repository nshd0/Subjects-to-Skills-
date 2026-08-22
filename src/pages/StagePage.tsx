import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Target, Activity, FileCheck, Lightbulb, ThumbsUp, ThumbsDown, Eye, Ear, Hand, HeartHandshake, Zap, Users, ExternalLink, GraduationCap, CheckCircle2 } from 'lucide-react';
import { stages, secondaryStage, InclusivePath, StageGuidance } from '@/data/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';
import { CompliancePanel } from '@/components/CompliancePanel';
import { SubjectMappingCard } from '@/components/SubjectMappingCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

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
          <div key={i} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <InclusivePathIcon icon={path.icon} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{path.learnerGroup}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{path.strategy}</p>
            
            {path.resources && path.resources.length > 0 && (
              <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Free & Open Source Tools</h4>
                <ul className="space-y-2.5">
                  {path.resources.map((res, idx) => (
                    <li key={idx}>
                      <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                        <ExternalLink className="h-4 w-4 shrink-0 mt-0.5 group-hover:text-indigo-700 dark:group-hover:text-indigo-300" />
                        <span className="leading-snug">
                          <strong className="font-medium text-slate-800 dark:text-slate-200">{res.name}</strong>
                          <span className="text-slate-500 dark:text-slate-400"> — {res.description}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function StageGuidanceSection({ guidance }: { guidance?: StageGuidance }) {
  if (!guidance) return null;

  return (
    <section className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          Assessment & Activity Guidance
        </h2>
        <p className="text-slate-600 dark:text-slate-400">Teacher facilitation tips and structured evaluation rubrics for this stage.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Activity Tips */}
        <div className="lg:col-span-1 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl p-6 border border-indigo-100 dark:border-indigo-900/50 h-fit">
          <h3 className="font-semibold text-lg mb-4 text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Facilitation Tips
          </h3>
          <ul className="space-y-3">
            {guidance.activityTips.map((tip, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-500 mt-0.5" />
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rubrics */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <FileCheck className="h-5 w-5 text-slate-500" />
            Core Competency Rubrics
          </h3>
          <div className="space-y-4">
            {guidance.rubrics.map((rubric, idx) => (
              <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white dark:bg-slate-900">
                <div className="bg-slate-50 dark:bg-slate-800/50 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">{rubric.criteria}</h4>
                </div>
                <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 text-xs font-medium rounded mb-2">Emerging</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{rubric.emerging}</p>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-medium rounded mb-2">Proficient</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{rubric.proficient}</p>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium rounded mb-2">Advanced</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{rubric.advanced}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
          <motion.nav 
            className="flex items-center text-sm text-slate-500 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-slate-900 dark:text-slate-100 font-medium">{stage.title}</span>
          </motion.nav>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">{stage.ageGroup}</Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">{stage.gradeBand}</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{stage.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {stage.intro}
              </p>
            </motion.div>
            {stage.image && (
              <motion.div 
                className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                 <img 
                  src={stage.image} 
                  alt={`${stage.title} illustration`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </motion.div>
            )}
          </div>
          
          {stage.compliance && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CompliancePanel compliance={stage.compliance} />
            </motion.div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-12 space-y-16">
        
        {/* Focus & Pedagogy */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full transition-shadow hover:shadow-md">
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
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="h-full transition-shadow hover:shadow-md">
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
          </motion.div>
        </motion.div>

        {/* Interdisciplinary Project */}
        {stage.project && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/50 transition-colors hover:border-indigo-200 dark:hover:border-indigo-800">
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
          </motion.section>
        )}

        {/* Inclusive Paths */}
        <InclusivePathsSection paths={stage.inclusivePaths} />

        {/* Stage Guidance & Assessment */}
        <StageGuidanceSection guidance={stage.guidance} />

        {/* Subject Mapping */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Curriculum Mapping</h2>
            <p className="text-slate-600 dark:text-slate-400">Explore how knowledge domains translate into competencies, skills and classroom activities.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {stage.subjects.map((subject, index) => (
              <SubjectMappingCard key={index} subject={subject} index={index} />
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
          <motion.nav 
            className="flex items-center text-sm text-slate-500 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-slate-900 dark:text-slate-100 font-medium">{stage.title}</span>
          </motion.nav>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">{stage.ageGroup}</Badge>
                <Badge variant="outline" className="text-sm px-3 py-1">{stage.gradeBand}</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{stage.title}</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {stage.intro}
              </p>
            </motion.div>
            {stage.image && (
              <motion.div 
                className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                 <img 
                  src={stage.image} 
                  alt={`${stage.title} illustration`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-4/3"
                />
              </motion.div>
            )}
          </div>
          
          {stage.compliance && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CompliancePanel compliance={stage.compliance} />
            </motion.div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-12 space-y-16">
        
        {/* Focus & Pedagogy */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full transition-shadow hover:shadow-md">
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
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="h-full transition-shadow hover:shadow-md">
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
          </motion.div>
        </motion.div>

        {/* Interdisciplinary Project */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/50 transition-colors hover:border-indigo-200 dark:hover:border-indigo-800">
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
        </motion.section>

        {/* Inclusive Paths */}
        <InclusivePathsSection paths={stage.inclusivePaths} />

        {/* Stage Guidance & Assessment */}
        <StageGuidanceSection guidance={stage.guidance} />

        {/* Pathways */}
        {stage.pathways && (
          <section className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Subject Pathways (Choice Architecture)</h2>
              <p className="text-slate-600 dark:text-slate-400">Example multidisciplinary combinations recommended by NCF-SE for holistic specialization.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stage.pathways.map((pathway: any, i: number) => (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">{pathway.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{pathway.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pathway.subjects.map((sub: string, j: number) => (
                      <Badge key={j} variant="secondary" className="bg-slate-100 dark:bg-slate-800">{sub}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Phase I */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">{stage.phase1.title}</h2>
            <p className="text-slate-600 dark:text-slate-400">Subject mapping for early secondary years.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {stage.phase1.subjects.map((subject: any, index: number) => (
              <SubjectMappingCard key={`p1-${index}`} subject={subject} index={index} />
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
            {stage.phase2.subjects.map((subject: any, index: number) => (
              <SubjectMappingCard key={`p2-${index}`} subject={subject} index={index} />
            ))}
          </Accordion>
        </section>
        
        <FeedbackLoop context={stage.title} />
      </div>
    </div>
  );
}
