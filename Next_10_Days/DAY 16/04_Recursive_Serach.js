// Task 7

const arr = [1, 11, 21, 31, 41, 51, 61];

function binarySearch(arr, key) {
  if (arr.length === 0) return false;

  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === key) return true;

  if (arr[mid] > key) {
    return binarySearch(arr.slice(0, mid), key);
  } else {
    return binarySearch(arr.slice(mid + 1, arr.length), key);
  }
}

console.log(binarySearch(arr, 111));

// Task 8

function countTarget(arr, target) {
  const count = arr[arr.length - 1] === target ? 1 : 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.pop();
  return count + countTarget(arr, target);
}

const targetArr = [1, 2, 1, 2, 1, 1, 1, 1, 1, 1];

console.log(countTarget(targetArr, 1));
