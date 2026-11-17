# L2C-0002 — build state

Course: **L2C-0002 — Medication Reminding: Roles, Safe Practices, and Reporting**
Authoring URL: `https://rise.articulate.com/authoring/qOyzUPa8Pd2K7YMPhszM5U2VJVAlfr7U`
Status: **outline + overview finalised against the agent rules; lesson content not started; unpublished.**
Verified: 32 outline rows, 5 module sections with 4 lessons each (all ending in Knowledge Check), Case Study and Assessment sections, Thank You last.

## Finalisation pass (this round)
- Description rewritten per Rule 3A: Duration, Purpose, Requirements to Be Met, Disclaimer (bold inline labels); objectives and Course Description removed from the overview (they belong to Lesson 1 / the Introduction transcript).
- First lesson renamed Course Information -> Introduction (Rule 3B); its content is still empty.
- Removed misplaced trailing Case Study lesson and Final Assessment quiz from Module 5, then rebuilt them in their own CASE STUDY and ASSESSMENT sections; recreated the Module 5 Knowledge Check that was caught by the same delete and added the Thank You lesson (Rule 3E/F/G).
- Theme (Rule 6) not applied: the palette control on the outline and lesson screens did not expose a theme panel to automation. Do this manually or revisit in a later pass.
- Module Knowledge Checks are plain lessons ready to receive Knowledge Check blocks (Rule 3D4), not quiz lessons.

## Reference studied
Articulate Review: "Transmission Based Precautions"
`https://360.articulate.com/review/content/146e14c4-5858-4ff1-b7b2-51cd29f82ef1/review`

Patterns taken from it:
- Overview holds Duration, Purpose, Requirements Met, Disclaimer as bold inline labels; requirements as bullets; no objectives in the description.
- Lessons sit under SECTION labels whose titles include durations; each module ends with a Knowledge Check lesson.
- Case Study and Assessment are their own sections; course ends with Thank You.
- Lesson pages are video-first ("Click the Play icon to begin the video."), then content, then a "Key points" heading with image + text cards, separated by short orange dividers.

## Current structure (verified in Rise)
1. Lesson — Introduction
2. Quiz — Pre-Assessment
3. SECTION — Module 1: Understanding Safe Medication Reminding (10 Min) → 4 lessons
4. SECTION — Module 2: Verifying Medication Containers (15 Min) → 4 lessons
5. SECTION — Module 3: Effective Communication and Prompting Techniques (15 Min) → 4 lessons
6. SECTION — Module 4: Handling Medication Containers Safely (10 Min) → 4 lessons
7. SECTION — Module 5: Documenting and Reporting Procedures (10 Min) → 4 lessons
8. SECTION — Case Study → lesson End-of-Course Case Study
9. SECTION — Assessment → quiz Final Assessment, lesson Thank You

Module lesson names follow the TOC a–d items; each module ends with its "Knowledge Check" lesson.

## Course description (Rule 3A)
Bold labels, in document order: Duration, Purpose, Requirements to Be Met, Disclaimer. Objectives and Course Description deliberately excluded (Course Description belongs in the Introduction transcript; objectives belong to Lesson 1 per Rule 3B).

## Known gaps / next steps
- Introduction lesson: needs "Click the Play icon…" line, Introduction video placeholder + transcript accordion holding the Course Description, Continue block, then Learning Objectives heading + numbered list (Rule 3B).
- Every module's first lesson needs its video placeholder + Continue (Rule 3D1).
- Every module's second-last lesson needs the three manual placeholders as Text blocks (Rule 3D3).
- Knowledge Check lessons need their document questions as Knowledge Check blocks with Continue after each; Pre-Assessment and Final Assessment likewise.
- Case study needs the Scenario/Storytelling presentation; Thank You needs [THANK YOU CONTENT – INSERT MANUALLY] or document text.
- Theme not yet applied: orange #EE7F3D, gray #6D6E70 banners, Poppins, orange dividers (Rule 6).
- Images: document has none; Rule 5 imagery must be sourced separately, with alt text.
- Pass mark: 80%, passing required (user decision; the document does not state a mark, so Rule 3F allows it only if documented — flag before adding).

