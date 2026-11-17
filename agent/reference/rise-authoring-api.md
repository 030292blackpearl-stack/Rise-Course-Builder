# Rise 360 authoring API — the supported build route

Verified end-to-end on 17 Nov 2026 by rebuilding a 32-row / 245-block course in one pass.
Use this instead of clicking the canvas. The UI recipe in `rise-automation-recipe.md` is only a fallback for things the API cannot do.

## Why this is the route

- `GET_COURSE` returns the **entire course model**: `course` (title, description, theme, `course.lessons` order) plus `lessons[]`, and every lesson carries `items[]` — the blocks, as JSON with HTML content.
- Blocks are plain JSON, so a Word document's paragraphs, numbered steps, bullets and tables go in **verbatim as rich HTML** inside text blocks. No paraphrase step exists anywhere in the pipeline.
- Every write is one POST with an exact payload, so a whole course is ~300 idempotent requests instead of ~1500 fragile UI interactions. Extra choices, correct-answer radios and feedback (the old blockers) are just fields.

## How to reach it

The endpoints are same-origin to `rise.articulate.com` and authorised by the signed-in authoring session. Run them from inside a page on that origin:

```js
// inside page.evaluate(...) on https://rise.articulate.com/authoring/...
const post = async (path, payload) => {
  const r = await fetch('/api/rise-runtime/ducks/rise/' + path, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ type: 'rise/' + path, payload }),
  });
  const text = await r.text();
  return { status: r.status, ok: r.ok, body: JSON.parse(text) };   // see "Gotchas" for the HTML case
};
```

Route prefix: `/api/rise-runtime/ducks/rise/`. Body is always `{ type, payload }`; `type` is `rise/<path>`.

## Read

### `courses/GET_COURSE`

```js
post('courses/GET_COURSE', { courseId, wsSessionId: 'any-string' })
```

Returns `{ type, payload: { course, lessons, labelSets, collaborators, locks, … } }`.

- `payload.course.lessons` — **array of lesson ids in outline order. This array is the order.** Sections are lessons with `type: 'section'`; they are not parents, they are just rows.
- `payload.lessons[]` — every lesson object: `id, type ('blocks' | 'quiz' | 'section'), title, position, settings, description, items[]`.
- `items[]` — the blocks in body order.
- `payload.course` — `title, description, color, theme, headingTypefaceId/bodyTypefaceId, showLessonCount, showAuthorAvatar, coverImage, …`.

Stash the JSON to disk from the Playwright sandbox (`require('fs').writeFileSync(...)`) so it can be diffed locally.

## Write

| Operation | Path | Payload |
| --- | --- | --- |
| Create blocks | `lessons/CREATE_BLOCKS` | `{ courseId, lessonId, previousBlockId, blocks: [block, …] }` |
| Update one block | `lessons/UPDATE_BLOCK` | `{ id, courseId, lessonId, item }` |
| Update one block (debounced, what the UI sends) | `lessons/UPDATE_BLOCK_DEBOUNCE` | same + `meta: { colorIntents: [] }` |
| Delete blocks | `lessons/DELETE_BLOCKS` | `{ courseId, lessonId, blockIds: [id, …] }` |
| Create an empty row | `lessons/CREATE_LESSON` | `{ author, courseId, position }` |
| Update a row | `lessons/UPDATE_LESSON` | `{ id, courseId, type, title, settings, position }` |
| Delete a row | `lessons/DELETE_LESSON` | `{ id, courseId }` |
| Update the course | `courses/UPDATE_COURSE` | `{ id, description, showLessonCount, color, … }` |

Notes that cost time if you learn them the hard way:

