/* =============================================
   قصص الأنبياء — app.js (v3)
   ============================================= */

const PROPHET_ICONS = { adam:'🌿', nuh:'🚢', ibrahim:'🔥', ismail:'💧', yusuf:'⭐', musa:'🌊', dawud:'🎵', sulayman:'👑', isa:'✨', muhammad:'📖' };

// ── All Quiz Questions ─────────────────────────────────────────────────────
const ALL_QUESTIONS = [
  // STORIES
  { cat:'stories', q:'من هو أول نبي أُرسل إلى أهل الأرض بعد انتشار الشرك؟', opts:['آدم','نوح','إبراهيم','موسى'], ans:1, exp:'نوح عليه السلام هو أول الرسل إلى أهل الأرض بعد انتشار الشرك.' },
  { cat:'stories', q:'كم عامًا ظل نوح يدعو قومه؟', opts:['مئة عام','خمسمائة عام','تسعمائة وخمسون عامًا','أربعمائة عام'], ans:2, exp:'ظل نوح يدعو قومه ألف سنة إلا خمسين عامًا.' },
  { cat:'stories', q:'على أي جبل استقرت سفينة نوح؟', opts:['جبل سيناء','جبل عرفات','جبل الجودي','جبل الطور'], ans:2, exp:'استقرت سفينة نوح على جبل الجودي.' },
  { cat:'stories', q:'من ألقى إبراهيم عليه السلام في النار؟', opts:['فرعون','نمرود','هامان','قارون'], ans:1, exp:'الملك نمرود هو الذي أمر بإلقاء إبراهيم في النار.' },
  { cat:'stories', q:'من بنى الكعبة المشرفة مع إبراهيم عليه السلام؟', opts:['إسحاق','يعقوب','إسماعيل','موسى'], ans:2, exp:'بنى إبراهيم وابنه إسماعيل الكعبة المشرفة.' },
  { cat:'stories', q:'من أي بئر أُنقذ يوسف عليه السلام؟', opts:['بئر زمزم','غيابة الجب','بئر سبأ','بئر مدين'], ans:1, exp:'ألقى إخوة يوسف في غيابة الجب (البئر العميقة).' },
  { cat:'stories', q:'في أي بلد حكم يوسف عليه السلام خازنًا؟', opts:['الشام','مدين','مصر','بابل'], ans:2, exp:'جعله ملك مصر على خزائن الأرض.' },
  { cat:'stories', q:'من ألقت أم موسى طفلها في النيل؟', opts:['بأمر من الله','خوفًا من الغرق','هربًا من العدو','لتختبر إيمانها'], ans:0, exp:'أوحى الله لأم موسى أن تضعه في التابوت وتلقيه في النيل.' },
  { cat:'stories', q:'من قتل داود عليه السلام في المعركة؟', opts:['فرعون','نمرود','جالوت','قارون'], ans:2, exp:'تقدم الفتى داود ورمى جالوت بحجر من مقلاعه فأصابه.' },
  { cat:'stories', q:'ما البلد الذي تُنسب إليه ملكة بلقيس؟', opts:['مصر','الحبشة','سبأ','فارس'], ans:2, exp:'بلقيس ملكة سبأ، اكتشفها الهدهد الذي أرسله سليمان.' },
  { cat:'stories', q:'من أين نبع ماء زمزم؟', opts:['ضربة عصا موسى','دعاء إبراهيم','ضربة جبريل بجناحه','بكاء إسماعيل'], ans:2, exp:'ضرب جبريل الأرض بجناحه فنبع ماء زمزم.' },
  { cat:'stories', q:'ما الجبل الذي تلقّى عليه موسى التوراة؟', opts:['جبل عرفات','جبل الجودي','جبل سيناء','جبل النور'], ans:2, exp:'تلقى موسى التوراة في جبل سيناء.' },
  { cat:'stories', q:'من كانت أول من آمنت بالنبي محمد ﷺ؟', opts:['فاطمة','عائشة','خديجة','أم سلمة'], ans:2, exp:'خديجة رضي الله عنها كانت أول من آمن بالنبي ﷺ.' },
  { cat:'stories', q:'أين وُلد النبي محمد ﷺ؟', opts:['المدينة المنورة','الطائف','مكة المكرمة','القدس'], ans:2, exp:'وُلد النبي محمد ﷺ في مكة المكرمة عام الفيل.' },
  { cat:'stories', q:'في أي عام من الهجرة فتح النبي ﷺ مكة؟', opts:['السنة السادسة','السنة الثامنة','السنة العاشرة','السنة الثانية'], ans:1, exp:'فتح النبي مكة في السنة الثامنة من الهجرة.' },
  // FACTS
  { cat:'facts', q:'كم عدد أولي العزم من الرسل؟', opts:['ثلاثة','أربعة','خمسة','ستة'], ans:2, exp:'أولو العزم خمسة: نوح وإبراهيم وموسى وعيسى ومحمد عليهم الصلاة والسلام.' },
  { cat:'facts', q:'ما لقب إبراهيم عليه السلام؟', opts:['كليم الله','روح الله','خليل الله','نبي الله'], ans:2, exp:'لُقّب إبراهيم بـ"خليل الله".' },
  { cat:'facts', q:'ما الكتاب الذي أُنزل على داود عليه السلام؟', opts:['التوراة','الإنجيل','الزبور','القرآن'], ans:2, exp:'أُنزل الزبور على نبي الله داود عليه السلام.' },
  { cat:'facts', q:'ما المعجزة الكبرى التي أُعطيت لموسى عليه السلام؟', opts:['إحياء الموتى','العصا واليد البيضاء','منطق الطير','الصوت الجميل'], ans:1, exp:'أعطى الله موسى معجزتين: العصا التي تنقلب حية واليد البيضاء.' },
  { cat:'facts', q:'ماذا كان يملك سليمان عليه السلام مما لم يُعطَ لأحد قبله؟', opts:['الزبور','التوراة','ملك الجن والإنس والريح','إحياء الموتى'], ans:2, exp:'سخّر الله لسليمان الجن والإنس والطير والريح.' },
  { cat:'facts', q:'من أُنزل عليه الإنجيل؟', opts:['موسى','إبراهيم','عيسى','يوسف'], ans:2, exp:'أُنزل الإنجيل على نبي الله عيسى ابن مريم عليه السلام.' },
  { cat:'facts', q:'ما لقب يوسف عليه السلام؟', opts:['كليم الله','الصديق','ذبيح الله','خليل الله'], ans:1, exp:'لُقّب يوسف بـ"الصديق" لكثرة صدقه.' },
  { cat:'facts', q:'ما لقب إسماعيل عليه السلام؟', opts:['خليل الله','كليم الله','ذبيح الله','روح الله'], ans:2, exp:'لُقّب إسماعيل بـ"ذبيح الله" لأنه فُدي بكبش عظيم.' },
  // LESSONS
  { cat:'lessons', q:'ما الدرس الرئيسي من قصة آدم عليه السلام؟', opts:['الكبر عن طاعة الله','التوبة الصادقة تمحو الذنب مهما عظم','الصبر على الأذى','بناء السفن'], ans:1, exp:'آدم أذنب ثم تاب توبة صادقة فتاب الله عليه وغفر له.' },
  { cat:'lessons', q:'ما الدرس المستفاد من قصة نوح عليه السلام؟', opts:['أهمية بناء السفن','أن القرابة لا تنفع بلا إيمان','الهجرة في سبيل الله','العفو عند المقدرة'], ans:1, exp:'ابن نوح غرق رغم نبوة أبيه، لأن القرابة وحدها لا تنفع بلا إيمان.' },
  { cat:'lessons', q:'ما الذي يُعلّمنا موقف إبراهيم أمام النمرود؟', opts:['قبول الظلم بصمت','الجرأة في قول الحق أمام الطغاة','الابتعاد عن الحكام','الدعاء بدل المواجهة'], ans:1, exp:'وقف إبراهيم بجرأة أمام نمرود وحاجّه بالحجة العقلية.' },
  { cat:'lessons', q:'ماذا نتعلم من قصة يوسف عليه السلام حين عفا عن إخوته؟', opts:['الانتقام من الظالمين','العفو عند المقدرة صفة الكرام','الهروب من المشكلات','عدم الثقة بالأخ'], ans:1, exp:'قال يوسف لإخوته: لا تثريب عليكم اليوم، يغفر الله لكم.' },
  { cat:'lessons', q:'ما الدرس من تحوّل النار بردًا وسلامًا على إبراهيم؟', opts:['أن النار لا تحرق دائمًا','من توكل على الله حق توكله كفاه','أن المعجزات ستحمي المسلم دائمًا','أن الصبر يكفي وحده'], ans:1, exp:'من توكل على الله حق توكله كفاه الله كل مكروه.' },
  { cat:'lessons', q:'ما الدرس من قصة هاجر والسعي بين الصفا والمروة؟', opts:['الأم التي تسعى ولا تستسلم لا تُخذل','يجب الانتظار بدل السعي','السعي لا يُجدي نفعًا','الصبر يكفي بلا عمل'], ans:0, exp:'هاجر سعت بين الصفا والمروة سبع مرات فأنبع الله لها زمزم.' },
  { cat:'lessons', q:'ما الدرس من طفولة داود ومعركته مع جالوت؟', opts:['يجب انتظار القوة قبل المواجهة','الحجم لا يحدد الأثر والإيمان يُغلب القوة','الشجاعة وحدها تكفي','القوة الجسدية أهم شيء'], ans:1, exp:'داود الراعي الصغير قتل الجبار جالوت بحجر واحد بعون الله.' },
  { cat:'lessons', q:'ما الدرس من قصة سليمان ونملة الوادي؟', opts:['الحشرات لا تفهم','التواضع مع الضعفاء علامة العظمة','القوة تُسكت الضعفاء','لا ينبغي الالتفات لصغار الأمور'], ans:1, exp:'تبسّم سليمان لكلام النملة وشكر الله، وهذا تواضع العظماء.' },
];

