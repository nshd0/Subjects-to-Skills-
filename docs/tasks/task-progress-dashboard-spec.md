# Task Progress Dashboard Specification
## Student & Teacher UI Architecture for Task-Based Learning (TBL)

**App Module:** Subjects2Skills TBL Dashboard  
**Target Stage:** Middle Stage (Grade 8 Pilot)  
**Design Guidelines:** Clean typographic hierarchy, zero pill decoration, high data density, accessible contrast, instantaneous responsive states.

---

## 1. Student-Facing View: "My Learning Expedition"

### A. Layout Structure & Key Viewport Elements
The student view focuses on agency, observable mastery, and momentum without punitive pressure.

```
┌────────────────────────────────────────────────────────────────────────┐
│  Subjects2Skills   [ Grade 8: Middle Stage ]     [🔥 7-Day Streak]     │
│  Welcome back, Aarav! (Class 8-B)            38 / 62 Tasks Mastered    │
├────────────────────────────────────────────────────────────────────────┤
│  OVERALL COMPETENCY PROGRESS (Click to filter tasks)                   │
│                                                                        │
│  [🔬 Science: Force & Motion]        [████████████░░░] 10/13 Tasks     │
│  [📐 Math: Linear Equations]         [██████████░░░░░]  8/13 Tasks     │
│  [🤖 AI: Problem Scoping]            [█████████████░░] 10/12 Tasks     │
│  [📜 Social: Constitution]           [████████░░░░░░░]  6/12 Tasks     │
│  [🌱 Interdisciplinary: Resources]   [████░░░░░░░░░░░]  4/12 Tasks     │
├────────────────────────────────────────────────────────────────────────┤
│  EARNED BADGES & MASTERY CRESTS                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │ 🏅 FORCE     │  │ 🏅 ALGEBRA   │  │ 🏅 AI SCOPE  │  │ 🔒 CIVIC    │ │
│  │   EXPLORER   │  │   BALANCER   │  │   ARCHITECT  │  │   DEFENDER  │ │
│  │ Sub-Comp C1  │  │ Sub-Comp C2  │  │ Sub-Comp C1  │  │ 2 tasks left│ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └─────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│  ACTIVE TASKS QUEUE (Pick up where you left off)                       │
│                                                                        │
│  [▶ START]  SCI-8-FORCE-3.3: Measure rolling friction across 3 surfaces│
│             Est: 35 min | Low Resource | Peer Lab                      │
│             Scaffold: Pre-printed coordinate graphing grid available   │
│                                                                        │
│  [📝 IN REVIEW] MATH-8-LINEQ-3.1: Solve equations with brackets        │
│             Submitted 2h ago | Awaiting Teacher / Peer Review          │
└────────────────────────────────────────────────────────────────────────┘
```

### B. Core UI Components (Student)
1. **Competency Progress Bars:**
   - Real-time animated progress bars representing task completion per competency ($Completed / Total$).
   - Color coding by subject: Cobalt Indigo for Science, Teal for Math, Purple for AI, Amber for Civics, Emerald for Interdisciplinary.
   - Micro-interaction: Clicking any bar filters the task library below to that specific domain.
2. **Sub-Competency Mastery Badges:**
   - Earning condition: Awarded automatically when all 3–4 tasks within a sub-competency are verified as completed.
   - Badge Catalog:
     - *Force Explorer Badge* (Completed SCI-8-FORCE-C1: Contact vs Non-Contact).
     - *Vector Navigator Badge* (Completed SCI-8-FORCE-C2: Net Force & Balance).
     - *Algebra Balancer Badge* (Completed MATH-8-LINEQ-C2: Single-Variable Isolation).
     - *4Ws Scout Badge* (Completed AI-8-SCOPE-C1: Problem Scoping Canvas).
     - *Constitutional Guardian Badge* (Completed SOC-8-CONST-C3: Fundamental Rights).
     - *Earth Steward Badge* (Completed INT-8-RESDV-C3: Sustainable Circular Economy).