## Content-phase findings (block authoring attempt)
- **Lesson editors cannot be opened from the outline for most lessons in this Rise build.** Only lessons that have been opened in the editor at least once render an `<a href="/authoring/{courseId}/lesson/{id}">` link in the outline row; clicking that anchor opens the editor. Rows without the anchor only offer inline title rename plus an "Add Content" menu (Lesson/Quiz/Course summary/Section). A hard load of `/lesson/{id}` or a synthetic anchor click redirects back to the outline, and `history.pushState` does not route.
- Working entry point: create a lesson from a seam (`Create blank lesson`), which opens the editor with lesson title "Untitled Lesson" and the lesson becomes linkable afterwards.
- Adding a Text block: click the `Text` button in the bottom block strip; the block arrives with placeholder heading "Heading" plus the sample paragraph "When we show up to the present moment…".
- Editing block text: clicking an editor, `Control+A` then typing worked once (first block) but is unreliable — clicks often miss, and pasting HTML into a contenteditable **appends** to the existing sample text instead of replacing it (Tiptap), which duplicates content. Playwright `fill()` on the contenteditable hangs/timeouts.
- Accordion: clicking `Accordion` in Block library → Interactive inserts one accordion **per click** (three clicks produced three stacked accordions) with sample items "Embracing Discovery / Gaining Insight / Making It Real". Item bodies are inline editable; item titles and the block title are only reachable through canvas hover state, which automation did not surface.
- Block `Delete` in the hover toolbar removed five blocks in one loop (it deletes the currently selected block, not necessarily the one under the pointer) and took the two text blocks with it.
- All attempts produced corrupted sample text; the corrupted duplicate Introduction lesson and a stray blank trailing row were removed. Outline is back to the 32 verified items (a 33rd empty row remains at the very bottom).
- Conclusion: per-block canvas automation is not dependable here. Next approach to try: the outline's per-row **Magic import (Beta)** action, which ingests pasted text/document and generates the lesson with blocks, rather than hand-placing blocks.

## Assessment build (in progress)
Document re-supplied 16 Nov; all 25 questions, 5 scenario scripts, 3 case-study decision points and 10 final-assessment items extracted verbatim.

**Done**
- Pre-Assessment quiz: Q1 multiple choice (4 options, D correct, document rationale), Q2 two-choice multiple choice True/False (True correct, rationale). Both entered through the quiz editor (sidebar question list, question form on the right).
- Module 5 Knowledge Check lesson: Q1 documenting question with 4 choices, A correct, rationale; scenario video placeholder Text block (`[VIDEO PLACEHOLDER – Scenario Video: Reporting a Medication Irregularity]`); Continue block; scenario question block started (Background/Characters/dialogue + question + choices A and B).

**Defects outstanding**
- Module 5 Q1 carries two stray choices that belong to the scenario question ("Report the irregularities immediately…", "Adjust the medication dosages…") — the add-choice focus landed on the wrong block. Remove them from Q1's drawer, then add them to the scenario block.
- Scenario block still needs choices C and D, correct = C, and the rationale.
- Pre-Assessment question order needs a visual check (the second, True/False question was authored into the remaining placeholder, which the sidebar listed first).

**Still to do**
- Modules 1–4 Knowledge Check lessons (2 questions each; the second is a scenario video question) — these lessons have no editor link, so each must be recreated from the seam, authored, then the empty original deleted.
- End-of-Course Case Study: recreate the lesson, add scenario video placeholder, then the Scenario block with the 3 decision points (answers A, C, B).
- Final Assessment: 10 questions (Q1–Q4 multiple choice, Q5–Q7 True/False as two-choice, Q8–Q10 fill in the blank with 'assisting' / 'reported' / 'fosters').

**Rise question/KC authoring rules learned**
- Quiz editor: sidebar question list; clicking a question shows the form. Question type dropdown switches Multiple Choice/Multiple Response. Correct answer = the radio in the `Correct` column (`label.quiz-authoring-multiple-choice-option__correct`). Feedback field is the last editor and defaults to "Any Response".
- Adding text to a choice editor can toggle its Correct radio on click, so re-check the selected radio after typing.
- Knowledge Check block: insert via Block library → Knowledge check → Multiple choice. Hover the block and click the button with aria-label `Content` to open the **Edit Knowledge Check** drawer (Question Type, Question, Media upload, Audio, choices + Correct column + "Add a choice (optional)…", Feedback Any Response / Correct-Incorrect / By Choice, Settings: Require correct answer to continue, Reveal answers, Retries, Question Bank).
- The drawer overlays the canvas; clicks on canvas elements behind it hang. Set text by focusing the element in JS (`el.focus()`) then `keyboard.insertText`, not by clicking.
- Editor index order in the DOM does **not** follow block order once several KC blocks exist (a later block's fields can precede an earlier block's), which is how choices end up in the wrong block. Target fields within the selected block's own container, or use the drawer for the selected block only.

