'use strict';

//
//event przy puszczeniu klawisza klawiatury
//document.getElementsByTagName('body')[0].addEventListener('keyup', function (e) {
//    console.log(e);
//})



/*kopiowanie i wklejanie*/
//var paragraf = document.getElementById('copy');
//var btnCopy = document.getElementById('btn-c');
//var btnPaste = document.getElementById('btn-p');
//var output = document.getElementById('output');

/*domyślna zmienna obsługująca już skopiowany tekst*/
//var txt = '';
//
//btnCopy.addEventListener('click', function () {
//    txt = paragraf.innerHTML;
//    console.log(txt);
//});
//
//btnPaste.addEventListener('click', function () {
//    if (txt == "") {
//        output.innerHTML = "Skopiuj tekst";
//    } else {
//        output.innerHTML = txt;
//    }
//});


/*
manipulacja atrybutami-kolor*/

var output = document.getElementById('output');
var input = document.getElementsByTagName('input')[0];
var btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var color = input.value;
    output.style.backgroundColor = color;
});
