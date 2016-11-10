        window.onload = function color() {
            document.body.style.webkitAnimation = "rainbow 10s infinite";
            document.getElementById("block").style.webkitAnimationPlayState = "paused";
            document.getElementById("touch").style.webkitAnimationPlayState = "paused";
        };

        document.getElementById("trans").onmouseover = function trans() {
            this.style.webkitAnimationPlayState = "running";
            this.style.webkitAnimation = "trans 1s infinite alternate";
        };

        document.getElementById("trans").onmouseout = function trans() {
            this.style.webkitAnimationPlayState = "paused";
        };

        document.getElementById("block").onmousedown = function spin() {
            if (this.style.webkitAnimationPlayState == "paused") {
                this.style.webkitAnimationPlayState = "running";
                this.style.webkitAnimation = "spin 5s infinite alternate";
            } else {
                this.style.webkitAnimationPlayState = "paused";
            }
        };

        document.getElementById("touch").ontouchstart = function touch() {
            if (this.style.webkitAnimationPlayState == "paused") {
                this.style.webkitAnimationPlayState = "running";
                this.style.webkitAnimation = "touch 2s infinite alternate";
            } else {
                this.style.webkitAnimationPlayState = "paused";
            }
        };