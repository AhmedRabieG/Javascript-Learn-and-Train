
/* Start Questions 
 1- Differences between var, let, const ?             // Answered
 2- let vs const vs var in window object ?            // Answered
 3- memory Allocation for var, let, const ?           // Answered
 2- Explain Hoisting
 3- What is TDZ (Temporal Dead Zone) ?
 4- Explain Lexical Environment in JavaScript ?
 5- Explain Call Stack in JavaScript ?
 6- What is the defference between Variable Environment in Execution Context and Environment Record in lexical environment? 
 7- What is Closure in JavaScript ?
 8- What is IIFE (Immediately Invoked Function Expression) ?
 9- Explain Recursion in JavaScript with example ?
 10- What is Promise in JavaScript ? and how to use it with example ?
 11- What is the difference between Promises and Observables ?
 12- Explain JavaScript Engine ?
 13- Explain Event Loop in JavaScript ?
 14- Explain Memory Leak in JavaScript ?
 15- Explain Event Delegation in JavaScript ?
 16- Explain Event Bubbling in JavaScript ?
 17- Explain Event Capturing in JavaScript ?
 18- Explain Arrow Function in JavaScript ?
 19- Explain Bind() in JavaScript ?
 20- Explain Call() in JavaScript ?
 21- Explain Apply() in JavaScript ?
 22- Explain Spread Operator in JavaScript ?
 23- Explain Rest Parameter in JavaScript ?
 24- What is the difference between Spread Operator and Rest Parameter in JavaScript ?
    
*/


// Start Answers 

// 🔵 Differences between var, let, const
// الفرق الشامل بين var, let, const
// 1️⃣ في Global Execution Context (GEC)
// 🔷 Creation Phase:
// مع var:

// console.log(x); // undefined
// var x = 10;

// اللي بيحصل:

// Memory Allocation:
// ┌────────────────────────────────────┐
// │ Global Execution Context           │
// ├────────────────────────────────────┤
// │ Variable Environment (VE)          │
// │  └─ x: undefined                   │
// ├────────────────────────────────────┤
// │ window object                      │
// │  └─ x: undefined ← نفس المرجع!    │
// └────────────────────────────────────┘

//     x اتعمل لها memory allocation
//     قيمتها undefined
//     بقت property على window
//     Hoisted ومتاحة للاستخدام

// مع let:

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;

// اللي بيحصل:

// Memory Allocation:
// ┌────────────────────────────────────┐
// │ Global Execution Context           │
// ├────────────────────────────────────┤
// │ Script Scope (Global Lexical Env) │
// │  └─ y: <uninitialized> 🚫 TDZ     │
// ├────────────────────────────────────┤
// │ window object                      │
// │  └─ (لا يوجد y هنا!)              │
// └────────────────────────────────────┘

//     y اتعمل لها memory allocation
//     لكن في حالة <uninitialized> (TDZ)
//     مش موجودة على window
//     لو حاولت توصل لها قبل التعريف → ReferenceError

// مع const:

// console.log(z); // ReferenceError
// const z = 30;

// نفس let بالظبط في الـ Creation Phase!

// Script Scope (Global Lexical Env)
//  └─ z: <uninitialized> 🚫 TDZ

// 🔷 Execution Phase:
// مع var:

// var x = 10;
// console.log(x); // 10
// console.log(window.x); // 10

// اللي بيحصل:

// 1. x = 10 ← Assignment
// 2. Variable Environment & window يتحدثوا
// 3. x متاح من أي مكان

// مع let:

// let y = 20;
// console.log(y); // 20
// console.log(window.y); // undefined

// اللي بيحصل:

// 1. y طلعت من الـ TDZ
// 2. y = 20 ← Initialization & Assignment
// 3. y موجودة في Script Scope فقط
// 4. window.y مش موجود

// مع const:

// const z = 30;
// console.log(z); // 30
// z = 40; // TypeError: Assignment to constant variable

// اللي بيحصل:

// 1. z طلعت من الـ TDZ
// 2. z = 30 ← Initialization (لازم تكون مع التعريف!)
// 3. أي محاولة إعادة تعيين → TypeError

// 2️⃣ في Function Execution Context (FEC)
// 🔷 Creation Phase:

// function test() {
//   console.log(a); // undefined
//   console.log(b); // ReferenceError
//   console.log(c); // ReferenceError
  
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// test();

// اللي بيحصل:

// Function Execution Context - Creation Phase:
// ┌─────────────────────────────────────────┐
// │ Variable Environment                    │
// │  └─ a: undefined                        │
// ├─────────────────────────────────────────┤
// │ Lexical Environment                     │
// │  └─ b: <uninitialized> 🚫 TDZ          │
// │  └─ c: <uninitialized> 🚫 TDZ          │
// ├─────────────────────────────────────────┤
// │ Outer Environment Reference             │
// │  └─ → Global Execution Context          │
// └─────────────────────────────────────────┘

// الفرق الكبير: جوا الفانكشن، حتى var مش هتروح على window!
// 🔷 Execution Phase:

// function test() {
//   var a = 1;
//   let b = 2;
//   const c = 3;
  
