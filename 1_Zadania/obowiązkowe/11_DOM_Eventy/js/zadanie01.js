document.addEventListener("DOMContentLoaded", function () {

    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

    //Exercise 1

    //1.1
    // in script file we try get element when it not exist on page, on the firs 
    //place the javascript code is loading and after the html code


    //1.2
    // the event "DOMContentLoaded" talk browser that must waiting 
    //on the page is loading and after run javacript code

    //1.3 
    //In this task the replace script tag on the bottom file nothing vhnage because
    //the event "DOMContentLoaded" still "blocked" browser run js code

    
});