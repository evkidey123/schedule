const SAT_MESSAGES = [
  { emoji: "🎉", text: "Наконец-то выходной!", anim: "float" },
  { emoji: "🍕", text: "Суббота! Можно ничего не делать", anim: "" },
  { emoji: "🎮", text: "Свободный день — играем!", anim: "" },
  { emoji: "☀️", text: "Выходной и солнце — идеально", anim: "pulse" },
  { emoji: "🧸", text: "Суббота — день приключений", anim: "" },
  { emoji: "🍦", text: "Выходной = мороженое", anim: "" },
  { emoji: "📚", text: "Можно почитать что хочется!", anim: "" },
  { emoji: "⚽", text: "Суббота — лучший день для игр", anim: "float" },
  { emoji: "🎨", text: "Рисуем, лепим, творим!", anim: "" },
  { emoji: "🌳", text: "Выходной — гуляем на свежем воздухе", anim: "" },
  { emoji: "😴", text: "Спим сколько хочется!", anim: "" },
  { emoji: "🎪", text: "Суббота — как маленький праздник", anim: "pulse" },
  { emoji: "🐕", text: "Выходной — время для любимых дел", anim: "" },
  { emoji: "🧹", text: "Суббота: сначала убираемся, потом веселимся", anim: "" },
  { emoji: "🎯", text: "День для своих планов!", anim: "" },
  { emoji: "🌈", text: "Выходной — мир прекрасен", anim: "float" },
  { emoji: "🍳", text: "Субботнее утро = завтрак от шефа", anim: "" },
  { emoji: "🚴", text: "Катаемся, бегаем, прыгаем!", anim: "" },
  { emoji: "🎵", text: "Суббота — день музыки и танцев", anim: "pulse" },
  { emoji: "🧩", text: "Собираем пазлы и играем в настолки", anim: "" },
];

const SUN_MESSAGES = [
  { emoji: "😱", text: "Ой, завтра понедельник...", anim: "" },
  { emoji: "😩", text: "Почему воскресенье такое короткое?", anim: "" },
  { emoji: "😅", text: "Завтра в школу... но ещё есть время!", anim: "" },
  { emoji: "🤢", text: "О нет, завтра снова вставать рано!", anim: "" },
  { emoji: "😤", text: "Воскресенье — последний шанс отдохнуть!", anim: "" },
  { emoji: "😈", text: "Завтра понедельник, а я ещё не готов", anim: "" },
  { emoji: "🙈", text: "Домашку сделали? ...я тоже нет", anim: "" },
  { emoji: "😬", text: "Завтра 8:00... это рано...", anim: "" },
  { emoji: "🤞", text: "Надеюсь, завтра будет легко", anim: "" },
  { emoji: "💫", text: "Воскресенье — день восстановления", anim: "float" },
  { emoji: "☕", text: "Наслаждаемся последним днём каникул", anim: "" },
  { emoji: "📋", text: "Проверяем рюкзак на завтра!", anim: "" },
  { emoji: "😅", text: "Дышим... завтра снова в бой", anim: "" },
  { emoji: "🌙", text: "Вечер воскресенья — самое грустное время", anim: "" },
  { emoji: "💪", text: "Ничего, справимся и завтра!", anim: "pulse" },
  { emoji: "🫣", text: "Смотрю на будильник... 6:30... кошмар", anim: "" },
  { emoji: "🎈", text: "Но сегодня ещё выходной!", anim: "" },
  { emoji: "🫡", text: "Готовимся к новой неделе!", anim: "" },
  { emoji: "😴", text: "Ложимся рано... или не ложимся?", anim: "" },
  { emoji: "🤷", text: "Завтра понедельник. Бывает.", anim: "" },
];

const MON_MESSAGES = [
  { emoji: "😤", text: "Понедельник — самый честный день недели", anim: "" },
  { emoji: "☕", text: "Понедельник. Вдох-выдох. Поехали!", anim: "" },
  { emoji: "🐌", text: "Понедельник ползёт, а мы уже бежим", anim: "float" },
  { emoji: "💪", text: "Начало недели — мы всё успеем!", anim: "" },
  { emoji: "🎒", text: "Понедельник: рюкзак собран, настроение готово", anim: "" },
  { emoji: "😴", text: "Кто украл выходные? Это понедельник!", anim: "pulse" },
  { emoji: "🚀", text: "Неделя только началась — разгоняемся!", anim: "" },
  { emoji: "🧊", text: "Понедельник холодный, а мы — горячие!", anim: "" },
  { emoji: "📅", text: "Понедельник — это маленькая пятница... нет? Ладно.", anim: "" },
  { emoji: "🌱", text: "Неделя растёт — и мы растём!", anim: "float" },
];

const TUE_MESSAGES = [
  { emoji: "😎", text: "Вторник — уже не понедельник!", anim: "pulse" },
  { emoji: "🐢", text: "Во вторник всё идёт своим ходом", anim: "" },
  { emoji: "🍪", text: "Вторник: время печенек", anim: "" },
  { emoji: "🎯", text: "Вторник — день смелых планов", anim: "float" },
  { emoji: "⚡", text: "Во вторник мы быстрее всех!", anim: "" },
  { emoji: "🧗", text: "Вторник: покоряем вершину недели", anim: "" },
  { emoji: "😌", text: "Вторник спокойно идёт к среде", anim: "" },
  { emoji: "📚", text: "Во вторник учимся на всю неделю", anim: "" },
  { emoji: "🛴", text: "Вторник — разогнались и поехали!", anim: "float" },
  { emoji: "🐣", text: "Неделя ещё молодая, как и мы", anim: "" },
];

