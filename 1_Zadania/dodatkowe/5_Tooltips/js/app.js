/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function(){
    let tooltip = document.getElementsByClassName("tooltip");

    for (let i = 0; i < tooltip.length; i++) {
        tooltip[i].addEventListener("mouseover", mouseOver);
        tooltip[i].addEventListener("mouseout", mouseOut);
    }
    function createTooltip(text){
        let element = document.createElement("div");
        element.innerHTML = `<span class="tooltipText">${text}</span>`;
        return element.querySelector(".tooltipText");
    }
    function mouseOver() {
        this.appendChild(createTooltip(this.dataset.text))
    }
    function mouseOut() {
        this.removeChild(document.querySelector(".tooltipText"))
    }
});