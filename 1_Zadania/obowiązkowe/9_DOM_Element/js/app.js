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
    function getDatasInfo(elements) {
        let newArraydata = [];
        for (let i = 0; i < elements.length; i++) {
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
    console.log(banner);
    console.log(typeof banner);
    console.log(blocks);
    console.log(typeof blocks)

    //zadanie 1 wszystkie nie sa tablicami funckaj Array.isArray(element) zawsze zwraca false



    //2  SPRAEWDZIĆ CZY O TO CHODZIŁO
    for (let i = 0; i < blocks.length; i++) {
        console.log(i, 'index')
        let innerContent = blocks[i].innerHTML;
        let outerContent = blocks[i].outerHTML;
        console.log(innerContent, 'innerHTML');
        console.log(outerContent, 'outerHTML');
        console.log('--------NOWA WRATOŚC--------');
        //innerHTML pobiera tylko wewnętrzną część kodu elementu blocks[i] 
        //za to outerHTML pobiera cały kod elementu blocks[i] 
        innerContent = "Nowa wartość diva o klasie blocks";
        console.log(innerContent, 'innerHTML');
        console.log(outerContent, 'outerHTML');
    }

    //3
    const mainFooter = document.getElementById("mainFooter");
    console.log(getId(mainFooter));
    function getId(element) {
        return element.id;
    }

    //4
    console.log(getTags(childElements));
    function getTags(elements) {
        let tagsArray = [];
        for (let i = 0; i < elements.length; i++) {
            tagsArray.push(elements[i].tagName);
        }
        return tagsArray;
    }


    //5
    console.log(getClassInfo(banner));
    function getClassInfo(element) {
        const classArray = [];
        for (let i = 0; i < element.classList.length; i++) {
            classArray.push(element.classList[i]);
        }
        return classArray;
    }

    //6
    var liElements = document.querySelectorAll("nav li");
    setDataDirection(liElements);
    function setDataDirection(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (!elements[i].dataset.hasOwnProperty("direction")) {
                elements[i].dataset.direction = "top";
            }
        }
    }
    //wyswietlenie liLEmeents
    // for (let i = 0; i < liElements.length; i++) {
    //    console.log(liElements[i])
    // }
});
