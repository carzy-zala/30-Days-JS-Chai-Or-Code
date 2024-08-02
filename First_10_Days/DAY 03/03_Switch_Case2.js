const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your marks ... : ", (mark) => {
  let score = parseInt(mark);
  switch (true) {
    case score >= 85:
      console.log("Your grade is : A");
      break;
    case score >= 75:
      console.log("Your grade is : B");
      break;
    case score >= 65:
      console.log("Your grade is : C");
      break;
    case score >= 50:
      console.log("Your grade is : D");
      break;
    case score >= 33:
      console.log("Your grade is : E");
      break;
    default:
      console.log("You are fail, your grade is : F");
  }

  rl.close();
});
