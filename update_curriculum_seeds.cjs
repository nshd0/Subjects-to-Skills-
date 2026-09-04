const fs = require('fs');

const path = 'src/data/curriculum.ts';
let content = fs.readFileSync(path, 'utf8');

// We will inject the new rich seed examples into the subjects arrays of the corresponding stages.
// Grade 5 Mathematics (Preparatory Stage)
const grade5Math = `{
        name: "Mathematics",
        curricularGoal: "Develop mathematical thinking and problem solving.",
        competency: "Selects appropriate mathematical strategy, shows reasoning process, and checks reasonableness.",
        learningOutcome: "Uses basic operations to solve multi-step real-world problems involving volume and capacity.",
        essentialKnowledge: "Volume, capacity, multi-step word problems, estimation.",
        skills: "Problem-solving",
        pedagogy: "Concrete manipulatives, collaborative problem-solving, mathematical discourse.",
        activities: "Design a water tank. Calculate volume needed for a school garden and determine dimensions.",
        evidence: "Tank design diagram, calculation sheet, oral explanation of choices.",
        assessmentMethod: "Rubric evaluating accuracy, reasoning, and communication.",
        
        // V0.3 Fields
        primarySkillDomain: "Problem-Solving",
        supportingSkillDomains: ["Critical Thinking", "Communication"],
        observablePerformance: "Selects an appropriate mathematical strategy to calculate volume, shows the reasoning process clearly, checks whether the answer is reasonable, and explains the final decision.",
        officialReference: [{
          sourceType: "NCF-SE 2023",
          title: "Mathematics Curriculum Goal M-2",
          url: "https://ncert.nic.in/pdf/NCFSE-2023.pdf",
          verificationStatus: "pending-review"
        }],
        activityStructured: {
          title: "Water Conservation Tank Design",
          description: "Students work in pairs using interlocking cubes to model different tank volumes, then scale up calculations for real-world school usage.",
          duration: "2 periods (80 mins)",
          groupSize: "Pairs"
        },
        pedagogyStructured: {
          approaches: ["Concrete-Pictorial-Abstract (CPA)", "Collaborative learning"]
        },
        inclusionStructured: {
          accessOptions: ["Visual instructions, physical cubes for modelling."],
          expressionOptions: ["Written calculations, oral explanations, physical models."],
          supportStrategies: ["Provide formula cards, use smaller number sets first."],
          extensionStrategies: ["Calculate cost per liter, optimise surface area."]
        },
        evidenceStructured: {
          studentOutputs: ["3D model", "Calculation worksheet", "Design justification statement."]
        },
        assessmentStructured: {
          criteria: ["Accuracy of volume calculations", "Clarity of mathematical reasoning", "Justification of tank dimensions."]
        }
      }`;

// Replace the first occurrence of Mathematics in preparatory
content = content.replace(
  /\{\s*name:\s*"Mathematics",[\s\S]*?\},/m,
  grade5Math + ","
);

// Grade 7 Science (Middle Stage)
const grade7Science = `{
        name: "Science",
        curricularGoal: "Develop scientific temper and understanding of the physical world.",
        competency: "Plans and conducts a fair investigation.",
        learningOutcome: "Explains separation of substances and applies methods to purify mixtures.",
        essentialKnowledge: "Filtration, separation methods, variables, observation and evidence.",
        skills: "Scientific thinking",
        pedagogy: "Inquiry-based learning, hands-on experimentation, claims-evidence-reasoning (CER).",
        activities: "Water Filtration Investigation: Build and test different filtration materials.",
        evidence: "Data table, filtration prototype, evidence-based conclusion.",
        assessmentMethod: "Uses appropriate evidence to justify a scientific conclusion.",
        
        // V0.3 Fields
        primarySkillDomain: "Scientific Thinking",
        supportingSkillDomains: ["Problem-Solving", "Collaboration"],
        observablePerformance: "Uses a controlled investigation to compare filtration materials, records observations accurately, and uses evidence to explain which material is most effective.",
        officialReference: [{
          sourceType: "NCF-SE 2023",
          title: "Science Curricular Goal S-3",
          url: "https://ncert.nic.in/pdf/NCFSE-2023.pdf",
          verificationStatus: "pending-review"
        }],
        activityStructured: {
          title: "Water Filtration Investigation",
          description: "Design a filtration system using sand, gravel, and cotton to clean muddy water. Measure turbidity before and after.",
          duration: "3 periods",
          groupSize: "Small groups (3-4)"
        },
        pedagogyStructured: {
          approaches: ["Guided inquiry", "Experiential learning"]
        },
        inclusionStructured: {
          accessOptions: ["Demonstration of setup, bilingual vocabulary cards (Filtration, Residue)."],
          expressionOptions: ["Labelled diagrams, video logs, written reports."],
          supportStrategies: ["Provide pre-made data tables, assign specific roles in groups."],
          extensionStrategies: ["Research real-world municipal water treatment processes."]
        },
        evidenceStructured: {
          studentOutputs: ["Filtration prototype", "Data observation table", "CER (Claim-Evidence-Reasoning) paragraph."]
        },
        assessmentStructured: {
          criteria: ["Identification of controlled variables", "Accuracy of observation records", "Logical connection between evidence and claim."]
        },
        valuesAndDispositions: "Environmental responsibility, persistence in experimentation."
      }`;

content = content.replace(
  /\{\s*name:\s*"Science",[\s\S]*?\},/m,
  grade7Science + ","
);

fs.writeFileSync(path, content);
console.log('Curriculum updated with v0.3 seeds');
