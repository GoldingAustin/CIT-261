        function readJSON() {
            var obj = new XMLHttpRequest();
            var url = new URL("https://goldingaustin.github.io/CIT-261/Week 2/messages.json");

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
            var stringif = JSON.stringify(messages);
            var mess = JSON.parse(stringif);
            for (i in mess) {
                output.innerHTML += mess[i].username + ": " + mess[i].message + "&#13;&#10;";
            }
        }