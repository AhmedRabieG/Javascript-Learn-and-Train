// 1- javascript engine 
// javascript engine is the core of the browser and it is responsible for executing the code and rendering the web page.
// هو عبارة عن برنامج بيقوم بتحويل كود الجافاسكريبت الي كود ممكن للكمبيوتر يفهمه و ينفذه
// و بيشمل علي مكونات زي ال call stack, memory heap, web api, callback queue, event loop
// و بيختلف من متصفح للتاني زي V8 في جوجل كروم, SpiderMonkey في فايرفوكس, JavaScriptCore في سفاري

// 2- ايه اللي بيحصل بداخل javascript engine ؟
// اول حاجة بتحصل هي ان الكود بيتحول من نص عادي الي 
// Abstract Syntax Tree (AST) عن طريق ال parser
// بعد كده ال AST بيتحول الي bytecode عن طريق ال interpreter
// و في بعض المحركات زي V8 بيتم تحويل ال bytecode الي machine code عن طريق ال compiler
// و في الاخر ال machine code بيتم تنفيذه علي ال CPU

// =>  jsavascript source code  --(parser)--> Abstract Syntax Tree  AST   --(interpreter)-->  
// bytecode  --(compiler)-->  machine code  --(execution)--> CPU

// => طريقة add in time compilation
// هي نوع من ال compilation اللي يقوم بترجمة الكود قبل التشغيل
// يعني الكود بيتحول من نص عادي الي machine code 
// وده قبل ما اشغل الكود او انفذه علي ال CPU
// و يتم ترجمته قبل التشغيل زي ال traditional compiler


// => jit compiler  هو نوع من ال compiler اللي بيقوم بترجمة الكود في وقت التشغيل
// بدل ما يتم ترجمته قبل التشغيل زي ال traditional compiler
// و ده بيساعد في تحسين الاداء لان ال jit compiler بيقدر يستغل معلومات وقت التشغيل
// زي نوع البيانات و نمط الاستخدام لتحسين الكود المترجم
// اسم الطريقة دي  Just In Time compilation JIT
// محتاج شرح مفصل لل jit compiler 

function load(obj) {
    return obj.x;
}
load({ x: 20, z: 'hello 20' });
load({ x: 30, z: 'hello 30' });

// شرح ال jit compiler ازاي بيحسن الاداء في المثال ده
// في الكود الاول يقوم ال jit compiler بتحليل الكود و بيكتشف ان الدالة load
// دايما بتاخد كائن فيه خاصية x من نوع رقم
// فبيقوم بترجمة الكود الي machine code محسن بيستخدم نوع البيانات ده
// وده بيخلي تنفيذ الكود اسرع في المرات اللي بعد كده
// لان ال jit compiler مش محتاج يعيد تحليل الكود من الاول للنهاية   

load({ x: 'kkk', z: 'hello 30' });
// في الكود التاني بيحصل تغيير في نوع البيانات
// لان الخاصية x بقت من نوع نص بدل رقم
// فبيضطر ال jit compiler يعيد تحليل الكود و يعيد ترجمته
// وده ممكن يسبب بطء في الاداء مقارنة بالكود الاولاني
// لان ال jit compiler محتاج يعيد شغل عملية التحليل و الترجمة من الاول للنهاية  

const obj1 = {
    id: 1,
    name: 'ali',
}
const obj2 = {
    id: 2,
    name: 'mohamed',
}
// في المثال عندي كائنين متفقين بنوع البيانات ومختلفين في الاسم 
// هنا بيقدر يحسم علي الكود ويوصله بشكل اسرع لان ال jit compiler بيقدر يحسم علي الكود   
// 



// => طريقة eval()
// هي نوع من ال execution اللي يقوم بتنفيذ الكود على ال CPU 
// بدل ما يتم تنفيذه قبل التشغيل زي ال interpreter
// و ده بيساعد في تحسين الاداء لان ال eval() بيقدر يستغل معلومات وقت التشغيل
// زي نوع البيانات و نمط الاستخدام لتحسين الكود المتنفذ
// اسم الطريقة دي  Just In Time execution JIT



function jsEngine(code) {
    return code.split(/\s+/); // Simple tokenizer that splits code by whitespace
} 
console.log("jsEngine function", jsEngine('var x = 10;'));  // ['var', 'x', '=', '10;']

// 3- شرح مكونات javascript engine