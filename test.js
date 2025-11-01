


console.log("start ");
setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});
console.log("end");


const arr = [1, 2, 3, 4, 5]; 