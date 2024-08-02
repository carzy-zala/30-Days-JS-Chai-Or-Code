const input = document.querySelector("input");

// Task 5

const key = document.getElementById("key");

input.addEventListener("keydown", (e) => {
  key.innerHTML = e.key;
});

// Task 6

const para = document.getElementById("para");

input.addEventListener("keyup", (e) => {
  para.innerHTML += e.key;
});
