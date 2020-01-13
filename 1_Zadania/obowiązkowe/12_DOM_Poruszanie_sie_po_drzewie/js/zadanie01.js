document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {

            if (this.nextElementSibling != null) {
                this.nextElementSibling.hidden = !this.nextElementSibling.hidden;
            }
        });
    }
});