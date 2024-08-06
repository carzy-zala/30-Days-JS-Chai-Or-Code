// Task 3

const generateID = function () {
  id = 1001;
  return function () {
    console.log("Last generated id : ", id);
    id++;
    console.log("Current generated id : ", id);
  };
};

const u_id = generateID();
u_id();
u_id();
u_id();

// Task 4

function call() {
  return function (username) {
    console.log("Hello ", username);
  };
}
const greet = call();
greet("Jayraj");
greet("Vijay");
