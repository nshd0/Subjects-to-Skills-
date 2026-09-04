const fs = require('fs');
let code = fs.readFileSync('src/components/FeedbackWidget.tsx', 'utf8');

// Replace the form fields to match the prompt
code = code.replace(
  '<form onSubmit={handleSubmit} className="flex flex-col gap-4">',
  `<form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <div>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">What is your role? *</label>
      <select name="userRole" required value={formData.userRole} onChange={handleChange} className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="">Select a role...</option>
        <option value="Teacher">Teacher</option>
        <option value="School leader">School leader</option>
        <option value="Parent">Parent</option>
        <option value="Student">Student</option>
        <option value="Curriculum designer">Curriculum designer</option>
        <option value="Teacher educator">Teacher educator</option>
        <option value="Researcher">Researcher</option>
        <option value="Other">Other</option>
      </select>
    </div>
    
    <div>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Which grade did you explore?</label>
      <input type="text" name="stageOrGrade" value={formData.stageOrGrade} onChange={handleChange} placeholder="e.g. Grade 7" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>
    <div>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Which subject or learning area did you explore?</label>
      <input type="text" name="subjectOrSkill" value={formData.subjectOrSkill} onChange={handleChange} placeholder="e.g. Science" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
    </div>

    <div className="grid grid-cols-2 gap-2">
      <div>
        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Could you find a useful activity quickly?</label>
        <select name="mappingClear" value={formData.mappingClear} onChange={handleChange} className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">-</option><option value="Yes">Yes</option><option value="Partly">Partly</option><option value="No">No</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Would you use this activity?</label>
        <select name="activityFeasible" value={formData.activityFeasible} onChange={handleChange} className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">-</option><option value="Yes, as is">Yes, as is</option><option value="Yes, with changes">Yes, with changes</option><option value="Not yet">Not yet</option>
        </select>
      </div>
    </div>

    <div>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">What was most useful?</label>
      <textarea name="useful" rows={2} placeholder="Share your thoughts" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
    </div>
    
    <div>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">What is missing?</label>
      <textarea name="missing" rows={2} placeholder="What should we add?" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
    </div>

    <div>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">What should improve? *</label>
      <textarea name="content" required rows={2} value={formData.content} onChange={handleChange} placeholder="Share your suggestions" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
    </div>

    <div className="space-y-2">
      <label className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
        <input type="checkbox" name="willingToPilot" checked={formData.willingToPilot} onChange={handleChange} className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
        Would you be interested in reviewing future content?
      </label>
      
      {formData.willingToPilot && (
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      )}
    </div>`
);

// We need to delete the old form fields up to <Button type="submit"
code = code.replace(
  /<div>\s*<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Your Role \*[\s\S]*?(?=<Button type="submit")/g,
  ""
);

fs.writeFileSync('src/components/FeedbackWidget.tsx', code);
console.log('Patched FeedbackWidget.tsx');
