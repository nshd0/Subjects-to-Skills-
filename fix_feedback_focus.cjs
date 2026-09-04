const fs = require('fs');
let path = 'src/components/FeedbackWidget.tsx';
let content = fs.readFileSync(path, 'utf8');

const focusClasses = 'focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400';
content = content.replace(/rounded-lg"/g, `rounded-lg ${focusClasses}"`);
content = content.replace(/rounded-lg resize-none"/g, `rounded-lg resize-none ${focusClasses}"`);

fs.writeFileSync(path, content);
console.log('Fixed Feedback Focus');
