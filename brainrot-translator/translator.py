import random

def load_words(filename):
    with open(filename, 'r') as file:
        return set(line.strip().lower() for line in file)


nouns = load_words('nouns.txt')
adjectives = load_words('adjectives.txt')
verbs = load_words('verbs.txt')

def brainrot(message):
    words = message.split()
    brainrotted_message = []

    for word in words:
        word_lower = word.lower()
        
        if word_lower in nouns:
            brainrotted_message.append("sigma")

        
        elif word_lower in adjectives:
            brainrotted_message.append("rizzed")

        
        elif word_lower in verbs:
            brainrotted_message.append("rizz")

        else:
            brainrotted_message.append(word)

    return ' '.join(brainrotted_message)

message = input("Enter a message: ")
brainrotted_message = brainrot(message)
print(brainrotted_message)
