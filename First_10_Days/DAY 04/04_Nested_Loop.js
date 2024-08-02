/* Activity 4 */

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a desired number of raw : ", (raw) => {
  for (let i = 0; i < raw; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }

  rl.close();
});
