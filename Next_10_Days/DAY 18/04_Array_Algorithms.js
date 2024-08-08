const arr = [1, 2, 3, 4, 5];

function rotate(arr, k) {
  k = k % arr.length;

  let a1 = arr.slice(-k);
  let a2 = arr.slice(0, -k);
  console.log(a1);
  console.log(a2);

  return a1.concat(a2);
}

console.log(rotate(arr, 8));

const arr1 = [1, 2, 3, 7];
const arr2 = [4, 5, 6,9,10];

function merge(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      arr[arr.length] = arr1[i];
      arr[arr.length] = arr2[j];
      i++;
      j++;
    }

    if (arr1[i] < arr2[j]) {
      arr[arr.length] = arr1[i];
      i++;
    } else {
      arr[arr.length] = arr2[j];
      j++;
    }
  }

  console.log(i);
  console.log(j);

  if (i >= arr1.length && arr2.length >= j) {
    arr = [...arr, ...arr2.slice(-(arr2.length - j))];
  }
  if (j >= arr2.length && arr1.length >= i) {
    arr = [...arr, ...arr1.slice(-(arr1.length - i))];
  }

  return arr;
}
console.log(merge(arr1, arr2));
