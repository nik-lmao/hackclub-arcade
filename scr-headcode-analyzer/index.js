document.getElementById("analyze").addEventListener("click", function() {
    const headcode = document.getElementById("headcode").value;
    
    

    if (headcode.length !== 4) {
        alert("The headcode must be 4 characters long.");
        return;
    }

    let trainClass = "Invalid";
    switch (headcode[0]) {
        case "1":
            trainClass = "Semi-fast service";
            break;
        case "2":
            trainClass = "Stopping service";
            break;
        case "3":
            trainClass = "Empty coaching stock";
            break;
        case "9":
            trainClass = "High priority service";
            break;
    }

    const destinationList = {
        "A": "Airport Central",
        "B": "Benton",
        "C": "Beechley",
        "D": "Willowfield",
        "E": "Edgemead",
        "F": "Whitefield",
        "G": "Greenslade",
        "H": "Newry Harbour",
        "I": "St. Helens Bridge",
        "J": "Farleigh",
        "K": "Leighton West",
        "L": "Llyn-by-the-Sea",
        "M": "Morganstown",
        "N": "Newry",
        "O": "Connolly",
        "P": "Port Benton/Airport Parkway",
        "Q": "Esterfield",
        "R": "L. Stepford Road",
        "S": "Stepford Central",
        "T": "Leighton City",
        "U": "Stepford UFC",
        "V": "Stepford Victoria",
        "W": "Westwyvern",
        "X": "Airport Terminal 2",
        "Y": "Berrily",
        "Z": "Airport Terminal 3"
    };

    const destination = destinationList[headcode[1]] || "Invalid";

    headcode.value = "";

    document.getElementById("results").classList.remove("results-before");
    document.getElementById("results").classList.add("results-after");

    document.getElementById("headcode-0").innerHTML = headcode;
    document.getElementById("class").innerHTML = trainClass;
    document.getElementById("destination").innerHTML = destination;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 }
    })
});