//   console.log(a); // 1
//   console.log(b); // 2
//   console.log(c); // 3
  
//   console.log(window.a); // undefined ❌
//   console.log(window.b); // undefined ❌
//   console.log(window.c); // undefined ❌
// }

// النقطة المهمة: var جوا function بتبقى function-scoped مش global!
// 3️⃣ Block Scope (مع if, for, while, {})
// مع var (❌ No Block Scope):

// if (true) {
//   var x = 10;
// }
// console.log(x); // 10 ✅ (طلعت برة الـ block!)

// اللي بيحصل:

// ┌─────────────────────────────────┐
// │ Global Execution Context        │
// │  └─ x: 10  ← var تجاهلت الـ {} │
// └─────────────────────────────────┘

// var مش block-scoped - بتطلع برة الـ block!
// مع let و const (✅ Block Scoped):

// if (true) {
//   let y = 20;
//   const z = 30;
// }
// console.log(y); // ReferenceError ❌
// console.log(z); // ReferenceError ❌

// اللي بيحصل:

// Creation Phase للـ Block:
// ┌──────────────────────────────────────┐
// │ Block Lexical Environment (جديد!)   │
// │  └─ y: <uninitialized> TDZ          │
// │  └─ z: <uninitialized> TDZ          │
// ├──────────────────────────────────────┤
// │ Outer → Global Lexical Environment   │
// └──────────────────────────────────────┘

// Execution Phase:
// y = 20, z = 30

// بعد الـ Block:
// Block Lexical Environment اتمسح! 🗑️
// y و z مش موجودين تاني

// 4️⃣ Re-declaration (إعادة التعريف)
// مع var (✅ مسموح):

// var x = 10;
// var x = 20; // مفيش مشكلة ✅
// console.log(x); // 20

// مع let (❌ ممنوع):

// let y = 10;
// let y = 20; // SyntaxError: Identifier 'y' has already been declared

// مع const (❌ ممنوع):

// const z = 10;
// const z = 20; // SyntaxError

// 5️⃣ Re-assignment (إعادة التعيين)
// مع var (✅ مسموح):

// var x = 10;
// x = 20; // ✅

// مع let (✅ مسموح):

// let y = 10;
// y = 20; // ✅

// مع const (❌ ممنوع):

// const z = 10;
// z = 20; // TypeError: Assignment to constant variable

// ⚠️ لكن انتبه:

// const obj = { name: "Ahmed" };
// obj.name = "Ali"; // ✅ مسموح! (تعديل properties)
// obj = {}; // ❌ ممنوع! (إعادة تعيين المرجع)

// const arr = [1, 2, 3];
// arr.push(4); // ✅ مسموح!
// arr = []; // ❌ ممنوع!

// const بتمنع إعادة التعيين، مش التعديل!
// 6️⃣ Initialization Requirement
// مع var:

// var x; // ✅ مسموح
// console.log(x); // undefined
// x = 10;

// مع let:

// let y; // ✅ مسموح
// console.log(y); // undefined
// y = 20;

// مع const:

// const z; // ❌ SyntaxError: Missing initializer in const declaration
// const z = 30; // ✅ لازم initialization فوراً

// 7️⃣ Temporal Dead Zone (TDZ)
// مع var (❌ لا يوجد TDZ):

// console.log(x); // undefined ✅
// var x = 10;

// مع let و const (✅ يوجد TDZ):

// // TDZ start 🚫
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError
// // TDZ continues...
// let y = 20; // TDZ end for y ✅
// const z = 30; // TDZ end for z ✅

// مثال متقدم:

// let x = 10;

// function test() {
//   // TDZ لـ x المحلي بدأ هنا! 🚫
//   console.log(x); // ReferenceError (مش 10!)
//   let x = 20; // TDZ انتهى ✅
// }
// test();

// الـ x المحلي "حجب" الـ x العام، وأنت في الـ TDZ!
// 8️⃣ في Loops
// مع var:

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // Output: 3, 3, 3 ❌

// console.log(i); // 3 (طلع برة!)

// المشكلة: var function-scoped، فـ i واحد مشترك!
// مع let:

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // Output: 0, 1, 2 ✅

// console.log(i); // ReferenceError ✅

// الحل: كل iteration بيعمل Lexical Environment جديد لـ i!

// Iteration 0: { i: 0 }
// Iteration 1: { i: 1 }
// Iteration 2: { i: 2 }

// 9️⃣ Scope Chain

// let globalVar = "global";

// function outer() {
//   let outerVar = "outer";
  
//   function inner() {
//     let innerVar = "inner";
//     console.log(innerVar);  // ✅ inner
//     console.log(outerVar);  // ✅ outer (من Scope Chain)
//     console.log(globalVar); // ✅ global (من Scope Chain)
//   }
  
//   inner();
// }

// outer();

// Scope Chain:

// inner() Lexical Environment
//   └─ innerVar: "inner"
//   └─ Outer → outer() Lexical Environment
//               └─ outerVar: "outer"
//               └─ Outer → Global Lexical Environment
//                           └─ globalVar: "global"

// 🔟 في Strict Mode

// "use strict";

