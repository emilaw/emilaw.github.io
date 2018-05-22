  'use strict';




  $(function () {


      $('#btn').on("click", function (e) {

          var lastBuyValue = $("#kupno").html();
          console.log(lastBuyValue);

          var lastSellValue = $("#sprzedaz").html();
          console.log(lastSellValue);


          $.getJSON('https://blockchain.info/pl/ticker', function (json) {
              console.log(json);

              var currentBuyValue = json.PLN.buy;
              $("#kupno").html(currentBuyValue);
              showIconB();


              var currentSellValue = json.PLN.sell;
              $("#sprzedaz").html(currentSellValue);
              showIconS();


              function showIconB() {

                  if (lastBuyValue > currentBuyValue) {
                      console.log("red");
                      $("#stan-kupno .fa-arrow-down").addClass("down");
                      $("#stan-kupno .fa-arrow-up").removeClass("up");
                      $("#stan-kupno .fa-minus").removeClass("brak");

                  }
                  if (lastBuyValue < currentBuyValue) {
                      console.log("green");
                      $("#stan-kupno .fa-arrow-up").addClass("up");
                      $("#stan-kupno .fa-arrow-down").removeClass("down");
                      $("#stan-kupno .fa-minus").removeClass("brak");

                  }
                  if (lastBuyValue == currentBuyValue) {

                      console.log("blue");
                      $("#stan-kupno .fa-minus").addClass("brak");
                      $("#stan-kupno .fa-arrow-up").removeClass("up");
                      $("#stan-kupno .fa-arrow-down").removeClass("down");
                  };
              };


              function showIconS() {

                  if (lastSellValue > currentSellValue) {
                      console.log("red");
                      $("#stan-sprzedaz .fa-arrow-down").addClass("down");
                      $("#stan-sprzedaz .fa-arrow-up").removeClass("up");
                      $("#stan-sprzedaz .fa-minus").removeClass("brak");
                  }
                  if (lastSellValue < currentSellValue) {
                      console.log("green");
                      $("#stan-sprzedaz .fa-arrow-up").addClass("up");
                      $("#stan-sprzedaz .fa-arrow-down").removeClass("down");
                      $("#stan-sprzedaz .fa-minus").removeClass("brak");

                  }
                  if (lastSellValue == currentSellValue) {
                      console.log("blue");
                      $("#stan-sprzedaz .fa-minus").addClass("brak");
                      $("#stan-sprzedaz .fa-arrow-up").removeClass("up");
                      $("#stan-sprzedaz .fa-arrow-down").removeClass("down");
                  };
              };

          });
      });

  });
