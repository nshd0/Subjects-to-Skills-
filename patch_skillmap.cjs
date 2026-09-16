const fs = require('fs');

let code = fs.readFileSync('src/pages/SkillMapPage.tsx', 'utf8');

if (!code.includes("import { SceneCanvas }")) {
  code = code.replace(
    "import { subjectMaps } from '@/data/subjectMaps';",
    "import { subjectMaps } from '@/data/subjectMaps';\nimport { SceneCanvas } from '@/components/3d/SceneCanvas';\nimport { SkillMap3D } from '@/components/3d/SkillMap3D';"
  );
}

if (!code.includes("const [viewMode")) {
  code = code.replace(
    "const [selectedNode, setSelectedNode] = useState<SubjectSkillMap | null>(null);",
    "const [selectedNode, setSelectedNode] = useState<SubjectSkillMap | null>(null);\n  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');"
  );
}

const oldFilterHtml = `<div className="w-full md:w-auto">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Filter by Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedNode(null);
              }}
              className="w-full md:w-64 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
            >
              {subjects.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>`;

const newFilterHtml = `<div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-end gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Filter by Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedNode(null);
                }}
                className="w-full md:w-64 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
              >
                {subjects.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            <div>
               <div className="flex bg-slate-100 dark:bg-slate-950 rounded-xl p-1 border border-slate-200 dark:border-slate-800">
                 <button 
                   onClick={() => setViewMode('2d')} 
                   className={\`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors \${viewMode === '2d' ? 'bg-white dark:bg-slate-800 text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}\`}
                 >
                   2D Map
                 </button>
                 <button 
                   onClick={() => setViewMode('3d')} 
                   className={\`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors \${viewMode === '3d' ? 'bg-white dark:bg-slate-800 text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}\`}
                 >
                   3D Terrain
                 </button>
               </div>
            </div>
          </div>`;

code = code.replace(oldFilterHtml, newFilterHtml);

const oldDiagramArea = `{/* Diagram Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Progression Nodes */}
          <div className="lg:col-span-2 space-y-6">`;

const newDiagramArea = `{/* Diagram Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Progression Nodes */}
          <div className="lg:col-span-2 space-y-6">
            {viewMode === '3d' && (
              <div className="w-full h-[500px]">
                <SceneCanvas>
                  <SkillMap3D 
                    skills={mapData.flatMap(stage => stage.items)} 
                    onNodeClick={(skill) => setSelectedNode(skill)} 
                  />
                </SceneCanvas>
              </div>
            )}`;

code = code.replace(oldDiagramArea, newDiagramArea);

// Hide 2D map if 3D is active
const old2dStart = `{mapData.every(stage => stage.items.length === 0) ? (`
const new2dStart = `
            {viewMode === '2d' && (
              <>
                {mapData.every(stage => stage.items.length === 0) ? (`

const old2dEnd = `</div>
            )}
          </div>
          
          {/* Detail Panel */}`
const new2dEnd = `</div>
                )}
              </>
            )}
          </div>
          
          {/* Detail Panel */}`

code = code.replace(old2dStart, new2dStart);
code = code.replace(old2dEnd, new2dEnd);


fs.writeFileSync('src/pages/SkillMapPage.tsx', code);
