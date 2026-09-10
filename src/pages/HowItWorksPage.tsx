import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Map, Target, Layers, FileText, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: "Subjects → Skills",
      icon: <BookOpen className="w-6 h-6" />,
      description: "We map your subjects and textbook units to clear skills and competencies.",
      detail: (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Instead of just covering a textbook chapter, you see exactly what skills students are building. For example, "Fractions" becomes the skill of "Proportional Reasoning".
          </p>
          <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 px-3 py-1 rounded-full text-xs">Math Chapter 4</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs">Skill: Proportional Reasoning</span>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Skills → Plans & Assessments",
      icon: <Target className="w-6 h-6" />,
      description: "Turn those skills into unit plans, tasks, and rubrics you can use tomorrow.",
      detail: (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Our planner helps you design activities that explicitly target the skills. Then, the Assessment Mapper gives you 4-tier rubrics (from Emerging to Transfer) so you can accurately measure student growth.
          </p>
          <div className="flex items-start gap-3 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <FileCheck className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">Sample Task: Fraction Scavenger Hunt</p>
              <p className="text-xs text-slate-500 mt-1">Measures: Problem Solving • 45 minutes</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Skills → Resources",
      icon: <Layers className="w-6 h-6" />,
      description: "Connect each skill to open, verified resources — so you spend less time searching and more time teaching.",
      detail: (
        <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            For every subject and skill, find highly-curated, free resources like NCERT PDFs, DIKSHA modules, PhET simulations, and Khan Academy videos.
          </p>
          <div className="flex items-center gap-3 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <p className="font-semibold text-slate-700 dark:text-slate-300">Verified links, always aligned to the latest syllabus.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How It Works
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From Subjects to Skills — see how your subjects become classroom-ready skills, plans, and assessments.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all ${
                  activeStep === step.id 
                    ? 'bg-indigo-50 dark:bg-indigo-900/40 border-2 border-indigo-500 dark:border-indigo-400 text-indigo-700 dark:text-indigo-300' 
                    : 'bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className="mb-3">
                  {step.icon}
                </div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-xs opacity-80">{step.description}</p>
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {steps[activeStep].detail}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/grades" className="px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-center shadow-sm min-h-[44px]">
            Explore the Skill Map
          </Link>
          <Link to="/planner" className="px-6 py-3 rounded-xl font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-center shadow-sm min-h-[44px]">
            Try the Planner
          </Link>
          <Link to="/resources" className="px-6 py-3 rounded-xl font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-center shadow-sm min-h-[44px]">
            Browse Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
