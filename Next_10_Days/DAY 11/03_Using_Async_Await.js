// Task 4
// Whichever the promise declare first is execute first if timing is same

const p = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Promise is resolve");
      res("Solved ...");
    }, 5000);
  });

const getPromise = async () => {
  const res = await p();
  console.log(res);
};

getPromise();

// Task 5

const pr = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Promise is rejected ...");
      rej("Error");
    }, 5000);
  });

const promise = async () => {
  try {
    const res = await pr();
    console.log(res);
  } catch (error) {
    console.log("ERROR OCCURRED:: ", error);
  }
};

promise();
