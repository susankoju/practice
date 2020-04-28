
list_to_select = ["CSS", "JavaScript", "PHP"]
waitTime = 10

def select_cur(dir):
    global current
    if current == None:
        current = list_to_select[0]
    if dir == 1 & list_to_select.index(current) > 0:
        p = -1
    elif dir == 0 & list_to_select.index(current) < len(list_to_select) - 1:
        p = 1
    else:
        p = 0
    if 1:
        for i in list_to_select:
            if i == current:
                print("Index of i:"+str(list_to_select.index(i))+",p:"+str(p))
                current = list_to_select[list_to_select.index(i)+(p)]
                break
    print("current:"+current)
    return current

from selenium import webdriver
from pynput.keyboard import Key, Listener
import time
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome('./drivers/chromedriver')
driver.get("file:///home/luser/Desktop/Folder/practice/scripts/py/selenium/select.html")

time.sleep(waitTime)

select = driver.find_element_by_xpath("//select[@id='nRole']")
options = select.find_elements_by_tag_name("option")

def makeSelect():
    global current
    for i in options:
        if(str(i.text) == str(current)):
            i.click()
        else:
            print(str(i.text)+":"+str(current))

def on_press(key):
    key_press = key
    if key_press == Key.esc:
        select_cur(1)
    if key_press == Key.enter:
        time.sleep(waitTime)
        select_cur(0)
    makeSelect()

with Listener(on_press=on_press) as listener:
    listener.join()
    

current = None
select_cur(1)
makeSelect()
