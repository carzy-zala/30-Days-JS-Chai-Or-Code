/* Activity 4 */

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Check your number is odd or even : ", (number) => {
  console.log(number % 2 ? "Your number is odd" : "Your number is even");
  rl.close();
});
