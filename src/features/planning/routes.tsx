import React from 'react';
import { PlannerPage } from './pages/PlannerPage';
import { AssessmentMapperPage } from './pages/AssessmentMapperPage';
import { SkillPathwaysPage } from './pages/SkillPathwaysPage';

export function PlannerRoute() {
  return <PlannerPage />;
}

export function AssessmentMapperRoute() {
  return <AssessmentMapperPage />;
}

export function SkillPathwaysRoute() {
  return <SkillPathwaysPage />;
}
