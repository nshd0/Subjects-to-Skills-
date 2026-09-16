const fs = require('fs');

// 1. Patch Home.tsx
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf8');
homeCode = homeCode.replace('v0.3 Live', 'v0.4 Live');
fs.writeFileSync('src/pages/Home.tsx', homeCode);

// 2. Patch Layout.tsx
let layoutCode = fs.readFileSync('src/components/Layout.tsx', 'utf8');
layoutCode = layoutCode.replace(/v0\.3/g, 'v0.4');
fs.writeFileSync('src/components/Layout.tsx', layoutCode);
