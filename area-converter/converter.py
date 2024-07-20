conversion_factors = {
    "square meter": 1,
    "square kilometer": 1e6,
    "square centimeter": 1e-4,
    "square millimeter": 1e-6,
    "square mile": 2.59e6,
    "square yard": 0.836127,
    "square foot": 0.092903,
    "square inch": 0.00064516,
    "hectare": 1e4,
    "acre": 4046.86
}



def convert_area(value, from_unit, to_unit):
    fromUnit = conversion_factors[from_unit]
    toUnit = conversion_factors[to_unit]



    value_in_square_meters = value * fromUnit
    
    converted_value = value_in_square_meters / toUnit

    return converted_value




value = input("Enter the value: ")
from_unit = input("Enter the unit to convert from: ")
to_unit = input("Enter the unit to convert to: ")

if from_unit == to_unit:
    print("The units are the same. No conversion needed.")
    exit()

if from_unit not in conversion_factors or to_unit not in conversion_factors:
    print("Invalid units.")
    exit()

if value == "":
    print("No value provided.")
    exit()
try:
    value = float(value)
except ValueError:
    print("Invalid value provided. Please enter a numeric value.")
    exit()




converted_value = convert_area(value, from_unit, to_unit)
print(f"{value} {from_unit} -> {converted_value:.4f} {to_unit}")
