const fs = require('fs');
let code = fs.readFileSync('src/features/planning/components/CreateIntegratedUnitWizard.tsx', 'utf8');

code = code.replace(
  "import { IntegratedUnit } from '../wizardTypes';",
  "import { IntegratedUnit } from '../wizardTypes';\nimport { subjectMaps } from '@/data/subjectMaps';"
);

const oldCase3 = `              {/* Mocking skill selection for the selected subjects */}
              {unit.subjectIds?.length ? unit.subjectIds.map(subId => {
                const subName = SUBJECTS.find(s => s.id === subId)?.name;
                return (
                  <div key={subId} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">{subName} Skills</h4>
                    {['Skill A', 'Skill B', 'Skill C'].map(mockSkill => (
                      <label key={mockSkill} className="flex items-center gap-3 mb-2">
                        <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">Core {subName} {mockSkill}</span>
                      </label>
                    ))}
                  </div>
                );
              }) : (
                <div className="text-sm text-amber-600">Please go back and select contributing subjects first.</div>
              )}`;

const newCase3 = `              {unit.subjectIds?.length ? unit.subjectIds.map(subId => {
                const subName = SUBJECTS.find(s => s.id === subId)?.name;
                const subjectSkills = subjectMaps.filter(m => (m.grade === 'Grade 8' || m.grade === '8') && m.subject === subName);
                return (
                  <div key={subId} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">{subName} Skills</h4>
                    {subjectSkills.length > 0 ? subjectSkills.map(skillMap => (
                      <label key={skillMap.id} className="flex items-start gap-3 mb-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-indigo-600 rounded mt-0.5" 
                          checked={unit.skillIds?.includes(skillMap.id)}
                          onChange={e => {
                            const newIds = e.target.checked 
                              ? [...(unit.skillIds || []), skillMap.id] 
                              : (unit.skillIds || []).filter(id => id !== skillMap.id);
                            setUnit({...unit, skillIds: newIds});
                          }} 
                        />
                        <div className="flex-1">
                           <span className="text-sm font-semibold text-slate-900 dark:text-white block">{skillMap.primarySkill.split(':')[0]}</span>
                           <span className="text-xs text-slate-600 dark:text-slate-400 block mt-0.5">{skillMap.primarySkill.split(':')[1]?.trim() || skillMap.primarySkill}</span>
                        </div>
                      </label>
                    )) : (
                      <p className="text-sm text-slate-500">No skills mapped for this subject yet.</p>
                    )}
                  </div>
                );
              }) : (
                <div className="text-sm text-amber-600">Please go back and select contributing subjects first.</div>
              )}`;

code = code.replace(oldCase3, newCase3);
fs.writeFileSync('src/features/planning/components/CreateIntegratedUnitWizard.tsx', code);
