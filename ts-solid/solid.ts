
 //S.O.L.I.D stands for:

// Single Responsibility Principle (SRP): A class should have only one reason to change.
// Instead of combining multiple responsibilities in one class,
// separate them into different classes like UserService and UserDatabaseService.
// SRP Example in TypeScript
class UserService {
  getUsers() {
    // Fetch users from the server
  }

  saveUser(user) {
    // Save user data to the database
  }
}


// Open/Closed Principle (OCP): Software entities (classes, modules, functions) should be open for extension but closed for modification.
// We can easily add new shapes (e.g., Triangle) without modifying existing code.
// OCP Example in TypeScript
class Shape {
  area() {}
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}


// Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types without altering the correctness of the program.
// LSP Example in TypeScript
class Bird {
  fly() {}
}

class Sparrow extends Bird {
  // Sparrows can fly.
  fly() {
    // Implement flying behavior for Sparrows.
  }
}

class Penguin extends Bird {
  // Penguins cannot fly.
}

function makeBirdFly(bird: Bird) {
  bird.fly();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

makeBirdFly(sparrow); // Works fine
makeBirdFly(penguin); // Works fine, even though penguins don't fly.


// Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use.
// Instead of having a single monolithic interface, break it down into smaller interfaces.
// ISP Example in TypeScript
interface Worker {
  work();
  eat();
}

class Engineer implements Worker {
  work() {
    // Engineer's work
  }

  eat() {
    // Engineer's eating habits
  }
}

class Waiter implements Worker {
  work() {
    // Waiter's work
  }

  eat() {
    // Waiter's eating habits
  }
}

// Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. 
//Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
// DIP Example in TypeScript
interface Switchable {
  operate();
}

class LightBulb {
  turnOn() {}
  turnOff() {}
}

class Switch {
  private bulb: LightBulb;

  constructor(bulb: LightBulb) {
    this.bulb = bulb;
  }

  operate() {
    // Toggle the bulb
  }
}

// Instead of having Switch directly depend on LightBulb, use an interface to abstract the dependency.
interface Switchable {
  operate();
}

class BetterSwitch {
  private device: Switchable;

  constructor(device: Switchable) {
    this.device = device;
  }

  operate() {
    this.device.operate();
  }
}

const bulb = new LightBulb();
const switchButton = new BetterSwitch(bulb);

// Now, the switch can work with any device that implements the Switchable interface, not just LightBulb.
