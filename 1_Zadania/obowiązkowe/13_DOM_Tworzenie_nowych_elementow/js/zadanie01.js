document.addEventListener("DOMContentLoaded", function () {
    let getButton = document.querySelector(".button");
    let counterElement = 0;
    getButton.addEventListener("click", addNewElement);

    function addNewElement() {
        let menu = document.querySelector(".menu");
        let createLiElement = document.createElement("li");
        createLiElement.innerHTML = "Element " + (counterElement + 1) + " - w chwili dodania było " + counterElement + " elementów";
        menu.appendChild(createLiElement);
        counterElement++;
    }
});