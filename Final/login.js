        window.onload = function() {
            document.getElementById("login").onclick = function() {
                var input = document.getElementById("input").value;
                var text = /(^\S*([A-Za-z0-9])*\S*)$/;
                if (input.match(text) && input !== "") {
                    localStorage.setItem("username", input);
                    location.assign("final.html");
                } else {
                    document.getElementById("error").style.display = "block";
                }
            };
        };

        document.getElementById("input").onfocus = function() {
            this.style.boxShadow = "0px 0px 15px red";
        };
        document.getElementById("input").onblur = function() {
            this.style.boxShadow = "";
        };