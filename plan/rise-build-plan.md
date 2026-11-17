# Rise build plan — L2C-0002 Medication Reminding

Derived from `L2C-0002 - Medication Reminding Roles, Safe Practices, and Reporting.docx` (54,861 characters).
Nothing has been created in Rise yet. This is the plan to approve before the agent drives the editor.

## Course settings

| Field | Value |
|---|---|
| Title | Medication Reminding: Roles, Safe Practices, and Reporting |
| ID | L2C-0002 |
| Duration | 60 minutes |
| Audience | Home Service Worker, Illinois |
| Level / category | Beginner / Non-medical |
| Description | Paragraph from "Course Description", verbatim |
| Cover image / theme | Not supplied — needs a decision |

## Structure: 9 lessons, 125 blocks

## Confirmed build settings

- Pre-assessment: quiz lesson, **not counted** toward completion or score.
- Final assessment: **80% pass mark, passing required**.
- Download markers: placeholder link blocks; URLs added manually after the build.
- Demo videos: **Multimedia placeholder** blocks; replace with produced videos.
- Theme/cover: Rise defaults until the style guide arrives.
- Blocks: native Rise blocks only; no saved Block Templates.

| # | Lesson | Blocks | Notes |
|---|---|---|---|
| 1 | Course overview | 5 | Purpose, requirements, description, disclaimer, objectives |
| 2 | Pre-assessment | 2 | Quiz lesson, excluded from final score |
| 3 | Module 1: Understanding Safe Medication Reminding | 22 | 10 min |
| 4 | Module 2: Verifying Medication Containers | 22 | 15 min |
| 5 | Module 3: Effective Communication and Prompting Techniques | 22 | 15 min |
| 6 | Module 4: Handling Medication Containers Safely | 20 | 10 min |
| 7 | Module 5: Documenting and Reporting Procedures | 19 | 10 min |
| 8 | End-of-Course Case Study | 3 | One Scenario block, 3 decision points |
| 9 | Final Assessment | 10 | Pass mark to be agreed |

## Reusable mapping rules applied

| Word pattern | Rise block | Example |
|---|---|---|
| `##` heading + body | Text block (heading + paragraph) | Every content section |
| `## Module Objectives` | List (checkbox) | 3–5 objectives per module |
| `## Key Terms` | Flashcards | 4–5 pairs per module |
| Numbered procedure | Process | Label verification, opening containers |
| Bulleted support points | List (bulleted) | "Keep in mind" bullets |
| Two-column table | Table | Check / If not, do this |
| "What you might say" | Quote | Script lines |
| "Example documentation" | Statement (note) | Sample care notes |
| "During a visit" | Statement (note) | Vignettes |
| "Demo-Based Video" | Multimedia placeholder | Replace with the produced video |
| "… Checklist" | List (checkbox) + download placeholder | 4 items per module |
| "Rapid Refresh Tip" | Statement (note) | One-liner |
| "Reflection Prompt" | Text | No answer field in Rise |
| `Question N` + options | Knowledge Check | Feedback = rationale |
| Case-study decision points | Scenario | Answers A, C, B |

## What the agent does, in order

1. **Course shell** — Create course, set title/description, choose theme, create the 9 lessons in order.
2. **Lesson 1** — Fill overview blocks verbatim.
3. **Pre-assessment** — Two knowledge checks, rationales as feedback, exclude from score.
4. **Modules 1–5** — For each: objectives checklist → key terms flashcards → content sections (text/process/list/table) → script quotes and note blocks → video script accordion → checklist → tip → reflection → knowledge checks.
5. **Case study** — One Scenario block with three decision points.
6. **Final assessment** — Ten knowledge checks with agreed pass mark.
7. **Stop.** No publishing, no enrollment, no library visibility change without your explicit go-ahead.

After each lesson the agent saves, then reports what was created and anything it could not place.

## Decisions needed before the build

1. Drop the Table of Contents? **Recommended yes** — Rise's own lesson navigation replaces it.
2. Pre-assessment: quiz lesson **not counted** toward completion? (Rise supports this.)
3. Final assessment: pass mark (e.g. 80%) and whether passing is required to complete.
4. The five `Download` markers reference checklist files that are **not in the document**. Provide the PDFs, or accept checklist blocks without attachments.
5. Demo videos do not exist. Scripts will sit in accordion blocks marked for replacement; confirm that is acceptable.
6. Cover image and theme.
7. Do any of your saved Rise **Block Templates** match these? If yes, name them and the agent will reuse them instead of native blocks, swapping text only.

## Honest constraints

- Rise has no authoring API. The agent must drive the editor UI, so a Rise interface change can break it mid-run, and long lessons are slow (tens of seconds per block).
- UI automation may conflict with Articulate's terms; that call is yours.
- Images: the document contains none, so there is nothing to import. Alt text must be authored if images are added later.
- The document's video scripts reference footage that does not exist, and two knowledge checks are captioned "scenario video" without a video. Both are handled as text.
