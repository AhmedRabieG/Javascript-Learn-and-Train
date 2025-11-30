
// // Event Loop in JavaScript

// ـ Event Loop في JavaScript
// شرح كامل + أمثلة عملية من البسيط → المتقدم جدًا
// أولًا: لماذا نحتاج الـ Event Loop؟

// JavaScript Single-Threaded → يعني:

//     مافيش تنفيذ متوازي حقيقي (مافيش threads زي Java/C++).
//     لكن بيقدر يتعامل مع الأحداث غير المتزامنة (مثل setTimeout, fetch, click) بدون ما يتوقف.

//     الـ Event Loop هو "المايسترو" اللي بيحرك كل حاجة.

// مكونات الـ Event Loop (الرسم الرسمي)

// ┌───────────────────────┐
// │     Call Stack         │   ← تنفيذ الكود سطر بسطر
// └─────────▲─────────────┘
//           │
//           ▼
// ┌───────────────────────┐
// │   Microtask Queue      │   ← Promises, MutationObserver
// └─────────▲─────────────┘
//           │
//           ▼
// ┌───────────────────────┐
// │   Macrotask Queue      │   ← setTimeout, setInterval, I/O, UI
// └─────────▲─────────────┘
//           │
//           ▼
// ┌───────────────────────┐
// │     Web APIs           │   ← المتصفح/الـ Node.js (setTimeout, fetch, DOM)
// └───────────────────────┘

// كيف يشتغل الـ Event Loop؟ (خطوة بخطوة)
// الخطوة 	إيه اللي بيحصل؟
// 1 	Call Stack فاضي؟ → نروح للـ Microtask Queue
// 2 	نفرغ كل الـ Microtasks (أولوية عالية)
// 3 	نروح للـ Macrotask Queue → نأخذ واحد بس
// 4 	ننفذه → يدخل Call Stack
// 5 	نرجع نكرر من 1

//     ملاحظة: الـ Microtasks تتنفذ كلها قبل أي Macrotask

// أمثلة عملية (من البسيط للمتقدم)
// مثال 1: الأساسي – setTimeout

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// console.log("3");

// النتيجة:

// 1
// 3
// 2

// ليه؟
// الخطوة 	اللي حصل
// 1 	console.log("1") → Call Stack → يطبع
// 2 	setTimeout → يروح لـ Web API
// 3 	console.log("3") → يطبع
// 4 	Call Stack فاضي → يروح لـ Macrotask Queue → ينفذ () => console.log("2")
// مثال 2: Microtask vs Macrotask

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// النتيجة:

// 1
// 4
// 3
// 2

// التفسير:
// الخطوة 	اللي حصل
// 1 	1 و 4 يطبعوا
// 2 	setTimeout → Macrotask Queue
// 3 	Promise.then → Microtask Queue
// 4 	Call Stack فاضي → يفرغ كل الـ Microtasks → 3
// 5 	بعدين يروح للـ Macrotask → 2
// مثال 3: متقدم – Microtasks متسلسلة

// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     return Promise.resolve();
//   })
//   .then(() => console.log("B"));

// setTimeout(() => console.log("C"), 0);

// console.log("D");

// النتيجة:

// D
// A
// B
// C

//     كل .then بيضيف microtask جديد → بيتنفذ كله قبل أي macrotask

// مثال 4: متقدم جدًا – Starvation (تجويع الـ Macrotasks)

// setTimeout(() => console.log("Macrotask 1"), 0);

// let i = 0;
// function addMicrotask() {
//   Promise.resolve().then(() => {
//     console.log("Microtask", ++i);
//     if (i < 5) addMicrotask(); // نضيف microtask جديد!
//   });
// }
// addMicrotask();

// setTimeout(() => console.log("Macrotask 2"), 0);

// النتيجة:

// Microtask 1
// Microtask 2
// Microtask 3
// Microtask 4
// Microtask 5
// Macrotask 1
// Macrotask 2

//     الـ Macrotasks بتتأخر لأن الـ Microtasks مابتخلّصش!

// مثال 5: عملي – fetch + DOM (متصفح)

// console.log("Start");

// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Click!");
// });

// fetch("https://api.example.com")
//   .then(res => res.json())
//   .then(data => console.log("Data:", data));

// setTimeout(() => console.log("Timeout"), 100);

// console.log("End");

// الترتيب (تقريبي):

// Start
// End
// Timeout
// Data: ...
// Click!   ← لما تضغط

//     fetch → Macrotask (لأن الـ network I/O في الـ Macrotask queue)

// مثال 6: Node.js – process.nextTick vs setImmediate

// console.log("1");

// setTimeout(() => console.log("2"), 0);
// setImmediate(() => console.log("3"));

