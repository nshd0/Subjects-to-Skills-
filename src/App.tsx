/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { AuthProvider } from './contexts/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/Layout';
import { TeacherResourceHub } from './pages/TeacherResourceHub';
import { Home } from './pages/Home';
import { StagePage } from './pages/StagePage';
import { GradePage } from './pages/GradePage';
import { SkillProgression } from './pages/SkillProgression';
import { TeacherToolkit } from './pages/TeacherToolkit';
import { About } from './pages/About';
import { Roadmap } from './pages/Roadmap';
import { AuditReport } from './pages/AuditReport';
import { AuditReportV0_3 } from './pages/AuditReportV0_3';
import { AuditStatusV0_3 } from './pages/AuditStatusV0_3';
import { AdminDashboard } from './pages/AdminDashboard';
import { AreaCoverage } from './pages/AreaCoverage';
import { SchoolPlanner } from './pages/SchoolPlanner';
import { Changelog } from './pages/Changelog';
import { AboutFramework } from './pages/AboutFramework';
import { AboutContent } from './pages/AboutContent';
import { ExploreByGrade } from './pages/ExploreByGrade';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { AssessmentHub } from './pages/AssessmentHub';
import { NotFound } from './pages/NotFound';
import { Health } from './pages/Health';
import { PlannerRoute, AssessmentMapperRoute, SkillPathwaysRoute } from './features/planning/routes';
import { useAnalytics } from './hooks/useAnalytics';
import { CreateLessonPlanWizard } from './features/planning/components/CreateLessonPlanWizard';
import { CreateAssessmentWizard } from './features/planning/components/CreateAssessmentWizard';
import { Grade8Collaborate } from './features/planning/pages/Grade8Collaborate';
import { CreateIntegratedUnitWizard } from './features/planning/components/CreateIntegratedUnitWizard';
import { IntegratedUnitDetail } from './features/planning/pages/IntegratedUnitDetail';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SkillMapPage } from './pages/SkillMapPage';
import { FEATURES } from './config/features';

function AppContent() {
  useAnalytics();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="stage/:stageId" element={<StagePage />} />
        <Route path="grades" element={<ExploreByGrade />} />
        <Route path="grade/:gradeId" element={<GradePage />} />
        <Route path="grades/:gradeId" element={<GradePage />} />
        <Route path="skill-progression" element={<SkillProgression />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="assessment" element={<AssessmentHub />} />
        <Route path="toolkit" element={<TeacherToolkit />} />
        <Route path="resources" element={<TeacherResourceHub />} />
        <Route path="about" element={<About />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="audit" element={<AuditReport />} />
        <Route path="audit-v0-3" element={<AuditReportV0_3 />} />
        <Route path="audit-status" element={<AuditStatusV0_3 />} />
        <Route path="v0-3-audit" element={<AuditStatusV0_3 />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="coverage" element={<AreaCoverage />} />
        {/* v0.4 Planning Module Routes */}
        <Route path="planner" element={<PlannerRoute />} />
        {FEATURES.ENABLE_LESSON_PLAN_WIZARD && <Route path="plan/lesson/new" element={<CreateLessonPlanWizard />} />}
        {FEATURES.ENABLE_CROSS_SUBJECT_COLLAB && <Route path="grade/8/collaborate" element={<Grade8Collaborate />} />}
        {FEATURES.ENABLE_CROSS_SUBJECT_COLLAB && <Route path="plan/integrated/new" element={<CreateIntegratedUnitWizard />} />}
        {FEATURES.ENABLE_CROSS_SUBJECT_COLLAB && <Route path="plan/integrated/:id" element={<IntegratedUnitDetail />} />}
        <Route path="school-planner" element={<SchoolPlanner />} />
        <Route path="assess" element={<AssessmentMapperRoute />} />
        {FEATURES.ENABLE_ASSESSMENT_WIZARD && <Route path="assess/new" element={<CreateAssessmentWizard />} />}
        <Route path="assessment-mapper" element={<AssessmentMapperRoute />} />
        <Route path="pathways" element={<SkillPathwaysRoute />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="about-framework" element={<AboutFramework />} />
        <Route path="about-content" element={<AboutContent />} />
        <Route path="health" element={<Health />} />
        {FEATURES.ENABLE_HOW_IT_WORKS && <Route path="how-it-works" element={<HowItWorksPage />} />}
        {FEATURES.ENABLE_SKILL_VISUALS && <Route path="skill-map" element={<SkillMapPage />} />}
        {/* SPA 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <ProgressProvider>
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
