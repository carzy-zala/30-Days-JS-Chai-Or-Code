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

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentID() {
    return this.studentId;
  }

  greeting() {
    return `Hello ${this.name}, Your studentID is ${this.studentId}`;
  }
}

const s1 = new Student("Jayraj", 21, 123456789);
console.log("Your student ID is : ", s1.studentId);

console.log(s1.greeting());
