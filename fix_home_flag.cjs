const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const howItWorksSection = `{/* New: Quick How It Works Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-4">
        <div className="grid sm:grid-cols-3 gap-6">
          <Link to="/how-it-works" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group shadow-sm flex flex-col h-full">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Subjects &rarr; Skills</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">See how textbook units map to clear, observable skills.</p>
          </Link>
          <Link to="/how-it-works" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group shadow-sm flex flex-col h-full">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Skills &rarr; Plans & Assessments</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Turn skills into classroom-ready unit plans and rubrics.</p>
          </Link>
          <Link to="/how-it-works" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group shadow-sm flex flex-col h-full">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Skills &rarr; Resources</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Find open, verified resources linked directly to each skill.</p>
          </Link>
        </div>
      </section>`;

if (!code.includes('FEATURES.ENABLE_HOW_IT_WORKS')) {
  // we must import FEATURES
  code = code.replace(
    "import { Badge } from '@/components/ui/Badge';",
    "import { Badge } from '@/components/ui/Badge';\nimport { FEATURES } from '@/config/features';"
  );
  
  code = code.replace(howItWorksSection, `{FEATURES.ENABLE_HOW_IT_WORKS && (\n${howItWorksSection}\n)}`);
  fs.writeFileSync('src/pages/Home.tsx', code);
}
