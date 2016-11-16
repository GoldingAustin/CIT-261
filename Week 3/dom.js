function dom() {
    var output = document.querySelector("select").value;
    var input = document.getElementById("title").value;
    var title = document.createElement("h1");
    title.innerHTML = input;
    document.body.style.backgroundColor = output;
    document.querySelector("h1").parentNode.replaceChild(title, document.querySelector("h1"));
}