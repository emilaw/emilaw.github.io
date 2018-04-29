'use strict';

//
////parfaraf z tekstem. który zmieni kolor czcionki na pomarańczowy po kliknięciu
////
//
//
//$(function () {
//
//    $('p').click(function () {
//        $(this).css({
//            "color": "orange"
//        })
//    });
//
//    //button, który po najechaniu na niego myszką zmieni kolor na zielony a po wyjechaniu myszka na niebieski  
//
//    $('#button').on({
//        'mouseenter': function () {
//            $(this).css({
//                "color": "green",
//                'background-color': 'blue'
//            });
//        },
//        'mouseleave': function () {
//            $(this).css({
//                "color": "blue",
//                'background-color': 'green'
//            });
//        }
//
//    })
//})

//zadanie 2
//paragraf(dac background) i przycisk po kliknieciu przycisku paragraf ma sie schowac(hide) w ciągu 3 s(3000 ms) a nastepnie pokazać w atkim samym czasie.








$(function () {
    //$('p').hide(3000).show(1000).slideDown().
    //
    $('#button').click(function () {
        $("p").hide(3000);
        $("p").show(3000);
    })
    $('h1').css({
        'background-color': 'yellow',
    });
});
//h1(dac background) i przycisk tak jak wyżej, ale uzywając fadeOut i fadeIn
$('#button-header1').click(function () {
    $('h1').fadeOut(2000);
    $('h1').fadeIn(2000);
})
//h2(dac background) i przycisk tak jak wyżej, ale uzywając slideUp i slideDown
//
$('#button-header2').click(function () {
    $('h2').slideUp(2000);
    $('h2').slideDown(2000);
})
//div i animacja ma ruszać przy załadowaniu strony. DIV ma najpeirw zwiększać hight i width do 200px, a nastepnie zmniejszac do 100px i tak w kółko

animateDiv()

function animateDiv() {
    $('div')
        .animate({
            width: '200px',
            height: '200px'
        }, 3000)
        .animate({
            width: '100px',
            height: '100px'
        }, 3000, animateDiv)

}



//pluralsight.com - strona z materialami i szkolenaimi/filmami on-line.
//visual studio dev-esentials (Pliralsight-darmowy na 3 m-ce).
//syncfusion -ebooki succinctly-kompendia.
