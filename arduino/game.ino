#include <LiquidCrystal_I2C.h>

#define I2C_ADDR 0x27
#define LCD_COLUMNS 20
#define LCD_LINES 4
LiquidCrystal_I2C lcd(I2C_ADDR, LCD_COLUMNS, LCD_LINES);

#define VERT_PIN A0
#define SEL_PIN 2

const int ledPin = 9;
const int buttonPin = 3;

byte carChar[] = {
  B00000,
  B00000,
  B01101,
  B11111,
  B11111,
  B01101,
  B00000,
  B00000
};

byte boxChar[] = {
  B00000,
  B00000,
  B00110,
  B11001,
  B11001,
  B00110,
  B00000,
  B00000
};

int score = 0;

int carPos = LCD_LINES / 2;
char obstacles[LCD_LINES][LCD_COLUMNS];
char displayBuffer[LCD_LINES][LCD_COLUMNS];

void setup() {
  lcd.init();
  lcd.createChar(0, carChar);
  lcd.createChar(1, boxChar);
  lcd.backlight();

  pinMode(VERT_PIN, INPUT);
  pinMode(SEL_PIN, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);

  for (int i = 0; i < LCD_LINES; i++) {
    for (int j = 0; j < LCD_COLUMNS; j++) {
      obstacles[i][j] = ' ';
      displayBuffer[i][j] = ' ';
    }
  }

  lcd.setCursor(0, 0);
  lcd.print("Hello, World!");
  delay(2000);
  lcd.clear();
}

void generateObstacle() {
  int row = random(0, LCD_LINES);
  for (int col = LCD_COLUMNS - 1; col > 0; col--) {
    obstacles[row][col] = obstacles[row][col - 1];
  }
  obstacles[row][0] = random(0, 2) == 0 ? ' ' : 1;
}

void updateObstacles() {
  for (int i = 0; i < LCD_LINES; i++) {
    for (int j = LCD_COLUMNS - 1; j > 0; j--) {
      obstacles[i][j] = obstacles[i][j - 1];
    }
    obstacles[i][0] = ' ';
  }
}

void draw() {
  for (int i = 0; i < LCD_LINES; i++) {
    for (int j = 0; j < LCD_COLUMNS; j++) {
      char currentChar = obstacles[i][j];
      if (i == carPos && j == LCD_COLUMNS - 1) {
        currentChar = 0;
      } else if (currentChar == 1) {
        currentChar = 1;
      } else {
        currentChar = ' ';
      }

      if (displayBuffer[i][j] != currentChar) {
        lcd.setCursor(j, i);
        lcd.write(currentChar); 
        displayBuffer[i][j] = currentChar;
      }
    }
  }
}

void loop() {
  // Empty loop for now
}
