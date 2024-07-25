import random
import os
import time

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
morse_code_translation = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

def string_to_morse(text):
    text = text.upper()
    morse_code = ""
    for letter in text:
        if letter == " ":
            morse_code += " // "
        else:
            morse_code += morse_code_translation[alphabet.index(letter)] + " "
    return morse_code

def main():
    os.system("cls" if os.name == "nt" else "clear")
    print("Enter 'exit' to quit the program")

    random_string = ' '.join(random.choices(alphabet, k=5))
    morse_code = string_to_morse(random_string)

    guess = input(f"{morse_code}\n-> ")
    if guess == "exit":
        print("Goodbye!")
        return
    if guess.upper() == random_string:
        print("Correct!")
    else:
        print(f"Incorrect! The correct answer was {random_string}")
    
    input("Press enter to continue...")

print("Welcome to the Morse Code Game! You will be shown a random string of 5 letters in Morse Code. Try to guess the string of letters that the Morse Code represents. Good luck!")

while True:
    time.sleep(1)
    main()