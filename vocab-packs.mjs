/* Compact tuple: [word, pos, ipa, meaning, example] — example may use <em>word</em> */

import { PACKS_EXTRA1 } from './vocab-packs-extra1.mjs';
import { PACKS_EXTRA2 } from './vocab-packs-extra2.mjs';
import { PACKS_EXTRA3 } from './vocab-packs-extra3.mjs';
import { PACKS_EXTRA4 } from './vocab-packs-extra4.mjs';
import { PACKS_EXTRA5 } from './vocab-packs-extra5.mjs';
import { PHRASAL_PACKS } from './vocab-packs-phrasal.mjs';

export { PHRASAL_PACKS };

export const TOPIC_META = {
  Health: { icon: '🏥' },
  Environment: { icon: '🌿' },
  Technology: { icon: '💻' },
  Education: { icon: '📚' },
  Society: { icon: '🏙️' },
  Economy: { icon: '📈' },
  Business: { icon: '💼' },
  'Culture & Arts': { icon: '🎭' },
  'Travel & Tourism': { icon: '✈️' },
  Science: { icon: '🔬' },
  'Law & Politics': { icon: '⚖️' },
  'Media & Communication': { icon: '📡' },
  'Work & Career': { icon: '👔' },
  'Problems & Solutions': { icon: '🔧' },
  'Daily Life': { icon: '🏠' },
};

