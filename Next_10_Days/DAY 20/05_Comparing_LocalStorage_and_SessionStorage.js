const setSession = (key, value) => {
  sessionStorage.setItem(key, value);
  console.log(`${key} of Session:`, sessionStorage.getItem(key));
};

const setLS = (key, value) => {
  localStorage.setItem(key, value);
  console.log(`${key} of LS:`, localStorage.getItem(key));
};

setSession("data", 5);
setLS("data", 1);

const clrSession = () => sessionStorage.clear();
const clrLS = () => localStorage.clear();

clrLS();
clrSession();
if (!clrLS() && !clrSession()) {
  console.log("session and localStorage is clear sucessfully");
}
