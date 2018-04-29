'use strict';


var jsonPracownicy =

    {
        "pracownicy": [
            {
                "firstName": "Krystian",
                "lastName": "Dziopa"
            },
            {
                "firstName": "Anna",
                "lastName": "Szapiel"
            },
            {
                "firstName": "Piotr",
                "lastName": "Żmuda"
            }
    ]
    }
console.log(jsonPracownicy);

var pracownicy = jsonPracownicy.pracownicy;

pracownicy.forEach(function (pracownicy, index) {
    console.log("pracownik o indeksie " + index + ' ' + pracownicy.firstName + ' ' + pracownicy.lastName);
})
