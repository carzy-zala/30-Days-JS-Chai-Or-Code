// Task 3
function sum(arr) {
  if (arr.length === 1) return arr[0];
  let last = arr[arr.length - 1];
  arr.pop();
  return last + sum(arr);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sum(arr));

// Task 4

const arrMax = [100, 9211, 233, 45, 65, 2126, 127, 843, 943, 1210];

function getMax(arr) {
  if (arr.length === 1) return arr[0];
  return Math.max(arr[0], getMax(arr.slice(1)));
}

console.log(getMax(arrMax));
