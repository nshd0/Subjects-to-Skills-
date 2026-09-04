const fs = require('fs');
let code = fs.readFileSync('src/components/activities/ActivityStepVisual.tsx', 'utf8');

code = code.replace(
  'aria-label={visualData.altText}>',
  'role="img" aria-label={visualData.altText}>'
);
// add print styles
code = code.replace(
  '<div className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 overflow-hidden shadow-sm transition-all ${className}`} id={`step-visual-${stepNumber}`}>',
  '<div className={`rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-300 bg-white dark:bg-slate-850 print:bg-white overflow-hidden shadow-sm transition-all ${className}`} id={`step-visual-${stepNumber}`}>'
);

code = code.replace(
  'bg-slate-50/60 dark:bg-slate-900/50',
  'bg-slate-50/60 dark:bg-slate-900/50 print:bg-slate-50'
);

code = code.replace(
  'bg-slate-50/30 dark:bg-slate-900/30',
  'bg-slate-50/30 dark:bg-slate-900/30 print:bg-white'
);

code = code.replace(
  'text-slate-900 dark:text-white',
  'text-slate-900 dark:text-white print:text-black'
);

code = code.replace(
  'text-slate-700 dark:text-slate-300',
  'text-slate-700 dark:text-slate-300 print:text-black'
);

fs.writeFileSync('src/components/activities/ActivityStepVisual.tsx', code);
console.log('Patched ActivityStepVisual');
