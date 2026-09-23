const fs = require('fs');
let code = fs.readFileSync('src/features/planning/pages/GenericGradeHub.tsx', 'utf8');

code = code.replace('import { gradeProfiles } from \'@/data/grades\';', 'import { gradesData } from \'@/data/grades\';');
code = code.replace('const profile = gradeProfiles.find(g => g.id === `grade-${gradeId}`);', 'const profile = gradesData.find(g => g.id === `grade-${gradeId}`);');

fs.writeFileSync('src/features/planning/pages/GenericGradeHub.tsx', code);
