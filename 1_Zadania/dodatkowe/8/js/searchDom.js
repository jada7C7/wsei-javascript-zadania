//1

const menu = document.querySelector('#menu');

function getDataInfo(element) {
    let array = [];
    let children = element.children;
    for (let i = 0; i < children.length; i++) {
        array.push(children[i].dataset.info);
    }
    return array;
}

console.log(getDataInfo(menu));

//2

const mainContener = document.querySelector('#main-contener');

function getElementClass(element) {
    let array = [];
    for (let i = 0; i < element.classList.length; i++) {
        array.push(element.classList[i]);
    }
    return array;
}

console.log(getElementClass(mainContener));

//3

const pinkColor = document.querySelector('.pink-color');

function getElementText(element) {
    return element.innerText;
}

console.log(getElementText(pinkColor));

//4

const images = document.querySelectorAll('.images');
console.log(images);

function getElementAlt(element) {
    let array = [];
    for (let i = 0; i < element.length; i++) {
        array.push(element[i].getAttribute('alt'));
    }
    return array;
}

console.log(getElementAlt(images));

//5

const myLink = document.querySelectorAll('.my-link');
console.log(myLink);

function getElementHref(element) {
    let array = [];
    for (let i = 0; i < element.length; i++) {
        array.push(element[i].getAttribute('href'));
    }
    return array;
}

console.log(getElementHref(myLink));