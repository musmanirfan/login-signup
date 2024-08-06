const isLoggedIn = localStorage.getItem("login")

if (!isLoggedIn){
    window.location.replace("./signup.html")
}


function logoutFunc() {
    window.location.replace("./login.html")
}