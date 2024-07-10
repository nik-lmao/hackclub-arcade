function validatePassword(password){
    var hasSpecialChar = /[!._]/.test(password);
    var hasNumber = /\d/.test(password);

    if (!hasSpecialChar) {
        randomSpecialChar = "!._".charAt(Math.floor(Math.random() * 3));
        
        let passwordArray = password.split("");
        
        let randomIndex = Math.floor(Math.random() * passwordArray.length);
        passwordArray[randomIndex] = randomSpecialChar;
    
        password = passwordArray.join("");
    }

    if (!hasNumber) {
        randomNumber = Math.floor(Math.random() * 10);
        
        let passwordArray = password.split("");
        
        let randomIndex = Math.floor(Math.random() * passwordArray.length);
        passwordArray[randomIndex] = randomNumber;
    
        password = passwordArray.join("");
    }

    return password;
}

document.getElementById("generate").onclick = function(){
    const result = document.getElementById("result");

    var len = 8;
    var password = "";
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!._";

    for(var i = 0, n = charset.length; i < len; i+=1) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    password = validatePassword(password);

    result.innerHTML = password;

    result.classList.remove("result-before");
    result.classList.add("result-after");

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 },
      });
}