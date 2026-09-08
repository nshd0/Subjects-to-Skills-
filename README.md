# Subjects2Skills 🎓

A modern educational web application bridging traditional subjects with 21st-century skills, designed in strict alignment with **NCF 2023** and **CBSE 2025–26** curriculum guidelines.

This platform (v0.4.3) is a verified curriculum-translation framework connecting CBSE/NCERT-aligned subject learning, skills, pedagogy, assessment, and classroom practice.

## ✨ Key Features

### 🌟 New in v0.4.x (Planning, Assessments, and Official Alignment)
*   **v0.4.3 Professional Content Upgrade:** Comprehensive mapping of all 13 grade profiles to the latest CBSE syllabus (2025-26) and NCERT textbooks. Includes a verified Open Resource Hub featuring DIKSHA, Khan Academy, and PhET.
*   **v0.4.2 Assessment Mapper:** Dynamically generates summative and formative assessment tasks explicitly linked to competency skills. Features 4-tier graduated rubrics (Emerging → Transfer) for evaluating student evidence.
*   **v0.4.1 Unit & Lesson Planner:** A robust builder enabling teachers to construct actionable, classroom-ready units by referencing official skills and pedagogical guidelines. Features a print-ready export view.

### 🌟 Core Framework (v0.3 & earlier)
*   **13 Grade Profiles:** Granular profiles from Pre-school to Grade 12 covering learning areas, priority skills, and developmental pedagogy.
*   **Standards Alignment Panel:** Explicit tracking of official curriculum references (NCF 2023, CBSE) vs Subjects2Skills interpretations.
*   **Observable Competencies:** Core skills translated into observable, assessable performance statements grounded in subject contexts.
*   **5+3+3+4 Stage Architecture:** Explore curriculum tailored to specific developmental stages (Foundational, Preparatory, Middle, Secondary).
*   **Role-Based Access Control (RBAC):** Secure authentication system supporting specific roles (`admin`, `teacher`, `curriculum_designer`) via Firebase.
*   **Admin Dashboard & Migration:** Secure admin portal to run database migrations and review platform telemetry.

## 🛠 Tech Stack
*   **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Backend:** [Firebase Authentication & Firestore](https://firebase.google.com/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Routing:** [React Router v7](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animations:** [Motion](https://motion.dev/)

## 🚀 Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18+ recommended)
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
    Copy `.env.example` to `.env` (or create a `.env` file) and fill in your Firebase configuration variables:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4.  **Deploy Firestore Rules (Optional but recommended):**
    If using Firebase CLI:
    ```bash
    firebase deploy --only firestore:rules
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

6.  Open `http://localhost:3000` to view the app. 

### Building for Production
To create a production-ready build:
```bash
npm run build
```
This generates optimized static files in the `dist` directory.

## 📚 Curriculum Documentation
*   **CBSE & NCERT Alignment:** View our methodology in `docs/content-alignment.md` or the `/about-content` route within the application.
*   **Annual Audits:** Curriculum mappings and open educational resource (OER) links are verified annually before the academic cycle.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).

### 🔐 Security & Privacy
*   **Firestore Rules**: The platform uses strict Firebase security rules. Public users have read-only access to curriculum data.
*   **Private Workspace**: The School Implementation Planner creates documents restricted strictly to the authenticated user ID.
*   **Privacy Note**: Do not upload personally identifiable student information to the planner unless local school data processing policies explicitly allow it.
