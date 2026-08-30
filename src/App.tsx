/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { StagePage } from './pages/StagePage';
import { SkillProgression } from './pages/SkillProgression';
import { TeacherToolkit } from './pages/TeacherToolkit';
import { About } from './pages/About';
import { Roadmap } from './pages/Roadmap';
import { AuditReport } from './pages/AuditReport';
import { AdminDashboard } from './pages/AdminDashboard';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="stage/:stageId" element={<StagePage />} />
                <Route path="skill-progression" element={<SkillProgression />} />
                <Route path="toolkit" element={<TeacherToolkit />} />
                <Route path="about" element={<About />} />
                <Route path="roadmap" element={<Roadmap />} />
                <Route path="audit" element={<AuditReport />} />
                <Route path="admin" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
