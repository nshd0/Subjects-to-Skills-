const fs = require('fs');

let rules = fs.readFileSync('firestore.rules', 'utf8');

// Replace isValidFeedback to allow new fields
rules = rules.replace(
  "data.keys().size() >= 2 && data.keys().size() <= 4",
  "data.keys().size() >= 2"
);

// We should also allow the new school_plans collection
const schoolPlansRule = `
    match /school_plans/{planId} {
      allow create: if isSignedIn() && request.auth.uid == incoming().teacherId;
      allow read, update, delete: if isSignedIn() && request.auth.uid == resource.data.teacherId;
    }
`;

rules = rules.replace(
  "match /subject_mappings/{mappingId} {",
  `${schoolPlansRule}\n    match /subject_mappings/{mappingId} {`
);

// We should update the allowed fields for subject_mappings update by normal users
rules = rules.replace(
  /affectedKeys\(\)\.hasOnly\(\[[^\]]+\]\)/,
  "affectedKeys().hasOnly(['curricularGoal', 'competency', 'learningOutcome', 'essentialKnowledge', 'skills', 'pedagogy', 'activities', 'evidence', 'assessmentMethod', 'inclusionAndDifferentiation', 'valuesAndDispositions', 'localIndianContext', 'timeAndResources', 'groupSize', 'teacherPrep', 'extensionActivity', 'supportActivity', 'updatedAt', 'version', 'phase', 'ageRange', 'unitOrTheme', 'officialReference', 'curricularAim', 'essentialKnowledgeList', 'disciplinaryPractices', 'primarySkillDomain', 'supportingSkillDomains', 'observablePerformance', 'valuesAndDispositionsList', 'localOrIndianContextList', 'multilingualSupport', 'pedagogyStructured', 'activityStructured', 'evidenceStructured', 'assessmentStructured', 'inclusionStructured', 'implementationStructured', 'status'])"
);

fs.writeFileSync('firestore.rules', rules);
console.log('Rules updated');
