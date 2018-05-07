  'use strict';
  $(function () {
      var html = '';

      function showData(arrData) {

          arrData.forEach(function (elem, index) {
              html += "<p>Tytuł: <strong>" + elem.title + "</strong></p>";
          });
          document.body.innerHTML = html;
      }

      $.getJSON(
          "https://jsonplaceholder.typicode.com/posts/",
          function (data) {
              showData(data);
              console.log(data);
          });

  });
