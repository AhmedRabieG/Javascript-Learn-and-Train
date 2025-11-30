// 2-call stack amd memory heap

// يقوم js enjine بقراءة الكود يتاعي وتنفيذه لكن يحتاج مكان عشان يخزن فيه التعليمات البرمجية بتاعتي 
//  في البداية بيتم تخصيص مساحة في الذاكرة عشان يخزن فيها الكود بتاعي
// ودي بتتسمى memory heap

let nAge = 20;
let nName = 'ali';
function some() {
    return nAge + 10;
}

// بعد كده بيتم تخصيص مساحة في الذاكرة عشان يخزن فيها المتغيرات بتاعتي بداخل ال memory heap
// بعد تخزين الكود كده محتاج انفذه  excution وده بيتم عن طريق ال call stack
// ده معناه ان ال  call stack بيقوم بتنفيذ الكود بتاعي سطر بسطر اثناء عملية ال excution
// وده بيتم عن طريق دفع وسحب ال functions اللي بتتنفذ جوا ال call stack

// ال call stack هو عبارة عن هيكل بيانات بيشتغل بنظام LIFO  (last in first out)
// يعني اخر حاجة دخلت في ال call stack هي اول حاجة هتخرج منه
// ال call stack بيشتغل عن طريق دفع و سحب ال functions اللي بتتنفذ
// لما بنادي علي دالة بتتضاف في ال call stack و لما الدالة تخلص تنفيذها بتتشال من ال call stack

// مثال
function first() {
    console.log("inside first function");
}
function second() {
    first();
    console.log("inside second function");
}
function third() {
    second();
    console.log("inside third function");
}
function forth() {
    third();
    console.log("inside forth function");
}

forth();
// call stcak عندي كأنه وعاء بينفذ الكود اللي بيدخل جواه واول كود بيدخل اخر كود بيخرج منه
  /**                   
    *       call stack           *
    *                            *
    *                            *
    *         first();           *
    *         second();          *
    *         third();           *
    *         forth();           *
    */
// الترتيب المتوقع للطباعة:
// inside first function
// inside second function
// inside third function
// inside forth function
// وده لان ال call stack بينفذ الكود اللي جواه من فوق لتحت  

// what is stack overflow ?
// js enjine لا تعتبر infinity in size
// يعني مش ممكن يكون ال call stack كبير جدا لدرجة انه يقدر يشيل عدد لا نهائي من الدوال
// لو حاولت استدعي دالة بشكل متكرر بدون شرط انهاء
// هيحصل overflow لل call stack لان ال call stack هيبقي مليان بالدوال المستدعاة
// وده هيخلي ال js enjine يوقف التنفيذ ويطلعلي error

function foo() {
    foo(); // استدعاء ذاتي بدون شرط انهاء   
}
// foo();
// هيطلع لي error لان ال call stack هيبقي مليان بالدوال foo المستدعاة


// ملحوظة مهمة جدا
// ال call stack بيشتغل مع ال synchronous code 
// اما ال asynchronous code فبيشتغل معاه ال event loop 
// وده موضوع تاني محتاج شرح منفصل

// ملحوظة تانية مهمة
// لو في خطأ في الكود بتاعي هيظهرلي في ال call stack
// وده بيساعدني في اكتشاف الاخطاء وتصحيحها بسهولة
// مثال لو ناسي اعمل استدعاء لدالة معينة

function sayHello() {
    console.log("hello world");
}   
// sayHello(); // خطأ في الاسم

// هيظهرلي في ال call stack ان في خطأ في السطر اللي فيه استدعاء الدالة
// وده بيساعدني في اكتشاف الخطأ وتصحيحه بسرعة       
// ملحوظة اخيرة
// ال call stack ليه حجم محدود
// يعني لو في دالة بتستدعي نفسها بشكل متكرر بدون شرط انهاءها
// هيخلي ال call stack يتحصل بسهولة
// وده لان ال call stack ليه حجم محدود      
// مثال

// function recursive() {
//     recursive();
// }

// recursive();
// هيحصل خطأ في ال call stack لان الدالة recursive بتستدعي نفسها بشكل متكرر
// وده هيخلي ال call stack يمتلئ بسرعة و يحصل خطأ
// وده بيساعد في حماية الذاكرة من الاستهلاك الزائد
// ملحوظة اخيرة جدا
// ال call stack مش مسؤول عن تخزين المتغيرات و البيانات بتاعتي
// ده دور ال memory heap اللي بيخزن فيها المتغيرات و البيانات
// و ال call stack مسؤول عن تنفيذ الكود بتاعي بسهولة    