// ── DOM refs ──────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const prophetList   = $('prophetList');
const searchInput   = $('searchInput');
const clearSearch   = $('clearSearch');
const noResults     = $('noResults');
const welcomeScreen = $('welcomeScreen');
const welcomeGrid   = $('welcomeGrid');
const storyPanel    = $('storyPanel');
const storyName     = $('storyName');
const storyTitle    = $('storyTitle');
const storyLocation = $('storyLocation');
const storyEra      = $('storyEra');
const storyBody     = $('storyBody');
const lessonsList   = $('lessonsList');
const scrollTopBtn  = $('scrollTopBtn');
const hamburgerBtn  = $('hamburgerBtn');
const sidebar       = $('sidebar');
const overlay       = $('sidebarOverlay');
const mainContent   = $('mainContent');
const backBtn       = $('backBtn');
const prevBtn       = $('prevBtn');
const nextBtn       = $('nextBtn');
const progressBar   = $('progressBar');
const endBlock      = $('endBlock');
const endTopBtn     = $('endTopBtn');
const themeBtn      = $('themeBtn');
const themeIcon     = $('themeIcon');
const fontDecBtn    = $('fontDecBtn');
const fontIncBtn    = $('fontIncBtn');
const quizLaunchBtn = $('quizLaunchBtn');
const quizPanel     = $('quizPanel');
const quizBackBtn   = $('quizBackBtn');
const ratingLaunchBtn = $('ratingLaunchBtn');
const ratingBackdrop  = $('ratingBackdrop');
const ratingClose     = $('ratingClose');

