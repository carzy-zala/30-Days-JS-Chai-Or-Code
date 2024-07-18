/* Activity 3 */

let number = 1;

do {
  console.log(number);
  number++;
} while (number < 6);

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number to find factorial : ", (num) => {
  let ans = 1;
  let temp = num;
  do {
    ans = ans * temp;
    console.log(temp--);
  } while (temp > 0);

  console.log("Factorial of ", num, " is = ", ans);
  rl.close();
});
