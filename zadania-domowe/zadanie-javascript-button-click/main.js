  'use strict';

  /*kod w JS*/
  //  var btn = document.getElementById('btn');
  //  var output = document.getElementById('output');
  //
  //
  //  function pobierzDane() {
  //      ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/');
  //  }
  //
  //  function ajax(method, url) {
  //      var httpReq = new XMLHttpRequest();
  //      httpReq.open(method, url);
  //      httpReq.addEventListener('readystatechange', function () {
  //          if (httpReq.readyState == 4) {
  //              if (httpReq.status == 200) {
  //                  var data = httpReq.responseText;
  //                  output.innerHTML = data;
  //              };
  //          };
  //      });
  //      httpReq.send();
  //  };
  //  btn.addEventListener('click', pobierzDane);


  /*kod w JQuery*/
  $(function () {

      $('#btn').on('click', function () {
          $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
              function (data) {
                  $('#output').text('ID: ' + data.userId + ', Nazwa: ' + data.userName + ', www: ' + data.userURL);
                  console.log(data);

              });
      });
  });
