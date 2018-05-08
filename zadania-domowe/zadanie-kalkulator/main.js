'use strict';





function take(x) {

    document.getElementById("wynik").value += x;

}

function procent(liczba, licznik) {
    var wynik = liczba * (licznik / 100);
    console.log(wynik);
    return wynik;


}

function count() {
    var wynik = document.getElementById("wynik").value;
    document.getElementById("wynik").value = eval(wynik);
}

function del() {
    document.getElementById("wynik").value = "";
}

take();
procent(liczba, 10);
count();
del();
