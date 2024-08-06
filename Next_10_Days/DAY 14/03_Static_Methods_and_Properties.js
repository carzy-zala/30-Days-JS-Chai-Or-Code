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
}

// Person.greeting();
console.log(Person.greeting());

class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
  }

  getStudentID() {
    return this.studentId;
  }

  greeting() {
    return `Hello ${this.name}, Your studentID is ${this.studentId}`;
  }
}


console.log("Total number of student : ", Student.studentCount);
