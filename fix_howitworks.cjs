const fs = require('fs');
let code = fs.readFileSync('src/pages/HowItWorksPage.tsx', 'utf8');

if (!code.includes("import { FEATURES }")) {
  code = code.replace(
    "import { BookOpen, Map, Target, Layers, FileText, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';",
    "import { BookOpen, Map, Target, Layers, FileText, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';\nimport { FEATURES } from '@/config/features';\nimport { subjectMaps } from '@/data/subjectMaps';"
  );
}

// Replace hardcoded step 1 detail
const oldStep1Detail = `<div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Instead of just covering a textbook chapter, you see exactly what skills students are building. For example, "Fractions" becomes the skill of "Proportional Reasoning".
          </p>
          <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 px-3 py-1 rounded-full text-xs">Math Chapter 4</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
            <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs">Skill: Proportional Reasoning</span>
          </div>
        </div>`;

const newStep1Detail = `<div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Instead of just covering a textbook chapter, you see exactly what skills students are building. For example, a unit in {subjectMaps[0].subject} maps directly to real competencies.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-700 dark:text-slate-300 font-medium bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 px-3 py-1 rounded-full text-xs text-center">{subjectMaps[0].learningArea}</span>
            <ArrowRight className="hidden sm:block w-4 h-4 text-slate-400 shrink-0" />
            <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs text-center line-clamp-2" title={subjectMaps[0].primarySkill || subjectMaps[0].competency}>Skill: {subjectMaps[0].primarySkill || subjectMaps[0].competency}</span>
          </div>
        </div>`;

code = code.replace(oldStep1Detail, newStep1Detail);

// Replace hardcoded step 2 detail
const oldStep2Detail = `<div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Our planner helps you design activities that explicitly target the skills. Then, the Assessment Mapper gives you 4-tier rubrics (from Emerging to Transfer) so you can accurately measure student growth.
          </p>
          <div className="flex items-start gap-3 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <FileCheck className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">Sample Task: Fraction Scavenger Hunt</p>
              <p className="text-xs text-slate-500 mt-1">Measures: Problem Solving • 45 minutes</p>
            </div>
          </div>
        </div>`;

const newStep2Detail = `<div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-sm">
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            Our planner helps you design activities that explicitly target the skills. Then, the Assessment Mapper gives you 4-tier rubrics (from Emerging to Transfer) so you can accurately measure student growth.
          </p>
          <div className="flex items-start gap-3 bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
            <FileCheck className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">Sample Task: {subjectMaps[0].studentOutput}</p>
              <p className="text-xs text-slate-500 mt-1">Measures: {subjectMaps[0].keyConcepts?.[0] || 'Core Skill'} • Via {subjectMaps[0].pedagogy?.[0] || 'Activity'}</p>
            </div>
          </div>
        </div>`;

code = code.replace(oldStep2Detail, newStep2Detail);

const oldExploreBtn = `<Link to="/skill-map" className="px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-center shadow-sm min-h-[44px]">
            Explore the Skill Map
          </Link>`;

const newExploreBtn = `{FEATURES.ENABLE_SKILL_VISUALS && (
          <Link to="/skill-map" className="px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-center shadow-sm min-h-[44px]">
            Explore the Skill Map
          </Link>
          )}`;

code = code.replace(oldExploreBtn, newExploreBtn);

fs.writeFileSync('src/pages/HowItWorksPage.tsx', code);
