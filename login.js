// Get input fields
let loginEmail = document.querySelector("#email");
let loginPass = document.querySelector("#password");


function loginFunc(event) {
    event.preventDefault(); 
    const loginData = JSON.parse(localStorage.getItem("userValues"));

 
    if (loginEmail.value === loginData.signEmail && loginPass.value === loginData.signPassword) {
        localStorage.setItem("login", "true");
        window.location.replace("./index.html");
    } else {
        alert("Please enter the correct email and password");
    }
}


function verifyUser() {
    let loggedIn = localStorage.getItem("login");
    if (loggedIn === "true") {
        window.location.replace("./index.html");
    }
}

window.addEventListener('load', function () {
    verifyUser();
});
