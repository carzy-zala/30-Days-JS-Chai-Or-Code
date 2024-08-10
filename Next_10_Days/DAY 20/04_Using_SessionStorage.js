const formSession = document.querySelector("form");

formSession.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.querySelector("#fullName").value;

  const email = document.querySelector("#email").value;

  const obj = { fullName, email };

  sessionStorage.setItem("sessionUser", JSON.stringify(obj));

  console.log("Sesson:", sessionStorage.getItem("sessionUser"));

  document.querySelector(
    "#session"
  ).innerHTML = `SessionUser : ${sessionStorage.getItem(
    "sessionUser"
  )}, SessionObj : ${sessionStorage.getItem("sessionObj")}`;
});

const btnSession = document.querySelector("#rmvSession");

btnSession.addEventListener("click", () => {
  sessionStorage.clear();
  document.querySelector(
    "#session"
  ).innerHTML = `SessionUser : ${sessionStorage.getItem(
    "sessionUser"
  )}, SessionObj : ${sessionStorage.getItem("sessionObj")}`;
});
