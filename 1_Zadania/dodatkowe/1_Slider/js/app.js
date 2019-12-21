document.addEventListener('DOMContentLoaded', function () {
    let next = document.getElementById('nextPicture');
    let prev = document.getElementById('prevPicture');
    let elements = document.getElementsByTagName('li');
    let current = 0;

    let currentElement = elements[current];
    currentElement.classList.add('visible');

    next.addEventListener('click', function(){
        currentElement.classList.remove('visible');
        if(current >= elements.length-1){
            current = 0;
        }else{
            current++;
        }
        currentElement = elements[current];
        currentElement.classList.add('visible');

    })

    prev.addEventListener('click', function(){
        currentElement.classList.remove('visible');
        if(current <= 0){
            current = elements.length-1;
        }else{
        current--;
        }
        currentElement = elements[current];
        currentElement.classList.add('visible');
    })
    
})