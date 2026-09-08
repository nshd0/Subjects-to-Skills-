# Planning Module (v0.4.1)

The Planning Module provides a structured space for teachers to design and manage competency-based units and lessons, acting as the foundation for the upcoming v0.4 release.

## Directory Structure
`/src/features/planning/`
- `storage.ts`: pure functions handling `localStorage` persistence (safe parsing/stringifying).
- `useUnits.ts`: React hooks integrating sample unit data and custom saved units (`useUnitsForGrade`, `useCreateUnit`).
- `useLessons.ts`: React hooks for fetching and managing lessons attached to a unit.
- `components/`: Modular UI components matching the design system (`CreateUnitForm.tsx`, `UnitDetailPanel.tsx`).
- `pages/`: Page containers handling component composition and route definitions.
- `routes.tsx`: Standardized route exports that can be injected seamlessly into `/src/App.tsx`.

## Key Hooks
- `useUnitsForGrade(gradeId)`: Returns an array of `Unit` objects, dynamically combining read-only sample units (from `data/units.ts`) and mutable custom units (from local storage).
- `useCreateUnit()`: Saves a new unit to local storage and dispatches a lightweight custom event (`planner_units_changed`) to re-trigger reactivity across components without heavy global state libraries.
- `useLessonsForUnit(unitId)`: Initially extracts embedded lesson objects from parent units. Leaves hooks clear for future independent CRUD lifecycle management.

## Storage Schema
**Keys:**
- `planner_custom_units`: Array of `Unit` objects.

**Unit Data Shape:**
```typescript
interface Unit {
  id: string;
  gradeId: string;
  title: string;
  durationWeeks: number;
  description: string;
  targetSkillIds: string[];
  learningAreas: string[];
  status: "draft" | "published" | "archived";
  lessons?: Lesson[];
}
```

## Extensibility for v0.4.2 & v0.4.3
This module was explicitly designed to keep the stable v0.3 pedagogical application untouched while creating extensible spaces for upcoming tools.

1. **v0.4.2 (Assessments)**: Stubs are in place at `/src/features/planning/pages/AssessmentMapperPage.tsx`. As assessment schemas expand in `/src/types.ts`, they can be introduced safely inside `useUnits.ts` or a new `useAssessments.ts`.
2. **v0.4.3 (Skill Pathways)**: Stubbed at `/src/features/planning/pages/SkillPathwaysPage.tsx`. Cross-grade visual graphs can be implemented within this isolated page container.
