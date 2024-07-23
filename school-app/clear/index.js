document.getElementById("clear").onclick = function() {
    fetch("http://localhost:3000/clear", {
        method: "DELETE"
    })
    .then(response => {
        alert("Response: " + response.status);
        console.log(response);
    });
};