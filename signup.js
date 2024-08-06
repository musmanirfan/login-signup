// Get input fields
let signName = document.querySelector("#text");
let signEmail = document.querySelector("#email");
let signPassword = document.querySelector("#password");


function signUp(event) {
    event.preventDefault(); 


    if (signName.value === "" || signEmail.value === "" || signPassword.value === "") return;

    let user = {
        signName: signName.value,
        signEmail: signEmail.value,
        signPassword: signPassword.value
    };
    
    localStorage.setItem("userValues", JSON.stringify(user));
    localStorage.setItem("login", "true");
    window.location.replace("./index.html");
}


function verifyUser() {
    let loggedIn = localStorage.getItem("login");
    if (loggedIn === "true") {
        window.location.replace("./index.html");
    }
}


window.addEventListener("load", function () {
    verifyUser();
});
