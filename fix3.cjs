const fs = require('fs');
let code = fs.readFileSync('src/features/planning/pages/Grade8Hub.tsx', 'utf8');

code = code.replace(
  '<Link to="/roadmap" className=',
  '<Link to="/roadmap?grade=grade-8" className='
);
code = code.replace(
  '<Link to="/planner" className=',
  '<Link to="/planner?grade=grade-8" className='
);
code = code.replace(
  '<Link to="/assessment-mapper" className=',
  '<Link to="/assessment-mapper?grade=grade-8" className='
);

fs.writeFileSync('src/features/planning/pages/Grade8Hub.tsx', code);
