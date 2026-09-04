const fs = require('fs');

let path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Import
content = content.replace(
  "import { Layout } from './components/Layout';",
  "import { Layout } from './components/Layout';\nimport { TeacherResourceHub } from './pages/TeacherResourceHub';"
);

// Route
content = content.replace(
  '<Route path="toolkit" element={<TeacherToolkit />} />',
  '<Route path="toolkit" element={<TeacherToolkit />} />\n                <Route path="resources" element={<TeacherResourceHub />} />'
);

fs.writeFileSync(path, content);
console.log('App.tsx updated');