export const VOCAB_PACKS = [
  {
    topic: 'Health',
    sets: {
      'General Health': [
        ['alleviate', 'verb', '/əˈliː.vi.eɪt/', 'giảm nhẹ (đau, lo lắng)', 'Rest can help <em>alleviate</em> fatigue.'],
        ['chronic', 'adj', '/ˈkrɒn.ɪk/', 'mãn tính, kéo dài', 'She suffers from <em>chronic</em> back pain.'],
        ['deteriorate', 'verb', '/dɪˈtɪər.i.ə.reɪt/', 'xấu đi, suy giảm', 'His health began to <em>deteriorate</em> rapidly.'],
        ['resilient', 'adj', '/rɪˈzɪl.i.ənt/', 'có sức bật, kiên cường', 'Children are remarkably <em>resilient</em> after illness.'],
        ['susceptible', 'adj', '/səˈsep.tɪ.bəl/', 'dễ bị ảnh hưởng', 'Elderly people are more <em>susceptible</em> to infection.'],
        ['immunity', 'noun', '/ɪˈmjuː.nɪ.ti/', 'miễn dịch', 'Vaccines strengthen your <em>immunity</em>.'],
        ['symptom', 'noun', '/ˈsɪmp.təm/', 'triệu chứng', 'Fever is a common <em>symptom</em> of flu.'],
        ['diagnosis', 'noun', '/ˌdaɪ.əɡˈnəʊ.sɪs/', 'chẩn đoán', 'Early <em>diagnosis</em> improves survival rates.'],
        ['prognosis', 'noun', '/prɒɡˈnəʊ.sɪs/', 'tiên lượng bệnh', 'The doctor gave a positive <em>prognosis</em>.'],
        ['rehabilitation', 'noun', '/ˌriː.həˌbɪl.ɪˈteɪ.ʃən/', 'phục hồi chức năng', 'Physiotherapy aids <em>rehabilitation</em> after surgery.'],
      ],
      'Mental Health': [
        ['anxiety', 'noun', '/æŋˈzaɪ.ə.ti/', 'lo âu', 'Work pressure can trigger <em>anxiety</em>.'],
        ['burnout', 'noun', '/ˈbɜːn.aʊt/', 'kiệt sức', 'Many doctors experience <em>burnout</em>.'],
        ['coping', 'noun', '/ˈkəʊ.pɪŋ/', 'sự ứng phó', 'Exercise is an effective <em>coping</em> mechanism.'],
        ['mindfulness', 'noun', '/ˈmaɪnd.fəl.nəs/', 'chánh niệm', 'Practising <em>mindfulness</em> reduces stress.'],
        ['stigma', 'noun', '/ˈstɪɡ.mə/', 'kỳ thị xã hội', 'There is still a <em>stigma</em> around mental illness.'],
        ['depression', 'noun', '/dɪˈpreʃ.ən/', 'trầm cảm', 'Therapy can treat mild <em>depression</em>.'],
        ['trauma', 'noun', '/ˈtrɔː.mə/', 'chấn thương tâm lý', 'Childhood <em>trauma</em> may affect adults.'],
        ['therapy', 'noun', '/ˈθer.ə.pi/', 'liệu pháp', 'She attends weekly <em>therapy</em> sessions.'],
        ['wellbeing', 'noun', '/ˌwelˈbiː.ɪŋ/', 'sức khỏe tổng thể', 'Sleep is vital for mental <em>wellbeing</em>.'],
        ['resilience', 'noun', '/rɪˈzɪl.i.əns/', 'khả năng phục hồi', 'Schools teach emotional <em>resilience</em>.'],
      ],
      'Nutrition & Fitness': [
        ['metabolism', 'noun', '/məˈtæb.əl.ɪ.zəm/', 'trao đổi chất', 'Age slows your <em>metabolism</em>.'],
        ['nutrient', 'noun', '/ˈnjuː.tri.ənt/', 'chất dinh dưỡng', 'Vegetables provide essential <em>nutrients</em>.'],
        ['deficiency', 'noun', '/dɪˈfɪʃ.ən.si/', 'thiếu hụt', 'Iron <em>deficiency</em> causes fatigue.'],
        ['obesity', 'noun', '/əʊˈbiː.sə.ti/', 'béo phì', '<em>Obesity</em> rates are rising globally.'],
        ['hydration', 'noun', '/haɪˈdreɪ.ʃən/', 'sự cung cấp nước', 'Athletes monitor their <em>hydration</em>.'],
        ['antioxidant', 'noun', '/ˌæn.tiˈɒk.sɪ.dənt/', 'chất chống oxy hóa', 'Berries are rich in <em>antioxidants</em>.'],
        ['dietary', 'adj', '/ˈdaɪ.ə.tər.i/', 'thuộc chế độ ăn', 'Follow <em>dietary</em> guidelines daily.'],
        ['supplement', 'noun', '/ˈsʌp.lɪ.mənt/', 'thực phẩm bổ sung', 'She takes a vitamin <em>supplement</em>.'],
        ['cardiovascular', 'adj', '/ˌkɑː.di.əʊˈvæs.kjə.lər/', 'tim mạch', '<em>Cardiovascular</em> exercise strengthens the heart.'],
        ['sedentary', 'adj', '/ˈsed.ən.tər.i/', 'ít vận động', 'A <em>sedentary</em> lifestyle increases health risks.'],
      ],
      'Medical Care': [
        ['vaccination', 'noun', '/ˌvæk.sɪˈneɪ.ʃən/', 'tiêm chủng', '<em>Vaccination</em> prevents many diseases.'],
        ['prescription', 'noun', '/prɪˈskrɪp.ʃən/', 'đơn thuốc', 'You need a <em>prescription</em> for antibiotics.'],
        ['outpatient', 'noun', '/ˈaʊt.peɪ.ʃənt/', 'bệnh nhân ngoại trú', 'She was treated as an <em>outpatient</em>.'],
        ['surgical', 'adj', '/ˈsɜː.dʒɪ.kəl/', 'thuộc phẫu thuật', 'The patient needs <em>surgical</em> intervention.'],
        ['sterile', 'adj', '/ˈster.aɪl/', 'vô trùng', 'Instruments must remain <em>sterile</em>.'],
        ['triage', 'noun', '/ˈtriː.ɑːʒ/', 'phân loại cấp cứu', 'Nurses perform <em>triage</em> in emergencies.'],
        ['paramedic', 'noun', '/ˌpær.əˈmed.ɪk/', 'nhân viên cấp cứu', 'A <em>paramedic</em> arrived within minutes.'],
        ['dosage', 'noun', '/ˈdəʊ.sɪdʒ/', 'liều lượng thuốc', 'Never exceed the recommended <em>dosage</em>.'],
        ['side effect', 'noun', '/ˈsaɪd ɪˌfekt/', 'tác dụng phụ', 'Drowsiness is a common <em>side effect</em>.'],
        ['remission', 'noun', '/rɪˈmɪʃ.ən/', 'thuyên giảm (bệnh)', 'The cancer is in <em>remission</em>.'],
      ],
      'Public Health': [
        ['pandemic', 'noun', '/pænˈdem.ɪk/', 'đại dịch toàn cầu', 'The <em>pandemic</em> disrupted travel worldwide.'],
        ['hygiene', 'noun', '/ˈhaɪ.dʒiːn/', 'vệ sinh', 'Hand <em>hygiene</em> reduces infection spread.'],
        ['contagious', 'adj', '/kənˈteɪ.dʒəs/', 'lây nhiễm', 'Flu is highly <em>contagious</em>.'],
        ['prevalence', 'noun', '/ˈprev.əl.əns/', 'tỷ lệ phổ biến', 'The <em>prevalence</em> of diabetes is rising.'],
        ['mortality', 'noun', '/mɔːˈtæl.ə.ti/', 'tỷ lệ tử vong', 'Infant <em>mortality</em> has fallen sharply.'],
        ['sanitation', 'noun', '/ˌsæn.ɪˈteɪ.ʃən/', 'vệ sinh môi trường', 'Poor <em>sanitation</em> spreads disease.'],
        ['outbreak', 'noun', '/ˈaʊt.breɪk/', 'bùng phát dịch', 'Officials contained the <em>outbreak</em>.'],
        ['quarantine', 'noun', '/ˈkwɒr.ən.tiːn/', 'cách ly', 'Travellers faced two weeks of <em>quarantine</em>.'],
        ['epidemic', 'noun', '/ˌep.ɪˈdem.ɪk/', 'dịch bệnh', 'The region faced a cholera <em>epidemic</em>.'],
        ['immunisation', 'noun', '/ˌɪm.jə.naɪˈzeɪ.ʃən/', 'tiêm phòng', 'Childhood <em>immunisation</em> saves lives.'],
      ],
    },
  },
  ...PACKS_EXTRA1,
  ...PACKS_EXTRA2,
  ...PACKS_EXTRA3,
  ...PACKS_EXTRA4,
  ...PACKS_EXTRA5,
];
