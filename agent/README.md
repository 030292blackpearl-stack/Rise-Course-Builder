# Learn2Care course-builder agent — portable setup

Everything the agent needs to build a Learn2Care course in Articulate Rise 360 from a supplied Word document lives in this folder, so the whole setup can be copied to any machine (clone the repo, or copy `agent/`).

## What is in here

| Path | Purpose |
| --- | --- |
| `skill/SKILL.md` | The agent's instructions (the saved skill `rise-course-builder`). This is the source of truth for behaviour. |
| `rules/agent-course-build-rules.md` | The full working spec with the verified Rise build route. |
| `reference/rise-authoring-api.md` | **The build route:** `GET_COURSE` to read, `CREATE_BLOCKS` / `CREATE_LESSON` / `UPDATE_LESSON` / `DELETE_LESSON` to write, with payloads and block shapes. |
| `reference/rise-automation-recipe.md` | Short recipe + the UI fallbacks for the few things the API cannot do. |
| `reference/rise-reference-spec.md` | Block-level facts extracted from the reference course, including how to read it (`window.__fetchCourse()`). |
| `pipeline/` | Working scripts: block factory, payload builder, verifier, and how to drive them. |
| `templates/closing-lessons.md` | Reusable Case Study, Final Assessment and Thank You layouts. |
| `content/` | Per-course extracted document text (e.g. `course-closing-content.md`). |

## Using it on another machine

1. Clone this repository (or copy `agent/` into the new machine's project).
2. Give the agent the skill: in a Freebuff chat, save `skill/SKILL.md` as a skill named `rise-course-builder` (Settings → Skills, or ask the agent to save it), or keep this folder in the project so the agent reads it directly.
3. Attach the course's Word document to the chat. That is the only input the agent needs.
4. Give the agent the Rise authoring URL of the course it should build into, and (once only) the reference course's published Review 360 link.

## Requirements the agent cannot supply itself

1. **Rise 360 authoring access** — a signed-in browser session on rise.articulate.com with permission to edit the target course. Login cannot be automated.
2. **The target course shell** — an existing course with its sections/lessons per the document TOC, or permission for the agent to create them.
3. **Reference course URL** — the published Review 360 delivery link used as the visual and behavioural model (Rule 0).
4. **A signed-in authoring session in the persistent browser** — the API is authorised by the Rise session cookie, so `npx convex login`-style automated sign-in is not possible; the user signs in once.
5. **A target course shell** — an existing course (or a duplicate of the reference course, which carries the theme). Everything inside it is rebuilt through the API.
6. **Manual media upload** — media has no upload endpoint; images/videos must be attached by hand, or placeholders shipped and listed.
7. **Publishing approval** — the agent never publishes, enrols learners, or changes library visibility without explicit approval.

## What the agent cannot do, and says so
- Mondrian custom-block copy (the reference's Download/Rapid Refresh cards and Thank You canvas) cannot be retyped through the API — those become closest-match text blocks with the document's exact wording, reported as a deviation.
- No images or videos are uploaded.


## Working agreement

The agent operates autonomously (Rule 7): it opens the editor, authors section by section, verifies every block, records anything it could not automate, and reports at the end. It creates the fixed closing — Case Study, Final Assessment, Thank You — from the reference every time, with the document's wording verbatim.
