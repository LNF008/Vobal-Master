/* ============================================================
   VOCABULARY DATA
   Structure per word:
   { word, pos, ipa, meaning, example, topic, set, type }
   type: "vocabulary" | "phrasal"
   ============================================================ */
const VOCAB = [
  /* ── TOPIC: Health ─────────────────────────────────────── */
  // Set: General Health
  {word:"alleviate",pos:"verb",ipa:"/əˈliː.vi.eɪt/",meaning:"giảm nhẹ (đau, lo lắng)",example:"Rest can help <em>alleviate</em> fatigue.",topic:"Health",set:"General Health",type:"vocabulary"},
  {word:"chronic",pos:"adj",ipa:"/ˈkrɒn.ɪk/",meaning:"mãn tính, kéo dài",example:"She suffers from <em>chronic</em> back pain.",topic:"Health",set:"General Health",type:"vocabulary"},
  {word:"deteriorate",pos:"verb",ipa:"/dɪˈtɪər.i.ə.reɪt/",meaning:"xấu đi, suy giảm",example:"His health began to <em>deteriorate</em> rapidly.",topic:"Health",set:"General Health",type:"vocabulary"},
  {word:"resilient",pos:"adj",ipa:"/rɪˈzɪl.i.ənt/",meaning:"có sức bật, kiên cường",example:"Children are remarkably <em>resilient</em> after illness.",topic:"Health",set:"General Health",type:"vocabulary"},
  {word:"susceptible",pos:"adj",ipa:"/səˈsep.tɪ.bəl/",meaning:"dễ bị ảnh hưởng, nhạy cảm",example:"Elderly people are more <em>susceptible</em> to infection.",topic:"Health",set:"General Health",type:"vocabulary"},
  // Set: Mental Health
  {word:"anxiety",pos:"noun",ipa:"/æŋˈzaɪ.ə.ti/",meaning:"sự lo lắng, lo âu",example:"Work pressure can trigger <em>anxiety</em>.",topic:"Health",set:"Mental Health",type:"vocabulary"},
  {word:"burnout",pos:"noun",ipa:"/ˈbɜːn.aʊt/",meaning:"kiệt sức (do làm việc quá sức)",example:"Many doctors experience <em>burnout</em> due to long hours.",topic:"Health",set:"Mental Health",type:"vocabulary"},
  {word:"coping",pos:"noun",ipa:"/ˈkəʊ.pɪŋ/",meaning:"sự đương đầu, ứng phó",example:"Exercise is an effective <em>coping</em> mechanism.",topic:"Health",set:"Mental Health",type:"vocabulary"},
  {word:"mindfulness",pos:"noun",ipa:"/ˈmaɪnd.fəl.nəs/",meaning:"chánh niệm, sự tập trung vào hiện tại",example:"Practising <em>mindfulness</em> reduces stress significantly.",topic:"Health",set:"Mental Health",type:"vocabulary"},
  {word:"stigma",pos:"noun",ipa:"/ˈstɪɡ.mə/",meaning:"kỳ thị xã hội",example:"There is still a <em>stigma</em> around mental illness.",topic:"Health",set:"Mental Health",type:"vocabulary"},

  /* ── TOPIC: Environment ─────────────────────────────────── */
  // Set: Climate Change
  {word:"carbon footprint",pos:"noun",ipa:"/ˈkɑː.bən ˈfʊt.prɪnt/",meaning:"lượng khí thải carbon cá nhân/tổ chức",example:"Flying frequently increases your <em>carbon footprint</em>.",topic:"Environment",set:"Climate Change",type:"vocabulary"},
  {word:"deforestation",pos:"noun",ipa:"/diːˌfɒr.ɪˈsteɪ.ʃən/",meaning:"nạn phá rừng",example:"<em>Deforestation</em> contributes to climate change.",topic:"Environment",set:"Climate Change",type:"vocabulary"},
  {word:"exacerbate",pos:"verb",ipa:"/ɪɡˈzæs.ər.beɪt/",meaning:"làm trầm trọng thêm",example:"Droughts <em>exacerbate</em> food shortages globally.",topic:"Environment",set:"Climate Change",type:"vocabulary"},
  {word:"mitigation",pos:"noun",ipa:"/ˌmɪt.ɪˈɡeɪ.ʃən/",meaning:"sự giảm thiểu (tác hại)",example:"Carbon capture is a key <em>mitigation</em> strategy.",topic:"Environment",set:"Climate Change",type:"vocabulary"},
  {word:"renewable",pos:"adj",ipa:"/rɪˈnjuː.ə.bəl/",meaning:"có thể tái tạo",example:"<em>Renewable</em> energy sources include solar and wind.",topic:"Environment",set:"Climate Change",type:"vocabulary"},
  // Set: Biodiversity
  {word:"biodiversity",pos:"noun",ipa:"/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",meaning:"đa dạng sinh học",example:"Rainforests are crucial for <em>biodiversity</em>.",topic:"Environment",set:"Biodiversity",type:"vocabulary"},
  {word:"endangered",pos:"adj",ipa:"/ɪnˈdeɪn.dʒəd/",meaning:"có nguy cơ tuyệt chủng",example:"The tiger is an <em>endangered</em> species.",topic:"Environment",set:"Biodiversity",type:"vocabulary"},
  {word:"ecosystem",pos:"noun",ipa:"/ˈiː.kəʊ.sɪs.təm/",meaning:"hệ sinh thái",example:"Coral reefs form a complex <em>ecosystem</em>.",topic:"Environment",set:"Biodiversity",type:"vocabulary"},
  {word:"habitat",pos:"noun",ipa:"/ˈhæb.ɪ.tæt/",meaning:"môi trường sống",example:"Urban expansion destroys wildlife <em>habitat</em>.",topic:"Environment",set:"Biodiversity",type:"vocabulary"},
  {word:"invasive",pos:"adj",ipa:"/ɪnˈveɪ.sɪv/",meaning:"xâm lấn (loài ngoại lai)",example:"<em>Invasive</em> species threaten native plants.",topic:"Environment",set:"Biodiversity",type:"vocabulary"},

  /* ── TOPIC: Technology ──────────────────────────────────── */
  // Set: AI & Automation
  {word:"algorithm",pos:"noun",ipa:"/ˈæl.ɡə.rɪ.ðəm/",meaning:"thuật toán",example:"The recommendation <em>algorithm</em> learns your preferences.",topic:"Technology",set:"AI & Automation",type:"vocabulary"},
  {word:"autonomous",pos:"adj",ipa:"/ɔːˈtɒn.ə.məs/",meaning:"tự vận hành, tự chủ",example:"<em>Autonomous</em> vehicles rely on sensors and AI.",topic:"Technology",set:"AI & Automation",type:"vocabulary"},
  {word:"bias",pos:"noun",ipa:"/ˈbaɪ.əs/",meaning:"sự thiên lệch, thiên kiến",example:"AI systems can reflect human <em>bias</em> in their data.",topic:"Technology",set:"AI & Automation",type:"vocabulary"},
  {word:"disruptive",pos:"adj",ipa:"/dɪsˈrʌp.tɪv/",meaning:"mang tính đột phá, làm gián đoạn",example:"Streaming was a <em>disruptive</em> force in entertainment.",topic:"Technology",set:"AI & Automation",type:"vocabulary"},
  {word:"proliferation",pos:"noun",ipa:"/prəˌlɪf.ərˈeɪ.ʃən/",meaning:"sự phổ biến nhanh chóng",example:"The <em>proliferation</em> of smartphones changed society.",topic:"Technology",set:"AI & Automation",type:"vocabulary"},
  // Set: Cybersecurity
  {word:"breach",pos:"noun",ipa:"/briːtʃ/",meaning:"vi phạm, rò rỉ dữ liệu",example:"A data <em>breach</em> exposed millions of passwords.",topic:"Technology",set:"Cybersecurity",type:"vocabulary"},
  {word:"encryption",pos:"noun",ipa:"/ɪnˈkrɪp.ʃən/",meaning:"mã hóa (dữ liệu)",example:"End-to-end <em>encryption</em> protects private messages.",topic:"Technology",set:"Cybersecurity",type:"vocabulary"},
  {word:"phishing",pos:"noun",ipa:"/ˈfɪʃ.ɪŋ/",meaning:"lừa đảo trực tuyến qua email giả mạo",example:"A <em>phishing</em> email tricked employees into sharing passwords.",topic:"Technology",set:"Cybersecurity",type:"vocabulary"},
  {word:"surveillance",pos:"noun",ipa:"/səˈveɪ.ləns/",meaning:"sự giám sát, theo dõi",example:"Mass <em>surveillance</em> raises serious privacy concerns.",topic:"Technology",set:"Cybersecurity",type:"vocabulary"},
  {word:"vulnerability",pos:"noun",ipa:"/ˌvʌl.nər.əˈbɪl.ɪ.ti/",meaning:"lỗ hổng bảo mật, điểm yếu",example:"Hackers exploit software <em>vulnerabilities</em>.",topic:"Technology",set:"Cybersecurity",type:"vocabulary"},

  /* ── TOPIC: Education ───────────────────────────────────── */
  // Set: Learning & Pedagogy
  {word:"collaborative",pos:"adj",ipa:"/kəˈlæb.ər.ə.tɪv/",meaning:"hợp tác, cộng tác",example:"<em>Collaborative</em> projects develop teamwork skills.",topic:"Education",set:"Learning & Pedagogy",type:"vocabulary"},
  {word:"curriculum",pos:"noun",ipa:"/kəˈrɪk.jʊ.ləm/",meaning:"chương trình học",example:"The school revised its science <em>curriculum</em>.",topic:"Education",set:"Learning & Pedagogy",type:"vocabulary"},
  {word:"holistic",pos:"adj",ipa:"/həʊˈlɪs.tɪk/",meaning:"toàn diện, tổng thể",example:"A <em>holistic</em> approach considers students' wellbeing.",topic:"Education",set:"Learning & Pedagogy",type:"vocabulary"},
  {word:"pedagogical",pos:"adj",ipa:"/ˌped.əˈɡɒdʒ.ɪ.kəl/",meaning:"thuộc về sư phạm",example:"New <em>pedagogical</em> methods engage students better.",topic:"Education",set:"Learning & Pedagogy",type:"vocabulary"},
  {word:"retention",pos:"noun",ipa:"/rɪˈten.ʃən/",meaning:"sự ghi nhớ, lưu giữ kiến thức",example:"Active recall improves knowledge <em>retention</em>.",topic:"Education",set:"Learning & Pedagogy",type:"vocabulary"},
  // Set: Higher Education
  {word:"accreditation",pos:"noun",ipa:"/əˌkred.ɪˈteɪ.ʃən/",meaning:"sự công nhận, chứng nhận",example:"The university received international <em>accreditation</em>.",topic:"Education",set:"Higher Education",type:"vocabulary"},
  {word:"dissertation",pos:"noun",ipa:"/ˌdɪs.əˈteɪ.ʃən/",meaning:"luận văn, luận án",example:"She spent a year writing her <em>dissertation</em>.",topic:"Education",set:"Higher Education",type:"vocabulary"},
  {word:"interdisciplinary",pos:"adj",ipa:"/ˌɪn.tə.dɪˈsɪp.lɪ.nər.i/",meaning:"liên ngành",example:"Climate research requires an <em>interdisciplinary</em> approach.",topic:"Education",set:"Higher Education",type:"vocabulary"},
  {word:"plagiarism",pos:"noun",ipa:"/ˈpleɪ.dʒər.ɪ.zəm/",meaning:"đạo văn, sao chép không trích dẫn",example:"<em>Plagiarism</em> can result in expulsion.",topic:"Education",set:"Higher Education",type:"vocabulary"},
  {word:"scholarship",pos:"noun",ipa:"/ˈskɒl.ə.ʃɪp/",meaning:"học bổng; học thuật",example:"She won a full <em>scholarship</em> to study abroad.",topic:"Education",set:"Higher Education",type:"vocabulary"},

  /* ── TOPIC: Society ─────────────────────────────────────── */
  // Set: Inequality
  {word:"disparity",pos:"noun",ipa:"/dɪˈspær.ɪ.ti/",meaning:"sự chênh lệch, bất bình đẳng",example:"There is a growing <em>disparity</em> in wealth distribution.",topic:"Society",set:"Inequality",type:"vocabulary"},
  {word:"marginalised",pos:"adj",ipa:"/ˈmɑː.dʒɪ.nəl.aɪzd/",meaning:"bị gạt ra ngoài lề xã hội",example:"<em>Marginalised</em> communities often lack political power.",topic:"Society",set:"Inequality",type:"vocabulary"},
  {word:"privilege",pos:"noun",ipa:"/ˈprɪv.ɪ.lɪdʒ/",meaning:"đặc quyền, lợi thế",example:"Access to education is a <em>privilege</em> for many.",topic:"Society",set:"Inequality",type:"vocabulary"},
  {word:"systemic",pos:"adj",ipa:"/sɪˈstem.ɪk/",meaning:"mang tính hệ thống",example:"<em>Systemic</em> racism is embedded in institutions.",topic:"Society",set:"Inequality",type:"vocabulary"},
  {word:"underprivileged",pos:"adj",ipa:"/ˌʌn.dəˈprɪv.ɪ.lɪdʒd/",meaning:"thiếu điều kiện, hoàn cảnh khó khăn",example:"The charity helps <em>underprivileged</em> children.",topic:"Society",set:"Inequality",type:"vocabulary"},
  // Set: Urbanisation
  {word:"gentrification",pos:"noun",ipa:"/ˌdʒen.trɪ.fɪˈkeɪ.ʃən/",meaning:"sự thay đổi khu dân cư do giàu hoá",example:"<em>Gentrification</em> has displaced long-term residents.",topic:"Society",set:"Urbanisation",type:"vocabulary"},
  {word:"infrastructure",pos:"noun",ipa:"/ˈɪn.frə.strʌk.tʃər/",meaning:"cơ sở hạ tầng",example:"Poor <em>infrastructure</em> limits economic growth.",topic:"Society",set:"Urbanisation",type:"vocabulary"},
  {word:"migration",pos:"noun",ipa:"/maɪˈɡreɪ.ʃən/",meaning:"di cư",example:"Rural <em>migration</em> to cities is increasing.",topic:"Society",set:"Urbanisation",type:"vocabulary"},
  {word:"segregation",pos:"noun",ipa:"/ˌseɡ.rɪˈɡeɪ.ʃən/",meaning:"sự phân biệt, tách biệt",example:"Residential <em>segregation</em> persists in many cities.",topic:"Society",set:"Urbanisation",type:"vocabulary"},
  {word:"sustainable",pos:"adj",ipa:"/səˈsteɪ.nə.bəl/",meaning:"bền vững, có thể duy trì",example:"Cities must adopt <em>sustainable</em> development plans.",topic:"Society",set:"Urbanisation",type:"vocabulary"},

  /* ── TOPIC: Economy ─────────────────────────────────────── */
  // Set: Global Trade
  {word:"commodity",pos:"noun",ipa:"/kəˈmɒd.ɪ.ti/",meaning:"hàng hoá, nguyên liệu thô",example:"Oil is the world's most traded <em>commodity</em>.",topic:"Economy",set:"Global Trade",type:"vocabulary"},
  {word:"deficit",pos:"noun",ipa:"/ˈdef.ɪ.sɪt/",meaning:"thâm hụt, thiếu hụt",example:"The trade <em>deficit</em> widened last quarter.",topic:"Economy",set:"Global Trade",type:"vocabulary"},
  {word:"embargo",pos:"noun",ipa:"/ɪmˈbɑː.ɡəʊ/",meaning:"lệnh cấm vận thương mại",example:"An arms <em>embargo</em> was imposed on the country.",topic:"Economy",set:"Global Trade",type:"vocabulary"},
  {word:"tariff",pos:"noun",ipa:"/ˈtær.ɪf/",meaning:"thuế quan, thuế nhập khẩu",example:"Higher <em>tariffs</em> protect domestic manufacturers.",topic:"Economy",set:"Global Trade",type:"vocabulary"},
  {word:"recession",pos:"noun",ipa:"/rɪˈseʃ.ən/",meaning:"suy thoái kinh tế",example:"The <em>recession</em> led to mass unemployment.",topic:"Economy",set:"Global Trade",type:"vocabulary"},
  // Set: Finance
  {word:"austerity",pos:"noun",ipa:"/ɒˈster.ɪ.ti/",meaning:"chính sách thắt lưng buộc bụng",example:"<em>Austerity</em> measures cut public services deeply.",topic:"Economy",set:"Finance",type:"vocabulary"},
  {word:"fiscal",pos:"adj",ipa:"/ˈfɪs.kəl/",meaning:"thuộc tài chính công, ngân sách nhà nước",example:"The government announced a new <em>fiscal</em> policy.",topic:"Economy",set:"Finance",type:"vocabulary"},
  {word:"inflation",pos:"noun",ipa:"/ɪnˈfleɪ.ʃən/",meaning:"lạm phát",example:"High <em>inflation</em> erodes purchasing power.",topic:"Economy",set:"Finance",type:"vocabulary"},
  {word:"liquidity",pos:"noun",ipa:"/lɪˈkwɪd.ɪ.ti/",meaning:"tính thanh khoản",example:"Banks need sufficient <em>liquidity</em> to function.",topic:"Economy",set:"Finance",type:"vocabulary"},
  {word:"speculation",pos:"noun",ipa:"/ˌspek.jʊˈleɪ.ʃən/",meaning:"đầu cơ, suy đoán",example:"Property <em>speculation</em> drove up housing prices.",topic:"Economy",set:"Finance",type:"vocabulary"},

  /* ── PHRASAL VERBS ──────────────────────────────────────── */
  // Set: Work & Career
  {word:"carry out",pos:"phrasal verb",ipa:"/ˈkær.i aʊt/",meaning:"thực hiện, tiến hành",example:"The team will <em>carry out</em> a full investigation.",topic:"Work & Career",set:"Actions at Work",type:"phrasal"},
  {word:"draw up",pos:"phrasal verb",ipa:"/drɔː ʌp/",meaning:"soạn thảo, lập (kế hoạch, hợp đồng)",example:"We need to <em>draw up</em> a new contract.",topic:"Work & Career",set:"Actions at Work",type:"phrasal"},
  {word:"take on",pos:"phrasal verb",ipa:"/teɪk ɒn/",meaning:"đảm nhận (trách nhiệm), tuyển dụng",example:"She decided to <em>take on</em> a bigger role.",topic:"Work & Career",set:"Actions at Work",type:"phrasal"},
  {word:"turn down",pos:"phrasal verb",ipa:"/tɜːn daʊn/",meaning:"từ chối (lời đề nghị)",example:"He <em>turned down</em> the job offer abroad.",topic:"Work & Career",set:"Actions at Work",type:"phrasal"},
  {word:"put forward",pos:"phrasal verb",ipa:"/pʊt ˈfɔː.wəd/",meaning:"đề xuất, trình bày",example:"She <em>put forward</em> a new marketing strategy.",topic:"Work & Career",set:"Actions at Work",type:"phrasal"},
  // Set: Communication
  {word:"bring up",pos:"phrasal verb",ipa:"/brɪŋ ʌp/",meaning:"đề cập, nêu ra (chủ đề)",example:"He <em>brought up</em> the budget issue in the meeting.",topic:"Work & Career",set:"Communication",type:"phrasal"},
  {word:"follow up",pos:"phrasal verb",ipa:"/ˈfɒl.əʊ ʌp/",meaning:"theo dõi tiếp, kiểm tra lại",example:"I'll <em>follow up</em> on that email tomorrow.",topic:"Work & Career",set:"Communication",type:"phrasal"},
  {word:"get across",pos:"phrasal verb",ipa:"/ɡet əˈkrɒs/",meaning:"truyền đạt, làm người khác hiểu",example:"It's hard to <em>get your point across</em> in a noisy room.",topic:"Work & Career",set:"Communication",type:"phrasal"},
  {word:"talk over",pos:"phrasal verb",ipa:"/tɔːk ˈəʊ.vər/",meaning:"thảo luận kỹ lưỡng",example:"Let's <em>talk over</em> the details before we decide.",topic:"Work & Career",set:"Communication",type:"phrasal"},
  {word:"back up",pos:"phrasal verb",ipa:"/bæk ʌp/",meaning:"hỗ trợ, sao lưu (dữ liệu)",example:"Can you <em>back up</em> your argument with evidence?",topic:"Work & Career",set:"Communication",type:"phrasal"},

  // Set: Problems & Solutions
  {word:"come up with",pos:"phrasal verb",ipa:"/kʌm ʌp wɪð/",meaning:"nghĩ ra, đưa ra (ý tưởng)",example:"We need to <em>come up with</em> a solution fast.",topic:"Problems & Solutions",set:"Solving Issues",type:"phrasal"},
  {word:"deal with",pos:"phrasal verb",ipa:"/diːl wɪð/",meaning:"giải quyết, xử lý",example:"She knows how to <em>deal with</em> difficult clients.",topic:"Problems & Solutions",set:"Solving Issues",type:"phrasal"},
  {word:"figure out",pos:"phrasal verb",ipa:"/ˈfɪɡ.ər aʊt/",meaning:"tìm ra, giải quyết bằng suy nghĩ",example:"I can't <em>figure out</em> why the system crashed.",topic:"Problems & Solutions",set:"Solving Issues",type:"phrasal"},
  {word:"run into",pos:"phrasal verb",ipa:"/rʌn ˈɪn.tuː/",meaning:"gặp phải (vấn đề)",example:"We <em>ran into</em> several unexpected obstacles.",topic:"Problems & Solutions",set:"Solving Issues",type:"phrasal"},
  {word:"sort out",pos:"phrasal verb",ipa:"/sɔːt aʊt/",meaning:"giải quyết ổn thoả, sắp xếp",example:"We need to <em>sort out</em> the scheduling conflict.",topic:"Problems & Solutions",set:"Solving Issues",type:"phrasal"},
  // Set: Change & Progress
  {word:"catch up",pos:"phrasal verb",ipa:"/kætʃ ʌp/",meaning:"bắt kịp",example:"Developing countries are trying to <em>catch up</em> with technology.",topic:"Problems & Solutions",set:"Change & Progress",type:"phrasal"},
  {word:"give up",pos:"phrasal verb",ipa:"/ɡɪv ʌp/",meaning:"từ bỏ",example:"Don't <em>give up</em> on your goals too easily.",topic:"Problems & Solutions",set:"Change & Progress",type:"phrasal"},
  {word:"move on",pos:"phrasal verb",ipa:"/muːv ɒn/",meaning:"tiến lên, bước tiếp",example:"It's time to <em>move on</em> and try something new.",topic:"Problems & Solutions",set:"Change & Progress",type:"phrasal"},
  {word:"set up",pos:"phrasal verb",ipa:"/set ʌp/",meaning:"thiết lập, thành lập",example:"They plan to <em>set up</em> a new research centre.",topic:"Problems & Solutions",set:"Change & Progress",type:"phrasal"},
  {word:"take over",pos:"phrasal verb",ipa:"/teɪk ˈəʊ.vər/",meaning:"tiếp quản, thâu tóm",example:"A rival company tried to <em>take over</em> the business.",topic:"Problems & Solutions",set:"Change & Progress",type:"phrasal"},
];

