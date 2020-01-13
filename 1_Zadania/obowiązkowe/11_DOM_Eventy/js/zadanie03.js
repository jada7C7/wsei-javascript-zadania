document.addEventListener("DOMContentLoaded", function () {
    //Zadanie 3
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    let butons = [button1, button2, button3];
    for (let i = 0; i < butons.length; i++) {
        butons[i].addEventListener("click", function () {
            let getCounter = this.nextElementSibling.querySelector("span.counter");
            let getTextCounter = getCounter.textContent;
            getCounter.textContent = parseInt(getTextCounter) + 1;

        });
    }
});