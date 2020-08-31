function loginCheck() {
    setTimeout(
        function() {
            if (sessionStorage.getItem("notLoggedIn")) {
                window.location.href = "index.html";
            }
        }, 10
    )
    setTimeout(
        function() {
            if (sessionStorage.getItem("loggedIn")) {
            } else {
                window.location.href = "index.html";
            }
        }, 20
    )
};
function indexLogOut() {
    sessionStorage.setItem("notLoggedIn", "true");
    sessionStorage.removeItem("loggedIn");
};
function logOut() {
    sessionStorage.setItem("notLoggedIn", "true");
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
};