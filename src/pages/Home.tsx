import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers, Users, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { stages, secondaryStage, homeHeroImage } from '@/data/curriculum';

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

export function Home() {
  const stageList = Object.values(stages);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-left max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Badge className="mb-6" variant="secondary">Subjects2Skills v0.2 — Preparing for v0.3</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                From Subjects to <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                An evolving public framework connecting subject knowledge, skills, pedagogy, classroom activities, assessment evidence and teacher-ready resources.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-4 rounded-lg mb-10 text-amber-800 dark:text-amber-300 text-sm">
                <span className="font-semibold block mb-1">Status Update:</span>
                Subjects2Skills is currently expanding into grade-wise curriculum maps. Some grades and resources are still in development and will be reviewed before public publication.
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
                  <Link to="/grades">Explore by Grade <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto transition-transform hover:scale-105">
                  <a href="#stages">Explore by Stage</a>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={homeHeroImage} 
                alt="Educational Journey Illustration" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">A Rhythm of Learning</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <p>
                This framework <strong>does not remove subjects</strong>. Instead, it reorganises curriculum planning around skill development.
              </p>
              <p>
                Subjects remain the essential knowledge base, while skills become the developmental outcomes. As a learner grows, the pedagogy adapts to their age and stage, creating a natural flow from play-based discovery to analytical research.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none h-full transition-colors hover:bg-slate-100 dark:hover:bg-slate-900">
                <CardHeader className="p-4"><BookOpen className="h-8 w-8 text-indigo-500 mb-2"/><CardTitle className="text-lg">Knowledge Domain</CardTitle></CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-slate-500">Subjects provide the context.</CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none h-full transition-colors hover:bg-slate-100 dark:hover:bg-slate-900">
                <CardHeader className="p-4"><Activity className="h-8 w-8 text-emerald-500 mb-2"/><CardTitle className="text-lg">Skill Outcome</CardTitle></CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-slate-500">Skills are the visible result.</CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none h-full transition-colors hover:bg-slate-100 dark:hover:bg-slate-900">
                <CardHeader className="p-4"><Users className="h-8 w-8 text-amber-500 mb-2"/><CardTitle className="text-lg">Pedagogy</CardTitle></CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-slate-500">Methods adapt to the age.</CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
              <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none h-full transition-colors hover:bg-slate-100 dark:hover:bg-slate-900">
                <CardHeader className="p-4"><Layers className="h-8 w-8 text-blue-500 mb-2"/><CardTitle className="text-lg">Progression</CardTitle></CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-slate-500">Complexity builds over time.</CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stage Selection Section */}
      <section id="stages" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Select a Pedagogical Stage</h2>
          <p className="text-slate-600 dark:text-slate-400">Navigate the curriculum mapped to developmental age groups.</p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stageList.map((stage) => (
            <motion.div key={stage.id} variants={itemVariants} className="h-full">
              <Card className="flex flex-col hover:border-indigo-500 hover:shadow-xl transition-all duration-300 group overflow-hidden h-full">
                {stage.image && (
                  <div className="h-32 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    <img src={stage.image} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  </div>
                )}
                <CardHeader>
                  <div className="mb-2 flex flex-col xl:flex-row xl:justify-between items-start gap-2">
                    <Badge variant="outline">{stage.ageGroup}</Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800">{stage.gradeBand}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{stage.title}</CardTitle>
                  <CardDescription className="pt-2">{stage.description}</CardDescription>
                </CardHeader>
                <div className="flex-1"></div>
                <CardFooter>
                  <Button asChild className="w-full transition-transform group-hover:scale-[1.02]" variant="outline">
                    <Link to={`/stage/${stage.id}`}>Enter Stage</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className="lg:col-span-4 md:col-span-2">
            <Card className="flex flex-col hover:border-indigo-500 hover:shadow-xl transition-all duration-300 group overflow-hidden">
              {secondaryStage.image && (
                  <div className="h-32 md:h-48 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                    <img src={secondaryStage.image} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                  </div>
              )}
              <CardHeader>
                 <div className="mb-2 flex justify-between items-start w-fit gap-3">
                    <Badge variant="outline">Ages 14–18</Badge>
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800">Grades 9–12</Badge>
                  </div>
                <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{secondaryStage.title}</CardTitle>
                <CardDescription className="pt-2">Deepening disciplinary knowledge, analysis, and specialization across Phase I (9-10) and Phase II (11-12).</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full md:w-auto transition-transform group-hover:scale-[1.02]" variant="outline">
                  <Link to={`/stage/secondary`}>Enter Secondary Stage</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.h2 
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How the Journey Works
          </motion.h2>
          <motion.div 
            className="grid sm:grid-cols-3 md:grid-cols-6 gap-4 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {['Select a stage', 'Explore key skills', 'See subject mapping', 'View activities', 'Review evidence', 'Use planning tools'].map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold mb-3 shadow-sm">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{step}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Scope Banner */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pt-16">
        <motion.div 
          className="bg-indigo-600 dark:bg-indigo-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-500 dark:bg-indigo-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">The Future of the Framework</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              We are continuously evolving to provide deeper subject mappings, integrated AI agents, and interactive educator tools. See where the framework is heading next.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 transition-transform hover:scale-105">
              <Link to="/about">Read the Roadmap</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
