import utime
import time

import machine
from machine import I2C, Pin
from lcd_api import LcdApi
from pico_i2c_lcd import I2cLcd

I2C_ADDR = 0x27
I2C_NUM_ROWS = 4
I2C_NUM_COLS = 20

i2c = I2C(0, sda=machine.Pin(0), scl=machine.Pin(1), freq=400000)
lcd = I2cLcd(i2c, I2C_ADDR, I2C_NUM_ROWS, I2C_NUM_COLS)

button = Pin(14, Pin.IN, Pin.PULL_UP)
    
#custom

def updateTime(line):
    current_time = time.localtime()
    
    lcd.move_to(2,line)

    string = "{:02}.{:02} - {:02}:{:02}".format(current_time[2], current_time[1], current_time[3], current_time[4])

    lcd.putstr(string)
    
lcd.clear()

lcd.move_to(1,0)
lcd.putstr("Nikita Nikitin")
lcd.move_to(2,1)
lcd.putstr("gh @nik-lmao")

time.sleep(2)

lcd.clear()

row = 0

lcd.custom_char(0, bytearray([
    0x00,
    0x04,
    0x0E,
    0x15,
    0x04,
    0x04,
    0x04,
    0x00]))

lcd.custom_char(1, bytearray([
    0x00,
    0x04,
    0x04,
    0x04,
    0x15,
    0x0E,
    0x04,
    0x00]))

lcd.move_to(0,0)
lcd.putchar(chr(0))
lcd.move_to(0,1)
lcd.putchar(chr(1))


while True:
    if button.value() == 0:
        row += 1
        
        if row > 10:
            updateTime(0)
            row = 0
            while button.value() == 0:
                time.sleep(0.1)
    else:
        if 0 < row <= 10:
            updateTime(1)
        row = 0
    
    time.sleep(0.1)