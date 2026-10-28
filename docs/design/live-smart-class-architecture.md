# Live Smart Class Architecture & Design Specification

**Platform:** Subjects2Skills Smart Class System  
**Lead Product Engineer:** Subjects2Skills Architecture & Hardware Integration  
**Hardware Target:** 65–86 inch Interactive Flat Panels (IFPs) / Smart Boards (ViewSonic, Promethean, MAXHUB, BenQ, Samsung Flip, Android-based IFPDs) + Laptop/Tablet fallback  
**Core Mission:** A teacher opens Subjects2Skills on a smart board in a physical classroom, logs in, selects the current period, and begins teaching immediately with **zero setup and zero training**.

---

## 1. Information Architecture (IA)

```
[ Subjects2Skills Live Smart Class IA ]

                             +-----------------------------------+
                             |     TEACHER SMART BOARD LOGIN     |
                             | (Email/Password, PIN, or RFID/NFC)|
                             +-----------------+-----------------+
                                               |
                                               v
                             +-----------------------------------+
                             |      AUTO-TIMETABLE LAUNCHPAD     |
                             | - Auto-detects current time/period|
                             | - Shows today's 6–8 period slots  |
                             | - Pre-selects active period       |
                             +-----------------+-----------------+
                                               |
                        [ 1-Tap: "START LIVE CLASS" (<10s) ]
                                               |
                                               v
+---------------------------------------------------------------------------------------------------------+
|                                    LIVE SMART CLASSROOM ORCHESTRATOR                                    |
|                                                                                                         |
|  +---------------------------------------------------------------------------------------------------+  |
|  | TOP NAVIGATION & STATUS BAR (Class, Period, Subject, Task ID, Timer, Online/Offline, End Class)   |  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                         |
|  +----------------------+---------------------------------------------------+------------------------+  |
|  | LEFT RAIL:           | MAIN CANVAS (Touch & Stylus Interactive):         | RIGHT RAIL:            |  |
|  | 5-Stage Lesson Flow: | - Interactive Stage View (Warmup, Teach, Task...) | Live Student Pulse:    |  |
|  | 1. Warm-Up / Hook    | - Step-by-Step Answer / Concept Reveal Engine     | - Responses (38/38)    |  |
|  | 2. Teach & Model     | - Interactive Physics/Math/AI Simulation & Visual | - Intervention Flags   |  |
|  | 3. Guided Task       | - Digital Task Sheet / Observation Table          | - Instant Live Poll    |  |
|  | 4. Class Discussion  | - Full-Canvas Annotation Layer (Pen/Highlighter)  | - Random Student Wheel |  |
|  | 5. Exit Check        | - Palm Rejection & Multi-Touch Stylus Engine      | - Work Compare (Split) |  |
|  +----------------------+---------------------------------------------------+------------------------+  |
|                                                                                                         |
|  +---------------------------------------------------------------------------------------------------+  |
|  | BOTTOM CONTROL BAR: Annotate | Step Reveal | Scaffold Card | Extension Card | Prev/Next | End Class|  |
|  +---------------------------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------------------------+
                                               |
                                    [ Tap "END CLASS" ]
                                               |
                                               v
                             +-----------------------------------+
                             |    SESSION RECAP & SYNC MODAL     |
                             | - Student Attendance & Submissions|
                             | - Class Mastery Score (e.g. 84%)  |
                             | - Printable / WhatsApp Session QR |
                             | - Offline Sync to Cloud Firestore |
                             +-----------------------------------+
```

---

## 2. Smart-Board UI Wireframe Specifications (65–86" Large Display)

### Top Bar Specifications (Height: 72px, Min touch targets: 52px)
```
+-------------------------------------------------------------------------------------------------------------------+
| [Subjects2Skills] | Class 8-B · Period 3 (10:15 - 11:00) · Science | "Push & Pull in Daily Life" (SCI-8-FORCE-1.1)|
| [Time Left: 24:18 ⏱] [Online ● Synced] [⚡ Offline Mode] [Pen Mode ✏️] [Fullscreen ⛶] [🛑 End Class]            |
+-------------------------------------------------------------------------------------------------------------------+
```

