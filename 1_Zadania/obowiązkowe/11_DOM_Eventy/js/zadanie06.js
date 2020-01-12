document.addEventListener("DOMContentLoaded", function () {
    
    document.addEventListener('mousemove', onMouseMoveGlobal)
    let box = document.getElementById("box");
    box.addEventListener('mousemove', onMouseMoveLocal)
    let getGlobalX = document.getElementById("globalX");
    let getGlobalY = document.getElementById("globalY");
    let getLocalX = document.getElementById("localX");
    let getLocalY = document.getElementById("localY");
    function onMouseMoveGlobal(e){
       getGlobalX.textContent = e.x;
       getGlobalY.textContent = e.y;
    }
    function onMouseMoveLocal(e){
        //return position elment in viewport
        let rect = box.getBoundingClientRect(); 
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top; 
        getLocalY.textContent = x;
        getLocalX.textContent = y;
     }
    
});
