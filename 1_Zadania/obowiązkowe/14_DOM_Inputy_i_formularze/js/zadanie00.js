document.addEventListener("DOMContentLoaded", function () {

    let getForm = document.forms[0];
    getForm.addEventListener("submit", validateForm);

    function validateForm() {
        let getEmail = document.getElementById("email").value;
        let getName = document.getElementById("name").value;
        let getSurname = document.getElementById("surname").value;
        let getPassword = document.getElementById("pass1").value;
        let getPasswordRepeat = document.getElementById("pass2").value;
        let getErrorMessage = document.querySelector(".error-message");
        if (getEmail.indexOf('@') != -1) {
            if (getName.length > 6) {
                if (getSurname.length > 6) {
                    if ((getPassword != "" || getPasswordRepeat != "") && (getPassword == getPasswordRepeat)) {
                        if (document.getElementById("agree").checked == true) {
                            return true;
                        } else {
                            getErrorMessage.innerHTML = "Musisz zaakceptować warunki";
                            event.preventDefault();
                        }
                    } else {
                        getErrorMessage.innerHTML = "Hasła nie są takie same lub puste";
                        event.preventDefault();
                    }
                } else {
                    getErrorMessage.innerHTML = "Twoje nazwisko jest za krótkie";
                    event.preventDefault();
                }
            } else {
                getErrorMessage.innerHTML = "Twoje imię jest za krótkie";
                event.preventDefault();
            }
        } else {
            getErrorMessage.innerHTML = "Email musi posiadać znak @";
            event.preventDefault();
        }
    }
});