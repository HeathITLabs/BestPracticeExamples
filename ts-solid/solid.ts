/**
 * solid.ts
 * Author: J.A.Heath
 * Company: Heath IT Labs
 * Copyright (c) 2023 J.A.Heath
 * This code is licensed under the GNU General Public License (GPL).
 */

/**
 * S.O.L.I.D Programming Principles Examples in TypeScript
 */

/**
 * Single Responsibility Principle (SRP)
 * A class should have only one reason to change.
 */

 class UserService {
  // Fetch users from the server
  getUsers() {}

  // Save user data to the database
  saveUser(user) {}
}

/**
 * Open/Closed Principle (OCP)
 * Software entities (classes, modules, functions) should be open for extension but closed for modification.
 */

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

/**
 * Liskov Substitution Principle (LSP)
 * Subtypes must be substitutable for their base types without altering the correctness of the program.
 */

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

/**
 * Interface Segregation Principle (ISP)
 * Clients should not be forced to depend on interfaces they do not use.
 */

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

/**
 * Dependency Inversion Principle (DIP)
 * High-level modules should not depend on low-level modules. Both should depend on abstractions.
 * Abstractions should not depend on details. Details should depend on abstractions.
 */

interface Switchable {
  operate();
}

class LightBulb implements Switchable {
  turnOn() {
    // Turn on the light bulb
  }

  turnOff() {
    // Turn off the light bulb
  }

  operate() {
    // Implement the operate method for LightBulb
  }
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
switchButton.operate();
