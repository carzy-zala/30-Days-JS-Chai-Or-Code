/* Activity 3 */

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [...arr1, 6, 7, 8];

console.log(arr2);

const sum = (...number) => {
  let total = 0;
  for (const val of number) {
    total += val;
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
