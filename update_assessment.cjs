const fs = require('fs');

let file = fs.readFileSync('src/features/planning/pages/AssessmentMapperPage.tsx', 'utf-8');

file = file.replace(
  "import { Target, AlertCircle } from 'lucide-react';",
  "import { Target, AlertCircle, Wand2 } from 'lucide-react';\nimport { Link } from 'react-router-dom';\nimport { FEATURES } from '@/config/features';"
);

file = file.replace(
  "</p>\n          </div>\n        </div>",
  "</p>\n          </div>\n          {FEATURES.ENABLE_ASSESSMENT_WIZARD && (\n            <Link\n              to=\"/assess/new\"\n              className=\"px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px] shadow-sm whitespace-nowrap\"\n            >\n              <Wand2 className=\"w-4 h-4\" />\n              <span>Create an assessment</span>\n            </Link>\n          )}\n        </div>"
);

fs.writeFileSync('src/features/planning/pages/AssessmentMapperPage.tsx', file);
