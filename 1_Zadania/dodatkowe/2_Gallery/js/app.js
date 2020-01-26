
/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function () {
    let galleryList = document.querySelectorAll('.gallery ul li img');
    let bodyElement = document.querySelector('body');
    for (let i = 0; i < galleryList.length; i++) {
        galleryList[i].addEventListener("click", showModal)
    }
    function showModal() {
        let linkImage = this.src;
        let domElement = document.createElement("div");
        let modalCode = `<div class="fullScreen">
        <img src="${linkImage}">
        <button class="close">Close</button>
      </div>`;
        domElement.innerHTML = modalCode;
        bodyElement.appendChild(domElement.children[0]);

    }

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("close")) {
            document.body.removeChild(document.getElementsByClassName("fullScreen")[0]);
        }
    })

}); 