/* ============================================================
   TOPIC META: icons + display names for each topic
   ============================================================ */
const TOPIC_META = {
  "Health":              {icon:"🏥"},
  "Environment":        {icon:"🌿"},
  "Technology":         {icon:"💻"},
  "Education":          {icon:"📚"},
  "Society":            {icon:"🏙️"},
  "Economy":            {icon:"📈"},
  "Work & Career":      {icon:"💼"},
  "Problems & Solutions":{icon:"🔧"},
};

/* ============================================================
   STATE  (simplified: only learnedWords)
   learnedWords: Set stored as array in localStorage
   ============================================================ */
let state = { learnedWords: [] };
function loadState(){
  try{
    const s = localStorage.getItem('vocabmaster_v2');
    if(s) state = {...state,...JSON.parse(s)};
  }catch(e){}
}
function saveState(){
  localStorage.setItem('vocabmaster_v2', JSON.stringify(state));
}
function markLearned(wordStr){
  if(!state.learnedWords.includes(wordStr)){
    state.learnedWords.push(wordStr);
    saveState();
    updatePill();
  }
}
function updatePill(){
  document.getElementById('learned-pill-text').textContent=`${state.learnedWords.length} từ đã học`;
}

/* ============================================================
   DARK MODE  (unchanged)
   ============================================================ */
