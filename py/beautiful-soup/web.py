import urllib3
from bs4 import BeautifulSoup

http = urllib3.PoolManager()

response = http.request('GET', 'https://hamrobazaar.com/')

soup = BeautifulSoup(response.data, 'html.parser')

links = soup.find_all('a')

for link in links:
    #if 'Phone' in str(link).lower():
    link['href']
