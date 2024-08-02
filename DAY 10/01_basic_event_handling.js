// Task 1

const btn = document.getElementById("task1");

btn.addEventListener("click", () => {
  document.querySelector("p").innerHTML = "Hello world ...";
});

// Task 2

const img = document.querySelector("img");

const imgDiv = document.querySelector("#imgDiv");

imgDiv.addEventListener("dblclick", () => {
  img.style.display === "none"
    ? (img.style.display = "block")
    : (img.style.display = "none");
});
