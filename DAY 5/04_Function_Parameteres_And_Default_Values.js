/* Activity 4 */

const product = (a, b = 1) => {
  return a * b;
};

const greet = (name, age = 21) => {
  console.log(`Hello ${name}.Your age is ${age}`);
};

const a = 12,
  b = 13;
const name = "Jayraj",
  age = 18;

console.log("Product ( ", a, " , ", b, " ) is : ", product(a, b));
console.log("Product ( ", a, ") is : ", product(a));

console.log("Greet ( ", name, " , ", age, " ) is : ");
greet(name, age);
console.log("Greet ( ", name, " ) is : ");
greet(name);