const themeBtn = document.getElementById('theme-toggle');
let dark = localStorage.getItem('vocabmaster_dark')==='1';
function applyTheme(){
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  themeBtn.textContent=dark?'☀️':'🌙';
}
themeBtn.addEventListener('click',()=>{
  dark=!dark;
  localStorage.setItem('vocabmaster_dark',dark?'1':'0');
  applyTheme();
});

/* ============================================================
   TAB SWITCHING  (2 tabs: flashcard / quiz)
   ============================================================ */
const tabBtns = document.querySelectorAll('.tab-btn');
const fcBrowserEl = document.getElementById('fc-browser');
const fcSectionEl = document.getElementById('flashcard-section');
const quizSectionEl = document.getElementById('quiz-section');
const typeSwitcher = document.getElementById('type-switcher');

tabBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    tabBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    if(tab==='flashcard'){
      quizSectionEl.classList.remove('visible');
      typeSwitcher.style.display='flex';
      // Return to browser if not already in flashcard study
      if(!fcSectionEl.classList.contains('visible')){
        fcBrowserEl.classList.add('visible');
      }
    } else {
      // Quiz tab
      fcBrowserEl.classList.remove('visible');
      fcSectionEl.classList.remove('visible');
      typeSwitcher.style.display='none';
      quizSectionEl.classList.add('visible');
      refreshQuizSetup();
    }
  });
});

