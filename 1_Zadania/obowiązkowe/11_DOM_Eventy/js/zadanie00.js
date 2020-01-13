//Zadanie 0a / 0b

document.addEventListener("DOMContentLoaded", function () {
    let parents = document.querySelectorAll(".parent");

    for (let i = 0; i < parents.length; i++) {
        let parent = parents[i];
        
        parent.addEventListener("mouseenter", function () {
            let children = parent.querySelector(".children");
            children.style.display = "block";
        });
        parent.addEventListener("mouseleave", function () {

            function hideChildrenElement(element) {
                let children = element.querySelector(".children");
                children.style.display = "none";
            }
            hideChildrenElement(this);
        })
    }

});