1. **`previousBlockId`** controls insertion. `null` inserts at the **top** of the lesson; pass the id of the block you just created to append after it. Create one block per call and chain the ids to get a deterministic order.
2. `CREATE_BLOCKS` **creates**; `UPDATE_BLOCK` only updates an existing block (`404 Block … not found`), and rejects `meta` (400 `"meta" is not allowed`).
3. `CREATE_LESSON` inserts at **index `position`** and returns the whole course. The new row starts with `type: null` and an empty title, so immediately follow with `UPDATE_LESSON` to set `type` (`blocks` / `section` / `quiz`) and `title`.
4. `UPDATE_LESSON` does **not** accept `items` — blocks are only ever created through `CREATE_BLOCKS`.
5. `UPDATE_LESSON_TITLE` needs `{ lesson: { id, title, updatedAt } }` and 500s easily — use `UPDATE_LESSON` instead.
6. **Ordering:** `position` alone does not reorder the outline. `course.lessons` only changes by creating at an index or deleting. The safe rebuild pattern is: **create the whole new outline first (appended at the end), verify it, then delete the old rows** — the new rows keep their relative order and slide to the front.
7. Server-side validation messages are helpful: POST an empty payload and read `details[].message` to discover required fields.

## Block JSON shapes (all verified in this tenant)

Every block needs `id`, `type`; most need `family`, `variant`, `items`, `settings`. The server fills `globalBlockId` and normalises `metadata`. Ids are yours to choose (unique strings).

```js
// Lesson / module title band — reference gray #747779, white bold text
{ id, type: 'text', family: 'text', variant: 'heading',
  items: [{ id, heading: '<div><p><span style="font-size: 3.8rem"><strong>Title</strong></span></p></div>' }],
  settings: { v: 2, cardMode: 'WHITE', textWidth: 92, paddingTop: 1, paddingBottom: 1, paddingLinked: true,
              backgroundType: 'COLOR', backgroundColor: '#747779', isCustomColor: true, entranceAnimation: true,
              accentColor: null, quotesInline: false, attachedToNextBlock: false,
              markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO', customBackgroundColorContrast: 'AUTO' },
  metadata: {}, background: {} }

// Body paragraph / list / TABLE (rich HTML — tables and <ol>/<ul> render)
{ id, type: 'text', family: 'text', variant: 'paragraph',
  items: [{ id, paragraph: '<div><p>…</p><ol><li><p>…</p></li></ol><table><thead><tr><th>…</th></tr></thead><tbody><tr><td>…</td></tr></tbody></table></div>' }],
  settings: { v: 2, cardMode: 'WHITE', textWidth: 92, paddingTop: 1, paddingBottom: 1, paddingLinked: true,
              backgroundType: 'LIGHT', entranceAnimation: true, accentColor: null, quotesInline: false,
              attachedToNextBlock: false, markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO',
              customBackgroundColorContrast: 'AUTO' },
  metadata: {}, background: {} }

// Statement ("During a visit", "Click the Play icon…"): family impact, variant b
// Reflective italic prompt: family impact, variant a (statementWidth 76, paddingTop/Bottom 0)
// Thank-you headline: family impact, variant d (COLOR #747779, 4.2rem bold)
// Quote ("What you might say"): type 'quote', family 'quote', variant 'a',
//   items[0] = { id, paragraph, name? }  (settings.avatar false)

// Locked Continue bar
{ id, type: 'divider', family: 'continue', variant: 'continue',
  items: [{ id, type: 'completeBlock', title: 'CONTINUE', buttonColor: 'brand',
            completeHint: 'Complete the content above before moving on.' }], settings: { … }, metadata: {}, background: {} }

// Flashcards
{ id, type: 'interactive', family: 'flashcard', variant: 'flashcard',
  items: [{ id, front: { description: '<div><p>Term</p></div>' }, back: { description: '<div><p>Definition</p></div>' } }, …], settings: {…} }

// Knowledge check (one question per block)
{ id, type: 'knowledgeCheck', family: 'knowledgeCheck', variant: 'multiple choice',
  items: [{ id, type: 'MULTIPLE_CHOICE',
            title: '<div><p><span style="font-size: 1.6rem"><strong>Question?</strong></span></p></div>',
            answers: [ { id, title: '<div><p><span style="font-size: 1.6rem">Choice</span></p></div>', correct: false }, … ],
            feedback: '<div><p><span style="font-size: 1.6rem">Rationale</span></p></div>',
            feedbackType: 'ANY', feedbackCorrect: '<div></div>' }],
  settings: { v: 2, cardMode: 'WHITE', paddingTop: 3, paddingBottom: 3, paddingLinked: true, retryCount: 0,
              backgroundType: 'GRAY', entranceAnimation: true, correctAnswerColor: '#25bb64',
              incorrectAnswerColor: '#d84738', revealCorrectAnswers: true, knowledgeCheckWidth: 92,
              requireCorrectAnswer: false, accentColor: null, quotesInline: false,
              markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO', customBackgroundColorContrast: 'AUTO' } }

// Final-assessment question — blocks inside a lesson whose type is 'quiz'
{ id, type: 'MULTIPLE_CHOICE',
  title: '<div><p><strong>Question?</strong></p></div>',
  answers: [ { id, title: '<div><p>Choice</p></div>' }, { id, title: '…', correct: true } ],
  correct: <id of correct answer>, corrects: [ <same id> ],
  feedback: '', feedbackType: 'CORRECT_INCORRECT',
  feedbackCorrect: '<div><p>Rationale</p></div>', feedbackIncorrect: '<div><p></p></div>', metadata: {} }
```

