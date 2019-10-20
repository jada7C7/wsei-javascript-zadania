document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //1
    let elementCLassTitle = document.getElementsByClassName('title');
    function getDataAnimation(element) {
        let elementDataAttr = element[0].dataset.animation;
        return elementDataAttr;
    }
    getDataAnimation(elementCLassTitle)

});
