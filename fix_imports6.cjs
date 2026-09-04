const fs = require('fs');

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

// I will just add Loader2 to the main import block.
content2 = content2.replace("import { ", "import { Loader2, ");

fs.writeFileSync(path2, content2);
console.log('Loader2 added');
