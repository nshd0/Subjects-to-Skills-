const fs = require('fs');

let path = 'src/components/Layout.tsx';
let content = fs.readFileSync(path, 'utf8');

// Insert after Teacher Toolkit
content = content.replace(
  "{ name: 'Teacher Toolkit', path: '/toolkit' },",
  "{ name: 'Teacher Toolkit', path: '/toolkit' },\n    { name: 'Resource Hub', path: '/resources' },"
);

fs.writeFileSync(path, content);
console.log('Layout.tsx updated');
