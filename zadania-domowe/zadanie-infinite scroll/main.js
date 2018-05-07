'use strict';


//wysokośc całego dokumentu 
//document.documentElement.offsetHeight


//odległość od poczatku strony
//document.documentElement.scrollTop


//wysokość ekranu/przeglądarki
//window.innerHeight

window.addEventListener('scroll', function () {

    //pobranie do zmiennej elementu html
    var doc = document.documentElement;

    //pobranie do zmiennej wysokości elementu html
    var docHeight = doc.offsetHeight;


    //pobranie odległości bieżącej pozycji okna od początku
    var top_ = doc.scrollTop;

    //pobranie wyskości okna przeglądarki
    var windowHeight = window.innerHeight;

    //obliczenie bieżącego położenia okna przglądarki
    var topOffset = top_ + windowHeight;


    //jesli bieżące połozenie okna przeglądarki ==wysokość całego dokumentu, wykonuje zapytanie ajax i dostawiam na końcu listy nowe dane
    if (topOffset == docHeight) {
        console.log("Jestem na końcu strony");

        //zapytanie ajax
        $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
            var newListElement = "";
            data.forEach(function (elem, ind) {
                newListElement += '<div class="my_item">';
                newListElement += '<div class="id">' + elem.id + '</div>';
                newListElement += '<div class="name">' + elem.name + '</div>';
                newListElement += '<div class="mail">' + elem.website + '</div>';
                newListElement += '<hr>';
                newListElement += '<div>';

            });
            document.getElementById('my-item').insertAdjacentHTML('beforeend', newListElement);
        });
    };
});
