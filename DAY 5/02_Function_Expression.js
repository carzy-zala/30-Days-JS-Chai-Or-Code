/* ACtivity 2 */

const max = function (a, b) {
  return a < b ? b : a;
};

const concat = function (str1, str2) {
  return str1 + str2;
};

const a = 10,
  b = 11;

const str1 = "ABC",
  str2 = "DEF";

console.log("Max in ", a, " ", b, " is : ", max(a, b));
console.log("String after concat ", str1, " ", str2, " = ", concat(str1, str2));
