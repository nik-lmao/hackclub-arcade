function addEntry(name, message) {
  const entryDiv = document.createElement("div");
  entryDiv.className = "entry";

  const entries = document.getElementById("entries");

  const nameParagraph = document.createElement("p");
  nameParagraph.className = 'name';
  nameParagraph.textContent = name;

  const messageParagraph = document.createElement("p");
  messageParagraph.className = 'message';
  messageParagraph.textContent = message;

  entryDiv.appendChild(nameParagraph);
  entryDiv.appendChild(messageParagraph);
  entries.insertBefore(entryDiv, entries.firstChild);
}
  
const sampleData = [
  {
    name: "John",
    message: "Hello, World!"
  },
  {
    name: "Nikita",
    "message": "Very nice! This page is amazing. I'm able to leave any type of comment. I'm so happy to see you!"
  }
]


// hihah


window.onload = function() {
  fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(data => {
      data.reverse().forEach(entry => {
        console.log(entry);
        addEntry(entry.name, entry.message);
      });
    })
    .catch(error => {
      console.error("Error fetching entries:", error);
    });
}

document.getElementById("new-entry").onclick = function(){

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  fetch("http://localhost:3000/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      message: message
    })
  }).then(response => {
    if(response.status === 201) {
      addEntry(name, message);
    }
    else {
      alert("Error saving entry");
    }
  });
}