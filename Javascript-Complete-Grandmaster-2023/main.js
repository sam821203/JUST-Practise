// let t1 = new Date();
// console.log("time: ", t1);
// console.log("element", document.getElementById("orderMatter"));
// while (new Date() < t1 + 5000) {
//   // do nothing
// }

// console.log("finished at", new Date());

console.log(typeof null);
console.log(null + 1);
console.log(null - 10);

console.log(!null);
console.log(null == false);

let person = { name: "Wally", age: 41 };
person = null;
person;
console.log(typeof person);

var a;
console.log(a);
console.log(a + 10);

console.log(null == undefined);
console.log(null === undefined);
console.log(undefined * 10);
console.log(undefined + 10);

console.log("HI" + 10);
console.log("HI" * 10);

console.log(typeof NaN);
console.log(NaN > 1);
console.log(NaN < 1);
console.log(NaN == NaN);
console.log(isNaN(NaN));
