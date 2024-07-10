document.getElementById("generate").onclick = function(){
    const result = document.getElementById("result");
    const announce = document.getElementById("announce");
    const copy = document.getElementById("copy-button");

    var len = 8;
    var password = "";
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!._";

    for(var i = 0, n = charset.length; i < len; i+=1) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    announce.style.display = "block";
    copy.style.display = "block";

    result.innerHTML = password;
}

document.getElementById("copy-button").onclick = function(){
    const password = document.getElementById("result").innerText;
    navigator.clipboard.writeText(password).then(function(){
        console.log("Copied password");
    }).catch(function(err) {
        console.error("Could not copy password: ", err);
        alert("Could not copy password. Check console.");
    });
}
