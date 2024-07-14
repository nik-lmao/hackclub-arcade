function addEntry(name, message, time) {
  const entryDiv = document.createElement("div");
  entryDiv.className = "entry";

  const entries = document.getElementById("entries");

  const nameParagraph = document.createElement("p");
  nameParagraph.className = 'name';
  nameParagraph.textContent = name;

  const messageParagraph = document.createElement("p");
  messageParagraph.className = 'message';
  messageParagraph.textContent = message;

  const timeParagraph = document.createElement("p");
  timeParagraph.className = 'time';
  timeParagraph.textContent = String(time.toLocaleString());

  entryDiv.appendChild(nameParagraph);
  entryDiv.appendChild(messageParagraph);
  entryDiv.appendChild(timeParagraph);
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
        addEntry(entry.name, entry.message, new Date(entry.created_at));
      });
      if(data === null || data.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No entries to display";
        message.className = "no-entries";
        document.getElementById("entries").appendChild(message);
      }
    })
    .catch(error => {
      alert("Error loading the page");
      console.log(error);
    });

    
}

document.getElementById("new-entry").onclick = function(){

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if(name === "" || message === "") {
    alert("Please enter both a name and a message.");
    return;
  }

  if(name.length > 20 || name.length < 2) {
    alert("Please enter your real name.");
    return;
  }

  if(message.length < 10 || message.length > 200) {
    alert("Please enter a message between 10 and 200 characters.");
    return;
  }
  
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
  }).catch(error => {
    alert("Error saving entry");
    console.log(error);
  });
}