'use strict';



function sumaIloczyn(tab) {
    var tab = [1, 2, 3, 4, 5, 6];
    var suma = 0;
    for (var i = 0; i <= tab.length; i++) {
        suma += i;
    }
    console.log(suma);


    var iloczyn = 1;
    for (var j = 1; j <= tab.length; j++) {
        iloczyn *= j;

    }
    console.log(iloczyn);

}
sumaIloczyn();
