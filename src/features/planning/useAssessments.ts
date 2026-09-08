import { useState, useEffect } from 'react';
import { AssessmentTask, SkillRubric } from '@/types';
import { assessmentTasks, skillRubrics } from '@/data/assessments';

export function useAssessmentsForSkill(gradeId: string | null, skillId: string | null) {
  const [tasks, setTasks] = useState<AssessmentTask[]>([]);
  const [rubric, setRubric] = useState<SkillRubric | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (gradeId && skillId) {
      const filteredTasks = assessmentTasks.filter(
        t => t.gradeId === gradeId && t.skillId === skillId
      );
      const filteredRubric = skillRubrics.find(
        r => r.gradeId === gradeId && r.skillId === skillId
      ) || null;
      setTasks(filteredTasks);
      setRubric(filteredRubric);
    } else {
      setTasks([]);
      setRubric(null);
    }
    setLoading(false);
  }, [gradeId, skillId]);

  return { tasks, rubric, loading };
}

export function useAllSkillsForGrade(gradeId: string | null) {
  const [skills, setSkills] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    if (!gradeId) {
      setSkills([]);
      return;
    }

    // Derive unique skills from the mock assessment tasks for the selected grade
    const tasksForGrade = assessmentTasks.filter(t => t.gradeId === gradeId);
    const uniqueSkillIds = Array.from(new Set(tasksForGrade.map(t => t.skillId)));

    const formattedSkills = uniqueSkillIds.map(id => ({
      id,
      name: id
    }));

    setSkills(formattedSkills);
  }, [gradeId]);

  return { skills };
}