Quiz settings (their own JSON on the lesson):

```js
{ retryCount: -1, passingScore: 80, revealAnswers: 'all', passToContinue: true,
  correctAnswerColor: '#25bb64', incorrectAnswerColor: '#d84738',
  shuffleAnswerChoices: false, randomizeQuestionOrder: true }
```

## The one-pass build

1. **Read the document.** Extract the TOC, per-lesson text, questions/rationales, videos.
2. **Write the spec** as JS modules that build block JSON (`agent/pipeline/lib-blocks.js` + `content-1.js …`). Content is typed once, verbatim.
3. **Generate the payload** (`agent/pipeline/build.js`) — rows in TOC order: `{ title, type, blocks }` (or `questions` + `settings` for the quiz). Print the row/block counts and eyeball them.
4. **Create the outline** — `CREATE_LESSON` per row at `position = current length`, then `UPDATE_LESSON` for type/title; keep the ids in a file (`rowids.json`).
5. **Verify the outline** (32 rows, right types/titles) **before deleting** the old rows.
6. **Delete the old rows** (`DELETE_LESSON`).
7. **Create the blocks** in chunks of ~6–8 lessons per call, chaining `previousBlockId`. Return `created/expected` per lesson and fix any shortfall.
8. **Set the quiz settings** with `UPDATE_LESSON`, and the overview with `UPDATE_COURSE`.
9. **Verify**: re-`GET_COURSE`, write it to disk, and compare against landmark verbatim sentences from the document (see `agent/pipeline/verify.js`); confirm every quiz correct answer; confirm no text from an unrelated course survives.
10. **Look at it**: open two or three lessons in the editor and confirm the blocks render (tables, lists, flashcards, locked Continue).

## Gotchas

- A non-JSON response (`<!DOCTYPE html>`) means the page is not an authenticated `rise.articulate.com` authoring page — re-navigate and retry. Wrap `JSON.parse` in try/catch and surface the status.
- When detecting the newly created row, diff against the id list captured **before** the loop. `filter(x => !old.includes(x))[0]` returns the same row every iteration and silently leaves the rest untitled (this happened; 31 rows came out blank).
- Keep each Playwright call to roughly one chunk of work; a whole course in one call can exceed the tool timeout mid-write.
- Do not touch a lesson someone else is editing: Rise shows a "‹Person› is editing '…'" lock modal with **TAKE CONTROL**. Taking control is fine when the user owns the course, but say so in the report.
- `mondrian`/`custom` blocks store their text **outside** the course model (`blockumentId` → Articulate's servers). Their wording cannot be set or replaced through this API — see the note in the rules about the Download/Rapid Refresh cards and the Thank You canvas.
- Media (images/video) has no upload endpoint here; placeholders or previously-uploaded assets only.
