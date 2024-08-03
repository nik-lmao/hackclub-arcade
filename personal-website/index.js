document.getElementById("more").onclick = function() 
{
    const popup = document.getElementById("popup");
    popup.classList.add("show");

    const interestsContainer = document.getElementById("interests");
    interestsContainer.innerHTML = "";
    interests.forEach(interest => 
    {
        const interestDiv = document.createElement("div");
        interestDiv.className = "interest";
        interestDiv.innerText = interest;
        interestsContainer.appendChild(interestDiv);
    });
}

document.querySelector(".close-btn").onclick = function() 
{
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
}

const interests = [
    "photography",
    "programming",
    "meeting friends",
    "biking",
    "videogames",
    "listening to music"
]
