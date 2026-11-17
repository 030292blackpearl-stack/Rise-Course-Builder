# Build pipeline

The working scripts behind the one-pass build. They were used to build L2C-0002 into a 32-row / 245-block course entirely through the Rise authoring API (see `../reference/rise-authoring-api.md`).

| File | Purpose |
| --- | --- |
| `lib-blocks.js` | Block factory. Every shape here was created and read back successfully: heading band, paragraph/list/table, statement, reflection, quote, locked Continue, flashcards, knowledge check, quiz question, Thank You. |
| `build.js` | Assembles `payload.json` from the per-module content files and prints row/block counts. |
| `verify.js` | Reads the course model saved as `built.json` and compares it against landmark verbatim sentences in `doc-text.json`. |
| `content-*.js` (you write these) | The document's text, typed once, verbatim, split into rows in TOC order. |

## Per-course setup

1. Copy `lib-blocks.js` next to new `content-1.js … content-N.js` files. Each exports `{ lessons: [...] }` where a lesson is one of:
   - `{ title, type: 'section' }`
   - `{ title, type: 'blocks', blocks: () => [B.heading(...), B.para(...), …] }`
   - `{ title: 'Final Assessment', type: 'quiz', settings: {...}, questions: () => [[question, choices[], correctIndex, rationale], …] }`
2. Point `build.js` at them and run `node build.js` → `payload.json`, with a printed row/block tally to check before writing.
3. From the Playwright sandbox, drive the course (see the API reference for exact order):
   - `CREATE_LESSON` + `UPDATE_LESSON` for every row, collecting ids into `rowids.json`;
   - verify the outline, then `DELETE_LESSON` the old rows;
   - `CREATE_BLOCKS` per block, chaining `previousBlockId`, ~6–8 lessons per tool call;
   - `UPDATE_LESSON` for quiz settings and `UPDATE_COURSE` for the overview.
4. `GET_COURSE` → save as `built.json`; write the document's landmark sentences into `doc-text.json`; run `node verify.js`.

## Conventions the factory already encodes

- Heading band `#747779` with 3.8rem bold white text; body text 1.6–2rem; tables and lists inline as HTML.
- Knowledge check: one question per block, bold 1.6rem question, `feedbackType: 'ANY'`, `retryCount: 0`, `requireCorrectAnswer: false`.
- Continue: `divider`/`continue` with a `completeBlock` item and the locked hint.
- Quiz question: `MULTIPLE_CHOICE` with `correct` + `corrects` pointing at the same answer id.
