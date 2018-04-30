'use strict';

var tab = [1, 2, 3, 4, 5, 6];

function sumaIloczyn(tab) {

    var suma = 0;
    var iloczyn = 1;
    for (var i = 0; i < tab.length; i++) {
        suma += tab[i];
        iloczyn *= tab[i];
    }
    console.log(suma);
    console.log(iloczyn);

}
sumaIloczyn(tab);
