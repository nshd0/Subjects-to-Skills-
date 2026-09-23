# Release v0.5 - Grades 3-10 Content Expansion

## Added
- **Curriculum Vintage Metadata:** Extended the data model to support `curriculumFramework`, `textbookStatus`, `academicSession`, `advancedTrackAvailable`, `thirdLanguageRequired`, and `sourceReference` metadata tags for accurate historical tracking.
- **Grades 3-8 Content:** Added subject maps for EVS, Science, Social Science, Mathematics, English, and Hindi, reflecting the published NCF-SE 2023 aligned NCERT textbooks. Missing mappings have been explicitly marked as "Skill mapping pending verification" rather than utilizing fabricated data.
- **Grade 9 Content:** Deployed Grade 9 mapping adhering to the newly released CBSE/NCF 2023 curriculum. Explicitly flagged textbook chapters as "new-ncert-rolling-out" where official finalizations are still pending. Added 3rd language and advanced track support.
- **Grade 10 Content:** Mapped existing pre-NCF 2023 Grade 10 syllabus correctly without retrofitting unverified NCF 2023 competencies. Added an explicit UI disclaimer noting the upcoming 2027-28 textbook transition.
- **Generic Grade Hubs (`/grade/:id`):** Created a scalable hub architecture extending the Grade 8 layout. Hubs now conditionally render curriculum status indicators per grade.
- **Skill Map Transitions:** Skill progressions spanning the Grade 9 (NCF 2023) to Grade 10 (pre-NCF) boundary now display an explicit "Curriculum Transition Note" inside the visual node detail pane.

## Verified
- Maintained zero regression on Grade 8 mappings and core v0.4 features.
- Re-tested Feature Flag isolation: `ENABLE_GRADE_RANGE_3_10` flawlessly rolls back all Grades 3-10 navigation entries to "Planned" when disabled.
