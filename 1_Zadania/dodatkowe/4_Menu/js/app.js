document.addEventListener('DOMContentLoaded', function () {
    let listElmenets = document.querySelector(".nav ul").children;
    for (let i = 0; i < listElmenets.length; i++) {
        listElmenets[i].addEventListener("mouseover", mouseOver);
        listElmenets[i].addEventListener("mouseout", mouseOut);
    }
    function mouseOver() {
        let subList = this.querySelector("ul");
        if (subList != null) {
            subList.style.display = "block";
        }
    }
    function mouseOut() {
        let subList = this.querySelector("ul");
        if (subList != null) {
            subList.style.display = "none";
        }

    }

});