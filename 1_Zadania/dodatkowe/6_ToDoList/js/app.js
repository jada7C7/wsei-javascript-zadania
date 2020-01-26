document.addEventListener("DOMContentLoaded", function(){
    let addTask = document.getElementById("addTaskButton");
    let taskList = document.getElementById("taskList")
    let removeFinished = document.getElementById("removeFinishedTasksButton");
    removeFinished.addEventListener("click", function(){

    });
    addTask.addEventListener("click", addNewTask);
    function addNewTask(){
        let inputValue = document.getElementById("taskInput").value
        let taskStructure = `<li> 
        <h1>${inputValue}</h1>
        <button>Delete</button>
        <button>Complete</button>
    </li>`
        let domElement = document.createElement("div");
        domElement.innerHTML = taskStructure;
        //delete
        domElement.children[0].querySelectorAll("button")[0].addEventListener("click", function(){
            this.parentElement.remove()
        });
        //complete
        domElement.children[0].querySelectorAll("button")[1].addEventListener("click", function(){
            let task = this.parentElement;
            task.classList.contains("done") ? task.classList.remove("done") : task.classList.add("done");
        });
        taskList.appendChild(domElement.children[0]);
    }
});