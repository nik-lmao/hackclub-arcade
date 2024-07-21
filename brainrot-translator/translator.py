import random
import os

def load_words(filename):
    with open(filename, 'r') as file:
        return set(line.strip().lower() for line in file)


nouns = load_words('nouns.txt')
adjectives = load_words('adjectives.txt')
verbs = load_words('verbs.txt')

brainrotNouns = load_words("nouns-brainrot.txt")
brainrotAdjectives = load_words("adjectives-brainrot.txt")
brainrotVerbs = load_words("verbs-brainrot.txt")

def brainrot(message):
    words = message.split()
    brainrotted_message = []

    for word in words:
        word_lower = word.lower()
        
        if word_lower in nouns:
            brainrotted_message.append(random.choice(list(brainrotNouns)))

        
        elif word_lower in adjectives:
            brainrotted_message.append(random.choice(list(brainrotAdjectives)))

        
        elif word_lower in verbs:
            brainrotted_message.append(random.choice(list(brainrotVerbs)))

        else:
            brainrotted_message.append(word)

    return ' '.join(brainrotted_message)

message = input("Enter a message: ")
os.system('cls' if os.name == 'nt' else 'clear')
brainrotted_message = brainrot(message)
print(brainrotted_message)
