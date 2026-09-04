const fs = require('fs');

let path = 'src/pages/StagePage.tsx';
let content = fs.readFileSync(path, 'utf8');

const importStatement = `import { NavLink } from 'react-router-dom';
import { Download, ExternalLink, Library } from 'lucide-react';\n`;

content = content.replace("import { ChevronRight,", "import { NavLink }\nfrom 'react-router-dom';\nimport { ChevronRight,");
// actually let's just insert the component logic

const resourcePanelCode = `
        {/* Stage-Level Resource Panel */}
        <section className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-10">
          <div className="bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-900/50 dark:to-indigo-950/30 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                    <Library className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Support Guides and Resources</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">
                  Access teacher guidance notes, curated open-source tools, printable templates, and classroom-ready activities specifically designed for the {stage.title}.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <NavLink to="/resources" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg font-medium transition-colors">
                    Explore Hub <ChevronRight className="h-4 w-4" />
                  </NavLink>
                </div>
              </div>
              
              <div className="w-full md:w-auto min-w-[280px]">
                <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">Available for this stage</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span className="flex items-center gap-2"><FileText className="h-4 w-4 text-indigo-500" /> Lesson Templates</span> <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-medium">Free</span></li>
                    <li className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span className="flex items-center gap-2"><Activity className="h-4 w-4 text-emerald-500" /> Activity Bank</span> <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-medium">Free</span></li>
                    <li className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span className="flex items-center gap-2"><Target className="h-4 w-4 text-rose-500" /> Assessment Notes</span> <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-medium">Free</span></li>
                    <li className="flex items-center justify-between text-slate-600 dark:text-slate-300"><span className="flex items-center gap-2"><ExternalLink className="h-4 w-4 text-blue-500" /> Open/Free Tools</span> <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-medium">Curated</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
`;

if (content.includes('Phase II')) {
  // If secondary stage
  content = content.replace(
    /<FeedbackLoop context=\{stage\.title\} \/>/g,
    resourcePanelCode + '\n<FeedbackLoop context={stage.title} />'
  );
} else {
  // Replace the first <FeedbackLoop context={stage.title} />
  content = content.replace(
    /<FeedbackLoop context=\{stage\.title\} \/>/,
    resourcePanelCode + '\n<FeedbackLoop context={stage.title} />'
  );
}


// Add imports if missing
if (!content.includes('Library')) {
  content = content.replace("import { ChevronRight", "import { Library, ExternalLink, ChevronRight");
}

fs.writeFileSync(path, content);
console.log('StagePage.tsx updated');
