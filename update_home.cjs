const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const oldSubhead = `Grade-wise learning pathways for Indian school classrooms. Connect disciplinary subject curricula with 21st-century competencies, hands-on activities, and authentic assessment evidence.`;
const newSubhead = `A skill-centred view of school curriculum for teachers \u2014 with planning, assessment, and open resources.`;

code = code.replace(oldSubhead, newSubhead);

const oldStatusBanner = `{/* Status Notice Banner */}
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 p-4 rounded-xl text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl space-y-3">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    v0.4.3 Content Upgrade Live
                  </span>
                  <p>
                    All 13 grade profiles (Pre-school \u2192 Grade 12) are now explicitly aligned with CBSE (2025\u201326) subjects, NCERT textbooks, and NCF 2023 competencies. 
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <Link to="/about-content" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1">
                    Read our alignment methodology <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>`;

const newStatusBanner = `{/* Status Notice Banner */}
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 p-4 rounded-xl text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                 <p className="font-medium">Currently aligned to CBSE/NCERT/NCF 2023, designed to work with any standard curriculum.</p>
              </div>`;

code = code.replace(oldStatusBanner, newStatusBanner);

const howItWorksHTML = `
      {/* New: Quick How It Works Section */}
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
      </section>

      {/* Primary Stages Grid */}`;

code = code.replace('{/* Primary Stages Grid */}', howItWorksHTML);
fs.writeFileSync('src/pages/Home.tsx', code);
