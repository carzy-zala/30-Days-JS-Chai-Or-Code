// Task 1

const errFn = () => {
  return errr;
};

const errCall = () => {
  try {
    errFn();
  } catch (error) {
    console.log("ERROR :: SOMETHING WRONG IN THE FUNCTION");
  }
};

errCall();

// Task 2

const errFn2 = (a, b) => {
  if (b === 0) {
    throw new Error("PLEASE MAKE SURE DENOMINATOR IS NOT ZERO (0)");
  }
  return a / b;
};

const errCall2 = () => {
  try {
    console.log(errFn2(3, 2));
    console.log(errFn2(3, 0));
  } catch (error) {
    console.log("ERROR :: ",error);
  }
};

errCall2();
