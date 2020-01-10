document.addEventListener("DOMContentLoaded", function () {

    //Exercise 0

    let ex5 = document.querySelector(".ex5");
    let allLiElementInEx5 = ex5.querySelectorAll("li");
    for (let i = 0; i < allLiElementInEx5.length; i++) {
        let element = allLiElementInEx5[i];
        let counter = parseInt(i + 1);
        if (counter % 2 == 0) {
            element.style.backgroundColor = "green";
        }
        if (counter == 5) {
            element.classList.add("big")
        }
        if(counter % 3 == 0){
            element.style.textDecoration = "underline"; 
        }
    }

    // Exercise 1
    
}); 