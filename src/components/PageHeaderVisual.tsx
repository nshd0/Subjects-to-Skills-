import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, Target, Layout, PenTool, Link2, FileCheck, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { FEATURES } from '@/config/features';

type PageType = 'planner' | 'assessment' | 'resources';

interface PageHeaderVisualProps {
  type: PageType;
}

export function PageHeaderVisual({ type }: PageHeaderVisualProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!FEATURES.ENABLE_SKILL_VISUALS) {
    return null;
  }

  const getConfig = () => {
    switch (type) {
      case 'planner':
        return {
          title: "Unit & Lesson Planner",
          description: "Build skill-centered units that align directly to your curriculum. Start by selecting the skills, then map out the tasks and resources.",
          steps: [
            { icon: Target, label: "Select skills" },
            { icon: Layout, label: "Outline unit" },
            { icon: PenTool, label: "Add tasks" },
            { icon: Link2, label: "Link resources" }
          ]
        };
      case 'assessment':
        return {
          title: "Assessment Mapper",
          description: "Design meaningful assessments using a 4-tier rubric. Measure how well students are building the selected skills.",
          steps: [
            { icon: Target, label: "Select skills" },
            { icon: FileCheck, label: "Choose type" },
            { icon: PenTool, label: "Design tasks" },
            { icon: FileText, label: "Build rubric" }
          ]
        };
      case 'resources':
        return {
          title: "Teacher Resource Hub",
          description: "Find open, verified resources linked directly to each skill and grade level. Spend less time searching.",
          steps: [
            { icon: Target, label: "Select skill" },
            { icon: Layers, label: "Browse categories" },
            { icon: CheckCircle2, label: "Find verified links" }
          ]
        };
    }
  };

  const config = getConfig();

  return (
    <div className="mb-8 print:hidden">
      <div className="flex items-center gap-3 mb-3">
        {/* The Process Strip - always visible on desktop, or inside toggle? 
            Prompt C3 says: "Process-strip diagrams... Add a small, non-intrusive visual strip at the top of each tool".
            Prompt C4 says: "Contextual toggle... Expanded state: 1-2 sentence explanation + mini diagram (reuse process-strip)".
            Let's put the strip in the expanded state, or have a mini strip visible.
            Wait, C3 says "Process-strip diagrams on Planner and Assessment Mapper... at the top of each tool".
            Let's make a combined visual.
        */}
        {(type === 'planner' || type === 'assessment') && (
           <div className="hidden md:flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800">
             {config.steps.map((step, idx) => {
               const Icon = step.icon;
               return (
                 <React.Fragment key={idx}>
                   <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                     <Icon className="w-3.5 h-3.5" />
                     <span className="text-[11px] font-bold uppercase tracking-wider">{step.label}</span>
                   </div>
                   {idx < config.steps.length - 1 && (
                     <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700 mx-1" />
                   )}
                 </React.Fragment>
               );
             })}
           </div>
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-sm bg-indigo-50/50 hover:bg-indigo-50 dark:bg-indigo-950/30 dark:hover:bg-indigo-950/50 px-3 py-1.5 rounded-lg transition-colors border border-indigo-100/50 dark:border-indigo-900/50"
      >
        <HelpCircle className="w-4 h-4" />
        What is this page for?
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="overflow-hidden"
          >
            <div className="mt-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{config.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed max-w-2xl">
                {config.description}
              </p>
              
              {/* Process Strip in Expanded State for Mobile or detailed view */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60 inline-flex">
                {config.steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-xs">
                          <Icon className="w-4 h-4 text-indigo-500" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider">{step.label}</span>
                      </div>
                      {idx < config.steps.length - 1 && (
                        <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 dark:text-slate-700" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