const WED_MESSAGES = [
  { emoji: "🐸", text: "Среда — середина недели! Держимся", anim: "pulse" },
  { emoji: "⛰️", text: "Перевалили через гору — скоро пятница", anim: "" },
  { emoji: "🍕", text: "Среда: пора подкрепиться пиццей", anim: "" },
  { emoji: "🎠", text: "Середина недели — карусель крутится", anim: "float" },
  { emoji: "😴", text: "Дожили до среды — можно гордиться", anim: "" },
  { emoji: "🚂", text: "Среда: неделя едет по расписанию", anim: "" },
  { emoji: "🌗", text: "Неделя наполовину пройдена!", anim: "pulse" },
  { emoji: "🐫", text: "Среда — верблюд недели: всё преодолеем", anim: "" },
  { emoji: "☕", text: "В среду чай вкуснее — проверено", anim: "" },
  { emoji: "🎈", text: "Половину сделали — остальное по накатанной", anim: "" },
];

const THU_MESSAGES = [
  { emoji: "🤏", text: "Четверг — чуть-чуть осталось до пятницы!", anim: "pulse" },
  { emoji: "👀", text: "Четверг подмигивает: скоро выходные", anim: "" },
  { emoji: "🏃", text: "Четверг: бежим быстрее — пятница близко", anim: "float" },
  { emoji: "🍬", text: "В четверг даже уроки слаще", anim: "" },
  { emoji: "⏰", text: "Четверг — пятница в режиме ожидания", anim: "" },
  { emoji: "🌟", text: "До пятницы один шаг!", anim: "pulse" },
  { emoji: "🐿️", text: "Четверг: запасаем силы на финиш", anim: "" },
  { emoji: "🎲", text: "Четверг — день интересных перемен", anim: "" },
  { emoji: "😼", text: "Четверг хитро улыбается: пятница рядом", anim: "" },
  { emoji: "🔥", text: "Неделя на финише — не сбавляем!", anim: "float" },
];

const FRI_MESSAGES = [
  { emoji: "🎉", text: "Пятница — маленькая суббота!", anim: "pulse" },
  { emoji: "💃", text: "Ура, пятница! Танцуем!", anim: "float" },
  { emoji: "🍦", text: "Пятница = мороженое после уроков", anim: "" },
  { emoji: "😎", text: "Пятница. Очки надеты. Мы круты", anim: "" },
  { emoji: "🛼", text: "Пятница — день катания и игр", anim: "" },
  { emoji: "🌈", text: "За пятницей — выходные!", anim: "pulse" },
  { emoji: "🥳", text: "Учебная неделя закончена — мы молодцы!", anim: "float" },
  { emoji: "🚀", text: "Пятница: домой на реактивной тяге!", anim: "" },
  { emoji: "🍿", text: "Вечер пятницы — мультики и попкорн", anim: "" },
  { emoji: "⛱️", text: "Пятница открывает дверь в выходные", anim: "" },
];

const ICONS = {
  "Белорусская литература": "📖",
  "Белорусский язык": "💬",
  "ФКиЗ": "⚽",
  "Русская литература": "📚",
  "Русский язык": "✏️",
  "Математика": "🔢",
  "Трудовое обучение": ["🧵","✂️","🔧","🔨"],
  "ОБЖ": "🛡️",
  "Музыка": "🎵",
  "Человек и мир": "🌍",
  "Изобразительное искусство": "🎨",
  "Факультатив": "⭐",
  "Факультатив \"Пиши грамотно\"": "✍️",
  "Факультатив \"Считаем и решаем\"": "🧮",
  "Факультатив \"Вытокi роднай мовы\"": "🗣️",
  "Факультатив \"Решение текстовых задач\"": "📝",
  "Кружок \"Ритмика и танец\"": "💃",
  "Классный час": "🏫",
};

const CARD_COLORS = [
  "", "#e74c3c","#e67e22","#f1c40f","#2ecc71","#1abc9c",
  "#3498db","#9b59b6","#e84393","#fd79a8","#00b894",
  "#00cec9","#0984e3","#6c5ce7","#a29bfe","#fab1a0",
  "#ff7675","#74b9ff","#55efc4","#ffeaa7","#dfe6e9",
  "#636e72","#2d3436","#b33939","#cd6133","#cc8e35",
  "#28746b","#1e6fa0","#6c3483","#7d3c98","#4a235a"
];
const COLOR_NAMES = [
  "Без цвета","Красный","Оранжевый","Жёлтый","Зелёный","Бирюзовый",
  "Синий","Фиолетовый","Розовый","Свет-розовый","Мятный",
  "Голубой","Индиго","Лавандовый","Свет-синий","Персиковый",
  "Коралловый","Небесный","Салатовый","Лимонный","Серый",
  "Тёмно-серый","Чёрный","Бордовый","Терракотовый","Золотой",
  "Тёмно-зелёный","Тёмно-синий","Тёмно-фиолетовый","Пурпурный","Тёмно-пурпурный"
];

const DEFAULT_SUBJECTS = [
  "Английский язык","Белорусская литература","Белорусский язык",
  "Вокал","Гимнастика","География","История",
  "Изобразительное искусство","Классный час","Литература",
  "Математика","Музыка","Музыкальная литература",
  "ОБЖ","Физика","Физическая культура","Фортепиано",
  "Химия","Человек и мир","Чтение",
  "Русская литература","Русский язык",
  "Сольфеджио","Специальность","Трудовое обучение",
  "ФКиЗ","Французский язык","Немецкий язык","Шахматы"
];

