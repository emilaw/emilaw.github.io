'use strict';

var przeczytana = "przeczytana";

function Ksiazka(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;

    this.opiszKsiazke = function () {
        if (this.przeczytana === false) {
            return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została przeczytana";
        } else if (przeczytana === true) {
            return "Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i nie została przeczytana";
        }
    }
}

var pusteKrzeslo = new Ksiazka("Puste krzesło", "J.D.", true);
var kryptonimKawki = new Ksiazka("Kryptonim Kawki", "K.F.", false);
var serceWOgniu = new Ksiazka("Serce w ogniu", "F.E.", false);


var biblioteka = [];
biblioteka[0] = pusteKrzeslo;
biblioteka[1] = kryptonimKawki;
biblioteka[2] = serceWOgniu;

console.log(biblioteka);

function iloscPrzeczytanych(biblioteka) {
    var result = 0;
    for (var i = 0; i < biblioteka.length; i++) {
        console.log(biblioteka[i].opiszKsiazke());
        if (biblioteka[i].przeczytana) {
            result += 1;
        }
    }
    return result;
}

var ilePrzeczytanych = iloscPrzeczytanych(biblioteka);
console.log("Przeczytane: " + ilePrzeczytanych);
