# Subjects2Skills 🎓

A modern educational web application bridging traditional subjects with 21st-century skills, designed in strict alignment with **NCF-SE 2023** and **CBSE 2026-27** curriculum guidelines.

This platform (v0.3) is a verified curriculum-translation framework connecting CBSE/NCERT-aligned subject learning, skills, pedagogy, assessment, and classroom practice.

## ✨ Key Features

### 🌟 New in v0.3 (Verified Curriculum Mapping & Implementation Layer)
*   **Standards Alignment Panel:** Explicit tracking of official curriculum references (NCF-SE 2023, CBSE) vs Subjects2Skills interpretations.
*   **Observable Competencies:** Core skills are now translated into observable, assessable performance statements grounded in subject contexts.
*   **Inclusive Learning Design:** Embedded access, participation, expression, support, and extension strategies in every activity.
*   **Assessment & Moderation Toolkit:** Subject-specific rubric templates, moderation checklists, and assessment purpose selectors.
*   **Area Coverage Dashboard:** Tracking framework mapping progress across all required curricular areas.
*   **School Implementation Planner:** Authenticated, secure workspace for teachers to draft private implementation plans.
*   **Stage-Specific Checklists:** Printable guides for ensuring pedagogical alignment at each developmental stage.
*   **Enhanced Feedback Loop:** Role-based, context-specific feedback widget feeding an admin dashboard.


### 🚀 New in v0.2 (Data Model & Backend)
*   **Firebase / Firestore Integration:** Fully dynamic data serving from the cloud, replacing static JSON payloads.
*   **Role-Based Access Control (RBAC):** Secure authentication system supporting specific roles (`admin`, `teacher`, `curriculum_designer`).
*   **Admin Dashboard & Migration:** Secure admin portal to run database migrations, ingest static curriculum data into Firestore, and review platform telemetry.
*   **Strict Security Rules:** Hardened `firestore.rules` validating curriculum schemas (payload limits, regex-enforced document IDs) and preventing unauthorized writes.
*   **Updated Stage Nomenclature:** Pedagogical stages now explicitly integrate developmental age groups and grade bands across the UI (e.g., *Foundational Stage (Ages 3–8 | Preschool to Grade 2)*).
*   **Live Telemetry:** Real-time feedback collection system integrated directly into the database.

### 🏗️ Core Architecture (Established in v0.1)
*   **5+3+3+4 Stage Architecture:** Explore curriculum tailored to specific developmental stages (Foundational, Preparatory, Middle, Secondary).
*   **Granular Grade-Level Mapping:** Subject maps are broken down grade-by-grade, adhering to the NCF-SE structure.
*   **Strict Standards Alignment:** Every subject mapping follows the official NCF-SE sequence: *Curricular Area → Subject → Stage → Grade → Curricular Goal → Competency → Learning Outcome*.
*   **Classroom Implementation Panels:** Detailed, actionable activity panes including Duration, Group Size, Teacher Preparation, Assessment & Evidence, Support (Scaffolding), Extension (Advanced), and Accessibility & Inclusion.
*   **Compliance Dashboard:** A public audit view demonstrating mapping status for NCF-SE 2023 cross-cutting mandates.
*   **Teacher Toolkit (Printable):** Practical resources and print-ready unit planning templates for educators.
*   **Modern UI/UX:** Responsive, mobile-first design with beautiful editorial illustrations, fluid transitions, and a Dark/Light mode toggle.

## 🛣 Roadmap to v0.4 & Beyond

Subjects2Skills has matured into a comprehensive, teacher-ready implementation layer (v0.3).

*   **v0.1 (Completed):** Structural alignment, prototyping, NCF-SE 2023 compliance auditing, and granular UI mapping.
*   **v0.2 (Completed):** Firebase/Firestore backend integration, full CBSE syllabus data ingestion, role-based authentication, strict security rules, and curriculum versioning.
*   **v0.3 (Completed):** Verified curriculum mapping, standards alignment, inclusion mandates, and the school implementation planner.

You can view the detailed baseline audit and roadmap directly within the application on the `/audit` and `/roadmap` routes.

## 🛠 Tech Stack

*   **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Backend:** [Firebase Authentication & Firestore](https://firebase.google.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) installed on your machine.
*   A Firebase project with Firestore and Authentication (Google Auth / Email/Password) enabled.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/subjects2skills.git
    cd subjects2skills
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Firebase:**
    Rename `.env.example` to `.env` (or create a `.env` file) and fill in your Firebase configuration variables:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4.  **Deploy Firestore Rules (Optional but highly recommended):**
    If you have the Firebase CLI installed, you can deploy the secure database rules included in the repository:
    ```bash
    firebase deploy --only firestore:rules
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
6.  Open `http://localhost:3000` to view the app. 
    *Note: The first user to log in via the configured admin email (see `AuthContext.tsx`) will receive the `admin` role and can run the initial curriculum data migration directly from the Admin Dashboard.*

### Building for Production

To create a production-ready build:
```bash
npm run build
```
This will generate optimized static files in the `dist` directory.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

### 🔐 Security & Privacy
*   **Firestore Rules**: The platform uses strict Firebase security rules. Public users have read-only access to curriculum data.
*   **Private Workspace**: The School Implementation Planner creates documents in the `school_plans` collection, restricted strictly to the authenticated user ID.
*   **Privacy Note**: Do not upload personally identifiable student information to the planner unless local school data processing policies explicitly allow it.

### 🧪 Testing & Verification Checklist
- [ ] Verify NCF-SE 2023 Links for all seeded maps (Annual task)
- [ ] Check Firebase rules deployment (`firebase deploy --only firestore:rules`)
- [ ] Test mobile responsiveness of the Area Coverage and Standards Alignment panels
- [ ] Verify semantic HTML and ARIA labels via accessibility audit tools