const DEFAULT_TYPES = [
  "Урок","Занятие","Продлёнка","Музыкальная школа",
  "Спортивная школа","Кружок","Факультатив","Секция",
  "Тренировка","Репетитор","Курс","Консультация"
];

const DEFAULT_ROOMS = [
  "ауд. 1-3","спортзал","актовый зал","музыкальный зал","столовая"
];

function collectUniqueValues(key) {
  const values = new Set();
  const allSchedules = [SCHEDULE];
  const local = loadLocalData();
  if (local && local.schedule) allSchedules.push(local.schedule);
  allSchedules.forEach(sch => {
    if (!sch) return;
    sch.forEach(day => {
      if (!day || !day.lessons) return;
      day.lessons.forEach(l => { if (l[key]) values.add(l[key]); });
    });
  });
  if (key === "subj") {
    if (local && local.personal) {
      Object.values(local.personal).forEach(arr => {
        if (Array.isArray(arr)) arr.forEach(p => { if (p.subj) values.add(p.subj); });
      });
    }
    if (local && local.extended) {
      local.extended.forEach(e => { if (e.subj) values.add(e.subj); });
    }
  }
  return [...values].sort((a, b) => a.localeCompare(b, "ru"));
}

function fillDatalist(datalistId, defaults, extraValues) {
}

// Plurals are the toggle labels users type in the modal; without them a new custom entity was created.
const TYPE_NAME_TO_KEY = { "Урок": "school", "Уроки": "school", "Занятие": "personal", "Занятия": "personal", "Продлёнка": "extended" };
const TYPE_KEY_TO_NAME = { "school": "Урок", "personal": "Занятие", "extended": "Продлёнка" };

function resolveTypeKey(val) {
  const v = (val || "").trim();
  if (!v) return "school";
  if (TYPE_NAME_TO_KEY[v]) return TYPE_NAME_TO_KEY[v];
  for (const [name, key] of Object.entries(TYPE_NAME_TO_KEY)) {
    if (name.toLowerCase() === v.toLowerCase()) return key;
  }
  // Reuse an existing custom entity instead of creating a case-variant duplicate.
  for (const k of Object.keys(CUSTOM)) {
    if (k.toLowerCase() === v.toLowerCase()) return k;
  }
  // Any unknown type name becomes its own schedule entity (key = name).
  return v;
}

function isBuiltInType(key) { return key === "school" || key === "personal" || key === "extended"; }
function typeName(key) { return TYPE_KEY_TO_NAME[key] || key; }
function customOn(key) { return localStorage.getItem("custom_" + key) !== "false"; }
function typeClsOf(key) {
  if (isBuiltInType(key)) return key;
  const k = (key || "").toLowerCase();
  if (k.indexOf("факультатив") !== -1) return "custom-facult";
  if (k.indexOf("кружок") !== -1) return "custom-circle";
  return "custom";
}

const _acInstances = {};
function setupAutocomplete(inputId, getOptions) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (_acInstances[inputId]) {
    const old = _acInstances[inputId].dropdown;
    if (old && old.parentNode) old.parentNode.removeChild(old);
  }
  let dropdown = document.createElement("div");
  dropdown.className = "ac-dropdown";
  input.parentNode.appendChild(dropdown);
  _acInstances[inputId] = { dropdown };
  let activeIdx = -1;
  let focused = false;
  function render() {
    const val = input.value.trim().toLowerCase();
    const allOpts = getOptions();
    let opts;
    if (!val) {
      opts = focused ? allOpts : [];
    } else {
      opts = allOpts.filter(o => o.toLowerCase().includes(val));
    }
    if (!opts.length) { dropdown.style.display = "none"; activeIdx = -1; return; }
    activeIdx = -1;
    dropdown.innerHTML = opts.map((o, i) => `<div class="ac-item" data-val="${uiEscape(o)}" data-idx="${i}">${uiEscape(o)}</div>`).join("");
    dropdown.style.display = "block";
    dropdown.querySelectorAll(".ac-item").forEach(item => {
      item.onmousedown = (e) => {
        e.preventDefault();
        input.value = item.dataset.val;
        dropdown.style.display = "none";
      };
    });
  }
  input.addEventListener("input", render);
  input.addEventListener("focus", () => { focused = true; render(); });
  input.addEventListener("blur", () => { focused = false; setTimeout(() => { dropdown.style.display = "none"; }, 150); });
  input.addEventListener("keydown", (e) => {
    const items = dropdown.querySelectorAll(".ac-item");
    if (!items.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, items.length - 1); items.forEach((it, i) => it.classList.toggle("active", i === activeIdx)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); items.forEach((it, i) => it.classList.toggle("active", i === activeIdx)); }
    else if (e.key === "Enter" && activeIdx >= 0) { e.preventDefault(); input.value = items[activeIdx].dataset.val; dropdown.style.display = "none"; }
  });
}

function populateDatalists() {
  const allSubj = [...new Set([...DEFAULT_SUBJECTS, ...collectUniqueValues("subj")])].sort((a, b) => a.localeCompare(b, "ru"));
  const allRoom = [...new Set([...DEFAULT_ROOMS, ...collectUniqueValues("room")])].sort((a, b) => a.localeCompare(b, "ru"));
  const allLoc = [...new Set(collectUniqueValues("location"))].sort((a, b) => a.localeCompare(b, "ru"));
  const allTeacher = [...new Set(collectUniqueValues("teacher"))].sort((a, b) => a.localeCompare(b, "ru"));
  const allType = [...new Set([...DEFAULT_TYPES, ...Object.keys(CUSTOM)])].sort((a, b) => a.localeCompare(b, "ru"));
  setupAutocomplete("modalSubj", () => allSubj);
  setupAutocomplete("modalRoom", () => allRoom);
  setupAutocomplete("modalLocation", () => allLoc);
  setupAutocomplete("modalTeacher", () => allTeacher);
  setupAutocomplete("modalType", () => allType);
}

