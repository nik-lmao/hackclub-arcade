print("SCR (Stepford County Railway) is a railway simulator game on Roblox. In the game, trains are assigned headcodes, which are 4-digit codes that represent the train's class and destination. This program will analyze a headcode and determine the train class and destination based on the code.")

print("SCR (Stepford County Railway) Headcode Analyzer")

headcode = input("Please enter the headcode you want to analyze: ")

if len(headcode) != 4:
    print("Invalid headcode. Please enter a 4-digit headcode.")
    exit()

train_class = "Invalid"

if headcode[0] == "1":
    train_class = "Semi-fast service"
elif headcode[0] == "2":
    train_class = "Stopping service"
elif headcode[0] == "3":
    train_class = "Empty coaching stock"
elif headcode[0] == "9":
    train_class = "High priority service"
else:
    train_class = "Invalid"

destination_list = {
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
}

destination = destination_list.get(headcode[1], "Invalid")

if destination == "Invalid" or train_class == "Invalid":
    print("Invalid headcode. Please enter a valid headcode.")
    input("Press Enter to exit...")
    exit()
else:
    print(f"Headcode: {headcode}")
    print(f"Train class: {train_class}")
    print(f"Destination: {destination}")
    input("Press Enter to exit...")