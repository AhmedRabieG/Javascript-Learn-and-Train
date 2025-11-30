/* 
- Closure
- Recursion
- Promises vs Observables
- Promises vs async...await
- Callback hell
- Event loop in JS
- Explain Memoization in JS with example 
- What is the Temporal Dead Zone?
- What is Hydration in Next.js?
- OOP Concepts
- Overloading vs Overriding
- Scopes in JavaScript
- Hoisting
- Event Delegation
- event bubbling vs event capturing 
- Arrow Function vs. Regular Function
- Difference Between bind(), call(), and apply()
- CSS Specificity
- any vs unknown in TypeScript
- Difference between omit and pick in TypeScript
- How to make all keys in object optional in TypeScript
- What is the different between .ts and .d.ts files?
- Interface vs. Types in TypeScript
- What is the different between useReducer and useState?
- React lifecycle hooks
- Explain useEffect in ReactJs
- Design patterns in ReactJs
- Memory leak
- Server actions in NextJs
- Next Auth in NextJs
- ReactJs vs. NextJs
- Redux vs. Context vs. Zustand
- What is the new features in NextJs 13 ?
- Middleware in NextJs
- React Query
- Lazy loading
- Tailwind vs. Bootstrap
- Explain memorization in ReactJs
- useCallback vs. useMemo 
- Virtual Dom in ReactJs 
- Client side vs. Server side
- Image performance optimization 
- Mention a difficult bug happened with you and how you handled it
- Controlled vs. uncontrolled component in ReactJs
- How to handle forms in ReactJs
- Higher Order Components
- Authentication vs. Authorization
- Why do we need keys in React?
- Why do we need to transpile JSX code? 
- why we couldn't use class in React instead of className
- CSS Modules
- Portals
- localStorage vs. sessionStorage vs. cookies
- Where should I store user token in cookies or localStorage?
- Execution context , lexical environment , global excution context ?
- What is the defference between Variable Environment in Execution Context and Environment Record in lexical environment?
-ليه بيتم تخزين ال function in variable env and lexical env  ?


*/

//////////////////////////////////////////////////////////////////////////////////////////////////
// Amswers 

// 1.Closure


//////////////////////////////////////////////////////////////////////////////////////////////////
// 2.Recursion


//////////////////////////////////////////////////////////////////////////////////////////////////
// 3.Promises vs Observables



//////////////////////////////////////////////////////////////////////////////////////////////////

// 4-javascript engine





//////////////////////////////////////////////////////////////////////////////////////////////////
// 5- Execution context , lexical environment , global excution context ?


/////////////////////////////////////////////////////////////////////////////////////////////////
// 6- What is the defference between Variable Environment in Execution Context and Environment Record in lexical environment? 

//  الفرق بين Variable Environment و Environment Record و Lexical Environment
// أولًا: Execution Context (سياق التنفيذ)

// كل ما JavaScript بتنفّذ كود، بتنشئ Execution Context يحتوي على:

//     Lexical Environment
//     Variable Environment
//     This Binding

// 🔵 1. Lexical Environment (البيئة المعجمية)

// ده المكان اللي JavaScript بتخزن فيه:

//     let

//     const

//     function declarations

//     كل block scope زي:

//     {
//       let x = 10;
//     }

// ويتكون من:

//     Environment Record
//     Outer Environment Reference (سلسلة السكوبات)

// 🔵 2. Variable Environment (بيئة المتغيرات)

// نفس فكرة Lexical Environment بالظبط لكن مخصصة لحاجتين فقط:

//     تخزين var
//     التخزين القديم اللي كان JS بتستخدمه قبل ظهور let/const

//     يعني var بيروح في Variable Environment بينما let و const بيروحوا في Lexical Environment.

// 🔵 3. Environment Record (سجل البيئة)

// ده مجرد object داخلي موجود داخل كل من:

//     Lexical Environment
//     Variable Environment

// ووظيفته: تخزين المتغيرات ذاتها.

// مثلاً:

// let a = 1;
// var b = 2;

// اللي هيحصل:
// 🔶 Lexical Environment

// EnvironmentRecord = {
//   a: 1   // let
// }

// 🔶 Variable Environment

// EnvironmentRecord = {
//   b: 2   // var
// }

