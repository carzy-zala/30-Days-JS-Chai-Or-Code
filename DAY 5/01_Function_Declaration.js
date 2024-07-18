/* Activity 1 */

function oddOrEven(num) {
  return num % 2 ? "Number is odd" : "Number is even";
}

function square(num) {
  return num * num;
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number : ", (num) => {
  console.log(oddOrEven(num));
  console.log("Square of number is = ", square(num));

  rl.close();
});
