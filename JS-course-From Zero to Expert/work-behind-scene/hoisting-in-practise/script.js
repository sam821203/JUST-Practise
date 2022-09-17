'use strict';

// console.log(me);

var me = 'Sam';
let job = 'Designer';
// console.log(job);

const year = 1993;
// console.log(year);

// functions
// console.log(addDecl(2, 3));
// console.log(addExpr);
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(!numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
