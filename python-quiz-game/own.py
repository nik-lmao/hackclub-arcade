import json
import os


if not os.path.exists("questions.json"):
    with open("questions.json", "w") as file:
        json.dump({"questions": []}, file)

while True:
    option = input("Would you like to create a new question? (yes/no) ")

    if option.lower() == "yes":
        question = input("Enter the question: ")
        answer = input("Enter the answer: ")

        with open("questions.json", "r") as file:
            data = json.load(file)

        data["questions"].append({"question": question, "answer": answer})

        with open("questions.json", "w") as file:
            json.dump(data, file, indent=4)

        print("Question added successfully.")
        continue
    elif option.lower() == "no":
        break
    else:
        print("Please enter yes or no.")
        continue

print("Thank you for using the quiz game.")
