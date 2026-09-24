import { useState, useEffect } from 'react';
import { CustomRubric, CustomRubricLevels } from '@/types';
import { safeStorage } from '@/lib/safeStorage';

const STORAGE_KEY = 'subjects2skills_custom_rubrics_v06';

export const DEFAULT_MATURITY_LEVELS: CustomRubricLevels = {
  emerging: {
    label: 'Emerging (Level 1)',
    descriptor: 'Recalls basic terminology with scaffolding; requires teacher guidance to execute foundational steps; struggles to apply concept independently.',
    points: 1
  },
  developing: {
    label: 'Developing (Level 2)',
    descriptor: 'Applies procedure correctly in routine, familiar contexts; identifies explicit errors when prompted; shows partial independence.',
    points: 2
  },
  proficient: {
    label: 'Proficient (Level 3 • Target Benchmark)',
    descriptor: 'Consistently executes competency with accuracy; justifies choices using sound subject practices; independently decomposes non-routine tasks.',
    points: 3
  },
  transfer: {
    label: 'Transfer (Level 4 • Synthesis & Extension)',
    descriptor: 'Generalizes competency to novel, cross-disciplinary scenarios; articulates edge-case limitations; coaches peers or creates original synthesis.',
    points: 4
  }
};

const SEED_CUSTOM_RUBRICS: CustomRubric[] = [
  {
    id: 'rubric-seed-ct-nested-flowcharts',
    title: 'Nested Conditionals & System Flowcharting Rubric',
    skillId: 'skill-ctai-g6-advanced-ct',
    skillName: 'Advanced CT: Nested Conditionals & Logical Flowcharts',
    gradeId: 'grade-6',
    subjectId: 'Computational Thinking & AI',
    unitTitle: 'School Governance Systems Modeling',
    levels: {
      emerging: {
        label: 'Emerging',
        descriptor: 'Draws sequential linear steps using basic rectangles; omits decision diamonds or leaves branch outcomes unlabeled.',
        points: 1
      },
      developing: {
        label: 'Developing',
        descriptor: 'Uses decision diamond notation for single binary conditions (Yes/No), but produces deadlock loops or leaves edge-case conditions untraced.',
        points: 2
      },
      proficient: {
        label: 'Proficient (CBSE Grade 6 Benchmark)',
        descriptor: 'Accurately structures multi-tier nested decision branches using ISO flowchart symbols; successfully traces 4 diverse test profiles through the system.',
        points: 3
      },
      transfer: {
        label: 'Transfer',
        descriptor: 'Transforms abstract community policies (e.g. municipal solar subsidy rules) into optimized flowcharts and identifies latent systemic ambiguities.',
        points: 4
      }
    },
    assessmentType: 'Formative Performance Task',
    sourceNote: 'Derived from CBSE CT&AI Classes 3-8 Curriculum (Class 6, Strand 1) & NCF-SE 2023 C-7.2.',
    createdAt: Date.now() - 172800000,
    updatedAt: Date.now() - 172800000
  },
  {
    id: 'rubric-seed-ai-417-eval',
    title: 'Model Evaluation & Confusion Matrix Diagnostics',
    skillId: 'skill-ai-g9-eval',
    skillName: 'Model Evaluation & Confusion Matrix (Code 417)',
    gradeId: 'grade-9',
    subjectId: 'Artificial Intelligence (Code 417)',
    unitTitle: 'AI Project Cycle: Evaluation Stage',
    levels: {
      emerging: {
        label: 'Emerging',
        descriptor: 'Calculates raw percentage accuracy but cannot explain why an imbalanced dataset renders high accuracy misleading.',
        points: 1
      },
      developing: {
        label: 'Developing',
        descriptor: 'Constructs a 2x2 confusion matrix (TP, FP, TN, FN) correctly with formula support; struggles to select between optimizing Precision or Recall.',
        points: 2
      },
      proficient: {
        label: 'Proficient (CBSE Board Benchmark)',
        descriptor: 'Correctly computes Precision, Recall, and F1-Score; provides defensible justification for prioritizing Recall over Precision in medical/safety contexts.',
        points: 3
      },
      transfer: {
        label: 'Transfer',
        descriptor: 'Evaluates multi-class confusion matrices, audits synthetic edge-cases, and proposes threshold adjustments to counteract algorithmic bias in civic datasets.',
        points: 4
      }
    },
    assessmentType: 'CBSE Practical Board Lab Task',
    sourceNote: 'CBSE Curriculum for Secondary School Subject Code 417 (Class IX), Unit 4: Evaluation & UN SDG Alignment.',
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now() - 86400000
  }
];

