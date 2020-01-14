document.addEventListener("DOMContentLoaded", function () {
    let getButtonRemove = document.getElementById("remove");
    getButtonRemove.addEventListener("click", removeChilds);

    function removeChilds() {
        let getList = document.querySelector("ul.list");
        getList.innerHTML = "";
    }
});