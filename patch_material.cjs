const fs = require('fs');
let code = fs.readFileSync('src/components/activities/MaterialIconSet.tsx', 'utf8');

code = code.replace(
  'bg-white dark:bg-slate-800/80 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"',
  'bg-white dark:bg-slate-800/80 print:border-slate-300 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"'
);
code = code.replace(
  'bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">',
  'bg-emerald-50/50 dark:bg-emerald-950/20 print:bg-white border border-emerald-100 dark:border-emerald-900/30 print:border-slate-300">'
);
code = code.replace(
  'text-slate-500 dark:text-slate-400">',
  'text-slate-500 dark:text-slate-400 print:text-black">'
);
code = code.replace(
  'text-slate-700 dark:text-slate-300 leading-snug">',
  'text-slate-700 dark:text-slate-300 print:text-black leading-snug">'
);
code = code.replace(
  'text-emerald-800 dark:text-emerald-300 leading-snug">',
  'text-emerald-800 dark:text-emerald-300 print:text-black leading-snug">'
);

fs.writeFileSync('src/components/activities/MaterialIconSet.tsx', code);
console.log('Patched MaterialIconSet');
