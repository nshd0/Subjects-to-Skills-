# Subjects2Skills 🎓

A modern educational web application bridging traditional subjects with 21st-century skills, designed in strict alignment with **NCF-SE 2023** and **CBSE 2026-27** curriculum guidelines.

This platform (v0.2) demonstrates how knowledge domains can be reorganized around skill development and pedagogical stages, rather than rote memorization, and serves as a dynamic, cloud-backed curriculum mapping tool.

## ✨ Key Features

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

## 🛣 Roadmap to v0.3 & Beyond

Subjects2Skills has transitioned from a conceptual framework (v0.1) to a fully dynamic data platform (v0.2).

*   **v0.1 (Completed):** Structural alignment, prototyping, NCF-SE 2023 compliance auditing, and granular UI mapping.
*   **v0.2 (Completed):** Firebase/Firestore backend integration, full CBSE syllabus data ingestion, role-based authentication, strict security rules, and curriculum versioning.
*   **v0.3 (In Progress):** Personalized teacher dashboards, interactive lesson plan builders, and AI-assisted activity generation using the Gemini API.

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
