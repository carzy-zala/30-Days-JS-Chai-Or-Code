// Task 3

const mul = (a, b) => {
  if (b === 1) {
    throw new Error("WHY ARE YOU WASTING TIME BY DOING MULTIPLY WITH 1");
  }

  return a * b;
};

try {
  console.log(mul(2, 3));
  console.log(mul(3, 3));
  console.log(mul(2, 1));
} catch (error) {
  console.log("ERROR :: ", error);
} finally {
  console.log("IT ALWAYS WORKS");
}


const fun = () => {
    try {
      console.log(mul(2, 3));
      console.log(mul(3, 3));
      console.log(mul(2, 1));
    } catch (error) {
      console.log("ERROR :: ", error);
    } finally {
      console.log("IT ALWAYS WORKS");
    }
  };
  console.log();
  console.log("FUNCTION CALL :: ");
  
  fun();