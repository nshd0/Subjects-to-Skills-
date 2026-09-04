const fs = require('fs');
let code = fs.readFileSync('src/pages/TeacherToolkit.tsx', 'utf8');

if (!code.includes("Schools should align all use with applicable")) {
  code = code.replace(
    '<p className="text-slate-600 dark:text-slate-400 mt-2">',
    `<div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 mb-6 mt-4 text-sm">\n            Subjects2Skills is an evolving public framework designed to support curriculum exploration, teacher planning and educational discussion. Schools should align all use with applicable CBSE, NCERT, state, school, safeguarding and assessment requirements.\n          </div>\n          <p className="text-slate-600 dark:text-slate-400 mt-2">`
  );
}

fs.writeFileSync('src/pages/TeacherToolkit.tsx', code);
console.log('Patched TeacherToolkit.tsx');
