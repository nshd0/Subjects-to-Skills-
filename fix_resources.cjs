const fs = require('fs');
let code = fs.readFileSync('src/pages/TeacherResourceHub.tsx', 'utf8');

code = code.replace(
  "import { openResources } from '@/data/resources';",
  "import { openResources } from '@/data/resources';\nimport { PageHeaderVisual } from '@/components/PageHeaderVisual';"
);

code = code.replace(
  "        <p className=\"text-lg text-slate-600 dark:text-slate-300\">\n          A carefully vetted collection of free, open-source, and official tools directly aligned with the CBSE syllabus and NCF 2023.\n        </p>\n      </motion.div>",
  "        <p className=\"text-lg text-slate-600 dark:text-slate-300 mb-6\">\n          A carefully vetted collection of free, open-source, and official tools directly aligned with the CBSE syllabus and NCF 2023.\n        </p>\n        <div className=\"flex justify-center\"><PageHeaderVisual type=\"resources\" /></div>\n      </motion.div>"
);

fs.writeFileSync('src/pages/TeacherResourceHub.tsx', code);
