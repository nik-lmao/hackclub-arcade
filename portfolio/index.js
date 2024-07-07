document.getElementById("rocks").onclick = function() {
    document.getElementById("pfp").src = "images/rockdiver.jpg";
    
    setTimeout(function() {
        document.getElementById("pfp").src = "images/default.jpg";
    }, 5000);
}