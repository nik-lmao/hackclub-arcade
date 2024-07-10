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

def get_choice():
  while True:
    choice = input("Which temperature unit do you want to convert from?\n\n"
    "1 - Degrees Celsius\n"
    "2 - Degrees Fahrenheit\n"
    "3 - Degrees Kelvin\n\n"
    " => ")
    if choice in {"1", "2", "3"}:
      return choice
    else:
      print("Invalid choice! Please enter a number between 1 and 3.")

def get_temperature():
  while True:
    try:
      temperature = float(input("Enter your temperature:\n => "))
      return temperature
    except ValueError:
      print("Invalid input! Please enter a valid number.")

def validate_temperature(choice, temperature):
  if choice == "1" and temperature < -273.15:
    return False
  elif choice == "2" and fahrenheit_to_celsius(temperature) < -273.15:
    return False
  elif choice == "3" and temperature < 0:
    return False
  return True

def main():
  choice = get_choice()
  temperature = get_temperature()

  if not validate_temperature(choice, temperature):
    print("Invalid temperature! Input lies below absolute zero.")
    return

  if choice == "1":
    print(f"Degrees Fahrenheit: {celsius_to_fahrenheit(temperature)}°F")
    print(f"Degrees Kelvin: {celsius_to_kelvin(temperature)}K")
  elif choice == "2":
    print(f"Degrees Celsius: {fahrenheit_to_celsius(temperature)}°C")
    print(f"Degrees Kelvin: {fahrenheit_to_kelvin(temperature)}K")
  elif choice == "3":
    print(f"Degrees Celsius: {kelvin_to_celsius(temperature)}°C")
    print(f"Degrees Fahrenheit: {kelvin_to_fahrenheit(temperature)}°F")


if __name__ == "__main__":
  main()