3. **Daily Momentum & Streak Counter:**
   - Display: Fire icon with consecutive active learning days (e.g., `🔥 7-Day Streak`).
   - Rule: Completing or submitting at least 1 verified task within a 24-hour cycle maintains the streak.
   - Inclusive design: "Streak Freeze" automatically applied for weekends and gazetted school holidays to prevent burnout.
4. **Task Card Modal (Actionable View):**
   - Displays clear success criteria checkboxes that students can tick as they complete each segment.
   - "Need Help?" toggle reveals the pre-written **Scaffold Support**.
   - "Feeling Confident?" toggle unlocks the **Extension Challenge**.

---

## 2. Teacher-Facing View: "Classroom Orchestrator"

### A. Layout Structure & Key Viewport Elements
The teacher view emphasizes actionable diagnostic data, completion velocity, and proactive intervention flags.

```
┌────────────────────────────────────────────────────────────────────────┐
│  Subjects2Skills   [ Class 8-B: 34 Students ]      [ Export CBSE TBL ] │
│  TBL Competency Navigator   •   Science / Math / AI / Civics Pilot     │
├────────────────────────────────────────────────────────────────────────┤
│  CLASSROOM AGGREGATE SUMMARY                                           │
│  Total Tasks Assigned: 62   •   Class Avg Completion: 68.4%            │
│  Peer Reviews Verified: 142 •   Active Interventions Flagged: 4 ⚠️      │
├────────────────────────────────────────────────────────────────────────┤
│  TASK COMPLETION HEATMAP & DROP-OFF AUDIT                              │
│                                                                        │
│  Task ID           Title                         Completed   Status   │
│  ───────────────────────────────────────────────────────────────────── │
│  SCI-8-FORCE-1.1   Classify push/pull actions    34 / 34    [ 100% ]   │
│  SCI-8-FORCE-2.1   Simulate tug-of-war vectors   32 / 34    [  94% ]   │
│  MATH-8-LINEQ-2.1  Solve balance equations       29 / 34    [  85% ]   │
│  MATH-8-LINEQ-3.1  Brackets & like terms         18 / 34    [  53% ] ⚠️│
│  AI-8-SCOPE-1.1    4Ws Canteen Waste Canvas      31 / 34    [  91% ]   │
│  SOC-8-CONST-3.1   Fundamental Rights Handbook   27 / 34    [  79% ]   │
├────────────────────────────────────────────────────────────────────────┤
│  ⚠️ PROACTIVE INTERVENTION FLAGS (Students Requiring Scaffolding)      │
│                                                                        │
│  🚩 [Stuck >48h] Rohan Verma (Roll #14) on MATH-8-LINEQ-3.1            │
│     Issue: Repeated sign error distributing negative multiplier.       │
│     Recommended Action: Deploy Scaffold Support (Color-code like terms)│
│     [Assign Scaffold]  [Pair with Peer Buddy (Aarav)]  [Dismiss]       │
│                                                                        │
│  🚩 [Submissions Queue] 6 students submitted INT-8-RESDV-2.1           │
│     Issue: Water footprint calculations ready for teacher review.      │
│     [Review Submissions (6)]  [Bulk Approve Standard Rubric]           │
└────────────────────────────────────────────────────────────────────────┘
```

### B. Core Diagnostic Features (Teacher)
1. **Class-Wide Completion Rates:**
   - High-density matrix displaying the exact completion percentage of all 34 students across each task ID.
   - Visual threshold indicators: Green (>80%), Amber (60–80%), Red (<60% flagged for whole-class reteaching).
2. **Automated Intervention Flags (Stuck Logic):**
   - Triggers when a student:
     - Spends $>3\times$ the estimated time on a single task without submission.
     - Self-reports "Stuck" twice via the student UI button.
     - Receives an unsatisfactory score on peer review verification.
   - Recommended actions populated with one click:
     - Automatically sends the designated task **Scaffold Support** to the student's dashboard.
     - Suggests an automated peer buddy who has already mastered the task with a Level 4 rubric score.
3. **One-Click CBSE TBL Report Export:**
   - Generates an official PDF/CSV formatted report mapped directly to NCF-SE Middle Stage Learning Outcomes.
   - Ready for inspection by CBSE inspectors, school principals, or Parent-Teacher Meetings (PTMs) showing observable evidence of student capability.
