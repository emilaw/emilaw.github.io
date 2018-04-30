'use strict';



function fibon(n) {

    if (n === 0) {
        console.log(0);
    }
    if (n === 1 || n === 1) {
        console.log(1);
        return;
    }
    var ObecnaWartosc = 1;
    var PoprzedniaWartosc = 1;
    for (var i = 2; i < n; i++) {
        var tempObecnaWartosc = ObecnaWartosc;
        ObecnaWartosc = ObecnaWartosc + PoprzedniaWartosc;
        PoprzedniaWartosc = tempObecnaWartosc;
    }
    console.log(ObecnaWartosc);
}

fibon(10);
