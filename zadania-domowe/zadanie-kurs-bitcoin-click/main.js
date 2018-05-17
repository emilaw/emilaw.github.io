  'use strict';


  var lastBuyValue = document.getElementById("kupno").innerHTML;
  console.log(lastBuyValue);
  var lastSellValue = document.getElementById("sprzedaz").innerHTML;
  console.log(lastSellValue);


  $(function () {

      $('#btn').on("click", function (e) {
              $.getJSON('https://blockchain.info/pl/ticker', function (json) {
                      console.log(json);

                      var currentBuyValue = $("#kupno").prepend(json.THB.buy);
                      showIconB();

                      var currentSellValue = $("#sprzedaz").prepend(json.THB.sell);
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

                          } else {
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
                          } else {
                              console.log("blue");
                              $("#stan-sprzedaz .fa-minus").addClass("brak");
                              $("#stan-sprzedaz .fa-arrow-up").removeClass("up");
                              $("#stan-sprzedaz .fa-arrow-down").removeClass("down");
                          };
                      };
                  };

              });
      });

  });
