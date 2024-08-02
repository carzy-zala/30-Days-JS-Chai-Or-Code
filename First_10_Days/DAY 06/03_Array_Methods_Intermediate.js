/* Activity 3 */

const arr = [1, 2, 3, 4, 5];
console.log("Array is :", arr);

const doubleArray = arr.map((val) => val * 2);
console.log("After appling map method new generated array is : ", doubleArray);

const evenArray = arr.filter((val) => val % 2 === 0);
console.log("After appling filter method new generated array is : ", evenArray);

const arraySum = arr.reduce((acc, val) => acc + val, 0);
console.log("After appling reduce method sum is : ", arraySum);
