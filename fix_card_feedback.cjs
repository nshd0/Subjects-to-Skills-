const fs = require('fs');
let content = fs.readFileSync('src/components/SubjectMappingCard.tsx', 'utf8');

// Import
content = content.replace(
  "import { Badge } from '@/components/ui/Badge';",
  "import { Badge } from '@/components/ui/Badge';\nimport { FeedbackModal } from './FeedbackModal';"
);

// Add modal at bottom of content
content = content.replace(
  "      </AccordionContent>\n    </AccordionItem>",
  "        {/* Phase 3: Telemetry / Feedback Loop */}\n        <div className=\"mt-4 border-t border-slate-100 dark:border-slate-800 pt-4\">\n          <FeedbackModal subject={subject} />\n        </div>\n      </AccordionContent>\n    </AccordionItem>"
);

fs.writeFileSync('src/components/SubjectMappingCard.tsx', content);
