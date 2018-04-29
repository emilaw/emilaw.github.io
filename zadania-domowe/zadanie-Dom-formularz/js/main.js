'use strict';
/*


document.getElementsById("submit")




function pobierzDane(fname, lname) {
    var name1 = document.getElementsByTagName("fname");
    console.log(name1);
    var name2 = document.getElementsByTagName("lname");
    console.log(name2);
}

pobierzDane();
*/


var submitButton = document.querySelector("input[type=submit]");

submitButton.onclick = function (e) {
    e.preventDefault();
    var inputs = e.currentTarget.parentElement.getElementsByTagName("input");
    console.log(inputs[0].value);
    console.log(inputs[1].value);

}

//
///*gdy funkcja ma dotcyzyć wszytkich innych pól oprócz submit*/
//if (inputs[i].type == "submit") {
//    console.log(inputs[i].name + ": " + inputs[i].value);
//}
