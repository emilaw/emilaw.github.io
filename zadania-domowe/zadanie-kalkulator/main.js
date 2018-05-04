'use strict';





function take(x) {

    document.getElementById("wynik").value += x;

}

function procent() {


}

function count() {
    var wynik = document.getElementById("wynik").value;
    document.getElementById("wynik").value = eval(wynik);
}

function del() {
    document.getElementById("wynik").value = "";
}

take();
procent();
count();
del();