// ── State ─────────────────────────────────────────────────────────────────
let prophets        = [];
let activeProphetId = null;
let currentView     = 'welcome'; // 'welcome' | 'story' | 'quiz'
let fontScale       = 0; // -2 to +3
const FONT_SIZES    = [0.9, 1.0, 1.1, 1.15, 1.25, 1.35, 1.5];
let quizQuestions   = [];
let quizIdx         = 0;
let quizScore       = 0;
let answered        = false;
let selectedCat     = 'all';
let ratingStep      = 1;
let selectedStars   = 0;

// ── Boot ──────────────────────────────────────────────────────────────────
async function init() {
  loadPrefs();
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    prophets = await res.json();
    buildSidebar();
    buildWelcomeGrid();
    $('qTotalCount').textContent = ALL_QUESTIONS.length;
  } catch (err) {
    showError('تعذّر تحميل البيانات. شغّل الملف عبر خادم محلي (python -m http.server).');
    console.error(err);
  }
}

// ── Preferences (theme + font) ────────────────────────────────────────────
function loadPrefs() {
  const theme = localStorage.getItem('theme') || 'dark';
  const fs    = parseInt(localStorage.getItem('fontScale') || '3');
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  fontScale = fs;
  applyFont();
}
function savePrefs() {
  localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
  localStorage.setItem('fontScale', fontScale);
}

