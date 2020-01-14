document.addEventListener("DOMContentLoaded", function () {

    let getSubmitBtn = document.querySelector(".btn-primary");
    getSubmitBtn.addEventListener("click", validateForm);

    function validateForm() {
        let getEmail = document.getElementById("email").value;
        let getName = document.getElementById("name").value;
        let getSurname = document.getElementById("surname").value;
        let getPassword = document.getElementById("pass1").value;
        let getPasswordRepeat = document.getElementById("pass2").value;
        if (getEmail.indexOf('@') != -1) {
            if (getName.length > 6) {
                if (getSurname.length > 6) {
                    if (getPassword != "" || getPasswordRepeat != "" && getPassword == getPassword) {
                        if (document.getElementById("agree").checked == true) {
                            return true;
                        } else {
                            document.querySelector(".error-message").innerHTML = "Musisz zaakceptować warunki";
                            event.preventDefault();
                        }
                    } else {
                        document.querySelector(".error-message").innerHTML = "Hasła nie są takie same lub puste";
                        event.preventDefault();
                    }
                } else {
                    document.querySelector(".error-message").innerHTML = "Twoje nazwisko jest za krótkie";
                    event.preventDefault();
                }
            } else {
                document.querySelector(".error-message").innerHTML = "Twoje imię jest za krótkie";
                event.preventDefault();
            }
        } else {
            document.querySelector(".error-message").innerHTML = "Email musi posiadać znak @";
            event.preventDefault();
        }
    }
});