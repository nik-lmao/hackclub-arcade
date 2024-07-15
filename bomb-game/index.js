


function distributeBombs(amount) {
    var cells = document.getElementsByClassName("cell");
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("data-bomb", "false");
    }

    var bombCells = new Set();
    while (bombCells.size < amount) {
        var randomIndex = Math.floor(Math.random() * cells.length);
        if (!bombCells.has(randomIndex)) {
            bombCells.add(randomIndex);
            cells[randomIndex].setAttribute("data-bomb", "true");
        }
    }
}

function flipCell(cell) {
    var isBomb = cell.getAttribute("data-bomb") === "true";

    cell.innerHTML = isBomb ? "💣" : "💎";
    cell.disabled = true;

    if (isBomb) {
        cell.classList.add("explosion");
        var cells = document.getElementsByClassName("cell");
        for (var i = 0; i < cells.length; i++) {
            var isBomb = cells[i].getAttribute("data-bomb") === "true";
            cells[i].innerHTML = isBomb ? "💣" : "💎";
            cells[i].disabled = true;
        }
    }
}

function startGame(){
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "❓";
        cells[i].disabled = false;
        cells[i].classList.remove("explosion");
    }

    var bombCount = document.getElementById("bombCount").value;

    if(!bombCount || bombCount > 25 || bombCount < 1){
        bombCount = 5;
    }

    distributeBombs(bombCount);
}

window.onload = function() {
    var cells = document.getElementsByClassName("cell");
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].disabled = true;
    }
}