// ── Theme Toggle ──────────────────────────────────────────────────────────
themeBtn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  savePrefs();
});

// ── Font Size ─────────────────────────────────────────────────────────────
fontDecBtn.addEventListener('click', () => { if (fontScale > 0) { fontScale--; applyFont(); savePrefs(); } });
fontIncBtn.addEventListener('click', () => { if (fontScale < FONT_SIZES.length - 1) { fontScale++; applyFont(); savePrefs(); } });
function applyFont() {
  document.documentElement.style.setProperty('--story-fs', FONT_SIZES[fontScale] + 'rem');
  fontDecBtn.disabled = fontScale === 0;
  fontIncBtn.disabled = fontScale === FONT_SIZES.length - 1;
}

// ── Sidebar ───────────────────────────────────────────────────────────────
function buildSidebar(list = prophets) {
  prophetList.innerHTML = '';
  const q = searchInput.value.trim().toLowerCase();
  if (!list.length) { noResults.classList.add('visible'); return; }
  noResults.classList.remove('visible');
  list.forEach((p, idx) => {
    const item = document.createElement('div');
    item.className = 'prophet-item' + (p.id === activeProphetId ? ' active' : '');
    item.innerHTML = `
      <span class="prophet-number">${idx + 1}</span>
      <div class="prophet-info">
        <span class="prophet-name">${q ? highlight(p.name, q) : p.name}</span>
        <span class="prophet-sub">${p.title || ''}</span>
      </div>`;
    item.addEventListener('click', () => selectProphet(p.id));
    prophetList.appendChild(item);
  });
}

// ── Welcome grid ──────────────────────────────────────────────────────────
function buildWelcomeGrid() {
  welcomeGrid.innerHTML = '';
  prophets.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'quick-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `<div class="quick-card-icon">${PROPHET_ICONS[p.id] || '✦'}</div><div class="quick-card-name">${p.name}</div><div class="quick-card-title">${p.title || ''}</div>`;
    card.addEventListener('click', () => selectProphet(p.id));
    welcomeGrid.appendChild(card);
  });
}

// ── Views ─────────────────────────────────────────────────────────────────
function showView(view) {
  welcomeScreen.style.display  = view === 'welcome' ? '' : 'none';
  storyPanel.classList.toggle('visible', view === 'story');
  quizPanel.classList.toggle('visible', view === 'quiz');
  progressBar.classList.toggle('active', view === 'story');
  if (view !== 'story') { progressBar.style.width = '0%'; endBlock.classList.remove('visible'); }
  currentView = view;
  mainContent.scrollTo({ top: 0, behavior: 'smooth' });
}

