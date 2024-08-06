// Task 1

class Person {
  constructor(name = "", age = "") {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return this.name ? `Hello ${this.name}` : "Hello worlds";
  }

  updateAge(newAge) {
    this.age = newAge;
    return this.age;
  }
}

const p1 = new Person("Jayraj", 21);
console.log(p1.greeting());

// Task 2
console.log("Update age of ", p1.name, " is ", p1.updateAge(25));

module.export = Person