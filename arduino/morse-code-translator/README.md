# 🔠 | Morse Code Translator

This is a Morse Code Translator built using an Arduino and an LCD display. It allows you to select letters, form a string, and transcribe it into Morse code with visual and audio feedback.

## 📋 Requirements

- Arduino board
- LCD display with I2C interface
- Buzzer
- Push buttons (4)
- Controller stick
- Connecting wires

## 📝 How to Use

### 1. Clone the Repository

Download the repository archive (.zip) and extract it or use `git`:

```shell
git clone https://github.com/yourusername/morse-code-translator

cd morse-code-translator
```

### 2. Hardware Setup

Follow the wiring instructions in the progress folder.

### 3. Software Setup

- Open the Arduino IDE.
- Install the LiquidCrystal_I2C library via the Library Manager.
- Open the morse_code_translator.ino file in the Arduino IDE.
- Upload the code to your Arduino board.

### 4. Operation

- Use the controller stick to scroll through the alphabet.
- Press the select button to add the current letter to your string.
- Press the reset button to clear the string.
- Press the transcribe button to convert the string to Morse code, displayed on the LCD and played through the buzzer.
- Press the remove button to delete the last character in the string.
### 💡 Features

- Scroll through the alphabet using a controller stick.
- Form a string by selecting letters.
- Transcribe the string into Morse code with audio and visual feedback.
- For detailed wiring, check the progress folder in the repository.