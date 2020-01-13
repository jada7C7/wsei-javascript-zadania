document.addEventListener("DOMContentLoaded", function () {
    //1
    let getFirstEL = document.querySelector(".first :nth-child(1)").children[2];

    console.log(getFirstEL);

    let getSecondEl = document.getElementById("second").parentElement.children[3];

    console.log(getSecondEl);

    const getThirdEl = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.children[0];

    const getThirdElMiddle = getThirdEl.children[Math.floor(getThirdEl.childElementCount / 2)];

    console.log(getThirdElMiddle);

    const getFourthEL = document.querySelector("div.forth").parentElement.querySelectorAll("article:first-of-type p")[1];

    console.log(getFourthEL);

});