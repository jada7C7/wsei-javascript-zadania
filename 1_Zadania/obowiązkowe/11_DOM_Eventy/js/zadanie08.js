// Zadanie 8
window.addEventListener("DOMContentLoaded", event => {
    const getWindowWidth = document.getElementById("windowWidth");
    const getWindowHeight = document.getElementById("windowHeight");

    getWindowWidth.innerText = window.innerWidth;
    getWindowHeight.innerText = window.innerHeight;

    window.addEventListener("resize", () => {
        getWindowWidth.innerText = window.innerWidth;
        getWindowHeight.innerText = window.innerHeight;
    });
});