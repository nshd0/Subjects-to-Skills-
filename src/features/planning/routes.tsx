import React from 'react';
import { PlannerPage } from './pages/PlannerPage';
import { AssessmentMapperPage } from './pages/AssessmentMapperPage';
import { SkillPathwaysPage } from './pages/SkillPathwaysPage';
import { CustomRubricBuilderPage } from './pages/CustomRubricBuilderPage';
import { ThemeBundlesPage } from './pages/ThemeBundlesPage';

export function PlannerRoute() {
  return <PlannerPage />;
}

export function AssessmentMapperRoute() {
  return <AssessmentMapperPage />;
}

export function SkillPathwaysRoute() {
  return <SkillPathwaysPage />;
}

export function CustomRubricBuilderRoute() {
  return <CustomRubricBuilderPage />;
}

export function ThemeBundlesRoute() {
  return <ThemeBundlesPage />;
}

