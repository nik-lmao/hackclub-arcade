
function flipCell(cell){
    
    var isBomb = Math.random() < 0.04;

    cell.innerHTML = isBomb ? '💣' : '💎';
    cell.disabled = true;
}