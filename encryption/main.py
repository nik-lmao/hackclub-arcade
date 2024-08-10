# I used the following code snippet to better understand the encryption and decryption of text with the Vigenère Cipher:
# https://de.wikipedia.org/wiki/Vigenère-Chiffre#Programmierung

# ChatGPT analised this code:
# https://chatgpt.com/share/8cf7edeb-d018-4dbb-a92d-bbad218ec147

def encrypt(plain_text, key):
  encrypted_text = []
  key_length = len(key)

  for i, char in enumerate(plain_text):
      shift = int(key[i % key_length])
      encrypted_char = chr(((ord(char) - ord('a') + shift) % 26) + ord('a'))
      encrypted_text.append(encrypted_char)

  return ''.join(encrypted_text)


def decrypt(cipher_text, key):
  decrypted_text = []
  key_length = len(key)

  for i, char in enumerate(cipher_text):
      shift = int(key[i % key_length])
      decrypted_char = chr(((ord(char) - ord('a') - shift) % 26) + ord('a'))
      decrypted_text.append(decrypted_char)

  return ''.join(decrypted_text)


# Example usage:
plain_text = "hello"
key = "1234"
cipher_text = encrypt(plain_text, key)
decrypted_text = decrypt(cipher_text, key)

print(f"Plain Text: {plain_text}")
print(f"Cipher Text: {cipher_text}")
print(f"Decrypted Text: {decrypted_text}")