document.addEventListener("DOMContentLoaded", function () {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    let boxes = [box1, box2, box3];
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function () {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    }

});