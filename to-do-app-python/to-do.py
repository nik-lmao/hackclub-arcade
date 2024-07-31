import os
import json

todo_list = []

def main():
    while True:
        os.system("clear")
        print("\nTo-Do App")
        print("1. Add To-Do")
        print("2. View To-Do List")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            add_todo()
        elif choice == '2':
            view_todos()
        elif choice == '3':
            break
        else:
            print("Invalid choice, please try again.")

        input("Press enter to continue...")

def add_todo():
    task = input("Enter the task: ")
    todo_list.append(task)
    print("Task added successfully.")

def view_todos():
    print("\nTo-Do List:")
    for idx, task in enumerate(todo_list, 1):
        print(f"{idx}. {task}")

if __name__ == "__main__":
    main()