// Task 5
sessionStorage.setItem("session", "session-value");

console.log("Session : ", sessionStorage.getItem("session"));

const objSession = { session: "Session-Object", "session-value": 21 };

sessionStorage.setItem("sessionObj", JSON.stringify(objSession));

console.log("sessionObj:", JSON.parse(sessionStorage.getItem("sessionObj")));