let SCHEDULE = [];
let PERSONAL = {};
let CUSTOM = {};
let EXTENDED = [];
let HOLIDAYS = null;
let extendedOn = localStorage.getItem("extended") === "true";
let personalOn = localStorage.getItem("personal") === "true";
let schoolOn = localStorage.getItem("school") !== "false";
let currentDayIdx = -1;
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;

function getDaySeed() {
  const now = new Date();
  return now.getFullYear() * 1000 + now.getMonth() * 50 + now.getDate();
}

const DAY_MESSAGES = [MON_MESSAGES, TUE_MESSAGES, WED_MESSAGES, THU_MESSAGES, FRI_MESSAGES, SAT_MESSAGES, SUN_MESSAGES];

function getWeekendMessage(dayIdx) {
  const seed = getDaySeed();
  const msgs = DAY_MESSAGES[dayIdx] || SUN_MESSAGES;
  return msgs[seed % msgs.length];
}

function getCurrentLesson(day) {
  if (!day || !day.lessons || day.lessons.length === 0) return null;
  const now = new Date();
  const cur = now.getHours() * 60 + now.getMinutes();
  for (let i = 0; i < day.lessons.length; i++) {
    const s = parseTime(day.lessons[i].time);
    const end = parseTime(day.lessons[i].time.split(/[–\-]/)[1]) || s + 45;
    if (cur >= s && cur < end) return { idx: i, type: "current" };
    if (cur < s && (s - cur) <= 120) return { idx: i, type: "next" };
  }
  const lastEnd = parseTime(day.lessons[day.lessons.length - 1].time.split(/[–\-]/)[1]) || parseTime(day.lessons[day.lessons.length - 1].time) + 45;
  if (day.lessons.length && cur >= lastEnd) {
    return { idx: day.lessons.length - 1, type: "past" };
  }
  return null;
}

function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diff = d2 - d1;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function isDateInRange(date, start, end) {
  const d = new Date(date);
  const s = new Date(start);
  const e = new Date(end);
  return d >= s && d <= e;
}

function getNextHoliday() {
  if (!HOLIDAYS) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const h of HOLIDAYS.schoolHolidays) {
    const start = new Date(h.start);
    const end = new Date(h.end);
    if (today >= start && today <= end) {
      return { type: "current", name: h.name, emoji: h.emoji, end: h.end };
    }
    if (today < start) {
      return { type: "upcoming", name: h.name, emoji: h.emoji, start: h.start };
    }
  }
  return null;
}

function getPublicHolidayToday() {
  if (!HOLIDAYS) return null;
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  const allHolidays = [
    ...(HOLIDAYS.publicHolidays2026 || []),
    ...(HOLIDAYS.publicHolidays2027 || [])
  ];

  return allHolidays.find(h => h.date === todayStr);
}

function getGenitive(name) {
  const map = {
    "Осенние каникулы": "осенних каникул",
    "Зимние каникулы": "зимних каникул",
    "Зимние каникулы (доп. для I–II кл.)": "зимних каникул",
    "Весенние каникулы": "весенних каникул",
    "Летние каникулы": "летних каникул",
  };
  return map[name] || name;
}

function renderCountdowns() {
  if (!HOLIDAYS) return;
  const el = document.getElementById("countdowns");
  if (!el) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  let html = "";

  const publicHoliday = getPublicHolidayToday();
  if (publicHoliday) {
    html += `<div class="countdown-item holiday-today">${publicHoliday.emoji} Сегодня ${publicHoliday.name}!</div>`;
  }

  const nextHoliday = getNextHoliday();
  if (nextHoliday) {
    if (nextHoliday.type === "current") {
      const daysLeft = daysBetween(todayStr, nextHoliday.end) + 1;
      html += `<div class="countdown-item active-holiday">${nextHoliday.emoji} ${nextHoliday.name} — осталось ${daysLeft} дн.</div>`;
    } else if (nextHoliday.type === "upcoming") {
      const daysUntil = daysBetween(todayStr, nextHoliday.start);
      const schoolStart = HOLIDAYS.schoolYearStart || "2026-09-01";
      const totalToHoliday = daysBetween(schoolStart, nextHoliday.start);
      const elapsedToHoliday = daysBetween(schoolStart, todayStr);
      const pctHoliday = totalToHoliday > 0 ? Math.min(100, Math.round(elapsedToHoliday / totalToHoliday * 100)) : 0;
      html += `<div class="countdown-item countdown-progress">
        <span>${nextHoliday.emoji} До ${getGenitive(nextHoliday.name)} — ${daysUntil} дн.</span>
        <div class="mini-progress"><div class="mini-progress-fill" style="width:${pctHoliday}%"></div></div>
      </div>`;
    }
  }

  const newYear = new Date("2027-01-01");
  if (today < newYear) {
    const daysToNY = daysBetween(todayStr, "2027-01-01");
    html += `<div class="countdown-item countdown-progress">
      <span>🎄 До Нового года — ${daysToNY} дн.</span>
      <div class="mini-progress"><div class="mini-progress-fill" style="width:${Math.min(100, Math.round((365 - daysToNY) / 365 * 100))}%"></div></div>
    </div>`;
  }

  const startStr = HOLIDAYS.schoolYearStart || "2026-09-01";
  const daysPassed = daysBetween(startStr, todayStr);
  const endStr = HOLIDAYS.schoolYearEnd || "2027-05-31";
  const totalDays = daysBetween(startStr, endStr);
  const pctRaw = Math.max(0, (daysPassed / totalDays) * 100);
  const pct = Math.min(100, Math.round(pctRaw * 10) / 10);
  const pctDisplay = pct % 1 === 0 ? pct : pct.toFixed(1);

  const dayWord = ScheduleCore.plural(daysPassed, ["день", "дня", "дней"]);
  const phrases = [
    `📚 ${daysPassed} ${dayWord} учебы — ${pctDisplay}% пути`,
    `📚 ${daysPassed} ${dayWord} за партами — ${pctDisplay}% пути`,
    `📚 Прошли ${pctDisplay}% пути — ${daysPassed} ${dayWord}`,
    `📚 ${daysPassed} ${dayWord} обучения — ${pctDisplay}% пути`,
  ];
  const phrase = phrases[Math.floor(pct / 25) % phrases.length];

  html += `
    <div class="countdown-item countdown-progress">
      <span>${phrase}</span>
      <div class="mini-progress">
        <div class="mini-progress-fill" style="width:${pct}%"></div>
      </div>
    </div>`;

  if (el.innerHTML !== html) el.innerHTML = html;
}

