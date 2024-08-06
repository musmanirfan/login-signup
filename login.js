let loginEmail = document.querySelector("#email");
let loginPass = document.querySelector("#password");

function loginFunc() {
    const loginData = JSON.parse(localStorage.getItem("userValues"))
    // console.log(loginData.signEmail, loginData.signpassword, loginEmail, loginPass);
    if (loginEmail.value === loginData.signEmail && loginPass.value === loginData.signpassword) {
        window.location.replace("./index.html")
    } else {
        alert("Plz type right email and password");
    }
}