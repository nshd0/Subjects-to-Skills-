const fs = require('fs');
let code = fs.readFileSync('src/features/planning/components/CreateIntegratedUnitWizard.tsx', 'utf8');

const oldStep7 = `               <button className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left hover:border-indigo-400 transition-colors">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><Target className="w-4 h-4" /> Create New Assessment</div>
                  <div className="text-sm text-slate-500 mt-1">Launch the Assessment Wizard to build a cross-subject rubric.</div>
               </button>
               <button className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left hover:border-indigo-400 transition-colors">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2"><BookOpen className="w-4 h-4" /> Link Existing Assessment</div>
                  <div className="text-sm text-slate-500 mt-1">Choose from your saved assessments.</div>
               </button>`;

const newStep7 = `               <button onClick={() => {
                 saveUnit({ ...unit, status: 'draft', id: Math.random().toString(36).substring(7) });
                 navigate('/assess/new');
               }} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left hover:border-indigo-400 transition-colors group">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-indigo-600"><Target className="w-4 h-4" /> Save Draft & Create New Assessment</div>
                  <div className="text-sm text-slate-500 mt-1">Saves your progress and launches the Assessment Wizard.</div>
               </button>
               <button onClick={() => {
                 setUnit({ ...unit, assessmentId: 'exemplar-assess-math' });
                 alert("Linked to Exemplar Math Assessment.");
                 nextStep();
               }} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left hover:border-indigo-400 transition-colors group">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-indigo-600"><BookOpen className="w-4 h-4" /> Link Exemplar Assessment</div>
                  <div className="text-sm text-slate-500 mt-1">Quickly link an existing exemplar assessment for testing.</div>
               </button>`;

code = code.replace(oldStep7, newStep7);
fs.writeFileSync('src/features/planning/components/CreateIntegratedUnitWizard.tsx', code);
