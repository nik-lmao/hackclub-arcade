import utime
import ds3231
from machine import I2C, Pin


i2c_2 = I2C(1, sda=Pin(6), scl=Pin(7), freq=400000)
rtc = ds3231.DS3231(i2c_2)


rtc.save_time()


current_time = rtc.get_time()
print("Current Time:", current_time)