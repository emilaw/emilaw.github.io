'use strict';





$(function () {
    $('#first').css({
        color: 'red',
        'background-color': 'green',
        'font-size': '40px',
        'display': 'block'
    });
});


//paragraf z jakimś tekstem
//korzystając z jquery wrzućcie ten tekst do konsoli
//zmieńcie tekst w tym paragrafie korzystając z funkcji text()
//i znowu wylogujcie
//
//W innym paragrafie, korzystając z jquery, dodajcie kod html
//Potem dodajcie mu coś na koniec korzystając z append()
//i na początek korzystając z prepend()
//wrzućcie kolejny paragraf po nim korzystając z after()
//
//zróbcie element h1 z zawartością w której będzie m.in. tag strong, a
//potem usuńcie ten tag
//korzystając z jquery remove()
//
//na wszystkich paragrafach zmieńcie z poziomu jquery czcionkę na 30px i
//kolor na czerwony
//Do elementu h1 dodajcie klasę blue (addClass), która bedzie zdefiniowana
//w css i będzie
//zmieniać kolor na niebieski

$(function () {
    var paragraf = $(".p1");
    console.log(paragraf.text());
    paragraf.text("zmieniony tekst");
    console.log(paragraf.text());

    var innyParagraf = $(".p2");
    innyParagraf.html(" to jest <strong>HTML</strong>");

    innyParagraf.append("coś na końcu");
    innyParagraf.prepend("cos na początku ");
    innyParagraf.after("<p>Nowy paragraf</p>")

    $("h1>strong").remove();

    $('p').css


    $('h1').addClass('blueClass');
})


console.log($('#first').text());


$('#first').text("nowy tekst");
console.log($('#first').text());

$('#second').append("<h1>nagłówek pierwszy</h1>");

$('#second').prepend("<h2>nagłówek drugi</h2>");

$('#second').after("<p>Nowy paragraf</p>");


$('h1').find('strong').remove()

$(function () {
    $('p').css({
        color: 'red',
        'font-size': '30px',
    });
});

$('h1').addClass('blueClass');


// $(function colorChange() {

$("#animation")
    .css(
        'background-color',
        'blue')
})
colorChange()
//znajdz element p, który jest drugi na stronie(korzystając z eq())
//i zmien mu background - color na zielony
//
////dla każdego p na stronie dodaj klasę, zgodnie z wzorcm: "paragraf - " + numer paragrafu
//
//
//$("p:eq(1)").css({
//    'background-color': 'green'
//})
//
//$('p').addClass(function (index) {
//return 'paragraf- ' + (index + 1)
//});
//
//
//)
