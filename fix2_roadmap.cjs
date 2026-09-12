const fs = require('fs');
let code = fs.readFileSync('src/pages/Roadmap.tsx', 'utf8');

if (!code.includes('useLocation')) {
  code = code.replace("import { Link } from 'react-router-dom';", "import { Link, useLocation } from 'react-router-dom';");
  
  const oldFunctionStart = `export function Roadmap() {
  const [filter, setFilter] = useState<'all' | 'in-development' | 'planned'>('all');`;
  
  const newFunctionStart = `export function Roadmap() {
  const [filter, setFilter] = useState<'all' | 'in-development' | 'planned'>('all');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subjectParam = searchParams.get('subject');`;
  
  code = code.replace(oldFunctionStart, newFunctionStart);
  
  const fallbackHTML = `
        {/* Fallback for unmapped subject/unit from Grade8Hub */}
        {subjectParam && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-4 mb-6 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              Skill mapping for this unit is in progress &mdash; you can still create a plan manually.
            </p>
          </div>
        )}
        
        {/* Informational Callout */}`;
        
  code = code.replace("{/* Informational Callout */}", fallbackHTML);
  fs.writeFileSync('src/pages/Roadmap.tsx', code);
}
