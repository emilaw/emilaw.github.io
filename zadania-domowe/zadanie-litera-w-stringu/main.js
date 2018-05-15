  'use strict';
  //  ROZWIĄZANIE 1
  //  
  //    var zdanie = "Szkoła Programowania Akademia 108";
  //    var litera = "a";
  //  
  //    function licz(zdanie, litera) {
  //        var wynik = 0;
  //        for (var i = 0; i < zdanie.length; ++i) {
  //            if (zdanie.charAt(i) == litera) {
  //                wynik++;
  //            }
  //        }
  //        return wynik;
  //    }
  //  
  //    console.log(licz(zdanie, litera));
  //    document.write("W zdaniu: " + zdanie + " jest " + (licz(zdanie, litera)) + " liter " + litera + ".");
  //


  //ROZWIĄZANIE 2
  //  'use strict';
  //
  //
  //  function licz(zdanie, litera1, litera2) {
  //
  //      var wynik = 0;
  //      for (var i = 0; i < zdanie.length; ++i) {
  //          if (zdanie.charAt(i) == litera1) {
  //              wynik++;
  //          }
  //          if (zdanie.charAt(i) == litera2) {
  //              wynik++;
  //          }
  //      }
  //      return wynik;
  //
  //
  //  }
  //  console.log(licz("Szkoła Programowania Akademia 108", "a", "A"));
  //  document.write(licz("Szkoła Programowania Akademia 108", "a", "A"));
  //


  //Rozwiązanie 3
  'use strict';


  function licz(zdanie, litera) {
      var str = zdanie;
      var str2 = str.toLowerCase();
      var wynik = 0;
      for (var i = 0; i < str2.length; ++i) {
          if (str2.charAt(i) == litera) {
              wynik++;
          }

      }
      return wynik;


  }
  console.log(licz("Szkoła Programowania Akademia 108", "a"));
  document.write(licz("Szkoła Programowania Akademia 108", "a"));
