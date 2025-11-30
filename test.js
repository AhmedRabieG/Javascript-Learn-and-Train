


// console.log("start ");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise resolved");
// });
// console.log("end");


// const arr = [1, 2, 3, 4, 5]; 
///////////////////////////////////////////////////////////////////////
// test call stack working

// console.log("A");
// console.log("B");
// console.log("C");

// with function
// function first() {
//   console.log("inside first function");
//   console.log("end of first function");
// }

// function second() {
//   console.log("inside second function");

//   console.log("end of second function");
// }
// function third() {
//   console.log("inside third function");
//   console.log("end of third function");
// }
// first();
// second();


// function a() {
//   console.log("A start");
//   b();
//   console.log("A end");
// }

// function b() {
//   console.log("B start");
//   c();
//   console.log("B end");
// }

// function c() {
//   console.log("C");
// }

// a();

// في فرق بين ان انادي علي دالة و بين ان الدالة تنادي علي دالة تانية
// لما انادي علي مجموعة دوال ورا بعض بيتنفذوا عادي ورا بعض وهنا مش بيتطبق مبدأ first in last out
// لكن لما دالة تنادي علي دالة تانية بيتطبق مبدأ first in last out
// لان الدالة اللي اتنادت بتتنفذ الاول و بعدين بترجع تاني للدالة اللي نادتها و بتتنفذها

///////////////////////////////////////////////////////////////////////


// let x = 10;
// const y = 20;
// var z = 30;

// console.log("x in window =", window.x);
// console.log("y in window =", window.y);
// console.log("z in window =", window.z);


// let x = 10;

// function test() {
//   // TDZ لـ x المحلي بدأ هنا! 🚫
//   console.log(x); // ReferenceError (مش 10!) 
//   // ReferenceError: can't access lexical declaration 'x' before initialization
//   let  = 20; // TDZ انتهى ✅
//   //لو غيرت قيمه اسم المتغير هيبقي عادي وهيشوف المتغير اكس اللي برا الفنكشن
// }
// test();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("setTimeout",i), 100);
// }
// // Output: 3, 3, 3 

// console.log(i); // 3 (طلع برة!)


function createCounters() {
  var counters = [];
  
  for (var i = 0; i < 3; i++) {
    counters.push(function() {
      console.log(i);
    });
  }
  
  return counters;
}

const c = createCounters();
c[0](); // 3 
c[1](); // 3 
c[2](); // 3 