function renderWeekendMsg(dayIdx) {
  const msg = getWeekendMessage(dayIdx);
  const animCls = msg.anim ? ` animate-${msg.anim}` : "";
  return `
    <div class="weekend-msg${animCls}">
      <span class="emoji">${msg.emoji}</span>
      ${msg.text}
      <div class="sub">${(SCHEDULE[dayIdx] && SCHEDULE[dayIdx].name) || (dayIdx === 5 ? "Суббота" : "Воскресенье")}</div>
    </div>`;
}

function renderDate() {
  const el = document.getElementById("dateDisplay");
  if (el) el.textContent = formatClock();
}

let editMode = isEditMode();
let modalData = { type: null, dayIdx: -1, itemIdx: -1 };
let reminders = readReminders();

function saveReminders() {
  localStorage.setItem("tg_reminders", JSON.stringify(reminders));
  console.log("[Reminders] saveReminders called, count=" + reminders.length + ", keys=" + reminders.map(r => r.key).join(", "));
  if (window.Android) {
    console.log("[Reminders] Calling Android.syncReminders with " + reminders.length + " items");
    Android.syncReminders(JSON.stringify(reminders));
    console.log("[Reminders] Android.syncReminders returned");
  } else {
    console.log("[Reminders] No Android bridge, skipping native sync");
  }
}

function getReminderKey(type, dayIdx, itemIdx, time, when) {
  return type + "_" + dayIdx + "_" + itemIdx + "_" + time + "_" + (when || "start");
}

function getReminder(type, dayIdx, itemIdx, time, when) {
  const key = getReminderKey(type, dayIdx, itemIdx, time, when);
  return reminders.find(r => r.key === key);
}

function toggleReminder(type, dayIdx, itemIdx, time, subj, when) {
  when = when || "start";
  console.log("[Reminders] toggleReminder: type=" + type + " dayIdx=" + dayIdx + " itemIdx=" + itemIdx + " time=" + time + " when=" + when);
  const existing = getReminder(type, dayIdx, itemIdx, time, when);
  if (existing) {
    console.log("[Reminders] Removing existing reminder: " + existing.key);
    reminders = reminders.filter(r => r.key !== existing.key);
    saveReminders();
    renderAll();
    if (window.Android) Android.showToast("Напоминание отменено");
    return;
  }
  showReminderDialog(type, dayIdx, itemIdx, time, subj, null, when);
}