function showWelcome() {
  activeProphetId = null;
  buildSidebar(filteredProphets());
  showView('welcome');
  history.replaceState(null, '', window.location.pathname);
}

// ── Select prophet ────────────────────────────────────────────────────────
function selectProphet(id) {
  const prophet = prophets.find(p => p.id === id);
  if (!prophet) return;
  activeProphetId = id;
  buildSidebar(filteredProphets());
  storyPanel.classList.remove('visible');
  showView('welcome'); // temp
  requestAnimationFrame(() => requestAnimationFrame(() => {
    renderStory(prophet);
    showView('story');
  }));
  if (window.innerWidth <= 700) closeSidebar();
  history.replaceState(null, '', '#' + id);
}

// ── Render story ──────────────────────────────────────────────────────────
function renderStory(p) {
  storyName.textContent     = p.name;
  storyTitle.textContent    = p.title || '';
  storyLocation.textContent = p.location || '';
  storyEra.textContent      = p.era || '';
  storyTitle.style.display    = p.title    ? '' : 'none';
  storyLocation.style.display = p.location ? '' : 'none';
  storyEra.style.display      = p.era      ? '' : 'none';
  storyBody.innerHTML = p.story.split('\n\n').filter(s => s.trim()).map(t => `<p>${esc(t.trim())}</p>`).join('');
  lessonsList.innerHTML = '';
  if (p.lessons && p.lessons.length) {
    p.lessons.forEach((l, i) => {
      const li = document.createElement('li');
      li.className = 'lesson-item';
      li.style.animationDelay = `${i * 0.07}s`;
      li.innerHTML = `<span class="lesson-num">${i+1}</span><span>${esc(l)}</span>`;
      lessonsList.appendChild(li);
    });
    $('lessonsSection').style.display = '';
  } else { $('lessonsSection').style.display = 'none'; }
  const idx = prophets.findIndex(pr => pr.id === p.id);
  prevBtn.disabled = idx <= 0;
  nextBtn.disabled = idx >= prophets.length - 1;
  prevBtn.innerHTML = idx > 0 ? `<span>→</span><span>${prophets[idx-1].name}</span>` : `<span>→</span><span>السابق</span>`;
  nextBtn.innerHTML = idx < prophets.length-1 ? `<span>${prophets[idx+1].name}</span><span>←</span>` : `<span>التالي</span><span>←</span>`;
}

// ── Nav events ────────────────────────────────────────────────────────────
backBtn.addEventListener('click', showWelcome);
prevBtn.addEventListener('click', () => { const i = prophets.findIndex(p => p.id === activeProphetId); if (i > 0) selectProphet(prophets[i-1].id); });
nextBtn.addEventListener('click', () => { const i = prophets.findIndex(p => p.id === activeProphetId); if (i < prophets.length-1) selectProphet(prophets[i+1].id); });
quizBackBtn.addEventListener('click', showWelcome);
$('quizHomeBtn').addEventListener('click', showWelcome);
endTopBtn.addEventListener('click', () => mainContent.scrollTo({ top:0, behavior:'smooth' }));
scrollTopBtn.addEventListener('click', () => mainContent.scrollTo({ top:0, behavior:'smooth' }));

// ── Quiz launch ───────────────────────────────────────────────────────────
function openQuiz() { showView('quiz'); resetQuizUI(); }
quizLaunchBtn.addEventListener('click', openQuiz);
$('sbQuizBtn').addEventListener('click', () => { closeSidebar(); openQuiz(); });
$('welcomeQuizBtn').addEventListener('click', openQuiz);
$('retryBtn').addEventListener('click', () => { resetQuizUI(); startQuiz(); });

function resetQuizUI() {
  $('quizIntro').style.display = '';
  $('quizGame').style.display = 'none';
  $('quizResult').style.display = 'none';
}

