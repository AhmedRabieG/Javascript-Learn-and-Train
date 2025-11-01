/* 
  - clousers in javascript
  - parseInt with map
  - var vs let
  - this Keyword
  - === vs == 
  - test forEach method, map method 
  - Hoisting 
  - pass by value 
  - shallow copy and deep copy
  - What Is Nullish Coalescing Operator ?? in JavaScript
  - Maps vs. Objects in JavaScript 
  - Destructing Objects in JavaScriptnd
  - Destructuring Function 
  - Set Data Types 
  - WeakSet Data Types
  - Map Data Type Vs Object Data Type 
  - Map vs weakMap Data Type
  - Array.from Method
*/

////////////////////////////////////////////////////////////////////
// clousers in javascript
// function a() {
//     let one = "one";
//     return function b() {
//         let two = "two";
//         return function c() {
//             let three = "three";
//             console.log( `${one} ${two} ${three}`);
//         }
//     }
// }
// a()()();

/////////////////////////////////////////////////////////////////////////
// parseInt with map
// let result = ["11", "22", "33"].map(parseInt);
// console.log(result); // [11, NaN, NaN]

// let result2 = ["11", "22", "33"].map(Number);
// console.log(result2); // [11, 22, 33]

// let result3 = ["11", "22", "33"].map( function(item) {
//     return parseInt(item);
// });
// console.log(result3); // [11, 22, 33]
//or
// let result4 = ["11", "44", "55"].map( (item) => parseInt(item));
// console.log(result4); // [11, 22, 33]

//////////////////////////////////////////////////////////////////////
// var vs let
// (function f() {
//     console.log("var", area)
//     console.log("let", name)
//     let name = "John";
//     var area = "USA";
//     // console.log("var", area)
// })(); // IIFE

////////////////////////////////////////////////////////////////////

// let num = 0;
// async function increment() {
//     num += await 2;
//     console.log(num);
// }
// increment();
// num += 1;
// console.log(num);


////////////////////////////////////////////////////////////////
// this Keyword
/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context
الكلمة المفتاحية this ,
في الدالة العادية مش بتتحدد وقت ما تكتب الكود،
لكن بتتحدد وقت ما تنادي الدالة (يعني وقت التنفيذ)، بناءً على مين استدعاها.

  Search
  - Strict Mode
*/

// var obj = {
//     name: "John",
//     age: 30,
//     getName: function() {
//         console.log(this.name); // the object itself
//     }
// }
// obj.getName();

// This is an arrow function named 
// getName
//  inside an object. When called, it logs the value of this to the console.
// In this context, this refers to the global object, which is the window object in a browser environment. This is because arrow functions inherit the this context from their surrounding scope, rather than binding this to the object they are defined in.

// var obj2 = {
//     name: "John 2222",
//     age: 30,
//     getName: ()=> {
//         console.log("this from arrow function inside object ", this ); // = window
//     }
// }
// obj2.getName();

// obj.getName();
// console.log(this.obj.age);
// var ted = "Ted";
// function testThis() {
    
//     var obj2 = {
//         name: "Smith",
//         age: 25
//     };
//     console.log(this.obj2);
//     console.log(this.ted);
//     console.log(this);
    
// }testThis();

// function testThis2() {
//     console.log(this); // the global object (window in browsers)
//     // In strict mode, this will be undefined.

// }
// testThis2()
// document.addEventListener("click", function() {
//     console.log(this); // the element that was clicked (button, div, etc.)
// });

// const age = 20;
// function fun1() {
 
//     const fname = "fun1";
//     console.log(age);
//     console.log(this.fname);  // undefined
// }
// fun1(); // calling the function
// function fun2() {
//     console.log("Hello from fun2"); 
// }
// fun2(); // calling the function
// this في regular function بيتحدد وقت الاستدعاء.

// this في arrow function بيتحدد وقت الكتابة (بيرث من السياق الخارجي).

