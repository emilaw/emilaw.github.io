'use strict';


var tab = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

function sortuj(tab) {
    var wartosc;
    var zmiana;
    do {
        zmiana = false;
        for (var i = 0; i <= tab.length - 1; i++) {
            if (tab[i + 1] < tab[i]) {
                wartosc = tab[i];
                tab[i] = tab[i + 1];
                tab[i + 1] = wartosc;
                zmiana = true;
            }
        }

    } while (zmiana);
    return tab;
}

sortuj(tab);
console.log(sortuj(tab));
