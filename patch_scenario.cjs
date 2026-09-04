const fs = require('fs');
let code = fs.readFileSync('src/components/activities/ActivityScenarioVisual.tsx', 'utf8');

code = code.replace(
  '<div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900">',
  '<div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900" role="img" aria-label={visualData.altText}>'
);

fs.writeFileSync('src/components/activities/ActivityScenarioVisual.tsx', code);
console.log('Patched ActivityScenarioVisual');
