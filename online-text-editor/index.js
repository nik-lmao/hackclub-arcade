

document.getElementById("save").onclick = function() {
    alert("Save button clicked");
    const text = document.getElementById("text").value;
    
    // Stackoverflow helped me with this one
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'myfile.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}