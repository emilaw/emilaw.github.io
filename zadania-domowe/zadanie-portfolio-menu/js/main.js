'use strict';

$(function () {
    $("a[href*='#']:not([href='#'])").click(function () {
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#main-nav").addClass("scroll");
            $(".nav-link").addClass("scroll2");

        } else {
            $("#main-nav").removeClass("scroll");
            $(".nav-link").removeClass("scroll2");
        }
    });

});
