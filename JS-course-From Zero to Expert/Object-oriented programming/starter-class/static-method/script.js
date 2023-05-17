const Person = function(firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
}
const user1 = new Person('Sam', 1993);
const user2 = new Person('Matilda', 2000);

Person.prototype.calcAge = function() {
  console.log(2023 - this.birthYear);
}

Person.hey = function() {
  console.log('Hey there!');
} 

console.log(Person.prototype);
Person.hey();
