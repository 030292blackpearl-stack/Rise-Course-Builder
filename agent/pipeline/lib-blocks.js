// Block factory + shared helpers for the L2C-0002 build.
// Every block shape is cloned from a block already verified in this Rise tenant.

let n = 0;
const id = (p) => `${p || 'b'}${String(++n).padStart(4, '0')}`;
const wrap = (html) => `<div data-editor-id="${id('e')}">${html}</div>`;

const BASE_SETTINGS = {
  v: 2, cardMode: 'WHITE', paddingTop: 1, accentColor: null, quotesInline: false,
  paddingBottom: 1, paddingLinked: true, backgroundType: 'LIGHT', entranceAnimation: true,
  attachedToNextBlock: false, markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO',
  customBackgroundColorContrast: 'AUTO',
};

const BLOCKS = {
  // Big lesson/module title band (reference: gray #747779 banner)
  heading(text, sub) {
    return {
      id: id('hd'), type: 'text', family: 'text', variant: 'heading',
      items: [{ id: id('hi'), heading: wrap(`<p><span style="font-size: 3.8rem"><strong>${text}</strong></span></p>` + (sub ? `<p><span style="font-size: 2rem">${sub}</span></p>` : '')) }],
      metadata: {},
      settings: { ...BASE_SETTINGS, textWidth: 92, isCustomColor: true, backgroundType: 'COLOR', backgroundColor: '#747779' },
      background: {},
    };
  },
  para(html) {
    return {
      id: id('tx'), type: 'text', family: 'text', variant: 'paragraph',
      items: [{ id: id('ti'), paragraph: wrap(html) }],
      metadata: {},
      settings: { ...BASE_SETTINGS, textWidth: 92 },
      background: {},
    };
  },
  // Statement-style opener used by the reference for "Click the Play icon…"
  statement(html) {
    return {
      id: id('st'), type: 'text', family: 'impact', variant: 'b',
      items: [{ id: id('si'), paragraph: wrap(html) }],
      metadata: {},
      settings: { ...BASE_SETTINGS, paddingTop: 3, audioPosition: 'bottom', statementWidth: 92 },
      background: {},
    };
  },
  // Reflective italic block (reference: reflection prompt body)
  reflect(html) {
    return {
      id: id('rf'), type: 'text', family: 'impact', variant: 'a',
      items: [{ id: id('ri'), paragraph: wrap(html) }],
      metadata: {},
      settings: { ...BASE_SETTINGS, paddingTop: 0, paddingBottom: 0, audioPosition: 'bottom', statementWidth: 76, backgroundColor: null },
      background: {},
    };
  },
  quote(html, caption) {
    return {
      id: id('qt'), type: 'quote', family: 'quote', variant: 'a',
      items: [{ id: id('qi'), paragraph: wrap(html), ...(caption ? { name: wrap(`<p><em>${caption}</em></p>`) } : {}) }],
      metadata: {},
      settings: { v: 2, avatar: false, divider: false, paddingTop: 1, quoteWidth: 92, quotePadding: 2, quotesInline: true, audioPosition: 'bottom', paddingBottom: 1, paddingLinked: true, backgroundType: 'GRAY', backgroundColor: null, attachedToNextBlock: false, markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO' },
      background: {},
    };
  },
  continue() {
    return {
      id: id('cn'), type: 'divider', family: 'continue', variant: 'continue',
      items: [{ id: id('ci'), type: 'completeBlock', title: 'CONTINUE', buttonColor: 'brand', completeHint: 'Complete the content above before moving on.' }],
      metadata: {},
      settings: { cardMode: 'WHITE', paddingTop: 3, quotesInline: false, paddingBottom: 3, paddingLinked: true, backgroundType: 'LIGHT', backgroundColor: '', entranceAnimation: true, attachedToNextBlock: false, markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO', customBackgroundColorContrast: 'AUTO' },
      background: {},
    };
  },
  flashcards(pairs, fronts) {
    return {
      id: id('fc'), type: 'interactive', family: 'flashcard', variant: 'flashcard',
      items: pairs.map((p, i) => ({
        id: id('fci'),
        front: { description: wrap(`<p>${fronts ? fronts[i] : p.term}</p>`) },
        back: { description: wrap(`<p>${p.def}</p>`) },
      })),
      metadata: {},
      settings: { v: 2, cardMode: 'WHITE', paddingTop: 3, accentColor: null, paddingBottom: 1, paddingLinked: true, backgroundType: 'LIGHT', entranceAnimation: true, attachedToNextBlock: false, markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO', customBackgroundColorContrast: 'AUTO' },
      background: {},
    };
  },
  // Knowledge check with one question; `choices` verbatim, `correct` index, `feedback` verbatim
  kc(question, choices, correct, feedback, opts) {
    const answers = choices.map((c, i) => {
      const a = { id: id('ka'), title: wrap(`<p><span style="font-size: 1.6rem">${c}</span></p>`) };
      if (i === correct) a.correct = true; else a.correct = false;
      return a;
    });
    return {
      id: id('kc'), type: 'knowledgeCheck', family: 'knowledgeCheck', variant: 'multiple choice',
      items: [{
        id: id('kq'), type: 'MULTIPLE_CHOICE',
        title: wrap(`<p><span style="font-size: 1.6rem"><strong>${question}</strong></span></p>`),
        answers,
        feedback: wrap(`<p><span style="font-size: 1.6rem">${feedback}</span></p>`),
        feedbackType: 'ANY',
        feedbackCorrect: wrap(''),
      }],
      metadata: {},
      settings: { v: 2, cardMode: 'WHITE', paddingTop: 3, retryCount: (opts && opts.retryCount) || 0, accentColor: null, quotesInline: false, paddingBottom: 3, paddingLinked: true, backgroundType: 'GRAY', backgroundColor: null, entranceAnimation: true, correctAnswerColor: '#25bb64', knowledgeCheckWidth: 92, markerColorContrast: 'AUTO', incorrectAnswerColor: '#d84738', revealCorrectAnswers: true, snippetColorContrast: 'AUTO', customBackgroundColorContrast: 'AUTO', requireCorrectAnswer: false },
      background: {},
    };
  },
  // Fixed Thank You closing (same wording for every course)
  thankYou() {
    return {
      id: id('ty'), type: 'text', family: 'impact', variant: 'd',
      items: [{ id: id('ti'), paragraph: wrap(`<p style="line-height: 1.5"><span style="font-size: 4.2rem"><strong>Thank You!</strong></span></p>`) }],
      metadata: {},
      settings: { v: 2, divider: false, cardMode: 'WHITE', paddingTop: 0, accentColor: null, quotesInline: false, audioPosition: 'top', isCustomColor: true, paddingBottom: 0, paddingLinked: true, backgroundType: 'COLOR', dividerPadding: 0, statementWidth: 92, backgroundColor: '#747779', entranceAnimation: true, attachedToNextBlock: false, markerColorContrast: 'AUTO', snippetColorContrast: 'AUTO', customBackgroundColorContrast: 'AUTO' },
      background: {},
    };
  },
  thanksLines() {
    return {
      id: id('tl'), type: 'text', family: 'impact', variant: 'b',
      items: [{ id: id('tli'), paragraph: wrap(`<p><span style="font-size: 2.6rem"><strong>Congratulations</strong></span></p><p><span style="font-size: 2rem">on completing this course</span></p><p><span style="font-size: 2rem">You are on a great path.</span></p>`) }],
      metadata: {},
      settings: { ...BASE_SETTINGS, paddingTop: 3, audioPosition: 'bottom', statementWidth: 92 },
      background: {},
    };
  },
  // Final-assessment quiz question
  quizQ(question, choices, correct, rationale) {
    const answers = choices.map((c, i) => ({ id: id('qa'), title: wrap(`<p>${c}</p>`), ...(i === correct ? { correct: true } : {}) }));
    return {
      id: id('qq'), type: 'MULTIPLE_CHOICE',
      title: wrap(`<p><strong>${question}</strong></p>`),
      answers,
      correct: answers[correct].id,
      corrects: [answers[correct].id],
      feedback: '', feedbackType: 'CORRECT_INCORRECT',
      metadata: {},
      feedbackCorrect: wrap(`<p>${rationale}</p>`),
      feedbackIncorrect: wrap('<p></p>'),
    };
  },
};

// ---- content helpers -------------------------------------------------------
const p = (t) => `<p>${t}</p>`;
const ul = (items) => `<ul>${items.map((t) => `<li><p>${t}</p></li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((t) => `<li><p>${t}</p></li>`).join('')}</ol>`;
const table = (header, rows) =>
  `<table><thead><tr>${header.map((h) => `<th><p><strong>${h}</strong></p></th>`).join('')}</tr></thead><tbody>` +
  rows.map((r) => `<tr>${r.map((c) => `<td><p>${c}</p></td>`).join('')}</tr>`).join('') +
  '</tbody></table>';
const bold = (t) => `<strong>${t}</strong>`;
const italic = (t) => `<em>${t}</em>`;

module.exports = { BLOCKS, p, ul, ol, table, bold, italic };
