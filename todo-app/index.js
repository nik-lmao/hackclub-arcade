function doConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 },
      });
}

window.onload = function() {
    updateTaskCount();
};

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

    updateTaskCount();

    doConfetti();
}

function deleteTask(task) {
    task.remove();
}

function clearTasks() {
    alert("Implement later");
}

function markTask(task) {
    
    alert("Implement later");
}

function updateTaskCount() {
    var count = document.getElementById("tasks").childElementCount;
    document.getElementById("task-count").textContent = `${count} tasks`;
}