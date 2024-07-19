window.onload = function(){
    const tickets = localStorage.getItem("tickets");
    const goal = localStorage.getItem("goal");

    if(tickets && goal){
        document.getElementById("tickets").innerHTML = tickets + " 🎟️";
        document.getElementById("goal").innerHTML = goal + " 🎯";

        updateBar();
    }
}

function submitTickets(){
    const numTickets = prompt("How many tickets do you currently have?");
    const numTicketsInt = parseInt(numTickets);

    if (numTicketsInt < 0 || isNaN(numTicketsInt) || numTicketsInt < 3){
        alert("Please enter a valid number of tickets.");
        return;
    }

    document.getElementById("tickets").innerHTML = numTicketsInt + " 🎟️";
    localStorage.setItem("tickets", numTicketsInt);

    updateBar();
}

function submitGoal(){
    const goal = prompt("What is your ticket goal?");
    const goalInt = parseInt(goal);

    if (goalInt < 0 || isNaN(goalInt)){
        alert("Please enter a valid number for your goal.");
        return;
    }

    document.getElementById("goal").innerHTML = goalInt + " 🎯";
    localStorage.setItem("goal", goalInt);

    updateBar();
}


function updateBar(){
    const tickets = parseInt(document.getElementById("tickets").innerHTML);
    const goal = parseInt(document.getElementById("goal").innerHTML);
    var percent = (tickets / goal) * 100;

    if (percent >= 100){
        
        percent = 100;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });

        document.getElementById("have").style.borderTopRightRadius = "500px";
        document.getElementById("have").style.borderBottomRightRadius = "500px";
    }

    leftPercent = 100 - percent;
    leftTickets = goal - tickets;

    document.getElementById("have").style.width = percent + "%";

    document.getElementById("percentage").innerHTML = percent.toFixed(2) + "% " + "(" + tickets + ")";
    document.getElementById("percentage2").innerHTML = leftPercent.toFixed(2) + "% " + "(" + leftTickets + ")";
}