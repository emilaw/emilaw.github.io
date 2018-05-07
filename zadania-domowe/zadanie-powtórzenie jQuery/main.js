'use strict';


//blokowanie domyślnej akcji

var btn = document.getElementById('wyslij');
var output = document.querySelector('#output');

//preventDefault robimy na evencie(e)

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    //    console.log(imie, nazwisko);

    output.innerHTML = "<p class='my Class' style='font-size:2rem;'> imie:" + imie + "</p><p class='myClass'>nazwisko:" + nazwisko + "</p>";
});
