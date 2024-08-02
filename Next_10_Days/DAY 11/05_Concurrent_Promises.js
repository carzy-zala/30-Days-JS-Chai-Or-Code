const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Promise 1 .....");
    res("Promise 1");
  }, 2000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Promise 2 .....");
    res("Promise 2");
  }, 1000);
});

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Promise 3 .....");
    res("Promise 3");
  }, 4000);
});

const pAll = Promise.all([p1, p2, p3]);
const pRace = Promise.race([p1, p2, p3]);

pAll
  .then((data) => {
    console.log("pALL : ", data);
  })
  .catch((e) => {
    console.log("ERROR :: ", e);
  });

pRace
  .then((data) => {
    console.log("pRace : ", data);
  })
  .catch((e) => {
    console.log("ERROR :: ", e);
  }); 
