const { log } = require("console");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Get your favourite day of week from 1-7 ... : ", (day) => {
  switch (parseInt(day)) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wenesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Enter a number between 1-7");
  }
  rl.close();
});
