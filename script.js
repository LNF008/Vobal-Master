
    /* Vocabulary data loaded from vocab-data.js */
    const VOCAB = window.VOCAB;
    const TOPIC_META = window.TOPIC_META;

    /* ============================================================
       STATE  (simplified: only learnedWords)
       learnedWords: Set stored as array in localStorage
       ============================================================ */
    let state = { learnedWords: [] };
    function loadState() {
      try {
        const s = localStorage.getItem('vocabmaster_v2');
        if (s) state = { ...state, ...JSON.parse(s) };
      } catch (e) { }
    }
    function saveState() {
      localStorage.setItem('vocabmaster_v2', JSON.stringify(state));
    }
    function markLearned(wordStr) {
      if (!state.learnedWords.includes(wordStr)) {
        state.learnedWords.push(wordStr);
        saveState();
        updatePill();
      }
    }
    function updatePill() {
      document.getElementById('learned-pill-text').textContent = `${state.learnedWords.length} từ đã học`;
    }

    /* ============================================================
       DARK MODE
       ============================================================ */
    const themeBtn = document.getElementById('theme-toggle');
    let dark = localStorage.getItem('vocabmaster_dark') === '1';
    function applyTheme() {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
      themeBtn.textContent = dark ? '☀️' : '🌙';
    }
    themeBtn.addEventListener('click', () => {
      dark = !dark;
      localStorage.setItem('vocabmaster_dark', dark ? '1' : '0');
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

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        if (tab === 'flashcard') {
          quizSectionEl.classList.remove('visible');
          typeSwitcher.style.display = 'flex';
          // Return to browser if not already in flashcard study
          if (!fcSectionEl.classList.contains('visible')) {
            fcBrowserEl.classList.add('visible');
          }
        } else {
          // Quiz tab
          fcBrowserEl.classList.remove('visible');
          fcSectionEl.classList.remove('visible');
          typeSwitcher.style.display = 'none';
          quizSectionEl.classList.add('visible');
          refreshQuizSetup();
        }
      });
    });

    /* ============================================================
       TYPE SWITCHER (Vocabulary / Phrasal Verbs)
       ============================================================ */
    let currentType = 'vocabulary'; // "vocabulary" | "phrasal"

    document.querySelectorAll('.type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
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

    function getTopicsForType(type) {
      // Get unique topics for the current type
      const topics = [...new Set(VOCAB.filter(w => w.type === type).map(w => w.topic))];
      return topics;
    }

    function getSetsForTopic(topic, type) {
      const sets = [...new Set(VOCAB.filter(w => w.topic === topic && w.type === type).map(w => w.set))];
      return sets;
    }

    function getWordsForSet(topic, set, type) {
      return VOCAB.filter(w => w.topic === topic && w.set === set && w.type === type);
    }

    function showTopicList() {
      selectedTopic = null;
      document.getElementById('breadcrumb').style.display = 'none';
      document.getElementById('set-list').style.display = 'none';
      document.getElementById('topic-grid').style.display = 'grid';
      document.getElementById('browser-title').textContent = currentType === 'vocabulary' ? 'Chọn chủ đề' : 'Chọn nhóm Phrasal Verbs';
      document.getElementById('browser-sub').textContent = 'Chọn một chủ đề để xem các bộ từ bên trong';

      const topics = getTopicsForType(currentType);
      const grid = document.getElementById('topic-grid');
      grid.innerHTML = '';
      topics.forEach(topic => {
        const meta = TOPIC_META[topic] || { icon: '📂' };
        const wordCount = VOCAB.filter(w => w.topic === topic && w.type === currentType).length;
        const div = document.createElement('div');
        div.className = 'topic-card slide-up';
        div.innerHTML = `
      <div class="topic-icon">${meta.icon}</div>
      <div class="topic-name">${topic}</div>
      <div class="topic-count">${wordCount} từ</div>
    `;
        div.addEventListener('click', () => showSetList(topic));
        grid.appendChild(div);
      });
    }

    function showSetList(topic) {
      selectedTopic = topic;
      document.getElementById('topic-grid').style.display = 'none';
      document.getElementById('set-list').style.display = 'flex';
      // Breadcrumb
      const bc = document.getElementById('breadcrumb');
      bc.style.display = 'flex';
      document.getElementById('breadcrumb-topic').textContent = topic;
      const meta = TOPIC_META[topic] || { icon: '📂' };
      document.getElementById('browser-title').textContent = `${meta.icon} ${topic}`;
      document.getElementById('browser-sub').textContent = 'Chọn bộ từ để bắt đầu học';

      const sets = getSetsForTopic(topic, currentType);
      const list = document.getElementById('set-list');
      list.innerHTML = '';
      sets.forEach(set => {
        const words = getWordsForSet(topic, set, currentType);
        const learnedCount = words.filter(w => state.learnedWords.includes(w.word)).length;
        const div = document.createElement('div');
        div.className = 'set-item slide-up';
        div.innerHTML = `
      <div class="set-info">
        <div class="set-name">${set}</div>
        <div class="set-meta">${words.length} từ · đã học: ${learnedCount}/${words.length}</div>
      </div>
      <span class="set-arrow">→</span>
    `;
        div.addEventListener('click', () => startStudySet(topic, set));
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

    function startStudySet(topic, set) {
      currentSetWords = getWordsForSet(topic, set, currentType);
      currentIndex = 0;
      isFlipped = false;
      fcBrowserEl.classList.remove('visible');
      fcSectionEl.classList.add('visible');
      renderCard();
    }

    function renderCard() {
      const word = currentSetWords[currentIndex];
      if (!word) return;
      // Reset flip
      isFlipped = false;
      document.getElementById('flashcard').classList.remove('flipped');
      // Front face
      document.getElementById('fc-word').textContent = word.word;
      document.getElementById('fc-pos').textContent = word.pos;
      document.getElementById('fc-topic-badge').textContent = word.topic;
      const typeBadge = document.getElementById('fc-type-badge');
      typeBadge.textContent = word.type === 'phrasal' ? 'Phrasal Verb' : 'Vocab';
      typeBadge.className = 'card-type-badge' + (word.type === 'phrasal' ? ' pv' : '');
      // Back face
      document.getElementById('fc-ipa').textContent = word.ipa;
      document.getElementById('fc-meaning').textContent = word.meaning;
      document.getElementById('fc-example').innerHTML = word.example;
      // Counter & progress
      document.getElementById('card-counter').innerHTML =
        `Thẻ <strong>${currentIndex + 1}</strong> / <strong>${currentSetWords.length}</strong>`;
      document.getElementById('fc-progress-fill').style.width =
        `${((currentIndex + 1) / currentSetWords.length) * 100}%`;
      // Nav buttons
      document.getElementById('fc-prev').disabled = currentIndex === 0;
      document.getElementById('fc-next').disabled = currentIndex === currentSetWords.length - 1;
    }

    function flipCard() {
      isFlipped = !isFlipped;
      document.getElementById('flashcard').classList.toggle('flipped', isFlipped);
    }

    // Click card to flip
    document.getElementById('fc-scene').addEventListener('click', flipCard);
    document.getElementById('fc-flip').addEventListener('click', e => { e.stopPropagation(); flipCard(); });

    // Previous (no auto-learn)
    document.getElementById('fc-prev').addEventListener('click', () => {
      if (currentIndex > 0) { currentIndex--; renderCard(); }
    });

    // Next: mark current word as learned, then advance
    document.getElementById('fc-next').addEventListener('click', () => {
      // Auto-mark current word learned before moving forward
      markLearned(currentSetWords[currentIndex].word);
      if (currentIndex < currentSetWords.length - 1) {
        currentIndex++;
        renderCard();
      }
    });

    // Shuffle button
    document.getElementById('fc-shuffle').addEventListener('click', () => {
      currentSetWords = shuffle([...currentSetWords]);
      currentIndex = 0;
      renderCard();
      document.getElementById('fc-scene').classList.add('pop');
      setTimeout(() => document.getElementById('fc-scene').classList.remove('pop'), 300);
    });

    // Back to browser
    document.getElementById('fc-back-btn').addEventListener('click', () => {
      fcSectionEl.classList.remove('visible');
      fcBrowserEl.classList.add('visible');
      if (selectedTopic) showSetList(selectedTopic);
      else showTopicList();
    });

    // Keyboard nav
    document.addEventListener('keydown', e => {
      if (!fcSectionEl.classList.contains('visible')) return;
      if (e.key === 'ArrowRight') {
        markLearned(currentSetWords[currentIndex].word);
        if (currentIndex < currentSetWords.length - 1) { currentIndex++; renderCard(); }
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) { currentIndex--; renderCard(); }
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipCard(); }
    });

    /* ============================================================
       QUIZ – generate questions from learned words
       ============================================================ */
    let quizWords = [];
    let quizIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;
    let savedQuizWords = [];

    /* Refresh quiz setup screen: show pool size & warning */
    function refreshQuizSetup() {
      const pool = state.learnedWords.length;
      document.getElementById('quiz-pool-info').textContent =
        `Bạn đang có ${pool} từ đã học trong kho.`;
      const warn = document.getElementById('learned-warning');
      warn.style.display = pool < 4 ? 'block' : 'none';
    }

    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);

    function startQuiz() {
      /* Build pool: look up full word objects for every learned word */
      const learnedObjects = state.learnedWords
        .map(w => VOCAB.find(v => v.word === w))
        .filter(Boolean); // filter nulls if data was removed

      if (learnedObjects.length < 4) {
        alert('Hãy học ít nhất 4 từ qua Flashcard trước khi làm quiz!');
        return;
      }

      const countVal = document.getElementById('quiz-count-select').value;
      const quizType = document.getElementById('quiz-type-select').value;

      // Determine how many questions
      const total = countVal === 'all' ? learnedObjects.length : Math.min(parseInt(countVal), learnedObjects.length);
      quizWords = shuffle([...learnedObjects]).slice(0, total);
      savedQuizWords = [...quizWords];
      quizIndex = 0; quizScore = 0; quizAnswered = false;

      document.getElementById('quiz-setup').style.display = 'none';
      document.getElementById('quiz-result').style.display = 'none';
      document.getElementById('quiz-game').style.display = 'block';
      renderQuestion(quizType);
    }

    function renderQuestion(quizType) {
      if (quizIndex >= quizWords.length) { showResult(); return; }

      const word = quizWords[quizIndex];

      /* Pick question type:
         - If quizType is 'mixed', randomly choose one of the 3 types.
         - Fall back to 'meaning' if example has no <em> tag (for fill-in). */
      let type = quizType === 'mixed'
        ? ['meaning', 'word', 'fill'][Math.floor(Math.random() * 3)]
        : quizType;
      if (type === 'fill' && !word.example.includes('<em>')) type = 'meaning';

      // Progress UI
      document.getElementById('quiz-prog-text').textContent = `Câu ${quizIndex + 1} / ${quizWords.length}`;
      document.getElementById('quiz-prog-fill').style.width = `${(quizIndex / quizWords.length) * 100}%`;
      document.getElementById('quiz-score-chip').textContent = `✅ ${quizScore}`;

      /* ── Build distractors ─────────────────────────────────────
         We use ALL of VOCAB as the distractor pool (not just learned)
         so there are always enough wrong answers.
         For "meaning" questions: wrong answers are other meanings.
         For "word" questions: wrong answers are other words.
         Distractors are filtered to match the same type (vocab/phrasal)
         to keep answers plausible. */
      const sameType = VOCAB.filter(v => v.word !== word.word && v.type === word.type);
      const distractors = shuffle(sameType).slice(0, 3);

      let qLabel = '', qText = '', correctAnswer = '', optionPool = [];

      if (type === 'meaning') {
        qLabel = 'Nghĩa tiếng Việt của từ sau là gì?';
        qText = `<strong style="font-size:2rem;font-family:'Fraunces',serif">${word.word}</strong><br><span style="font-size:.9rem;opacity:.5">${word.ipa}</span>`;
        correctAnswer = word.meaning;
        optionPool = [word.meaning, ...distractors.map(w => w.meaning)];
      } else if (type === 'word') {
        qLabel = 'Từ tiếng Anh tương ứng với nghĩa sau là gì?';
        qText = `<em>${word.meaning}</em>`;
        correctAnswer = word.word;
        optionPool = [word.word, ...distractors.map(w => w.word)];
      } else { // fill
        qLabel = 'Chọn từ phù hợp để hoàn thành câu:';
        // Replace <em>…</em> with a visible blank
        qText = word.example.replace(/<em>.*?<\/em>/, '<em>________</em>');
        correctAnswer = word.word;
        optionPool = [word.word, ...distractors.map(w => w.word)];
      }

      document.getElementById('q-label').textContent = qLabel;
      document.getElementById('q-text').innerHTML = qText;

      // Shuffle options and render buttons
      const shuffledOptions = shuffle(optionPool);
      const letters = ['A', 'B', 'C', 'D'];
      const grid = document.getElementById('options-grid');
      grid.innerHTML = '';
      quizAnswered = false;
      document.getElementById('feedback-msg').style.display = 'none';
      document.getElementById('next-q-btn').style.display = 'none';

      shuffledOptions.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
        btn.addEventListener('click', () => handleAnswer(btn, opt, correctAnswer, grid));
        grid.appendChild(btn);
      });
    }

    function handleAnswer(btn, chosen, correct, grid) {
      if (quizAnswered) return;
      quizAnswered = true;
      const isCorrect = chosen === correct;

      // Highlight correct + wrong
      grid.querySelectorAll('.option-btn').forEach(b => {
        b.disabled = true;
        if (b.querySelector('span:last-child').textContent === correct) b.classList.add('correct');
      });
      if (!isCorrect) btn.classList.add('wrong');

      // Feedback message
      const fb = document.getElementById('feedback-msg');
      fb.className = 'feedback-msg ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
      fb.innerHTML = isCorrect
        ? '✅ Chính xác! Rất tốt!'
        : `❌ Chưa đúng. Đáp án: <strong>${correct}</strong>`;
      fb.style.display = 'flex';

      if (isCorrect) quizScore++;
      document.getElementById('quiz-score-chip').textContent = `✅ ${quizScore}`;
      document.getElementById('next-q-btn').style.display = 'inline-flex';
      quizIndex++;
    }

    document.getElementById('next-q-btn').addEventListener('click', () => {
      const quizType = document.getElementById('quiz-type-select').value;
      renderQuestion(quizType);
    });

    function showResult() {
      document.getElementById('quiz-game').style.display = 'none';
      const result = document.getElementById('quiz-result');
      result.style.display = 'flex';
      result.style.flexDirection = 'column';
      result.style.alignItems = 'center';
      const pct = Math.round((quizScore / quizWords.length) * 100);
      document.getElementById('result-score-big').textContent = `${quizScore}/${quizWords.length}`;
      let emoji = '🎉', sub = 'Xuất sắc! Bạn nắm vững từ vựng rồi!';
      if (pct < 50) { emoji = '😅'; sub = 'Cần ôn thêm! Hãy thử lại nhé.'; }
      else if (pct < 75) { emoji = '👍'; sub = 'Khá tốt! Tiếp tục cố gắng nhé.'; }
      document.getElementById('result-emoji').textContent = emoji;
      document.getElementById('result-sub').textContent = sub;
    }

    document.getElementById('retry-quiz-btn').addEventListener('click', () => {
      quizWords = [...savedQuizWords];
      quizIndex = 0; quizScore = 0; quizAnswered = false;
      document.getElementById('quiz-result').style.display = 'none';
      document.getElementById('quiz-game').style.display = 'block';
      const quizType = document.getElementById('quiz-type-select').value;
      renderQuestion(quizType);
    });

    document.getElementById('new-quiz-btn').addEventListener('click', () => {
      document.getElementById('quiz-result').style.display = 'none';
      document.getElementById('quiz-game').style.display = 'none';
      document.getElementById('quiz-setup').style.display = 'block';
      refreshQuizSetup();
    });

    /* ============================================================
       HELPER: Fisher-Yates shuffle
       ============================================================ */
    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    loadState();
    applyTheme();
    updatePill();
    showTopicList();
  