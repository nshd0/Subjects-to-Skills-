const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// I will insert it after the other useStates
code = code.replace(
  'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);',
  'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);'
);

// We also need to fix FeedbackModal. We will use FeedbackWidget instead!
code = code.replace(
  "import { FeedbackModal } from './FeedbackModal';",
  ""
);
code = code.replace(
  '<FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />',
  ''
);

// Instead of passing a modal, let's just make the Feedback link open the FeedbackWidget. Wait, FeedbackWidget has its own floating button and isOpen state. Let's check FeedbackWidget.tsx
fs.writeFileSync('src/components/Layout.tsx', code);
console.log('Fixed Layout.tsx');