### Main Canvas Layout (3-Column Viewport Partition)
```
+---------------+-------------------------------------------------------------------+-------------------------------+
| LESSON FLOW   | MAIN INTERACTIVE CANVAS (Interactive Stage & Fullscreen Canvas)   | STUDENT INTERACTION & PULSE   |
| (Width: 18%)  | (Width: 58%)                                                      | (Width: 24%)                  |
|               |                                                                   |                               |
| [1. WARM-UP ] | STAGE 2: TEACH & MODEL (Step-by-Step Reveal)                      | [ CLASS STATS: 38 Students ]  |
| 00-05m [✓]    |                                                                   | 26 Done · 5 Stuck · 7 Unread  |
| Hook & Spark  | +---------------------------------------------------------------+ |                               |
|               | | CONCEPT: "Force is an interaction between TWO objects."       | | [!] 5 students stuck on Step 2|
| [2. TEACH   ] | |                                                               | | [💡 Push Scaffold Clue]     |
| 05-15m [ACTIVE| | [ Interactive Simulation: Push Desk vs Pull Chair ]         | |                               |
| Concept & Sim | | Applied Force: [===> 15N Push]   Net Motion: [--> Accel]      | | [ INSTANT CLASS POLL ]        |
|               | +---------------------------------------------------------------+ | "Can you pull an object       |
| [3. TASK    ] |                                                                   |  without touching it?"        |
| 15-30m        | [ Reveal Next Step (Key Rule) ]                                   | (A) Yes: Gravity/Magnet (78%) |
| Class Handout | Step 1: Force only exists while contact is made. [✓ Visible]      | (B) No: Contact needed (22%)  |
|               | Step 2: Direction defines whether motion speeds up or stops.      | [ Launch 60s Live Poll ]      |
| [4. DISCUSS ] | Step 3: Balanced forces produce zero change in velocity. [Hidden] |                               |
| 30-40m        |                                                                   | [ 🎲 RANDOM STUDENT PICKER ]  |
| Misconceptions| [ STYLUS CANVAS ACTIVE: Yellow 3px Highlighter / Red 2px Pen ]    | Selected: Aarav Kumar (#01)   |
|               | Notes: "Friction acts opposite to sliding surface!"               | [ Spin Again ]                |
| [5. EXIT CHK] |                                                                   |                               |
| 40-45m        |                                                                   | [ 🪟 COMPARE STUDENT WORK ]   |
| 3-Question MCQ|                                                                   | Aditi M. (#02) vs Farhan (#09)|
+---------------+-------------------------------------------------------------------+-------------------------------+
| BOTTOM ACTION BAR (Height: 64px, Touch Target: 52px):                                                             |
| [ ✏️ Annotate ] [ 👁️ Reveal Next Step ] [ 💡 Scaffold Clue ] [ 🚀 Extension ] [ < Previous ] [ Next Stage > ]   |
+-------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Component List & State Machine for Lesson Flow

### Component Breakdown
1. `LiveSmartClassLayout`: High-level viewport manager with full-screen container, hardware palm rejection, and touch event listeners.
2. `TimetableLaunchpad`: Auto-detects current time, pulls the teacher's schedule, handles single-tap launch.
3. `TopBarDisplay`: Timetable details, active lesson title, real-time period countdown timer, online/offline sync status.
4. `LessonFlowRail`: 5-step navigation (Warm-up, Teach, Task, Discuss, Exit Check) with timing badges and progress checkmarks.
5. `MainStageCanvas`: Context-aware component rendering interactive simulations, text reveals, video triggers, and worksheet tables.
6. `StylusAnnotationLayer`: HTML5 Canvas overlay supporting pointer events (`pointerdown`, `pointermove`, `pointerup`), pressure sensitivity, highlighter mode, color selection, undo, redo, and clear.
7. `LiveStudentPulseRail`: Real-time roster counts, plain-language intervention alerts, and 1-click remedial triggers.
8. `InstantPollWidget`: Quick MCQ, True/False, or confidence poll with dynamic bar chart visualization.
9. `RandomStudentWheel`: Equitable cold-call picker with audio-visual chime and history tracking.
10. `WorkComparisonModal`: Dual-pane inspection comparing two student responses side-by-side on the smart board.
11. `SessionRecapModal`: Comprehensive end-of-period summary with attendance, average mastery score, and student recap QR code.

### Lesson Flow State Machine
```
   [ IDLE / TIMETABLE ]
            |
      (Tap "Start")
            v
      [ 1. WARMUP ]  (00-05 min) --> Hook question, everyday video trigger, student activate
            |
      (Tap "Next" or Step 2)
            v
      [ 2. TEACH ]   (05-15 min) --> Core definitions, interactive simulation, step-by-step reveal
            |
      (Tap "Next" or Step 3)
            v
      [ 3. TASK ]    (15-30 min) --> Actionable task instructions, observation table, timer countdown
            |
      (Tap "Next" or Step 4)
            v
      [ 4. DISCUSS ] (30-40 min) --> Address 2 major misconceptions, debate prompts, random student calling
            |
      (Tap "Next" or Step 5)
            v
      [ 5. EXIT ]    (40-45 min) --> 3-question formative poll, mastery check
            |
      (Tap "End Class")
            v
   [ SESSION RECAP ] (Summary generated, data synced to Firestore & IndexedDB, QR code shown)
