  'use strict';

  $(function () {

      var lastBuyValue = document.getElementById("kupno").innerHTML;
      var lastSellValue = document.getElementById("sprzedaz").innerHTML;

      $('#btn').on("click", function (e) {
          $.getJSON('https://blockchain.info/pl/ticker', function (json) {
              console.log(json);

              var currentBuyValue = $(json.THB.buy);
              $("#kupno").empty();
              $("#kupno").prepend(json.THB.buy).value;
              showIconB();

              var currentSellValue = $(json.THB.sell);
              $("#sprzedaz").empty();
              $("#sprzedaz").prepend(json.THB.sell).value;
              showIconS();


              function showIconB() {
                  if (lastBuyValue > currentBuyValue) {
                      console.log("red");
                      $("#stan-kupno .fa-arrow-down").addClass("down");
                  }
                  if (lastBuyValue < currentBuyValue) {
                      console.log("green");
                      $("#stan-kupno .fa-arrow-up").addClass("up");
                  } else {
                      console.log("blue");
                      $("#stan-kupno .fa-minus").addClass("brak");
                  };
              };


              function showIconS() {
                  if (lastSellValue > currentSellValue) {
                      console.log("red");
                      $("#stan-sprzedaz .fa-arrow-down").addClass("down");
                  }
                  if (lastSellValue < currentSellValue) {
                      console.log("green");
                      $("#stan-sprzedaz .fa-arrow-up").addClass("up");
                  } else {
                      console.log("blue");
                      $("#stan-sprzedaz .fa-minus").addClass("brak");
                  };
              };

          });
      });

  });




  //var currentBuyValue = $("#kupno").val();
  //  console.log(lastBuyValue);
  //  var currentSellValue = $("#sprzedaz").val();
  //  console.log(lastSellValue);




  //  function znak(e) {
  //      "" != e && $.each(e, function (e, s) {
  //          var a = $("#" + e).text(),
  //              t = $("#" + e + "_NBP").text();
  //          t = t.replace(",", "."), $("#" + e).text(s.mid), $("#" + e).text() > a && $("#" + e).removeClass("red").removeClass("blue").addClass("green"), $("#" + e).text() < a && $("#" + e).removeClass("green").removeClass("blue").addClass("red"), $("#" + e).text() == a && $("#" + e).removeClass("green").removeClass("red2").addClass("blue");
  //          var l = (s.mid - t) / (t / 100);
  //          (l = l.toFixed(2)) < "0" && $("#" + e + "_zm").removeClass("ziel").removeClass("nieb").addClass("czer"), l > "0" && $("#" + e + "_zm").removeClass("czer").removeClass("nieb").addClass("ziel"), "0.00" == (l = l.replace("-", "")) && $("#" + e + "_zm").removeClass("ziel").removeClass("czer").addClass("nieb"), $("#" + e + "_zm").text(l + "%"), $("#" + e + "_czas").text(s.czas)
  //      })
  //  }
  //  })
  //  }
  //  $(document).ready(function () {
  //      $("table#waluty tbody tr:first-child").addClass("active").closest("tr").next("tr").addClass("showChart"), $("table#waluty tbody tr").click(function () {
  //          this.className.indexOf("showChart") < 0 && ($("table#waluty tr").not(this).removeClass(), $(this).addClass("active").closest("tr").next("tr").addClass("showChart"))
  //      }), $("table#gielda tbody tr:first-child").addClass("active").closest("tr").next("tr").addClass("showChart"), $("table#gielda tbody tr").click(function () {
  //          this.className.indexOf("showChart") < 0 && ($("table#gielda tr").not(this).removeClass(), $(this).addClass("active").closest("tr").next("tr").addClass("showChart"))
  //      }), $("#mobileTrigger").click(function () {
  //          var e = $("#header #navigation ul");
  //          e.is(":visible") ? e.stop().slideUp() : e.stop().slideDown()
  //      })
  //  });