// Category selection
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCat = btn.dataset.cat;
  });
});

$('startQuizBtn').addEventListener('click', startQuiz);

function startQuiz() {
  let pool = selectedCat === 'all' ? [...ALL_QUESTIONS] : ALL_QUESTIONS.filter(q => q.cat === selectedCat);
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  quizQuestions = pool.slice(0, Math.min(15, pool.length));
  quizIdx = 0; quizScore = 0;
  $('quizIntro').style.display = 'none';
  $('quizGame').style.display = '';
  $('quizResult').style.display = 'none';
  $('qTotal').textContent = quizQuestions.length;
  renderQuestion();
}

function renderQuestion() {
  if (quizIdx >= quizQuestions.length) { showResult(); return; }
  const q = quizQuestions[quizIdx];
  answered = false;
  const pct = (quizIdx / quizQuestions.length) * 100;
  $('qProgressFill').style.width = pct + '%';
  $('qCurrent').textContent = quizIdx + 1;
  $('qScore').textContent = quizScore;
  const catLabels = { stories:'📖 القصص', facts:'💡 معلومات عامة', lessons:'🌿 الحكم' };
  $('qCatTag').textContent = catLabels[q.cat] || q.cat;
  $('qText').textContent = q.q;
  const letters = ['أ','ب','ج','د'];
  const opts = $('qOptions');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-option';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${esc(opt)}</span>`;
    btn.addEventListener('click', () => handleAnswer(i, btn));
    opts.appendChild(btn);
  });
  const fb = $('qFeedback');
  fb.className = 'q-feedback'; fb.style.display = 'none'; fb.textContent = '';
  $('qNextBtn').style.display = 'none';
}

function handleAnswer(chosen, btn) {
  if (answered) return;
  answered = true;
  const q = quizQuestions[quizIdx];
  const allOpts = document.querySelectorAll('.q-option');
  allOpts.forEach(b => b.disabled = true);
  const isCorrect = chosen === q.ans;
  if (isCorrect) { quizScore++; btn.classList.add('correct'); }
  else {
    btn.classList.add('wrong');
    allOpts[q.ans].classList.add('correct');
  }
  const fb = $('qFeedback');
  fb.style.display = 'block';
  fb.className = 'q-feedback show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.textContent = (isCorrect ? '✓ إجابة صحيحة! ' : '✗ إجابة خاطئة. ') + (q.exp || '');
  $('qScore').textContent = quizScore;
  $('qNextBtn').style.display = 'inline-flex';
}

$('qNextBtn').addEventListener('click', () => { quizIdx++; renderQuestion(); });

function showResult() {
  $('quizGame').style.display = 'none';
  $('quizResult').style.display = 'flex';
  const total = quizQuestions.length;
  const pct = Math.round((quizScore / total) * 100);
  $('rsCorrect').textContent = quizScore;
  $('rsWrong').textContent = total - quizScore;
  $('rsTotal').textContent = total;
  // Animate ring
  const circumference = 2 * Math.PI * 50; // r=50
  const offset = circumference - (pct / 100) * circumference;
  const ring = $('rrFill');
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);
  // Count up percentage
  let n = 0;
  const target = pct;
  const step = Math.ceil(target / 40);
  const counter = setInterval(() => {
    n = Math.min(n + step, target);
    $('resultPct').textContent = n;
    if (n >= target) clearInterval(counter);
  }, 30);
  // Title & message
  let title, msg;
  if (pct >= 90)      { title = '🏆 ممتاز!'; msg = 'أنت عالم بقصص الأنبياء، أحسنت!'; ring.style.stroke = '#c8a45a'; }
  else if (pct >= 70) { title = '🌟 جيد جداً!'; msg = 'نتيجة رائعة، استمر في القراءة والتعلم.'; ring.style.stroke = '#6ab88a'; }
  else if (pct >= 50) { title = '📖 جيد'; msg = 'جهد طيب، أعد قراءة القصص لتحسين نتيجتك.'; ring.style.stroke = '#5a8aaa'; }
  else                { title = '🌱 مبتدئ'; msg = 'لا بأس، اقرأ قصص الأنبياء وعد للاختبار!'; ring.style.stroke = '#a07050'; }
  $('resultTitle').textContent = title;
  $('resultMsg').textContent = msg;
}

