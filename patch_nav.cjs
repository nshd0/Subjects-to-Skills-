const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Replace standard nav
code = code.replace(
  '<NavLink to="/about" className={navLinkClass}>About</NavLink>',
  '<button onClick={() => setIsFeedbackOpen(true)} className={navLinkClass}>Feedback</button>\n              <NavLink to="/about" className={navLinkClass}>About</NavLink>'
);

// Replace mobile nav
code = code.replace(
  '<NavLink to="/about" className={navLinkClass}>About & Governance</NavLink>',
  '<button onClick={() => setIsFeedbackOpen(true)} className={`w-full text-left ${navLinkClass({isActive: false})}`}>Feedback</button>\n              <NavLink to="/about" className={navLinkClass}>About & Governance</NavLink>'
);

// Add isFeedbackOpen state if not exists
if (!code.includes('isFeedbackOpen')) {
  code = code.replace(
    'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);',
    'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);'
  );
  code = code.replace(
    'import { GlobalSearch } from \'./GlobalSearch\';',
    'import { GlobalSearch } from \'./GlobalSearch\';\nimport { FeedbackModal } from \'./FeedbackModal\';'
  );
  code = code.replace(
    '<BookmarksDrawer',
    '<FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />\n      <BookmarksDrawer'
  );
}

fs.writeFileSync('src/components/Layout.tsx', code);
console.log('Patched Layout.tsx');
