/* Activity 3 */

const sum = (a, b) => {
  return a + b;
};

const isExist = (char,str) => {
  return str.includes(char);
};

const a = 10000,
  b = 12;

console.log("Sum of ", a, " ", b, " = ", sum(a, b));

const str = "Hello JS";
const char = "e";
console.log(str," contains ",char, " ? ",isExist(char,str) ? "Yes":"No")