// في الغالب، لو كتبت دالة في Global Scope (برّه أي كائن)، this = window في الحالتين.
// أمثلة
// function showThis() {
//   console.log(this);
// }

// showThis(); // 👉 this = window (أو undefined في strict mode)

// const obj = {
//   name: "Ali",
//   show: function () {
//     console.log(this.name);
//   }
// };

// obj.show(); // 👉 this = obj ➜ تطبع "Ali"

// const obj = {
//   name: "Ali",
//   show: function () {
//     console.log(this.name);
//   }
// };

// const copy = obj.show;
// copy(); // 👉 this = window ➜ تطبع undefined
// obj.show() // تطبع = Ali



/////// "Strict mode"
// و وضع خاص في JavaScript بيمكّنك من كتابة كود أكثر أمانًا وبيمنع بعض الأخطاء اللي JavaScript بتتغاضى عنها في الوضع العادي.

// function showThis() {
//   console.log(this);
// }

// showThis(); // 👉 this = undefined

// هنا JavaScript ما بتربطش this بـ window تلقائيًا، وبتخلي this = undefined عشان تمنع الاستخدام الخاطئ.

// هنا JavaScript ما بتربطش this بـ window تلقائيًا، وبتخلي this = undefined عشان تمنع الاستخدام الخاطئ.
// "use strict";
// x = 5; // ❌ Error

// يمنع تكرار أسماء الخصائص:
// "use strict";
// const obj = { a: 1, a: 2 }; // ❌ Error


// يمنع الحذف لبعض الكلمات المحجوزة:
// "use strict";
// let let = 10; // ❌ Error

// يمنع استخدام الكلمات المحجوزة للمستقبل:

// "use strict";
// let let = 10; // ❌ Error

/////////////////////////////////////////////////////////////////////
// === vs ==
// let a = 10;
//  a = 20;
// console.log( NaN == NaN ); // false (by definition)
// // NaN == NaN  // false
// // [] == []   // false (different references)
// // [] === []  // false (same reason)
// // null == undefined    // true (special case)
// // null === undefined   // false (different types)
// // "" == 0              // true (both falsy)
// // "" === 0             // false (string vs. number)

// console.log( 12 == "12" )

// == (Double Equals) – المقارنة مع التحويل (Loose Equality)
// تقوم بمقارنة القيمتين بعد ما تعمل تحويل تلقائي للنوع (Type Coercion).
// يعني ممكن تقارن رقم بسلسلة نصية، وهو يحوّلهم تلقائيًا ويشوف إذا كانوا متساويين

// 5 == "5"      // true ✅
// 0 == false    // true ✅
// null == undefined  // true ✅

// === (Triple Equals) – المقارنة بدون تحويل (Strict Equality)
// تقوم بمقارنة القيمة + النوع معًا، بدون أي تحويل للأنواع.

// 5 === "5"     // false ❌ (رقم vs. نص)
// 0 === false   // false ❌ (رقم vs. Boolean)
// null === undefined  // false ❌ (نوع مختلف)
// 5 === 5       // true ✅


// console.log(1 == true);   //  ture
// console.log(1 === true);  //  false
// console.log(null == 0);   //  false 
// console.log(null == undefined); // true 
//   null فقط يساوي undefined باستخدام ==.
// لكن لا يساوي 0 حتى لو كانت القيمة "فاضية
// console.log([] == 0);     // ?
// الـ [] (array فاضي) يتحول إلى string فاضي ""،
// ثم إلى 0 في المقارنة مع رقم.
// [] → "" → 0
// 0 == 0 → true

// console.log([] === 0);    // ?


///////////////////////////////////////////////////////////////////////////
// test forEach method, map method
// test();
// function test() {
//     console.log("Hello");  
// }

// const numbers = [1, 2, 3];
// numbers.forEach(num => {
//   console.log(num * 2); 
//   console.log("numbers",numbers) // Output: 2, 4, 6
// });
// console.log("numbers",numbers)


// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);  // Output: [2, 4, 6]
// console.log(numbers); // Output: [1, 2, 3]


