# CBSE Skill-Centred Learning Navigator 🎓

A public educational web application that presents a complete skill-centred curriculum framework mapped to existing CBSE subjects. This project demonstrates how knowledge domains (subjects) can be reorganized around skill development and pedagogical stages, rather than rote memorisation.

## ✨ Features

*   **Stage-Based Navigation:** Explore curriculum tailored to specific developmental stages (Foundational, Preparatory, Middle, Secondary).
*   **Interactive Curriculum Mapping:** Detailed mapping of existing CBSE subjects to core skills, pedagogical modes, classroom activities, and assessment evidence.
*   **Inclusive Learning Paths:** Differentiated strategies catering to Visual, Auditory, Kinesthetic, Support Needs, and Advanced Pacing learners.
*   **Skill Progression Matrix:** A comprehensive view of how core competencies (Communication, Critical Thinking, etc.) evolve from Grade 1 through Grade 12.
*   **Teacher Toolkit:** Practical resources and copy-to-clipboard unit planning templates for educators.
*   **Modern UI/UX:** Responsive, mobile-first design with beautiful editorial illustrations, fluid transitions, and a built-in Dark/Light mode toggle.

## 🛠 Tech Stack

*   **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Components:** Custom UI components built with [Radix UI](https://www.radix-ui.com/) primitives
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cbse-learning-navigator.git
    cd cbse-learning-navigator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:3000` (or the port specified in your terminal) to view the app in the browser.

### Building for Production

To create a production-ready build:
```bash
npm run build
```
This will generate optimized static files in the `dist` directory.

## 📁 Project Structure

```text
├── src/
│   ├── assets/        # Generated editorial illustrations
│   ├── components/    # Reusable UI components (Buttons, Cards, Accordions, Layout)
│   ├── contexts/      # React contexts (ThemeContext, ProgressContext)
│   ├── data/          # Core curriculum data, subject mappings, and inclusive paths
│   ├── pages/         # Route components (Home, StagePage, SkillProgression, etc.)
│   ├── lib/           # Utility functions (Tailwind class merging)
│   ├── App.tsx        # Main application routing
│   └── main.tsx       # React entry point
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## 📚 Educational Framework Outline

The navigator is structured around four key pedagogical stages:
1.  **Foundational Stage** (Ages 3–8): Rooted in play, activity, stories, movement, exploration, and socio-emotional development.
2.  **Preparatory Stage** (Ages 8–11): Gradually introduces clearer subject structures while keeping learning experiential and discovery-based.
3.  **Middle Stage** (Ages 11–14): Strengthens explicit subject learning through inquiry, experimentation, and real-world application.
4.  **Secondary Stage** (Ages 14–18): Deepens disciplinary knowledge, analysis, and specialization across two phases (Grades 9-10 and 11-12).

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
