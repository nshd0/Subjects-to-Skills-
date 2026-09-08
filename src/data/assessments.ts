import { AssessmentTask, SkillRubric } from '@/types';

/**
 * Formative and Summative Assessment Tasks for v0.4.2 (Skill–Assessment Mapper)
 * Realistic CBSE-aligned tasks linking skills, subject areas, and observable student outputs.
 */
export const assessmentTasks: AssessmentTask[] = [
  {
    id: "task-g3-ps-1",
    gradeId: "grade-3",
    skillId: "Problem Solving",
    title: "Neighborhood Resource Mapping",
    type: "project",
    description: "Students work in small groups to map available resources (water sources, parks, shops) in their neighborhood and identify one local problem they can solve using these resources.",
    subjectArea: "Environmental Studies / Mathematics",
    timeRequired: "2 Hours",
    evidenceProduced: [
      "A hand-drawn map with a legend",
      "A short presentation identifying the problem and proposed solution",
      "Group reflection on teamwork"
    ]
  },
  {
    id: "task-g3-ps-2",
    gradeId: "grade-3",
    skillId: "Problem Solving",
    title: "Fraction Scavenger Hunt",
    type: "performance task",
    description: "Students find objects in the classroom that can be divided into equal parts and document how they represent different fractions.",
    subjectArea: "Mathematics",
    timeRequired: "45 Minutes",
    evidenceProduced: [
      "Completed scavenger hunt worksheet",
      "Visual models of fractions using classroom objects"
    ]
  },
  {
    id: "task-g6-si-1",
    gradeId: "grade-6",
    skillId: "Scientific Inquiry",
    title: "Local Water Quality Testing",
    type: "investigation",
    description: "Students collect water samples from different local sources (tap, pond, rain) and test them for basic properties like pH and clarity.",
    subjectArea: "Science",
    timeRequired: "3 Hours",
    evidenceProduced: [
      "Lab notebook with hypothesis, procedure, and data",
      "Bar chart comparing pH levels",
      "Conclusion paragraph summarizing findings"
    ]
  },
  {
    id: "task-g6-si-2",
    gradeId: "grade-6",
    skillId: "Scientific Inquiry",
    title: "Plant Growth Variables",
    type: "project",
    description: "Students design an experiment changing one variable (light, water, soil type) to see its effect on seed germination over two weeks.",
    subjectArea: "Science",
    timeRequired: "2 Weeks (intermittent)",
    evidenceProduced: [
      "Daily observation log with measurements",
      "Final scientific poster detailing the experiment setup and results"
    ]
  }
];

/**
 * Skill Rubric Matrices for v0.4.2 (Skill–Assessment Mapper)
 * Four graduated levels ("Emerging", "Developing", "Proficient", "Transfer") with verifiable indicators.
 */
export const skillRubrics: SkillRubric[] = [
  {
    skillId: "Problem Solving",
    gradeId: "grade-3",
    levels: [
      {
        level: "Emerging",
        criteria: [
          "Identifies a problem with teacher assistance.",
          "Suggests one basic solution.",
          "Requires support to execute a plan."
        ]
      },
      {
        level: "Developing",
        criteria: [
          "Identifies a problem independently.",
          "Suggests multiple potential solutions.",
          "Begins to execute a plan but may need help troubleshooting."
        ]
      },
      {
        level: "Proficient",
        criteria: [
          "Clearly defines a problem and its context.",
          "Evaluates possible solutions and chooses the most logical one.",
          "Executes the plan and checks if the solution worked."
        ]
      },
      {
        level: "Transfer",
        criteria: [
          "Anticipates potential problems before they occur.",
          "Applies problem-solving strategies to new, unfamiliar situations.",
          "Modifies the plan based on continuous feedback."
        ]
      }
    ]
  },
  {
    skillId: "Scientific Inquiry",
    gradeId: "grade-6",
    levels: [
      {
        level: "Emerging",
        criteria: [
          "Follows a provided experimental procedure.",
          "Records data sporadically.",
          "States a simple conclusion without referencing data."
        ]
      },
      {
        level: "Developing",
        criteria: [
          "Helps design basic steps of an experiment.",
          "Records data in a structured table.",
          "Draws a conclusion that references some data points."
        ]
      },
      {
        level: "Proficient",
        criteria: [
          "Designs a controlled experiment with clear variables.",
          "Accurately collects and organizes data using charts.",
          "Draws a logical conclusion fully supported by evidence."
        ]
      },
      {
        level: "Transfer",
        criteria: [
          "Identifies sources of error and suggests improvements.",
          "Applies the scientific method to self-generated questions.",
          "Connects findings to broader scientific principles."
        ]
      }
    ]
  }
];
