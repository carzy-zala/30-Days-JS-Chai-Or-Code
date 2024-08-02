// Task 7

const form = document.forms["myform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ele = Array.from(form.elements);
  let data = document.getElementById("data");
  if (data.innerHTML) data.innerHTML = "";
  ele.forEach((element) => {
    if (element.id) {
      data.innerHTML += element.name + " : " + element.value + "<br/>";
    }
  });

  console.log(data.innerText);
});

// Task 8

const select = document.querySelector("select");

select.addEventListener("change", (e) => {
  const dp = document.getElementById("dp");
  switch (e.target.value) {
    case "dp1":
      dp.innerHTML = "Hello";
      break;
    case "dp2":
      dp.innerHTML = "World";
      break;
    case "dp3":
      dp.innerHTML = "Hello World";
      break;
    case "dp4":
      dp.innerHTML = "Thank you ...!";
      break;
    default:
      dp.innerHTML = "Something went wrong ....";
  }
});
