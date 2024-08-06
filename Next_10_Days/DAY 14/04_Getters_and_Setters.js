class Person {
  constructor(name = "h", age = "") {
    this.name = name;
    this.age = age;
  }

  static greeting() {
    return this.name ? `Hello ${this.name}` : "Hello world";
    // console.log("Hello world");
  }

  updateAge(newAge) {
    this.age = newAge;
    return this.age;
  }

  get getname() {
    console.log("My fullname is :", this.name);
    return this.name;
  }

  set setname(data) {
    this.name = data;
  }
}

const p = new Person("Jayraj",21)

console.log(p.getname);
p.setname = "Zala";
console.log(p.name);
