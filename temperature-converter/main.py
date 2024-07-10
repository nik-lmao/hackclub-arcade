import os

def celsius_to_fahrenheit(celsius):
  return (celsius * 9/5) + 32

def celsius_to_kelvin(celsius):
  return celsius + 273.15

def fahrenheit_to_celsius(fahrenheit):
  return (fahrenheit - 32) * 5/9

def fahrenheit_to_kelvin(fahrenheit):
  return (fahrenheit - 32) * 5/9 + 273.15

def kelvin_to_celsius(kelvin):
  return kelvin - 273.15

def kelvin_to_fahrenheit(kelvin):
  return (kelvin - 273.15) * 9/5 + 32


message = """
1 - Degrees Celsius
2 - Degrees Fahrenheit
3 - Degrees Kelvin

 => """


while True:
  choice = input("Which temperature unit do you want to convert from?\n\n" + message)
  if choice != "1" and choice != "2" and choice != "3":
    # Clear console
    print("Invalid choice! Please enter a number between 1 and 3.")
    continue
  else:
    break

temperature = float(input("Enter your temperature:\n => "))

while True:
  if temperature < -273.15:
    print("Invalid temperature! Input lies below absolute zero.")
    continue
  else:
    break

if choice == "1":
  print(f"Degrees Fahrenheit: {celsius_to_fahrenheit(temperature)}°F")
  print(f"Degrees Kelvin: {celsius_to_kelvin(temperature)}K")

if choice == "2":
  print(f"Degrees Celsius: {fahrenheit_to_celsius(temperature)}°C")
  print(f"Degrees Kelvin: {fahrenheit_to_kelvin(temperature)}K")

if choice == "3":
  print(f"Degrees Celsius: {kelvin_to_celsius(temperature)}°C")
  print(f"Degrees Fahrenheit: {kelvin_to_fahrenheit(temperature)}°F")