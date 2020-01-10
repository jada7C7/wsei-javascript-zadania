document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Exercise 0
    function getDatasInfo(elements) {
        let newArraydata = [];
        for (let i = 0; i < elements.length; i++) {
            newArraydata.push(elements[i].dataset.color);
        }
        return newArraydata;
    };
    console.log(getDatasInfo(links));

    //Exercise 1

    console.log(homeElement, "homeElement");
    console.log(childElements, "childELements");
    console.log(banner, "banner");
    console.log(blocks, "blocks");
    console.log(links, "links");

    [homeElement, childElements, banner, blocks, links].forEach(function (element, index) {
        if (element instanceof HTMLCollection || element instanceof NodeList) {
            for (let i = 0; i < element.length; i++) {
                console.log(element[i].tagName, " - tag name");
                console.log(element[i].className, " - class name");
            }
            console.log("-------------------------");
            console.log("End" + index + "iteration");
            console.log("-------------------------");
        }
    });


    // Exercise 2
    for (let i = 0; i < blocks.length; i++) {
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

    // Exercise 3
    const mainFooter = document.getElementById("mainFooter");
    console.log(getId(mainFooter));
    function getId(element) {
        return element.id;
    };

    // Execise 4
    console.log(getTags(childElements));
    function getTags(elements) {
        let tagsArray = [];
        for (let i = 0; i < elements.length; i++) {
            tagsArray.push(elements[i].tagName);
        }
        return tagsArray;
    };


    // Exercise 5
    console.log(getClassInfo(banner));
    function getClassInfo(element) {
        const classArray = [];
        for (let i = 0; i < element.classList.length; i++) {
            classArray.push(element.classList[i]);
        }
        return classArray;
    }

    // Exercise 6
    var liElements = document.querySelectorAll("nav li");
    setDataDirection(liElements);
    function setDataDirection(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (!elements[i].dataset.hasOwnProperty("direction")) {
                elements[i].dataset.direction = "top";
            }
        }
    }
    //check elements
    // for (let i = 0; i < liElements.length; i++) {
    //    console.log(liElements[i])
    // }
});
