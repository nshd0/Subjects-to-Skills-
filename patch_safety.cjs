const fs = require('fs');
let code = fs.readFileSync('src/components/activities/SafetyInclusionCallout.tsx', 'utf8');

code = code.replace(
  'aria-label={visualData.altText}>',
  'role="img" aria-label={visualData.altText}>'
);

code = code.replace(
  '<div className={`p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 shadow-sm ${className}`}>',
  '<div className={`p-4 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-300 bg-slate-50 dark:bg-slate-800/40 print:bg-white shadow-sm ${className}`}>'
);

code = code.replace(
  'text-slate-500 dark:text-slate-400 block mb-3">',
  'text-slate-500 dark:text-slate-400 print:text-black block mb-3">'
);

code = code.replace(
  'text-slate-800 dark:text-slate-200 block mb-0.5">',
  'text-slate-800 dark:text-slate-200 print:text-black block mb-0.5">'
);

code = code.replace(
  'text-slate-600 dark:text-slate-400 leading-snug">',
  'text-slate-600 dark:text-slate-400 print:text-black leading-snug">'
);

fs.writeFileSync('src/components/activities/SafetyInclusionCallout.tsx', code);
console.log('Patched SafetyInclusionCallout');
