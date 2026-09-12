import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Layers, Users, Activity, 
  Sparkles, CheckCircle2, Compass, Target, Award, Calendar, ShieldCheck 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FEATURES } from '@/config/features';
import { stages, secondaryStage, homeHeroImage } from '@/data/curriculum';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

export function Home() {
  const stageList = Object.values(stages);

  const getStageColorStyles = (stageId: string) => {
    switch (stageId) {
      case 'foundational':
        return {
          border: 'hover:border-rose-300 dark:hover:border-rose-800',
          badge: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900/60',
          accent: 'text-rose-600 dark:text-rose-400',
          topBar: 'bg-rose-500',
        };
      case 'preparatory':
        return {
          border: 'hover:border-teal-300 dark:hover:border-teal-800',
          badge: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-900/60',
          accent: 'text-teal-600 dark:text-teal-400',
          topBar: 'bg-teal-500',
        };
      case 'middle':
        return {
          border: 'hover:border-indigo-300 dark:hover:border-indigo-800',
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-900/60',
          accent: 'text-indigo-600 dark:text-indigo-400',
          topBar: 'bg-indigo-500',
        };
      case 'secondary':
      default:
        return {
          border: 'hover:border-purple-300 dark:hover:border-purple-800',
          badge: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900/60',
          accent: 'text-purple-600 dark:text-purple-400',
          topBar: 'bg-purple-500',
        };
    }
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-transparent to-slate-50/60 dark:from-indigo-950/20 dark:via-transparent dark:to-slate-900/60 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              className="lg:col-span-7 text-left space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/50 text-xs font-bold text-indigo-700 dark:text-indigo-300">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>NCF 5+3+3+4 Pedagogical Framework · v0.3 Live</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                From Subjects to <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                A skill-centred view of school curriculum for teachers — with planning, assessment, and open resources.
              </p>

              {/* Status Notice Banner */}
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 p-4 rounded-xl text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                 <p className="font-medium">Currently aligned to CBSE/NCERT/NCF 2023, designed to work with any standard curriculum.</p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs transition-all hover:-translate-y-0.5 min-h-[48px] px-6 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden dark:focus:ring-offset-slate-950">
                  <Link to="/grades" className="flex items-center gap-2 font-bold">
                    <span>Explore by Grade</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all min-h-[48px] px-6 focus:ring-2 focus:ring-slate-500 focus:outline-hidden">
                  <Link to="/roadmap">View Content Roadmap</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-xl text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden">
                  <a href="#stages">Explore Stages ↓</a>
                </Button>
              </div>
            </motion.div>

            {/* Right Visual Column */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 group bg-slate-100 dark:bg-slate-950">
                <img 
                  src={homeHeroImage} 
                  alt="Subjects2Skills Pedagogical Framework Diagram" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-video sm:aspect-4/3 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                  <span className="font-bold uppercase tracking-wider text-[10px] text-indigo-300 block">
                    Curriculum Architecture
                  </span>
                  <p className="font-medium leading-snug">
                    Subjects organize knowledge · Skills organize capability
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* A Rhythm of Learning Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/40 inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Pedagogical Shift
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Rhythm of Learning
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                This framework <strong>does not remove subjects</strong>. Instead, it reorganizes curriculum planning around observable capability development.
              </p>
              <p>
                Subjects remain the essential knowledge base, while 21st-century skills become the developmental outcomes. As learners grow, pedagogical methods adapt to each age milestone.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.div variants={itemVariants} className="h-full">
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-indigo-300 transition-colors h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Knowledge Domain</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Subjects provide foundational concepts, vocabulary, context, and domain traditions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-emerald-300 transition-colors h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Skill Outcome</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Skills represent observable, transferable capabilities nurtured through inquiry and practice.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-amber-300 transition-colors h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Active Pedagogy</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Classroom methods evolve from sensory play and discovery to collaborative research and debate.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-blue-300 transition-colors h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Spiral Progression</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Competencies deepen across grades with calibrated difficulty and increasing student autonomy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stage Selection Section */}
      <section id="stages" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-4">
        <motion.div 
          className="text-center mb-10 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/40 inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Four Pedagogical Stages
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Select a Pedagogical Stage
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Aligned directly with India's National Curriculum Framework (NCF 5+3+3+4) developmental age bands.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {stageList.map((stage) => {
            const colors = getStageColorStyles(stage.id);

            return (
              <motion.div key={stage.id} variants={itemVariants} className="h-full">
                <Card className={`flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 ${colors.border} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group overflow-hidden h-full bg-white dark:bg-slate-900`}>
                  {stage.image && (
                    <div className="h-36 overflow-hidden border-b border-slate-100 dark:border-slate-800 relative">
                      <img src={stage.image} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                      <div className={`absolute top-0 left-0 right-0 h-1 ${colors.topBar}`}></div>
                    </div>
                  )}
                  <CardHeader className="p-5 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border ${colors.badge}`}>
                        {stage.ageGroup}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                        {stage.gradeBand}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {stage.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {stage.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="flex-1"></div>
                  <CardFooter className="p-5 pt-0">
                    <Button asChild className="w-full rounded-xl font-bold text-xs min-h-[44px] hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors" variant="outline">
                      <Link to={`/stage/${stage.id}`}>Explore {stage.title}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
          
          {/* Secondary Stage Expansion Card */}
          <motion.div variants={itemVariants} className="lg:col-span-4 md:col-span-2">
            <Card className="flex flex-col md:flex-row items-stretch rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-800 hover:shadow-md transition-all group overflow-hidden bg-white dark:bg-slate-900">
              {secondaryStage.image && (
                <div className="md:w-1/3 h-44 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 relative shrink-0">
                  <img src={secondaryStage.image} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-purple-600 hidden md:block"></div>
                </div>
              )}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-900/60">
                      Ages 14–18
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                      Grades 9–12 (Phase I & II)
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-extrabold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {secondaryStage.title}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    Deepening disciplinary depth, critical inquiry, specialized portfolios, and research-linked competencies spanning Phase I (Grades 9–10) and Phase II (Grades 11–12).
                  </p>
                </div>
                <div>
                  <Button asChild className="rounded-xl font-bold text-xs min-h-[44px] px-6" variant="outline">
                    <Link to="/stage/secondary" className="flex items-center gap-2">
                      <span>Enter Secondary Stage Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* How the Journey Works Section */}
      <section className="bg-slate-100/70 dark:bg-slate-900/40 py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-10">
          <motion.div 
            className="text-center space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/40 inline-flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Curriculum Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How the Journey Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              A clear, sequential process connecting policy vision with day-to-day classroom delivery.
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { num: '01', title: 'Select a Stage or Grade', desc: 'Choose a developmental age group or specific grade profile from Pre-school to Grade 12.', icon: Layers },
              { num: '02', title: 'Explore Core Skills', desc: 'Inspect 21 observable skills organized across foundational, preparatory, middle, and secondary bands.', icon: Target },
              { num: '03', title: 'See Subject Mapping', desc: 'Uncover how CBSE subjects like Mathematics, Science, and Social Science activate specific competencies.', icon: BookOpen },
              { num: '04', title: 'Run Classroom Activities', desc: 'Browse lesson-ready activities with age-appropriate inquiry questions, materials, and teacher instructions.', icon: Activity },
              { num: '05', title: 'Review Rubric Evidence', desc: 'Measure student growth with transparent 4-tier rubrics (Emerging → Developing → Proficient → Transfer).', icon: Award },
              { num: '06', title: 'Plan Integrated Units', desc: 'Synthesize multi-week units using modern lesson planning and assessment mapping tools (v0.4 prep).', icon: Calendar },
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div key={i} variants={itemVariants} className="h-full">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors h-full flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                        STEP {step.num}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Future Scope Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div 
          className="bg-indigo-600 dark:bg-indigo-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-500 dark:bg-indigo-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider inline-block">
              Roadmap & Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">The Future of the Framework</h2>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              We are continuously evolving to provide deeper subject mappings, unit planners, skill progression pathways, and interactive teacher tools.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 font-bold rounded-xl min-h-[44px] focus:ring-2 focus:ring-white focus:outline-hidden">
                <Link to="/roadmap">Explore Full Roadmap</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-indigo-300 text-white hover:bg-indigo-700/80 font-medium rounded-xl min-h-[44px] focus:ring-2 focus:ring-white focus:outline-hidden">
                <Link to="/about">About & Principles</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
