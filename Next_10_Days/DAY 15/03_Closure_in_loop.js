// Task 5

const fn = function (i) {
  return function () {
    console.log("Hello", i, " element");
  };
};

let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = fn(i);
}

arr[0]();
arr[1]();
