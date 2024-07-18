const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Check whether year is leap year or not : ", (inputYear) => {
  const year = parseInt(inputYear);

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Year is leap year .. ");
  } else {
    console.log("It's normal year ..");
  }

  rl.close();
});
