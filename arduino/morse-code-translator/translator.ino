#include <LiquidCrystal_I2C.h>

#define I2C_ADDR 0x27
#define LCD_COLUMNS 20
#define LCD_LINES 4
LiquidCrystal_I2C lcd(I2C_ADDR, LCD_COLUMNS, LCD_LINES);

#define VERT_PIN A0
#define SEL_PIN 2

const int ledPin = 9;
const int buttonPin = 3;
const int buttonPin2 = 4;
const int buzzerPin = 10;



void setup() {
  lcd.init();
  lcd.backlight();
  lcd.clear();

  pinMode(VERT_PIN, INPUT);
  pinMode(SEL_PIN, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(buttonPin2, INPUT_PULLUP);
  pinMode(buzzerPin, OUTPUT);

  lcd.setCursor(0, 0);
  updateLCD();
}

void loop() {
  // do everything here
  tone(buzzerPin, 1000, dashDuration);
  delay(1000);
  noTone(buzzerPin);
}