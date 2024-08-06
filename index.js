// Check if the user is logged in, otherwise redirect to signup page
function verifyUser() {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn !== "true") {
        window.location.replace("./signup.html");
    }
}

// Logout function to clear login status and redirect to login page
function logoutFunc() {
    localStorage.removeItem("login");
    window.location.replace("./login.html");
}

// Verify user on page load
window.addEventListener("load", function() {
    verifyUser();
});
