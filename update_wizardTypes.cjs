const fs = require('fs');
let code = fs.readFileSync('src/features/planning/wizardTypes.ts', 'utf8');
code += `
export interface Comment {
  id: string;
  authorId: string;
  text: string;
  createdAt: number;
}

export interface IntegratedUnit {
  id: string;
  gradeId: string;
  title: string;
  description: string;
  subjectIds: string[]; // 2+
  skillIds: string[]; // drawn from contributing subjects
  leadTeacherId: string;
  collaboratorIds: string[];
  status: "draft" | "in-review" | "ready" | "archived";
  bloomsFocus: string[];
  varkActivities: { visual?: WizardActivity; auditory?: WizardActivity; readWrite?: WizardActivity; kinesthetic?: WizardActivity; };
  timeline: LessonBlock[];
  assessmentId?: string;
  comments: Comment[];
  createdAt: number;
  updatedAt: number;
}
`;
fs.writeFileSync('src/features/planning/wizardTypes.ts', code);
