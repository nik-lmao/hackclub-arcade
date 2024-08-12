const flags = [
    {"name": "France", "code": "FR"},
    {"name": "Germany", "code": "DE"}
]

// Game
  
let correctGuesses = 0;
let incorrectGuesses = 0;
  
function updateScore() {
    document.getElementById("know").innerText = correctGuesses;
    document.getElementById("dont-know").innerText = incorrectGuesses;
    const total = correctGuesses + incorrectGuesses;
    document.getElementById("ratio").innerText = total ? (correctGuesses / total * 100).toFixed(2) + "%" : "0%";
}
  
function randomFlag() {
    const randomIndex = Math.floor(Math.random() * flags.length);
    const flag = flags[randomIndex];
    document.getElementById("flag-image").src = `https://flagsapi.com/${flag.code}/flat/64.png`;
    document.getElementById("flag-image").setAttribute("data-name", flag.name);
    document.getElementById("country-input").value = "";
}
  
function checkGuess() {
    const userGuess = document.getElementById("country-input").value.trim().toLowerCase();
    const correctAnswer = document.getElementById("flag-image").getAttribute("data-name").toLowerCase();
  
    if (userGuess === correctAnswer) {
        correctGuesses++;
        updateScore();
        randomFlag();
    } else {
        console.log("hi")
    }
    
}
  
function handleIDontKnow() {
    incorrectGuesses++;
    alert("The correct answer is " + document.getElementById("flag-image").getAttribute("data-name") + ".")
    updateScore();
    randomFlag();
}
  
document.getElementById("country-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkGuess();
    }
});
  

  
// Start Game
window.onload = function () {
    document.getElementById("dont-know-btn").addEventListener("click", handleIDontKnow);
    randomFlag();
    updateScore();
};  