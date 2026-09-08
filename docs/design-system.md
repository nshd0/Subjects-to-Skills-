# Subjects2Skills: Visual Design System Specification (v0.3 → v0.4)

**Version:** 1.0 (v0.4 Preparation Release)  
**Target Platform:** React 18, Vite, Tailwind CSS, TypeScript  
**Design Principle:** Clean, accessible, high-contrast, editorial ed-tech craft tailored for Indian K–12 educators, curriculum designers, and school leaders.

---

## 1. Color Palette

The color system uses an authoritative indigo primary brand color, supported by purposeful semantic accents and a neutral slate gray scale.

### 1.1 Brand & Neutral Foundation

| Token Name | Hex Code | Tailwind Utility | Semantic Role |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | `#4f46e5` | `indigo-600` | Primary buttons, active navigation, key icons, hero accents |
| **Primary Dark** | `#3730a3` | `indigo-800` | Header gradients, high-contrast dark accents |
| **Primary Deep** | `#1e1b4b` | `indigo-950` | Hero background banners, print dark accents |
| **Primary Tint** | `#eef2ff` | `indigo-50` | Active tab backgrounds, highlight tags, light badge fills |
| **Primary Border**| `#c7d2fe` | `indigo-200` | Active focus rings, selected card borders |
| **Slate 950** | `#020617` | `slate-950` | Dark mode canvas background, high-contrast headings |
| **Slate 900** | `#0f172a` | `slate-900` | Primary text in light mode; card background in dark mode |
| **Slate 800** | `#1e293b` | `slate-800` | Dark mode container borders, subtle dark surfaces |
| **Slate 600** | `#475569` | `slate-600` | Secondary body text, descriptions, metadata labels |
| **Slate 400** | `#94a3b8` | `slate-400` | Icon fills, disabled elements, tertiary labels |
| **Slate 200** | `#e2e8f0` | `slate-200` | Light mode card borders, subtle horizontal dividers |
| **Slate 100** | `#f1f5f9` | `slate-100` | Table headers, secondary button background |
| **Slate 50** | `#f8fafc` | `slate-50` | Light mode page canvas background |

### 1.2 Stage Color Accents (NCF 5+3+3+4)

Each pedagogical stage has a dedicated visual identity for rapid scanning:

- **Foundational Stage (Ages 3–8 / Pre-K–2):**  
  *Warm Rose / Amber* (`rose-600` / `#e11d48`, `amber-500` / `#f59e0b`). Reflects sensory play, curiosity, warmth.
- **Preparatory Stage (Ages 8–11 / Grades 3–5):**  
  *Teal / Emerald* (`teal-600` / `#0d9488`, `emerald-600` / `#059669`). Reflects discovery, concrete growth, nature exploration.
- **Middle Stage (Ages 11–14 / Grades 6–8):**  
  *Indigo / Sky* (`indigo-600` / `#4f46e5`, `sky-600` / `#0284c7`). Reflects analytical inquiry, experimentation, logic.
- **Secondary Stage (Ages 14–18 / Grades 9–12):**  
  *Purple / Violet* (`purple-600` / `#9333ea`, `violet-600` / `#7c3aed`). Reflects disciplinary depth, research, academic synthesis.

### 1.3 Content Maturity & Status Badges

| Maturity Status | Badge Background | Badge Text | Border | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Published** | `emerald-50` (`#ecfdf5`) | `emerald-700` (`#047857`) | `emerald-200` | Full mapping, activities, rubrics verified |
| **Reviewed** | `teal-50` (`#f0fdfa`) | `teal-700` (`#0f766e`) | `teal-200` | Reviewed by educators; ready for pilots |
| **Teacher Pilot** | `amber-50` (`#fffbeb`) | `amber-800` (`#92400e`) | `amber-200` | Active live classroom trials |
| **In Development / Anchor** | `blue-50` (`#eff6ff`) | `blue-700` (`#1d4ed8`) | `blue-200` | Scaffolded; activities currently drafting |
| **Needs Update** | `rose-50` (`#fff1f2`) | `rose-700` (`#be123c`) | `rose-200` | Undergoing NCF alignment revision |
| **Planned** | `slate-100` (`#f1f5f9`) | `slate-700` (`#334155`) | `slate-200` | Scoped on public roadmap |

### 1.4 Rubric Assessment Tiers (4-Tier Competency Model)

- **Tier 1: Emerging** → Warm Amber (`bg-amber-50 text-amber-900 border-amber-200`)
- **Tier 2: Developing** → Calibrated Blue (`bg-blue-50 text-blue-900 border-blue-200`)
- **Tier 3: Proficient** → Robust Emerald (`bg-emerald-50 text-emerald-900 border-emerald-200`)
- **Tier 4: Transfer / Advanced** → Deep Purple (`bg-purple-50 text-purple-900 border-purple-200`)

---

## 2. Typography Scale & Hierarchy

