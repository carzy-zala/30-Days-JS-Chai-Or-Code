// Task 1

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise has been resolved ..");
    resolve();
  }, 2000);
});

promise.then(() => {
  console.log("Trying to resolve ...");
});

// Task 2

const promiseTwo = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("You got error ..");
    rej();
  }, 2000);
});

promiseTwo
  .then(() => {
    console.log("Trying to resolve");
  })
  .catch(() => {
    console.log("Sorry you can't able resolve ....");
  });
