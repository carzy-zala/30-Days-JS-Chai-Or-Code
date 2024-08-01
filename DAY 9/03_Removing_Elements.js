const task5 = document.getElementById("task5");

task5.addEventListener("click", () => {
  const div = document.getElementById("divId");

  div ? div.remove() : alert("No welcome message is there ...");
});

const task6 = document.getElementById("task6");

task6.addEventListener("click", () => {
  const div = document.querySelector(".divClass");
  div.lastElementChild ? div.removeChild(div.lastElementChild) : alert("No inner div")
});
