import requests
import os
from dotenv import load_dotenv


load_dotenv()

class CurrencyConverter:
    def __init__(self):
        self.api_key = os.getenv("EXCHANGE_RATE_API_KEY")

    def get_exchange_rate(self, from_currency, to_currency):
        try:
            url = f"https://v6.exchangerate-api.com/v6/{self.api_key}/pair/{from_currency}/{to_currency}"
            response = requests.get(url)
            data = response.json()
            return data["conversion_rate"]
        except Exception as e:
            print(f"Error: {e}")
            return None

    def convert_currency(self, amount, exchange_rate):
        try:
            converted_amount = amount * exchange_rate
            return converted_amount
        except Exception as e:
            print(f"Error: {e}")
            return None

def main():
    converter = CurrencyConverter()

    from_currency = input("Enter the currency you want to convert from: ").upper()
    to_currency = input("Enter the currency you want to convert to: ").upper()
    amount = float(input("Enter the amount you want to convert: "))

    exchange_rate = converter.get_exchange_rate(from_currency, to_currency)

    if exchange_rate:
        converted_amount = converter.convert_currency(amount, exchange_rate)
        print(f"{amount} {from_currency} is equal to {converted_amount} {to_currency}")
    else:
        print("Failed to retrieve exchange rate.")

if __name__ == "__main__":
    main()