// process.nextTick(() => console.log("4"));
// process.nextTick(() => {
//   console.log("5");
//   process.nextTick(() => console.log("6"));
// });

// console.log("7");

// النتيجة (في Node.js):

// 1
// 7
// 4
// 5
// 6
// 2
// 3

// الفرق:
// الدالة 	الـ Queue
// process.nextTick 	Microtask (قبل الـ Promise)
// setImmediate 	Macrotask
// setTimeout(..., 0) 	Macrotask
// مثال 7: متقدم – Animation Frame (requestAnimationFrame)

// console.log("Script start");

// setTimeout(() => console.log("setTimeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// requestAnimationFrame(() => console.log("RAF"));

// console.log("Script end");

// النتيجة:

// Script start
// Script end
// Promise
// RAF
// setTimeout

//     requestAnimationFrame → Macrotask لكن يتنفذ قبل الـ repaint (قبل setTimeout في أغلب الحالات)

// خلاصة: الأولويات في الـ Event Loop
// الأولوية 	الـ Queue 	الأمثلة
// 1 	Call Stack 	تنفيذ الكود العادي
// 2 	Microtask Queue 	Promise.then, queueMicrotask, process.nextTick, MutationObserver
// 3 	Macrotask Queue 	setTimeout, setInterval, setImmediate, I/O, UI events, requestAnimationFrame
// رسم توضيحي (Event Loop Cycle)

// ┌──────────────────────────────┐
// │ 1. Call Stack فاضي؟           │
// └───────┬──────────────────────┘
//         ▼
// ┌──────────────────────────────┐
// │ 2. نفّذ كل الـ Microtasks      │
// └───────┬──────────────────────┘
//         ▼
// ┌──────────────────────────────┐
// │ 3. خذ Macrotask واحد من الـ Queue │
// └───────┬──────────────────────┘
//         ▼
// ┌──────────────────────────────┐
// │ 4. نفّذه → Call Stack         │
// └───────┬──────────────────────┘
//         ▼
// ┌──────────────────────────────┐
// │ 5. رجع للخطوة 1               │
// └──────────────────────────────┘

// نصائح عملية (للمطورين)
// النصيحة 	ليه؟
// استخدم queueMicrotask بدل setTimeout(..., 0) 	أسرع وأضمن
// متعبيش الـ Microtask Queue 	ممكن يسبب تجميد الواجهة
// استخدم requestAnimationFrame للـ UI 	يتزامن مع الـ repaint
// في Node.js: process.nextTick أقوى من Promise 	أولوية أعلى
// تمرين عملي (جرب بنفسك)

// console.log("A");

// queueMicrotask(() => console.log("B"));

// setTimeout(() => console.log("C"), 0);

// Promise.resolve().then(() => console.log("D"))
//   .then(() => console.log("E"));

// requestAnimationFrame(() => console.log("F"));

// console.log("G");

//     توقع النتيجة قبل ما تجرب!

// أدوات للتصور
// الأداة 	الرابط
// Loupe 	http://latentflip.com/loupe
// JS Visualizer 	https://javascriptvisualizer.com
// Event Loop Game 	https://eloquentjavascript.net/11_async.html
// خلاصة نهائية (جدول)
// المفهوم 	الوصف
// Call Stack 	تنفيذ الكود الحالي
// Web APIs 	تنفيذ العمليات غير المتزامنة
// Macrotask Queue 	setTimeout, click, fetch
// Microtask Queue 	Promise, queueMicrotask
// Event Loop 	يدور: Call Stack → Micro → Macro

/////////////////////////////////////////////////////////////////////////////////////////////////////4


// جميل — نخش في القلب: شرح مفصّل لـ Event Loop في جافاسكربت مع أمثلة عملية متقدمة، تفسير لماذا بعض الـ callbacks تترتب كده، وإزاي تتعامل مع الـ concurrency، والـ microtasks vs macrotasks، والقيود العملية (blocking، rendering)، وحلول (Web Workers، message channels). هشرح خطوة بخطوة وبأمثلة كود مع شرح ترتيب الـ logs المتوقّع.
// 1) مقدمة سريعة (فكرة واحدة)

// جافاسكربت لغة واحدة الخيط (single-threaded) فيما يخص تنفيذ الـ JavaScript code على الـ main thread (في المتصفح أو في Node). لكن تقدر تتعامل مع I/O و timers و rendering بشكل غير متزامن بفضل Event Loop و طوابير المهام (queues).

// المفاهيم الرئيسية:

