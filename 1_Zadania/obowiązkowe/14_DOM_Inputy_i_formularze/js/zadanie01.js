document.addEventListener("DOMContentLoaded", function () {
    let getInvoiceCheckbox = document.getElementById("invoice");
    getInvoiceCheckbox.addEventListener("click", showInvoiceFields);
    showInvoiceFields();
    function showInvoiceFields() {
        var getInvoiceDataFields = document.getElementById("invoiceData");
        if (getInvoiceCheckbox.checked == true) {
            getInvoiceDataFields.style.display = "block";
        } else {
            getInvoiceDataFields.style.display = "none";
        }
    }
});