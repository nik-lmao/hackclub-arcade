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



while True:
  value = int(input("Enter the value: "))
  if value < 0:
    print("Value cannot be negative.")
    continue
  break

while True:
  from_unit = input("Enter the unit to convert from: ")
  if from_unit not in conversion_factors:
    print("Invalid unit. Please enter a valid unit.")
    continue
  break

while True:
  to_unit = input("Enter the unit to convert to: ")
  if to_unit not in conversion_factors:
    print("Invalid unit. Please enter a valid unit.")
    continue
  break

converted_value = convert_area(value, from_unit, to_unit)
print(f"{value} {from_unit} -> {converted_value:.4f} {to_unit}")