// let x = 1;
// let y = x
// y = 2 
// x ? 
// // y ?

// let x = {age : 20}
// let y = x
// y.age = 10
// // x = ? 
// // y = ?

// let y = { ...x }



// console.log(z)


// console.log("Start");

// setTimeout(() => console.log("setTimeout 1"), 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
//   return Promise.resolve();
// }).then(() => {
//   console.log("Promise 2");
// });

// setTimeout(() => console.log("setTimeout 2"), 0);

// console.log("End");

//////////////////////////////////////////////////////////////////////
// Hoisting


// function testHoisting() {
//     console.log("Hello");   // Hello
// }
// testHoisting();

//  testHoisting();
// function testHoisting() {
//     console.log("Hello");   // Hello
// }

// var hoisting = function() {
//   console.log("Expression function");  
// }
// hoisting(); // Expression function

// hoisting(); //  TypeError: hoisting is not a function
// var hoisting = function() {
//   console.log("Expression function");  
// }

// var icon;
// console.log(icon); //  undefined
// icon = "🌞"; 

// var icon = "🌞"; 
// console.log(icon); // 🌞



// console.log(icon); // ReferenceError: Cannot access 'icon' before initialization
// let icon = "🌞";

// let icon;
// console.log(icon); // undefined
// icon = "🌞"

/////////////////////////////////////////////////////////////////////

    //  pass by value

      //  let x = "hello x1";
      //  let y = x;
      //  y=x;
      //  let z = x;
      //  x= "hello x2";

      //  console.log("x =", x);  // hello x
      //  console.log("y =", y);  // hello x
      //  console.log("z =", z);  // hello x
          
          
          
    //    pass by reference

      //  let a = {name: "hello a"};
      //  let b = a;
       
      //  b.name = "hello b";  
    //    // b = {name: "hello b"}; this will not change a
      //  let c = a;
      //  c.name = "hello c";
    //    a = {name: "hello a2"}; 

      

      //  console.log("a", a);
      //  console.log("b", b);
      //  console.log("c", c);

    //  a = {name: "hello a22"}; // this will not change b and c
    
///////////////////////////////////////////////////////////////////////////
    // shallow copy and deep copy

    // const orifinal = {
    //   name: "ahmed",
    //   address: {
    //     city: "cairo",
    //   }
    // }
    // const shallowClone = {...orifinal}; // shallow copy
    // shallowClone.name = "ali"; // this will not change the original object
    // shallowClone.address.city = "giza"; // this will change the original object
    // console.log("shallowClone", shallowClone);
    // console.log("orifinal", orifinal);
    
    // const deepClone = JSON.parse(JSON.stringify(orifinal)); // deep copy

    // let orignal = {
    //     name: "hello orignal",
    //     country:{
    //         name: "egypt",
    //         city: {
    //             name: "cairo",
    //             area : {
    //                 name: "maskan",
    //                 street : {
    //                     name: "street 1",
    //                     building: {
    //                         number: "29"
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // let orignal2 = orignal
    // orignal2.country.city.area.street.building = "30"
    // console.log("orignal2", orignal2)
    // console.log("orignal1", orignal)
    // let copy = {...orignal};
    // let deepCopyModern = structuredClone(orignal);
    // copy.country.city.area.street.name = "street 111";
    // deepCopyModern.country.city.area.street.name = "street 2";
    // console.log("orignal",orignal.country.city.area.street.name);
    // console.log("copy",copy.country.city.area.street.name);
    // console.log("deep Copy Modern", deepCopyModern.country.city.area.street.name);

  ///////////////////////////////////////////////////////////////////////
  // What Is Nullish Coalescing Operator ?? in JavaScript
 // falsey values in JavaScript are values that evaluate to false in a boolean context. These include:
 // 1. false
  // 2. 0 (zero)
  // 3. "" (empty string)
  // 4. null
  // 5. undefined
  // 6. NaN (Not a Number)
  // 7. document.all (a special object in the DOM) 

  // let result = 0 || 1; // 1
  // console.log(result);

  // let result2 = null || "default"; // "default"
  // console.log(result2);
  //// in this case, null is a falsy value, so the right-hand side ("default") is returned.
  // let result3 = undefined ?? "default"; // "default"
  // console.log(result3);
  // The nullish coalescing operator (??) returns the right-hand side value only if the left-hand side is null or undefined.

  // let result4 = "" ?? "default"; // ""
  // console.log(result4);
  // In this case, the left-hand side is an empty string, which is not null or undefined, so the left-hand side value is returned.

  // let result5 = 0 ?? "default"; // 0
  // console.log(result5);
  // Here, the left-hand side is 0, which is a falsy value but not null or undefined, so the left-hand side value is returned.

  // let result6 = false ?? "default"; // false
  // console.log(result6);
  // In this case, the left-hand side is false, which is a falsy value, but not null or undefined, so the left-hand side value is returned.
  // let result7 = NaN ?? "default"; // NaN
  // console.log(result7); 
  // Here, the left-hand side is NaN, which is a falsy value, but not null or undefined, so the left-hand side value is returned.

  // let result8 = null ?? "default"; // "default"
  // console.log(result8);

  // let result9 = undefined ?? "default" // default
  //  console.log(result8);

