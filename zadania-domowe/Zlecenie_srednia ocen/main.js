'use strict';


var btn = document.getElementById('oblicz');

btn.addEventListener("click", function (e) {
    var tab = [uczen1, uczen2, uczen3, uczen4, uczen5, uczen6, uczen7, uczen8, uczen9, uczen10, uczen11, uczen12, uczen13, uczen14, uczen15, uczen16, uczen17, uczen18, uczen19, uczen20];


    function showSrednia() {

        var oceny = [b, c, d, e, f, g, h];

        var b = document.getElementsByClassName("matematyka")[0].value;
        b = parseFloat(b);

        var c = document.getElementsByClassName("polski")[0].value;
        c = parseFloat(c);

        var d = document.getElementsByClassName("biologia")[0].value;
        d = parseFloat(d);

        var e = document.getElementsByClassName("geografia")[0].value;
        e = parseFloat(e);

        var f = document.getElementsByClassName("fizyka")[0].value;
        f = parseFloat(f);

        var g = document.getElementsByClassName("chemia")[0].value;
        g = parseFloat(g);

        var h = document.getElementsByClassName("informatyka")[0].value;
        h = parseFloat(h);
        var suma = b + c + d + e + f + g + h;
        console.log(suma);


        function obliczSrednia() {

            var srednia = (suma / 7).toFixed(2);
            srednia = parseFloat(srednia);
            console.log(srednia);
            var bonus = 0.5;
            bonus = parseFloat(bonus);

            var zajeciaDodatkowe = document.getElementsByClassName("zajecia-dodatkowe")[0].value;
            console.log(zajeciaDodatkowe);

            function dodajBonus() {
                if (zajeciaDodatkowe == "") {
                    console.log("nie-nie uczęszcza na zajęcia dodatkowe");
                    var sredniaKoncowa = srednia;
                    console.log(sredniaKoncowa);
                    if (sredniaKoncowa >= 4.75) {
                        document.getElementsByClassName("srednia")[0].style.backgroundColor = "greenyellow";
                        document.getElementsByClassName("uczen")[0].style.backgroundColor = "greenyellow";
                        console.log("średnia jest równa lub wyższa niz 4.75");
                    };
                    if (sredniaKoncowa < 4.75) {
                        document.getElementsByClassName("srednia")[0].style.backgroundColor = "white";
                        console.log("średnia jest niższa niz 4.75");
                    };
                    if (sredniaKoncowa == 1.00) {
                        document.getElementsByClassName("srednia")[0].style.backgroundColor = "red";
                        document.getElementsByClassName("uczen")[0].style.backgroundColor = "red";
                        console.log("średnia wynosi 1");
                    };
                } else {
                    console.log("tak-uczęszcza na zajęcia dodatkowe");
                    var sredniaKoncowa = srednia + bonus;
                    console.log(sredniaKoncowa);
                    if (sredniaKoncowa >= 4.75) {
                        document.getElementsByClassName("srednia")[0].style.backgroundColor = "greenyellow";
                        document.getElementsByClassName("uczen")[0].style.backgroundColor = "greenyellow";
                        console.log("średnia jest równa lub wyższa niz 4.75");
                    };
                    if (sredniaKoncowa < 4.75) {
                        document.getElementsByClassName("srednia")[0].style.backgroundColor = "white";
                        console.log("średnia jest niższa niz 4.75");
                    };
                    if (sredniaKoncowa == 1.00) {
                        document.getElementsByClassName("srednia")[0].style.backgroundColor = "red";
                        document.getElementsByClassName("uczen")[0].style.backgroundColor = "red";
                        console.log("średnia wynosi 1");
                    };
                };
                document.getElementsByClassName("srednia")[0].innerHTML = sredniaKoncowa.toFixed(2);
            };
            dodajBonus();
        };
        obliczSrednia();
    };
    showSrednia();


});
