import { SchoolMetrics, DistrictMetrics } from '@/types';

export const MOCK_SCHOOL_METRICS: SchoolMetrics = {
  schoolId: 'sch-delhi-042',
  schoolName: 'Sarvodaya Co-ed Vidyalaya, Sector 7, Rohini',
  district: 'North West Delhi',
  state: 'Delhi (SCERT Delhi / DBSE)',
  totalTeachers: 68,
  activeTeachers: 46,
  plannedLessonsCount: 312,
  resourcesClonedCount: 184,
  subjectActivity: [
    { subject: 'General Science', count: 114 },
    { subject: 'Mathematics', count: 98 },
    { subject: 'Social Science', count: 62 },
    { subject: 'Language & FLN', count: 38 }
  ],
  gradeActivity: [
    { grade: 'Grade 8', count: 88 },
    { grade: 'Grade 7', count: 74 },
    { grade: 'Grade 6', count: 62 },
    { grade: 'Grade 9', count: 48 },
    { grade: 'Grade 10', count: 40 }
  ],
  competencyCoveragePercent: 84.5,
  isOptedIn: true
};

export const MOCK_DISTRICT_METRICS: DistrictMetrics = {
  districtId: 'dist-delhi-nw',
  districtName: 'North West Education District',
  state: 'Delhi (DoE / SCERT Delhi)',
  totalSchools: 124,
  totalTeachers: 2840,
  clusterCoverageRate: 78.2,
  urbanRuralSplit: {
    urbanCount: 88,
    ruralCount: 36
  },
  topTeachers: [
    {
      id: 'teach-1',
      name: 'Priya Sharma (PGT Biology)',
      school: 'Sarvodaya Kanya Vidyalaya No. 1',
      resourcesAdopted: 1420,
      averageRating: 4.9,
      verifiedBadgesCount: 8
    },
    {
      id: 'teach-2',
      name: 'Rajesh Meena (TGT Math)',
      school: 'Government Boys Senior Secondary School',
      resourcesAdopted: 1180,
      averageRating: 4.8,
      verifiedBadgesCount: 6
    },
    {
      id: 'teach-3',
      name: 'Sunita Rawat (Primary FLN Lead)',
      school: 'MCD Primary Model School',
      resourcesAdopted: 940,
      averageRating: 5.0,
      verifiedBadgesCount: 9
    },
    {
      id: 'teach-4',
      name: 'Vikramjit Singh (Science Mentor)',
      school: 'Dr. B.R. Ambedkar School of Specialized Excellence',
      resourcesAdopted: 890,
      averageRating: 4.9,
      verifiedBadgesCount: 7
    }
  ],
  goalProgress: [
    {
      goalId: 'dg-1',
      title: 'Middle Stage Science Inquiry & Hands-On Experimentation',
      targetPercent: 85,
      currentPercent: 81.4,
      alignedSubject: 'General Science'
    },
    {
      goalId: 'dg-2',
      title: 'Foundational Numeracy & Mathematical Reasoning Mastery',
      targetPercent: 90,
      currentPercent: 86.8,
      alignedSubject: 'Mathematics'
    },
    {
      goalId: 'dg-3',
      title: 'Interdisciplinary Climate & Environmental Awareness',
      targetPercent: 75,
      currentPercent: 73.5,
      alignedSubject: 'Social Science & EVS'
    },
    {
      goalId: 'dg-4',
      title: 'Inclusive Classroom Differentiation & UDL Adaptation Rate',
      targetPercent: 80,
      currentPercent: 79.2,
      alignedSubject: 'Cross-Disciplinary'
    }
  ]
};
