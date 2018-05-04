'use strict';

$(function () {
    $('#napis').fadeOut(-10000);

    $('#button1').click(function () {
        var div = $("#animation");

        div.animate({
            'left': '+=100',
            width: '100px',
            height: '100px'
        }, 3000);


        div.queue(function () {
            div.css({
                'background-color': 'blue',
                'transition': '5s'
            });
            div.dequeue();
        });

        $('#napis').delay(9000).fadeIn();
    })
})
