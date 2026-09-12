const fs = require('fs');
let lp = fs.readFileSync('src/features/planning/components/CreateLessonPlanWizard.tsx', 'utf8');
lp = lp.replace(
  '<option value="english">English</option>',
  '<option value="english">English</option>\n                  <option value="social-science">Social Science</option>\n                  <option value="second-language">Second Language</option>'
);
fs.writeFileSync('src/features/planning/components/CreateLessonPlanWizard.tsx', lp);

let ap = fs.readFileSync('src/features/planning/components/CreateAssessmentWizard.tsx', 'utf8');
ap = ap.replace(
  '<option value="science">Science</option>',
  '<option value="science">Science</option>\n                <option value="english">English</option>\n                <option value="social-science">Social Science</option>\n                <option value="second-language">Second Language</option>'
);
fs.writeFileSync('src/features/planning/components/CreateAssessmentWizard.tsx', ap);
