# Rise 360 build recipe — API first, UI only as fallback

**Build through the authoring API.** Everything that used to need canvas clicks (adding blocks, extra choices, correct radios, feedback, Continue settings, lesson order) is a JSON field. See `rise-authoring-api.md` for endpoints, payloads and block shapes, and `agent/pipeline/` for the working scripts.

This file keeps only what the API cannot do, plus the UI knowledge worth retaining for those cases.

## Session

Every turn: `preview_open` with `mode: "browser"` and no URL to resume the persistent tabs, then confirm a tab is on `https://rise.articulate.com/authoring/…`. If the browser is fresh, the Rise session is not authenticated and the API returns HTML login pages — sign-in is manual; ask the user.

## Order of work that works

1. Read the Word document, author the content spec (verbatim), generate the payload.
2. Create the whole new outline first; verify it; then delete the old rows.
3. Create blocks lesson by lesson, chaining `previousBlockId`, ~6–8 lessons per call.
4. Set quiz settings and the course description, then verify by reading the model back and diffing text.

Full procedure with the exact calls: `rise-authoring-api.md` → "The one-pass build".

## Fallback: things the API does not cover

### Custom blocks (mondrian)
`type: "custom", family: "mondrian"` blocks keep their text in Articulate's Mondrian service (`blockumentId`), not in the course JSON. You can **place** an existing one by copying its JSON, but you cannot retype its copy. So:
- Do not promise the reference's Download/Rapid Refresh/Thank-You canvas designs with new wording.
- Build those components as text/list blocks from the document's exact wording and record the deviation in the report.
- The account also has `Agent - Thank You`, `Agent - Case Study`, `Agent - MCQ Question`, `Agent - Scenario Question`, `Agent - True False Question`, `Agent - Knowledge Check` custom-block templates, usable only where their text already matches.

### Media upload
The media modal's dropzone exposes no file input and fires no `filechooser`. Unless an upload route is found, images/videos must be added by hand; ship labelled placeholders (`[VIDEO PLACEHOLDER – …]`) and list them in the report.

### Theme editor
Reachable at `/authoring/{courseId}/theme` (`/theme/colors`, `/theme/fonts`, `/theme/headers`); the header's Theme button is hidden at narrow widths. Duplicating the reference course carries the theme over, which is usually the right move.

## UI knowledge retained (only if a control must be driven by hand)

- Text entry: `element.focus()` then `keyboard.insertText` — click-then-type silently does nothing in Rise's editors.
- Overlays that swallow clicks: the "Introducing AI Avatars … Got it" modal, and the Block library panel (close with the × at its top-left, or Escape).
- A block's own toolbar has the `button[aria-label="Content"]` drawer; scope the locator to that block element or you will edit the neighbouring block.
- Continue blocks: Content → Completion Type → Complete Block Directly Above.
- Outline rows expose a dots menu (Duplicate / Copy / Delete); verify the row before deleting.
- Create a lesson from an empty row: hover the row, click its own "Add Content", then press Enter ("Create blank lesson" is auto-focused). Clicking the visible "Lesson" label hits the hover wrapper and does nothing.
- Keep UI scripts under ~40 s; longer ones get cut mid-typing and lose text.