//////////////////////////////////////////////////////////////////////
  // Destructing Objects in JavaScript
  // Destructuring is a feature in JavaScript that allows you to extract values from objects and arrays into variables.
  // It is a way to assign multiple values from an object or array to variables in a single line of code.
  // Destructuring is a powerful feature that allows you to extract values from objects and arrays into variables in a single line of code. 

  // const user = {
  //   theName: "Osama",
  //   theAge: 39,
  //   theTitle: "Developer",
  //   theCountry: "Egypt",
  //   theColor: "Black",
  //   skills: {
  //     html: 70,
  //     css: 80,
  //   },
  // };

  // const {theName , theAge , theTitle , theCountry , theColor} = user;
  // console.log(theName);
  // console.log(theAge);
  // console.log(theTitle);
  // console.log(theCountry);
  // console.log(theColor);

// const {skills: mySkills} = user; // {html: 70, css: 80}
// console.log(mySkills);

// const {skills:{ html : H , css: C }  } = user; // {html: 70}
// console.log(H);
// console.log(C);

// const { html :h , css:c } = user.skills

// console.log(h);
// console.log(c);

  // const user = {
  //   theName: "Osama",
  //   theAge: 39,
  //   theTitle: "Developer",
  //   theCountry: "Egypt",
  //   theColor: "Black",
  //   skills: ["html", "css", "js"],
  //   adresses: {
  //     address1: "Giza",
  //     address2: "Cairo",
  //   }
  // };

  // const { theName: name, theAge: age, skills: [html, css, js], 
  //   adresses: { address1: a1 } } = user;

  // console.log(name);
  // console.log(age);
  // console.log(html);
  // console.log(css);
  // console.log(js);
  // console.log(a1);

/////////////////////////////////////////////////////////////////////////
// Destructuring Function 

//  const user = {
//     theName: "Osama",
//     theAge: 39,
//     theTitle: "Developer",
//     theCountry: "Egypt",
//     theColor: "Black",
//     skills: {
//       html: 70,
//       css: 80,
//     },
//   }

// function getTheName({theName: name} = user) {
//     console.log(name);
// }
// getTheName(user); 


/////////////////////////////////////////////////////////////////////////
// For....in  vs For....of  

// for...in
// 🔹 يستخدم للتكرار على مفاتيح (keys) الكائنات (Objects) أو المؤشرات (indexes) في الـ Arrays.

// 🔹 بيمر على كل مفتاح قابل للenumeration (حتى اللي موروث من prototype).

// const obj = { a: 1, b: 2 };

// for (const key in obj) {
//   console.log(key);  // a ثم b
//   console.log(obj[key]);  // 1 ثم 2
// }
// const arr = [10, 20, 30];

