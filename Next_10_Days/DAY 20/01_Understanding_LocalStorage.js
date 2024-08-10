// Task 1

const str = "local-value";

localStorage.setItem("item", str);

console.log(localStorage.getItem("item"));

// Task 2

const obj = { name: "Jayraj", age: 21 };

localStorage.setItem("person", JSON.stringify(obj));

console.log("Person :", localStorage.getItem("person"));
