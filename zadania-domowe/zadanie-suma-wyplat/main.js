'use strict';

$(function () {

    $("#count-sum").click(function () {
        var sumaSalary = 0;
        $(".salary").each(function () {

            sumaSalary += parseInt($(this).text());
        });
        //pobierz element o ID #sum i podmień mu treść na obliczoną sumę
        $("#sum").empty().append(sumaSalary);
    })
})
