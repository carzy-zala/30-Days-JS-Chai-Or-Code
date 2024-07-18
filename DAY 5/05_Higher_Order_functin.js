/* Activity 5 */

const fn = () => {
  console.log("Hello Higher-Order function ...");
};

const repeate = (fn, num) => {
  for (let i = 0; i < num; i++) {
    fn();
  }
};

const add = (val) => {
  console.log("Addition function : ", val + 5);
  return val + 5;
};

const mul = (val) => {
  console.log("Multiply function : ", val * 5);
  return val * 5;
};

const addFiveAndMultiplyFive = (add, mul, value) => {
  return mul(add(value));
};

repeate(fn, 5);
console.log(addFiveAndMultiplyFive(add, mul, 10));
