  'use strict';

  //ROZWIĄZANIE PIERWSZE:

  //  liczba = prompt("podaj liczbę: ");
  //  var liczba = (liczba % 2 == 0) ? "parzysta" : "nieparzysta";
  //  document.write("podana liczba jest " + liczba);



  //ROZWIĄZANIE DRUGIE Z FUNKCJĄ

  var wynik = Boolean;

  function sprawdz(liczba) {
      var liczba = liczba % 2;
      liczba % 2 == 0;
      if (liczba == true) {
          console.log(wynik = false);
      } else {
          console.log(wynik = true);
      };
      return wynik;
  };

  sprawdz(24);
