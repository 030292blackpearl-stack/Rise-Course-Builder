# Reference course — block-level spec

Source of truth: the published Review 360 delivery of "Transmission Based Precautions".

## How to read the reference (important)
The delivery page truncates content lessons when rendered (the body stops a few paragraphs in). The complete model is embedded in the page and can be read with:

```js
const data = await window.__fetchCourse();      // { course, labelSet, fonts, media }
data.course.lessons                              // every lesson, with .items
data.course.lessons[i].items[j]                   // type, family, variant, settings
data.course.mondrian.items                        // placed Custom-block layer content
data.course.mondrian.blockuments                   // Custom-block definitions
```

Lesson `type` is `blocks`, `quiz`, or `section`. Custom blocks appear as item `type: "custom"`, `family: "mondrian"` and keep their content in `mondrian.items` keyed by the block id.

## Theme
- Lesson banner: full-width `#6D6E70`, white Poppins title, no avatar, no lesson count.
- Accent/theme colour: `#EE7F3D` (reference stores `#ed7f41`); correct answer `#25bb64`, incorrect `#d84738`.
- Fonts: Poppins for headings and body.
- Question card: white card, bold question, thin divider, wide radio spacing, orange rounded SUBMIT.

## Block inventory seen in the reference
`text` (variants: `heading`, `impact/a`, `impact/b`, `impact/d`), `image` (`text aside`, reversible), `statement` (b), `quote` (a), `divider` (`continue`, `continue/videoPause`), `interactive` (`flashcard`, `process`, `tabs`, `accordion`), `multimedia` (video), `knowledgeCheck` (`multiple choice`), `custom` (`mondrian`).

## End-of-module trio (last content lesson of each module)
Order after the video/interactive and its Continue: Download card → Rapid Refresh Tip card → `💬Reflection Prompt` heading → italic prompt → Continue.

Download card = Custom block: `cardMode WHITE`, `backgroundType LIGHT`, `contentWidth 9999`, `paddingTop 3`, `paddingBottom 1`, entrance animation on. Layers: icons, headline `Download Caregiver Checklist: <module>` (Poppins bold 22 black), bullets `Wash Hands Always` / `Use PPE Consistently` / `Disinfect High-Touch Areas`, caption `Post this checklist near your care station as a quick reminder.`, CTA `Download Now` (Poppins bold 19, theme colour, no link or file — decorative).

Rapid Refresh Tip = Custom block: rectangle `#FFFBEE`, tip icon, text layer with bold `Rapid Refresh Tip:` + space + body (17px, line-height 1.5, spaceAfter 15).

Reflection = text block `text/heading` centred `rgb(237,127,65)` bold `💬Reflection Prompt`; then text block `impact/a` italic prompt paragraphs; then Continue.

## Case Study (reference)
Blocks lesson: `text/heading` title → `quote/a` practice intro → Continue → one `knowledgeCheck` multiple choice per decision point (bold 1.6rem scenario title, blank line, question) → Continue after each.

## Assessment (reference)
Quiz lesson, 10 questions, settings `retryCount -1`, `passingScore 80`, `revealAnswers all`, `passToContinue true`, `shuffleAnswerChoices false`, `randomizeQuestionOrder true`.

## Thank You (reference)
Blocks lesson: `text/impact/d` "Thank You!" → one `custom` block with layers `Congratulations`, `on completing this course`, `You are on a great path.` No Continue.

## Continue blocks
`divider` family `continue`: `title "CONTINUE"`, `buttonColor "brand"`, `completeHint "Complete the content above before moving on."` — in the editor this is Content → Completion Type → Complete Block Directly Above.
