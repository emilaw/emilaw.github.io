'use strict';

//budowa funckji

//var o = {
//    wlasciwosc1: [
//        0, 1, 2, 3,
//    ],
//    wlasciwosc2: "string",
//    metoda1: function () {
//        console.log("Metoda");
//    }
//}


class Ogloszenie {
    vonstructor(tytul, opis, kategoria, autor, cena) {
        this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.autor = autor;
        this.cena = cena;
    }
    ponierzOgloszenie() {
        var ogloszenie = "<h1>" + this.tytul + "<hr><small>" + this.autor + "</small></h1>";
        ogl += "<h6>Opis: " + this.opis + "</h6>";
        ogl += "<p>Cena: " + this.cena + "</p>";
        ogl += "<p><em>Kategoria:" + this.kategoria + "</em></p>";
        ogl += "<hr>";

        document.body.insertAdjacentHTML("afterbegin", ogl);
    }
}

var ogloszenie = new Ogloszenie("Sprzedam Opla", "Niemiec płakał jak sprzedawał", "Motoryzacja", "Helmut", 3000);
ogloszenie.ponierzOgloszenie();
console.log(ogloszenie);

ogloszenie = new Ogloszenie("Sprzedam pralkę", "Programowalna Frania na zimną wodę z maglem", "AGD", "Halina", 420);
