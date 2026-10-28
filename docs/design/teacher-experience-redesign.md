# Subjects2Skills: Teacher Experience Redesign (Zero-Training Architecture)

**Lead Product Designer:** Subjects2Skills Design & Pedagogy Systems  
**Target User:** Grade 6–10 Indian Middle & Secondary School Teachers (CBSE, State SCERTs, Kendriya Vidyalayas, Navodaya Vidyalayas, and Private Schools)  
**Core Design Mandate:** A teacher must find, preview, assign, and run their first task within **5 minutes**—with zero manual, zero video tutorials, and zero technical support.

---

## 1. Updated Information Architecture (IA)

```
[ Subjects2Skills Teacher Fast-Track IA ]

                    +--------------------------------+
                    |          TEACHER HOME          |
                    | (Zero Blank Screen / 1-Action) |
                    +---------------+----------------+
                                    |
          +-------------------------+-------------------------+
          |                                                   |
[Primary CTA / Quick Action]                               [Secondary / Management]
"Assign Your First Task"                                   Grade / Subject Navigator
Recommended Task (Auto-Selected for Grade)                Active Assignments List
Single Urgent Next Action                                  Class Roster / Low-Resource Mode
          |                                                   |
          v                                                   v
+-------------------------------+                  +-------------------------------+
|       TASK PREVIEW PAGE       |<-----------------|     CURRICULUM TASK BANK      |
|  (All-In-One Unified Screen)  |                  | (Filtered by Grade/Subj/Time) |
| - Metadata & Success Criteria |                  +-------------------------------+
| - Student Instructions (Bilingual)
| - Teacher Run Sheet (3-step flow,
|   materials, misconceptions)
| - Printable Student Worksheet
| - Primary Action: "Assign Task"
+---------------+---------------+
                |
                v
+-------------------------------+
|     3-CLICK ASSIGNMENT FLOW   |
| Click 1: [Assign Task]        |
| Click 2: [Select Class/Date]  |
| Click 3: [Confirm & Launch]   |
+---------------+---------------+
                |
                +-------------------------------------------------+
                | Instant Launch Screen:                          |
                | - 6-char Class Code (e.g., S2S-8B)              |
                | - QR Code for instant student mobile scan       |
                | - WhatsApp Share link for parent/student groups |
                | - Printable Offline Worksheet PDF               |
                +-----------------------+-------------------------+
                                        |
                                        v
                    +--------------------------------+
                    |   REAL-TIME TEACHER DASHBOARD  |
                    |  (Above-the-Fold Interventions)|
                    | - Completed / Stuck / Unstarted|
                    | - Live Student Heatmap Grid    |
                    | - Plain-Language Flags + Action|
                    +--------------------------------+
```

### Hierarchy & Key Transitions
1. **Teacher Home**: Stripped of administrative clutter. The teacher is greeted by their currently assigned class (e.g., Class 8-B) and a single prominent hero card with the most relevant task for today's lesson.
2. **Task Preview**: Eliminates nested tabs. The Teacher Run Sheet, student worksheet, and pedagogical hints sit together on a single scroll-free or structured two-column layout.
3. **3-Click Assignment Flow**: Replaces 10-step LMS wizards. No rubric creation or grading scheme setup is needed before assigning.
4. **Teacher Intervention Dashboard**: Focused exclusively on action. The teacher sees *who needs help right now*, *why*, and has *one click to remediate*.

---

## 2. Wireframe-Level UI Specifications

### Screen 1: Teacher Home (Zero-Blank State)

