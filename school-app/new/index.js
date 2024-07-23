document.getElementById("addButton").onclick = function() {

    fetch("http://localhost:3000/",)
    .then(response => {
        alert("Response: " + response.status);
        console.log(response);
    });



    var id = document.getElementById("userID").value;
    var entryType = document.getElementById("entryType").value;
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var entryOwner = document.getElementById("entryOwner").value;
    

    if(id == "" || entryType == "" || description == "" || date == "" || entryOwner == "") {
        alert("Please fill in all fields.");
        return;
    }

    id = parseInt(id);
    
    if(entryType.toLowerCase().includes("homework")) {
        entryType = "homework";
    }
    else if(entryType.toLowerCase().includes("exam")) {
        entryType = "exam";
    }
    
    var until = new Date(date);
    until.setHours(7);
    until.setMinutes(50);
    until = until.getTime();
    
    var both = entryOwner.toLowerCase().includes("own") ? false : true;
    

    var entry = {
        owner: id,
        type: entryType,
        subject: subject,
        description: description,
        until: until,
        both: both
    };

    fetch("http://localhost:3000/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => {
        if(response.status == 201) {
            document.getElementById("userID").value = "";
            document.getElementById("entryType").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("description").value = "";
            document.getElementById("date").value = "";
            document.getElementById("entryOwner").value = "";
            alert("Entry added successfully.");
        } else {
            alert("Error adding entry.");
        }
    });
}