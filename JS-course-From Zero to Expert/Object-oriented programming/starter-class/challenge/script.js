class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(this.speed += 10);
  }
  brake() {
    console.log(this.speed -= 5);
  }

  // Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
  get speedUS() {
    return this.speed / 1.6;
  }

  // Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;

console.log(ford);
ford.accelerate();

// Test data:
// - Data car 1: 'BMW' going at 120 km/h