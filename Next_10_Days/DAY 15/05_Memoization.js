// Task 7
const fn = (ans) => ans + 10;

function outer() {
  const results = {};
  return function (ans) {
    if (!results[ans]) {
      console.log("in inner ");
      results[ans] = fn(ans);
    }
    return results[ans];
  };
}

const fnO = outer();
console.log(fnO(100));
console.log(fnO(110));
console.log(fnO(100));

// Task 7

function fact() {
  const factorial = { 1: 1, 2: 2, 3: 6, 5: 60 };
  return function getFactorial(number) {
    if (factorial[number]) {
      console.log("in if : ", number);

      return factorial[number];
    } else {
      console.log("in else : ", number);

      if (number === 1) {
        return 1;
      } else {
        let result = getFactorial(number - 1) * number;
        factorial[number] = result;
        return result;
      }
    }
  };
}

const fac = fact();

console.log(fac(2));
console.log(fac(1));
console.log(fac(3));
console.log(fac(5));
console.log(fac(9));
console.log(fac(6));