```
+---------------------------------------------------------------------------------------------------------+
| [Subjects2Skills]  Grade 8 - Section B | 38 Students   [Low-Resource Mode: ON]  [Lang: EN | HI] [Help ?]|
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|  [ URGENT CLASSROOM PULSE ]                                                                             |
|  +---------------------------------------------------------------------------------------------------+  |
|  | NEXT ACTION: 7 students have not started today's Force & Motion task.                             |  |
|  | [ Broadcast 3-Min Hook & Prompt ]   [ View Class Live Heatmap ]                                    |  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                         |
|  [ PRIMARY HERO: ASSIGN TODAY'S RECOMMENDED TASK ]                                                      |
|  +---------------------------------------------------------------------------------------------------+  |
|  | Science · Grade 8 · 20 min · Low Resource · Push, Pull & Friction                                  |  |
|  | "SCI-8-FORCE-1.1: Observe push/pull actions around classroom and classify net effect on motion"   |  |
|  |                                                                                                   |  |
|  | Key Outcome: Student identifies and contrasts push vs pull forces with 5 daily-life examples.      |  |
|  | Materials: Notebook, ruler, coin, eraser (No lab equipment needed).                                |  |
|  |                                                                                                   |  |
|  | [ PREVIEW & ASSIGN (30 sec) ]           [ Browse Other Grade 8 Tasks (62) ]                       |  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                         |
|  [ ACTIVE ASSIGNMENTS TODAY (1) ]                                                                       |
|  +---------------------------------------------------------------------------------------------------+  |
|  | Class 8-B  |  SCI-8-FORCE-1.1  |  Code: S2S-8B  |  26/38 Completed (68%)  |  5 Stuck  |  7 Not Started|
|  | [ Open Real-Time Dashboard ]   [ Print Worksheet PDF ]   [ Share via WhatsApp ]                   |  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                         |
|  [ SECONDARY: JUMP TO OTHER SUBJECTS / GRADES ]                                                         |
|  ( ) Mathematics (Grade 8)   ( ) AI Scoping (Grade 8)   ( ) Social Science (Grade 8)   ( ) Change Grade |
+---------------------------------------------------------------------------------------------------------+
```

### Screen 2: Task Preview Page (All-in-One Single Screen)

```
+---------------------------------------------------------------------------------------------------------+
| <- Back to Home   |   TASK PREVIEW: SCI-8-FORCE-1.1                                                     |
+---------------------------------------------------------------------------------------------------------+
|  HEADER:                                                                                                |
|  Science · Grade 8 · Middle Stage · 20 min · Low Resource · NCERT Ch 11 Force & Pressure, p. 132       |
|  "Watch a 3-minute video/demo showing push/pull actions; list 5 examples from daily life."              |
|                                                                                                         |
|  +---------------------------------------------------+-----------------------------------------------+  |
|  | LEFT COLUMN: PEDAGOGY & TEACHER RUN SHEET         | RIGHT COLUMN: STUDENT VIEW & WORKSHEET        |  |
|  |                                                   |                                               |  |
|  | 1. Learning Outcome & Success Criteria:           | 1. Student Instructions:                      |  |
|  | - Student identifies min 5 distinct examples.     |    "Look around your classroom or desk. List  |  |
|  | - Accurately categorizes into Push vs Pull.       |     5 actions. State whether each is a Push   |  |
|  |                                                   |     or Pull, and what happened to the object."|  |
|  | 2. Teacher 3-Step Classroom Timing:               |                                               |  |
|  | - 00-05 min: Hook (Push heavy table vs paper).    | 2. Bilingual Support (Hindi):                 |  |
|  | - 05-20 min: Independent / Pair Task.             |    "अपने आसपास 5 उदाहरण खोजें (धक्का या खिंचाव)|
|  | - 20-25 min: Debrief & Misconception Check.       |                                               |  |
|  |                                                   | 3. Scaffold & Extension:                      |  |
|  | 3. Top Misconceptions to Address:                 | - Scaffold: Pre-filled row (Door handle=Pull) |  |
|  | - Misconception: Force is inside the object.      | - Extension: Can push and pull occur together?|  |
|  |   Fix: Force is an *interaction* between two.     |                                               |  |
|  |                                                   | 4. Printable Student Handout:                 |  |
|  | 4. Discussion Prompts:                            |    [ Preview / Print 1-Page Worksheet PDF ]   |  |
|  | - "Can an object move without continuous force?"  |                                               |  |
|  +---------------------------------------------------+-----------------------------------------------+  |
|                                                                                                         |
|  STICKY BOTTOM ACTION BAR:                                                                              |
|  [ Print 38 Worksheets (1-Click) ]      [ Share to WhatsApp Group ]     >>> [ ASSIGN THIS TASK NOW ] <<<|
+---------------------------------------------------------------------------------------------------------+
```

### Screen 3: 3-Click Assignment Flow (Modal / Slide-Over)

