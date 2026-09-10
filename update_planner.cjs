const fs = require('fs');

let file = fs.readFileSync('src/features/planning/pages/PlannerPage.tsx', 'utf-8');

file = file.replace(
  "import { PlusCircle, Target, Clock, ArrowRight } from 'lucide-react';",
  "import { PlusCircle, Target, Clock, ArrowRight, Wand2 } from 'lucide-react';\nimport { Link } from 'react-router-dom';\nimport { FEATURES } from '@/config/features';"
);

file = file.replace(
  "<button\n                  onClick={() => setShowCreateForm(true)}\n                  className=\"px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px]\"\n                >\n                  <PlusCircle className=\"w-4 h-4\" />\n                  <span>Create New Unit</span>\n                </button>",
  "<div className=\"flex flex-col sm:flex-row gap-3\">\n                <button\n                  onClick={() => setShowCreateForm(true)}\n                  className=\"px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px] shadow-sm\"\n                >\n                  <PlusCircle className=\"w-4 h-4\" />\n                  <span>Create New Unit</span>\n                </button>\n                {FEATURES.ENABLE_LESSON_PLAN_WIZARD && (\n                  <Link\n                    to=\"/plan/lesson/new\"\n                    className=\"px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px] shadow-sm\"\n                  >\n                    <Wand2 className=\"w-4 h-4\" />\n                    <span>Plan a lesson / unit</span>\n                  </Link>\n                )}\n                </div>"
);

fs.writeFileSync('src/features/planning/pages/PlannerPage.tsx', file);
