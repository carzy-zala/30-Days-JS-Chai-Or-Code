function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log("Factorial of 5: ", factorial(5));
console.log("Factorial of 10: ", factorial(10));
console.log("Factorial of 4:  ", factorial(4));


// Task 2 

function fibonaci(num) {
  if (num === 1 || num === 2) {
    return 1;
  }

  return fibonaci(num - 2) + fibonaci(num - 1);
}


console.log(fibonaci(15));
