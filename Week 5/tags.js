    var can = document.getElementById("rect");
    var canCon = can.getContext("2d");
    canCon.fillStyle = "#d19ac4";
    canCon.fillRect(0, 0, 500, 300);

    var pic = document.getElementById("pic");
    var picCon = pic.getContext("2d");
    var img = new Image();
    img.src = 'test.jpg';
    img.onload = function() {
        picCon.drawImage(img, 0, 0);
    }