The application pairs a legible sans-serif system stack (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`) with strict mathematical step ratios.

| Level | Size (rem / px) | Weight | Line Height | Tracking | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `2.5rem–3.5rem` (40–56px) | 800 (Extrabold) | 1.15 | `-0.025em` | Hero section main headlines |
| **H1** | `2rem–2.5rem` (32–40px) | 800 (Extrabold) | 1.2 | `-0.02em` | Page primary titles (e.g. Grade profiles, Roadmap) |
| **H2** | `1.5rem–1.75rem` (24–28px) | 700 (Bold) | 1.3 | `-0.015em` | Major section headers (Overview, Pedagogy) |
| **H3** | `1.125rem–1.25rem` (18–20px) | 700 (Bold) | 1.4 | `-0.01em` | Card titles, subsection headings |
| **Body (Default)** | `1rem` (16px) | 400 (Regular) | 1.6 | `normal` | Paragraphs, lesson steps, pedagogical notes |
| **Body Medium** | `1rem` (16px) | 500 (Medium) | 1.6 | `normal` | Emphasized body text, introductions |
| **Small** | `0.875rem` (14px) | 500 (Medium) | 1.5 | `normal` | Card descriptions, metadata, button text |
| **Caption / Micro** | `0.75rem` (12px) | 600 (Semibold) | 1.4 | `+0.02em` | Status badges, category pills, stage indicators |
| **Code / Monospace**| `0.6875rem–0.75rem` (11–12px) | 600 (Semibold) | 1.4 | `mono` | Competency IDs (`SCI-6.3`), skill codes |

---

## 3. Spacing & Grid System

Consistent 4px/8px modular rhythm:

- **Component spacing:** `4px` (`gap-1`), `8px` (`gap-2`), `12px` (`gap-3`), `16px` (`gap-4`), `24px` (`gap-6`), `32px` (`gap-8`).
- **Section padding:**
  - Compact sections: `py-8 sm:py-12`
  - Major page sections: `py-12 sm:py-16`
  - Page container max widths: `max-w-6xl` (1152px) for dashboards/navigators; `max-w-5xl` (1024px) for reading-focused grade profiles.
- **Touch Targets:** Minimum 44px height and width (`min-h-[44px]`) on interactive buttons, links, and pagination tabs for touch accessibility.

---

## 4. Radius, Shadows & Depth

To prevent visual clutter, container borders are maintained at 1px light slate with mathematically nested radii:

- **Outer Cards & Containers:** `rounded-2xl` (16px)
- **Inner Cards & Step Blocks:** `rounded-xl` (12px)
- **Buttons, Inputs & Interactive Selectors:** `rounded-xl` (12px)
- **Status Badges, Chips & Pills:** `rounded-full` (9999px) or `rounded-md` (6px)
- **Shadow Scale:**
  - Resting Card: `shadow-xs` (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`)
  - Elevated Card / Hover: `shadow-md` (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)`)
  - Floating Modals / Dropdowns: `shadow-xl` (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)`)

---

## 5. Component Patterns

- **Grade Card:** Top row (Grade + age + stage) → Middle (Priority skills as tagged pills) → Bottom (Status badge + Action arrow).
- **Unit Card:** Grade & duration header → Thematic title → Essential questions → Competency tags → Interactive selector.
- **Lesson Row:** Sequential badge (`L1`, `L2`) → Title & duration → Phased instructional steps (`Warm-up`, `Inquiry`, `Hands-on`, `Reflection`) → Formative hint callout.
- **Rubric Table:** 4-column matrix with color-coded tier headers (`Emerging`, `Developing`, `Proficient`, `Transfer`), subtle row striping, and clear criteria definitions.
- **Timeline:** Connected vertical or horizontal phase progression cards with clear live indicator pulse for active releases.

---

## 6. Visual Regression Pass & Verification (v0.3 → v0.4)

A comprehensive audit was executed across all user-facing layouts to guarantee design system adherence:

- **Homepage (`/`)**:
  - Hero action buttons upgraded with `min-h-[44px]` and distinct focus rings (`focus:ring-2 focus:ring-indigo-500`).
  - Stage selection cards updated with stage-specific accent top borders (`rose-500`, `teal-500`, `indigo-500`, `purple-500`).
  - "Rhythm of Learning" and "How the Journey Works" cards padded to uniform `p-6 rounded-2xl` with step badges passing WCAG AA contrast.
  - Future scope banner standardized to `rounded-2xl` with high-contrast accessible buttons.
- **Grade Navigator (`/grades`)**:
  - Filter pills updated with `min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden`.
  - Grade cards standardize top metadata, priority skill chips, and anchor indicators.
- **Grade Profiles (`/grade/:id`)**:
  - Progression navigator links align symmetrically on desktop and mobile (`min-h-[44px]`).
  - Section containers, priority skill chips, and teacher feedback buttons meet touch target and contrast rules.
- **Content Roadmap (`/roadmap`)**:
  - Phase filter tabs updated to `min-h-[44px]` with high-contrast active states.
  - Timeline cards feature unified key deliverables checklist styling and status indicators.
  - Desktop progression table and mobile stacked cards adapt fluidly with no horizontal page scroll.
- **v0.4 Scaffolding Pages (`/planner`, `/assessment-mapper`, `/pathways`)**:
  - Header banners, quick links, unit selectors, rubric matrices, and context footers now follow unified `rounded-2xl` outer / `rounded-xl` inner tokens.

---

## 7. Known Visual Limitations & Planned Enhancements (v0.4 TODOs)

The following items are intentionally deferred for upcoming sub-releases:

1. **Interactive Drag-and-Drop Reordering**: Visual drag handles in the Unit Planner (`/planner`) will be animated using accessible keyboard-sortable libraries in v0.4.1.
2. **Dynamic Canvas Graph Visualization**: Longitudinal skill pathway trees (`/pathways`) currently render as responsive multi-stage cards; a node-link visual graph using D3/SVG will be introduced in v0.4.3.
3. **High-Contrast Print Stylesheets**: While `@media print` rules hide navigational chrome and footers, dedicated monochrome line-art print templates for lesson plans and rubrics are slated for v0.4.4.
4. **Localization Text Wrapping**: When Indian regional languages (Hindi, Tamil, Marathi) are introduced in v0.5, typography line-heights and button paddings will dynamically scale to accommodate non-Latin script ascenders/descenders.

