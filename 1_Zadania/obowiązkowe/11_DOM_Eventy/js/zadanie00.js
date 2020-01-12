//Exercise 0a / 0b

document.addEventListener("DOMContentLoaded", function () {
    let parents = document.querySelectorAll(".parent");

    for (let i = 0; i < parents.length; i++) {
        let parent = parents[i];
        let children = parent.querySelector(".children");

        parent.addEventListener("mouseenter", function () {
            children.style.display = "block";
        });
        parent.addEventListener("mouseleave", function () {
            // function hideChildrenElement(element) {
            //     element.style.display = "none";
            // }
            // console.log(this)
            //???
            // this.hideChildrenElement(this);
        })
    }

});