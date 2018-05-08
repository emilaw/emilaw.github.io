  'use strict';
//ROZWIĄZANIE 1

  var zdanie = "Szkoła Programowania Akademia 108";
  var litera = "a";

  function licz(zdanie, litera) {
      var wynik = 0;
      for (var i = 0; i < zdanie.length; ++i) {
          if (zdanie.charAt(i) == litera) {
              wynik++;
          }
      }
      return wynik;
  }

  console.log(licz(zdanie, litera));
  document.write("W zdaniu: " + zdanie + " jest " + (licz(zdanie, litera)) + " liter " + litera + ".");



//ROZWIĄZANIE 2
//'use strict';
//
//
//  function licz(zdanie, litera) {
//
//      var wynik = 0;
//      for (var i = 0; i < zdanie.length; ++i) {
//          if (zdanie.charAt(i) == litera) {
//              wynik++;
//          }
//      }
//      return wynik;
//
//
//  }
//  console.log(licz("Szkoła Programowania Akademia 108", "a"));
//  document.write(licz("Szkoła Programowania Akademia 108", "a"));