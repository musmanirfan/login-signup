// Get input fields
let signName = document.querySelector("#text");
let signEmail = document.querySelector("#email");
let signPassword = document.querySelector("#password");

// Signup function to store user data and login status
function signUp(event) {
    event.preventDefault(); // Prevent form submission

    // Check if any field is empty
    if (signName.value === "" || signEmail.value === "" || signPassword.value === "") return;

    let user = {
        signName: signName.value,
        signEmail: signEmail.value,
        signPassword: signPassword.value
    };
    
    // Store user data and login status
    localStorage.setItem("userValues", JSON.stringify(user));
    localStorage.setItem("login", "true");
    window.location.replace("./index.html");
}

// Verify if the user is already logged in
function verifyUser() {
    let loggedIn = localStorage.getItem("login");
    if (loggedIn === "true") {
        window.location.replace("./index.html");
    }
}

// Verify user on page load
window.addEventListener("load", function () {
    verifyUser();
});
