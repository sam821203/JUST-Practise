// in order to learn about JSON, oyu need to understand Objects and Arrays

// JS 的 Objects
let car = {
  make: "bmw",
  year: 2025,
  color: "red",
}

console.log(car);

// JS 的 Arrays
let coolCars = ['bmw', 'toyta', 'audi'];
console.log(coolCars);

// combine arrays and objects
let randomVariable = [{}, {}, {}]

// JS Object
let user = {
  firstName: "Wally",
  secondName: "yu hao",
  getName: function() {
    console.log(`First Name: ${this.firstName}, Surname: ${this.secondName}`);
  }
}

user.getName();

// JSON Object
let jsonData = '[{"firstName": "Wally"}, {"secondName": "yu hao"}]';

let JSObject = JSON.parse(jsonData);
console.log(JSObject);