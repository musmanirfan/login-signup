let signName = document.querySelector("#text");
let signEmail = document.querySelector("#email");
let signpassword = document.querySelector("#password");


function signUp() {
    console.log("started");
    console.log(signName.value, signEmail.value, signpassword.value);

    if (signName === "" && signEmail === "" && signpassword === "") return
    console.log("working");

    let user = {
        signName: signName.value,
        signEmail: signEmail.value,
        signpassword: signpassword.value
    };
    localStorage.setItem("userValues", JSON.stringify(user));
    localStorage.setItem("login", true);
    window.location.replace("./index.html");

}

function verifyUser() {
    let loggedIn = localStorage.getItem("login");
    if (loggedIn === true) {
        window.location.replace("./index.html");
    }
}

window.addEventListener("load", function () {
    verifyUser();
})