// x = 10; // ReferenceError ❌ (مع أو بدون strict mode)
// var y = 20; // ✅
// let z = 30; // ✅

// لكن بدون strict mode:

// x = 10; // ✅ بيعمل global variable على window!
// console.log(window.x); // 10

// 1️⃣1️⃣ Closures

// function createCounters() {
//   var counters = [];
  
//   for (var i = 0; i < 3; i++) {
//     counters.push(function() {
//       console.log(i);
//     });
//   }
  
//   return counters;
// }

// const c = createCounters();
// c[0](); // 3 ❌
// c[1](); // 3 ❌
// c[2](); // 3 ❌

// الحل مع let:

// function createCounters() {
//   var counters = [];
  
//   for (let i = 0; i < 3; i++) { // let بدل var
//     counters.push(function() {
//       console.log(i);
//     });
//   }
  
//   return counters;
// }

// const c = createCounters();
// c[0](); // 0 ✅
// c[1](); // 1 ✅
// c[2](); // 2 ✅

// 1️⃣2️⃣ Performance

// من ناحية الـ performance، الفروقات negligible في معظم الحالات.

// لكن:

//     const أسرع قليلاً لأن الـ engine عارف إنها مش هتتغير (optimization)
//     let و const أفضل للـ memory management في الـ blocks

// 📊 جدول المقارنة الشامل
// Feature 	var 	let 	const
// Scope 	Function 	Block 	Block
// Hoisting 	✅ (undefined) 	✅ (TDZ) 	✅ (TDZ)
// TDZ 	❌ 	✅ 	✅
// Re-declaration 	✅ 	❌ 	❌
// Re-assignment 	✅ 	✅ 	❌
// Initialization Required 	❌ 	❌ 	✅
// window property (global) 	✅ 	❌ 	❌
// Block Scope 	❌ 	✅ 	✅
// Loop isolation 	❌ 	✅ 	✅
// ✅ Best Practices

//     استخدم const دايماً إلا لو محتاج re-assignment
//     لو محتاج re-assignment، استخدم let
//     متستخدمش var إلا لو مضطر (legacy code)
//     const مش معناها immutable، معناها constant reference

// // ✅ Good
// const config = { api: "https://api.com" };
// let counter = 0;

// // ❌ Bad
// var data = {};

// 🎯 الخلاصة النهائية

// var:

//     Function-scoped
//     بتروح على window في global
//     مفيش TDZ
//     ممكن re-declaration
//     legacy - متستخدمهاش

// let:

//     Block-scoped
//     مش على window
//     فيها TDZ
//     ممكن re-assignment
//     مش ممكن re-declaration
//     استخدمها للمتغيرات اللي هتتغير

// const:

//     Block-scoped
//     مش على window
//     فيها TDZ
//     مش ممكن re-assignment
//     مش ممكن re-declaration
//     لازم initialization فوراً
//     استخدمها دايماً إلا لو محتاج تغيير

///////////////////////////////////////////////////////////////////////

// 2- let vs const vs var in window object ?

// let و const مش بيتحطوا في الـ window object (في الـ browser) أو الـ global object.
// الفرق بين var و let/const:
// مع var:

// var x = 10;
// console.log(window.x); // 10 ✅
// console.log(x === window.x); // true

// الـ var في الـ global scope بتبقى property على الـ window object.
// مع let و const:

// let y = 20;
// const z = 30;

// console.log(window.y); // undefined ❌
// console.log(window.z); // undefined ❌
// console.log(y); // 20 ✅ (موجودة بس مش على window)
// console.log(z); // 30 ✅

// الـ let و const بتتخزن في الـ Global Lexical Environment (أو Script Scope)، مش على الـ window object!
// ليه كده؟

// ده قرار من ES6 عشان:

//     يمنع تلوث الـ global scope (pollution)
//     يمنع الـ conflicts مع properties موجودة على window زي name, top, location, إلخ
//     أكثر أماناً - مش أي كود يقدر يغير متغيراتك من window

// مثال يوضح المشكلة مع var:

// // مشكلة مع var
// var name = "Ahmed";
// console.log(window.name); // "Ahmed"
// // لكن window.name موجود أصلاً في الـ browser! 😱

// // حل أفضل مع let
// let userName = "Ahmed";
// console.log(window.userName); // undefined
// console.log(userName); // "Ahmed" ✅

// الخلاصة:

// ✅ var في global scope → بتروح على window.property
// ✅ let/const في global scope → بتروح في Global Lexical Environment (Script Scope)
// ✅ الاتنين بتقدر توصل لهم عادي، لكن let/const مش accessible من window
// تصور بصري:

// var a = 1;
// let b = 2;
// const c = 3;

// /*
// ┌─────────────────────────────┐
// │ window (Global Object)      │
// │  └─ a: 1  ← var هنا        │
// ├─────────────────────────────┤
// │ Global Lexical Environment  │
// │  └─ b: 2  ← let هنا        │
// │  └─ c: 3  ← const هنا      │
// └─────────────────────────────┘
// */

// ده سبب تاني إن let و const أفضل من var - أكثر أماناً وأقل مشاكل! 💪

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 3- memory Allocation for var, let, const ?







