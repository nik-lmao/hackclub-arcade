import license_plates as lp


def main():
    print("1. - Europe")
    print("2. - Germany")
    choice = input("> ")

    if choice == "1":
        country = input("Enter the country code on the blue strip (1-3 characters): ")
        print(lp.europe(country))

    elif choice == "2":
        city = input("Enter the city code directly after the blue strip (1-3 characters): ")
        print(lp.germany(city))

if __name__ == "__main__":
    while True:
        main()
        again = input("Do you want to check another license plate? (y/n): ")
        if again.lower() != "y":
            break