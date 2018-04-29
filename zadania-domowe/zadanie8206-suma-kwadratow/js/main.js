'use strict';


var tab = [0, 1, 2, 3, 4, 5];

function sumaKwadratow(tab) {
    var sumaK = 0;
    for (var i = 0; i < 6; i++) {
        sumaK += Math.pow(tab[i], 2);
    }
    console.log(sumaK);
    return sumaK;

}
sumaKwadratow(tab);