```
+-------------------------------------------------------------------------+
| ASSIGN TASK IN 3 CLICKS                                             [X] |
+-------------------------------------------------------------------------+
|  Task: SCI-8-FORCE-1.1 (Push & Pull in Daily Life)                      |
|                                                                         |
|  STEP 1: SELECT CLASS & STUDENTS                                        |
|  [ (•) Class 8-B (38 Students) ]    [ ( ) Class 8-A ]   [ ( ) Custom ]  |
|                                                                         |
|  STEP 2: DUE WINDOW & DELIVERY MODE                                     |
|  Target: [ In-Class Today (Next 30 min) v ]                             |
|  Mode:   [ [•] Digital (Phones/Laptops) ]  [ [•] Offline Printed Sheets]|
|                                                                         |
|  STEP 3: LAUNCH!                                                        |
|  +-------------------------------------------------------------------+  |
|  |             >>> [ CONFIRM & LAUNCH TO CLASSROOM ] <<<             |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
|  ======================= UPON 1-CLICK LAUNCH =========================  |
|  +-------------------------------------------------------------------+  |
|  | SUCCESS! Task is Live for Class 8-B                               |  |
|  |                                                                   |  |
|  | 1. Student Access Code:   [  S2S-8B  ]  (Large letters on board)  |  |
|  | 2. QR Code:              [ [QR CODE] ] (Scan with camera/tablet)  |  |
|  | 3. WhatsApp Direct Share:[ Share Student Link on WhatsApp ]       |  |
|  | 4. Offline Printouts:    [ Print 38 Student Worksheets PDF ]      |  |
|  |                                                                   |  |
|  | [ GO TO LIVE CLASSROOM MONITOR ]                                  |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
```

### Screen 4: Teacher Dashboard (Above-the-Fold Interventions)

```
+---------------------------------------------------------------------------------------------------------+
| LIVE TASK MONITOR: SCI-8-FORCE-1.1 (Class 8-B)                   Class Code: S2S-8B | Live Sync [● Active]
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|  ABOVE-THE-FOLD SUMMARY:                                                                                |
|  +-----------------------+-----------------------+-----------------------+----------------------------+ |
|  | 26 COMPLETED          | 5 STUCK               | 7 NOT STARTED         | 73% CLASS MASTERY          | |
|  | (On track for badge)  | (Needs intervention)  | (Absent or lagging)   | (Avg Score: 4.6 / 5)       | |
|  +-----------------------+-----------------------+-----------------------+----------------------------+ |
|                                                                                                         |
|  ACTIONABLE INTERVENTION FLAGS (Plain Language - No Jargon):                                            |
|  +----------------------------------------------------------------------------------------------------+ |
|  | [!] 7 students haven't opened the task yet (Aarav, Divya, Kabir, Pooja, Rohan, Shreya, Tanvi)     | |
|  |     SUGGESTED ACTION: [ 📢 Broadcast 3-Minute Hook to Board ]   [ Send WhatsApp SMS Reminder ]      | |
|  +----------------------------------------------------------------------------------------------------+ |
|  | [!] 5 students are stuck on Step 2 (Push vs Pull classification of friction)                       | |
|  |     SUGGESTED ACTION: [ 💡 Push Scaffold Clue to their screens ]   [ Group for 2-Min Mini-Lesson ] | |
|  +----------------------------------------------------------------------------------------------------+ |
|  | [*] 12 students finished early with 100% accuracy                                                  | |
|  |     SUGGESTED ACTION: [ 🚀 Unlock Extension Challenge: "Forces in Bicycle Braking" ]                | |
|  +----------------------------------------------------------------------------------------------------+ |
|                                                                                                         |
|  REAL-TIME STUDENT HEATMAP:                                                                             |
|  [ Filter: All (38) | Stuck (5) | Not Started (7) | Completed (26) ]                                    |
|                                                                                                         |
|  [01 Aarav K.  ] [02 Aditi M.  ] [03 Ananya S. ] [04 Arjun P.  ] [05 Bhavya N. ] [06 Chetan R. ]       |
|  [Not Started  ] [Completed    ] [Completed    ] [Completed    ] [Completed    ] [Completed    ]       |
|                                                                                                         |
|  [07 Deepak V. ] [08 Divya T.  ] [09 Farhan A. ] [10 Gayatri S.] [11 Harsh M.  ] [12 Ishaan B. ]       |
|  [Completed    ] [Not Started  ] [Stuck Step 2 ] [Completed    ] [Completed    ] [Completed    ]       |
|                                                                                                         |
|  [13 Jaya R.   ] [14 Kabir D.  ] [15 Kavita N. ] [16 Manish P. ] [17 Meera K.  ] [18 Neha G.    ]       |
|  [Stuck Step 2 ] [Not Started  ] [Completed    ] [Completed    ] [Completed    ] [Completed    ]       |
+---------------------------------------------------------------------------------------------------------+
```

---

## 3. Comprehensive Copy Deck