//     Call Stack: السجل اللي بيتنفّذ عليه الكود حالياً (وظائف/دوال).
//     Heap: ذاكرة الكائنات.
//     Task Queues / Macrotask Queue: طابور الأحداث الكبيرة (مثل setTimeout, setInterval, DOM events, I/O callbacks).
//     Microtask Queue (Job Queue): وُضع لاحقًا للـ Promises (.then/await), queueMicrotask, و MutationObserver. لها أولوية أعلى من الـ macrotasks.
//     Rendering: بعد انتهاء دورة الـ event loop، المتصفح ممكن يعمل إعادة رسم (paint / layout).

// 2) القاعدة الذهبية في الترتيب

//     تنفيذ كل ما هو في call stack (الـ script / current task).
//     بعد انتهاء الـ task، يتم تنفيذ كلّ الـ microtasks من الـ microtask queue حتى تفضى تمامًا (قد تضيف microtasks أخرى أثناء التنفيذ).
//     بعدها المتصفح قد يقوم بـ rendering (إذا مطلوب).
//     ثم يأخذ الـ event loop المهمة التالية من الـ macrotask queue (مثل callback من setTimeout أو حدث DOM) وينفذها، وتتكرر الدورة.

//     النتيجة العملية: Microtasks تُنفذ قبل أي macrotask جديد حتى لو الـ macrotask كان جاهز من قبل.

// 3) مثال بسيط يوضح الفرق (توقُّع الـ console order)

// console.log('script start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('promise1');
// }).then(() => {
//   console.log('promise2');
// });

// console.log('script end');

// الترتيب المتوقع للطباعة:

//     script start (synchronous)
//     script end (synchronous)
//     promise1 (microtask)
//     promise2 (microtask chained)
//     setTimeout (macrotask)

// لماذا؟ لأن الـ Promises تضع الـ callbacks في الـ microtask queue والتي تُعالج مباشرة بعد إنهاء الـ call stack وقبل أي macrotask.
// 4) مثال متقدّم يوضح تداخل microtasks و macrotasks وإضافة المزيد أثناء التنفيذ

// console.log('A');

// setTimeout(() => {
//   console.log('B'); // macrotask 1
//   Promise.resolve().then(() => {
//     console.log('C'); // microtask inside macrotask 1
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('D'); // microtask 1
// }).then(() => {
//   console.log('E'); // microtask 2
// });

// console.log('F');

// الترتيب المتوقع: A, F, D, E, B, C

// شرح: بعد إنهاء السكربت (A,F) نُنفّذ الميكروتاسكس (D,E). بعد ذلك نأخذ الماكروتاسك الأولى (setTimeout) ونشغّله (B) ثم أي ميكروتاسك تم إنشاؤها أثناء تنفيذ B (C).
// 5) async/await وكيف تعمل داخليًا

//     async function يعيد دائمًا Promise.
//     await expr يوقف تنفيذ الدالة الحالية مؤقتًا ويُحوّل الباقي إلى microtask (يعادل تقريبًا Promise.resolve(expr).then(...) من حيث الترتيب).

// مثال:

// console.log('start');

// async function foo() {
//   console.log('inside foo start');
//   await null;
//   console.log('inside foo after await');
// }

// foo();

// console.log('end');

// الترتيب المتوقع: start inside foo start end inside foo after await

// لماذا؟ لأن await null يجعل الباقي بعده يُنفّذ كـ microtask.
// 6) Blocking و long tasks — كيف يعيقون الـ Event Loop

// أي كود متزامن طويل سيمنع Event Loop من معالجة الـ microtasks والـ macrotasks حتى ينتهي الـ call stack. مثال:

// console.log('start');

// const t = Date.now();
// while (Date.now() - t < 2000) {
//   // busy-wait 2 seconds — يحظر الـ main thread
// }

// console.log('end');

// أثر عملي: الصفحة ستتجمد (UI frozen) لمدة 2 ثانية — لا رسومات، لا استجابة للأحداث، ولا تنفيذ لِـ callbacks.

// حلول:

//     قسم العمل إلى قطع صغيرة (chunking) مع setTimeout(..., 0) أو queueMicrotask بين القطع.
//     استخدم Web Worker لنقل الحسابات الثقيلة خارج الـ main thread.

// 7) مثال عملي متقدم: تقسيم عمل ثقيل إلى chunks

// function heavyTask(items) {
//   let i = 0;
//   function processChunk() {
//     const chunkSize = 1000;
//     const end = Math.min(i + chunkSize, items.length);
//     for (; i < end; i++) {
//       // عملية ثقيلة جزئياً
//       doWork(items[i]);
//     }
//     if (i < items.length) {
//       // أضف macrotask للجزء التالي حتى لا تحظر ال UI
//       setTimeout(processChunk, 0);
//     }
//   }
//   processChunk();
// }

// هنا استخدمنا setTimeout(...,0) (macrotask) لفصل حلقات المعالجة حتى يتيح الـ event loop فرصة للتعامل مع rendering/أحداث/ميكروتاسكس.