/* ============================================================
   TYPE SWITCHER (Vocabulary / Phrasal Verbs)
   ============================================================ */
let currentType = 'vocabulary'; // "vocabulary" | "phrasal"

document.querySelectorAll('.type-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.type-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    // Reset browser back to topic list
    showTopicList();
  });
});

/* ============================================================
   TOPIC / SET BROWSER
   ============================================================ */
let selectedTopic = null;

function getTopicsForType(type){
  // Get unique topics for the current type
  const topics = [...new Set(VOCAB.filter(w=>w.type===type).map(w=>w.topic))];
  return topics;
}

function getSetsForTopic(topic, type){
  const sets = [...new Set(VOCAB.filter(w=>w.topic===topic&&w.type===type).map(w=>w.set))];
  return sets;
}

function getWordsForSet(topic, set, type){
  return VOCAB.filter(w=>w.topic===topic&&w.set===set&&w.type===type);
}

function showTopicList(){
  selectedTopic = null;
  document.getElementById('breadcrumb').style.display='none';
  document.getElementById('set-list').style.display='none';
  document.getElementById('topic-grid').style.display='grid';
  document.getElementById('browser-title').textContent = currentType==='vocabulary' ? 'Chọn chủ đề' : 'Chọn nhóm Phrasal Verbs';
  document.getElementById('browser-sub').textContent = 'Chọn một chủ đề để xem các bộ từ bên trong';

  const topics = getTopicsForType(currentType);
  const grid = document.getElementById('topic-grid');
  grid.innerHTML='';
  topics.forEach(topic=>{
    const meta = TOPIC_META[topic] || {icon:'📂'};
    const wordCount = VOCAB.filter(w=>w.topic===topic&&w.type===currentType).length;
    const div = document.createElement('div');
    div.className='topic-card slide-up';
    div.innerHTML=`
      <div class="topic-icon">${meta.icon}</div>
      <div class="topic-name">${topic}</div>
      <div class="topic-count">${wordCount} từ</div>
    `;
    div.addEventListener('click',()=>showSetList(topic));
    grid.appendChild(div);
  });
}

