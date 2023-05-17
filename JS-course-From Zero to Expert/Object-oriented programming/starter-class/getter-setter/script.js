class PersonInfo {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance method
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`${this.fullName} says hello!`);
  }

  get age() {
    return (2023 - this.birthYear);
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

// static methods
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonInfo('Jessica Davis', 1996);
console.log(jessica);

const account = {
  owner: 'Sam',
  movements: [200, 530, 1200, 200],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const walter = new PersonInfo('Walter Chang', 1978);

PersonInfo.hey();