import fs from 'fs';
import { VOCAB_PACKS, TOPIC_META, PHRASAL_PACKS } from './vocab-packs.mjs';

function makeEntry(word, pos, ipa, meaning, example, topic, set, type) {
  const em = example.includes('<em>') ? example : example.replace(word, `<em>${word}</em>`);
  return { word, pos, ipa, meaning, example: em, topic, set, type };
}

const VOCAB = [];

for (const pack of VOCAB_PACKS) {
  const { topic, sets } = pack;
  for (const [setName, words] of Object.entries(sets)) {
    for (const [word, pos, ipa, meaning, example] of words) {
      VOCAB.push(makeEntry(word, pos, ipa, meaning, example, topic, setName, 'vocabulary'));
    }
  }
}

for (const pack of PHRASAL_PACKS) {
  const { topic, sets } = pack;
  for (const [setName, words] of Object.entries(sets)) {
    for (const [word, pos, ipa, meaning, example] of words) {
      VOCAB.push(makeEntry(word, pos, ipa, meaning, example, topic, setName, 'phrasal'));
    }
  }
}

const out = `/* VocabMaster – vocabulary data (auto-generated) */
window.VOCAB = ${JSON.stringify(VOCAB, null, 2)};
window.TOPIC_META = ${JSON.stringify(TOPIC_META, null, 2)};
`;

fs.writeFileSync('vocab-data.js', out, 'utf8');
console.log(`Generated vocab-data.js: ${VOCAB.length} entries`);
