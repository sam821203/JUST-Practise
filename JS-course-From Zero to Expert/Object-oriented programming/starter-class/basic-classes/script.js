// class expression
// const PersonCl = class {

// }

// class declaration
class PersonInfo {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`${this.firstName} says hello!`);
  }
}

const jessica = new PersonInfo('Jessica', 1996);
console.log(jessica);

jessica.calcAge();
console.log(jessica.__proto__ === PersonInfo.prototype);

// PersonInfo.prototype.greet = function() {
//   console.log(`${this.firstName} says hello!`);
// }
jessica.greet();

// 1.classes are not hoisted
// 2.classes are first-class citizens
// 3.in classes, always strict mode
