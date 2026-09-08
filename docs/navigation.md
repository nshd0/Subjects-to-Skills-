# Navigation Structure

This document outlines the principles and grouped structure of the application's navigation. 

## Design Principles
1. **Limit Top-Level Items**: 
   - Desktop displays 7–8 primary groups to avoid cognitive overload.
   - Tablet and Mobile emphasize 5–6 high-priority tools and group the rest under "More".
2. **Group by User Intent**: Links are organized into specific functional verbs (e.g., *Teach & Plan*, *Assess*).
3. **Teacher-Friendly Labels**: Simplified jargon (e.g., "Grades" over "Dashboard").
4. **Progressive Disclosure**: Advanced features are available via intuitive drop-down menus or sub-lists.

## Navigation Groups

### Desktop (`xl:flex`)
- **Home** (`/`)
- **Grades**: Dashboard + key anchor grades (e.g., Grade 3, 6, 9, 11).
- **Stages**: Foundational, Preparatory, Middle, Secondary.
- **Teach & Plan**: Classroom Activities, Planner (v0.4), Assessment Mapper (v0.4), Skill Pathways (v0.4).
- **Assess**: Assessment Hub, Skills Progression.
- **Resources**: Teacher Resources, Teacher Toolkit, School Implementation Planner.
- **Roadmap** (`/roadmap`)
- **About**: About & Principles, Pedagogical Framework, Changelog, Audit & Status, Baseline Audit.

### Tablet (`md:flex xl:hidden`)
- Identical core links (Home, Grades, Stages, Teach & Plan, Assess).
- Replaces individual trailing items with a single **More** drop-down containing *Resources*, *Roadmap*, and *About* links to accommodate smaller horizontal viewports.

### Mobile (`md:hidden`)
- A clean, vertical, scrollable drawer enforcing the `min-h-[44px]` touch-target accessibility rule.
- Direct prominent links for *Home*, *Explore by Grade*, *Classroom Activities*, *Planner*, and *Assessment Hub*.
- Secondary items are progressively disclosed under simple section headers (*Stages*, *More*).