// for (const index in arr) {
//   console.log(index);    // 0 ثم 1 ثم 2
//   console.log(arr[index]); // 10 ثم 20 ثم 30
// }

// for...of
// 🔹 يستخدم للتكرار على القيم مباشرةً في Iterable (مثل: Array, String, Map, Set).

// 🔹 لا يمر على الـ keys، فقط القيم.

// const arr = [10, 20, 30];

// for (const value of arr) {
//   console.log(value);  // 10 ثم 20 ثم 30
// }
// const str = "Hi";
// for (const char of str) {
//   console.log(char); // H ثم i
// }

// let user = {
//   name: "Osama",
//   age: 39
// }

// for (const s  in user) {
//   // console.log(s); // name ثم age
//   console.log(user[s]); // Osama ثم 39
// }
// let user2 = "Asmaa";
// for (const u of user2) {
//   // console.log(u); // name ثم age
//   console.log(u); // Osama ثم 39
// };

// const arr = [
//   {10:"10"},
//   {20:"20"}, 
//   {30:"30"}
// ];

// // for (const a of arr) {
// //   console.log(a); // {10:"10"} ثم {20:"20"} ثم {30:"30"}
// // };

// for (let i in arr) {
//   console.log(i); // 0 ثم 1 ثم 2  
//   console.log(arr[i]); // {
// };

// const modelList = ['A', 'B', 'C'];

// arr.forEach((item, index) => {})  =  v-for="(item, index) in arr"
// Object.entries(obj).forEach(([key, value]) => {}) = v-for="(value, key) in obj"

// modelList.forEach((item, index) => {
//   console.log(index, item);
// });

// const obj = { name: 'Ali', age: 30 };

// Object.entries(obj).forEach(([key, value]) => {
//   console.log(key, value);
// });

// const modelList = ['A', 'B', 'C'];

// console.log(modelList.entries());
// for (const [index, item] of modelList.entries()) {
//   console.log(index, item);
// }..yh
  // console.log("hello");
  // console.log(this);


////////////////////////////////////////////////////////////////////////////////////
//  - Set Data Types And Methods
/*
- Set Data Type
  Syntax: new Set(Iterable)  // array, string, map, set, NodeList, arguments in some fumctions
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index
  يقوم بتخزين الداتا المتكررة اكتر من مرة مرة واحدة بس يعني بياخد نسخة واحدة من كل عنصر 
 Methods:
   - add
   - delete
   - clear
   - has
*/
// const user = {
//   a: 1,
//   a: 2
// }
// // console.log(user.a); // 2
// 
// const userSet = new Set(user);   
// console.log("userSet", userSet); // TypeError: object is not iterable

// let myData2 = [1, 1, 1, 2, 3 ];
// // console.log("myData2",myData2);

// let mySet = new Set(myData2);
// console.log("mySet",mySet);

// console.log(myData2[1]);  // 1
// console.log(mySet[1]); // undefined 

// add 
// mySet.add(4).add(5).add(6); // اضافة عنصر 
// console.log(mySet);

// delete 
// mySet.delete(1); // بتبحث بالرقم
// console.log(mySet);

// has
// console.log(mySet.has(1)); // بتبحث بالرقم

// clear
// mySet.clear(); // ذلك يحذف الكل
// console.log(mySet);

// دالوقت عندي كائن في عناصر متكررة هظبطه ب سيت بعدين هعمله أساين في كأن آخر
// const myNums = [1, 2, 2, 3, 3, 4, 4, 5 ,[1, 2, , ["a", 2]]];

// const mySet2 = new Set(myNums);


// // const myArray = Array.from(mySet2);
// const myArray = [...mySet2]; 

// mySet2.add(6).add(7);
// console.log(mySet2);
// console.log(myArray);

