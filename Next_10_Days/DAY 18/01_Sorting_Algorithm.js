// Task 1

const arr = [11, 13, 31, 5, 1, 2, 41];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

// Task 2

const arr1 = [11, 13, 31, 5, 1, 2, 41];

for (let i = 0; i < arr1.length - 1; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] > arr1[j]) {
      let temp = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = temp;
    }
  }
}

console.log(arr1);

// Task 3

const selectionArray = [11, 2, 3, 41, 12, 23];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let pivot = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[pivot] > arr[j]) {
        pivot = j;
      }
    }

    swap(arr, pivot, i);
  }
}

selectionSort(selectionArray);
console.log(selectionArray);
