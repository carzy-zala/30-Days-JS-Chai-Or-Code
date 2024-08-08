const arr = [11, 2, 12, 32, 121, 33];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch(arr, 12));
console.log(linearSearch(arr, 21));

const arr1 = [1, 11, 21, 31, 41, 51, 61];


// Task 5

function binearySearch(arr, start, end, target) {
  let mid = Math.floor(((end - start) / 2) + start);

  if (arr[mid] === target) {
    return true;
  }

  if (arr1[mid] < target) {
    return binearySearch(arr, mid + 1, end, target);
  } 
  if((arr1[mid] < target)) {
    return binearySearch(arr, start, mid - 1, target);
  }

  return false;
}

console.log(binearySearch(arr1,0,arr.length,10));
console.log(binearySearch(arr1,0,arr.length,31));
console.log(binearySearch(arr1,0,arr.length,11));

