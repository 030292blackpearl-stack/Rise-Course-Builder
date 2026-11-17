# Rise 360 automation recipe (verified in L2C-0002)

Everything here was verified against the live course. Follow it literally; the UI fails silently otherwise.

## Golden rules
1. **Work in short scripts.** Each Playwright call must finish well under the tool limit. Long scripts get cut mid-typing and lose text. Budget ~40 s of work per call, waits of 0.5–1.5 s (never 5 s+).
2. **Never type by clicking first.** Text entry only works as `element.focus()` then `keyboard.insertText(text)`. `locator.click()` + `keyboard.type()` silently does nothing on Rise's editors.
3. **Dismiss overlays before touching the canvas.** Two things silently swallow clicks:
   - the "Introducing AI Avatars … Got it" promo modal (click **Got it**);
   - the **Block library** panel, which covers the canvas — close it with the **×** at its top-left (or `Escape`).
4. **Verify by reading text**, `document.body.innerText`, never by trusting a click.

## Routes
- Outline: `https://rise.articulate.com/authoring/{courseId}`
- Lesson editor: `https://rise.articulate.com/authoring/{courseId}/lesson/{lessonId}`
- Existing lessons expose an `a[href*="/lesson/"]` in the outline; collect those hrefs to build an id map (Pre-Assessment, each Knowledge Check, Case Study, Final Assessment, Thank You).
- Theme: `/theme`, `/theme/colors`, `/theme/fonts`, `/theme/headers`.

## Creating a lesson from an empty row
1. Find the row's own "Add Content" button via bounding-box proximity to the row title.
2. Real mouse click it (`mouse.move` → `mouse.click` at its centre).
3. Wait ~1.5 s, then press **Enter** — the menu opens with `menuitem "Create blank lesson"` already focused, so Enter converts the row and opens the editor.
   Clicking the visible "Lesson" text does not work; it hits the hover wrapper.

## Adding blocks
1. In the lesson, click the **Block library** button.
2. Quick palette: Text, List, Image, Video, Survey, Process, Flashcards, Continue.
3. Click **Block library** again (or the × top-left) for the full library: Text, Statement, Quote, List, Image, Gallery, Multimedia, Interactive, Knowledge check, Survey, Chart, Divider, Block templates, Code, **Custom block (Beta)**.
4. Knowledge check → **Multiple choice** (also Multiple response, Fill in the blank, Matching, Draw from Question Bank).
5. Click the block name with an exact-text locator, then close the library panel.

## Editing block text
- Editable regions are `[contenteditable="true"]`, in document order. In a Text block: [0] heading, [1] body. In a Knowledge Check: question, then each choice.
- Replace: `focus()` → `Control+a` → `insertText`.
- Append: `focus()` → `Control+End` → `insertText`. Pressing Enter creates a new paragraph **inside** the same field — it never creates a new choice.

## Custom block templates (use these to match the reference)
The account's Block library ships Learn2Care custom-block templates that already look like the reference:
`Agent - Thank You`, `Agent - Case Study`, `Agent - MCQ Question`, `Agent - Scenario Question`, `Agent - True False Question`, `Agent - Knowledge Check`, `Agent - Why This Matters`.
Insert them from **Block library → Custom block → Blank / template category** rather than building stock-block approximations. The Thank You and Case Study screens should come from these.

## Quiz (Final Assessment / Pre-Assessment) editor
- Opening a quiz lesson shows a **Title Screen** preview and a `QUESTION ORDER` list of question cards.
- Clicking a card's "Enter a question title here…" opens the question editor: `[contenteditable="true"]` [0] = question, [1..] = choices; plus **Multiple Choice** type switcher, **Add image or video**, **Add audio to question**, **Feedback → Any Response**, and **Correct / Incorrect → By Choice** radios.
- **Add Question** appends another card.
- Known gap: no automation-reachable control to add a third/fourth choice or to tick the Correct radio; Enter inside a choice does not create one. Do these by hand (see below) or find the control before promising a build.

## Manual controls to ask the user for when automation can't reach them
- Knowledge Check / quiz: add extra choices, tick Correct, set Feedback, Settings (Require correct answer, Retries).
- Continue block completion: **Content → Completion Type → Complete Block Directly Above**.
- Media uploads (dropzone has no file input).

## Session start
Every turn: `preview_open` with `mode: "browser"` (no URL) to resume tabs, then find the tab whose URL contains `rise.articulate.com/authoring`.