export function useCustomRubrics() {
  const [rubrics, setRubrics] = useState<CustomRubric[]>(() => {
    try {
      const stored = safeStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to parse custom rubrics from storage', e);
    }
    return SEED_CUSTOM_RUBRICS;
  });

  useEffect(() => {
    try {
      safeStorage.setItem(STORAGE_KEY, JSON.stringify(rubrics));
    } catch (e) {
      console.error('Failed to persist custom rubrics', e);
    }
  }, [rubrics]);

  const saveRubric = (rubricData: Omit<CustomRubric, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }): { success: boolean; error?: string; rubric?: CustomRubric } => {
    // Strict Validation per V0.6 specification:
    // "Ensure the builder validates that custom rubrics still map to at least one defined skill and grade band, preventing orphaned or unaligned rubrics."
    if (!rubricData.title?.trim()) {
      return { success: false, error: 'Rubric title is required.' };
    }
    if (!rubricData.gradeId?.trim()) {
      return { success: false, error: 'A target Grade Band must be selected to prevent unaligned rubrics.' };
    }
    if (!rubricData.skillId?.trim() || !rubricData.skillName?.trim()) {
      return { success: false, error: 'A curriculum-defined skill must be mapped to prevent orphaned rubrics.' };
    }
    if (!rubricData.levels.emerging.descriptor.trim() ||
        !rubricData.levels.developing.descriptor.trim() ||
        !rubricData.levels.proficient.descriptor.trim() ||
        !rubricData.levels.transfer.descriptor.trim()) {
      return { success: false, error: 'All 4 maturity levels (Emerging, Developing, Proficient, Transfer) require descriptive criteria.' };
    }

    const now = Date.now();
    let saved: CustomRubric;

    if (rubricData.id && rubrics.some(r => r.id === rubricData.id)) {
      saved = {
        ...rubricData,
        id: rubricData.id,
        createdAt: rubrics.find(r => r.id === rubricData.id)?.createdAt || now,
        updatedAt: now
      };
      setRubrics(prev => prev.map(r => r.id === saved.id ? saved : r));
    } else {
      saved = {
        ...rubricData,
        id: rubricData.id || `rubric-custom-${Date.now()}`,
        createdAt: now,
        updatedAt: now
      };
      setRubrics(prev => [saved, ...prev]);
    }

    return { success: true, rubric: saved };
  };

  const deleteRubric = (id: string) => {
    setRubrics(prev => prev.filter(r => r.id !== id));
  };

  const getRubricById = (id: string) => {
    return rubrics.find(r => r.id === id);
  };

  const getRubricsForGradeAndSkill = (gradeId?: string | null, skillId?: string | null) => {
    return rubrics.filter(r => {
      if (gradeId && r.gradeId !== gradeId) return false;
      if (skillId && r.skillId !== skillId) return false;
      return true;
    });
  };

  const resetToSeeds = () => {
    setRubrics(SEED_CUSTOM_RUBRICS);
  };

  return {
    rubrics,
    saveRubric,
    deleteRubric,
    getRubricById,
    getRubricsForGradeAndSkill,
    resetToSeeds
  };
}
