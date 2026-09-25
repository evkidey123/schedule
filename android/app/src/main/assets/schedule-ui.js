/* Shared view/controller. Native-only dialogs remain in script.js. */
const uiEscape = ScheduleCore.escape;
let scheduleView = "day";
let lastTickDay = -1;
let lastStateSignature = "";
let modalReturnFocus = null;
const uiIcons = {
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  moon:'<path d="M20.5 13A8.5 8.5 0 0 1 11 3a8.5 8.5 0 1 0 9.5 10Z"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  edit:'<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-4-4L5 15Z"/>',
  arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',
  pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>'
};
function uiIcon(name) { return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${uiIcons[name] || uiIcons.arrow}</svg>`; }
function currentData() { return { schedule:SCHEDULE, personal:PERSONAL, custom:CUSTOM, extended:EXTENDED }; }
function adoptData(data) { SCHEDULE=data.schedule; PERSONAL=data.personal; CUSTOM=data.custom; EXTENDED=data.extended; }
function enabledSchedules() { return { school:schoolOn, personal:personalOn, extended:extendedOn, custom:Object.fromEntries(Object.keys(CUSTOM).map(k=>[k,customOn(k)])) }; }
function getTodayItems(day) { return ScheduleCore.collect(currentData(),day,enabledSchedules()); }
function getItem(type, day, index) {
  if (type === "school") return SCHEDULE[day]?.lessons[index];
  if (type === "personal") return PERSONAL[day]?.[index];
  if (type === "extended") return EXTENDED[index];
  return CUSTOM[type]?.[day]?.[index];
}
function cardIcon(item) {
  const icon = item.icon || (item._type === "school" ? ICONS[item.subj] : null) || (item._type === "extended" ? "🎒" : "✦");
  return Array.isArray(icon) ? `<span class="icon-grid">${icon.map(x=>`<span>${uiEscape(x)}</span>`).join("")}</span>` : uiEscape(icon);
}
function renderScheduleCard(item, merged=false) {
  const day=item._dayIdx, index=item._itemIdx, type=item._type;
  const range=ScheduleCore.range(item.time), state=item._state;
  const times=item.time.split(/[–—-]/).map(x=>x.trim());
  const label=item.typeLabel || typeName(type);
  const identity=`data-type="${uiEscape(type)}" data-day="${day}" data-index="${index}"`;
  const color=/^#[0-9a-f]{6}$/i.test(item.color || "") ? ` style="--item-color:${item.color}"` : "";
  const progress=range && state === "current" ? `data-progress="${range.start}"` : "";
  const start=range?.start ?? 0, end=range?.end ?? 0;
  const bell=window.Android ? `<div class="card-actions"><button type="button" class="icon-button bell-btn${hasReminder(type,day,index,item.time,"start")?" bell-active":""}" data-action="reminder" data-when="start" aria-label="Напомнить до начала: ${uiEscape(item.subj)}">${uiIcon("bell")}</button><button type="button" class="icon-button bell-btn${hasReminder(type,day,index,item.time,"end")?" bell-active":""}" data-action="reminder" data-when="end" aria-label="Напомнить до конца: ${uiEscape(item.subj)}"><span aria-hidden="true">◷</span></button></div>` : "";
  const edit=editMode ? `<button type="button" class="icon-button edit-btn-sm" data-action="edit" aria-label="Редактировать: ${uiEscape(item.subj)}">${uiIcon("edit")}</button>` : "";
  const cd=state === "current" ? `<span class="lesson-countdown" data-cd-end="${end}">${remainingSec(end)}</span>` : state === "next" ? `<span class="lesson-countdown" data-cd="${start}">${countdownSec(start)}</span>` : "";
  return `<article class="${merged ? "merge-row" : "lesson"} schedule-card ${state}" ${identity}${color} ${range?`data-start="${start}" data-end="${end}" data-state="${state}" ${progress}`:""}>
    <div class="time-rail"><strong>${uiEscape(times[0])}</strong><span>${uiEscape(times[1]||"")}</span><i></i></div>
    <div class="card-surface"><div class="lesson-icon">${cardIcon(item)}</div><div class="lesson-info">
      <div class="card-eyebrow"><span class="type-tag ${typeClsOf(type)}">${uiEscape(label)}</span>${state==="current"?'<span class="live-tag">Сейчас</span>':""}${item.paid?'<span class="paid-tag" title="Платное занятие">₽</span>':""}</div>
      <h3 class="lesson-subject">${uiEscape(item.subj)}</h3>
      <div class="card-meta">${item.room?`<span>${uiIcon("pin")}${uiEscape(item.room)}</span>`:""}${item.teacher?`<span>${uiEscape(item.teacher)}</span>`:""}${item.location?`<span>${uiEscape(item.location)}</span>`:""}</div>${cd}
    </div><div class="card-tools">${bell}${edit}</div></div>
    ${state==="current"?'<div class="row-progress"></div>':""}
  </article>`;
}
function renderLesson(item,state,day,index) { return renderScheduleCard({...item,_type:"school",_state:state,_dayIdx:day,_itemIdx:index}); }
function renderExtendedItem(item,state,day,index) { return renderScheduleCard({...item,_type:item._type||"extended",_state:state,_dayIdx:day,_itemIdx:index}); }
function renderMergeCard(items) { return `<div class="overlap-group"><div class="overlap-label"><span></span>Одновременно · ${items.length} ${ScheduleCore.plural(items.length,["занятие","занятия","занятий"])}</div>${items.map(x=>renderScheduleCard(x,true)).join("")}</div>`; }
function renderDayLessons(day) {
  const items=getTodayItems(day);
  if (!items.length) return `<div class="empty-orbit" aria-hidden="true"><span>✧</span><i></i><b></b></div>${renderWeekendMsg(day)}`;
  return ScheduleCore.group(items).map(group=>group.length>1?renderMergeCard(group):renderScheduleCard(group[0])).join("");
}
function updateDayHeading() {
  const count=getTodayItems(currentDayIdx).length;
  document.getElementById("selectedDayLabel").textContent=scheduleView==="week"?"Вся неделя":SCHEDULE[currentDayIdx]?.name||"Расписание";
  document.getElementById("daySummary").textContent=scheduleView==="week"?"Все 7 дней перед глазами":count?`${count} ${ScheduleCore.plural(count,["занятие","занятия","занятий"])}`:"Время для себя";
  document.getElementById("todayBtn").classList.toggle("is-today",currentDayIdx===getTodayIndex());
  const edit=document.getElementById("editModeBtn");
  edit.setAttribute("aria-pressed",String(editMode));
  edit.classList.toggle("active",editMode);
}
function renderTabs() {
  const today=getTodayIndex(), monday=new Date();
  monday.setDate(monday.getDate()-today);
  document.getElementById("dayTabs").innerHTML=`<span class="day-indicator" aria-hidden="true"></span>`+SCHEDULE.map((day,i)=>{
    const date=new Date(monday); date.setDate(monday.getDate()+i);
    const count=getTodayItems(i).length;
    return `<button type="button" class="day-tab${i===currentDayIdx?" active":""}${i===today?" today":""}" data-day="${i}" aria-label="${uiEscape(day.name)}, ${date.toLocaleDateString('ru-RU',{day:'numeric',month:'long'})}${i===today?", сегодня":""}" aria-pressed="${i===currentDayIdx}"><span>${uiEscape(day.short)}</span><strong>${date.getDate()}</strong><i class="${count?"has-items":""}"></i></button>`;
  }).join("");
  document.getElementById("dayTabs").style.setProperty("--day",currentDayIdx);
}
function switchDay(index) {
  if (index<0||index>=SCHEDULE.length) return;
  const direction=index>=currentDayIdx?1:-1;
  currentDayIdx=index;
  scheduleView="day";
  document.getElementById("dayContent").style.setProperty("--direction",direction);
  document.querySelectorAll(".day-tab").forEach((button,i)=>{button.classList.toggle("active",i===index);button.setAttribute("aria-pressed",String(i===index));});
  document.getElementById("dayTabs").style.setProperty("--day",index);
  renderAll(true);
}
function setScheduleView(view) { scheduleView=view; renderAll(true); }
function animateSchedule() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const content=document.getElementById("dayContent");
  const direction=Number(content.style.getPropertyValue("--direction"))||1;
  content.getAnimations?.().forEach(animation=>animation.cancel());
  content.animate?.([{opacity:0,transform:`translateX(${direction*18}px)`},{opacity:1,transform:"translateX(0)"}],{duration:260,easing:"cubic-bezier(.2,.8,.2,1)"});
  content.querySelectorAll(".schedule-card").forEach((card,index)=>{
    if(index>7)return;
    card.animate?.([{opacity:0,transform:"translateY(16px) scale(.985)"},{opacity:1,transform:"translateY(0) scale(1)"}],{duration:360,delay:Math.min(index*28,160),fill:"backwards",easing:"cubic-bezier(.2,.8,.2,1)"});
  });
}
function scheduleStateSignature() {
  const days=scheduleView==="week"?SCHEDULE.map((_,i)=>i):[currentDayIdx];
  return days.map(day=>getTodayItems(day).map(item=>item._state).join(",")).join("|");
}
function renderAll(animate=false) {
  const content=document.getElementById("dayContent");
  document.body.dataset.view=scheduleView;
  content.innerHTML=scheduleView==="week"?`<div class="week-grid">${SCHEDULE.map((day,i)=>`<section class="week-day"><div class="week-heading"><h3>${uiEscape(day.name)}</h3><span>${getTodayItems(i).length}</span></div>${renderDayLessons(i)}</section>`).join("")}</div>`:`<div class="day-panel active">${renderDayLessons(currentDayIdx)}</div>`;
  document.querySelectorAll("[data-view-button]").forEach(button=>{const active=button.dataset.viewButton===scheduleView;button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active));});
  updateDayHeading(); renderStatus(); renderProgress();
  updateProgressBars();
  lastStateSignature=scheduleStateSignature();
  if(animate)animateSchedule();
}
function renderStatus() {
  const items=getTodayItems(getTodayIndex()), minute=new Date().getHours()*60+new Date().getMinutes();
  const current=items.find(item=>{const r=ScheduleCore.range(item.time);return r&&r.start<=minute&&r.end>minute;});
  const next=items.find(item=>(ScheduleCore.range(item.time)?.start??-1)>minute);
  const item=current||next;
  const title=document.getElementById("focusTitle"), eyebrow=document.getElementById("focusEyebrow"), meta=document.getElementById("status");
  eyebrow.textContent=current?"СЕЙЧАС ИДЁТ":next?"ДАЛЬШЕ ПО ПЛАНУ":"МОЖНО ВЫДОХНУТЬ";
  title.textContent=item?item.subj:items.length?"На сегодня всё":"Свободный день";
  const html=item?`<span class="focus-time">${uiEscape(item.time)}</span>${item.room?`<span>${uiEscape(item.room)}</span>`:""}<span>${current?remainingSec(ScheduleCore.range(item.time).end):countdownSec(ScheduleCore.range(item.time).start)}</span>`:items.length?"Все занятия позади. Хорошего отдыха!":"Выбирай другой день или добавляй свои планы.";
  if(meta.innerHTML!==html)meta.innerHTML=html;
  document.getElementById("focusCard").dataset.state=current?"current":next?"next":"free";
}
function renderProgress() {
  const ranges=getTodayItems(getTodayIndex()).map(item=>ScheduleCore.range(item.time)).filter(Boolean);
  const first=ranges.length?Math.min(...ranges.map(r=>r.start)):0, last=ranges.length?Math.max(...ranges.map(r=>r.end)):0;
  const now=new Date(), minute=now.getHours()*60+now.getMinutes();
  const percent=last>first?Math.max(0,Math.min(100,(minute-first)/(last-first)*100)):0;
  document.getElementById("progressFill").style.width=percent+"%";
  document.getElementById("progressLabel").textContent=ranges.length?`${Math.round(percent)}% дня позади`:"Без спешки";
  document.getElementById("focusCard").style.setProperty("--progress",percent+"%");
}
function toggleTheme() {
  document.body.classList.toggle("dark");
  const dark=document.body.classList.contains("dark");
  localStorage.setItem("theme",dark?"dark":"light");
  const button=document.querySelector(".theme-btn");
  button.innerHTML=uiIcon(dark?"sun":"moon");
  button.setAttribute("aria-label",dark?"Включить светлую тему":"Включить тёмную тему");
  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)document.querySelector(".app-shell").animate?.([{opacity:.7},{opacity:1}],{duration:320});
}
function readReminders() {
  try { const saved=JSON.parse(localStorage.getItem("tg_reminders")||"[]"); return Array.isArray(saved)?saved.filter(x=>x&&typeof x==="object"):[]; } catch { return []; }
}
function showModalError(message) {
  const el=document.getElementById("modalError"); el.textContent=message; el.hidden=false;
}
function saveModal() {
  const value=id=>document.getElementById(id).value.trim();
  const day=Number(value("modalDay")), typeRaw=value("modalType"), type=resolveTypeKey(typeRaw);
  const time=value("modalTime").replace(/\./g,":").replace(/\s*[—-]\s*/g,"–");
  if(!value("modalSubj"))return showModalError("Введите название занятия");
  if(!ScheduleCore.range(time))return showModalError("Время — от начала до конца, например 08:30–09:15. Конец должен быть позже начала.");
  const item={...(modalData.orig||{}),subj:value("modalSubj"),time};
  for(const [key,id] of [["room","modalRoom"],["location","modalLocation"],["teacher","modalTeacher"]]) { const text=value(id); if(text)item[key]=text;else delete item[key]; }
  if(type==="school"&&value("modalNum"))item.n=Number(value("modalNum"));else delete item.n;
  if(_selectedColor)item.color=_selectedColor;else delete item.color;
  if(typeof _selectedIcon!=="undefined"&&_selectedIcon)item.icon=_selectedIcon;
  if(typeRaw&&typeRaw!==(TYPE_KEY_TO_NAME[type]||type))item.typeLabel=typeRaw;else delete item.typeLabel;
  if(modalData.type!==type&&type!=="extended")delete item.days;
  const extraDays=modalData.itemIdx<0&&type!=="extended"&&typeof getExtraDays==="function"?getExtraDays():[];
  try {
    const data=ScheduleCore.save(currentData(),{original:modalData.itemIdx>=0?modalData:null,type,day,item,extraDays});
    saveLocalData(data); adoptData(data);
  }catch(error){return showModalError(error.message);}
  finishDataChange(); closeModal();
}
function deleteFromModal() {
  if(window.Android?!Android.showConfirm("Удалить занятие?"):!confirm("Удалить занятие?"))return;
  const data=ScheduleCore.remove(currentData(),modalData);
  try {saveLocalData(data);}catch {return showModalError("Не удалось сохранить изменение. Проверьте свободное место.");}
  adoptData(data); finishDataChange(); closeModal();
}
function finishDataChange() {
  if(typeof reconcileReminders==="function")reconcileReminders();
  if(window.Android)Android.syncReminders(JSON.stringify(reminders));
  buildToggles(); renderTabs(); renderAll(true);
}
function openEditorFocus() {
  modalReturnFocus=document.activeElement;
  const overlay=document.getElementById("modalOverlay");
  document.getElementById("modalError").hidden=true;
  document.body.classList.add("modal-open");
  overlay.setAttribute("aria-hidden","false");
  requestAnimationFrame(()=>document.getElementById("modalSubj").focus());
}
function closeModal() {
  document.getElementById("modalOverlay").style.display="none";
  document.getElementById("modalOverlay").setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
  modalReturnFocus?.focus();
}
function setupScheduleUI() {
  document.body.classList.toggle("dark",localStorage.getItem("theme")!=="light");
  document.querySelector(".theme-btn").innerHTML=uiIcon(document.body.classList.contains("dark")?"sun":"moon");
  document.getElementById("dayTabs").addEventListener("click",event=>{const button=event.target.closest(".day-tab");if(button)switchDay(Number(button.dataset.day));});
  document.getElementById("dayTabs").addEventListener("keydown",event=>{
    const delta=event.key==="ArrowRight"?1:event.key==="ArrowLeft"?-1:0;
    if(!delta)return;event.preventDefault();switchDay((currentDayIdx+delta+7)%7);document.querySelector(`.day-tab[data-day="${currentDayIdx}"]`).focus();
  });
  document.getElementById("dayContent").addEventListener("click",event=>{
    const action=event.target.closest("[data-action]"),card=event.target.closest(".schedule-card");
    if(!action||!card)return;
    const {type,day,index}=card.dataset, item=getItem(type,Number(day),Number(index));
    if(!item)return;
    if(action.dataset.action==="edit")showEditModal(type,Number(day),Number(index));
    else toggleReminder(type,Number(day),Number(index),item.time,item.subj,action.dataset.when);
  });
  document.addEventListener("pointerdown",event=>{
    const target=event.target.closest("button,.toggle-item");
    if(!target||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const rect=target.getBoundingClientRect(),ripple=document.createElement("span");
    ripple.className="tap-wave";ripple.style.left=(event.clientX-rect.left)+"px";ripple.style.top=(event.clientY-rect.top)+"px";target.appendChild(ripple);
    ripple.addEventListener("animationend",()=>ripple.remove(),{once:true});
  });
  document.getElementById("modalOverlay").addEventListener("keydown",event=>{
    if(event.key==="Escape"){event.preventDefault();closeModal();return;}
    if(event.key!=="Tab")return;
    const focusable=[...event.currentTarget.querySelectorAll('button,input,select,[tabindex="0"]')].filter(el=>el.getClientRects().length&&!el.disabled);
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)tickSchedule();});
  lastTickDay=getTodayIndex();
  renderTabs(); renderAll(true);
}
function tickSchedule() {
  const today=getTodayIndex();
  if(today!==lastTickDay){if(currentDayIdx===lastTickDay)currentDayIdx=today;lastTickDay=today;renderTabs();renderAll();}
  else if(!document.body.classList.contains("modal-open")&&lastStateSignature!==scheduleStateSignature())renderAll();
  renderStatus();renderProgress();renderCountdowns();
}
function buildToggles() {
  const definitions=[{key:"school",name:"Уроки",exists:SCHEDULE.some(day=>day.lessons.length)},{key:"extended",name:"Продлёнка",exists:EXTENDED.length},{key:"personal",name:"Занятия",exists:Object.values(PERSONAL).some(items=>items.length)},...Object.keys(CUSTOM).map(key=>({key,name:key,exists:Object.values(CUSTOM[key]||{}).some(items=>Array.isArray(items)&&items.length),custom:true}))].filter(item=>item.exists);
  for(const item of definitions){const key=item.custom?"custom_"+item.key:item.key;if(localStorage.getItem(key)===null)localStorage.setItem(key,"true");}
  schoolOn=localStorage.getItem("school")!=="false"; extendedOn=localStorage.getItem("extended")==="true"; personalOn=localStorage.getItem("personal")==="true";
  document.getElementById("togglesContainer").innerHTML=definitions.map(item=>{
    const checked=localStorage.getItem(item.custom?"custom_"+item.key:item.key)!=="false";
    return `<label class="toggle-item${checked?" is-on":""}"><input type="checkbox" ${!item.custom?`id="${item.key}Toggle"`:""} data-filter="${uiEscape(item.key)}" ${item.custom?`data-custom-key="${uiEscape(item.key)}"`:""} ${checked?"checked":""} onchange="onToggle()"><span class="filter-check">${uiIcon("check")}</span><span>${uiEscape(item.name)}</span></label>`;
  }).join("");
}
function onToggle() {
  document.querySelectorAll("#togglesContainer input").forEach(input=>{
    localStorage.setItem(input.hasAttribute("data-custom-key")?"custom_"+input.dataset.customKey:input.dataset.filter,String(input.checked));
    input.closest(".toggle-item").classList.toggle("is-on",input.checked);
  });
  schoolOn=localStorage.getItem("school")!=="false";extendedOn=localStorage.getItem("extended")==="true";personalOn=localStorage.getItem("personal")==="true";
  renderTabs();renderAll(true);
}
