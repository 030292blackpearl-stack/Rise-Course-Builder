const fs = require('fs');
const path = require('path');
const { BLOCKS } = require('./lib-blocks');

const parts = [require('./content-1'), require('./content-2'), require('./content-3')];
const rows = parts.flatMap((p) => p.lessons);

const out = [];
for (const r of rows) {
  if (r.type === 'section') {
    out.push({ title: r.title, type: 'section', blocks: [] });
  } else if (r.type === 'quiz') {
    out.push({
      title: r.title,
      type: 'quiz',
      settings: r.settings,
      questions: r.questions().map(([q, choices, correct, rationale]) => BLOCKS.quizQ(q, choices, correct, rationale)),
      blocks: [],
    });
  } else {
    out.push({ title: r.title, type: 'blocks', blocks: r.blocks(), questions: [] });
  }
}

// Course overview description (rule 3A: Duration, Purpose, Requirements to Be Met, Disclaimer)
const bold = (t) => `<strong>${t}</strong>`;
const description =
  `<div data-editor-id="desc-1">` +
  `<p><span style="color: rgb(0, 0, 0); text-decoration: inherit"><strong>Duration:</strong> 60 minutes</span></p>` +
  `<p></p>` +
  `<p><span style="color: rgb(0, 0, 0); text-decoration: inherit"><strong>Purpose:</strong> This course is for Home Service Workers providing non-medical home care in Illinois. It emphasizes the importance of safely assisting clients with medication reminding in alignment with state guidelines. The course focuses on empowering caregivers to support clients while adhering to legal requirements and promoting dignity.</span></p>` +
  `<p></p>` +
  `<p><span style="color: rgb(0, 0, 0); text-decoration: inherit"><strong>Requirements Met:</strong> A home services worker in Illinois may assist a client with medication reminding only when medications have been pre-selected by the client, a family member, a nurse, or a pharmacist and are stored in containers other than prescription bottles, such as medication minders. The containers must be clearly marked as to day and time of dosage. Medication reminding includes inquiries about whether medications were taken, verbal prompts, handing the appropriately marked container to the client, and opening the container if the client is unable to. These limitations apply to all prescription and over-the-counter medications. Any irregularities, such as medications taken too often, not often enough, or not at the correct time, must be reported immediately to the supervisor or the client's advocate.</span></p>` +
  `<p></p>` +
  `<p><span style="color: rgb(0, 0, 0); text-decoration: inherit"><strong>Disclaimer:</strong> The Learn2Care eLearning courseware is for educational purposes only and not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider. The content does not create a physician-patient relationship or replace professional services. Some materials may be developed or supported with AI-assisted tools; Learn2Care and its affiliates make no warranties about the information's accuracy or suitability. Use is at your own risk. Copyright protects only the expression of ideas, not facts or ideas. See Kregos v. AP, 3 F.3d 656, 663 (2d Cir. 1993) regarding fair use. By accessing this courseware, you agree to this disclaimer.</span></p>` +
  `</div>`;

const payload = { rows: out, description };
fs.writeFileSync(path.join(__dirname, 'payload.json'), JSON.stringify(payload, null, 1));

console.log('rows:', out.length);
out.forEach((r, i) => console.log(String(i).padStart(2), r.type.padEnd(8), r.title, '| blocks:', (r.blocks || []).length, r.questions ? '| q:' + r.questions.length : ''));
const totalBlocks = out.reduce((a, r) => a + (r.blocks || []).length + (r.questions || []).length, 0);
console.log('total blocks/questions:', totalBlocks, 'payload bytes:', JSON.stringify(payload).length);
