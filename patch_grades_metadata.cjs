const fs = require('fs');
let code = fs.readFileSync('src/data/grades.ts', 'utf8');

// Grade 3-8 (NCF-SE-2023, new published)
for (let i = 3; i <= 8; i++) {
  const gradeId = `"grade-${i}"`;
  const metadata = `
    curriculumFramework: "NCF-SE-2023",
    textbookStatus: "new-ncert-published",
    academicSession: "2026-27",
    lastVerifiedDate: "2026-09-18",
    ${i >= 6 ? 'thirdLanguageRequired: true,' : ''}
  `;
  const regex = new RegExp(`(id:\\s*${gradeId},[\\s\\S]*?)(status:\\s*".*?",)`);
  code = code.replace(regex, `$1$2${metadata}`);
}

// Grade 9
code = code.replace(
  /(id:\s*"grade-9",[\s\S]*?)(status:\s*".*?",)/,
  `$1$2
    curriculumFramework: "NCF-SE-2023",
    textbookStatus: "new-ncert-rolling-out",
    academicSession: "2026-27",
    lastVerifiedDate: "2026-09-18",
    advancedTrackAvailable: true,
    thirdLanguageRequired: true,
  `
);

// Grade 10
code = code.replace(
  /(id:\s*"grade-10",[\s\S]*?)(status:\s*".*?",)/,
  `$1$2
    curriculumFramework: "pre-NCF-2023",
    textbookStatus: "existing-textbooks-continuing",
    academicSession: "2026-27",
    lastVerifiedDate: "2026-09-18",
    thirdLanguageRequired: true,
  `
);

fs.writeFileSync('src/data/grades.ts', code);
