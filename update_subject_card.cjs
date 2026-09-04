const fs = require('fs');

let path = 'src/components/SubjectMappingCard.tsx';
let content = fs.readFileSync(path, 'utf8');

const resourceBlock = `
            {/* RESOURCES FOR TEACHERS */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-4">
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Library className="h-5 w-5 text-indigo-500" /> Resources for Teachers
                  </h4>
                  <a href="/resources" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium">
                    View Full Resource Hub <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Teaching Strategy</strong>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Integrate {subject.skills} into {subject.subject} by focusing on {subject.observablePerformance || subject.learningOutcome}.</p>
                    
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Materials Needed</strong>
                    <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400">
                      <li>Standard stationery</li>
                      <li>Observation rubrics</li>
                      {subject.subject === 'Science' || subject.subject === 'Mathematics' ? <li>Physical manipulatives or lab equipment</li> : <li>Source texts</li>}
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Open/Free Tools</strong>
                    <ul className="space-y-2 mb-4">
                      {subject.subject === 'Science' || subject.subject === 'Mathematics' ? (
                        <li className="flex items-start gap-2">
                          <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400"><strong>PhET Interactive Simulations</strong></span>
                        </li>
                      ) : null}
                      <li className="flex items-start gap-2">
                        <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-400"><strong>DIKSHA</strong></span>
                      </li>
                    </ul>
                    
                    <strong className="block text-slate-700 dark:text-slate-300 mb-2">Official References</strong>
                    <ul className="space-y-2">
                      {subject.officialReference?.map((ref: any, idx: number) => (
                        <li key={idx}>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                            {ref.title} ({ref.sourceType})
                          </a>
                        </li>
                      )) || <li className="text-slate-500 italic">No specific external reference linked.</li>}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
`;

content = content.replace(
  "{/* Phase 3: Telemetry / Feedback Loop */}",
  resourceBlock + "\n            {/* Phase 3: Telemetry / Feedback Loop */}"
);

if (!content.includes('Library')) {
  content = content.replace("import { BookOpen,", "import { Library, BookOpen,");
}

fs.writeFileSync(path, content);
console.log('SubjectMappingCard.tsx updated');
