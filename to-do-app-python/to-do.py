# todo.py

todo_list = []

def main():
    while True:
        print("\nTo-Do App")
        print("1. Add To-Do")
        print("2. View To-Do List")
        print("3. Remove To-Do")
        print("4. Mark To-Do as Completed")
        print("5. Exit")
        choice = input("Enter your choice: ")
        
        if choice == '1':
            add_todo()
        elif choice == '2':
            view_todos()
        elif choice == '3':
            remove_todo()
        elif choice == '4':
            mark_completed()
        elif choice == '5':
            break
        else:
            print("Invalid choice, please try again.")

def add_todo():
    task = input("Enter the task: ")
    todo_list.append({"task": task, "completed": False})
    print("Task added successfully.")

def view_todos():
    print("\nTo-Do List:")
    for idx, todo in enumerate(todo_list, 1):
        status = "Completed" if todo["completed"] else "Not Completed"
        print(f"{idx}. {todo['task']} - {status}")

def remove_todo():
    view_todos()
    try:
        task_num = int(input("Enter the number of the task to remove: "))
        if 1 <= task_num <= len(todo_list):
            removed_task = todo_list.pop(task_num - 1)
            print(f"Task '{removed_task['task']}' removed successfully.")
        else:
            print("Invalid task number.")
    except ValueError:
        print("Please enter a valid number.")

def mark_completed():
    view_todos()
    try:
        task_num = int(input("Enter the number of the task to mark as completed: "))
        if 1 <= task_num <= len(todo_list):
            todo_list[task_num - 1]["completed"] = True
            print(f"Task '{todo_list[task_num - 1]['task']}' marked as completed.")
        else:
            print("Invalid task number.")
    except ValueError:
        print("Please enter a valid number.")

if __name__ == "__main__":
    main()