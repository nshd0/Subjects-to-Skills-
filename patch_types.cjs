const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');

if (!code.includes('curriculumFramework')) {
  code = code.replace(
    'cbseSubjects?: string[];',
    `cbseSubjects?: string[];
  
  // Curriculum Vintage Metadata
  curriculumFramework?: "NCF-SE-2023" | "pre-NCF-2023";
  textbookStatus?: "new-ncert-published" | "new-ncert-rolling-out" | "existing-textbooks-continuing";
  academicSession?: string;
  lastVerifiedDate?: string;
  advancedTrackAvailable?: boolean;
  thirdLanguageRequired?: boolean;`
  );
}

if (!code.includes('sourceReference?: string;')) {
  code = code.replace(
    'sourceType: "official-reference" | "subjects2skills-interpretation" | "suggested-activity";',
    `sourceType: "official-reference" | "subjects2skills-interpretation" | "suggested-activity";
  sourceReference?: string;`
  );
}

fs.writeFileSync('src/types.ts', code);