// ── Search ────────────────────────────────────────────────────────────────
function filteredProphets() {
  const q = searchInput.value.trim().toLowerCase();
  return q ? prophets.filter(p => p.name.includes(q) || (p.title && p.title.includes(q))) : prophets;
}
searchInput.addEventListener('input', () => {
  clearSearch.classList.toggle('visible', searchInput.value.trim().length > 0);
  buildSidebar(filteredProphets());
});
clearSearch.addEventListener('click', () => {
  searchInput.value = ''; clearSearch.classList.remove('visible');
  buildSidebar(prophets); searchInput.focus();
});

// ── Scroll ────────────────────────────────────────────────────────────────
mainContent.addEventListener('scroll', () => {
  const top = mainContent.scrollTop;
  const height = mainContent.scrollHeight - mainContent.clientHeight;
  scrollTopBtn.classList.toggle('visible', top > 280);
  if (currentView === 'story' && height > 0) {
    const pct = Math.min((top / height) * 100, 100);
    progressBar.style.width = pct + '%';
    if (pct >= 92) endBlock.classList.add('visible');
  }
});

// ── Rating Modal ──────────────────────────────────────────────────────────
function openRating() {
  ratingStep = 1; selectedStars = 0;
  // Reset steps
  ['rmStep1','rmStep2','rmStep3'].forEach((id, i) => {
    const el = $(id);
    el.style.display = 'none';
    el.classList.remove('active');
  });
  $('rmStep1').style.display = '';
  $('rmStep1').classList.add('active');
  // Reset stars
  document.querySelectorAll('.s-star').forEach(s => s.classList.remove('lit'));
  $('starDesc').textContent = 'اضغط على نجمة لتقييم الموقع';
  $('rmNext1').disabled = true;
  // Reset aspects
  document.querySelectorAll('.asp-tile').forEach(t => t.classList.remove('selected'));
  $('rmComment').value = '';
  ratingBackdrop.classList.add('open');
}
function closeRating() { ratingBackdrop.classList.remove('open'); }

ratingLaunchBtn.addEventListener('click', openRating);
$('sbRatingBtn').addEventListener('click', () => { closeSidebar(); openRating(); });
$('welcomeRatingBtn').addEventListener('click', openRating);
ratingClose.addEventListener('click', closeRating);
ratingBackdrop.addEventListener('click', e => { if (e.target === ratingBackdrop) closeRating(); });
$('thanksCloseBtn').addEventListener('click', closeRating);

// Stars
const starDescs = ['','ضعيف — يحتاج تحسيناً كبيراً','مقبول — هناك مجال للتطوير','جيد — تجربة لا بأس بها','رائع — استمتعت بالموقع كثيراً','ممتاز — موقع رائع وأنصح به!'];
document.querySelectorAll('.s-star').forEach(star => {
  star.addEventListener('mouseenter', () => {
    const val = +star.dataset.val;
    document.querySelectorAll('.s-star').forEach((s,i) => s.classList.toggle('lit', i < val));
    $('starDesc').textContent = starDescs[val];
  });
  star.addEventListener('click', () => {
    selectedStars = +star.dataset.val;
    document.querySelectorAll('.s-star').forEach((s,i) => s.classList.toggle('lit', i < selectedStars));
    $('starDesc').textContent = starDescs[selectedStars];
    $('rmNext1').disabled = false;
  });
});
document.getElementById('starRow').addEventListener('mouseleave', () => {
  document.querySelectorAll('.s-star').forEach((s,i) => s.classList.toggle('lit', i < selectedStars));
  $('starDesc').textContent = selectedStars ? starDescs[selectedStars] : 'اضغط على نجمة لتقييم الموقع';
});

