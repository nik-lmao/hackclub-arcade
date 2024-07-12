import random


print("Welcome to the Random Username Generator with almost 30 million combinations possible.")
print("To exit the program, please type 'exit'")
print("")

with open("./adjectives.txt") as f:
  adjectives = f.read().splitlines()

with open("./nouns.txt") as f:
  nouns = f.read().splitlines()

while True:
  print(random.choice(adjectives) + random.choice(nouns) + str(random.randint(0, 100)))
  choice = input("=> ")
  if choice == "exit":
    exit()