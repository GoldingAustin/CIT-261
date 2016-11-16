        function loop() {
            var output = document.getElementById("output");
            var input = document.getElementById("loop").value;
            output.innerHTML = "";
            var loop = [];
            loop = input.split(" ");
            if (document.getElementById("forwards").checked == true) {
                for (var i = 0; i < loop.length; i++) {
                    output.innerHTML += loop[i] + " ";
                }
            }
            if (document.getElementById("backwards").checked == true) {
                for (var i = loop.length; i > 0; i--) {
                    output.innerHTML += loop[i - 1] + " ";
                }
            }
            if (document.getElementById("evens").checked == true) {
                for (var i = 0; i < loop.length; i++) {
                    if (i % 2 == 1) {
                        output.innerHTML += loop[i] + " ";
                    }
                }
            }
            if (document.getElementById("odds").checked == true) {
                for (var i = 0; i < loop.length; i++) {
                    if (i % 2 == 0) {
                        output.innerHTML += loop[i] + " ";
                    }
                }
            }
        }