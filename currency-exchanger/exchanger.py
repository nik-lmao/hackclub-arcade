import requests
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("EXCHANGE_RATE_API_KEY")

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


message = """
Welcome to the Currency Exchanger!
With this simple Python script you can calculate how much a currency is worth in another!


"""

codes_message = f"""
For all the valid currency codes please take a look at: 
https://v6.exchangerate-api.com/v6/{api_key}/codes
"""

invalid_message = """
Looks like you haven't set your API key yet. To prevent further errors please check your API key and re-open the exchanger!
"""

def main():
    if api_key != "":
        print(message + codes_message)
        input("Press enter to continue...")
    else:
        print(message + invalid_message)
        input("Press enter to exit...")
        return
    os.system("cls" if os.name == "nt" else "clear")
    try:
        converter = CurrencyConverter()
    except ValueError as e:
        print(e)
        return
    
    try:
        from_currency = input("Enter the currency you want to convert from (e.g., USD): ").upper()
        to_currency = input("Enter the currency you want to convert to (e.g., EUR): ").upper()
        amount = float(input("Enter the amount you want to convert: "))
        os.system("cls" if os.name == "nt" else "clear")
        if len(from_currency) != 3 or len(to_currency) != 3:
            print("Invalid currency code.")
            return
            
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
