const {test}=require('node:test');
const assert=require('node:assert/strict');
const C=require('../schedule-core.js');
const lesson=(subj,time='09:00–09:45')=>({subj,time});
test('cleared saved sections override bundled defaults',()=>{
 const data=C.overlay(C.normalize({extended:[lesson('care')],personal:{0:[lesson('music')]},custom:{sport:{0:[lesson('run')]}}}),{extended:[],personal:{},custom:{}});
 assert.deepEqual(data.extended,[]);assert.deepEqual(data.personal,{});assert.deepEqual(data.custom,{});
});
test('moving an event preserves destination entries and all custom data',()=>{
 const data=C.normalize({schedule:[{lessons:[lesson('move')]},{lessons:[lesson('keep')]}],custom:{chess:{6:[lesson('weekend')]}}});
 const result=C.save(data,{original:{type:'school',dayIdx:0,itemIdx:0},type:'school',day:1,item:lesson('move','10:00–10:45')});
 assert.equal(result.schedule[0].lessons.length,0);assert.deepEqual(result.schedule[1].lessons.map(x=>x.subj),['keep','move']);assert.equal(result.custom.chess[6][0].subj,'weekend');assert.equal(data.schedule[0].lessons.length,1);
});
test('type change removes the source, repeat days are deduplicated and sorted',()=>{
 const result=C.save(C.normalize({schedule:[{lessons:[lesson('old')]}],personal:{2:[lesson('later','12:00–13:00')]}}),{original:{type:'school',dayIdx:0,itemIdx:0},type:'personal',day:2,item:lesson('new'),extraDays:[2,3,3]});
 assert.equal(result.schedule[0].lessons.length,0);assert.deepEqual(result.personal[2].map(x=>x.subj),['new','later']);assert.equal(result.personal[3].length,1);
});
test('weekend custom and personal events are visible, extended care is weekdays only',()=>{
 const data=C.normalize({personal:{6:[lesson('music')]},custom:{chess:{6:[lesson('chess','11:00–12:00')]}},extended:[lesson('care')]});
 assert.deepEqual(C.collect(data,6,{personal:true,extended:true}).map(x=>x.subj),['music','chess']);
});
test('filters and overlap exclusions use the same day collection',()=>{
 const data=C.normalize({schedule:[{lessons:[lesson('math')]}],extended:[lesson('care') ]});
 assert.deepEqual(C.collect(data,0,{school:true,extended:true}).map(x=>x.subj),['math']);
 assert.deepEqual(C.collect(data,0,{school:false,extended:true}).map(x=>x.subj),['care']);
});
test('extended day restrictions can leave an actually empty day',()=>{
 const data=C.normalize({extended:[{...lesson('care'),days:[1]}]});assert.equal(C.collect(data,0,{extended:true}).length,0);
});
test('transitive overlaps group together; adjacent times do not overlap',()=>{
 const items=[lesson('a','09:00–10:00'),lesson('b','09:45–10:30'),lesson('c','10:20–11:00'),lesson('d','11:00–12:00')];
 assert.deepEqual(C.group(items).map(x=>x.length),[3,1]);
});
test('invalid times are rejected and valid dot/em dash ranges accepted',()=>{
 for(const time of ['25:00–26:00','10:70–11:30','11:00–10:00','9:00','09:00–09:00','<b>09:00</b>'])assert.equal(C.range(time),null,time);
 assert.deepEqual(C.range('8.30 — 9.15'),{start:510,end:555});
});
test('state switches at the exact start and end boundaries',()=>{
 const at=(h,m)=>new Date(2026,8,25,h,m);
 assert.equal(C.state(4,'09:00–09:45',at(8,59)),'next');assert.equal(C.state(4,'09:00–09:45',at(9,0)),'current');assert.equal(C.state(4,'09:00–09:45',at(9,45)),'past');
});
test('user text is escaped and prototype keys cannot mutate the model',()=>{
 assert.equal(C.escape('<img onerror="x">'), '&lt;img onerror=&quot;x&quot;&gt;');
 assert.throws(()=>C.save(C.normalize(),{type:'__proto__',day:0,item:lesson('bad')}));
});
test('first deletion works against bundled data without requiring an earlier save',()=>{
 const result=C.remove(C.normalize({extended:[lesson('one')]}),{type:'extended',dayIdx:0,itemIdx:0});assert.equal(result.extended.length,0);
});
test('Russian count labels handle teens and numbers above twenty',()=>{const forms=['занятие','занятия','занятий'];assert.equal(C.plural(21,forms),forms[0]);assert.equal(C.plural(24,forms),forms[1]);assert.equal(C.plural(11,forms),forms[2]);});
test('shared model, view and styles stay identical in Android assets',()=>{
 const fs=require('node:fs'),path=require('node:path');
 for(const name of ['schedule-core.js','schedule-ui.js','app.css'])assert.equal(fs.readFileSync(path.join(__dirname,'..',name),'utf8'),fs.readFileSync(path.join(__dirname,'../android/app/src/main/assets',name),'utf8'),name);
});
