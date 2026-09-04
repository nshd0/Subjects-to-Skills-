const fs = require('fs');
let code = fs.readFileSync('src/components/ActivityCard.tsx', 'utf8');

code = code.replace(">                  Complete Plan                </button>", ">                  Quick Overview                </button>");
code = code.replace(">                  Text Plan Only                </button>", ">                  Text and Print View                </button>");

fs.writeFileSync('src/components/ActivityCard.tsx', code);
console.log('Patched labels');
