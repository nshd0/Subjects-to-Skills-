const fs = require('fs');
let code = fs.readFileSync('src/components/OnboardingTour.tsx', 'utf8');

if (!code.includes("import { FEATURES }")) {
  code = code.replace(
    "import { useNavigate } from 'react-router-dom';",
    "import { useNavigate } from 'react-router-dom';\nimport { FEATURES } from '@/config/features';"
  );
}

const oldButtons = `<div className="flex flex-col w-full gap-2">
                 <button onClick={() => { onClose(); navigate('/skill-map'); }} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-3 rounded-lg text-sm transition-colors min-h-[44px]">
                    Start with the Skill Map
                 </button>
                 <button onClick={() => { onClose(); navigate('/planner'); }} className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-2 px-3 rounded-lg text-sm transition-colors min-h-[44px]">
                    Open the Planner
                 </button>
                 <button onClick={() => { onClose(); navigate('/how-it-works'); }} className="w-full text-indigo-600 dark:text-indigo-400 font-semibold py-2 px-3 rounded-lg text-sm transition-colors min-h-[44px]">
                    Learn how it works
                 </button>
               </div>`;

const newButtons = `<div className="flex flex-col w-full gap-2">
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
               </div>`;

code = code.replace(oldButtons, newButtons);
fs.writeFileSync('src/components/OnboardingTour.tsx', code);
