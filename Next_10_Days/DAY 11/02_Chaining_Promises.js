// Task 3

// Here we simulate how E-Commorce order management works

const showingProduct = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Product is visible at website");
      res(1000);
    }, 1000);
  });

const buyProduct = (time) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Product succesfully buy ...");
      res(2000);
    }, time);
  });

const shipProduct = (time) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Product shipped ...");
      res("3000");
    }, time);
  });

const dispatchProduct = (time) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Product dispatch succesfully ..");
      res(4000);
    }, time);
  });

const deliverProduct = (time) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Product delievered ....");
      res(5000);
    }, time);
  });

showingProduct()
  .then((time) => buyProduct(time))
  .then((time) => shipProduct(time))
  .then((time) => dispatchProduct(time))
  .then((time) => deliverProduct(time)).catch((error)=>{
    console.log("Error : " ,error);
    
  });
