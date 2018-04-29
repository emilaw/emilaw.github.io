'use strict';

var pFirst = document.getElementById("parFirst");
console.log(pFirst);

var sClass = document.getElementsByClassName("superlink");
console.log(sClass);

var allTagsA = document.getElementsByTagNameNS("a");
console.log(allTagsA);

var pSecond = document.querySelector("#parSecond");
console.log(pSecond);

var firstLink = document.querySelector(".superlink");
console.log(firstLink);

var allLink = document.querySelectorAll(".superlink");
console.log(allLink);
