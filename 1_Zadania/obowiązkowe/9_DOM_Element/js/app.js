document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
//0
function getDatasInfo(elements){
    let newArraydata = []; 
    for(let i = 0; i < elements.length; i++){
        newArraydata.push(elements[i].dataset.color);
    }
    return newArraydata;
}
console.log(getDatasInfo(links));
//1
console.log(homeElement)
console.log(typeof homeElement)
console.log(childElements)
console.log(typeof childElements)
});
