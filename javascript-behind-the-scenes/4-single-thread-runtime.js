// 4- single thread and runtime


// معني single thread 
// ان ال javascript engine بيشتغل بخيط واحد بس
// وده معناه ان ال javascript engine بيقدر ينفذ عملية واحدة في نفس الوقت
// وده بيخلي ال javascript engine بسيط وسهل في التنفيذ
// بس في نفس الوقت بيخلي ال javascript engine محدود في الاداء
// لان لو في عملية بتاخد وقت طويل في التنفيذ
// هتأخر باقي العمليات اللي محتاجة تتنفذ بعد كده
// وده ممكن يسبب بطء في الاداء و تجربة مستخدم سيئة
// علشان كده في تقنيات زي ال asynchronous programming
// و ال web workers اللي بتساعد في تحسين الاداء
// و بتسمح بتنفيذ عمليات متعددة في نفس الوقت
// وده بيتم عن طريق انشاء خيوط جديدة بتشتغل بشكل مستقل عن ال single thread الرئيسي
// وده موضوع محتاج شرح منفصل    

// ازاي ال single thread بيشتغل ؟
// ال single thread بيشتغل عن طريق ال call stack
// ال call stack هو المكان اللي بيتم فيه تنفيذ الكود بتاعي سطر بسطر
// وده بيتم عن طريق دفع و سحب ال functions اللي بتتنفذ جوا ال call stack
// لما بنادي علي دالة بتتضاف في ال call stack و لما الدالة تخلص تنفيذها بتتشال من ال call stack
// وده معناه ان ال call stack بينفذ الكود اللي جواه من فوق لتحت
// وده بيخلي ال javascript engine ينفذ عملية واحدة في نفس الوقت
// ده يعتبر synchronous execution

// في عندي  نوع تاني من ال execution اسمه asynchronous execution
// وده بيتم عن طريق ال web api و ال event loop
// وده بيسمح بتنفيذ عمليات متعددة في نفس الوقت
// وده بيتم عن طريق انشاء خيوط جديدة بتشتغل بشكل مستقل عن ال single thread الرئيسي
// وده موضوع محتاج شرح منفصل    

// web api هو مكان خارج ال javascript engine
// بيتم فيه تنفيذ العمليات اللي بتاخد وقت طويل زي ال network requests, timers, DOM events
// وده بيتم عن طريق ان ال javascript engine بيبعت العملية دي لل web api
// وبيكمل تنفيذ باقي الكود بتاعه في ال call stack
// ولما العملية تخلص في ال web api
// ال web api بيبعت النتيجة بتاعتها لل callback queue
// وبيكمل تنفيذ باقي الكود بتاعه في ال call stack
// ال web api مش جزء من ال javascript engine و هو مكان خارجه بيكون جزء من ال browser او ال runtime environment زي ال node.js

// أمثلة علي ال web api
// 1- setTimeout و setInterval
// 2- DOM events زي click, scroll, keypress
// 3- AJAX requests زي XMLHttpRequest, fetch API
// 4- Promises و async/await
// 5- WebSockets
// 6- Geolocation API
// 7- Canvas API
// 8- Audio/Video API
// 9- Web Workers
// 10- IndexedDB
// 11- Service Workers


// ملحوظة مهمة
// ال single thread مش معناه ان ال javascript engine مش بيقدر يتعامل مع اكتر من حاجة في نفس الوقت
// لان في حاجات زي ال web api و ال event loop اللي بتساعد في التعامل مع اكتر من حاجة في نفس الوقت
// وده بيتم عن طريق ان ال javascript engine بيستخدم ال single thread في تنفيذ الكود بتاعيه  
// وبيستخدم ال web api في التعامل مع العمليات اللي بتاخد وقت طويل زي ال network requests, timers, DOM events
// وبيستخدم ال event loop في تنسيق بين ال single thread و ال web api
// وده بيخلي ال javascript engine يقدر يتعامل مع اكتر من حاجة في نفس الوقت بشكل فعال    
// مثال توضيحي

console.log("Start");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);
console.log("End");

// الترتيب المتوقع للطباعة:
// Start
// End
// Inside setTimeout
// في المثال عندي 3 عمليات بتتم
// العملية الاولاني هي console.log("Start");
// ودي بتتنفذ علي طول لانها عملية سريعة
// العملية التانية هي setTimeout
// ودي بتاخد وقت طويل لانها بتستني 2 ثانية قبل ما تنفذ الكود اللي جواها
// العملية الثالثة هي console.log("End");
// ودي بتتنفذ علي طول بعد العملية الاولانيه لانها عملية سريعة
// وده معناه ان ال javascript engine بيشتغل بخيط واحد بس
// فبيتنفذ العملية الاولانيه وبعدين التالته وبعدين التانية بعد ما تخلص وقت الانتظار بتاعها
// وبيتنفذ العملية الثالثة بعد كده
// وده بيخلي ال javascript engine بسيط وسهل في التنفيذ
// بس في نفس الوقت بيخلي ال javascript engine محدود في الاداء
// لان لو في عملية بتاخد وقت طويل في التنفيذ
// هتأخر باقي العمليات اللي محتاجة تتنفذ بعد كده
// وده ممكن يسبب بطء في الاداء و تجربة مستخدم سيئة

// ازاي ال single thread بيشتغل مع ال asynchronous programming ؟
// بيشتغل مع ال asynchronous programming لانه يستخدم ال single thread في التنفيذ الكود بتاعيه

// وبيستخدم ال web api في التعامل مع العمليات اللي بتاخد وقت طويل زي ال network requests, timers, DOM events
// وبيستخدم ال event loop في تنسيق بين ال single thread و ال web api
// وده بيخلي ال javascript engine يقدر يتعامل مع اكتر من حاجة في نفس الوقت بشكل فعال
// مثال توضيحي
console.log("Start");    
setTimeout(() => {
    console.log("Inside setTimeout");    
}, 2000);    
console.log("End");    
// الترتيب المتوقع للطباعة:
// Start
// End
// Inside setTimeout        
// في المثال عندي 3 عمليات بتتم