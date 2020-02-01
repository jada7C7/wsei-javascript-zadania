const links = document.querySelectorAll('a');
console.log(links);

links[0].addEventListener('click', function() {
    const content = this.parentNode.querySelector('.content');
    content.classList.remove('content');
});

links[1].addEventListener('mouseover', function() {
    const content = this.parentNode.querySelector('.content');
    content.classList.remove('content');
});
