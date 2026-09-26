import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  Layers, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  FileText, 
  Printer, 
  PieChart, 
  BarChart3, 
  Compass, 
  CheckCircle2, 
  AlertCircle,
  School,
  MapPin,
  Sparkles,
  Info
} from 'lucide-react';
import { MOCK_SCHOOL_METRICS, MOCK_DISTRICT_METRICS } from '@/data/schoolDistrictData';

export function SchoolDistrictDashboards() {
  const [activeTab, setActiveTab] = useState<'school' | 'district'>('school');
  const [isOptedIn, setIsOptedIn] = useState<boolean>(MOCK_SCHOOL_METRICS.isOptedIn);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);
  const [schoolData, setSchoolData] = useState(MOCK_SCHOOL_METRICS);
  const [districtData, setDistrictData] = useState(MOCK_DISTRICT_METRICS);

  const handleToggleOptIn = () => {
    setIsOptedIn(prev => !prev);
  };

  const handleExportReport = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Institutional Implementation Suite
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> DPDP Act 2023 Compliant · Anonymized
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <School className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                School & District Implementation Dashboards
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Empowering headteachers, curriculum coordinators, and block education officers (BEOs) with actionable analytics on competency adoption, lesson co-planning, and resource adaptation.
              </p>
            </div>

            {/* Privacy Opt-in Status & Export */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  School Privacy Status
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <Info className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleToggleOptIn}
                    className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      isOptedIn
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {isOptedIn ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                    {isOptedIn ? 'Opted-In (Anonymized Aggregate)' : 'Opted-Out (Private Only)'}
                  </button>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

              <button
                type="button"
                onClick={handleExportReport}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors shrink-0"
              >
                <Printer className="w-4 h-4" /> Export SMC Report
              </button>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('school')}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'school'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Building2 className="w-4 h-4" />
              School Leadership Dashboard
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('district')}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === 'district'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Compass className="w-4 h-4" />
              District & Block Education Office (BEO)
            </button>
          </div>
        </div>

        {/* TAB 1: SCHOOL LEADERSHIP DASHBOARD */}
        {activeTab === 'school' && (
          <div className="space-y-6">

            {/* Top Stat KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Active Educators
                </span>
                <div className="text-3xl font-black text-slate-900 dark:text-white flex items-baseline gap-2">
                  <span>{schoolData.activeTeachers}</span>
                  <span className="text-xs text-slate-400 font-normal">/ {schoolData.totalTeachers} teachers</span>
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> 67.6% staff adoption rate
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Lessons & Units Planned
                </span>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {schoolData.plannedLessonsCount}
                </div>
                <div className="text-[11px] text-slate-500">
                  Across 13 grades (Pre-K to 12)
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Resources Cloned & Adapted
                </span>
                <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
                  {schoolData.resourcesClonedCount}
                </div>
                <div className="text-[11px] text-slate-500">
                  Worksheets, slide decks & kits
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Competency Coverage Rate
                </span>
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 flex items-baseline gap-1">
                  <span>{schoolData.competencyCoveragePercent}%</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  Target: 80% for academic year
                </div>
              </div>
            </div>

            {/* School Demographics & Distributions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Subject Activity Breakdown */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                    Teacher Planning Activity by Subject
                  </h3>
                  <span className="text-xs text-slate-400">Past 30 Days</span>
                </div>

                <div className="space-y-4">
                  {schoolData.subjectActivity.map((sub) => {
                    const maxVal = 120;
                    const pct = (sub.count / maxVal) * 100;
                    return (
                      <div key={sub.subject} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-slate-800 dark:text-slate-200">{sub.subject}</span>
                          <span className="text-slate-500">{sub.count} lessons</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Grade Band Activity Breakdown */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-emerald-600" />
                    Most Active Grade Cohorts
                  </h3>
                  <span className="text-xs text-slate-400">NCF Stages</span>
                </div>

                <div className="space-y-4">
                  {schoolData.gradeActivity.map((g) => {
                    const maxVal = 100;
                    const pct = (g.count / maxVal) * 100;
                    return (
                      <div key={g.grade} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-slate-800 dark:text-slate-200">{g.grade}</span>
                          <span className="text-slate-500">{g.count} units planned</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Most Cloned Resources Section */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Most Cloned Themes & Resources in Your School
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 uppercase">
                    Theme Bundle
                  </span>
                  <div className="font-bold text-slate-900 dark:text-white">Living Watersheds & Water Security</div>
                  <p className="text-slate-500 text-[11px]">Cloned by 18 teachers · 86 students impacted</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 uppercase">
                    Worksheet
                  </span>
                  <div className="font-bold text-slate-900 dark:text-white">Watershed Elevation & Bio-Indicators</div>
                  <p className="text-slate-500 text-[11px]">Printed 420 copies across Grades 7 & 8</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase">
                    Exit Ticket
                  </span>
                  <div className="font-bold text-slate-900 dark:text-white">5-Min Chemical Reaction Check</div>
                  <p className="text-slate-500 text-[11px]">Utilized weekly by 6 science educators</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: DISTRICT & BLOCK DASHBOARD */}
        {activeTab === 'district' && (
          <div className="space-y-6">

            {/* District KPI Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Participating Schools
                </span>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {districtData.totalSchools}
                </div>
                <div className="text-[11px] text-slate-500">
                  {districtData.urbanRuralSplit.urbanCount} Urban · {districtData.urbanRuralSplit.ruralCount} Rural Clusters
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Educator Cohort
                </span>
                <div className="text-3xl font-black text-slate-900 dark:text-white">
                  {districtData.totalTeachers.toLocaleString()}
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  Across 8 educational blocks
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Cluster Coverage Rate
                </span>
                <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
                  {districtData.clusterCoverageRate}%
                </div>
                <div className="text-[11px] text-slate-500">
                  SCERT learning standards mapped
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  District Performance Tier
                </span>
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <Award className="w-8 h-8 text-amber-500" />
                  Tier 1
                </div>
                <div className="text-[11px] text-slate-500">
                  Top 5% statewide for NCF adoption
                </div>
              </div>
            </div>

            {/* District Learning Goals Progress */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  District-Level Learning Goals Alignment Index
                </h3>
                <span className="text-xs text-slate-400">Academic Year 2025–26 Milestones</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {districtData.goalProgress.map((goal) => {
                  const isAchieved = goal.currentPercent >= goal.targetPercent;
                  return (
                    <div key={goal.goalId} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">{goal.title}</span>
                        <span className="text-slate-400 text-[10px]">{goal.alignedSubject}</span>
                      </div>
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-indigo-600 dark:text-indigo-400">Current: {goal.currentPercent}%</span>
                        <span className="text-slate-400">Target: {goal.targetPercent}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isAchieved ? 'bg-emerald-500' : 'bg-indigo-600'
                          }`}
                          style={{ width: `${(goal.currentPercent / goal.targetPercent) * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* High Performing Educators Leaderboard */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    District High-Impact Educator Showcase
                  </h3>
                  <p className="text-xs text-slate-500">
                    Recognizing teachers whose open curriculum bundles and worksheets are widely adopted across district schools.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                {districtData.topTeachers.map((teacher) => (
                  <div key={teacher.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                        {teacher.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">{teacher.name}</div>
                        <div className="text-[10px] text-slate-400">{teacher.school}</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Adoptions:</span>
                        <strong className="text-indigo-600 dark:text-indigo-400">{teacher.resourcesAdopted}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Teacher Rating:</span>
                        <strong className="text-amber-500">{teacher.averageRating} ★</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* PRIVACY MODAL */}
        {isPrivacyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Educator Privacy & DPDP Act 2023 Compliance
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Subjects2Skills operates on a strict <strong>anonymization-by-default</strong> model. Individual teacher lesson plans and performance metrics are never exposed to external evaluators without explicit opt-in.
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>All district-level reports aggregate data at the cluster or school cohort level.</li>
                <li>Teacher names in leaderboards appear strictly for published, CC BY-SA 4.0 public contributions.</li>
                <li>School principals retain full autonomy to toggle public analytics participation at any time.</li>
              </ul>
              <button
                type="button"
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-full py-2 bg-indigo-600 text-white rounded-xl font-bold"
              >
                Understood & Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
