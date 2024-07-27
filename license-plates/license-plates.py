
germanyCities = {
    "A": "Augsburg",
    "AA": "Ostalbkreis (Aalen)",
    "AB": "Aschaffenburg",
    "ABG": "Altenburger Land",
    "ABI": "Anhalt-Bitterfeld",
    "AC": "Aachen",
    "AE": "Auerbach",
    "AH": "Ahaus",
    "AIB": "Bad Aibling",
    "AIC": "Aichach-Friedberg",
    "AK": "Altenkirchen",
    "AL": "Altena",
    "ALF": "Alfeld (Leine)",
    "ALS": "Alsfeld",
    "ALZ": "Alzenau",
    "AM": "Amberg",
    "AN": "Ansbach",
    "ANA": "Annaberg",
    "ANG": "Angermünde",
    "ANK": "Anklam",
    "AÖ": "Altötting",
    "AP": "Apolda",
    "APD": "Apolda",
    "ARN": "Arnstadt",
    "ART": "Artern",
    "AS": "Amberg-Sulzbach",
    "ASL": "Aschersleben",
    "ASZ": "Aue-Schwarzenberg",
    "AT": "Altentreptow",
    "AU": "Aue",
    "AUR": "Aurich",
    "AW": "Ahrweiler",
    "AZ": "Alzey-Worms",
    "AZE": "Anhalt-Zerbst",
    "B": "Berlin",
    "BA": "Bamberg",
    "BAD": "Baden-Baden",
    "BAR": "Barnim",
    "BB": "Böblingen",
    "BBG": "Bernburg",
    "BC": "Biberach",
    "BCH": "Buchen (Odenwald)"
}

def germany(letters):
    if len(letters) > 3:
        AttributeError("The length of the license plate is too long")
    if len(letters) < 1:
        AttributeError("The length of the license plate is too short")

    if letters in germanyCities:
        return germanyCities[letters]
    
    return "City not found"

print(germany("THW"))