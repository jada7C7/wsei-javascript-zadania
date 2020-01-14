document.addEventListener("DOMContentLoaded", function () {

    let getButtonRemove = document.getElementById("remove");
    getButtonRemove.addEventListener("click", removeButton);
    
    function removeButton() {
        getButtonRemove.parentNode.removeChild(getButtonRemove);
    }
});