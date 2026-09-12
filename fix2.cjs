const fs = require('fs');
let code = fs.readFileSync('src/features/planning/pages/Grade8Hub.tsx', 'utf8');

const oldSubjectCard = `                    {stats.isFullyMapped ? (
                       <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Fully Mapped</span>
                    ) : (
                       <span className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Partially Mapped</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{sub.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">{sub.statement}</p>
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-500">{stats.skillCount} core skills</span>
                    <Link to={\`/roadmap?grade=grade-8&subject=\${sub.id}\`} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:underline">
                      Explore <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>`;

const newSubjectCard = `                    {stats.isFullyMapped ? (
                       <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Fully Mapped</span>
                    ) : stats.skillCount === 0 ? (
                       <span className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Unmapped</span>
                    ) : (
                       <span className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Partially Mapped</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{sub.name}</h3>
                  {stats.skillCount === 0 ? (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1 italic">
                      Skill mapping for this unit is in progress &mdash; you can still create a plan manually.
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">{sub.statement}</p>
                  )}
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-500">{stats.skillCount} core skills</span>
                    <Link to={\`/roadmap?grade=grade-8&subject=\${sub.id}\`} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:underline">
                      Explore <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>`;

code = code.replace(oldSubjectCard, newSubjectCard);
fs.writeFileSync('src/features/planning/pages/Grade8Hub.tsx', code);
