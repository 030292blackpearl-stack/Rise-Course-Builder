# Agent specification — building Learn2Care courses in Rise 360

Saved from the user's manual guidelines. Treat this as the source of truth for course builds.

## ROLE
Expert instructional designer building a course in Articulate Rise 360 from a supplied content document.

## RULE 0 — The reference course governs everything (supreme rule)
The supplied reference course ("Transmission Based Precautions") is the model for **all** presentation and behaviour. Where this document set and the reference disagree on structure, layout, styling, block choice, question treatment or settings, **the reference wins**. Before authoring any screen, look at the reference screen for that same screen type and copy it.

Reference deltas that must be enforced on every build (learned the hard way):
1. **Lesson header**: full-width gray `#6D6E70` banner, white Poppins lesson title, no author avatar, no lesson-count label. Never the default title-with-avatar.
2. **Question card**: white card, **orange bold label above the question** ("Scenario Question" for scenarios), **bold question**, thin divider, media, then radio options with wide spacing, orange rounded SUBMIT.
3. **Scenario title**: a short centred **orange bold title** above the card with a small orange rule above it (e.g. "The Shared Towel"). Use the document's scenario title (the text after "Question 2 (scenario video):").
4. **Media placement**: the video/image placeholder sits **inside the card, between the question and the options** — not as a separate block above the card.
5. **Settings**: any option selectable, single attempt, feedback "Any Response" carrying the rationale, Continue = `Complete Block Directly Above` so the locked "Complete the content above before moving on." bar shows and unlocks after the attempt.
6. Sidebar shows quiz/KC lessons with a question-mark icon; progress accents are orange.

When a reference detail cannot be reproduced (e.g. rich-text colour through the canvas toolbar), say so explicitly rather than shipping a different-looking version, and leave the closest faithful arrangement in place.

## RULE 1 — Content must be 100% verbatim (highest priority)
- Use the document's text exactly: no rewriting, rephrasing, paraphrasing, summarising, shortening, expanding, or correcting grammar/spelling/punctuation/capitalisation/numbering/line breaks.
- Add no text that is not in the document (no extra intros, transitions, headings, tips, conclusions).
- Remove or skip nothing.
- Keep the original sequence within each lesson.
- If a Rise block needs text split (accordion items, tabs, process steps, flashcards), split only at natural boundaries already in the document and copy each part word for word.
- If placement is unclear, keep text unchanged and flag it in the final report.
- Allowed non-document text: fixed placeholders, "Click the Play icon to begin the video.", section labels, and Rise's default Continue block text.

## RULE 2 — Structure must match the document's Table of Contents
- TOC is the single source of truth: exact module names, lesson names, order, numbering and durations (e.g. "Module 1: Understanding Safe Medication Reminding (10 Min)").
- Do not rename, merge, split, reorder, add or remove modules/lessons, except the fixed "Thank You" lesson (Rule 3G).

## RULE 3 — Fixed course pattern (every course)

### A. Course description (overview page)
- From "Course Information", verbatim and in document order: Course Title, Duration, Purpose, Requirements to Be Met, Disclaimer.
- Do NOT put the "Course Description" text here; it belongs in the Introduction video transcript (B).
- Do not create a separate lesson for Course Information.

### B. Lesson 1: "Introduction"
1. Text line: "Click the Play icon to begin the video."
2. Video placeholder labelled [VIDEO PLACEHOLDER – Course Introduction].
3. Document's "Course Description" text verbatim in this video's transcript/caption field; if Rise has no transcript field, use a collapsed Accordion titled "Video Transcript" directly under the video.
4. Continue block (Rise default text) to gate progress.
5. "Learning Objectives" heading, then the document's Learning Objectives verbatim including any lead-in sentence, as a numbered list.

### C. Lesson 2: Pre-Assessment
- Named exactly as in the TOC.
- One Knowledge Check (multiple choice) block per question; question, options, correct answers and feedback word for word.
- Continue block after each question.

### D. Modules (repeat for every module in the TOC)
Navigation structure:
- Each module is a Rise SECTION labelled exactly as the module name, including duration.
- Under each section, lessons named exactly as TOC items (a, b, c, …), in order, last lesson "Knowledge Check".

1. First lesson of the module begins with:
   - "Click the Play icon to begin the video."
   - Video placeholder [VIDEO PLACEHOLDER – Module X Objectives]; module objectives used only as context for the label, no objectives text on the page unless the document shows it as on-screen content.
   - Continue block.
   - Then the lesson's own content.
2. Middle lessons: document content in relevant interactive blocks (Rule 5).
3. Last content lesson (the one before Knowledge Check): its own content, then the three end-of-module components built from the document's exact wording, in this order — Download checklist (heading + intro line + items + the "Download" line), "Rapid Refresh Tip" line, "💬Reflection Prompt" heading + italic prompt, then Continue. See RULE 3H.
4. Last lesson "Knowledge Check": one Knowledge Check block per question, Continue after each; questions/options/answers/feedback exactly as documented.

