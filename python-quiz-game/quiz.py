import random
import time
import os

questions = [
    {
        "question": "What is the capital of France?",
        "answer": "Paris"
    },

    {
        "question": "What is the capital of Spain?",
        "answer": "Madrid"
    },

    {
        "question": "What is the capital of Italy?",
        "answer": "Rome"
    }
]

score = 0

while True:
    question_count = int(input("How many questions would you like? "))
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
    


count = 0

os.system("clear" if os.name == "posix" else "cls")

while count < question_count:
    question = random.choice(questions)

    print(question["question"])

    user_answer = input("Enter your answer: ")

    if user_answer.lower() == question["answer"].lower():
        score += 1
        print(f"Correct! The answer is {question['answer']}. Your score is {score}")
    else:
        print(f"Wrong! The answer is {question['answer']}. Your score is {score}")

    questions.remove(question)       

    os.system("clear" if os.name == "posix" else "cls")