$('rmNext1').addEventListener('click', () => {
  $('rmStep1').style.display = 'none'; $('rmStep1').classList.remove('active');
  $('rmStep2').style.display = ''; $('rmStep2').classList.add('active');
});
$('rmBack2').addEventListener('click', () => {
  $('rmStep2').style.display = 'none'; $('rmStep2').classList.remove('active');
  $('rmStep1').style.display = ''; $('rmStep1').classList.add('active');
});

// Aspect tiles toggle
document.querySelectorAll('.asp-tile').forEach(tile => {
  tile.addEventListener('click', () => tile.classList.toggle('selected'));
});

$('rmSubmitBtn').addEventListener('click', () => {
  const pos = [...document.querySelectorAll('#posAspects .asp-tile.selected')].map(t => t.textContent.trim());
  const neg = [...document.querySelectorAll('#negAspects .asp-tile.selected')].map(t => t.textContent.trim());
  const comment = $('rmComment').value.trim();
  // Build summary
  let summary = `⭐ التقييم: ${'★'.repeat(selectedStars)}${'☆'.repeat(5-selectedStars)}`;
  if (pos.length) summary += `\n✅ أعجبني: ${pos.join(' · ')}`;
  if (neg.length) summary += `\n🔧 للتحسين: ${neg.join(' · ')}`;
  if (comment)    summary += `\n💬 "${comment}"`;
  $('thanksSubmitted').textContent = summary;
  $('thanksStars').textContent = '★'.repeat(selectedStars);
  $('rmStep2').style.display = 'none'; $('rmStep2').classList.remove('active');
  $('rmStep3').style.display = ''; $('rmStep3').classList.add('active');
});

// ── Sidebar mobile ────────────────────────────────────────────────────────
hamburgerBtn.addEventListener('click', () => { sidebar.classList.toggle('open'); overlay.classList.toggle('open'); });
overlay.addEventListener('click', closeSidebar);
function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('open'); }

// ── Keyboard ──────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault(); searchInput.focus();
    if (window.innerWidth <= 700) { sidebar.classList.add('open'); overlay.classList.add('open'); }
  }
  if (e.key === 'Escape') {
    if (ratingBackdrop.classList.contains('open')) closeRating();
    else if (sidebar.classList.contains('open')) closeSidebar();
    else if (currentView === 'story') showWelcome();
    else if (currentView === 'quiz') showWelcome();
    searchInput.blur();
  }
  if (e.key === 'ArrowLeft'  && currentView === 'story' && activeProphetId) { const i = prophets.findIndex(p=>p.id===activeProphetId); if (i < prophets.length-1) selectProphet(prophets[i+1].id); }
  if (e.key === 'ArrowRight' && currentView === 'story' && activeProphetId) { const i = prophets.findIndex(p=>p.id===activeProphetId); if (i > 0) selectProphet(prophets[i-1].id); }
});

// ── Helpers ───────────────────────────────────────────────────────────────
function highlight(text, query) {
  const idx = text.indexOf(query); if (idx === -1) return text;
  return text.slice(0,idx) + `<span class="highlight">${text.slice(idx,idx+query.length)}</span>` + text.slice(idx+query.length);
}
function esc(str) { return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function showError(msg) { welcomeScreen.innerHTML = `<div class="welcome-ornament" style="color:#c0504a">⚠</div><h1 style="color:#e07070;font-size:1.1rem">${msg}</h1>`; }

function checkHash() {
  const hash = window.location.hash.slice(1);
  if (hash === 'quiz') openQuiz();
  else if (hash && prophets.find(p => p.id === hash)) selectProphet(hash);
}

// ── Start ─────────────────────────────────────────────────────────────────
init().then(checkHash);
