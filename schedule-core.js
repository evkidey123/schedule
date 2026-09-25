/* Pure schedule model shared by the website and Android WebView. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.ScheduleCore = api;
})(typeof globalThis === "object" ? globalThis : this, function () {
  const names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
  const shorts = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const clone = value => JSON.parse(JSON.stringify(value));
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object || {}, key);
  function normalize(data = {}) {
    return {
      ...data,
      schedule: names.map((name, i) => ({ name, short: shorts[i], ...(data.schedule || [])[i], lessons: Array.isArray(data.schedule?.[i]?.lessons) ? data.schedule[i].lessons : [] })),
      personal: data.personal && typeof data.personal === "object" ? data.personal : {},
      custom: data.custom && typeof data.custom === "object" ? data.custom : {},
      extended: Array.isArray(data.extended) ? data.extended : []
    };
  }
  function overlay(base, saved) {
    const data = { ...base };
    for (const key of ["schedule", "personal", "custom", "extended"]) {
      if (own(saved, key)) data[key] = saved[key];
    }
    return normalize(data);
  }
  function range(time) {
    const match = String(time || "").trim().match(/^(\d{1,2})[:.](\d{2})\s*[–—-]\s*(\d{1,2})[:.](\d{2})$/);
    if (!match) return null;
    const [, h1, m1, h2, m2] = match.map(Number);
    if (h1 > 23 || h2 > 23 || m1 > 59 || m2 > 59) return null;
    const start = h1 * 60 + m1, end = h2 * 60 + m2;
    return end > start ? { start, end } : null;
  }
  function state(day, time, now = new Date()) {
    const today = (now.getDay() + 6) % 7;
    if (day !== today) return day < today ? "past" : "future";
    const interval = range(time);
    if (!interval) return "future";
    const minute = now.getHours() * 60 + now.getMinutes();
    if (minute >= interval.end) return "past";
    if (minute >= interval.start) return "current";
    return interval.start - minute <= 120 ? "next" : "future";
  }
  function overlaps(a, b) {
    const x = range(a.time), y = range(b.time);
    return !!(x && y && x.start < y.end && y.start < x.end);
  }
  function collect(data, day, enabled = {}, now = new Date()) {
    const result = [];
    function add(items, type) {
      (Array.isArray(items) ? items : []).forEach((item, index) => {
        if (!item || typeof item.time !== "string") return;
        result.push({ ...item, _type: type, _itemIdx: index, _dayIdx: day, _state: state(day, item.time, now) });
      });
    }
    const school = data.schedule?.[day]?.lessons || [];
    if (enabled.school !== false) add(school, "school");
    if (enabled.personal) add(data.personal?.[day], "personal");
    for (const [type, days] of Object.entries(data.custom || {})) {
      if (enabled.custom?.[type] !== false) add(days?.[day], type);
    }
    if (enabled.extended && day < 5) {
      (data.extended || []).forEach((item, index) => {
        if (!item || typeof item.time !== "string") return;
        if (item.days && !item.days.includes(day)) return;
        const conflict = enabled.school !== false && school.some(lesson => !/^(Факультатив|Кружок)/.test(lesson.subj || "") && overlaps(item, lesson));
        if (!conflict) result.push({ ...item, _type: "extended", _itemIdx: index, _dayIdx: day, _state: state(day, item.time, now) });
      });
    }
    return result.sort((a, b) => (range(a.time)?.start ?? Infinity) - (range(b.time)?.start ?? Infinity));
  }
  function group(items) {
    const groups = [];
    for (const item of items) {
      if (item._type === "school" && item.subj === "ФКиЗ") { groups.push([item]); continue; }
      const matches = groups.filter(g => g.some(other => !(other._type === "school" && other.subj === "ФКиЗ") && overlaps(item, other)));
      if (!matches.length) groups.push([item]);
      else {
        const merged = [...matches.flat(), item].sort((a, b) => range(a.time).start - range(b.time).start);
        matches.forEach(g => groups.splice(groups.indexOf(g), 1));
        groups.push(merged);
      }
    }
    return groups.sort((a, b) => (range(a[0].time)?.start ?? Infinity) - (range(b[0].time)?.start ?? Infinity));
  }
  function list(data, type, day) {
    if (type === "school") return data.schedule[day].lessons;
    if (type === "extended") return data.extended;
    if (type === "personal") return data.personal[day] ||= [];
    if (["__proto__", "constructor", "prototype"].includes(type)) throw new Error("Выберите другое название типа");
    if (!own(data.custom, type)) data.custom[type] = {};
    return data.custom[type][day] ||= [];
  }
  function remove(data, original) {
    const result = normalize(clone(data));
    if (original && original.itemIdx >= 0) list(result, original.type, original.dayIdx).splice(original.itemIdx, 1);
    return result;
  }
  function save(data, { original, type, day, item, extraDays = [] }) {
    if (!Number.isInteger(day) || day < 0 || day > 6 || !range(item.time)) throw new Error("Проверьте день и время занятия");
    const result = remove(data, original);
    for (const target of new Set([day, ...(type === "extended" ? [] : extraDays)])) {
      if (!Number.isInteger(target) || target < 0 || target > 6) continue;
      const items = list(result, type, target);
      if (target !== day && items.some(x => x.subj === item.subj && x.time === item.time)) continue;
      items.push(clone(item));
      items.sort((a, b) => (range(a.time)?.start ?? Infinity) - (range(b.time)?.start ?? Infinity));
    }
    return result;
  }
  function plural(number, forms) {
    const n = Math.abs(number) % 100, last = n % 10;
    return forms[n > 10 && n < 20 ? 2 : last === 1 ? 0 : last >= 2 && last <= 4 ? 1 : 2];
  }
  function escape(value) { return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])); }
  return { normalize, overlay, range, state, overlaps, collect, group, save, remove, plural, escape };
});
