# Closing lessons — reusable templates (from the reference course)

Build these in every course. Wording comes from the supplied document; layout, block types and settings come from the reference and never change.

## Case Study section → one blocks lesson

1. Text block, family `text`, variant `heading` — the case-study title from the document.
2. Quote block, family `quote`, variant `a` — the practice-activity intro:
   "The case study that follows is a practice-based learning activity designed to help you apply what you've learned. It includes 3–5 branching scenarios where you'll watch a short video and then answer related multiple-choice questions. You'll move forward as you answer the questions."
3. Continue divider — family `continue`, variant `continue`, hint "Complete the content above before moving on."
4. One Knowledge Check block (multiple choice) per decision point:
   - question field: scenario title in **bold at 1.6rem**, blank paragraph, then the question at 1.6rem;
   - options A–D verbatim, correct radio set, Feedback = Any Response carrying the rationale;
   - Settings: Retries None, Require correct answer OFF.
5. Continue divider after each knowledge-check block.
6. If the document supplies a video/scenario media, place the placeholder inside the card between question and options.

## Assessment section → quiz lesson

- One question per document item, verbatim, with its rationale as feedback.
- Settings: `retryCount -1` (unlimited), `passingScore 80`, `revealAnswers all`, `passToContinue true`, `shuffleAnswerChoices false`, `randomizeQuestionOrder true`, correct `#25bb64`, incorrect `#d84738`.
- Question types follow the document: multiple choice, True/False as two-choice, fill-in-the-blank as multiple choice with the options the document gives.
- Pass mark only if the document states one; otherwise use the reference's 80%.

## Thank You section → blocks lesson (standard closing, every course)

Exactly two items, no Continue:

1. Text block, family `impact`, variant `d`: `Thank You!`
2. One Custom block (canvas): celebratory images plus text layers `Congratulations` (heading), `on completing this course`, `You are on a great path.`

Never reword this lesson; it is identical in every course.