function showReminderDialog(type, dayIdx, itemIdx, time, subj, existing, when) {
  const labels = { school: "Урок", personal: "Занятие", extended: "Продлёнка" };
  const typeLabel = labels[type] || type;
  const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const existingRem = existing || getReminder(type, dayIdx, itemIdx, time, when || "start");
  const d = document.createElement("div");
  d.className = "reminder-dialog-overlay";
  d.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);z-index:1000;display:flex;align-items:center;justify-content:center;";
  d.innerHTML = `
    <div style="background:var(--card);border-radius:16px;padding:20px;width:300px;color:var(--text);max-height:80vh;overflow-y:auto;">
      <div style="font-size:16px;font-weight:600;margin-bottom:12px;">🔔 Напоминание</div>
      <div style="font-size:13px;color:var(--muted);margin-bottom:12px;">
        ${typeLabel} · ${dayNames[dayIdx]} · ${time}<br>${subj}
      </div>
      <div style="font-size:13px;color:var(--text);margin-bottom:6px;">Когда напомнить:</div>
      <div style="display:flex;gap:6px;margin-bottom:12px;" id="whenGroup">
        <button class="reminder-chip when-chip active" data-when="start">🔔 До начала</button>
        <button class="reminder-chip when-chip" data-when="end">⏰ До конца</button>
      </div>
      <div style="font-size:13px;color:var(--text);margin-bottom:6px;">Повтор:</div>
      <div style="display:flex;gap:6px;margin-bottom:12px;" id="repeatGroup">
        <button class="reminder-chip repeat-chip active" data-repeat="weekly">🔄 Еженедельно</button>
        <button class="reminder-chip repeat-chip" data-repeat="once">1️⃣ Один раз</button>
      </div>
      <div style="font-size:13px;color:var(--text);margin-bottom:6px;">Напомнить за:</div>
      <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;" id="minGroup">
        <button class="reminder-chip min-chip" data-min="5">5 мин</button>
        <button class="reminder-chip min-chip" data-min="10">10 мин</button>
        <button class="reminder-chip min-chip" data-min="15">15 мин</button>
        <button class="reminder-chip min-chip" data-min="30">30 мин</button>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        <span style="font-size:13px;color:var(--text);">Своё:</span>
        <input id="reminderCustomMin" type="number" min="1" max="1440" placeholder="мин"
          style="flex:1;padding:6px 10px;border:1.5px solid var(--line);border-radius:8px;background:var(--bg);color:var(--text);font-size:13px;">
      </div>
      <div style="font-size:13px;color:var(--text);margin-bottom:6px;">Вибрация:</div>
      <div style="display:flex;gap:6px;margin-bottom:12px;" id="vibroGroup">
        <button class="reminder-chip vibro-chip active" data-vibro="on">📳 Вкл</button>
        <button class="reminder-chip vibro-chip" data-vibro="off">📴 Выкл</button>
      </div>
      <div style="font-size:13px;color:var(--text);margin-bottom:6px;">Мелодия:</div>
      <div id="ringtoneList" style="max-height:140px;overflow-y:auto;border:1.5px solid var(--line);border-radius:8px;margin-bottom:14px;background:var(--bg);">
        <div style="padding:10px;color:var(--muted);font-size:12px;">Загрузка...</div>
      </div>
      <div style="display:flex;gap:8px;">
        <button onclick="if(window.Android)Android.stopRingtone();this.closest('.reminder-dialog-overlay').remove()" style="flex:1;padding:10px;border:1.5px solid var(--line);border-radius:10px;background:transparent;color:var(--muted);cursor:pointer;font-size:13px;">Отмена</button>
        <button id="reminderSaveBtn" style="flex:1;padding:10px;border:none;border-radius:10px;background:var(--accent);color:#fff;cursor:pointer;font-size:13px;font-weight:600;">Сохранить</button>
      </div>
    </div>`;
  document.body.appendChild(d);

  d._selectedRepeat = existing ? existing.repeat : "weekly";
  d._selectedMin = existing ? existing.mins : null;
  d._selectedSound = existing ? (existing.sound || "android.resource://com.schedule.app/raw/notif_ding") : "android.resource://com.schedule.app/raw/notif_ding";
  d._selectedVibro = existing ? (existing.vibro !== false) : true;
  d._selectedWhen = existingRem ? (existingRem.when || when || "start") : (when || "start");

  d.querySelectorAll(".when-chip").forEach(chip => {
    chip.style.cssText = "padding:6px 10px;border:1.5px solid var(--line);border-radius:8px;background:transparent;color:var(--text);cursor:pointer;font-size:12px;";
    if (chip.dataset.when === d._selectedWhen) { chip.style.background = "var(--accent)"; chip.style.color = "#fff"; }
    chip.onclick = () => {
      d.querySelectorAll(".when-chip").forEach(c => { c.style.background = "transparent"; c.style.color = "var(--text)"; });
      chip.style.background = "var(--accent)";
      chip.style.color = "#fff";
      d._selectedWhen = chip.dataset.when;
    };
  });

  d.querySelectorAll(".repeat-chip").forEach(chip => {
    chip.style.cssText = "padding:6px 10px;border:1.5px solid var(--line);border-radius:8px;background:transparent;color:var(--text);cursor:pointer;font-size:12px;";
    if (chip.dataset.repeat === d._selectedRepeat) { chip.style.background = "var(--accent)"; chip.style.color = "#fff"; }
    chip.onclick = () => {
      d.querySelectorAll(".repeat-chip").forEach(c => { c.style.background = "transparent"; c.style.color = "var(--text)"; });
      chip.style.background = "var(--accent)";
      chip.style.color = "#fff";
      d._selectedRepeat = chip.dataset.repeat;
    };
  });

  d.querySelectorAll(".min-chip").forEach(chip => {
    chip.style.cssText = "padding:6px 12px;border:1.5px solid var(--line);border-radius:8px;background:transparent;color:var(--text);cursor:pointer;font-size:12px;";
    if (d._selectedMin && parseInt(chip.dataset.min) === d._selectedMin) { chip.style.background = "var(--accent)"; chip.style.color = "#fff"; }
    chip.onclick = () => {
      d.querySelectorAll(".min-chip").forEach(c => { c.style.background = "transparent"; c.style.color = "var(--text)"; });
      chip.style.background = "var(--accent)";
      chip.style.color = "#fff";
      d.querySelector("#reminderCustomMin").value = "";
      d._selectedMin = parseInt(chip.dataset.min);
    };
  });

  d.querySelectorAll(".vibro-chip").forEach(chip => {
    chip.style.cssText = "padding:6px 10px;border:1.5px solid var(--line);border-radius:8px;background:transparent;color:var(--text);cursor:pointer;font-size:12px;";
    if ((chip.dataset.vibro === "on") === d._selectedVibro) { chip.style.background = "var(--accent)"; chip.style.color = "#fff"; }
    chip.onclick = () => {
      d.querySelectorAll(".vibro-chip").forEach(c => { c.style.background = "transparent"; c.style.color = "var(--text)"; });
      chip.style.background = "var(--accent)";
      chip.style.color = "#fff";
      d._selectedVibro = chip.dataset.vibro === "on";
    };
  });

  if (window.Android) {
    const bundled = [
      { title: "🎵 Nice Melodic", uri: "android.resource://com.schedule.app/raw/notif_ding" },
      { title: "🫐 Contentment", uri: "android.resource://com.schedule.app/raw/notif_chime" },
      { title: "🫐 Spirit", uri: "android.resource://com.schedule.app/raw/notif_gentle" },
      { title: "💬 Soft Tune", uri: "android.resource://com.schedule.app/raw/notif_urgent" },
      { title: "💥 Dramatic", uri: "android.resource://com.schedule.app/raw/notif_dramatic" }
    ];
    const list = d.querySelector("#ringtoneList");
    list.innerHTML = "";
    bundled.forEach(r => {
      const item = document.createElement("div");
      item.style.cssText = "padding:8px 10px;font-size:12px;cursor:pointer;border-bottom:1px solid var(--line);color:var(--text);";
      if (r.uri === d._selectedSound) { item.style.background = "var(--accent)"; item.style.color = "#fff"; }
      item.textContent = r.title;
      item.onclick = () => {
        if (d._selectedSound === r.uri && d._playingUri === r.uri) {
          if (window.Android) Android.stopRingtone();
          d._playingUri = null;
          return;
        }
        list.querySelectorAll("div").forEach(el => { el.style.background = ""; el.style.color = "var(--text)"; });
        item.style.background = "var(--accent)";
        item.style.color = "#fff";
        d._selectedSound = r.uri;
        d._playingUri = r.uri;
        if (window.Android) Android.playRingtone(r.uri);
      };
      list.appendChild(item);
    });
    const pickBtn = document.createElement("div");
    pickBtn.style.cssText = "padding:8px 10px;font-size:12px;cursor:pointer;color:var(--accent);font-weight:600;";
    pickBtn.textContent = "📱 Выбрать на устройстве...";
    pickBtn.onclick = () => { if (window.Android) Android.openRingtonePicker(); };
    list.appendChild(pickBtn);
  } else {
    d.querySelector("#ringtoneList").innerHTML = '<div style="padding:10px;color:var(--muted);font-size:12px;">🔔 Мелодия по умолчанию</div>';
  }

  d.querySelector("#reminderSaveBtn").onclick = () => {
    if (window.Android) Android.stopRingtone();
    const custom = parseInt(d.querySelector("#reminderCustomMin").value);
    const mins = custom || d._selectedMin;
    if (!mins || mins < 1) { if (window.Android) Android.showToast("Укажи минуты"); return; }
    const key = getReminderKey(type, dayIdx, itemIdx, time, d._selectedWhen);
    reminders = reminders.filter(r => r.key !== key);
    reminders.push({ key, type, dayIdx, itemIdx, time, subj, mins, repeat: d._selectedRepeat, sound: d._selectedSound, vibro: d._selectedVibro, when: d._selectedWhen });
    saveReminders();
    d.remove();
    renderAll();
    const rptLabel = d._selectedRepeat === "weekly" ? "еженедельно" : "один раз";
    if (window.Android) Android.showToast("Напоминание за " + mins + " мин ✓ (" + rptLabel + ")");
  };
  d.onclick = (e) => { if (e.target === d) { if (window.Android) Android.stopRingtone(); d.remove(); } };
}