// ⭐ الفرق النهائي بشكل مبسّط جدًا:
// العنصر 	الاستخدام 	يخزن ماذا؟
// Lexical Environment 	سكوب حديث 	let / const / functions
// Variable Environment 	سكوب قديم خاص بـ var 	var فقط
// Environment Record 	المكان الفعلي للتخزين 	متغيرات داخل أي بيئة
// 🎯 ملخص سطر واحد:

// Environment Record هو المخزن الفعلي، Lexical Environment و Variable Environment هما الإطار الخارجي، والفرق بينهم إن واحد للـ let/const والتاني للـ var.

/////////////////////////////////////////////////////////////////////////////////////////////////
// 7-ليه بيتم تخزين ال function in variable env and lexical env  ?

//  السبب الأساسي: التوافقية والتراجعية (Backwards Compatibility)
// 1. المتغيرات بـ var والدوال: سلوك مشترك في الرفع (Hoisting)

// // هذا الكود يعمل بسبب Hoisting
// console.log(a); // undefined
// console.log(test); // function test() {...}

// var a = 10;
// function test() { return "hello"; }

//     المتغيرات var تُرفع بقيمة undefined
//     الدوال المعلنة تُرفع بكامل تعريفها (القيمة والاسم)
//     لأن لديهما سلوك Hoisting مشترك، يتم معاملتهما بشكل متماثل في الـ Variable Environment

// 2. الـ Variable Environment: بيئة "القديمة"

// الـ Variable Environment تم تصميمه في الأيام الأولى لـ JavaScript ليعكس سلوك النطاق الوظيفي فقط (Function Scope) الذي كان موجوداً لـ var والدوال.

// function example() {
//     var x = 10; // ✅ تخزن في VE
//     function test() {} // ✅ تخزن في VE
    
//     if (true) {
//         var y = 20; // ✅ تخزن في VE (لأن var لا تحترم Block Scope)
//         let z = 30; // ❌ لا تخزن في VE
//     }
// }

// 🆚 الـ Lexical Environment: البيئة "الحديثة"
// 3. الـ Lexical Environment يسجل كل شيء

// مع ظهور ES6 وـ let/const، احتاجت JavaScript لنظام أكثر تعقيداً:

// function example() {
//     var a = 10; // ✅ في Environment Record
//     let b = 20; // ✅ في Environment Record  
//     const c = 30; // ✅ في Environment Record
//     function test() {} // ✅ في Environment Record
    
//     if (true) {
//         let d = 40; // ✅ في Environment Record منفصل للكتلة
//     }
// }

// الـ Environment Record أصبح "المخزن الشامل" لكل التعريفات.
// 🔄 لماذا الاستمرار في التخزين المزدوج؟
// 4. الفصل بين المسؤوليات:
    // الـ Variable Environment 	   
    // يدير سلوك الرفع (Hoisting) 	          
    // يبقى ثابتاً بعد الإنشاء 	  

    //  الـ Lexical Environment
     //  يدير التنفيذ الفعلي
    //  يدعم الميزات الجديدة
    //  يتغير أثناء التنفيذ
    

// 5. مثال عملي يوضح الفرق:

// function example() {
//     console.log(test); // ✅ function test() - من Variable Environment
    
//     {
//         let test = "hello"; // ❗ هذا تعريف مختلف
//         console.log(test); // "hello" - من Environment Record للكتلة
//     }
    
//     console.log(test); // ✅ function test() - Variable Environment مازال محتفظ بالأصل
// }

// function test() { return "I'm a function"; }
// example();

// 🎯 الخلاصة: لماذا التخزين المزدوج؟

//     للتوافق مع الكود القديم - لو توقف الـ Variable Environment عن تخزين الدوال، سيكسر هذا آلاف المواقع
//     لفصل المسؤوليات - VE مهتم بـ Hoisting، LE مهتم بالتنفيذ الفعلي
//     للدعم المختلط - JavaScript تسمح بخلط var مع let/const في نفس النطاق

// ⚡ الواقع الحالي:

// في محركات JavaScript الحديثة، هذا التمييز أصبح تنفيذياً أكثر منه وظيفياً - المحركات optimize العملية حسب الحاجة، لكن تظل السلوكيات مضمونة حسب المواصفات.

// الجوهر: الـ Variable Environment يضمن استمرار عمل الكود القديم، بينما الـ Lexical Environment يوفر المرونة للخصائص الجديدة!