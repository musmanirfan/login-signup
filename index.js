function verifyUser() {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn !== "true") {
        window.location.replace("./login.html");
    }
}


function logoutFunc() {
    localStorage.removeItem("login");
    window.location.replace("./login.html");
}

window.addEventListener("load", function() {
    verifyUser();
});
