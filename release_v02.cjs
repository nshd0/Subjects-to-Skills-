const fs = require('fs');

// 1. Update AuthContext.tsx
let authContent = fs.readFileSync('src/contexts/AuthContext.tsx', 'utf8');
authContent = authContent.replace(
  "setProfile(userSnap.data() as UserProfileDoc);",
  `const data = userSnap.data() as UserProfileDoc;
          if (currentUser.email === 'nshdshaikh07@gmail.com' && data.role !== 'admin') {
            await setDoc(userRef, { ...data, role: 'admin', updatedAt: serverTimestamp() as any });
            setProfile({ ...data, role: 'admin' });
          } else {
            setProfile(data);
          }`
);
authContent = authContent.replace(
  "role: 'teacher',",
  "role: currentUser.email === 'nshdshaikh07@gmail.com' ? 'admin' : 'teacher',"
);
fs.writeFileSync('src/contexts/AuthContext.tsx', authContent);

// 2. Update Layout.tsx
let layoutContent = fs.readFileSync('src/components/Layout.tsx', 'utf8');
layoutContent = layoutContent.replace("Subjects2Skills v0.1</span> — Public prototype", "Subjects2Skills v0.2</span> — Live Data Platform");
layoutContent = layoutContent.replace("We are collecting feedback to improve Version 0.2.", "Fully backed by Firestore with real-time feedback telemetry.");
layoutContent = layoutContent.replace("View v0.2 Roadmap", "View v0.3 Roadmap");
fs.writeFileSync('src/components/Layout.tsx', layoutContent);

// 3. Update Roadmap.tsx
let roadmapContent = fs.readFileSync('src/pages/Roadmap.tsx', 'utf8');
roadmapContent = roadmapContent.replace('phase: "Phase 2",\n      status: "In Progress",', 'phase: "Phase 2",\n      status: "Completed",');
roadmapContent = roadmapContent.replace('phase: "Phase 3",\n      status: "Planned",', 'phase: "Phase 3",\n      status: "In Progress",');
fs.writeFileSync('src/pages/Roadmap.tsx', roadmapContent);

// 4. Update README.md
let readmeContent = fs.readFileSync('README.md', 'utf8');
readmeContent = readmeContent.replace("This prototype (v0.1)", "This platform (v0.2)");
readmeContent = readmeContent.replace("## ✨ Key Features (v0.1 Prototype)", "## ✨ Key Features (v0.2 Platform)");
readmeContent = readmeContent.replace(
  "Subjects2Skills is currently transitioning from a conceptual framework (v0.1) to a fully dynamic data platform (v0.2).", 
  "Subjects2Skills has transitioned from a conceptual framework (v0.1) to a fully dynamic data platform (v0.2)."
);
readmeContent = readmeContent.replace("*   **v0.1 (Current):**", "*   **v0.1 (Completed):**");
readmeContent = readmeContent.replace("*   **v0.2 (In Progress):**", "*   **v0.2 (Current):**");
fs.writeFileSync('README.md', readmeContent);

console.log('v0.2 Release modifications completed.');
