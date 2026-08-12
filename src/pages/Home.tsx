import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers, Users, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { stages, secondaryStage, homeHeroImage } from '@/data/curriculum';

export function Home() {
  const stageList = Object.values(stages);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left max-w-2xl">
              <Badge className="mb-6" variant="secondary">Public Educational Framework</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                From Subjects to <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                A public framework showing how existing CBSE subjects can be mapped through pedagogy stages into a skill-centred curriculum model.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#stages">Explore by Stage <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to="/skill-progression">View Skill Progression</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img 
                src={homeHeroImage} 
                alt="Educational Journey Illustration" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">A Rhythm of Learning</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <p>
                This framework <strong>does not remove subjects</strong>. Instead, it reorganises curriculum planning around skill development.
              </p>
              <p>
                Subjects remain the essential knowledge base, while skills become the developmental outcomes. As a learner grows, the pedagogy adapts to their age and stage, creating a natural flow from play-based discovery to analytical research.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none">
              <CardHeader className="p-4"><BookOpen className="h-8 w-8 text-indigo-500 mb-2"/><CardTitle className="text-lg">Knowledge Domain</CardTitle></CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-slate-500">Subjects provide the context.</CardContent>
            </Card>
            <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none">
              <CardHeader className="p-4"><Activity className="h-8 w-8 text-emerald-500 mb-2"/><CardTitle className="text-lg">Skill Outcome</CardTitle></CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-slate-500">Skills are the visible result.</CardContent>
            </Card>
            <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none">
              <CardHeader className="p-4"><Users className="h-8 w-8 text-amber-500 mb-2"/><CardTitle className="text-lg">Pedagogy</CardTitle></CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-slate-500">Methods adapt to the age.</CardContent>
            </Card>
            <Card className="bg-slate-50 dark:bg-slate-950/50 shadow-none border-none">
              <CardHeader className="p-4"><Layers className="h-8 w-8 text-blue-500 mb-2"/><CardTitle className="text-lg">Progression</CardTitle></CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-slate-500">Complexity builds over time.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stage Selection Section */}
      <section id="stages" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Select a Pedagogical Stage</h2>
          <p className="text-slate-600 dark:text-slate-400">Navigate the curriculum mapped to developmental age groups.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stageList.map((stage) => (
            <Card key={stage.id} className="flex flex-col hover:border-indigo-500 hover:shadow-md transition-all group overflow-hidden">
              {stage.image && (
                <div className="h-32 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  <img src={stage.image} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <Button asChild className="w-full" variant="outline">
                  <Link to={`/stage/${stage.id}`}>Enter Stage</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          <Card className="flex flex-col hover:border-indigo-500 hover:shadow-md transition-all group lg:col-span-4 md:col-span-2 overflow-hidden">
            {secondaryStage.image && (
                <div className="h-32 md:h-48 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                  <img src={secondaryStage.image} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
            )}
            <CardHeader>
               <div className="mb-2 flex justify-between items-start w-fit gap-3">
                  <Badge variant="outline">Ages 14–18</Badge>
                  <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800">Grades 9–12</Badge>
                </div>
              <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Secondary Stage</CardTitle>
              <CardDescription className="pt-2">Deepening disciplinary knowledge, analysis, and specialization across Phase I (9-10) and Phase II (11-12).</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full md:w-auto" variant="outline">
                <Link to={`/stage/secondary`}>Enter Secondary Stage</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">How the Journey Works</h2>
          <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {['Select a stage', 'Explore key skills', 'See subject mapping', 'View activities', 'Review evidence', 'Use planning tools'].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