| Surface / Element | Copy Label | Plain-Language Rationale |
| :--- | :--- | :--- |
| **Teacher Home Hero CTA** | `Assign Your First Task` | Direct, action-oriented, zero hesitation. |
| **Secondary Task Action** | `Preview & Assign (30 sec)` | Sets clear time expectation; lowers cognitive friction. |
| **Empty State (No tasks yet)** | `Ready to start today's 20-minute class activity? We picked the best match for your syllabus below.` | Never a blank page; immediately supplies the recommended task. |
| **Task Preview Assign Button** | `Assign This Task Now` | High-contrast, unmistakable primary action. |
| **Print Button** | `Print 38 Worksheets (1-Click PDF)` | Specifies exact quantity and format for immediate classroom distribution. |
| **WhatsApp Share Button** | `Share via WhatsApp Class Group` | Recognizes standard Indian school communication channels. |
| **Class Code Display** | `Class Code: S2S-8B (Write this on the blackboard)` | Direct instructions for low-tech classroom instruction. |
| **Intervention Flag 1 (Lag)** | `7 students have not started yet.` | Actionable, non-punitive, plain statement of fact. |
| **Intervention Action 1** | `Broadcast 3-Min Hook to Board` | Gives teacher an instant physical classroom cue. |
| **Intervention Flag 2 (Stuck)**| `5 students are stuck on Step 2 (Distinguishing Friction).` | Pins the exact conceptual hurdle. |
| **Intervention Action 2**| `Send Scaffold Hint to Students` | Instant targeted remediation without interrupting the whole class. |
| **Intervention Flag 3 (Fast)** | `12 students finished early with full accuracy.` | Identifies extension opportunity immediately. |
| **Intervention Action 3**| `Unlock Extension Challenge` | Keeps advanced learners engaged constructively. |
| **Error Recovery Tooltip** | `No internet connection detected. Offline Mode active. Your task runs locally and will sync when reconnected.` | Reassures low-bandwidth teachers; prevents panic during class. |
| **Destructive Action Confirm**| `End task for all students? 12 students are still working. Their current answers will be saved.` | Transparent impact description with safe default. |
| **Contextual Micro-Help** | `"Show me how (30-sec tour)"` | Dismissable anytime, never blocks screen or requires video. |

---

## 4. 5-Minute Acceptance Test Protocol

**Test Persona:** Mrs. Sunita Sharma, Grade 8 Science Teacher at a government school in Jaipur. Has 5 minutes before the bell rings for Period 3. Uses an Android smartphone with 4G connectivity and has access to a school printer.

| Min:Sec | User Action | System Response | Pass Criteria |
| :--- | :--- | :--- | :--- |
| **00:00 - 00:30** | Lands on Subjects2Skills Teacher Fast-Track. | Screen immediately displays "Grade 8 · Section B" with the recommended task (`SCI-8-FORCE-1.1: Push & Pull in Daily Life`). No onboarding popups blocking screen. | Zero blank screen. Primary button "Assign Your First Task" visible above fold. |
| **00:30 - 01:15** | Clicks `Preview & Assign`. | Unified Task Preview opens: shows 3-step classroom run sheet, materials, student instructions, and misconceptions on one page. | No page-hopping or multiple tabs. Key terms readable at a glance in English and Hindi. |
| **01:15 - 01:45** | Clicks `Assign This Task Now`. | 3-Click Assignment modal opens with Class 8-B pre-selected. Teacher selects "Today's Class" and clicks "Confirm & Launch". | Max 3 clicks from preview to live launch. Total elapsed time under 2 minutes. |
| **01:45 - 02:30** | Teacher shares task with class. | System displays 6-character code `S2S-8B`, QR code, WhatsApp share button, and "Print Worksheets" button. Teacher writes code on blackboard and taps "Print Worksheets". | Clean 1-page printable worksheet opens instantly with pre-formatted student name, roll number, and scaffolded table. |
| **02:30 - 04:00** | Students enter code or scan QR code. | Teacher opens Live Classroom Monitor. Completed count updates in real time (26 completed, 5 stuck, 7 not started). | Heatmap tiles visually reflect student statuses with color coding. |
| **04:00 - 04:45** | Teacher observes Intervention Flags. | Flag prompts: "5 students stuck on Step 2". Teacher clicks "Push Scaffold Hint". Students receive immediate guidance. | Remedial action executed in 1 click without disrupting other 33 students. |
| **04:45 - 05:00** | Period completes. | Teacher clicks "Wrap Up Task". Summary report generated with one click for school register. | **Full cycle completed in 4 min 45 sec without training, manual, or external help.** |
