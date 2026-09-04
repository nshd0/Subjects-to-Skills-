const fs = require('fs');
let code = fs.readFileSync('src/pages/Roadmap.tsx', 'utf8');

code = code.replace(
  "Tracking the transition from a stage-based conceptual framework to grade-wise curriculum implementation across Indian K–12.",
  "v0.3 expands through quality-checked grade-wise learning maps, beginning with anchor grades and improving through educator feedback."
);
code = code.replace(
  `"v0.3 will focus on quality-checked grade-wise maps, starting with anchor grades and expanding through teacher feedback."`,
  "v0.3 expands through quality-checked grade-wise learning maps, beginning with anchor grades and improving through educator feedback."
);

// Add the disclaimer before the Mandatory Roadmap Callout
if (!code.includes("Schools should align all use with applicable")) {
  code = code.replace(
    "{/* Mandatory Roadmap Callout */}",
    `{/* Mandatory Disclaimer */}\n        <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 space-y-2">\n          <div className="flex items-center gap-2 font-bold text-sm">\n            <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />\n            Platform Disclaimer\n          </div>\n          <p className="text-xs leading-relaxed opacity-90">\n            Subjects2Skills is an evolving public framework designed to support curriculum exploration, teacher planning and educational discussion. Schools should align all use with applicable CBSE, NCERT, state, school, safeguarding and assessment requirements.\n          </p>\n        </div>\n\n        {/* Mandatory Roadmap Callout */}`
  );
}

fs.writeFileSync('src/pages/Roadmap.tsx', code);
console.log('Patched Roadmap.tsx');
