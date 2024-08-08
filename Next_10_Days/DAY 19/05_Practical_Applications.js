// Task 9: Validate a simple password
function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}
console.log("Validate Password:", validatePassword("Password123!"));


// Task 10: Validate a URL
function validateURL(url) {
    let regex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-./?%&=]*)?$/;
    return regex.test(url);
}
console.log("Validate URL:", validateURL("https://www.example.com"));