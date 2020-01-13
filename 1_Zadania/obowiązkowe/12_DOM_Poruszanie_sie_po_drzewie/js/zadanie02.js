document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            this.parentElement.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });
    }
});