window._ringtonePicked = function(uri) {
  const dlg = document.querySelector('.reminder-dialog-overlay');
  if (!dlg) return;
  dlg._selectedSound = uri;
  dlg._playingUri = null;
  const list = dlg.querySelector("#ringtoneList");
  if (list) {
    list.querySelectorAll("div").forEach(el => { el.style.background = ""; el.style.color = "var(--text)"; });
    const items = list.querySelectorAll("div");
    items[items.length - 1].style.background = "var(--accent)";
    items[items.length - 1].style.color = "#fff";
  }
};

function hasReminder(type, dayIdx, itemIdx, time, when) {
  return !!getReminder(type, dayIdx, itemIdx, time, when);
}

function toggleEditMode() {
  editMode = !editMode;
  localStorage.setItem(EDIT_KEY, editMode);
  document.body.classList.toggle("edit-mode", editMode);
  const editBar = document.getElementById("editBar");
  const addBtn = document.getElementById("addBtn");
  if (editBar) editBar.style.display = editMode ? "flex" : "none";
  if (addBtn) addBtn.style.display = editMode ? "block" : "none";
  renderAll(true);
}

function showAddModal() {
  modalData = { type: "school", dayIdx: currentDayIdx, itemIdx: -1 };
  document.getElementById("modalTitle").textContent = "Добавить урок";
  document.getElementById("modalDeleteBtn").style.display = "none";
  const daySelect = document.getElementById("modalDay");
  daySelect.innerHTML = SCHEDULE.map((d, i) => `<option value="${i}" ${i === currentDayIdx ? 'selected' : ''}>${d.name}</option>`).join("");
  document.getElementById("modalNum").value = "";
  document.getElementById("modalSubj").value = "";
  document.getElementById("modalTime").value = "";
  document.getElementById("modalRoom").value = "";
  document.getElementById("modalLocation").value = "";
  document.getElementById("modalTeacher").value = "";
  document.getElementById("modalType").value = "Урок";
  populateDatalists();
  initColorPicker("");
  document.getElementById("modalOverlay").style.display = "flex";
  openEditorFocus();
}

