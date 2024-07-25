import random

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
    random_string = ''.join(random.choices(alphabet, k=5))
    morse_code = morse_code_translator(random_string)

    guess = input(f"Enter the translation for {morse_code}: ")
    if guess == "exit":
        print("Goodbye!")
        return
    if guess.upper() == random_string:
        print("Correct!")
    else:
        print(f"Incorrect! The correct answer was {random_string}")

while True:
    main()