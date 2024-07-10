document.getElementById("generate").onclick = function(){
    const result = document.getElementById("result");

    var len = 8;
    var password = "";
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!._";

    for(var i = 0, n = charset.length; i < len; i+=1) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    result.innerHTML = password;

    result.classList.remove("result-before");
    result.classList.add("result-after");

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 },
      });
}