```

---

## 4. API & Data Model

### Timetable Slot Schema
```typescript
interface TimetablePeriod {
  periodNumber: number;
  startTime: string; // e.g. "10:15"
  endTime: string;   // e.g. "11:00"
  grade: number;     // 8
  section: string;   // "B"
  subject: string;   // "Science"
  room: string;      // "Smart Room 204"
  defaultTaskId: string; // "SCI-8-FORCE-1.1"
  chapterTitle: string;  // "Chapter 11: Force and Pressure"
  isCurrent: boolean;
}
```

### Live Class Session Schema (Firestore: `/liveSessions/{sessionId}`)
```typescript
interface LiveClassSession {
  sessionId: string;
  teacherId: string;
  teacherName: string;
  grade: number;
  section: string;
  subject: string;
  periodNumber: number;
  taskId: string;
  startedAt: string; // ISO 8601
  endedAt?: string;
  status: 'active' | 'completed' | 'abandoned';
  currentStage: 'warmup' | 'teach' | 'task' | 'discuss' | 'exit';
  timerRemainingSeconds: number;
  studentAttendance: {
    totalEnrolled: number;
    presentCount: number;
    completedCount: number;
    stuckCount: number;
  };
  interventionsTriggered: Array<{
    type: 'broadcast_hook' | 'push_scaffold' | 'unlock_extension';
    timestamp: string;
    targetCount: number;
  }>;
  pollResults?: {
    question: string;
    options: Array<{ label: string; votes: number }>;
  };
  annotationsSnapshot?: string; // Base64 data URL
  offlineCreated: boolean;
  syncedToCloud: boolean;
}
```

### Offline-First Sync Architecture
1. **Local-First Storage:** Every state update is committed synchronously to `localStorage` / `IndexedDB` under key `s2s_smartclass_session_{id}`.
2. **Connectivity Listener:** `navigator.onLine` and heartbeat ping monitor connection quality.
3. **Optimistic Sync:** When online, changes flush to Firestore `/liveSessions` collection. When offline, actions are queued in `s2s_offline_sync_queue`.
4. **Offline Fallback Lesson Path:** If network drops during class, the smart board operates 100% autonomously:
   - Uses pre-cached NCERT task specs and SVG simulations.
   - Saves annotations to local Canvas cache.
   - Generates offline SVG QR code containing the session summary payload for student phone scanning.

---

## 5. Implementation Milestones

| Milestone | Scope & Deliverable | Status |
| :--- | :--- | :--- |
| **M1: Data Models & Timetable Engine** | Auto-detect current period, schedule data for Grades 6–10, fallback mock periods. | Complete |
| **M2: Touch-First Viewport & Layout** | Fullscreen layout, $\ge 48\text{px}$ touch targets, responsive 3-column IFP partition. | Complete |
| **M3: Lesson Flow & Simulation Stage** | 5-step stages (Warmup, Teach, Task, Discuss, Exit) with step-by-step reveal and simulation. | Complete |
| **M4: Stylus & Finger Canvas Layer** | High-performance HTML5 Canvas annotation overlay with pen, highlighter, undo, clear. | Complete |
| **M5: Student Interaction & Poll Tools** | Random student wheel, live poll with bar graphs, work comparison, and intervention triggers. | Complete |
| **M6: Offline Cache & Recap QR Engine** | Offline local caching, session completion stats, and instant QR generation. | Complete |
