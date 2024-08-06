// Task 1

function outer() {
  variable = "Jayraj";
  return function inner() {
    console.log("Variable : ", variable);
  };
}

const v1 = outer();
v1();

// Task 2

function counter() {
  counter = 0;
  return function increment() {
    counter++;
    console.log("Current value of counter : ", counter);
  };
}

const c = counter();
c();
c();
c();
