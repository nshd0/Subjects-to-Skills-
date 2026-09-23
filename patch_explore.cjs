const fs = require('fs');
let code = fs.readFileSync('src/pages/ExploreByGrade.tsx', 'utf8');

if (!code.includes('import { FEATURES }')) {
  code = code.replace(
    "import { gradesData } from '@/data/grades';",
    "import { gradesData } from '@/data/grades';\nimport { FEATURES } from '@/config/features';"
  );
}

if (!code.includes('const processedGrades =')) {
  code = code.replace(
    'const stageGrades = gradesData.filter(g => g.stageId === stage.id);',
    `const processedGrades = gradesData.map(g => {
              if (g.id === 'grade-8' && FEATURES.ENABLE_GRADE8_FULL) {
                return { ...g, status: 'published' };
              }
              const validGrades = ['grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-9', 'grade-10'];
              if (validGrades.includes(g.id) && FEATURES.ENABLE_GRADE_RANGE_3_10) {
                return { ...g, status: 'published' };
              }
              return g;
            });
            const stageGrades = processedGrades.filter(g => g.stageId === stage.id);`
  );
}

fs.writeFileSync('src/pages/ExploreByGrade.tsx', code);
