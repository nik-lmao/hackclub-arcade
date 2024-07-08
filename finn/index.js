document.getElementById("rocks").onclick = function() {
    document.getElementById("pfp").src = "images/rockdiver.jpg";
    
    setTimeout(function() {
        document.getElementById("pfp").src = "images/pfp.jpg";
    }, 5000);
}