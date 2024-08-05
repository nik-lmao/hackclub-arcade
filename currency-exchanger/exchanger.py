import requests
import os

# Enter your API key
api_key = "7bb07e0c2f4841783d826b03"

#To-Do's:
# - Add dotenv
# - class with functions


from_currency = input("Enter the currency you want to convert from: ").upper()

to_currency = input("Enter the currency you want to convert to: ").upper()

amount = float(input("Enter the amount you want to convert: "))


url = f"https://v6.exchangerate-api.com/v6/{api_key}/latest/{from_currency}"

try:
  
  r = requests.get(url)
  data = r.json()
  
  if data["result"] == "error":
    print("Invalid currency code. Please try again.")
    
  else:
    exchange_rate = data["conversion_rates"].get(to_currency)
    if exchange_rate is None:
      print("Invalid target currency code. Please try again.")
    else:
      converted_amount = amount * exchange_rate
      print(f"{amount} {from_currency} is equal to {converted_amount} {to_currency}")

except Exception as e:
  print("An error occurred. Please try again.")
  print(e)