/////////////////////////////////////////////////////////////////////////////////
// Set Data Types vs WeakSet Data Types
/* 
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  -- 
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach
  Usage: Store objects and removes them once they become inaccessible
*/
// Type Of Data
// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// console.log(mySet);

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next().value); // done = false 
// console.log(iterator.next().value); // done = false 
// console.log(iterator.next().value); // done = false 
// console.log(iterator.next().value); // done = false 
// console.log(iterator.next()); // next.value = undefined  done = true 

// // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);

// const mySet = new Set([1, 2, 3, 4, 5]);
// mySet.add(6).add(7).add(8);
// mySet.delete(1);
// mySet.clear(); // this will remove all elements
// console.log(mySet.size); // 7
// mySet.clear(); // this will remove all elements
// console.log(mySet); // Set(0) {}
// console.log(mySet.has(1)); // false
// console.log(mySet.has(2)); // true
// console.log(mySet.has(6)); // true
// console.log(mySet.has(9)); // false


///////////////////////////////////////////////////////////////////////////
///////  Map Data Type Vs Object Data Type   /////////////////////////
 /*Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Object To Store Key/Value Pairs
  -- Can Access Elements By Key
   ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion  
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map

  Methods:
   - set  - get  - delete  - has - clear
  Properties:
   - size
  Iterators:
   - keys - values- entries
  Usage: Store Key/Value Pairs
*/

// Example: create an object
// let myObject = {}
// let myObject2 = Object.create({}); 
// let myObject3 = new Object();
// let myObject4 = Object.create(null);  // Object without prototype

// console.log("myObject", myObject); // {} without prototype
// console.log("myObject2", myObject2); // {} with prototype
// console.log("myObject3", myObject3); // {} with prototype
// // مفيش أي اختلاف بينهم
// console.log("myObject4", myObject4); // {} without prototype

// const map = new Map();
// map.set('name', 'Osama');
// map.set('age', 39);
// console.log(map.get('name')); // Osama
// console.log(map.get('age')); // 39

// let myObject = {
//   10: "Number 10",
//   "10": "String 10",
// }
// myObject[20] = "Number 20";  // إضافة مفتاح جديد
// myObject["newKey"] = "New Value";  // إضافة مفتاح نصي
// // delete myObject[10];  // حذف المفتاح 10
// console.log(myObject[10]); // String 10 not Number 10 becouse "10" make override the 10 key
// console.log(myObject["10"]); // String 10

// let myNewMap = new Map([]);
// myNewMap.set(10, "Number 10");
// myNewMap.set("10", "String 10");
// myNewMap.set({a:1, b:2}, "object");
// myNewMap.set([1, 2, 3], "array");
// myNewMap.set(function() {}, "function");
// myNewMap.set(null, "null");
// myNewMap.set(undefined, "undefined");
// myNewMap.set(NaN, "NaN");
// myNewMap.set(true, "true");
// myNewMap.set(false, "false");

// myNewMap.delete(10); // remove the key 10

// console.log(myNewMap.get(10)); // Number 10
// console.log(myNewMap.get("10")); // String 10
// console.log(myNewMap.get({a:1, b:2})); // undefined (different object reference)
// console.log(myNewMap.get([1, 2, 3])); // undefined (different array reference)
// console.log(myNewMap.get(function() {})); // undefined (different function reference)
// console.log(myNewMap.get(null)); // null
// console.log(myNewMap.get(undefined)); // undefined  
// console.log(myNewMap.get(NaN)); // NaN
// console.log(myNewMap.get(true)); // true
// console.log(myNewMap.get(false)); // false


// has 
// console.log(myNewMap.has(10)); // true
// console.log(myNewMap.has("10")); // true
//del`ete
// myNewMap.delete(10); // remove the key 10

//clear
// myNewMap.clear(); // this will remove all elements

/// size property
//  1- myObject
// let count = 0;
// for (let key in myObject) {
//   if (myObject.hasOwnProperty(key)) {  // لضمان أن الخاصية ليست موروثة
//     count++;
//   }
// }
// console.log("count", count);  // 3
// console.log("length", Object.keys(myObject).length); // 1 (only one key "10")
//  2- myNewMap
// console.log("myNewMap.size", myNewMap.size); // 10 (10 key-value pairs)
// "myNewMap.size", myNewMap.size); // 10 (10 key-value pairs)

