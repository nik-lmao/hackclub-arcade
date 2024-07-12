function doConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 },
      });
}

window.onload = function() {
    updateTaskCount();

    var tasks = localStorage.getItem("tasks");

    tasks = tasks ? JSON.parse(tasks) : [];

    tasks.forEach(function(task) {
        var ul = document.getElementById("tasks");

        var div = document.createElement("div");
        div.className = "task";
        div.ondblclick = function() {
            markTask(div);
        };

        var li = document.createElement("li");
        li.textContent = task;

        var button = document.createElement("button");
        button.textContent = "×";
        button.onclick = function() {
            deleteTask(div);
        };

        ul.appendChild(div);
        div.appendChild(li);
        div.appendChild(button);
    });


    var draft = localStorage.getItem("draft");

    if(draft){
        document.getElementById("task").value = draft;
    }
};


document.getElementById("task").onchange = function(){

    draft = document.getElementById("task").value;

    localStorage.setItem("draft", draft);

}


function addTask() {
    var task = document.getElementById("task").value;
    
    if (task === "") {
        alert("Task cannot be empty");
        return;
    }

    var ul = document.getElementById("tasks");

    var div = document.createElement("div");
    div.className = "task";
    div.ondblclick = function() {
        markTask(div);
    };

    var li = document.createElement("li");
    li.textContent = task;

    var button = document.createElement("button");
    button.textContent = "×";
    button.onclick = function() {
        deleteTask(div);
    };

    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(button);

    document.getElementById("task").value = "";


    var tasks = localStorage.getItem("tasks");

    tasks = tasks ? JSON.parse(tasks) : [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));



    updateTaskCount();

    doConfetti();
}

function deleteTask(task) {

    var tasks = localStorage.getItem("tasks");

    tasks = tasks ? JSON.parse(tasks) : [];

    var index = tasks.indexOf(task.firstChild.textContent);

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    task.remove();

    updateTaskCount();
}

function clearTasks() {
    var ul = document.getElementById("tasks");

    ul.innerHTML = "";
    updateTaskCount();

    localStorage.removeItem("tasks");
}

function markTask(task) {
    
    if(task.style.backgroundColor != "white"){
        task.style.backgroundColor = "white";
    }
    else{
        task.style.backgroundColor = "lightgreen";
    }
}

function updateTaskCount() {
    var count = document.getElementById("tasks").childElementCount;
    document.getElementById("task-count").textContent = `${count} tasks`;
}