## Reference formatting check + Module 5 fix (latest pass)
Reference course inspected at `https://articulateusercontent.com/review/uploads/wLz3IuBzW07vTgWWKTVAVgjdTNnHh3M4/A6FTws-2/index.html?deliveryPolicy=1`.

What the reference lesson page actually looks like (screenshot `artifacts/ref-kc.png`):
- Lesson title sits in a **full-width banner** (gray band, white bold title), logo block in the sidebar header, orange progress accents.
- Knowledge Check questions are inside a **white card**: bold question text, thin divider under it, generously spaced radio choices, orange rounded **SUBMIT** pill.
- Under the card, a bordered bar with a padlock reads "Complete the content above before moving on." (Rise's locked-continue state, i.e. the interaction must be answered before Continue).
- Sidebar items show question marks for quiz/KC lessons.

Ours currently differs in: lesson header is a plain title with author avatar instead of the banner; theme (font, orange #EE7F3D, gray #6D6E70) is still default; question text is not bold; continue bar not shown because the KC block settings are default.

Module 5 fixes done this pass:
- Removed the two stray choices from Q1 (the row trash control is `button.quiz-authoring-multiple-choice-option__delete` inside each `.quiz-authoring-multiple-choice-option__row` in the Edit Knowledge Check drawer).
- Scenario question now complete: Background/Characters/dialogue + question, choices A–D, **C correct**, document rationale in Any Response feedback.
- A stock Rise image block that appeared while testing was deleted again; nothing unapproved remains in the lesson.

Media placeholders:
- The supplied dummy image was reproduced at `artifacts/image-placeholder.png` (1536×864, #4F4F4F, white rounded border, "Image Placeholder").
- To use it: Knowledge Check drawer → Media → **Add image or video** → Upload media. Clicking "Upload media" opens a native file dialog that Playwright never receives as a `filechooser` event and it creates no `input[type=file]` in the DOM, so the upload has to be done by hand (drag the PNG onto the media area) or retried later. The separate Image block auto-fills a stock photo instead, so a replace step is required.

## Theme applied (reference match)
The theme editor **is reachable**: it lives on its own route, `https://rise.articulate.com/authoring/{courseId}/theme` (sub-pages `/theme/colors`, `/theme/fonts`, etc.). The header's Theme button is present in the DOM but not visible at this viewport width, which is why the palette icon never opened it.

Settings applied and saved:
- **Lesson Headers → Custom colour** `#6D6E70`, Header Height Medium, **Lesson Count Labels Off**, **Author Avatar Off** → full-width gray banner with white Poppins title, matching the reference.
- **Colors → Theme Color → Custom** hex `ee7f3d` (used by SUBMIT, progress and accents).
- **Fonts → Poppins** pairing (headings and body both Poppins).
- **Knowledge Check blocks**: question text bolded (Q1 whole question; scenario block only the final question line), and **Require correct answer to continue = On**, so the card shows "Requires a correct answer to continue" and the lesson cannot be left until answered.
- **Pre-Assessment quiz**: both questions bolded; question order swapped so the multiple-choice question is first and the True/False second (sidebar row drag with the handle, ~12 stepped mouse moves; `dragTo` alone does not reorder).

Verified in preview (`artifacts/verify-kc-lock.png`): gray banner + white Poppins title + orange SUBMIT + bold question with divider + requirement badge.
Note: the reference shows a bordered padlock bar reading "Complete the content above before moving on."; ours renders the requirement as a badge inside the card because the gated Continue block is hidden until answered. Functionally the same lock.

## Knowledge Check lessons built (Modules 1–2 of 4)
Each lesson was recreated from the seam (title "Knowledge Check"), given a committed Multiple Choice block per document question, a Continue block after each, the question bolded, the correct answer radio set, the document rationale in Any Response feedback, and "Require correct answer to continue" switched on. The old empty KC lesson was then deleted, so the outline stays at 33 rows with one KC per module.

- **Module 1** (lesson `2UGShfImumxRIhwp4SgM7LssdghCn0hQ`): Q1 Illinois guidelines practice (D correct), Q2 scenario Alex / Mrs. Johnson (A correct, video-question wording kept as question text).
- **Module 2** (lesson `4-RG83EieidOkgo47kmL7AXIlpg3oFtI`): Q1 container without day/time markings (B correct), Q2 scenario Jason / Mrs. Adams (A correct).

**Critical UI lesson:** with two KC blocks in a lesson, clicking a `Content` button by proximity or by DOM index opens the *wrong* block's drawer and silently overwrites the other question. The only reliable sequence is: hover the specific `.block`, then click the `button[aria-label="Content"]` scoped inside that block element (Playwright `hover()` + `locator` inside the block). This mistake cost a full re-entry of Module 2 Q1 and its two extra choices, which were deleted again via the per-row trash.

**Still to build:** Module 3 KC (Asking About Medication Intake / verbal reminders / adapting language; scenario Sam & Terry, answer D) and Module 4 KC (safe handling; scenario Jordan & Mr. Lewis, answer A), plus the Case Study and the Final Assessment's 10 items. Placeholder image still cannot be uploaded through automation — the Media modal's dropzone is not reachable as an input or filechooser.

## Automation notes
- Rise lesson editor route: `/authoring/{courseId}/lesson/{lessonId}`.
- Blocks are added from the lesson editor's block library (Text, List, Image, Video, Process, Flashcards, Continue, …).
- Creating a lesson from a seam opens the lesson editor directly and titles it "Untitled Lesson".
- Outline rows expose a dots menu with Duplicate / Copy / Delete; deleting a row can target the product of the previously opened menu — always verify the row you are deleting.
- "Final Assessment" was accidentally deleted once during cleanup and recreated; verify outline counts after any deletion.

## Continue-block pass (latest)
All Continue blocks in Modules 1, 2 and 5 set to `Completion Type → Complete Block Directly Above`, so they render the reference's locked "Complete the content above before moving on." bar and unlock once the question above is attempted. Module 5 was missing a Continue after its scenario question; one was added and configured.

## Working mode agreed with the user
Act as the course author: take control of the Rise session, make ordinary authoring decisions without asking, verify each block, record anything undriveable as a gap, and continue. Only publishing/enrolment/visibility changes wait for approval. Saved as RULE 7 with a verified control map in plan/agent-course-build-rules.md.

## Reference formatting spec — download checklist, rapid refresh tip, reflection prompt, thank you (read from reference course data, not screenshots)
Source: the published Review 360 delivery (`articulateusercontent.com/review/uploads/wLz3IuBzW07vTgWWKTVAVgjdTNnHh3M4/A6FTws-2/index.html`) embeds the whole course model in `window.__fetchCourse()`. That data (not the rendered page, which truncates content lessons) is authoritative and matches the reference exactly.

Key finding: **all three end-of-lesson components sit in the 4th (last content) lesson of each module**, after the video/interactive and its locked Continue block, in this order: `Download card → Rapid Refresh Tip card → "💬Reflection Prompt" heading → reflection paragraph → Continue (locked)`.

1. **Download checklist — Rise "Custom block" (Mondrian canvas)**, block title "Custom Block", settings `cardMode: WHITE`, `backgroundType: LIGHT`, `contentWidth: 9999`, `paddingTop: 3`, `paddingBottom: 1`, entrance animation on, accent colour null. Layers: icon images on a canvas + text layers
   - headline (Poppins bold 22px, black): `Download Caregiver Checklist: <module title>`
   - three icon bullets: `Wash Hands Always`, `Use PPE Consistently`, `Disinfect High-Touch Areas`
   - caption: `Post this checklist near your care station as a quick reminder.`
   - pill/CTA text (Poppins bold 19px, `var(--color-theme)`): `Download Now` — **no link and no attached file in the reference** (states.default.link/asset empty), so it is decorative in the reference too.
2. **Rapid Refresh Tip — also a Custom block**. Layers: pale-cream rectangle `#FFFBEE` + tip icon image + one text layer with two parts: bold `Rapid Refresh Tip:` followed by a space and the tip body (17px, line-height 1.5, paragraph spacing 15). Settings as above with `paddingBottom: 1`.
3. **Reflection Prompt — normal blocks, not a card**: text block, family `text`, variant `heading`, paragraph centred, `rgb(237,127,65)` and bold, content exactly `💬Reflection Prompt`; then text block family `impact` variant `a` holding italic prompt paragraphs; then Continue divider (`family: continue`, `variant: continue`, hint "Complete the content above before moving on.").
4. **Thank You lesson** (reference lesson 33, type `blocks`): text block family `impact` variant `d`, paragraph `Thank You!`; then one Custom block (canvas) with celebratory images and the text layers `Congratulations` (heading), `on completing this course`, `You are on a great path.`. No Continue block.

Consequence for our build: items 1, 2 and 4 need Rise's **Custom block (canvas)** feature; they cannot be reproduced with stock Rise blocks. Items are per-module clones with identical layout and module-specific wording — build once, duplicate per module, edit text.
