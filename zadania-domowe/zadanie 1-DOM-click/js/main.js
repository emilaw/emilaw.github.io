'use strict';



document.getElementById("button").onclick = ustawTlo;

function ustawTlo() {
    var pElements = document.body.getElementsByTagName("p");

    var p1 = pElements[0];
    p1.style.background = "rgb(255,0,0)";

    var p2 = pElements[1];
    p2.style.background = "rgb(255,255,0)";
}
