'use strict';



var array;

function myFunction(back) {
    array = back.split("");
    array.reverse();
    back = array.join("");
    return back;
}
var wynik = myFunction("Akademia 108");

console.log(wynik);