function showEditModal(type, dayIdx, itemIdx) {
  modalData = { type, dayIdx, itemIdx };
  document.getElementById("modalTitle").textContent = "Редактировать";
  document.getElementById("modalDeleteBtn").style.display = "inline-block";
  const daySelect = document.getElementById("modalDay");
  daySelect.innerHTML = SCHEDULE.map((d, i) => `<option value="${i}" ${i === dayIdx ? 'selected' : ''}>${d.name}</option>`).join("");
  let item;
  if (type === "school") {
    item = SCHEDULE[dayIdx].lessons[itemIdx];
  } else if (type === "personal") {
    item = (PERSONAL[dayIdx] || [])[itemIdx];
  } else if (!isBuiltInType(type)) {
    item = ((CUSTOM[type] || {})[dayIdx] || [])[itemIdx];
  } else {
    item = EXTENDED[itemIdx];
  }
  modalData.orig = item;
  document.getElementById("modalType").value = item.typeLabel || TYPE_KEY_TO_NAME[type] || type;
  document.getElementById("modalNum").value = (type === "school" && item.n) ? item.n : "";
  document.getElementById("modalSubj").value = item.subj || "";
  document.getElementById("modalTime").value = item.time || "";
  document.getElementById("modalRoom").value = item.room || "";
  document.getElementById("modalLocation").value = item.location || "";
  document.getElementById("modalTeacher").value = item.teacher || "";
  populateDatalists();
  initColorPicker(item.color || "");
  document.getElementById("modalOverlay").style.display = "flex";
  openEditorFocus();
}

let _selectedColor = "";

function initColorPicker(color) {
  _selectedColor = color || "";
  const picker = document.getElementById("modalColorPicker");
  if (!picker) return;
  picker.innerHTML = CARD_COLORS.map((c, i) => {
    const cls = c === _selectedColor ? " active" : "";
    if (i === 0) return `<div class="color-swatch no-color${cls}" data-color="" title="Без цвета">✕</div>`;
    return `<div class="color-swatch${cls}" style="background:${c}" data-color="${c}" title="${COLOR_NAMES[i]}"></div>`;
  }).join("");
  picker.querySelectorAll(".color-swatch").forEach(sw => {
    sw.onclick = () => {
      picker.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("active"));
      sw.classList.add("active");
      _selectedColor = sw.dataset.color;
    };
  });
}

document.addEventListener("touchstart", (e) => {
  if (!e.target.closest("#dayContent")) return;
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  touchStartTime = Date.now();
}, { passive: true });

document.addEventListener("touchend", (e) => {
  if (!e.target.closest("#dayContent") || !touchStartTime || scheduleView !== "day") return;
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  const dx = endX - touchStartX;
  const dy = Math.abs(endY - touchStartY);
  const dt = Date.now() - touchStartTime;
  const isHorizontal = dy < Math.abs(dx) * 0.5 && dy < 30;
  if (Math.abs(dx) > 40 && isHorizontal && dt < 500) {
    if (dx < 0) {
      switchDay(Math.min(currentDayIdx + 1, SCHEDULE.length - 1));
    } else {
      switchDay(Math.max(currentDayIdx - 1, 0));
    }
  }
}, { passive: true });

async function init() {
  const saved = loadLocalData();
  const results = await Promise.allSettled(["timeSchedule.json", "holidays.json"].map(async path => {
    const response = await fetch(path);
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  }));
  if (results[0].status === "rejected" && !saved) {
    document.getElementById("focusTitle").textContent = "Не удалось загрузить расписание";
    document.getElementById("status").innerHTML = '<button class="text-button" onclick="location.reload()">Повторить загрузку ↻</button>';
    return;
  }
  adoptData(ScheduleCore.normalize(results[0].status === "fulfilled" ? results[0].value : saved));
  HOLIDAYS = results[1].status === "fulfilled" ? results[1].value : null;
  if (localStorage.getItem("tg_no_defaults") === "true") adoptData(ScheduleCore.normalize());

  var isEmpty = !SCHEDULE || SCHEDULE.every(function(d) { return !d.lessons || d.lessons.length === 0; });
  if (isEmpty && !saved && localStorage.getItem("tg_no_defaults") !== "true") {
    try {
      var defRes = await Promise.all([
        fetch("main_lesson.json"),
        fetch("extended.json")
      ]);
      var defSch = await defRes[0].json();
      var defExt = await defRes[1].json();
      if (defSch && defSch.length) SCHEDULE = defSch;
      if (defExt && defExt.length) EXTENDED = defExt;
    } catch (e) { /* нет дефолтных файлов — ок */ }
  }

  adoptData(ScheduleCore.overlay(currentData(), saved));

  buildToggles();

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".theme-btn").textContent = "☾";
  }

  if (editMode) {
    document.body.classList.add("edit-mode");
    const editBar = document.getElementById("editBar");
    const addBtn = document.getElementById("addBtn");
    if (editBar) editBar.style.display = "flex";
    if (addBtn) addBtn.style.display = "block";
  }

  currentDayIdx = getTodayIndex();
  renderDate();
  renderTabs();
  renderAll();
  renderStatus();
  renderProgress();
  renderCountdowns();

  setupScheduleUI();
  startEngines(tickSchedule);
}

function exportSchool() {
  const local = loadLocalData();
  const data = (local && local.schedule) ? local.schedule : SCHEDULE;
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Уроки_2А.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function exportPersonal() {
  const local = loadLocalData();
  const data = (local && local.personal) ? local.personal : PERSONAL;
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Занятия_2А.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function exportExtended() {
  const local = loadLocalData();
  const data = (local && local.extended) ? local.extended : EXTENDED;
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Продлёнка_2А.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

init();
