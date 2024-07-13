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
    entries.appendChild(entryDiv);
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
  
  window.onload = function() {
    sampleData.forEach(entry => {
      addEntry(entry.name, entry.message);
    });
  }
  
  document.getElementById("new-entry").onclick = function(){
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
  
    
    
    alert(name + " " + message)
  }