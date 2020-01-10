document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //Exercise 0
    let elementCLassTitle = document.getElementsByClassName("title");
    function getDataAnimation(element) {
        let elementDataAttr = element[0].dataset.animation;
        return elementDataAttr;
    };
    getDataAnimation(elementCLassTitle);

    //Exercise 1
    let HomeElement = document.getElementById("home");
    console.log(HomeElement);
    let HomeElement2 = document.querySelector("#home");
    console.log(HomeElement2);
    let liElement = document.querySelector("li[data-direction]")
    console.log(liElement);
    let firstBlock = document.querySelector(".block");
    console.log(firstBlock);

    //Exercise 2

    let navLiElements = document.querySelectorAll('nav li');
    console.log(navLiElements);
    console.log(navLiElements.length);
    let allPDiv = document.querySelectorAll('div p');
    console.log(allPDiv);
    console.log(allPDiv.length);
    let allDivArticle = document.querySelectorAll('article div');
    console.log(allDivArticle);
    console.log(allDivArticle.length);


    //Exercise 3
    
    let firstArticle = document.querySelectorAll("article.first");
    console.log(firstArticle);
    console.log(firstArticle.length);
    let h1Elements = firstArticle[0].querySelectorAll('h1');
    console.log(h1Elements);
    console.log(h1Elements.length);
});