function showSetList(topic){
  selectedTopic = topic;
  document.getElementById('topic-grid').style.display='none';
  document.getElementById('set-list').style.display='flex';
  // Breadcrumb
  const bc = document.getElementById('breadcrumb');
  bc.style.display='flex';
  document.getElementById('breadcrumb-topic').textContent = topic;
  const meta = TOPIC_META[topic]||{icon:'📂'};
  document.getElementById('browser-title').textContent = `${meta.icon} ${topic}`;
  document.getElementById('browser-sub').textContent = 'Chọn bộ từ để bắt đầu học';

  const sets = getSetsForTopic(topic, currentType);
  const list = document.getElementById('set-list');
  list.innerHTML='';
  sets.forEach(set=>{
    const words = getWordsForSet(topic, set, currentType);
    const learnedCount = words.filter(w=>state.learnedWords.includes(w.word)).length;
    const div = document.createElement('div');
    div.className='set-item slide-up';
    div.innerHTML=`
      <div class="set-info">
        <div class="set-name">${set}</div>
        <div class="set-meta">${words.length} từ · đã học: ${learnedCount}/${words.length}</div>
      </div>
      <span class="set-arrow">→</span>
    `;
    div.addEventListener('click',()=>startStudySet(topic,set));
    list.appendChild(div);
  });
}

