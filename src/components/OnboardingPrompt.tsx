import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Map, Target, Layers } from 'lucide-react';
import { FEATURES } from '@/config/features';

interface OnboardingPromptProps {
  onStartTour: () => void;
}

export function OnboardingPrompt({ onStartTour }: OnboardingPromptProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!FEATURES.ENABLE_ONBOARDING_TOUR) return;
    
    // Slight delay to not overwhelm on load
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('hasSeenOnboarding');
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenOnboarding", "true");
    localStorage.setItem('hasSeenOnboarding', 'true');
  };

  const handleStart = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenOnboarding", "true");
    onStartTour();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 p-1 w-full max-w-sm pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden pointer-events-auto"
          >
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-start">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold">
                <Sparkles className="w-5 h-5" />
                <span>Welcome!</span>
              </div>
              <button 
                onClick={handleDismiss}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                New here? Let’s walk through Subjects to Skills in 2 minutes.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                See how your subjects turn into clear skills — and how you can plan lessons, design assessments, and find resources, all in one place.
              </p>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={handleStart}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-2.5 px-4 font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
                >
                  Show me around
                </button>
                <button 
                  onClick={handleDismiss}
                  className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl py-2.5 px-4 font-semibold transition-colors min-h-[44px]"
                >
                  I’ll explore on my own
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
