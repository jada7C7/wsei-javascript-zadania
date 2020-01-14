document.addEventListener("DOMContentLoaded", function () {
    var getMoveBtns = document.getElementsByClassName("moveBtn");
    for (let i = 0; i < getMoveBtns.length; i++) {
        getMoveBtns[i].addEventListener("click", changeList);
    }

    function changeList() {
        let getList1 = document.getElementById("list1");
        let getList2 = document.getElementById("list2");
        if (this.parentElement.parentElement.id != "list1") {
            getList1.appendChild(this.parentElement);
        } else {
            getList2.appendChild(this.parentElement);
        }

    }
});