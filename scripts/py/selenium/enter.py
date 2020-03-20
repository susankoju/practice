from pynput.keyboard import Key, Listener
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome('./drivers/chromedriver')
driver.get("file:///home/luser/Desktop/Folder/practice/scripts/py/selenium/enter.html")



def on_press(key):
    key_press = key
    print(key)
    if key_press == Key.esc:
        exit(0)
    if key_press == Key.enter:
        try:
            submit = driver.find_element_by_id('btn')
            submit.send_keys(Keys.RETURN)
        except Exception:
            driver.refresh()



time.sleep(0)
with Listener(on_press=on_press) as listener:
    listener.join()
    
    
