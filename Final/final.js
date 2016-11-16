        window.onload = function() {
            document.querySelector("h1").innerHTML += localStorage.getItem("username") + "!";
            send();
            colorChange();
            sendChange();
            var obj = new XMLHttpRequest();
            var url = new URL("https://goldingaustin.github.io/CIT-261/Final/messages.json");

            obj.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var messages = JSON.parse(this.responseText);
                    loop(messages);
                }
            };
            obj.open("GET", url, true);
            obj.send();
        };

        function loop(messages) {
            var str = JSON.stringify(messages);
            var mess = JSON.parse(str);
            for (var i in messages) {
                addTable(mess[i].username, mess[i].message);
            }
        }

        function send() {
            document.getElementById("send").onclick = function() {
                var input = document.getElementById("input").value;
                if (input !== "") {
                    var user = localStorage.getItem("username");
                    addTable(user, input);
                }
            };
        }

        function addTable(user, mess) {
            var div = document.createElement("div");
            var use = document.createElement("td");
            use.setAttribute("id", "name");
            var mes = document.createElement("td");
            var tr = document.createElement("tr");
            var userText = document.createTextNode(user + ": ");
            var userMess = document.createTextNode(mess);
            use.appendChild(userText);
            mes.appendChild(userMess);
            tr.appendChild(use);
            tr.appendChild(mes);
            div.appendChild(tr);
            div.style.webkitAnimation = "trans 1s ease-out";
            div.style.borderBottom = "1px black solid";
            output.appendChild(div);
        }

        function colorChange() {
            var choice = document.getElementById("back");
            choice.onchange = function() {
                document.body.style.webkitAnimation = "";
                switch (choice.value) {
                    case "red":
                        document.body.style.backgroundColor = "#ffbfbf";
                        break;
                    case "green":
                        document.body.style.backgroundColor = "#c1ffbf";
                        break;
                    case "blue":
                        document.body.style.backgroundColor = "#bfd1ff";
                        break;
                    case "yellow":
                        document.body.style.backgroundColor = "#fffbbf";
                        break;
                    case "rainbow":
                        document.body.style.webkitAnimation = "rainbow 10s infinite";
                        document.body.style.webkitAnimationPlayState = "running";
                        break;
                }

            };
        }

        function sendChange() {
            document.getElementById("send").onmouseover = function() {
                this.style.backgroundPosition = "left bottom";
            };

            document.getElementById("send").onmouseout = function() {
                this.style.backgroundPosition = "right bottom";
            };
        }