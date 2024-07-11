import string

def count_sentences(text):
  sentences = text.split('.')
  sentences += text.split('!')
  sentences += text.split('?')
  sentences = [s for s in sentences if s.strip()]
  return len(sentences)

def count_characters(text):
  return len(text.replace(" ", ""))
def count_characters_no_spaces(text):
  return len(text)

def count_unique_words(text):
  words = text.split()
  words = [word.strip(string.punctuation).lower() for word in words]
  unique_words = set(words)
  return len(unique_words)

def main():
  print("Welcome to the Word Counter!")
  print("Please enter your text:")

  text = input()

  if text.strip() == "":
    print("You didn't enter any text! Please try again.")
    return

  word_count = len(text.split())
  sentence_count = count_sentences(text)
  character_count = count_characters(text)
  character_including_spaces_count = count_characters_no_spaces(text)
  unique_word_count = count_unique_words(text)

  print("\nResults:")
  print(f"Words: {word_count}")
  print(f"Sentences: {sentence_count}")
  print(f"Characters (excluding spaces): {character_count}")
  print(f"Characters (including spaces): {character_including_spaces_count}")
  print(f"Unique words: {unique_word_count}")

if __name__ == "__main__":
  while True:
    main()
    print("\nDo you want to count again? (y/n)")
    choice = input().lower()
    if choice != "y":
      break