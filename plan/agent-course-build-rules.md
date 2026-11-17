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
3. Second-last lesson (just before Knowledge Check): normal content, then three placeholders as separate Text blocks in this order:
   [CHECKLIST TEMPLATE – INSERT MANUALLY]
   [RAPID REFRESH TIP TEMPLATE – INSERT MANUALLY]
   [REFLECTION PROMPT TEMPLATE – INSERT MANUALLY]
   Do not design these or put their document text on the page. List the exact document text for each in the final report.
4. Last lesson "Knowledge Check": one Knowledge Check block per question, Continue after each; questions/options/answers/feedback exactly as documented.

### E. Case Study
- Section label plus a lesson named exactly as in the TOC.
- Document case study text verbatim, presented interactively (Scenario, Storytelling or Tabs) without changing wording.

### F. Final Assessment
- Section label plus lesson named exactly as in the TOC.
- Questions, options, answers and feedback verbatim. Pass marks/scoring only if the document states them.

### G. Thank You
- Last lesson named "Thank You". Use document text if present; otherwise only the placeholder [THANK YOU CONTENT – INSERT MANUALLY]. Invent nothing.

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
- Learner may select any option; only one attempt (Retries: None).
- "Require correct answer to continue" must be OFF so the Continue button enables after the attempt regardless of result.
- Feedback: Any Response, carrying the document's rationale.

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
- Verify each block as you finish it (drawer shows the intended question/choices/correct answer/feedback; Continue shows the locked bar). Never report a block as done without that confirmation.
- If a control cannot be driven (e.g. rich-text colour), say so plainly, record it under gaps, and continue with the rest rather than stalling the build.
- Never publish, enrol learners, or change library visibility without explicit approval.

## VERIFIED RISE CONTROL MAP (for future sessions)
- Theme editor route: `/authoring/{courseId}/theme` (+ `/theme/colors`, `/theme/fonts`, `/theme/headers`). The header's Theme button is hidden at narrow viewport widths, so use the route.
- Lesson editor route only works for lessons that already expose an `<a href=".../lesson/{id}">` in the outline; otherwise recreate the lesson from the outline seam (`Add content before item N` → `Create blank lesson`), author it, then delete the empty original with the row's `button[aria-label="Remove lesson"]`.
- Hovering a block reveals its toolbar. Target that block's own `button[aria-label="Content"]` via a locator scoped to the block element; proximity or index-based clicking opens the wrong block's drawer and silently overwrites another question.
- Knowledge Check: Block library → Knowledge check → Multiple choice. Drawer = question, Media, Audio, choices with Correct radios, `Add a choice (optional)…`, Feedback (Any Response), Settings (Require correct answer / Reveal answers / Retries), Question Bank. Bold the question with Ctrl+A / Ctrl+B in the drawer editor.
- Continue block: `Content → Completion Type → Complete Block Directly Above` gives the reference's locked "Complete the content above before moving on." bar.
- Quiz editor: sidebar question list; step-drag the handle (≈12 mouse moves) to reorder; dragTo alone does nothing.
- Media upload: the Media modal's dropzone does not expose a file input or a `filechooser` event to Playwright — attach images manually, or find another upload route before promising it.

## RULE 3H — Standing lesson templates (all future courses)
The reference course's **Thank You lesson is a fixed template**: reuse it verbatim in every future course (same layout, message and block arrangement as the reference) instead of the `[THANK YOU CONTENT – INSERT MANUALLY]` placeholder. Likewise, the end-of-module trio — **Download checklist**, **Rapid Refresh Tip**, **Reflection Prompt** — must reproduce the reference's block styling, not plain text blocks: match the reference's block types, orange accents, icon/attachment treatment and spacing, then fill them with the document's exact wording for that module.

Status: reference screen formatting for these four components still needs to be captured from the reference course (lesson body would not render in the current session) before the blocks can be matched. Do not substitute a guess.

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
2. One Custom block (canvas): celebratory images, text layers `Congratulations` (heading), `on completing this course`, `You are on a great path.`
No Continue block. Do not change the wording; reuse as-is in every course.
