  'use strict';

  var div = document.createElement("div");
  div.id = "dane-programisty";
  document.body.appendChild(div);



  $(function () {
      $('#btn').click(function () {
          $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (json) {
              console.log('imię: ' + json.imie + ' Nazwisko: ' + json.nazwisko + ' Zawód: ' + json.zawod + ' Firma: ' + json.firma);

              $("div").append('imię: ' + json.imie + ' Nazwisko: ' + json.nazwisko + ' Zawód: ' + json.zawod + ' Firma: ' + json.firma);
          });
      });
  });