//     ملاحظة: لو احتجت أولوية أعلى (أسرع) لتنفيذ القطع بعد انتهاء الـ call stack الحالي استخدم queueMicrotask لكن احذر: إذا استخدمت microtasks كثيفة قد تمنع macrotasks والـ rendering.

// 8) Node.js: بعض الاختلافات العملية

// في Node توجد فئات إضافية:

//     process.nextTick() — تعمل قبل الـ microtasks (أعلى أولوية في Node).
//     setImmediate() — تُعتبر macrotask وتنفّذ بعد I/O events وفي نهاية دورة الـ event loop.
//     Timers (setTimeout) — تُنفّذ في مرحلة الـ timers في دورة الـ loop.

// ترتيب مبسّط في Node (مهم فقط في Node):

//     Execute current code.
//     process.nextTick callbacks
//     microtasks (promise jobs)
//     other phases: timers, pending callbacks, idle/prepare, poll (I/O)، check (setImmediate)، close callbacks... (الترتيب التفصيلي طويل لكن الفكرة: process.nextTick أقوى من الـ microtasks في Node).

// مثال Node:

// console.log('start');

// process.nextTick(() => console.log('nextTick'));
// Promise.resolve().then(() => console.log('promise'));
// setImmediate(() => console.log('setImmediate'));
// setTimeout(() => console.log('setTimeout'), 0);

// console.log('end');

// ترتيب متوقع في Node غالبًا: start, end, nextTick, promise, setTimeout OR setImmediate (الظاهرية تعتمد على ظروف البيئة) — لكن nextTick دائمًا قبل الـ promise jobs.
// 9) MutationObserver و queueMicrotask

//     DOM API: MutationObserver callbacks تُوضع في microtask queue بعد تغييرات DOM.
//     queueMicrotask(fn) يمكنك استعمالها لجدولة عمل ذو أولوية microtask (بديل آمن لاستخدام Promise.resolve().then()).

// 10) Web Workers — كيف تفيد

// Web Worker يتيح تنفيذ كود جافاسكربت في thread منفصل. لا يصل إلى DOM مباشرة. تتواصل مع الـ main thread عبر رسائل (postMessage).

// مثال موجز:

// // main.js
// const worker = new Worker('worker.js');
// worker.postMessage({ action: 'compute', payload: bigData });
// worker.onmessage = (e) => {
//   console.log('result', e.data);
// };

// في worker.js:

// onmessage = function(e) {
//   const result = heavyCompute(e.data.payload);
//   postMessage(result);
// };

// الفائدة: تحل مشكلة الـ blocking و تخلي UI responsive. لكن تواصل البيانات له overhead (serialize/deserialize).
// 11) مثال معقد يوضح تمايز النتائج مع async/await و setTimeout و Promise

// console.log('1');

// setTimeout(() => console.log('2'), 0);

// Promise.resolve()
//   .then(() => {
//     console.log('3');
//     return Promise.resolve('x').then(() => console.log('4'));
//   })
//   .then(() => console.log('5'));

// console.log('6');

// ترتيب الطباعة المتوقع: 1, 6, 3, 4, 5, 2

// لماذا: بعد إنهاء السكربت (1,6)، تنفّذ الميكروتاسكس (3,4,5) ثم الماكروتاسك (setTimeout) يطبع 2.
// 12) نصائح عملية للمشاكل الشائعة

//     لو setTimeout(..., 0) لا يبدو أنه يتم فورًا: تذكّر أنه ما زال macrotask ويأتي بعد انتهاء الميكروتاسكس والـ call stack.
//     لا تستخدم microtasks (مثل تسلسلات الـ Promise) لتنفيذ حلقات طويلة — ستمنع rendering. استخدم macrotasks أو تقسيم العمل أو Web Workers.
//     راقب الأداء (Long Tasks API, Performance tab في DevTools) لتعرف إذا عملت Blocking.
//     في Node: استعمل process.nextTick بحذر (قوي جدًا وقد يمنع phases تانية) و setImmediate عندما تريد تشغيل شيء بعد دورة I/O.

// 13) ختام سريع — cheat-sheet عملي

//     Synchronous code → يُنفّذ فورًا على الـ Call Stack.
//     Promise.then / await / queueMicrotask / MutationObserver → Microtasks (تُنفّذ قبل أي macrotask التالي).
//     setTimeout / setInterval / setImmediate / I/O / DOM events → Macrotasks (tasks).
//     Web Worker → thread مستقل، مناسب للحسابات الثقيلة.
//     Blocking synchronous code → يجمّد UI / يمنع الـ event loop. قسم العمل أو استخدم worker.
