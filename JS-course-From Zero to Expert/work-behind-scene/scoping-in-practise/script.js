'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      var millennial = true;
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // 這裡是重新賦予值，不是創新的變數，所以在外面一樣吃得到
      output = 'New output';
    }
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Sam';
calcAge(1993);
