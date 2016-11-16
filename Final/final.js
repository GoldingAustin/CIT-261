        window.onload = function() {
            var obj = new XMLHttpRequest();
            var url = new URL("Z:/Fall 2016/CIT 261/CIT-261/Final/final.html");

            obj.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var messages = JSON.parse(this.responseText);
                    loop(messages);
                }
            }
            obj.open("GET", url, true);
            obj.send();
        }

        function loop(messages) {
            var str = JSON.stringify(messages);
            var mess = JSON.parse(str);
            for (i in messages) {
                var temp = document.createElement("th");
                var tr = document.createElement("tr");
                var text = document.createTextNode(mess[i].username + ": " + mess[i].message);
                temp.appendChild(text);
                tr.appendChild(temp);
                output.appendChild(tr);
            }
        }