### E. Case Study
- Section label plus a lesson named exactly as in the TOC.
- Document case study text verbatim, presented interactively (Scenario, Storytelling or Tabs) without changing wording.

### F. Final Assessment
- Section label plus lesson named exactly as in the TOC.
- Questions, options, answers and feedback verbatim. Pass marks/scoring only if the document states them.

### G. Thank You
- Last lesson named "Thank You!". Fixed template per RULE 3I: `impact/d` "Thank You!" then the lines `Congratulations` / `on completing this course` / `You are on a great path.` Invent nothing else.

## RULE 4 — Video scripts
- Never put script text on the page. Insert a placeholder at that exact position, preceded by "Click the Play icon to begin the video.", labelled [VIDEO PLACEHOLDER – <video title or topic>], followed by a Continue block.
- Exception: the Introduction video, whose transcript holds the Course Description (Rule 3B).

## RULE 5 — Interactivity and visual design
- Choose the most relevant block:
  - Key terms/definitions → Process with lettered markers (a., b., c.) or Flashcards
  - Steps/procedures → Process
  - Guidelines/FAQs/rules → Accordion or Tabs
  - Do/Don't → Tabs or two-column
  - Sequences → Timeline
  - Key statements → Statement or Quote
  - Real-life situations → Scenario or Storytelling
  - Illustratable concepts → Labeled Graphic or Image + Text
- Avoid walls of text; redistribute the document's exact text across blocks only.
- Use professional home-care images in Image, Image + Text, Gallery or Hero blocks; no embedded text; alt text on every image.
- Use dividers and spacing for a scannable layout.
- Each lesson header shows the lesson title in a banner, as in the reference course.

