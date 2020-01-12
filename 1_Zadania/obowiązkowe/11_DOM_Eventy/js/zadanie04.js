document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    let butons = [button1, button2, button3];
    for (let i = 0; i < butons.length; i++) {
        butons[i].addEventListener("click", function () {
            let getCounter = document.querySelector("p").querySelector("span.counter");
            getCounter.textContent = parseInt(getCounter.textContent) +1;
        });
    }
})