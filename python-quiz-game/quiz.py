import random
import time
import os
import json
from fuzzywuzzy import fuzz

while True:
    question_type = input("Would you like to play the default quiz game? ")
    if question_type.lower() == "yes":
        path = "./default.json"
        break
    elif question_type.lower() == "no":
        path = "./questions.json"
        break
    else:
        print("Please enter yes or no.")
        continue

with open(path, "r") as file:
    data = json.load(file)

questions = data["questions"]

score = 0

while True:
    try:
        question_count = int(input(f"How many questions would you like? There are {len(questions)} questions available: "))
        if question_count > len(questions):
            os.system("clear" if os.name == "posix" else "cls")
            print(f"Sorry, we only have {len(questions)} questions available.")
            continue

        if question_count < 1:
            os.system("clear" if os.name == "posix" else "cls")
            print("Please enter a valid number.")
            continue
        else:
            break
    except ValueError:
        os.system("clear" if os.name == "posix" else "cls")
        print("Please enter a valid number.")
        continue

random.shuffle(questions)
selected_questions = questions[:question_count]

os.system("clear" if os.name == "posix" else "cls")

for count in range(question_count):
    question = selected_questions[count]

    print(question["question"])

    user_answer = input("Enter your answer: ")

    user_answer_normalized = user_answer.strip().lower()
    correct_answer_normalized = question["answer"].strip().lower()

    similarity = fuzz.ratio(user_answer_normalized, correct_answer_normalized)

    if similarity >= 80:
        score += 1
        print(f"Correct! The answer is {question['answer']}. Your score is {score}")
    else:
        print(f"Wrong! The answer is {question['answer']}. Your score is {score}")

    time.sleep(1)
    os.system("clear" if os.name == "posix" else "cls")

print(f"Quiz finished! Your final score is {score} out of {question_count}")
