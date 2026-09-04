const fs = require('fs');

let path = 'src/data/curriculum.ts';
let content = fs.readFileSync(path, 'utf8');

const grade7English = `{
        name: "English",
        curricularGoal: "Develop literary appreciation and critical reading skills.",
        competency: "Analyzes character motivation and theme in a literary text.",
        learningOutcome: "Identifies character motivations and how they contribute to the theme of a short story.",
        essentialKnowledge: "Character traits, motivation, theme, textual evidence.",
        skills: "Critical thinking, empathy",
        pedagogy: "Close reading, Socratic seminar, character mapping.",
        activities: "Read a short story, map a character's choices, and debate their motivation in small groups.",
        evidence: "Character map, participation in debate, written reflection.",
        assessmentMethod: "Rubric evaluating use of textual evidence and depth of analysis.",
        primarySkillDomain: "Critical Thinking",
        supportingSkillDomains: ["Communication", "Empathy"],
        observablePerformance: "Selects relevant textual evidence to explain a character's motivation and connects this motivation to the overall theme of the story.",
        officialReference: [{
          sourceType: "NCF-SE 2023",
          title: "Language Education Curricular Goal L-4",
          url: "https://ncert.nic.in/pdf/NCF-SE-2023.pdf",
          verificationStatus: "pending-review"
        }],
        activityStructured: {
          title: "Character Motivation Seminar",
          description: "Students read a focal text, complete a character decision map, and participate in a guided Socratic seminar to debate character choices.",
          duration: "2 periods",
          groupSize: "Whole class seminar"
        },
        pedagogyStructured: {
          approaches: ["Socratic Seminar", "Close Reading"]
        },
        inclusionStructured: {
          accessOptions: ["Audio version of the text, highlighted textual evidence."],
          expressionOptions: ["Written reflections, oral participation, drawing a character map."],
          supportStrategies: ["Provide sentence frames for the seminar (e.g. 'I agree with... because...')."],
          extensionStrategies: ["Compare the character's motivation to a character in a different text."]
        },
        evidenceStructured: {
          studentOutputs: ["Completed character map", "Observation of seminar participation"]
        },
        assessmentStructured: {
          criteria: ["Use of specific textual evidence", "Clarity of explanation", "Respectful listening and responding in discussion."]
        }
      }`;

content = content.replace(
  /\{\s*name:\s*"English",[\s\S]*?\},/m,
  grade7English + ","
);

fs.writeFileSync(path, content);
console.log('Added more seeds');
