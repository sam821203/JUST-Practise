

// object literal
let user = {
  name: "Wally",
  admin: false,
};

console.log(user);

// use a constructor function to create a new user
class Member {
  constructor(username) {
    'use strict';
    console.log(new.target);
    this.name = username;
    this.admin = false;
    console.log(this);
  }
}

let user1 = new Member("Sam");
console.log(user1);

// let user2 = new Member("Julie");
// console.log(user2);

// let user3 = new Member("John");
// console.log(user3);