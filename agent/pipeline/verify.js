const fs = require('fs');
const p = JSON.parse(fs.readFileSync(__dirname + '/built.json', 'utf8')).payload;
const doc = JSON.parse(fs.readFileSync(__dirname + '/doc-text.json', 'utf8'));

const strip = (h) => String(h || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&rsquo;|&lsquo;/g, "'")
  .replace(/&ldquo;|&rdquo;/g, '"')
  .replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ')
  .trim();

const lessonText = (l) => {
  const out = [];
  for (const b of l.items || []) {
    const walk = (o) => {
      if (!o || typeof o !== 'object') return;
      if (typeof o === 'string') return;
      for (const [k, v] of Object.entries(o)) {
        if (['title', 'paragraph', 'heading', 'description', 'name', 'feedback', 'feedbackCorrect', 'feedbackIncorrect'].includes(k)) out.push(strip(v));
        else if (typeof v === 'object') walk(v);
        else if (typeof v === 'string' && ['answers', 'items'].includes(k)) out.push(strip(v));
      }
    };
    walk(b);
  }
  return out.filter(Boolean).join(' | ');
};

const rows = p.course.lessons.map((id, i) => {
  const l = p.lessons.find((x) => x.id === id) || {};
  return { i, title: l.title, type: l.type, nBlocks: (l.items || []).length, text: lessonText(l), settings: l.settings };
});

console.log('ROWS', rows.length);
for (const r of rows) console.log(String(r.i).padStart(2), r.type.padEnd(7), String(r.nBlocks).padStart(2), r.title);

const all = rows.map((r) => r.text).join('\n');
const missing = doc.sentences.filter((s) => !all.includes(s));
console.log('\nDOC SENTENCES CHECKED:', doc.sentences.length, 'MISSING:', missing.length);
missing.slice(0, 25).forEach((m) => console.log('  MISSING:', m.slice(0, 140)));

// stale reference content check
const stale = ['Transmission-Based', 'PPE', 'Bloodborne', 'infection', 'Chain of Infection', 'Teletracking'];
const staleHits = stale.filter((s) => all.includes(s));
console.log('\nSTALE REFERENCE TERMS PRESENT:', staleHits);

const quiz = rows.find((r) => r.type === 'quiz');
console.log('\nQUIZ', quiz.title, quiz.nBlocks, 'questions; settings:', JSON.stringify(quiz.settings));
