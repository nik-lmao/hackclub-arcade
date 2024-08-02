document.getElementById("more").onclick = function() {
  document.getElementById("popup").style.display = "flex";
  const interestsContainer = document.getElementById("interests");
  interestsContainer.innerHTML = '';
  interests.forEach(interest => {
    const interestDiv = document.createElement("div");
    interestDiv.className = "interest";
    interestDiv.innerText = interest;
    interestsContainer.appendChild(interestDiv);
  });
}

document.querySelector(".close-btn").onclick = function() {
  document.getElementById("popup").style.display = "none";
}

const interests = [
  "photography",
  "programming",
  "meeting friends",
  "biking",
  "videogames",
  "listening to music"
]
