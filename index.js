const isLoggedIn = localStorage.getItem("login")

if (!isLoggedIn){
    window.location.replace("./signup.html")
}