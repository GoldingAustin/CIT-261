 function simple(input) {
     var outputSimple = document.getElementById("outputSimple");
     localStorage.setItem("inputSimple", input);
 }

 function array(arr) {
     var outputArray = document.getElementById("outputArray");
     localStorage.setItem("inputArray", arr);
 }

 function associative(arr) {
     var outputAsArray = document.getElementById("outputAsArray");
     var asArr = {};
     for (var i = 0; i < arr.length; i++) {
         asArr[i + 1] = arr[i];
     }
     asArr = JSON.stringify(asArr);
     localStorage.setItem("inputAsArray", asArr);
 }

 function local() {
     var input = document.getElementById("input").value;
     var arr = input.split(" ");
     simple(input);
     array(arr);
     associative(arr);
     output();
 }

 function output() {
     document.getElementById("outputSimple").innerHTML = localStorage.getItem("inputSimple");

     document.getElementById("outputArray").innerHTML = localStorage.getItem("inputArray");

     var temp = localStorage.getItem("inputAsArray");
     for (var i in temp) {
         document.getElementById("outputAsArray").innerHTML += temp[i] + " ";
     }

     var tempO = localStorage.getItem("inputAsArray");
     tempO = JSON.parse(tempO);
     for (var y in tempO) {
         document.getElementById("outputObject").innerHTML += y + " ";
     }
 }