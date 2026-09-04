const fs = require('fs');
let code = fs.readFileSync('src/pages/TeacherResourceHub.tsx', 'utf8');

code = code.replace(
  "Teachers should review all external tools, resources and links for age-appropriateness, accessibility, privacy, safety and school-policy compliance before classroom use.",
  "Teachers should review all external tools, resources and links for suitability, age-appropriateness, accessibility, privacy, safety and school-policy compliance before classroom use."
);

// Add Platform Disclaimer
if (!code.includes("Schools should align all use with applicable")) {
  code = code.replace(
    '<div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-4 rounded-xl text-sm flex items-start gap-3 border border-blue-100 dark:border-blue-800/50">',
    `<div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 mb-6 text-sm">\n          Subjects2Skills is an evolving public framework designed to support curriculum exploration, teacher planning and educational discussion. Schools should align all use with applicable CBSE, NCERT, state, school, safeguarding and assessment requirements.\n        </div>\n\n        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-4 rounded-xl text-sm flex items-start gap-3 border border-blue-100 dark:border-blue-800/50">`
  );
}

fs.writeFileSync('src/pages/TeacherResourceHub.tsx', code);
console.log('Patched TeacherResourceHub.tsx');
