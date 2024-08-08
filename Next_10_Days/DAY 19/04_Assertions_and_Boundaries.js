// Task 7

const str = "Abc asdAbc.Abc asdAbc";
const word = "Abc";

const result = str.match(/^Abc\b/g);
console.log(result);

function find(str, word) {
  const regex = new RegExp(`^${word}\\b`, "g");
  return str.match(regex);
}

console.log("Start :", find(str, word));

// Task 8
function findEnd(str, word) {
  const regex = new RegExp(`^\\b${word}`, "g");

  return str.match(regex);
}

console.log("End :", findEnd(str, word));
