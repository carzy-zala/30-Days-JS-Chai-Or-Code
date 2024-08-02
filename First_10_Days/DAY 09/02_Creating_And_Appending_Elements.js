/* Activity 2 */

const body = document.body;

const addDiv = document.getElementById("adddiv");
const rmvDiv = document.getElementById("rmvdiv");

const addLi = document.getElementById("addli");
const rmvLi = document.getElementById("rmvli");

addDiv.addEventListener("click", () => {
  const div = document.createElement("div");
  div.innerHTML = "Appended div";
  div.className = "div1";
  div.style.padding = "10px";
  div.style.margin = "10px 0";
  div.style.backgroundColor = "#212121";
  div.style.color = "#ffffff";
  body.appendChild(div);
});

rmvDiv.addEventListener("click", () => {
  const div = document.querySelectorAll(".div1");
  div.length === 0
    ? alert("There is no div appended")
    : body.removeChild(div[div.length - 1]);
});

addLi.addEventListener("click", () => {
  const ul = document.getElementsByTagName("ul")[0];
  const li = document.createElement("li");
  const data = prompt("Please enter a value");
  if (data.trim()) {
    li.textContent = data;
    ul.appendChild(li);
  } else {
    alert("Please enter some value ... ");
  }
});

rmvLi.addEventListener("click", () => {
  const ul = document.querySelector("ul");
  ul.lastElementChild  ? ul.removeChild(ul.lastElementChild) : alert("No list item is there");
});
