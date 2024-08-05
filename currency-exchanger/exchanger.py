import requests
import os

# Enter your API key
api_key = "7bb07e0c2f4841783d826b03"

#To-Do's:
# - Add dotenv
# - class with functions


def get_exchange_rate(from_currency, to_currency):
  try:
    url = f"https://v6.exchangerate-api.com/v6/{api_key}/pair/{from_currency}/{to_currency}"
    response = requests.get(url)
    data = response.json()
    return data["conversion_rate"]
  except Exception as e:
    print(f"Error: {e}")

def convert_currency(amount, exchange_rate):
  try:
    converted_amount = amount * exchange_rate
    return converted_amount
  except Exception as e:
    print(f"Error: {e}")


from_currency = input("Enter the currency you want to convert from: ").upper()

to_currency = input("Enter the currency you want to convert to: ").upper()

amount = float(input("Enter the amount you want to convert: "))


exchange_rate = get_exchange_rate(from_currency, to_currency)

converted_amount = convert_currency(amount, exchange_rate)

print(f"{amount} {from_currency} is equal to {converted_amount} {to_currency}")