// Breadcrumb "back" button
document.getElementById('back-to-topics').addEventListener('click', showTopicList);

/* ============================================================
   FLASHCARD STUDY
   Entering a set: render flashcard for the set
   Next button: auto-marks current word as learned before advancing
   ============================================================ */
let currentSetWords = [];
let currentIndex = 0;
let isFlipped = false;

function startStudySet(topic, set){
  currentSetWords = getWordsForSet(topic, set, currentType);
  currentIndex = 0;
  isFlipped = false;
  fcBrowserEl.classList.remove('visible');
  fcSectionEl.classList.add('visible');
  renderCard();
}

function renderCard(){
  const word = currentSetWords[currentIndex];
  if(!word) return;
  // Reset flip
  isFlipped=false;
  document.getElementById('flashcard').classList.remove('flipped');
  // Front face
  document.getElementById('fc-word').textContent = word.word;
  document.getElementById('fc-pos').textContent  = word.pos;
  document.getElementById('fc-topic-badge').textContent = word.topic;
  const typeBadge = document.getElementById('fc-type-badge');
  typeBadge.textContent = word.type==='phrasal' ? 'Phrasal Verb' : 'Vocab';
  typeBadge.className   = 'card-type-badge' + (word.type==='phrasal'?' pv':'');
  // Back face
  document.getElementById('fc-ipa').textContent      = word.ipa;
  document.getElementById('fc-meaning').textContent  = word.meaning;
  document.getElementById('fc-example').innerHTML    = word.example;
  // Counter & progress
  document.getElementById('card-counter').innerHTML  =
    `Thẻ <strong>${currentIndex+1}</strong> / <strong>${currentSetWords.length}</strong>`;
  document.getElementById('fc-progress-fill').style.width =
    `${((currentIndex+1)/currentSetWords.length)*100}%`;
  // Nav buttons
  document.getElementById('fc-prev').disabled = currentIndex===0;
  document.getElementById('fc-next').disabled = currentIndex===currentSetWords.length-1;
}

