from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
import urllib.request

driver = webdriver.Chrome('./drivers/chromedriver')
driver.get("https://www.kiss-anime.ws")

""" 
driver.manage().timeouts().implicitly.Wait(30, TimeUnit.SECONDS); 
"""
time.sleep(8)

searchBar = driver.find_element_by_name('keyword')
searchBar.send_keys('naruto')
"""
searchBtn = driver.find_element_by_id('imgSearch')
searchBtn.click()
"""
searchBar.send_keys(Keys.RETURN)

time.sleep(4)

element = driver.find_element_by_xpath("//table[@class='listing']//a")
element.click()

time.sleep(4)

element = driver.find_element_by_xpath("//table[@class='listing']//a")
element.click()


time.sleep(4)

element = driver.find_element_by_id("playerChoose")
element.click()

time.sleep(4)

element = driver.find_element_by_xpath("//source[@type='video/mp4']")
video_url = element.get_property('src')
print(video_url)
#urllib.request.urlretrieve(video_url, 'video.mp4')
