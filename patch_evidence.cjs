const fs = require('fs');
let code = fs.readFileSync('src/components/activities/LearningEvidenceVisual.tsx', 'utf8');

code = code.replace(
  'aria-label={visualData.altText}>',
  'role="img" aria-label={visualData.altText}>'
);

code = code.replace(
  '<div className={`p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-sm ${className}`}>',
  '<div className={`p-4 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-300 bg-white dark:bg-slate-850 print:bg-white shadow-sm ${className}`}>'
);

code = code.replace(
  'text-slate-500 dark:text-slate-400 block mb-3">',
  'text-slate-500 dark:text-slate-400 print:text-black block mb-3">'
);

code = code.replace(
  'bg-slate-50 dark:bg-slate-900',
  'bg-slate-50 dark:bg-slate-900 print:bg-slate-50'
);

code = code.replace(
  'text-[10px] text-slate-500 dark:text-slate-400 mt-2">',
  'text-[10px] text-slate-500 dark:text-slate-400 print:text-black mt-2">'
);

code = code.replace(
  'text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700/60">',
  'text-slate-700 dark:text-slate-300 print:text-black bg-slate-50 dark:bg-slate-800/60 print:bg-white p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700/60 print:border-slate-300">'
);

fs.writeFileSync('src/components/activities/LearningEvidenceVisual.tsx', code);
console.log('Patched LearningEvidenceVisual');
