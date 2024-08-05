import requests
import os
from dotenv import load_dotenv

load_dotenv()

class CurrencyConverter:
    def __init__(self):
        self.api_key = os.getenv("EXCHANGE_RATE_API_KEY")
        if not self.api_key:
            raise ValueError("API key not found. Please set the EXCHANGE_RATE_API_KEY environment variable.")

    def get_exchange_rate(self, from_currency, to_currency):
        url = f"https://v6.exchangerate-api.com/v6/{self.api_key}/pair/{from_currency}/{to_currency}"
        try:
            response = requests.get(url)
            response.raise_for_status() 
            data = response.json()

            if "conversion_rate" in data:
                return data["conversion_rate"]
            else:
                raise ValueError(f"Unexpected response format: {data}")
        except requests.exceptions.RequestException as e:
            print(f"Network error: {e}")
            return None
        except ValueError as e:
            print(f"Error: {e}")
            return None

    def convert_currency(self, amount, exchange_rate):
        try:
            if amount < 0:
                raise ValueError("Amount cannot be negative.")
            return amount * exchange_rate
        except TypeError as e:
            print(f"Invalid type for amount or exchange rate: {e}")
            return None
        except ValueError as e:
            print(f"Error: {e}")
            return None

def main():
    try:
        converter = CurrencyConverter()
    except ValueError as e:
        print(e)
        return

    try:
        from_currency = input("Enter the currency you want to convert from (e.g., USD): ").upper()
        to_currency = input("Enter the currency you want to convert to (e.g., EUR): ").upper()
        amount = float(input("Enter the amount you want to convert: "))

        exchange_rate = converter.get_exchange_rate(from_currency, to_currency)

        if exchange_rate:
            converted_amount = converter.convert_currency(amount, exchange_rate)
            if converted_amount is not None:
                print(f"{amount} {from_currency} is equal to {converted_amount:.2f} {to_currency}")
        else:
            print("Failed to retrieve exchange rate.")
    except ValueError as e:
        print(f"Invalid input: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    main()
