function login() {
    if (document.getElementById("id-input").value == "54016" && document.getElementById("password-input").value == "HackersGuild20202021") {
        document.getElementById("response").innerHTML = "Decrypting Files";
        setTimeout(
            function() {
                sessionStorage.removeItem("notLoggedIn");
                sessionStorage.setItem("loggedIn", "true");
                document.getElementById("response").innerHTML = "Done!";
                setTimeout(
                    function() {
                        window.location.href = "resources.html";
                    }, 750
                )
            }, 2000
        )
    } else {
        document.getElementById("response").innerHTML = "Incorrect ID or password";
    }
};