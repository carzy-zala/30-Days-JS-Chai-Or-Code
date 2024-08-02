// Task 6
// Fetch is one type of promise
// Note : 404 response come under resolve only
// reject() come when network error occured in fetch

fetch(`https://api.github.com/users/carzy-zala`)
  .then((data) => {
    return data.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("ERROR :: ", err));

//   Task 7

const getGithubData = async () => {
  try {
    const res = await fetch("https://api.github.com/users/carzy-zala");

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("ERROR OCCURED IN FETCH :: AYNC : AWAIT : ", error);
  }
};

getGithubData();
