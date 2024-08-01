const btn = document.getElementById("txtChange");
const p = document.getElementById("act5");

btn.addEventListener("click", () => {
  p.innerHTML = "Hello...";
});

p.addEventListener("mouseover", () => {
  p.style.backgroundColor = "yellow";
});
p.addEventListener("mouseout", () => {
    p.style.backgroundColor = "";
  });