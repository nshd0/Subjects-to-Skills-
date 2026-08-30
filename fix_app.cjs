const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  "import { AuditReport } from './pages/AuditReport';",
  "import { AuditReport } from './pages/AuditReport';\nimport { AdminDashboard } from './pages/AdminDashboard';"
);

content = content.replace(
  "<Route path=\"audit\" element={<AuditReport />} />",
  "<Route path=\"audit\" element={<AuditReport />} />\n                <Route path=\"admin\" element={<AdminDashboard />} />"
);

fs.writeFileSync('src/App.tsx', content);