function flipCard(){
  isFlipped=!isFlipped;
  document.getElementById('flashcard').classList.toggle('flipped',isFlipped);
}

// Click card to flip
document.getElementById('fc-scene').addEventListener('click', flipCard);
document.getElementById('fc-flip').addEventListener('click', e=>{e.stopPropagation();flipCard();});

// Previous (no auto-learn)
document.getElementById('fc-prev').addEventListener('click',()=>{
  if(currentIndex>0){currentIndex--;renderCard();}
});

// Next: mark current word as learned, then advance
document.getElementById('fc-next').addEventListener('click',()=>{
  // Auto-mark current word learned before moving forward
  markLearned(currentSetWords[currentIndex].word);
  if(currentIndex < currentSetWords.length-1){
    currentIndex++;
    renderCard();
  }
});

// Shuffle button
document.getElementById('fc-shuffle').addEventListener('click',()=>{
  currentSetWords = shuffle([...currentSetWords]);
  currentIndex=0;
  renderCard();
  document.getElementById('fc-scene').classList.add('pop');
  setTimeout(()=>document.getElementById('fc-scene').classList.remove('pop'),300);
});

// Back to browser
document.getElementById('fc-back-btn').addEventListener('click',()=>{
  fcSectionEl.classList.remove('visible');
  fcBrowserEl.classList.add('visible');
  if(selectedTopic) showSetList(selectedTopic);
  else showTopicList();
});

// Keyboard nav
document.addEventListener('keydown',e=>{
  if(!fcSectionEl.classList.contains('visible')) return;
  if(e.key==='ArrowRight'){
    markLearned(currentSetWords[currentIndex].word);
    if(currentIndex<currentSetWords.length-1){currentIndex++;renderCard();}
  }
  if(e.key==='ArrowLeft'&&currentIndex>0){currentIndex--;renderCard();}
  if(e.key===' '||e.key==='Enter'){e.preventDefault();flipCard();}
});

/* ============================================================
   QUIZ – generate questions from learned words
   ============================================================ */
let quizWords=[];
let quizIndex=0;
let quizScore=0;
let quizAnswered=false;
let savedQuizWords=[];

/* Refresh quiz setup screen: show pool size & warning */
function refreshQuizSetup(){
  const pool = state.learnedWords.length;
  document.getElementById('quiz-pool-info').textContent =
    `Bạn đang có ${pool} từ đã học trong kho.`;
  const warn = document.getElementById('learned-warning');
  warn.style.display = pool < 4 ? 'block' : 'none';
}

document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);

function startQuiz(){
  /* Build pool: look up full word objects for every learned word */
  const learnedObjects = state.learnedWords
    .map(w => VOCAB.find(v => v.word === w))
    .filter(Boolean); // filter nulls if data was removed

  if(learnedObjects.length < 4){
    alert('Hãy học ít nhất 4 từ qua Flashcard trước khi làm quiz!');
    return;
  }

  const countVal = document.getElementById('quiz-count-select').value;
  const quizType = document.getElementById('quiz-type-select').value;

  // Determine how many questions
  const total = countVal==='all' ? learnedObjects.length : Math.min(parseInt(countVal), learnedObjects.length);
  quizWords = shuffle([...learnedObjects]).slice(0, total);
  savedQuizWords = [...quizWords];
  quizIndex=0; quizScore=0; quizAnswered=false;

  document.getElementById('quiz-setup').style.display='none';
  document.getElementById('quiz-result').style.display='none';
  document.getElementById('quiz-game').style.display='block';
  renderQuestion(quizType);
}

