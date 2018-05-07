  'use strict';



  function showData(arrData) {
      var html = '';
      arrData.forEach(function (elem, index) {
          html += "<p>Tytuł: <strong>" + elem.litle + "</strong></p>";
          /* console.log(elem.title);
          console.log("=================");*/
      });
      document.body.innerHTML = html;
  }









  function ajax(method, url) {
      /*stworzenie obiektu XMLHttpRequest*/
      var httpReq = new XMLHttpRequest();

      /*otwarcie połączenia */
      httpReq.open(method, url);

      /*sprawdzenie statusu połączenia-zdarzenie zmiany statusu połączenia*/
      httpReq.addEventListener('readystatechange', function () {

          /*jeśli readyState==4 - dane zwrócone i gotowe do uzycia*/
          if (httpReq.readyState == 4) {

              /*sprawdzić czy kod statusu odpowiedzi z serwera wynosi 200-prawidłowy kod*/
              if (httpReq.status == 200) {
                  /*console.log(httpReq);*/

                  /*pobierz dane*/
                  var data = httpReq.responseText;

                  /* pobrane dane zamieniamy(parsujemy) na JSON*/
                  var jsonData = JSON.parse(data);
                  showData(jsonData);
                  /*console.log(jsonData);*/

                  /*lub np.:   
                  console.log(jsonData.userName); 
                  console.log(jsonData.userId);
                  console.log(jsonData.userURL);
                  -jeśli chcę pobrać tylko konkretną właściwość w postaci stringa*/
              }
          }
      });
      httpReq.send();
  }
  ajax('GET',
      /*wstawić adres url*/
      /*np.:  "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl"*/
      'https://jsonplaceholder.typicode.com/posts/');
