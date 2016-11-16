        window.onload = function() {
            document.getElementById("login").onclick = function() {
                var input = document.getElementById("input").value;
                localStorage.setItem("username", input);
            };
        };