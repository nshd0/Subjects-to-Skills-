const fs = require('fs');

// 1. Update App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
if (!appContent.includes('AuditReport')) {
  appContent = appContent.replace(/import \{ Roadmap \} from '.\/pages\/Roadmap';/, "import { Roadmap } from './pages/Roadmap';\nimport { AuditReport } from './pages/AuditReport';");
  appContent = appContent.replace(/<Route path="roadmap" element=\{<Roadmap \/>\} \/>/, `<Route path="roadmap" element={<Roadmap />} />\n              <Route path="audit" element={<AuditReport />} />`);
  fs.writeFileSync('src/App.tsx', appContent);
}

// 2. Update Layout.tsx
let layoutContent = fs.readFileSync('src/components/Layout.tsx', 'utf8');
if (!layoutContent.includes("name: 'Audit'")) {
  layoutContent = layoutContent.replace(/\{ name: 'Roadmap', path: '\/roadmap' \},/, `{ name: 'Roadmap', path: '/roadmap' },\n    { name: 'Audit', path: '/audit' },`);
  fs.writeFileSync('src/components/Layout.tsx', layoutContent);
}

// 3. Update Roadmap.tsx
let roadmapContent = fs.readFileSync('src/pages/Roadmap.tsx', 'utf8');

const phase2Replace = `{
      phase: "Phase 2",
      status: "In Progress",
      title: "v0.2: NCF-SE Audit Alignment & Data Model",
      date: "Coming Soon",
      icon: <Database className="h-5 w-5 text-indigo-500" />,
      features: [
        "Priority 1: Grade-Level Landing Pages",
        "Priority 2: Strict Standards-Alignment Fields",
        "Priority 3: Comprehensive Implementation Panels",
        "Priority 4: Dynamic Compliance Dashboard",
        "Priority 5: Active Feedback & Version Control",
        "Database: Complete CBSE Syllabus Ingestion"
      ]
    }`;
roadmapContent = roadmapContent.replace(/\{\s*phase: "Phase 2"[\s\S]*?\}\s*\}/, phase2Replace);

if (!roadmapContent.includes('import { Link } from')) {
    roadmapContent = roadmapContent.replace(/import \{ Badge \} from '@\/components\/ui\/Badge';/, `import { Badge } from '@/components/ui/Badge';\nimport { Link } from 'react-router-dom';\nimport { FileSearch } from 'lucide-react';`);
}

const bannerReplace = `
        <div className="text-center space-y-4">
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-100 border-none">
            The Journey to v1.0
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Development Roadmap
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            See what we've accomplished and where we're heading next in our mission to build a fully NCF-SE 2023 & CBSE 2026-27 compliant curriculum mapping tool.
          </p>
          <div className="pt-4 flex justify-center">
            <Link to="/audit" className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 h-11 px-6 py-2 shadow-sm border border-transparent">
              <FileSearch className="mr-2 h-5 w-5" />
              Read the v0.2 Baseline Audit Report
            </Link>
          </div>
        </div>
`;
roadmapContent = roadmapContent.replace(/<div className="text-center space-y-4">[\s\S]*?<\/div>/, bannerReplace);

fs.writeFileSync('src/pages/Roadmap.tsx', roadmapContent);

console.log('Done mapping audit');
