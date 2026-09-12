import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FEATURES } from '@/config/features';

interface TourStep {
  targetIds: string[] | null;
  title: string;
  content: string;
}

const steps: TourStep[] = [
  {
    targetIds: ['tour-step-map-desktop', 'tour-step-map-compact', 'tour-step-map-mobile'],
    title: 'The Skill Map',
    content: 'See how skills grow across grades, so you know what to build on and where you’re heading.',
  },
  {
    targetIds: ['tour-step-planner-desktop', 'tour-step-planner-compact', 'tour-step-planner-mobile'],
    title: 'Plan with Purpose',
    content: 'Plan units directly from skills, aligned to your curriculum — no more starting from scratch.',
  },
  {
    targetIds: ['tour-step-assess-desktop', 'tour-step-assess-compact', 'tour-step-assess-mobile'],
    title: 'Assess Meaningfully',
    content: 'Design tasks and rubrics that match each skill, so assessment feels connected to what you teach.',
  },
  {
    targetIds: ['tour-step-resources-desktop', 'tour-step-resources-compact', 'tour-step-resources-mobile'],
    title: 'Ready-to-Use Resources',
    content: 'Find open, verified resources linked to each skill — ready to use with your class.',
  },
  {
    targetIds: null,
    title: 'You’re all set!',
    content: 'Start planning, exploring, or assessing whenever you’re ready.',
  }
];

export function OnboardingTour({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setTargetRect(null);
      return;
    }

    const updateRect = () => {
      const targetIds = steps[currentStep].targetIds;
      if (!targetIds) {
        setTargetRect(null);
        return;
      }
      
      let foundEl = null;
      for (const id of targetIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            foundEl = el;
            setTargetRect(rect);
            break;
          }
        }
      }
      
      if (!foundEl) {
        setTargetRect(null);
      }
    };

    updateRect();
    
    // In a real app we might want ResizeObserver, but resize event is fine for a quick tour.
    window.addEventListener('resize', updateRect);
    // some elements might animate, let's poll just in case for the first second
    const interval = setInterval(updateRect, 200);
    setTimeout(() => clearInterval(interval), 2000);
    
    return () => {
      window.removeEventListener('resize', updateRect);
      clearInterval(interval);
    };
  }, [currentStep, isOpen]);

  if (!isOpen) return null;

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLast) {
      onClose();
    } else {
      setCurrentStep(s => s + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(s => Math.max(0, s - 1));
  };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <AnimatePresence>
        {targetRect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              top: targetRect.top - 8,
              left: targetRect.left - 8,
              width: targetRect.width + 16,
              height: targetRect.height + 16
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute rounded-xl border-2 border-indigo-500 shadow-[0_0_0_9999px_rgba(15,23,42,0.7)] pointer-events-auto"
          />
        )}
      </AnimatePresence>

      {!targetRect && currentStep > 0 && (
         <div className="absolute inset-0 bg-slate-900/70 pointer-events-auto" />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute pointer-events-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-2xl max-w-[320px] w-full ${targetRect ? '' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
          style={targetRect ? {
            top: Math.min(targetRect.bottom + 16, window.innerHeight - 200),
            left: Math.max(16, Math.min(targetRect.left, window.innerWidth - 340))
          } : {}}
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              {isLast ? (
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              ) : (
                <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-xs font-bold px-2 py-0.5 rounded-full">
                  Step {currentStep + 1} of {steps.length - 1}
                </span>
              )}
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
            {step.content}
          </p>

          <div className="flex items-center justify-between">
            {isLast ? (
               <div className="flex flex-col w-full gap-2">
                 {FEATURES.ENABLE_SKILL_VISUALS && (
                   <button onClick={() => { onClose(); navigate('/skill-map'); }} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-3 rounded-lg text-sm transition-colors min-h-[44px]">
                      Start with the Skill Map
                   </button>
                 )}
                 <button onClick={() => { onClose(); navigate('/planner'); }} className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-2 px-3 rounded-lg text-sm transition-colors min-h-[44px]">
                    Open the Planner
                 </button>
                 {FEATURES.ENABLE_HOW_IT_WORKS && (
                   <button onClick={() => { onClose(); navigate('/how-it-works'); }} className="w-full text-indigo-600 dark:text-indigo-400 font-semibold py-2 px-3 rounded-lg text-sm transition-colors min-h-[44px]">
                      Learn how it works
                   </button>
                 )}
                 {!FEATURES.ENABLE_SKILL_VISUALS && !FEATURES.ENABLE_HOW_IT_WORKS && (
                   <button onClick={() => { onClose(); navigate('/grades'); }} className="w-full text-indigo-600 dark:text-indigo-400 font-semibold py-2 px-3 rounded-lg text-sm transition-colors min-h-[44px]">
                      Explore Grades
                   </button>
                 )}
               </div>
            ) : (
              <>
                <button 
                  onClick={onClose}
                  className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium"
                >
                  Skip tour
                </button>
                <div className="flex gap-2">
                  {currentStep > 0 && (
                    <button onClick={handlePrev} className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  )}
                  <button onClick={handleNext} className="flex items-center gap-1 py-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm">
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
