
console.log("Interview revision file loaded");

//////////////////////////////////////////////////////////
// 1. Event Loop والـ Asynchronous Programming
//  هو كود بيفضل يشيك علي ال 
// Call Stack وال callback Queue
// بيتم تنفيذ ما بداخل الكول باك فقط عندما يكون الكول ستاك فاضي 
// اذا في مهمة في الكول ستاك تستدعي الوصول الي  wep api زي setTimeout او طلب بيانات من سيرفر
// بيتم ارسالها للويب ابي و بعدين لما تخلص المهمة بتروح لل callback Queue
// و لما يكون الكول ستاك فاضي بتروح المهمة من ال callback Queue للكول ستاك و بتتنفذ 
// وده اللي بيخلي ال جافاسكريب 
// single threaded لكن بنفس الوقت non bloking i/o 
// javascript مثال متقدم لفهم ترتيب التنفيذ

// يعني ايه  single threaded ؟
// معني single threaded ان جافاسكريبت بتنفذ كود واحد في نفس الوقت 
// يعني لو في كود بياخد وقت طويل في التنفيذ هيخلي باقي الكود يستني لحد ما يخلص 
// وده ممكن يسبب مشاكل في الاداء لو في عمليات كتير بتاخد وقت طويل

// مثال توضيحي:
// console.log('log 1'); // Call Stack - فوري
// console.log('log 2'); // Call Stack - فوري

// setTimeout(() => console.log('log 3'), 0); // Macro Task Queue or callback Queue

// console.log('log 4'); // Call Stack - فوري          
// Promise.resolve().then(() => console.log('log 5')); // Micro Task Queue or callback Queue

// console.log('log 6'); // Call Stack - فوري

// الترتيب المتوقع للطباعة:
// log 1
// log 2
// log 4
// log 6
// log 5
// log 3
// ليه 5 قبل 3 ؟
// لان ال Micro Task Queue ليها اولوية اعلي من ال Macro Task Queue


// مثاال تاني:

// console.log('1'); // Call Stack - فوري

// setTimeout(() => console.log('2'), 0); // Macro Task Queue or callback Queue

// Promise.resolve().then(() => console.log('3')); // Micro Task Queue or callback Queue

// console.log('4'); // Call Stack - فوري

// الترتيب المتوقع للطباعة:
// 1
// 4
// 3
// 2


//////////////////////////////////////////////////////////
// 2. فهم الـ Closures