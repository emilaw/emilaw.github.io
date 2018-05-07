'use strict';



$(function () {

    $('#btn-animuj').on('click', function () {

        $('#anim').animate({
            'top': '200px',
            'left': '300px',
            'width': '500px',
            'height': '350px'
        }, 3000, function () {
                        $('#anim').addClass('new_background');
            $('#anim').delay(3000).animate({
                'top': '0px',
                'left': '200px',
                'width': '100px',
                'height': '100px'
            }, 3000);


        });
    });
});