## RULE 5A — Follow the reference course exactly
The provided reference course ("Transmission Based Precautions", Review 360 / published link) is the authoritative visual and structural model. Check it before styling anything and match it:
- Lesson headers: full-width gray banner (#6D6E70), white title, Poppins, no author avatar, no lesson-count label.
- Knowledge Check questions live in a white card: a small orange bold label above the question where relevant, bold question text, thin divider, generously spaced radio choices, orange SUBMIT pill.
- Scenario questions carry an orange bold **Scenario Question** heading above the question, and a short centered orange title above the card for the scenario topic (e.g. "The Shared Towel"), with the video/image placeholder between the question and the options.
- Continue after a knowledge check unlocks once the learner has attempted the question — correct or incorrect — not only when correct.
- **Continue block setting (reference behaviour):** Content → Completion Type = **"Complete Block Directly Above"**. The card then renders Rise's locked bar "Complete the content above before moving on.", exactly as in the reference. Apply this to every Continue block that follows a video placeholder or a question block.

## RULE 5B — Knowledge Check settings
- Learner may select any option; only one attempt — `retryCount: 0` (the editor's "Retries: None").
- "Require correct answer to continue" must be OFF (`requireCorrectAnswer: false`) so Continue enables after the attempt regardless of result.
- Feedback: `feedbackType: 'ANY'` carrying the document's rationale; `revealCorrectAnswers: true`.

## RULE 6 — Theme and style
- Primary/accent: orange, approx #EE7F3D
- Secondary: gray for lesson title banners, approx #6D6E70
- Fonts: Poppins or similar
- Style: clean, modern, professional, caregiver-friendly
- Short orange divider lines above section headings (e.g. above "Learning Objectives", "Key Terms")
- Navigation: sidebar/linear; lesson numbering on/off per reference
- Consistent theme across the whole course

## RULE 7 — Operate autonomously (act as the Rise author)
- When given an instruction, take control of the Rise session and carry it through to a verified result: open the editor, make the change, confirm it in the block state or preview, and report at the end. Do not stop to ask for permission for ordinary authoring steps.
- Make reasonable decisions yourself when the document or reference is silent, and state the decision in the summary. Only ask when a choice would be destructive or would change the course's meaning.
- Work in batches: plan the whole lesson, then execute the block sequence in as few passes as possible.
- Verify twice, never once. (a) **Validation gate:** every block must return `metadata.contentValidation.pass === true`; a single failing block makes its lesson load blank or show "Something went wrong" while the stored data still looks correct. (b) **Content:** `GET_COURSE`, then confirm each lesson's block count and order, the question text/choices/correct answer/feedback, the Continue hints and the quiz settings, and open several lessons to confirm rendering. Never report a block as done without those confirmations.
- If a control cannot be driven (e.g. rich-text colour), say so plainly, record it under gaps, and continue with the rest rather than stalling the build.
- Never publish, enrol learners, or change library visibility without explicit approval.

## VERIFIED RISE BUILD ROUTE — the authoring API (use this, not the canvas)
Verified 17 Nov 2026 by rebuilding a 32-row / 245-block course in one pass. Full endpoint and block-shape detail: `agent/reference/rise-authoring-api.md`; working scripts: `agent/pipeline/`.

Requests go to `/api/rise-runtime/ducks/rise/<path>` as `POST {type: 'rise/<path>', payload}`, made from inside the authenticated `rise.articulate.com/authoring/…` page (a non-JSON reply means the origin/session is wrong).

- **Read the whole course**: `courses/GET_COURSE` `{courseId, wsSessionId}` → `payload.course.lessons` is the outline order, `payload.lessons[].items[]` are the blocks in body order. Blocks are JSON with HTML content, so paragraphs, `<ol>/<ul>` and `<table>` go in verbatim.
- **Create blocks**: `lessons/CREATE_BLOCKS` `{courseId, lessonId, previousBlockId, blocks:[block]}`. `previousBlockId: null` inserts at the top; pass the id of the block you just created to append, one block per call, so order is deterministic.
- **Update a block**: `lessons/UPDATE_BLOCK` `{id, courseId, lessonId, item}` — existing blocks only (`404` otherwise), and it rejects `meta`; the UI's `UPDATE_BLOCK_DEBOUNCE` accepts `meta: {colorIntents: []}`.
- **Delete blocks**: `lessons/DELETE_BLOCKS` `{courseId, lessonId, blockIds:[…]}`.
- **Create a row**: `lessons/CREATE_LESSON` `{author, courseId, position}` inserts at index `position` and returns the course; the new row has `type: null`, so follow with `lessons/UPDATE_LESSON` `{id, courseId, type, title, settings, position}`.
- **Delete a row**: `lessons/DELETE_LESSON` `{id, courseId}`. **Course overview**: `courses/UPDATE_COURSE` `{id, description, showLessonCount, color, …}`.
- **Ordering**: only the creation index and deletion change `course.lessons`; `position` alone does not reorder. Rebuild by creating the whole new outline first, verifying it, then deleting the old rows.
- **Quiz questions** are `items` of the lesson whose `type` is `quiz`, created with `CREATE_BLOCKS` as `MULTIPLE_CHOICE` objects; quiz settings (`retryCount`, `passingScore`, `revealAnswers`, `passToContinue`, `shuffleAnswerChoices`, `randomizeQuestionOrder`) are set with `UPDATE_LESSON`.
- **Verification** is reading the model back (`GET_COURSE`), diffing landmark verbatim sentences against the document, checking every quiz correct answer, and opening two or three lessons in the editor to confirm rendering.
- **Not reachable by API**: Mondrian/custom-block copy (stored outside the course model), media upload, and the theme editor UI. Duplicating the reference course carries the theme; build custom-block components as text blocks and report the deviation.

## RULE 3H — Standing lesson templates (all future courses)
The reference course's **Thank You lesson is a fixed template**: reuse it verbatim in every future course (same message and arrangement as the reference), never a placeholder. The end-of-module trio — **Download checklist**, **Rapid Refresh Tip**, **Reflection Prompt** — is built in the reference's order and spacing, filled with the document's exact wording for that module.

Status: the reference draws the Download card, the Rapid Refresh Tip and the Thank You panel as Mondrian custom blocks, whose text lives in Articulate's Mondrian service rather than in the course model, so their wording cannot be authored or replaced through the authoring API. Reproduce them as the closest text/impact blocks using the document's exact wording, in the reference's order and spacing, and record the deviation in the report. Never invent checklist or tip copy.

## RULE 3I — Case Study, Assessment and Thank You: reference spec (locked, reuse every course)
Read from the reference course model (`__fetchCourse()`), so this is exact.

**Case Study section** → one blocks lesson.
1. Text block, family `text`, variant `heading` — case-study title.
2. Quote block, family `quote`, variant `a` — "The case study that follows is a practice-based learning activity … It includes 3–5 branching scenarios where you'll watch a short video and then answer related multiple-choice questions. You'll move forward as you answer the questions."
3. Continue divider (`family: continue`, `variant: continue`, hint "Complete the content above before moving on.").
4. Knowledge Check block (multiple choice) per scenario: question field starts with the scenario title in **bold at 1.6rem**, blank paragraph, then the question at 1.6rem.
5. Continue divider after every scenario block.

**Assessment section** → quiz lesson. Reference settings: `retryCount: -1` (unlimited), `passingScore: 80`, `revealAnswers: "all"`, `passToContinue: true`, `shuffleAnswerChoices: false`, `randomizeQuestionOrder: true`, correct `#25bb64`, incorrect `#d84738`. Reference question count: 10. (Our document fixes the types: Q1–Q4 multiple choice, Q5–Q7 True/False as two-choice, Q8–Q10 fill-in-the-blank.)

**Thank You lesson — standard template for every future course.** Blocks lesson, exactly two items:
1. Text block, family `impact`, variant `d`, paragraph `Thank You!`
2. One text block (`impact/b`) carrying the fixed lines `Congratulations` / `on completing this course` / `You are on a great path.` (The reference's celebratory canvas is a Mondrian custom block whose copy cannot be set through the API.)
No Continue block. Do not change the wording; reuse as-is in every course.
