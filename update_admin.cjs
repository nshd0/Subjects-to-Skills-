const fs = require('fs');
const path = 'src/pages/AdminDashboard.tsx';
let content = fs.readFileSync(path, 'utf8');

// The new feedback has fields: userRole, stageOrGrade, subjectOrSkill, mappingClear, activityFeasible, content, willingToPilot
// We should update the Feedback display section in AdminDashboard

content = content.replace(
  /<div key=\{fb\.id\} className="border-b border-slate-200 dark:border-slate-800 pb-4">[\s\S]*?<\/div>/g,
  `<div key={fb.id} className="border-b border-slate-200 dark:border-slate-800 pb-4">
    <div className="flex justify-between items-start mb-2">
      <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
        {fb.userRole || 'Anonymous'} 
        {fb.stageOrGrade ? <span className="text-slate-500 font-normal"> - {fb.stageOrGrade}</span> : ''}
        {fb.subjectOrSkill ? <span className="text-slate-500 font-normal"> ({fb.subjectOrSkill})</span> : ''}
      </div>
      <div className="text-xs text-slate-500">
        {fb.createdAt instanceof Date ? fb.createdAt.toLocaleDateString() : 'Recent'}
      </div>
    </div>
    <div className="text-sm text-slate-700 dark:text-slate-300 mb-2 whitespace-pre-wrap">{fb.content}</div>
    <div className="flex gap-2 text-xs">
      {fb.mappingClear && <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">Clear: {fb.mappingClear}</span>}
      {fb.activityFeasible && <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">Feasible: {fb.activityFeasible}</span>}
      {fb.willingToPilot && <span className="bg-indigo-100 dark:bg-indigo-900/30 px-2 py-0.5 rounded text-indigo-700 dark:text-indigo-300">Willing to pilot</span>}
    </div>
  </div>`
);

fs.writeFileSync(path, content);
console.log('Admin updated');
