document.addEventListener("DOMContentLoaded", function () {
    let select = document.querySelector('select.form-control');
    let images = document.querySelectorAll('img');

    function showValidImage() {
        for (let i = 0; i < images.length; i++) {
            if (images[i].alt == select.value) {
                images[i].style.display = "block";
            } else {
                images[i].style.display = "none";
                if (select.value == "Os X" && images[i].alt == "Apple") {
                    images[i].style.display = "block";
                }
            }
        }
    }

    select.addEventListener('change', showValidImage);

    showValidImage();
});