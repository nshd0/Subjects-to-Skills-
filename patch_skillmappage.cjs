const fs = require('fs');
let code = fs.readFileSync('src/pages/SkillMapPage.tsx', 'utf8');

// Display progression notes and source reference on the Detail Panel
if (!code.includes('selectedNode.progression?.notes')) {
  const replacement = `
                    <div className="space-y-4">
                      {selectedNode.progression?.notes && (
                        <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-800">
                          <p className="text-xs text-amber-800 dark:text-amber-200 font-bold mb-1">Curriculum Transition Note</p>
                          <p className="text-sm text-amber-700 dark:text-amber-300">{selectedNode.progression.notes}</p>
                        </div>
                      )}
                      {selectedNode.sourceReference && (
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                          <p className="text-xs text-slate-500 font-bold mb-1">Source Reference</p>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {selectedNode.sourceReference}
                            {selectedNode.sourceReference.includes('Pending Validation') && (
                              <span className="ml-2 inline-block px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full text-[10px] font-bold uppercase">Pending</span>
                            )}
                          </p>
                        </div>
                      )}
                      <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">
  `;
  
  code = code.replace(
    '<div className="space-y-4">\n                      <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">',
    replacement
  );
}

fs.writeFileSync('src/pages/SkillMapPage.tsx', code);
