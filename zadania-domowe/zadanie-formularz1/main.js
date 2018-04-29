'use strict';


var submitButton = document.getElementById("wyslij");

submitButton.onclick = function (e) {
    e.preventDefault();

    validateFormFields();
}

function validateFormFields() {
    var nameTextBox = document.getElementById("name");
    var emailTextBox = document.getElementById("email");

    if (nameTextBox.value.trim().length <= 0) {
        insertErrorMessage("Nie wpsiano imienia!", nameTextBox);
    }
    if (emailTextBox.value.trim().length <= 0) {
        insertErrorMessage("Nie wpsiano maila!", emailTextBox);
    }
}


function isertErrorMessage(errorMessage, inputElement) {
    var errorMessageElement = document.createElement('p');
    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML = errorMessage;
    insertAfter(errorMessageElement, inputElement);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


//
//var lastCheckbox = document.getElementById("wszytkie-zgody");
//
//var allCheckboxes = document.querySelectorAll("input[type=checkbox]");
//
//function checkboxState(lastCheckboxState) {
//    allCheckboxes[0].checked=lastCheckboxState;
allCheckboxes[0].checked = lastCheckboxState;

//    allCheckboxes[1].checked=lastCheckboxState;
//    //}
