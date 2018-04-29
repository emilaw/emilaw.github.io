'use strict';


var array;

function myFunction(sortowanie) {
    array = sortowanie.split("");
    array.sort();
    sortowanie = array.join("");
    return sortowanie;
}
var wynik = myFunction("Akademia 108");

console.log(wynik);
