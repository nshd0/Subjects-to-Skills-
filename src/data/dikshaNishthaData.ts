import { DikshaNishthaCourse, TeacherPDRecord } from '@/types';

export const DIKSHA_NISHTHA_COURSES: DikshaNishthaCourse[] = [
  {
    id: 'course-fln-01',
    themeOrSkillId: 'fln-play-numeracy',
    courseCode: 'NISHTHA-FLN-03',
    courseTitle: 'Toy-Based & Experiential Pedagogy for Foundational Literacy and Numeracy',
    nishthaPhase: 'NISHTHA 3.0 (FLN)',
    moduleNumber: 3,
    pdHoursAccredited: 4,
    directLink: 'https://diksha.gov.in/explore-course/course/do_3133827189182300161421',
    description: 'Alignment with NCF-FS Joyful Mathematics and regional language folk rhymes (Nali Kali, Ennum Ezhuthum, Mission Buniyaad).'
  },
  {
    id: 'course-elem-02',
    themeOrSkillId: 'watershed-topography',
    courseCode: 'NISHTHA-ELEM-06',
    courseTitle: 'Pedagogy of Environmental Studies & Interdisciplinary Middle Science',
    nishthaPhase: 'NISHTHA 1.0 (Elementary)',
    moduleNumber: 6,
    pdHoursAccredited: 5,
    directLink: 'https://diksha.gov.in/explore-course/course/do_3131725450849812481358',
    description: 'Integrates local water catchment management, watershed topography, and hands-on soil bio-indicator experimentation.'
  },
  {
    id: 'course-sec-03',
    themeOrSkillId: 'ai-data-ethics',
    courseCode: 'NISHTHA-SEC-11',
    courseTitle: 'Information and Communication Technology (ICT) in Teaching-Learning & Assessment',
    nishthaPhase: 'NISHTHA 2.0 (Secondary)',
    moduleNumber: 11,
    pdHoursAccredited: 6,
    directLink: 'https://diksha.gov.in/explore-course/course/do_3133981273912839211394',
    description: 'Covers AI ethics, algorithmic bias investigations, and collaborative spreadsheet data handling in Grades 9–12.'
  },
  {
    id: 'course-ecce-04',
    themeOrSkillId: 'ecce-sensory-play',
    courseCode: 'NISHTHA-ECCE-02',
    courseTitle: 'Play-Based Early Childhood Care & Education Environments',
    nishthaPhase: 'NISHTHA 4.0 (ECCE)',
    moduleNumber: 2,
    pdHoursAccredited: 4,
    directLink: 'https://diksha.gov.in/explore-course/course/do_3135891238491829101823',
    description: 'Pre-school sensory play kits, gross motor rhythm coordination, and nature exploration in Balvatika.'
  }
];

export const INITIAL_TEACHER_PD_LOG: TeacherPDRecord[] = [
  {
    id: 'pd-01',
    activityType: 'bundle-creation',
    title: 'Authored Living Watersheds Multidisciplinary Theme Bundle',
    hours: 5,
    date: '2026-09-02',
    verified: true,
    certificateRef: 'S2S-PD-2026-0812'
  },
  {
    id: 'pd-02',
    activityType: 'resource-creation',
    title: 'Developed Bio-Indicator Field Worksheet with Answer Key',
    hours: 3,
    date: '2026-09-10',
    verified: true,
    certificateRef: 'S2S-PD-2026-0894'
  },
  {
    id: 'pd-03',
    activityType: 'peer-review',
    title: 'Conducted Double Peer Audit on 2 State Board Alignments',
    hours: 4,
    date: '2026-09-18',
    verified: true,
    certificateRef: 'S2S-PD-2026-0941'
  },
  {
    id: 'pd-04',
    activityType: 'nishtha-module',
    title: 'Completed NISHTHA 1.0 Module 6 (Interdisciplinary Science)',
    hours: 5,
    date: '2026-09-22',
    verified: true,
    certificateRef: 'DIKSHA-CERT-94021'
  }
];
