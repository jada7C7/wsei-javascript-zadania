document.addEventListener("DOMContentLoaded", function () {
    let addTask = document.getElementById("addTaskButton");
    let removeFinished = document.getElementById("removeFinishedTasksButton");
    let taskList = document.getElementById("taskList");
    refreshCounter();
    function refreshCounter() {
        let counter = document.getElementById("counter");
        counter.innerHTML = taskList.children.length;
    };

    removeFinished.addEventListener("click", function () {
        for (let i = taskList.children.length; i > 0; --i) {
            if (taskList.children[i - 1].classList.contains("done")) {
                taskList.children[i - 1].remove()
            }
        }
        refreshCounter();
    });
    addTask.addEventListener("click", addNewTask);
    function addNewTask() {
        let inputValue = document.getElementById("taskInput").value
        if (inputValue.length > 5 && inputValue.length < 100) {
            let taskStructure = `<li> 
                <h1>${inputValue}</h1>
                <button>Delete</button>
                <button>Complete</button>
            </li>`;
            let domElement = document.createElement("div");
            domElement.innerHTML = taskStructure;
            //delete
            domElement.children[0].querySelectorAll("button")[0].addEventListener("click", function () {
                this.parentElement.remove();
                refreshCounter();
            });
            //complete
            domElement.children[0].querySelectorAll("button")[1].addEventListener("click", function () {
                let task = this.parentElement;
                task.classList.contains("done") ? task.classList.remove("done") : task.classList.add("done");
            });
            taskList.appendChild(domElement.children[0]);
            refreshCounter();
            document.getElementById("taskInput").value = "";
        } else {
            alert("Tresc zadanie musi być dluzsza niż 5 znaków i krótsza niż 100");
        }
    };

});