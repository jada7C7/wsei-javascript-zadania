document.addEventListener("DOMContentLoaded", function () {
    const lists = document.querySelectorAll(".listContainer");
    for (let i = 0; i < lists.length; i++) {
        lists[i].addEventListener("mouseover", function () {
            let getList = this.querySelector("ul.list");
            getList.style.color = "green";
            getList.lastElementChild.style.color = "blue";
            getList.children[0].style.color = "red";
        });
        lists[i].addEventListener("mouseleave", function () {
            let getList = this.querySelector("ul.list");
            getList.style.color = "";
            getList.lastElementChild.style.color = "";
            getList.children[0].style.color = "";
        });
    }
});