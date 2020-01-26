document.addEventListener('DOMContentLoaded', function () {
    let gallery = document.getElementById("gallery").children;
    let tagInput = document.getElementById("tagInput");
    let showButton = document.getElementById("showButton");
    let hideButton = document.getElementById("hideButton");
    let actualTag = "";

    showButton.addEventListener("click", show);
    hideButton.addEventListener("click", hide);
    function filterImage(status) {
        if (actualTag != "") {
            for (let i = 0; i < gallery.length; i++) {
                if (gallery[i].dataset.tag.indexOf(actualTag) != -1) {

                    status ? gallery[i].classList.remove("invisible") : gallery[i].classList.add("invisible")
                } else {

                    status ? gallery[i].classList.add("invisible") : gallery[i].classList.remove("invisible")
                }
            }
        }
    }
    function clear() {
        tagInput.value = "";

    };
    function show() {
        actualTag = tagInput.value;
        clear();
        filterImage(1);
    };
    function hide() {
        actualTag = tagInput.value;
        clear();
        filterImage(0);


    };
});