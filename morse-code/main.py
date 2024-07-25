import random
import os
import time

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
morse_code_translation = [
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."
]

def morse_code_translator(text):
    text = text.upper()
    morse_code = ""
    for letter in text:
        if letter == " ":
            morse_code += " "
        else:
            morse_code += morse_code_translation[alphabet.index(letter)] + " "
    return morse_code

def main():
    os.system("cls" if os.name == "nt" else "clear")
    print("Enter 'exit' to quit the program")

    random_string = ''.join(random.choices(alphabet, k=5))
    morse_code = morse_code_translator(random_string)

    guess = input(f"{morse_code}\n-> ")
    if guess == "exit":
        print("Goodbye!")
        return
    if guess.upper() == random_string:
        print("Correct!")
    else:
        print(f"Incorrect! The correct answer was {random_string}")
    input("Press enter to continue...")
    time.sleep(2)

while True:
    print("Welcome to the Morse Code Game!")
    time.sleep(1)
    main()