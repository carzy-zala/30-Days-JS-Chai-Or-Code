const submit = document.querySelector("input[type=Submit]");

const form = document.querySelector("form");

const div = document.querySelector("#ls");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.querySelector("#fullName").value;

  const email = document.querySelector("#email").value;
  const obj = {
    fullName,
    email,
  };
  localStorage.setItem("user", JSON.stringify(obj));
  div.appendChild(
    document.createTextNode(
      `LocalStorage : User : ${localStorage.getItem(
        "user"
      )}, Person : ${localStorage.getItem("person")}`
    )
  );
  console.log(
    "Local Sotrage : ",
    "User :",
    localStorage.getItem("user"),
    "Person :",
    localStorage.getItem("person")
  );
});

const btn = document.getElementById("rmvLS");

btn.addEventListener("click", () => {
  localStorage.clear();
  div.innerHTML = localStorage.getItem("user");
});
