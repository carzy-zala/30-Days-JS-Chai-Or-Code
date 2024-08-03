// Task 4

class err extends Error {
  constructor(message = "ERROR OCCURED", name) {
    super(message);
    this.message = message;
    this.name = name;
  }
}

const divide = (a, b) => {
  if (a === 0 || b === 0) {
    throw new err(
      "THIS IS OCCURED BECAUSE YOU ENTER EITHER OF ONE ZERO !!",
      "ZeroError"
    );
  }
  return a / b;
};

function fn() {
  try {
    console.log(divide(8, 2));
    console.log(divide(0, 2));
  } catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
  }
}

fn();

// Task 5

function validateUser(username) {
  if (!username.trim()) {
    throw new err("PLEASE ENTER YOUR USERNAME", "EmptyError");
  }

  return "Welcome " + username;
}

const userLogin = () => {
  try {
    validateUser("Javascript ...");
    validateUser("")
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
  }
};

userLogin();
