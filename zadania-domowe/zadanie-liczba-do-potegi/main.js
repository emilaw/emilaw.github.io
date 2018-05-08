'use strict';


function poteguj(podstawa, wykladnik) {
    var wynik = 1;
    for (var i = 0; i < wykladnik; i++) {
        wynik *= podstawa;
    }
    return wynik;
}

console.log(poteguj(3, 1));