// console.log("###########");

// console.log(myObject); // { '10': 'String 10' }
// console.log(myNewMap); // Map(2) { 10 => 'Number 10', '10' => 'String 10' }

/////////////////////////////////////////////////////////////////////////
// Maps vs. Objects in JavaScript 

  // Maps and Objects are both used to store key-value pairs in JavaScript, but they have some differences:
  // 1. Key Types:
  //    - Maps can have keys of any type (including objects, functions, and primitives).
  //    - Objects can only have strings and symbols as keys.  

  // var obj = {
  //   name: "John",
  //   age: 30,
  //   getName: function() {
  //     console.log(this);
  //   }
  // }
  // obj.getName();
  // console.log(this.obj.age); // `30` ==(if `obj` is in the global scope)
  // - Objects do not guarantee (يضمن) the order of keys, although modern JavaScript engines typically maintain the order of string keys.
  // var ted = "Ted";
  // function testThis() {
  //   var obj2 = {
  //     name: "Smith",
  //     age: 25
  // };
  // console.log(this.obj2); // `undefined` 
    // (if `obj2` is not in the global scope)
    // If `obj2` is not defined in the global scope, this will throw an error.
    // If `obj2` is defined in the global scope, it will log the object.
  // console.log(this.ted); // `Ted` 
  // console.log(this); // 
  // }testThis();

  // function testThis2() {
  //   console.log(this);
  // }
  // testThis2();

  //    insertion order.
  //    - Objects do not guarantee the order of keys, although modern JavaScript engines typically    
  //      maintain the order of string keys.
  // 3. Size:
  //    - Maps have a size property that returns the number of key-value pairs.
  //    - Objects do not have a built-in size property, but you can use Object

  //      keys(obj).length to get the number of keys.
  // 4. Performance:
  //    - Maps are generally more efficient for frequent additions and removals of key-value pairs.
  //    - Objects are more efficient for static key-value pairs.
  // 5. Methods:
  //    - Maps have built-in methods like set(), get(), has(), and delete()
  //    - Objects have methods like Object.keys(), Object.values(), and Object.entries() for working with keys and values.
  // 6. Prototype:
  //    - Maps do not have a prototype, so they do not inherit properties from Object.prototype.
  //    - Objects inherit properties from Object.prototype, which can lead to unexpected behavior if you use keys that conflict with prototype properties.
  // 7. Use Cases:
  //    - Maps are suitable for scenarios where you need to frequently add, remove, or check for key-value pairs, especially when keys are not strings.
  //    - Objects are suitable for scenarios where you have a fixed set of string keys and
  //      want to represent structured data, like JSON objects.
  // Example of using a Map:
  // const myMap = new Map();
  // myMap.set('key1', 'value1');
  // myMap.set(2, 'value2');
  // myMap.set({}, 'value3'); 
  // console.log(myMap.get('key1')); // Output: value1
  // console.log(myMap.get(2)); // Output: value2
  // console.log(myMap.get({})); // Output: undefined (different object reference)
  // console.log(myMap.size); // Output: 3
  // Example of using an Object:
  // const myObject = {
  //   key1: 'value1',
  //   key2: 'value2',
  //   key3: 'value3'

  // };
  // console.log(myObject.key1); // Output: value1  


  //////////////////////////////////////////////////////////////////////////////////
  // - Map vs weakMap Data Type
  /*
    - Map vs WeakMap
    "
      WeakMap Allows Garbage Collector To Do Its Task But Not Map.
    "
    --
    Map     => Key Can Be Anything
    WeakMap => Key Can Be Object Only
    --
  */
  // let mapUser = {theName: "ahmed"}

  // let myMap = new Map();
  // myMap.set(mapUser, "object value");

  // // console.log("mapUser", mapUser)
  // // console.log("myMap", myMap);
  // // console.log("myMap.get(mapUser)" ,myMap.get(mapUser));

  // mapUser = null  // override on the reference
  // console.log(mapUser, "mapUser") // null
  // console.log(myMap, "myMap") // Map(1) { { theName: 'ahmed' } => 'object value' }
  // // The map still holds a reference to the object, so it won't be garbage collected.
  // console.log("#".repeat(10))

  // let wMapUser = {theName: "ahmed"}
  // let wMapUser2 = {theName2: "ahmed2"}
  // let myWeatMap = new WeakMap();

  // myWeatMap.set("name", "value")
  // console.log("wMapUser" , wMapUser) // Erorr

  // myWeatMap.set(wMapUser, "value")
  // myWeatMap.set(wMapUser2, "value2")
  // console.log(myWeatMap, "w Map User")


  ////////////////////////////////////////////////////////////////////////////
  // - Array.from Method
  /*
  - Array.from Method
  - Converts an iterable or array-like object into an array.
  - Syntax: Array.from(Iterable, MapFunc, This)
  - Iterable: An object that can be iterated over (like arrays, strings, sets
    maps, etc.).
  - MapFunc: An optional mapping function to apply to each element.
  - This: An optional value to use as the this parameter in the mapping function.
  - Returns a new array containing the elements of the iterable or array-like object.
  - Usage: Convert strings, sets, or other iterable objects into arrays.
 
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

// console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o'] 
// // console.log(Array.from(1, 2, 3)); // TypeError not iterable 
// console.log(Array.from("12345", function (n) {
//     return +n * +n;
// })); // [1, 4, 9, 16, 25]

// let myArray = [1,1,1,2,3,4];

// let mySetArray = new Set(myArray);
// console.log("mySetArray" ,mySetArray); // Set(4) { 1, 2, 3, 4 }
// console.log("Array from mySetArray" ,Array.from(mySetArray)); // [1, 2, 3, 4]
// console.log("using spread operator", [...new Set(myArray)]); // [1, 2, 3, 4] using spread operator


// function myFunction() {
//   return arguments; // returns an array-like object called "arguments"
// }
// console.log(myFunction(1, 2, 3)); // { '0': 1, '1': 2, '2': 3 } // iterable object
// console.log(myFunction("1", "2", "3")); // { '0': '1', '1': '2', '2': '3' }  itrable object 

// function myFunction2() {
//   return Array.from(arguments); // converts the arguments object to an array
// }
// console.log(myFunction2(1, 2, 3)); // [1, 2, 3] // array
// console.log(myFunction2("1", "2", "3")); // ['1', '2', '3'] // array

//  - Example: 
//  Array.from("Hello") // ['H', 'e', 'l', 'l', 'o']
//   - Example: 
//   Array.from([1, 2, 3], x => x * 2) // [2, 4, 6]
//   - Example:
//    Array.from(new Set([1, 2, 3, 3, 4])) // [1, 2, 3, 4]
//   - Example:
//    Array.from(arguments) // Converts arguments object to an array 
//   - Example: 
//   Array.from({ length: 5 }, (_, i) => i + 1) // [1, 2, 3, 4, 5]
//   - Example: 
//   Array.from(document.querySelectorAll("div")) // Converts NodeList to an array
//   - Example: 
//   Array.from({ 0: "a", 1: "b", 2: "c", length: 3 }) // ['a', 'b', 'c']
//   - Example: 
//   Array.from({ length: 3 }, (_, i) => i * 2) // [0, 2, 4]
//   - Example:
//    Array.from("12345", n => +n * +n) // [1, 4, 9, 16, 25]
//   - Example:
//    Array.from([1, 2, 3], (n, i) => n + i) // [1, 3, 5]
//   - Example:
//    Array.from(new Set([1, 2, 3, 3, 4]), n => n * 2) // [2, 4, 6, 8]
//   - Example: 
//   Array.from({ length: 3 }, (_, i) => i + 1) // [1, 2, 3]