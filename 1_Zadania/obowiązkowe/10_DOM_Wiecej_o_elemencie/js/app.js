document.addEventListener("DOMContentLoaded", function () {

    //Exercise 0

    let ex5 = document.querySelector(".ex5");
    let allLiElementInEx5 = ex5.querySelectorAll("li");
    for (let i = 0; i < allLiElementInEx5.length; i++) {
        let element = allLiElementInEx5[i];
        let counter = parseInt(i + 1);
        if (counter % 2 == 0) {
            element.style.backgroundColor = "green";
        }
        if (counter == 5) {
            element.classList.add("big")
        }
        if (counter % 3 == 0) {
            element.style.textDecoration = "underline";
        }
    }

    // Exercise 1
    let getChrome = document.querySelector(".exercise.ex1 .chrome");
    let getEdge = document.querySelector(".exercise.ex1 .edge");
    let getFirefox = document.querySelector(".exercise.ex1 .firefox");
    browserFix(getChrome);
    browserFix(getEdge);
    browserFix(getFirefox);
    function browserFix(browser) {
        let link = browser.parentNode.querySelector("a");
        if (browser.classList.contains("chrome")) {
            link.text = "Chrome";
            browser.style.backgroundImage = "url('./assets/img/chrome.png')";
            link.href = "https://www.google.com/intl/pl_pl/chrome/";
            browser.style.width = "100px";
        }
        if (browser.classList.contains("firefox")) {
            link.text = "Firefox";
            browser.style.backgroundImage = "url('./assets/img/firefox.png')";
            link.href = "https://www.mozilla.org/pl/firefox/new/";
        }
        if (browser.classList.contains("edge")) {
            link.text = "Edge";
            browser.style.backgroundImage = "url('./assets/img/edge.png')";
            link.href = "https://www.microsoft.com/pl-pl/windows/microsoft-edge/";
        }
    }
    //because we refer directly to the element, we not chenge css document only html

    // Exercise 2
    let name = document.getElementById("name");
    name.innerHTML = "Sylwester Sz";
    let favColor = document.getElementById("fav_color");
    favColor.innerHTML = "Blue";
    let favMeal = document.getElementById("fav_meal");
    favMeal.innerHTML = "Dumplings";

    //Exercise 3
    let getEx3Ul = document.querySelector(".exercise.ex3 ul");
    getEx3Ul.classList.add("menu");
    for (let i = 0; i < getEx3Ul.children.length; i++) {
        let element = getEx3Ul.children[i];
        element.classList.add("menuElement");
        if (element.classList.contains("error")) {
            element.classList.remove("error");
        }
    }

    //Exercise 4
    let getEx4UlChildren = document.querySelector(".exercise.ex4 ul").children;
    for (let i = 0; i < getEx4UlChildren.length; i++) {
        getEx4UlChildren[i].setAttribute("data-id", i + 1);
    }

}); 