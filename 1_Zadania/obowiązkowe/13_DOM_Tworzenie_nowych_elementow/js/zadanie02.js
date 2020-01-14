document.addEventListener("DOMContentLoaded", function () {
    var getOrders = document.querySelector("#orders");
    var getAddButton = document.getElementById("addBtn");
    getAddButton.addEventListener("click", addNewOrder);


    function addNewOrder() {
        let getOrderNr = document.getElementById("orderId").value;
        let getItem = document.getElementById("item").value;
        let getQuantity = document.getElementById("quantity").value
        if (Number(getOrderNr) && Number(getQuantity)) {
            let careateTr = document.createElement("tr");
            let createOrderTd = document.createElement("td");
            createOrderTd.innerHTML = getOrderNr;
            let createItemTd = document.createElement("td");
            createItemTd.innerHTML = getItem;
            let createQuantityTd = document.createElement("td");
            createQuantityTd.innerHTML = getQuantity;
            careateTr.appendChild(createOrderTd);
            careateTr.appendChild(createItemTd);
            careateTr.appendChild(createQuantityTd);
            getOrders.appendChild(careateTr);
        } else {
            alert("Wartości w polach 'Numer zamówienia' i 'Liczba przedmiotów' muszą być lczbami!");
        }
    }
});