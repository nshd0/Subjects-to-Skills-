const fs = require('fs');

const path = 'README.md';
let content = fs.readFileSync(path, 'utf8');

// Update README with v0.3 details
content = content.replace(
  "This platform (v0.2) demonstrates how knowledge domains can be reorganized around skill development and pedagogical stages, rather than rote memorization, and serves as a dynamic, cloud-backed curriculum mapping tool.",
  "This platform (v0.3) is a verified curriculum-translation framework connecting CBSE/NCERT-aligned subject learning, skills, pedagogy, assessment, and classroom practice."
);

content = content.replace(
  "## ✨ Key Features",
  `## ✨ Key Features

### 🌟 New in v0.3 (Verified Curriculum Mapping & Implementation Layer)
*   **Standards Alignment Panel:** Explicit tracking of official curriculum references (NCF-SE 2023, CBSE) vs Subjects2Skills interpretations.
*   **Observable Competencies:** Core skills are now translated into observable, assessable performance statements grounded in subject contexts.
*   **Inclusive Learning Design:** Embedded access, participation, expression, support, and extension strategies in every activity.
*   **Assessment & Moderation Toolkit:** Subject-specific rubric templates, moderation checklists, and assessment purpose selectors.
*   **Area Coverage Dashboard:** Tracking framework mapping progress across all required curricular areas.
*   **School Implementation Planner:** Authenticated, secure workspace for teachers to draft private implementation plans.
*   **Stage-Specific Checklists:** Printable guides for ensuring pedagogical alignment at each developmental stage.
*   **Enhanced Feedback Loop:** Role-based, context-specific feedback widget feeding an admin dashboard.
`
);

content = content.replace(
  "## 🛣 Roadmap to v0.3 & Beyond",
  "## 🛣 Roadmap to v0.4 & Beyond"
);
content = content.replace(
  "*   **v0.3 (In Progress):** Personalized teacher dashboards, interactive lesson plan builders, and AI-assisted activity generation using the Gemini API.",
  "*   **v0.3 (Completed):** Verified curriculum mapping, standards alignment, inclusion mandates, and the school implementation planner."
);

content = content.replace(
  "Subjects2Skills has transitioned from a conceptual framework (v0.1) to a fully dynamic data platform (v0.2).",
  "Subjects2Skills has matured into a comprehensive, teacher-ready implementation layer (v0.3)."
);

fs.writeFileSync(path, content);
console.log('README updated');
