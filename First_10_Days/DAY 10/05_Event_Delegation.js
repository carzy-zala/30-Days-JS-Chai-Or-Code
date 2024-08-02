// Event delegation is a technique in JavaScript where we delegate the responsibility of handling an event to a parent element

// Task 9

const ul = document.getElementById("task9");

ul.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    const li = document.getElementById("task9Li");
    li.textContent = e.target.textContent;
  }
});

// Task 10

const btntask = document.getElementById("task10");
const parentDiv = document.getElementById("parent");

btntask.addEventListener("click", () => {
  const data = prompt("Please enter div content");
  if (data.trim() !== "") {
    const div = document.createElement("div");
    const txt = document.createTextNode(data);

    div.appendChild(txt);
    div.classList.add("child");
    parentDiv.appendChild(div);
  } else {
    alert("Please try again with content ...");
  }
});

parentDiv.addEventListener("click", (e) => {
  // please note we here avoid get all child div trigger when parent is clicked otherwise all div content is printed
  if (e.target.id !== "parent" && e.target.tagName == "DIV") {
    const span = document.getElementById("divContent");
    span.textContent = e.target.textContent;
  }
});
