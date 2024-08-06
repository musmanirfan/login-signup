// Get input fields
let loginEmail = document.querySelector("#email");
let loginPass = document.querySelector("#password");

// Login function to verify user credentials
function loginFunc(event) {
    event.preventDefault(); // Prevent form submission
    const loginData = JSON.parse(localStorage.getItem("userValues"));

    // Check if email and password match
    if (loginEmail.value === loginData.signEmail && loginPass.value === loginData.signPassword) {
        localStorage.setItem("login", "true");
        window.location.replace("./index.html");
    } else {
        alert("Please enter the correct email and password");
    }
}

// Verify if the user is already logged in
function verifyUser() {
    let loggedIn = localStorage.getItem("login");
    if (loggedIn === "true") {
        window.location.replace("./index.html");
    }
}

// Verify user on page load
window.addEventListener('load', function () {
    verifyUser();
});
