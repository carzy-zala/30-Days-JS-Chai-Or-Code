const task7 = document.getElementById("task7");

task7.addEventListener("click", () => {
  const link = prompt("please enter link of image");
  document.querySelector("img").setAttribute("src", link);
});

// task 8

const taskpad = document.getElementById("taskpad");

taskpad.addEventListener("click", () => addClass("pad"));

const taskbg = document.getElementById("taskbg");

taskbg.addEventListener("click", () => addClass("bg"));

const taskborder = document.getElementById("taskborder");

taskborder.addEventListener("click", () => addClass("border-class"));


// remove class

const taskrmvpad = document.getElementById("taskrmvpad");

taskrmvpad.addEventListener("click", () => removeClass("pad"));

const taskrmvbg = document.getElementById("taskrmvbg");

taskrmvbg.addEventListener("click", () => removeClass("bg"));

const taskrmvborder = document.getElementById("taskrmvborder");

taskrmvborder.addEventListener("click", () => removeClass("border-class"));


function addClass(className) {
  const img = document.querySelector("img");
  img.classList.add(className);
  getClass();
}

function removeClass(className) {
  const img = document.querySelector("img");
  img.classList.remove(className);
  getClass();
}

function getClass() {
  document.getElementById("classData").innerHTML =
    "Applied classes to image : " + document.querySelector("img").classList;
}
