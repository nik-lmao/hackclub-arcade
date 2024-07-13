import utime

import machine
from machine import I2C
from lcd_api import LcdApi
from pico_i2c_lcd import I2cLcd

I2C_ADDR = 0x27
I2C_NUM_ROWS = 4
I2C_NUM_COLS = 20

i2c = I2C(0, sda=machine.Pin(0), scl=machine.Pin(1), freq=400000)
lcd = I2cLcd(i2c, I2C_ADDR, I2C_NUM_ROWS, I2C_NUM_COLS)  
    
#custom
    
lcd.clear()

lcd.move_to(1,0)
lcd.putstr("Nikita Nikitin")
lcd.move_to(2,1)
lcd.putstr("gh @nik-lmao")