function renderQuestion(quizType){
  if(quizIndex >= quizWords.length){ showResult(); return; }

  const word = quizWords[quizIndex];

  /* Pick question type:
     - If quizType is 'mixed', randomly choose one of the 3 types.
     - Fall back to 'meaning' if example has no <em> tag (for fill-in). */
  let type = quizType==='mixed'
    ? ['meaning','word','fill'][Math.floor(Math.random()*3)]
    : quizType;
  if(type==='fill' && !word.example.includes('<em>')) type='meaning';

  // Progress UI
  document.getElementById('quiz-prog-text').textContent=`Câu ${quizIndex+1} / ${quizWords.length}`;
  document.getElementById('quiz-prog-fill').style.width=`${(quizIndex/quizWords.length)*100}%`;
  document.getElementById('quiz-score-chip').textContent=`✅ ${quizScore}`;

  /* ── Build distractors ─────────────────────────────────────
     We use ALL of VOCAB as the distractor pool (not just learned)
     so there are always enough wrong answers.
     For "meaning" questions: wrong answers are other meanings.
     For "word" questions: wrong answers are other words.
     Distractors are filtered to match the same type (vocab/phrasal)
     to keep answers plausible. */
  const sameType = VOCAB.filter(v => v.word !== word.word && v.type === word.type);
  const distractors = shuffle(sameType).slice(0,3);

  let qLabel='', qText='', correctAnswer='', optionPool=[];

  if(type==='meaning'){
    qLabel = 'Nghĩa tiếng Việt của từ sau là gì?';
    qText  = `<strong style="font-size:2rem;font-family:'Fraunces',serif">${word.word}</strong><br><span style="font-size:.9rem;opacity:.5">${word.ipa}</span>`;
    correctAnswer = word.meaning;
    optionPool = [word.meaning, ...distractors.map(w=>w.meaning)];
  } else if(type==='word'){
    qLabel = 'Từ tiếng Anh tương ứng với nghĩa sau là gì?';
    qText  = `<em>${word.meaning}</em>`;
    correctAnswer = word.word;
    optionPool = [word.word, ...distractors.map(w=>w.word)];
  } else { // fill
    qLabel = 'Chọn từ phù hợp để hoàn thành câu:';
    // Replace <em>…</em> with a visible blank
    qText  = word.example.replace(/<em>.*?<\/em>/,'<em>________</em>');
    correctAnswer = word.word;
    optionPool = [word.word, ...distractors.map(w=>w.word)];
  }

  document.getElementById('q-label').textContent = qLabel;
  document.getElementById('q-text').innerHTML    = qText;

  // Shuffle options and render buttons
  const shuffledOptions = shuffle(optionPool);
  const letters = ['A','B','C','D'];
  const grid = document.getElementById('options-grid');
  grid.innerHTML='';
  quizAnswered=false;
  document.getElementById('feedback-msg').style.display='none';
  document.getElementById('next-q-btn').style.display='none';

  shuffledOptions.forEach((opt,i)=>{
    const btn = document.createElement('button');
    btn.className='option-btn';
    btn.innerHTML=`<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click',()=>handleAnswer(btn, opt, correctAnswer, grid));
    grid.appendChild(btn);
  });
}

function handleAnswer(btn, chosen, correct, grid){
  if(quizAnswered) return;
  quizAnswered=true;
  const isCorrect = chosen===correct;

  // Highlight correct + wrong
  grid.querySelectorAll('.option-btn').forEach(b=>{
    b.disabled=true;
    if(b.querySelector('span:last-child').textContent===correct) b.classList.add('correct');
  });
  if(!isCorrect) btn.classList.add('wrong');

  // Feedback message
  const fb = document.getElementById('feedback-msg');
  fb.className='feedback-msg '+(isCorrect?'correct-fb':'wrong-fb');
  fb.innerHTML = isCorrect
    ? '✅ Chính xác! Rất tốt!'
    : `❌ Chưa đúng. Đáp án: <strong>${correct}</strong>`;
  fb.style.display='flex';

  if(isCorrect) quizScore++;
  document.getElementById('quiz-score-chip').textContent=`✅ ${quizScore}`;
  document.getElementById('next-q-btn').style.display='inline-flex';
  quizIndex++;
}

document.getElementById('next-q-btn').addEventListener('click',()=>{
  const quizType = document.getElementById('quiz-type-select').value;
  renderQuestion(quizType);
});

function showResult(){
  document.getElementById('quiz-game').style.display='none';
  const result = document.getElementById('quiz-result');
  result.style.display='flex';
  result.style.flexDirection='column';
  result.style.alignItems='center';
  const pct = Math.round((quizScore/quizWords.length)*100);
  document.getElementById('result-score-big').textContent=`${quizScore}/${quizWords.length}`;
  let emoji='🎉', sub='Xuất sắc! Bạn nắm vững từ vựng rồi!';
  if(pct<50){emoji='😅';sub='Cần ôn thêm! Hãy thử lại nhé.';}
  else if(pct<75){emoji='👍';sub='Khá tốt! Tiếp tục cố gắng nhé.';}
  document.getElementById('result-emoji').textContent=emoji;
  document.getElementById('result-sub').textContent=sub;
}

document.getElementById('retry-quiz-btn').addEventListener('click',()=>{
  quizWords=[...savedQuizWords];
  quizIndex=0;quizScore=0;quizAnswered=false;
  document.getElementById('quiz-result').style.display='none';
  document.getElementById('quiz-game').style.display='block';
  const quizType = document.getElementById('quiz-type-select').value;
  renderQuestion(quizType);
});

document.getElementById('new-quiz-btn').addEventListener('click',()=>{
  document.getElementById('quiz-result').style.display='none';
  document.getElementById('quiz-game').style.display='none';
  document.getElementById('quiz-setup').style.display='block';
  refreshQuizSetup();
});

/* ============================================================
   HELPER: Fisher-Yates shuffle
   ============================================================ */
function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

loadState();
applyTheme();
updatePill();
showTopicList(); // render topic browser on load
