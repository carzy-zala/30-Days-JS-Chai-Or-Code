/* Activity 5 */

const firstName = "Jayrajsinh";
const age = 21;

const person = {
  firstName,
  age,
  greet: () => {
    console.log("Hello , I am ", firstName, " and ", age, " years old");
  },
};

console.log(person);

const computedProperty = "lastname";

person[computedProperty] = "zala";

console.log(person);
