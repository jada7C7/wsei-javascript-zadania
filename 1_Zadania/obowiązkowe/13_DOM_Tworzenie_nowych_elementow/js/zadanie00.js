document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("deleteBtn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", removeElement);
    }

    function removeElement() {
        let element = this.parentElement.parentElement;
        element.parentElement.removeChild(element);
    }
});