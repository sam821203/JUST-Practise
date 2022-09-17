'use strict';

console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1993);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

const sam = {
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

sam.calcAge();

const jonas = {
  year: 1980,
};
jonas.calcAge = sam.calcAge;
jonas.calcAge();

const f = sam.calcAge;
console.log(f);
